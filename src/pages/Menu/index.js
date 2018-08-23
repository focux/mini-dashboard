import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import CustomTabBar from '../../components/CustomTabBar';
import MenuService from '../../services/menu';
import MenuList from '../../components/MenuList';
import { Content } from './elements';

export default class Menu extends Component {
  state = {
    value: 0,
    sections: [
      'Bebidas',
      'Entradas',
      'Alitas',
      'Sopas',
      'Side salads',
      'Cortes de carne',
      'Pollo',
      'Sizzling',
      'Costillas',
      'Pastas',
      'Ensaladas',
      'Pescado',
      'All-in-burgers',
      'Real burgers',
      'Postres',
      'Sandwiches'
    ],
    menu: [],
    isEditing: false,
    editingItemId: '',
    fieldsValues: {}
  };

  async componentDidMount() {
    this.props.setLoading(true);
    const response = await MenuService.fetchAll();
    if (response.status === 200) {
      this.setState({
        menu: response.menu
      }, () => this.props.setLoading(false));
    }
    this.props.setLoading(false)
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

  onClickEdit = (state, editingItemId) => (e) => this.setState((prevState) => {
    let fieldsValues;
    const filteredValues = MenuService.filterById(this.state.menu, editingItemId);
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

  onClickAdd = async () => {
    const { fieldsValues, sections, value } = this.state;
    if (fieldsValues && fieldsValues.title !== '') {
      this.props.setLoading(true);
      const response = await MenuService.create({
        category: sections[value].toLowerCase(),
        title: fieldsValues.title,
        description: fieldsValues.description,
        price: fieldsValues.price
      });
      console.log(response, 'LA RES')
      if (response.status === 200) {
        this.setState((prevState) => {
          return ({
            menu: [response.menu, ...prevState.menu],
            fieldsValues: {},
            isEditing: false
          })
        }, () => this.props.setLoading(false))
      } else {
        this.props.setLoading(false);
      }
    } else {
      this.props.setLoading(false);
    }
  }

  onClickDelete = async () => {
    const { editingItemId } = this.state;
    this.props.setLoading(true);
    const response = await MenuService.delete(editingItemId);
    if (response.status === 200) {
      this.setState((prevState) => {
        const newMenu = prevState.menu.filter((v) => v._id !== editingItemId);
        return ({
          menu: newMenu
        });
      }, () => this.props.setLoading(false))
    }
  }

  onClickSave = async () => {
    const { editingItemId, fieldsValues } = this.state;
    if (fieldsValues && fieldsValues.title !== '') {
      this.props.setLoading(true);
      const response = await MenuService.update(editingItemId, fieldsValues);
      console.log('Respuesta', response)
      if (response.status === 200) {
        this.setState((prevState) => {
          const newMenu = prevState.menu.map((v) => {
            if (v._id === editingItemId) {
              return {...v, ...fieldsValues}
            }
            return v;
          });
          return ({
            menu: newMenu,
            isEditing: false
          });
        }, () => this.props.setLoading(false))
      }
      this.props.setLoading(false)
    }
  }

  newMenuCard = (cat) => ({
    category: cat,
    title: '',
    price: '',
    description: '',
    _id: cat
  });

  render () {
    const { value, sections, menu, isEditing, fieldsValues, editingItemId } = this.state;
    const newMenu = MenuService.filterByCat(menu, sections[value].toLowerCase());
    newMenu.unshift(this.newMenuCard(sections[value].toLowerCase()));
    return (
      <Grid container style={{ height: '100%' }}>
        <CustomTabBar
          value={value}
          onChange={this.handleChange}
          tabs={sections}
        />
        <Content>
          <MenuList
            menu={newMenu}
            onClickEdit={this.onClickEdit}
            onChangeFields={this.onChangeFields}
            onClickAdd={this.onClickAdd}
            onClickDelete={this.onClickDelete}
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