import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import CharacterCard from "./components/CharacterCard";

import characters from "./characters.json";

import "./App.css";

class App extends Component {
  state = {
    characters,
    score: 0,
    topScore: 0,
    message: `Let's Play!`,
    messageColor: {color: `#fee800`}
  };

  // based on Fisher-Yates shuffle algorithm: http://bost.ocks.org/mike/shuffle/
  shuffle = array => {
    let i = array.length;
    let j = 0;

    // while there remain elements to shuffle
    while (i) {
      // pick a remaining element
      j = Math.floor(Math.random() * i--);
      // and swap it with the current element
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  resetGuess = characters =>
    characters.map(character => {
        character.guessed = false;
        return character;
    });

  chooseChar = id => {
    let alreadyGuessed = false;

    let characters = this.state.characters.map(character => {
        if (character.id === id) {
          alreadyGuessed = character.guessed;
          character.guessed = true;
        }
        return character;
    });

    let score;
    let topScore;
    let message;
    let messageColor = {color: `white`};

    if (alreadyGuessed) {
      score = 0;
      topScore = this.state.score > this.state.topScore 
                    ? this.state.score : this.state.topScore;
      message = `You guessed incorrectly!`;
      messageColor.color = `#ff0101`;
      characters = characters.map(character => {
        character.guessed = false;
        return character;
      })
    }
    else {
      score = this.state.score + 1;
      topScore = score > this.state.topScore ? score : this.state.topScore;

      if (score === characters.length) {
        score = 0;
        message = `You won!`;
        messageColor.color = `#fee800`;
        characters = this.resetGuess(characters);
      }
      else {
        message = `You guessed correctly!`;
        messageColor.color = `#49fb35`;
      }
    }

    this.setState({
      characters: this.shuffle(characters),
      score,
      topScore,
      message,
      messageColor
    })
  }

  render() {
    return (
      <Wrapper>
        <NavBar
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
          messageColor={this.state.messageColor}
        />
        <Jumbotron />
        <Container>
          {this.state.characters.map(character => (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              chooseChar={this.chooseChar}
            />
          ))}
        </Container>
      </Wrapper>
    );
  };
};

export default App;
