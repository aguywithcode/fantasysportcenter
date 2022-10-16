import express from 'express';
import {MongoClient, ServerApiVersion} from 'mongodb';

var router = express.Router();

router.get('/', async function(req, res, next) {
    var uri = process.env.MONGODB_URI;
    var client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    var connection = await client.connect();
    var collection = connection.db("FSC-Dev").collection("Players");
    var players = await collection.find().toArray();
    res.send(players);
});

export default router;