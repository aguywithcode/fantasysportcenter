import Card from 'react-bootstrap/Card';

function TeamCard(props){
    const t = props.team;
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img src={t.LogoUrl} alt={t.Name + " Logo"}/>
            <Card.Body>
                <Card.Title>{t.City} {t.Name}</Card.Title>
                {t.Division}
            </Card.Body>
        </Card>
    )
}

export default TeamCard;