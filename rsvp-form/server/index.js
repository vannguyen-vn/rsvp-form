const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const rsvps = require('../database/controllers/rsvp.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/rsvps', (req, res) => {
  var params = req.body;
  rsvps.findRsvpAndUpdate(params)
    .then(() => {
      res.sendStatus(201);
      res.end();
    })
    .catch(err => res.send(err).status(500));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


