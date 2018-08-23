import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const tabStyles = {
  borderBottom: '1px solid rgba(0,0,0,.1)',
  width: '100%'
};

const CustomTabBar = ({ tabs, value, onChange, ...others }) => (
  <Tabs
  value={value}
  onChange={onChange}
  style={tabStyles}
  scrollButtons="on"
  scrollable
  {...others}
>
  {tabs.map((v, k) => 
    <Tab
      disableRipple
      label={v}
      key={k}
    />
  )}
</Tabs>
);

export default CustomTabBar;
