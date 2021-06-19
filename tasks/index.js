const express = require('express');

const app = express();

app.listen(process.env.PORT || 3003, function () {
  console.log('Auth rodando na porta %d in %S', this.address().port, app.settings.env);
});
