import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = "Engineer";
class App extends Component {
  render() {
    return (
    <div>
    <WordCard value="engineer"/>
    </div>
    );
   }
}

export default App;
