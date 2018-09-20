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
            <br></br>
            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/iByxlVvWrww?playlist=iByxlVvWrww&;autoplay=1&loop=1&rel=0&amp;showinfo=0"
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen
            >
            </iframe>
            <h2>Round {this.state.attempt}</h2>
            <h3>What is the name of this band?</h3>

            { Array.from(this.state.chars).map( 
                    (c,i)=> <CharacterCard value = {c} key = {i} attempt={this.state.attempt} 
                    activateHandler={this.activateHandler}/> 
                )
            }
            <h3>{this.state.complete? "CORRECT!! ANSWER IS BNK48" : "ANSWER IS ..."}</h3>
            <img alt='photo' style={{ width: 250 }} src={String(photo)} />
            </div>
        )
    }
}

