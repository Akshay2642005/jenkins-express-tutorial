const express = require('express');
const app = express();
const port = 5050;

app.get('/', (_req, res) => {
  res.send('Hello World from Jenkins + Docker!');
});

app.get('/api/v1/status', (_req, res) => {
  res.send('Ok');
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

