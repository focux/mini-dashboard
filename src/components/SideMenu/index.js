import React from 'react';
import { Grid } from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import Book from '@material-ui/icons/Book';
import Build from '@material-ui/icons/Build';
import Clear from '@material-ui/icons/Clear';
import Menu from '@material-ui/icons/ImportContacts';
import Receipt from '@material-ui/icons/Receipt';
import { Container, CustomNavLink, ListItem, List } from './elements';
import MenuItem from './MenuItem';

const menuLinks = [
  {
    name: 'Home',
    path: '/',
    icon: <Home />
  },
  {
    name: 'Reservas',
    path: '/booking',
    icon: <Book />
  },
  {
    name: 'Menu',
    path: '/menu',
    icon: <Menu />
  },
  {
    name: 'Textos',
    path: '/texts',
    icon: <Receipt />
  },
  {
    name: 'Personalizar',
    path: '/settings',
    icon: <Build />
  },
  {
    name: 'Cerrar Sesión',
    path: '/logout',
    icon: <Clear />
  }
];

const SideMenu = () => (
  <Container>
    <List>
    {
      menuLinks.map((v, k) => 
      <MenuItem
        path={v.path}
        icon={v.icon}
        name={v.name}
        key={k}
      />)
    }
    </List>
  </Container>
);

export default SideMenu;
