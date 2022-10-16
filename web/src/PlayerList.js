import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import PlayerCard from './PlayerCard';

function PlayerList(props){
    const players = props.players;
    return (
        <Container>
            <Row>
                {
                    players.map(player => {
                        return (
                            <PlayerCard player={player} />
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default PlayerList