import React, { Component } from 'react';
import imageArray from "./components/Images";
// import Game from "./components/Game";
import Header from "./components/Header";
// import Score from "./components/Score";

class App extends Component {
  state = {
    images: imageArray,
    message: "Click to begin!",
    score: 0,
    bestScore: 0
  }

  pick16 = () => {
    let randomCards = [];
    for(let i = 0; i < 16; i++) {
      let index = Math.floor(Math.random()*52);
      randomCards.push(this.state.images[index]);
    }
    console.log(randomCards);
     return randomCards;
    
  }

  clickHandler = (id, guessed) => {
    
    let imageArrayClone = imageArray.slice(0);
    let whatever = imageArrayClone.findIndex((image) => image.id === id);
    
    if(this.state.images[whatever].guessed) {
      this.alreadyGuessed();
      return;  
    }

    imageArrayClone[whatever].guessed = true;

    var score1 = this.state.score + 1;
    var newBestScore = this.state.bestScore;
    

    if(score1 >= this.state.bestScore) {
      newBestScore = score1;  
    }

    this.setState({images: imageArrayClone, score: this.state.score+1, bestScore: newBestScore});
    
    console.log(this.state);
  }

  alreadyGuessed = () => {
    console.log("start over");
    this.resetCards();
  }

  resetCards = () => {
    let imageArrayClone = imageArray.slice(0);
    for (let i = 0; i < imageArrayClone.length; i++) {
      imageArrayClone[i].guessed = false;

      this.setState({images: imageArrayClone, score: 0});
    }
  }
  render() {
    
    var renderImages = this.pick16();
    return (
      <div className="App">
      <Header score= {this.state.score} bestScore={this.state.bestScore}/>
        <div className="gameBoard">
          {renderImages.map((image) => <img src={image.image}  alt="alt" onClick={this.clickHandler.bind(null, image.id, image.guessed)} />)}
        </div>
      </div>
    );
  }
}

// class Image extends Component {
//    render() {
//      <img src=
//    }

// }

export default App;
