/**
 * Created by Gagan on 04-01-2017.
 */
var express = require('express');
var wagner = require('wagner-core');

require('./models')(wagner);

var app = express();
app.use('/api/v1', require('./api')(wagner));

app.listen(3330);
console.log('server is listening');