import './App.css';
import {useEffect, useState} from 'react';
import TeamList from './TeamList.js';

function App() {
  const [teams, setTeams] = useState([]);

  const fetchTeams = ()=>{
    fetch("/teams", {mode:'cors'})
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        setTeams(data);
      })
  }

  useEffect(()=>{
    fetchTeams();
  },[])
    return (
    <div className="App">
      <header className="App-header">
        <p>
          <TeamList teams={teams}/>
        </p>
      </header>
    </div>
  );
}

export default App;
