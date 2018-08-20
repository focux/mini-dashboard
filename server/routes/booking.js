const router = require('express').Router();
const { Booking } = require('../models/booking');

router.post('/', async (req, res) => {
  const error = 'Hubo un problema al hacer la reserva, favor intente nuevamente.';
  const { fullName, telephone, email } = req.body;
  if (req.body && telephone && email) {
    const newBooking = new Booking({
      fullName, telephone, email
    });
    try {
      const booking = await newBooking.save();
      return res.status(200).send({ booking });
    } catch (e) {
      return res.status(400).send({ error });
    }
  }
});

router.get('/', async (req, res) => {
  const { _id } = req.user;
  if (req.user && _id) {
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