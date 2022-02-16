const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const DB_NAME = 'MasteringTasksApp';
const OPTIONS = {
  dbName: DB_NAME,
};

const getConnection = async () => {
  try {
    const DB_SERVER = await MongoMemoryServer.create();
    const DB_URI = DB_SERVER.getUri();

    const connection = mongoose.createConnection(DB_URI, OPTIONS);
    return connection;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = {
  getConnection,
};
