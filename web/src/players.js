import logo from './logo.svg';
import './App.css';

function App() {
  var players = [
    {
      logoUrl: "https://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/bulls/reboot/resources/images/bullhead-1819.png",
      name: "Kobe Bryant",
      city: "Chicago",
      mascot: "Bulls",
    },
    {
      logoUrl: "https://www.nba.com/grizzlies/sites/grizzlies/files/mg_playoffs_100x100_icon_0.png?",
      name: "Shaqqq",
      city: "Memphis",
      mascot: "Grizzlies",
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <ul>
            {
              players.map(t => {
                return(
                  <li>
                    <div><img src={t.logoUrl} alt={t.mascot+" Logo"} /></div> 
                    <div>{t.name} {t.city} {t.mascot}</div>
                  </li>
                );
              })
            }
          </ul>
        </p>
      </header>
    </div>
  );
}

export default App;
