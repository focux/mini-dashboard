import React from 'react';
import { Grid } from '@material-ui/core';
import MenuItem from './MenuItem';

const gridStyles = {
  height: '100%',
  overflowY: 'scroll',
  paddingBottom: 50
};

const MenuList = ({
  onClickEdit,
  onChangeFields,
  onClickDelete,
  onClickAdd,
  onClickSave,
  menu,
  isEditing,
  values,
  editingItemId,
  isLoading
}) => (
  <Grid container spacing={16} style={gridStyles}>
    {menu.map((v, k) => 
      <Grid item xs={6} key={k}>
          <MenuItem
          description={v.description}
          title={v.title}
          price={v.price}
          cat={v.category}
          id={v._id}
          isEditing={isEditing}
          editingItemId={editingItemId}
          values={values}
          isLoading={isLoading}
          onClickEdit={onClickEdit}
          onChangeFields={onChangeFields}
          onClickAdd={onClickAdd}
          onClickDelete={onClickDelete}
          onClickSave={onClickSave}
        />
      </Grid>
    )}
  </Grid>
);

export default MenuList;