import React, {Component} from 'react';
import axios from "axios"; 
import HeartWinner from '../../src/ResultsMaker/HeartWinner';

class HeartWL extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  Empty = () => {
    this.props.setHome();
  }


  render () {
    return (
      <div>
        <h1>The people chose heart, but unfortunately you didn't thik the song was hard enough</h1>
        <a>Follow me on Instagram @DJKwemo</a>
        <button onClick={this.Empty}>Exit Game</button>
      </div>
    );
  }
}

export default HeartWL;
