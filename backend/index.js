const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const app = express();
const port = 5000;

// middleware
app.use(express.json());

// routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.get('/', (req, res) => {
  res.send('iNotebook backend is running');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});