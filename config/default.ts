import "dotenv/config";

export default {
  PORT: 1337,
  dbUri: process.env.MONGO_URI,
  saltWorkFactor: 10,
};
