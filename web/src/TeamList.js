import './App.css';
import { faker } from '@faker-js/faker';

function TeamList(props) {
    const teams = props.teams;
    return (
        <ul>
            {
            teams.map(t => {
                return (
                    <li>
                        <div><img src={t.logoUrl} alt={t.mascot + " Logo"} /></div>
                        <div>{t.city} {t.mascot}</div>
                    </li>
                );
            })
            }
        </ul>
    );
}

export default TeamList;
