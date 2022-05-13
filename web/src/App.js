import logo from './logo.svg';
import './App.css';

function App() {
  var teams = [
    {
      logoUrl: "https://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/bulls/reboot/resources/images/bullhead-1819.png",
      city: "Chicago",
      mascot: "Bulls",
    },
    {
      logoUrl: "https://www.nba.com/grizzlies/sites/grizzlies/files/mg_playoffs_100x100_icon_0.png?",
      city: "Memphis",
      mascot: "Grizzlies",
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ul>
            {
              teams.map(t => {
                return(
                  <li>
                    <img src={t.logoUrl} alt={t.mascot+" Logo"} /> {t.city} {t.mascot}
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
