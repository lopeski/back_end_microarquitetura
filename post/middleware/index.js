const axios = require('axios').default;
const jwt = require('jsonwebtoken');
const key = require('../secret/authSecret.json');

function newTokenADM(params = {}) {
  return jwt.sign({ params }, key.secret, {
    expiresIn: '1000',
  });
}

module.exports = (req, res, next) => {
  axios({
    method: 'put',
    url: `localhost:3000/autentication/verification/${req.body.id}`,
    timeout: 1000,
    headers: {
      authorization: newTokenADM('batata', 'amendoim'),
      token: req.body.token,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return next();
      }
      return res.status(401).send({ error: 'Token invalid' });
    })
    .catch((err) => res.status(401).send({ error: 'Token invalid', err }));
};
