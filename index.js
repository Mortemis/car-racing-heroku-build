const express = require('express');

const app = express();
console.log(__dirname);
app.use(express.static(__dirname + '/car-racing'));

app.listen(process.env.PORT || 80);