import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_ATLAS_URI as string;
const client = new MongoClient(uri);

async function pingMongoDB() {
  try {
    // Send a ping to confirm a successful connection
    await client.db().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
pingMongoDB().catch(console.dir);
