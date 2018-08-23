import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import { Content } from './elements';
import CustomTabBar from '../../components/CustomTabBar';
import TextList from '../../components/TextList';
import Text from '../../services/text';

export default class Texts extends Component {
  state = {
    value: 0,
    sections: ['Footer'],
    texts: [],
    fieldsValues: {},
    isEditing: false,
    editingItemId: '',
}

  async componentDidMount() {
    this.props.setLoading(true);
    const response = await Text.fetchAll();
    console.log('LA RES', response)
    if (response.status === 200) {
      this.setState({
        texts: response.text
      }, () => this.props.setLoading(false));
    } else {
      this.props.setLoading(false);
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  onChangeFields = (name) => (e) => {
    const currentVal = e.target.value;
    console.log(currentVal)
     this.setState((prevState) => {
       const newObject = {...prevState.fieldsValues}
       newObject[name] = currentVal;
       return ({
         fieldsValues: newObject
       });
     })
   }

   onClickSave = async () => {
    const { editingItemId, fieldsValues } = this.state;
    if (fieldsValues && fieldsValues.text !== '') {
      this.props.setLoading(true);
      const response = await Text.update(editingItemId, fieldsValues);
      console.log('Respuesta', response)
      if (response.status === 200) {
        this.setState((prevState) => {
          const newText = prevState.texts.map((v) => {
            if (v._id === editingItemId) {
              return {...v, ...fieldsValues}
            }
            return v;
          });
          return ({
            texts: newText,
            isEditing: false
          });
        }, () => this.props.setLoading(false))
      }
      this.props.setLoading(false)
    }
  }

   onClickEdit = (state, editingItemId) => (e) => this.setState((prevState) => {
    let fieldsValues;
    const filteredValues = Text.filterById(this.state.texts, editingItemId);
    if (fieldsValues && fieldsValues._id) {
      const { _id, ...fieldsValues } = filteredValues;
    } else {
      fieldsValues = filteredValues;
    }
    return ({
    isEditing: state,
    editingItemId: editingItemId,
    fieldsValues
  })
});

  render() {
    const { value, sections, texts, fieldsValues, isEditing, editingItemId } = this.state;
    return (
      <Grid container style={{ height: '100%' }}>
        <CustomTabBar
          value={value}
          onChange={this.handleChange}
          tabs={sections}
        />
        <Content>
          <TextList
            texts={Text.filterBySection(texts, sections[value].toLowerCase())}
            onClickEdit={this.onClickEdit}
            onChangeFields={this.onChangeFields}
            onClickSave={this.onClickSave}
            isEditing={isEditing}
            values={fieldsValues}
            editingItemId={editingItemId}
            isLoading={this.props.loading}
          />
        </Content>
      </Grid>
    )
  }
}