import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Container } from './elements';
import bookingService from '../../services/booking';
import SectionTitle from '../../components/SectionTitle';
import BookingList from '../../components/BookingList';

export default class Booking extends Component {
  state = {
    bookings: []
  };

  async componentDidMount() {
    this.props.setLoading(true)
    const response = await bookingService.fetch();
    if (response.status === 200) {
      this.setState({
        bookings: response.bookings,
      }, () => {
        this.props.setLoading(false)
      });
    } else {
      this.props.setLoading(false)
    }
  }
  render () {
    const { bookings } = this.state;
    return (
      <Container>
        <Grid container style={{height: '100%'}}>
          <Grid item xs={12}>
            <SectionTitle>Reservas</SectionTitle>
          </Grid>
          <Grid item xs={12} style={{height: '100%'}}>
            <BookingList data={bookings}/>
          </Grid>
        </Grid>
      </Container>
    )
  }
}