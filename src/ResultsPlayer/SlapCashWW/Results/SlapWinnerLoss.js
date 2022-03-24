import React, {Component} from 'react';
import axios from "axios"; 
import Slap from './SlapWinner';
import Cash from './CashWinner';
import Home from './Home';

class SlapWinnerLoss extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: "white"
    };
  }

  Empty = () => {
    this.props.setHome();
  }

  render () {
    return (
      <div>
        <img className = "MakeRoom2Picture" src="SlapOrCash.png"/>
        <div className='MakeRoomTitle'>
          <h1>Cash Loser</h1>
        </div>
        <img style={{height: "200px", marginTop: "20px", marginBottom: "-20px"}} src="/Cash.png"/>
        <p style={{color: this.state.color, fontSize: "25px", fontFamily: "'Russo One', sans-serif"}}>You voted for Cash, but the majority of the class voted for Slap, so you don't win... sorry</p>
        <button style = {{width: "200px", height: "60px", color: "green", borderColor: "green"}} className="HeartWinnerButton" onClick={this.Empty}>Follow Me On Instagram</button>
      </div>
    );
  }
}

export default SlapWinnerLoss;
