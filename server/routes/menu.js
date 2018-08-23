const router = require('express').Router();
const { Menu } = require('../models/menu');

router.get('/', async (req, res) => {
  const error = 'Hubo un error al procesar su solicitud. Intente nuevamente.';
  try {
    const menu = await Menu.find({}).sort({ title: 1 });
    return res.status(200).send({ menu });
  } catch (e) {
    return res.status(400).send({ error });
  }
})

router.patch('/:id', async (req, res) => {
  const sendError = () => res.status(400).send({ error: 'Hubo un error al procesar su solicitud. Intente nuevamente.'});
  if (req.body && req.params && req.params.id) {
    const { id } = req.params;
    const newObject = {...req.body};
    try {
     const menu = await Menu.findByIdAndUpdate(id, {
        $set: newObject
      }, { new: true });
      res.status(200).send({ menu });
    } catch (e) {
      return sendError()
    }
  }
  return sendError()
});

router.post('/', async (req, res) => {
  const sendError = () => res.status(400).send({ error: 'Hubo un error al procesar su solicitud. Intente nuevamente.'});
  if (req.body && req.body.title && req.body.description && req.body.category && req.body.price) {
    const { title, description, category, price } = req.body;
    try {
      const menu = await new Menu({
        category, title, description, price
      }).save();
      return res.status(200).send({ menu });
    } catch (e) {
      return sendError();
    }
  }
  return sendError();
});

router.delete('/:id', async (req, res) => {
  const sendError = () => res.status(400).send({ error: 'Hubo un error al procesar su solicitud. Intente nuevamente.'});
  if (req.params && req.params.id) {
    const { id } = req.params;
    try {
      const menu = await Menu.findByIdAndRemove(id);
      return res.status(200).send({ menu });
    } catch (e) {
      return sendError();
    }
  }
  return sendError();
})

module.exports = router;