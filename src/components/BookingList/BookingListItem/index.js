import React from 'react';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import { Container, SmallTitle } from './elements';

const BookingListItem = ({ fullName, telephone, bookingDate, email, id, persons }) => (
  <Container>
    <Grid container item xs={12} direction="column" spacing={8}>
    <Grid item xs={12}><SmallTitle>Información de Contacto</SmallTitle></Grid>
      <Grid item xs={12}>
        {fullName}
      </Grid>
      <Grid item xs={12}>
        {email} | {telephone}
      </Grid>
      <Grid item xs={12}>
        <SmallTitle>Cantidad de Personas</SmallTitle>
      </Grid>
      <Grid item xs={12}>
        {persons}
      </Grid>
      <Grid item xs={12}>
         <SmallTitle>Fecha de reserva:</SmallTitle>
      </Grid>
      <Grid item xs={12}>
        <span style={{textTransform: 'capitalize'}}>{moment(bookingDate*1000).locale('es').format('MMM DD YYYY')}</span>
      </Grid>
    </Grid>
  </Container>
);

export default BookingListItem;