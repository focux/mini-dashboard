const router = require('express').Router();
const { Booking } = require('../models/booking');

router.post('/', async (req, res) => {
  const error = 'Hubo un problema al hacer la reserva, favor intente nuevamente.';
  if (req.body && req.body.telephone && req.body.email && req.body.bookingDate) {
    const { fullName, telephone, email, bookingDate } = req.body;
    console.log(req.body.bookingDate, 'el body');
    const newBooking = new Booking({
      fullName, telephone, email, bookingDate
    });
    try {
      const booking = await newBooking.save();
      return res.status(200).send({ booking });
    } catch (e) {
      return res.status(400).send({ error });
    }
  }
  return res.status(400).send({ error });
});

router.get('/', async (req, res) => {
  console.log(req.user, 'hey');
  if (req.user && req.user._id) {
    const { _id } = req.user;
    try {
      const bookings = await Booking.find({});
      return res.status(200).send({ bookings });
    } catch (e) {
      return res.status(400).send({
        error: 'Hubo un error al obtener las reservaciones. Intente nuevamente.'
      })
    }
  } else {
    return res.status(403).send({
      error: 'Usted no se encuentra autenticado.'
    })
  }
});

module.exports = router;