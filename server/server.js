const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || '3000';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../dist/')));

// app.use(function(req, res, next) {
//     const err = new Error('Not Found');
//     err.status = 404;
//     next(err);
//   });

app.listen(PORT, (err) => {
    console.log(new Date(), err || 'server listening on port '  + PORT);
});
  
  module.exports = app;