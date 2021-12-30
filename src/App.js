import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Figure from './Components/Figure';
import WrongLetters from './Components/WrongLetters';
import Word from './Components/Word';
import Popup from './Components/Popup';
import Notification from './Components/Notification';

const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;
const correctLetters = [];
const wrongLetters = [];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  return (
    <>
      <Header />
      <div className="game-container">
      <Figure />
      <WrongLetters />
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      <Popup />
      <Notification />
      </div>
    </>
  );
}

export default App;
