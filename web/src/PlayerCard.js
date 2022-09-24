import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function PlayerCard(props){
    const player = props.player;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="left" src={player.HeadShotUrl} />
            <Card.Body>
                <Card.Title>{player.FirstName} {player.LastName}</Card.Title>
                <Card.Text>
                    <div>{`Name: ${player.FirstName} ${player.LastName}`}</div>

                    <div>{`Player Number: ${player.PlayerNumber}`}</div>

                    <div>{`Position: ${player.Position}`}</div>

                    <div>{`Height: ${Math.floor(player.Height / 12)} ft. ${player.Height % 12} in.`}</div>

                    <div>{`College: ${player.College}`}</div>
                </Card.Text>
                <Button variant="primary">View Player Details</Button>
            </Card.Body>
        </Card>
    )

}

export default PlayerCard;