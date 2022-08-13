import './App.css';
import {useEffect, useState} from 'react';
import TeamList from './TeamList.js';

function Teams() {
    const [teams, setTeams] = useState([]);

    const fetchTeams = async () => {
        try {
            const res = await fetch('/teams');
            const data = await res.json();
            setTeams(data);
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchTeams();
    }, [])

    return (
        <div className="Team">
            <header className="Team-header">
            </header>
            <p>
                <TeamList teams={teams} />
            </p>
        </div>
    );
}

export default Teams;
