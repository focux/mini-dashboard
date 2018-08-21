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
    images: []
  };

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

  currentImages = () => {
    const { images, sections, value } = this.state;
    return images.filter((v) => v.section.toLowerCase() === sections[value].toLowerCase());
  }

  render() {
    const { value, sections, images } = this.state;
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
    <Grid item xs={10} style={{overflow: 'scroll', marginBottom: 50}}>
      <ImageGrid data={this.currentImages()} />
    </Grid>
    </Content>
  </Container>
    )
  }
}