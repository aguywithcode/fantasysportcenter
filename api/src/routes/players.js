import express from 'express';
import {faker} from '@faker-js/faker';

var router = express.Router();

router.get('/', function(req, res, next) {
    var players = [...Array(5)].map(i => {
            return {
                HeadShotUrl: faker.internet.avatar(),
                FirstName: faker.name.firstName(),
                LastName: faker.name.lastName(),
                PlayerNumber: faker.datatype.number({ max: 99 }),
                Position: faker.helpers.arrayElement(
                    [
                        'point guard',
                        'shooting guard',
                        'center',
                        'small forward',
                        'power forward'
                    ]),
                Height: faker.datatype.number({ min: 65, max: 84 }),
                College: faker.company.companyName()
            }
        })

  res.send(players);
});

export default router;