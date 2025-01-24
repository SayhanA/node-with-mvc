const { MongoClient } = require("mongodb");

// user: node
// password: 8Pilq7SLLimY0Szs

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://node:aVE6U4ZPT4apEuk5@cluster0.u2hpa9s.mongodb.net"
  )
    .then((client) => {
      console.log("Database connected");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Database Found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;