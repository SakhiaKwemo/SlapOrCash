import React, {Component} from 'react';
import axios from "axios"; 
import Slap from './SlapWinner';
import Cash from './CashWinner';
import Home from './Home';
import Results from './Results';

class SlapCashWinner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      home: true, 
      cash: false, 
      slap: false, 
      results: false
    };
  }

  setCash = () => {
    this.setState({
      home: false, 
      cash: true,
      slap: false, 
      results: false
    });
  };

  setSlap = () => {
    this.setState({
      home: false, 
      cash: false,
      slap: true, 
      results: false
    });
  };

  
  setResults = () => {
    this.setState({
      home: false, 
      cash: false,
      slap: false, 
      results: true
    });
    axios.post("http://localhost:3001/Ready3").then(() => { console.log("success4")})
  };

  render () {
    return (
      <div>
        {this.state.home && <Home setResults = {this.setResults.bind(this)}/>}
        {this.state.slap && <Slap setHome = {this.props.setHome}/>}
        {this.state.cash && <Cash setHome = {this.props.setHome}/>}
        {this.state.results && <Results setSlap = {this.setSlap.bind(this)} setCash = {this.setCash.bind(this)}/>}
      </div>
    );
  }
}

export default SlapCashWinner;
