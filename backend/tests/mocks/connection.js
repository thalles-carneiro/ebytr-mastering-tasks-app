const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const getConnection = async () => {
  try {
    const DB_SERVER = await MongoMemoryServer.create();
    const DB_URI = DB_SERVER.getUri();

    const conn = await mongoose.connect(DB_URI);
    return conn.connection;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = {
  getConnection,
};
