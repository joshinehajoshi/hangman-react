import './App.css';
import Header from './Components/Header';
import Figure from './Components/Figure';
import WrongLetters from './Components/WrongLetters';
import Word from './Components/Word';
import Popup from './Components/Popup';
import Notification from './Components/Notification';

function App() {
  return (
    <>
      <Header />
      <div className="game-container">
      <Figure />
      <WrongLetters />
      <Word />
      <Popup />
      <Notification />
      </div>
    </>
  );
}

export default App;
