import React from 'react';
import { Paper, Grid, Input } from '@material-ui/core';
import MaterialButton from '@material-ui/core/Button'; 
import Edit from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import Clear from '@material-ui/icons/Clear';
import Add from '@material-ui/icons/Add';
import Delete from '@material-ui/icons/Delete';
import { Title, Description, Price, Container, TextHeaders, Button } from './elements';

const MenuItem = ({
  id,
  title,
  description,
  cat,
  price,
  isEditing,
  editingItemId,
  values,
  isLoading,
  onClickEdit,
  onClickAdd,
  onChangeFields,
  onClickDelete,
  onClickSave
}) => (
  <Paper>
    <Container>
      {(!isEditing || editingItemId !== id) ? 
        <Button onClick={onClickEdit(true, id)}>{id !== cat ? <Edit /> : <Add />}</Button>
      :
      editingItemId !== cat && <Button onClick={onClickDelete}><Delete /></Button>
      }

      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <TextHeaders>Titulo</TextHeaders>
          </Grid>
          <Grid item xs={12}>
            <Title><Input placeholder={id !== cat ? '' : 'Añade un nuevo producto'} value={isEditing && editingItemId === id ? values && values.title : title} onChange={onChangeFields('title')} disabled={!isEditing || editingItemId !== id} fullWidth required /></Title>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <TextHeaders>Descripción</TextHeaders>
          </Grid>
          <Grid item xs={12}>
            <Description><Input value={isEditing && editingItemId === id ? values && values.description : description} onChange={onChangeFields('description')} disabled={!isEditing || editingItemId !== id} fullWidth/></Description>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <TextHeaders>Precio</TextHeaders>
          </Grid>
          <Grid item xs={12}>
            <Price><Input type="number" value={isEditing && editingItemId === id ? values && values.price : price} onChange={onChangeFields('price')} disabled={!isEditing || editingItemId !== id} fullWidth/></Price>
          </Grid>
        </Grid>{isEditing && editingItemId === id &&
        <Grid item container xs={12} style={{marginTop: 10}}>
          <Grid item xs={4}>
            <MaterialButton variant="contained" color="secondary" size="small" onClick={onClickEdit(false, '')} disabled={isLoading}>
              <Clear />
                Cancelar
            </MaterialButton>
          </Grid>
          <Grid item xs={4}>
            <MaterialButton variant="contained" size="small" disabled={isLoading} onClick={id !== cat ? onClickSave : onClickAdd}>
              <SaveIcon />
              {id !== cat ? 'Guardar' : 'Añadir'}
            </MaterialButton>
          </Grid>
        <Grid/>
      </Grid>}
      </Grid>
    </Container>
  </Paper>
);

export default MenuItem;