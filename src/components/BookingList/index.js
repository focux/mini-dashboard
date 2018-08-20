import React from 'react';
import BookingListItem from './BookingListItem';

const bookings = [
  {
    _id: 1,
    fullName: 'John Doe',
    telephone: '8093020750',
    email: 'john@doe.com',
    bookingDate: 1535176061000
  },{
    _id: 2,
    fullName: 'Mary Doe',
    telephone: '8095060270',
    email: 'mary@doe.com',
    bookingDate: 1535176061000
  },{
    _id: 3,
    fullName: 'Mary Doe',
    telephone: '8095060270',
    email: 'mary@doe.com',
    bookingDate: 1535176061000
  },{
    _id: 4,
    fullName: 'Mary Doe',
    telephone: '8095060270',
    email: 'mary@doe.com',
    bookingDate: 1535176061000
  }
];

const BookingList = ({ data }) => (
  <div style={{overflow: 'scroll', height: '100%', position: 'relative', paddingBottom: 25}}>
    {data.map((v) => 
      <BookingListItem
        fullName={v.fullName}
        telephone={v.telephone}
        bookingDate={v.bookingDate}
        email={v.email}
        key={v._id}
      />)}
  </div>
);

export default BookingList;
