var express = require('express');
var app = express();

var nodeadmin = require('nodeadmin');
app.use(nodeadmin(app)); //here is where you add the middleware

app.listen(8080);
