import './App.css';
import Header from './Components/Header';
import Figure from './Components/Figure';
import WrongLetters from './Components/WrongLetters';

function App() {
  return (
    <>
      <Header />
      <div className="game-container">
      <Figure />
      <WrongLetters />
      </div>
    </>
  );
}

export default App;
