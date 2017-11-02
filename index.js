const express = require('express');
const app = express();

// Route Handler

// app = Express App to register this route handler with
// get = Request method
// / = Watch fo requests trying to access '/'
// req = Object representing the incoming request
// res = Object representing the outgoing response
// res.send({hi: 'there'}) = Immediately send JSON back to who ever made the request

app.get('/', (req, res) => {
  res.send({
    hi: 'HEEEELLLLOOOOOOOOO'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
