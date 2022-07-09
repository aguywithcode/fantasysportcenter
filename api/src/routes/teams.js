import express from 'express';
import {faker} from '@faker-js/faker';
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  var teams = [...Array(5)].map(i => {
    var mascot = faker.animal.type();
    return {
      logoUrl: faker.image.imageUrl(300, 300,mascot, true),
      city: faker.address.city(),
      mascot: mascot
    }
  });
  res.send(teams);
});

export default router;