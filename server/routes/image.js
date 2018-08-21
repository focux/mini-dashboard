const router = require('express').Router();
const { Image } = require('../models/image');

router.get('/:section?', async (req, res) => {
  const findValues = req.params.section ? { section: req.params.section } : {};

  try {
    const images = await Image.find(findValues);
    return res.status(200).send({ images });
  } catch (e) {
    return res.status(400).send({
      error: 'Hubo un error al retornar las imagenes. Intente nuevamente.'
    });
  }
});

module.exports = router;