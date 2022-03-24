import React, {Component} from 'react';
import axios from "axios"; 
import HeartWinner from '../../src/ResultsMaker/HeartWinner';

class HeartWL extends Component {

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
          <h1>Heart Loser</h1>
        </div>
        <img style={{height: "200px", marginTop: "20px", marginBottom: "-20px"}} src="/Heart.png"/>
        <p style={{color: "white", fontSize: "25px", fontFamily: "'Russo One', sans-serif"}}>The people chose heart, but unfortunately you didn't thik the song was hard enough</p>
        <button style = {{width: "200px", height: "60px", color: "red", borderColor: "red"}} className="HeartWinnerButton" onClick={this.Empty}>Follow Me On Instagram</button>
      </div>
    );
  }
}

export default HeartWL;
