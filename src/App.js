import './App.css';
import Header from './Components/Header';
import Figure from './Components/Figure';
import WrongLetters from './Components/WrongLetters';
import Word from './Components/Word';

function App() {
  return (
    <>
      <Header />
      <div className="game-container">
      <Figure />
      <WrongLetters />
      <Word />
      </div>
    </>
  );
}

export default App;
