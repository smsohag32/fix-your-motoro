const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DB_URI;
console.log(uri);
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
dbConnect();

async function dbConnect() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
  } finally {
  }
}

export default client;
