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

router.patch('/:id', async (req, res) => {
  console.log('ID', req.params.id)
  console.log('Body', req.body)
  const sendError = () => res.status(400).send({ error: 'Hubo un error al procesar su solicitud. Intente nuevamente.'});
  if (req.body && req.params && req.params.id) {
    const { id } = req.params;
    const newObject = {...req.body};
    try {
     const text = await Text.findByIdAndUpdate(id, {
        $set: newObject
      }, { new: true });
      res.status(200).send({ text });
    } catch (e) {
      return sendError()
    }
  }
  return sendError()
});

module.exports = router;