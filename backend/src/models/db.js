const mongoose = require('mongoose');

const { DB_URI } = process.env;

const connection = async () => {
  try {
    const conn = await mongoose.connect(DB_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = {
  connection,
};
