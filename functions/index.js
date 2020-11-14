const functions = require('firebase-functions');

const express = require('express');

// Init app
const app = express();

// Automatically allow cross-origin requests
const cors = require('cors');
app.use(cors({ origin: true }));


app.get('/:id', (req, res) => {

  res.send({
    status: 'works'
  })

});

exports.route = functions.https.onRequest(app);