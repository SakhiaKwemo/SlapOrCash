import React, {Component} from 'react';
import axios from "axios"; 
import Slap from './SlapWinner';
import Cash from './CashWinner';
import Home from '../Home';

class Results extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vote: [], 
      slap: 0, 
      cash: 0, 
      slap2: 0, 
      cash2: 0, 
      seconds: 30, 
      color: "white", 
      color2: "white"
    };
  }

  setVote = (e) => {
    this.setState({
      vote: e 
    });
    if(this.state.vote.vote1 == "slap"){
      this.setState({
        slap: this.state.slap + 1 
      });
    }
    if(this.state.vote.vote1 == "cash"){
      this.setState({
        cash: this.state.cash + 1 
      });
    }
  }

  setSlap = (e) => {
    this.setState({
      slap2: e, 
      seconds: this.state.seconds - 1 
    });
  }

  setCash = (e) => {
    this.setState({
      cash2: e 
    });
  }

  setColor = () => {
    if(this.state.slap >= this.state.cash){
      this.setState({
        color: "gold" 
      });
    }
    else {
      this.setState({
        color2: "green" 
      });
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3001/getVote1").then((response) => {
      for (var i = 0; i < response.data.length; i++){
        this.setVote(response.data[i]);
      }
    }); 
    const timeinterval = setInterval(() => {
      this.setSlap(Math.floor(Math.random() * 100));
      this.setCash(Math.floor(Math.random() * 100));
      if (this.state.seconds == 0) {
          clearInterval(timeinterval);
          this.setSlap(this.state.slap);
          this.setCash(this.state.cash);
        }
    },100);

    const time = setInterval(() => {
      axios.get("http://localhost:3001/Ready").then((response) => {
        if(response.data[0].ready == 4) {
          this.setNext();
        }
    }); 
    },100);
  };

  setNext = () => {
    if(this.state.slap >= this.state.cash){
      if(this.props.slap){
        this.props.setSlapWW();
      }
      else if (this.props.cash) {
        this.props.setSlapWW();
      }
    }
    else if (this.state.slap < this.state.cash){
      if(this.props.slap){
        this.props.setCashWW(); 
      }
      else if (this.props.cash) {
        this.props.setCashWW(); 
      }
    }
  }

  render () {
    return (
      <div>
      <div className='ResultsMakerHome'>  
        <img className = "MakeRoom2Picture" src="SlapOrCash.png"/>
        <div className='MakeRoomTitle'>
          <h1>Results</h1>
        </div>
        <div className='ResultsMakerVoteBox'>
          <div className='ResultsMakerColumn'>
            <img src="/Slap.png"/>
            <p style={{color: this.state.color}}>{this.state.slap2}</p>
          </div>
          <div className='ResultsMakerColumn'>
            <img src="/Cash.png"/>
            <p style={{color: this.state.color2}}>{this.state.cash2}</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Results;
