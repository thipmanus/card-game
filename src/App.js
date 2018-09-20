import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = "BNK48";
class App extends Component {
  render() {
    return (
    <div>
    <WordCard value="bnk48"/>
    </div>
    );
   }
}

export default App;
