import logo from './logo.svg';
import './App.css';
import Greed from './Components/Greet';
import Welcome from './Components/welcome';

function App() {
  return (
    <div className="App">
      <Greed name= "Lemon" />
      <Greed name= "Mim" />
      <Greed name= "Mehedi" />
      <Welcome />
    </div>
  );
}

export default App;
