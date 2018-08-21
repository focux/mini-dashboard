import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Container, Content } from './elements';
import Images from '../../services/images';
import { Grid } from '@material-ui/core';
import ImageGrid from '../../components/ImageGrid';

/* ENDPOINTS */

/* 
GET /images -> Get all images
GET /images/:section -> Get all images for :section
POST /images -> Upload new image

Image model

{
  _id: ObjectID,
  name: String,
  url: String,
  section: inicio | menu | promociones | reservaciones
}
*/

export default class Settings extends Component {
  state = {
    value: 0,
    sections: [
      'Inicio',
      'Menu',
      'Promociones',
      'Reservaciones'
    ],
    images: [],
    isUploading: false,
    clickedImgId: '',
    file: ''
  };

  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  async componentDidMount() {
    this.props.setLoading(true);
    const response = await Images.fetchAll();
    if (response.status === 200) {
      console.log(response);
      this.setState({
        images: response.images
      }, () => this.props.setLoading(false));
    } else {
      this.props.setLoading(false);
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleImageClick = (id) => () => {
    this.fileInput.current.click()
    this.setState({ clickedImgId: id });
  }

  handleImageSelected = async () => {
    if (this.fileInput.current.files.length > 0) {
      this.setState({ file: this.fileInput.current.files[0] });
      console.log(this.fileInput.current.files[0])
      this.setState({ isUploading: true })
      const { name } = this.getImageById(this.state.clickedImgId);
      const response = await Images.upload({ file: this.fileInput.current.files[0], id: this.state.clickedImgId, name });
      if (response.status === 200) this.updateImagesUrl(response.image.url);
      this.setState({ isUploading: false, file: '' })
    }
  }

  currentImages = () => {
    const { images, sections, value } = this.state;
    return images.filter((v) => v.section.toLowerCase() === sections[value].toLowerCase());
  }

  getImageById = (id) => this.state.images.filter((v) => v._id === this.state.clickedImgId)[0];

  updateImagesUrl = (url) => this.setState((prevState) => {
      const newArray = prevState.images.map((v) => {
        console.log(v);
        console.log(prevState.clickedImgId)
        if (v._id === prevState.clickedImgId) {
          console.log('ENCONTRADA')
          console.log(url)
          return {
            ...v,
            url
          };
        }
        return v
      });
      return {
        images: newArray
      }
    });

  render() {
    const { value, sections, isUploading, clickedImgId } = this.state;
    const tabStyles = {
      borderBottom: '1px solid rgba(0,0,0,.1)'
    };
    return (
  <Container>
    <Tabs
      value={value}
      onChange={this.handleChange}
      style={tabStyles}
      scrollButtons="on"
      scrollable
    >
      {sections.map((v, k) => 
        <Tab
          disableRipple
          label={v}
          key={k}
        />
      )}
    </Tabs>
    <Content>
    <input type="file" name="image-upload" accept="image/*" ref={this.fileInput} style={{display: 'none'}} onChange={this.handleImageSelected} />
    <Grid item xs={10} style={{overflow: 'scroll', marginBottom: 50}}>
      <ImageGrid
        data={this.currentImages()}
        onClick={this.handleImageClick}
        isUploading={isUploading}
        clickedImageId={clickedImgId}
      />
    </Grid>
    </Content>
  </Container>
    )
  }
}