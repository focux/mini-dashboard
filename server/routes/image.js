const router = require('express').Router();
const { Image } = require('../models/image');

router.get('/:section?', async (req, res) => {
  const findValues = req.params.section ? { section: req.params.section } : {};

  try {
    const images = await Image.find(findValues).sort({ name: -1});
    return res.status(200).send({ images });
  } catch (e) {
    return res.status(400).send({
      error: 'Hubo un error al retornar las imagenes. Intente nuevamente.'
    });
  }
});

router.patch('/', async (req, res) => {
  const returnError = () => res.status(400).send({ error: 'Ha habido un error al procesar su peticion. Intente nuevamente.'});
  if (req.body && req.body.url && req.body.id) {
    const { url, id } = req.body;
    const newObject = { url }
    try {
      const image = await Image.findByIdAndUpdate(id, { $set: newObject }, { new: true });
      return res.status(200).send({ image });
    } catch (e) {
      return returnError();
    }
  }
  return returnError();
})

module.exports = router;