import React from 'react';
import { Grid } from '@material-ui/core';
import TextItem from './TextItem';

const gridStyles = {
  height: '100%',
  overflowY: 'scroll',
  paddingBottom: 50
};

const TextList = ({
  onClickEdit,
  onChangeFields,
  onClickSave,
  texts,
  isEditing,
  values,
  editingItemId,
  isLoading
}) => (
  <Grid container spacing={16} style={gridStyles}>
    {texts.map((v, k) => 
      <Grid item xs={6} key={k}>
          <TextItem
          text={v.text}
          identifier={v.identifier}
          id={v._id}
          isEditing={isEditing}
          editingItemId={editingItemId}
          values={values}
          isLoading={isLoading}
          onClickEdit={onClickEdit}
          onChangeFields={onChangeFields}
          onClickSave={onClickSave}
        />
      </Grid>
    )}
  </Grid>
);

export default TextList;