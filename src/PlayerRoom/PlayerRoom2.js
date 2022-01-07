import React, {Component} from 'react';
import axios from "axios";

class PlayerRoom2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      seconds: 30, 
      vote1: null, 
    };
  }

  setSeconds = () => {
    this.setState({
      seconds: this.state.seconds - 1 
    });
  }

  componentDidMount = () => {
    const timeinterval = setInterval(() => {
      this.setSeconds();
      if (this.state.seconds == 0) {
          clearInterval(timeinterval);
      }
    },1000);
  }

  sendHeart = () => {
    axios.post("http://localhost:3001/voteheart", {room: this.props.room}).then(() => { console.log("success2")}) 
    axios.get("http://localhost:3001/getVoteCount").then((response) => {
      this.props.setResultsP(response.data[0].vote2);
    }); 
    this.props.myVote("heart");
  }

  sendSC = () => {
    axios.post("http://localhost:3001/voteSC", {room: this.props.room}).then(() => { console.log("success2")}) 
    axios.get("http://localhost:3001/getVoteCount").then((response) => {
      this.props.setResultsP(response.data[0].vote2);
    }); 
    this.props.myVote("sc");
  }

  render () {
    return (
      <div>
        <button onClick={this.sendHeart}>Choose Heart</button>
        <button onClick={this.sendSC}>Choose S/C</button>
        <p>seconds are here {this.state.seconds}</p>
      </div>
    );
  }
}

export default PlayerRoom2;
