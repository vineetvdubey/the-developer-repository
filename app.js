const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use('/api/developers', require('./developers/developers'));

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
  console.log('Started the-developer-repository service');
});
