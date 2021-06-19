const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./src/routes/index')(app);


app.listen(process.env.PORT || 3001, function () {
  console.log('Auth rodando na porta %d in %S', this.address().port, app.settings.env);
});
