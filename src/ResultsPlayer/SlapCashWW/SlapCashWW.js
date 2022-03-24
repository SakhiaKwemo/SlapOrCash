import React, {Component} from 'react';
import axios from "axios"; 
import Home from './Home';
import Slap from './Results/SlapWinner';
import Cash from './Results/CashWinner';
import Results from './Results/Results';

class SlapCashWW extends Component {

  constructor(props) {
    super(props);
    this.state = {
      home: true, 
      slap: false, 
      cash: false, 
      results: false, 
    };
  }

  setSlap = () => {
    this.setState({
      home: false, 
      slap: true, 
      cash: false, 
      results: true
    });
    axios.post("http://localhost:3001/voteSlap", {room: this.props.room}).then(() => { console.log("success2")}) 
    axios.get("http://localhost:3001/getVoteCount").then((response) => {
      this.props.setResultsP(response.data[0].vote2);
    }); 
  };

  setCash = () => {
    this.setState({
      home: false, 
      slap: false, 
      cash: true, 
      results: true
    });
    axios.post("http://localhost:3001/voteCash", {room: this.props.room}).then(() => { console.log("success2")}) 
    axios.get("http://localhost:3001/getVoteCount").then((response) => {
      this.props.setResultsP(response.data[0].vote2);
    }); 
  };

  render () {
    return (
      <div>
        {this.state.home && <Home setHome = {this.props.setHome} setResults = {this.props.setResults} setSlap = {this.setSlap.bind(this)} setCash = {this.setCash.bind(this)}/>}
        {this.state.results && <Results key = {this.props.key} room = {this.props.room} setHome = {this.props.setHome} cash = {this.state.cash} slap = {this.state.slap} setResults = {this.props.setResults}/>}
      </div>
    );
  }
}

export default SlapCashWW;
