import Card from 'react-bootstrap/Card';

function TeamCard(props){
    const t = props.team;
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img src={t.logoUrl} alt={t.mascot + " Logo"}/>
            <Card.Body>
                <Card.Title>{t.city} {t.mascot}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default TeamCard;