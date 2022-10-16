import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './App.css';
import TeamCard from './TeamCard';

function TeamList(props) {
    const teams = props.teams;
    return (
        <Container>
            <Row>
                {
                    teams.map(t => {
                        return (
                            <TeamCard team={t} />
                        );
                    })
                }
            </Row>
        </Container>
    );
}

export default TeamList;
