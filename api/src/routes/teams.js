import express from 'express';
import {MongoClient, ServerApiVersion} from 'mongodb';
var router = express.Router();


/* GET home page. */
router.get('/', async function(req, res, next) {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  var connection = await client.connect();
  var collection = connection.db("FSC-Dev").collection("Teams");
  var teams = await collection.find().toArray();
  res.send(teams);
  client.close;
});

export default router;