import PlayerList from "./PlayerList";
import {useEffect, useState} from 'react';
import {faker} from '@faker-js/faker';

function Players() {
    const [players, setPlayers] = useState([]);
    
    const fetchPlayers = async () => {

        setPlayers([...Array(5)].map(i => {
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
        }));
    }
    useEffect(() => {
        fetchPlayers();
    }, [])
    
    return (
       <PlayerList players = {players}/>
    )
}

export default Players