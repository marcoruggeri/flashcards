const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>I love Treehouse!</h1>');
});

app.get('/hello', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.listen(3000, () => {
  console.log('server running on port 3000');
});
