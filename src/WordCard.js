import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

const photo = require('./b.gif');

const prepareStateFromWord = (give_word) =>{
    let word = give_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attempt: 1,
        guess:[],
        completed: false 
       } 
}

export default class WordCard extends Component {
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activateHandler = (c) => {
        let guess = [this.state.guess]+ c
        console.log("index : " + guess.length +" / " + this.state.word.length )
        this.setState({guess})
        if (guess.length == this.state.chars.length){
            if(guess == this.state.word){
                this.setState({guess: [],complete:true})
            }else{
                this.setState({guess:[],attempt:this.state.attempt+1 })
            }
        }
    }
    render(){
        return(
            <div className= "App">
            <h1>Round {this.state.attempt}</h1>
            <img alt='photo' style={{ width: 500 }} src={String(photo)} />
            <h3>WHO IS SHE?</h3>
            { Array.from(this.state.chars).map( 
                    (c,i)=> <CharacterCard value = {c} key = {i} attempt={this.state.attempt} 
                    activateHandler={this.activateHandler}/> 
                )
            }
            <h2>{this.state.complete? "CORRECT!! ANSWER IS MUSIC(BNK48)" : ""}</h2>
            </div>
        )
    }
}

