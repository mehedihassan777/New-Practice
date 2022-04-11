import './App.css';
import Greed from './Components/Greet';
import Welcome from './Components/welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Greed name= "Lemon" heroName= "Thor">
        <p>This is child</p>
      </Greed>
      <Greed name= "Mim" heroName= "Iron Man" >
        <button>Hero</button>
      </Greed>
      <Greed name= "Mehedi" heroName= "Spider Man" />
      <Welcome name= "Lemon" heroName= "Thor" />
      <Welcome name= "Mim" heroName= "Iron Man" />
      <Welcome name= "Mehedi" heroName= "Spider Man" />
      <Message /> */}
    </div>
  );
}

export default App;
