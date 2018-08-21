import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Container } from './elements';

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

const apiExample = {
  home: [],
  menu: [],

}

export default class Settings extends Component {
  state = {
    value: 0,
    sections: [
      'Inicio',
      'Menu',
      'Promociones',
      'Reservaciones'
    ]
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value, sections } = this.state;
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
  </Container>
    )
  }
}

// const Settings = () => (
//   <Container>
//     <Tabs
//       value={value}
//       onChange={this.handleChange}
//     >
//       <Tab
//         disableRipple
//         label="Tab 1"
//       />
//       <Tab
//         disableRipple
//         label="Tab 2"
//       />
//       <Tab
//         disableRipple
//         label="Tab 3"
//       />
//     </Tabs>
//   </Container>
// );

// export default Settings;