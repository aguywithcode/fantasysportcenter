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
                    teams.sort((a,b)=>{
                        if(a.Division>b.Division){
                            return 1;
                        }
                        if(a.Division<b.Division){
                            return -1;
                        }
                        return 0;
                    })
                        .map((element) => <TeamCard team={element} />)
                }
            </Row>
        </Container>
    );
}

export default TeamList;
