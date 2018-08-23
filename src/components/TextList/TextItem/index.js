import React from 'react';
import { Paper, Grid, Input } from '@material-ui/core';
import MaterialButton from '@material-ui/core/Button'; 
import Edit from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import Clear from '@material-ui/icons/Clear';
import { Text, Container, TextHeaders, Button } from './elements';

const TextItem = ({
  id,
  text,
  identifier,
  isEditing,
  editingItemId,
  values,
  isLoading,
  onClickEdit,
  onChangeFields,
  onClickSave
}) => (
  <Paper>
    <Container>
      {(!isEditing || editingItemId !== id) && 
        <Button onClick={onClickEdit(true, id)}><Edit /></Button>
      }

      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <TextHeaders>Texto: {identifier}</TextHeaders>
          </Grid>
          <Grid item xs={12}>
            <Text><Input value={isEditing && editingItemId === id ? (values && values.text) : text} onChange={onChangeFields('text')} disabled={!isEditing || editingItemId !== id} fullWidth required /></Text>
          </Grid>
        </Grid>
        {isEditing && editingItemId === id &&
        <Grid item container xs={12} style={{marginTop: 10}}>
          <Grid item xs={4}>
            <MaterialButton variant="contained" color="secondary" size="small" onClick={onClickEdit(false, '')} disabled={isLoading}>
              <Clear />
                Cancelar
            </MaterialButton>
          </Grid>
          <Grid item xs={4}>
            <MaterialButton variant="contained" size="small" disabled={isLoading} onClick={onClickSave}>
              <SaveIcon />
              Guardar
            </MaterialButton>
          </Grid>
        <Grid/>
      </Grid>}
      </Grid>
    </Container>
  </Paper>
);

export default TextItem;