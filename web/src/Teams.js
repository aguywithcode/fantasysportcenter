import './App.css';
import {useEffect, useState} from 'react';
import TeamList from './TeamList.js';
import {Container,Row, Col } from 'react-bootstrap';

function Teams() {
    const [teams, setTeams] = useState([]);

    const fetchTeams = async () => {
        try {
            const res = await fetch('/api/teams');
            const data = await res.json();
            console.log("Fetched teams data:", data);
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
        <Container  className="Team">
            <Row>
                <Col/>
                <Col xs={9}>
                    <header className="Team-header">
                        Fantasy SportsCenter Teams
                    </header>
                </Col>
            </Row>
            <Row>
                <Col />
                <Col xs={9}>
                    <TeamList teams={teams} />
                </Col>
            </Row>
        </Container>
    );
}

export default Teams;
