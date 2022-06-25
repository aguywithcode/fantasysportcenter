import logo from './logo.svg';
import './App.css';
import {faker} from '@faker-js/faker';

function App() {
  var teams = [...Array(10)].map(i => {
    var mascot = faker.animal.type();
    return {
      logoUrl: faker.image.imageUrl(300, 300,mascot, true),
      city: faker.address.city(),
      mascot: mascot
    }
  });
    return (
    <div className="App">
      <header className="App-header">
        <p>
          <ul>
            {
              teams.map(t => {
                return(
                  <li>
                    <div><img src={t.logoUrl} alt={t.mascot+" Logo"} /></div> 
                    <div>{t.city} {t.mascot}</div>
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
