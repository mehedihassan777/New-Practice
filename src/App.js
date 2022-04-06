import logo from './logo.svg';
import './App.css';
import Greed from './Components/Greet';
import Welcome from './Components/welcome';

function App() {
  return (
    <div className="App">
      <Greed name= "Lemon" heroName= "Thor" />
      <Greed name= "Mim" heroName= "Iron Man" />
      <Greed name= "Mehedi" heroName= "Spider Man" />
      <Welcome />
    </div>
  );
}

export default App;
