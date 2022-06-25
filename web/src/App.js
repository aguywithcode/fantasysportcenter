import './App.css';
import {faker} from '@faker-js/faker';
import TeamList from './TeamList.js';

function App() {
  var teams = [...Array(5)].map(i => {
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
          <TeamList teams={teams}/>
        </p>
      </header>
    </div>
  );
}

export default App;
