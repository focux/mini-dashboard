import React from 'react';
import BookingListItem from './BookingListItem';

const BookingList = ({ data }) => (
  <div style={{overflow: 'scroll', height: '100%', position: 'relative', paddingBottom: 25}}>
    {data.map((v) => 
      <BookingListItem
        fullName={v.fullName}
        telephone={v.telephone}
        bookingDate={v.bookingDate}
        email={v.email}
        persons={v.persons}
        key={v._id}
      />)}
  </div>
);

export default BookingList;
