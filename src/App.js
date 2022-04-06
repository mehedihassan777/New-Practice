import logo from './logo.svg';
import './App.css';
import Greed from './Components/Greet';
import Welcome from './Components/welcome';

function App() {
  return (
    <div className="App">
      <Greed name= "Lemon" heroName= "Thor">
        <p>This is child</p>
      </Greed>
      <Greed name= "Mim" heroName= "Iron Man" >
        <button>Hero</button>
      </Greed>
      <Greed name= "Mehedi" heroName= "Spider Man" />
      <Welcome name= "Lemon" heroName= "Thor" />
      <Welcome name= "Mim" heroName= "Iron Man" />
      <Welcome name= "Mehedi" heroName= "Spider Man" />
    </div>
  );
}

export default App;
