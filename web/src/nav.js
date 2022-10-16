import './App.css';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="App">
            <span><Link to="/">Home </Link></span>
            |
            <span><Link to="/teams"> Teams</Link></span>
            |
            <span><Link to="/players">Players</Link></span>

        </div>
    );
}

export default Nav;
