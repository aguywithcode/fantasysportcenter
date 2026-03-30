import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col'
import './App.css';
import TeamCard from './TeamCard';

function TeamList(props) {
    const teams = props.teams;
    // Group teams by conference, then division
    const conferences = {};
    teams.forEach(team => {
        if (!conferences[team.Conference]) {
            conferences[team.Conference] = {};
        }
        if (!conferences[team.Conference][team.Division]) {
            conferences[team.Conference][team.Division] = [];
        }
        conferences[team.Conference][team.Division].push(team);
    });

    return (
        <Container>
            <Row>
                {Object.keys(conferences).sort().map(conference => (
                    <Col key={conference} md={6} style={{ marginBottom: '2rem' }}>
                        <h3 style={{ margin: '1rem 0' }}>{conference}</h3>
                        {Object.keys(conferences[conference]).sort().map(division => (
                            <div key={division} style={{ marginBottom: '1.5rem' }}>
                                <h4 style={{ margin: '0.5rem 0' }}>{division}</h4>
                                <Row>
                                    {conferences[conference][division].map(team => (
                                        <TeamCard key={team._id || team.Name} team={team} />
                                    ))}
                                </Row>
                            </div>
                        ))}
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default TeamList;
