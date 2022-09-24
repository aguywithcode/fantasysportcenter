import PlayerList from "./PlayerList";
import {useEffect, useState} from 'react';

function Players() {
    const [players, setPlayers] = useState([]);
    
    const fetchPlayers = async () => {
        try{
            const res = await fetch("/players");
            const data = await res.json();
            setPlayers(data);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        fetchPlayers();
    }, [])
    
    return (
       <PlayerList players = {players}/>
    )
}

export default Players