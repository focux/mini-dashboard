const router = require('express').Router();
const { Text } = require('../models/text');

router.get('/', async (req, res) => {
  const error = 'Hubo un error al procesar su solicitud. Intente nuevamente.';
  try {
    const text = await Text.find({});
    return res.status(200).send({ text });
  } catch (e) {
    return res.status(400).send({ error });
  }
})

router.patch('/:id', (req, res) => {

});

module.exports = router;