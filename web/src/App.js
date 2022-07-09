import './App.css';
import { faker } from '@faker-js/faker';

var name = 'Mark'
const teacher1 = {
  name: faker.name.firstName(),
  age: 44
}
const teacher2 = {
  name: faker.name.firstName(),
  age: 37
}
const teamList = [...Array(20)].map(element=>{
  var mascot = faker.animal.type()
  return {
    city: faker.address.city(),
    mascot: mascot,
    logoUrl: faker.image.imageUrl(300,300,mascot,true)
  }
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Here's a list of available teams {
          teamList.map((team, idx)=>
            <div>
              <img src={team.logoUrl}/>
             Team {idx+1} is in {team.city} it's mascot is {team.mascot}
             

            </div>)
        }</div>
      </header>

    </div>
  );
}

export default App;
