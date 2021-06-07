const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.use('/api/developers', require('./developers/developers'));

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
  console.log('Started the-developer-repository service');
});