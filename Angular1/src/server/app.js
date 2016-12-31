'use strict'

const express      = require('express');
const app          = express();
const bodyParser   = require('body-parser');
const routes       = require('./routes')(app);
const port         = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/', express.static('../src/client'));

app.listen(port, () => {
    console.log('Express server listening on port ' + port);
});
