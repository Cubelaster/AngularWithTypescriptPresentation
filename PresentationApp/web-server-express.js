var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname);
var port = 8000;

app.use(express.static(rootPath));
app.listen(port);
console.log('This is the root path: ' + rootPath);
console.log('Express server running on port ' + port);