import './App.css';
import {useEffect, useState} from 'react';
import TeamList from './TeamList.js';

function App() {
  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    try{
      const res = await fetch('/teams');
      const data = await res.json();
      setTeams(data);
    }
    catch(error)
    {
      console.error(error)
    }
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
