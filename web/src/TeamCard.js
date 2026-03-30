import Card from 'react-bootstrap/Card';

function TeamCard(props){
    const t = props.team;
    return(
        <Card style={{ width: '14rem', margin: '0.5rem', fontSize: '0.95em', display: 'flex', alignItems: 'center', minHeight: '110px' }}>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <img src={t.LogoUrl} alt={t.Name + " Logo"} style={{ width: '100px', height: '100px', objectFit: 'contain', marginRight: '0.75rem', background: '#fff', borderRadius: '8px', border: '1px solid #eee' }} />
                <div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.1em' }}>{t.City} {t.Name}</div>
                </div>
            </div>
        </Card>
    )
}

export default TeamCard;