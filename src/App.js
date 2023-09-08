import './App.css';
import Superhero from './components/Superhero';
import data from './components/Data';

function App() {
  return (
    <div className="App">{
      data.map((item) =>
      <Superhero url = {item.url}
      name = {item.name}
      alterego = {item.alterego}
      universe = {item.universe}
      friends = {item.friends}
      superpowers = {item.superpowers}
      info = {item.info}
      ></Superhero>
      )
    }
    </div>
  );
}

export default App;
