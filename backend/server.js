require('dotenv').config();
const app = require('./src/app');

const { PORT = 3001 } = process.env;

app.listen(
  PORT,
  () => console.log(`Ebytr Mastering Tasks App running on port: ${PORT}`),
);
