import React, {Component} from 'react';
import axios from "axios"; 
import Slap from './SlapWinner';
import Cash from './CashWinner';
import Home from './Home';

class SlapWinnerLoss extends Component {

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
        <p>You voted for Cash, but the majority of the class voted for Slap, so you don't win... sorry</p>
        <a>Follow Me On Instagram @DJKwemo</a>
        <button onClick={this.Empty}>Exit Game</button>
      </div>
    );
  }
}

export default SlapWinnerLoss;
