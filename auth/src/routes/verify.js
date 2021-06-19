const express = require('express');
const { Op } = require('sequelize');
const UserClient = require('../models/userClient');

const middlware = require('../../middleware/index');

const router = express.Router();
router.use(middlware);

router.put('/verification/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserClient.findOne({
      where: {
        [Op.and]: [{ id }, { token: req.headers.token }],
      },
    });
    return res.status(200).send({ mensage: 'usuario autorizado', user: user.id });
  } catch (e) {
    return res.status(400).send({ error: 'algo deu errado', e });
  }
});

module.exports = (app) => app.use('/v', router);
