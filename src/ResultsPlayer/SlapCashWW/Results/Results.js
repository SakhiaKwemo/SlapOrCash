import React, {Component} from 'react';
import axios from "axios"; 
import Slap from './SlapWinner';
import Cash from './CashWinner';
import Home from './Home';
import Home2 from './Home2'
import Cashwl from './CashWinnerLoss';
import Slapwl from './SlapWinnerLoss';

class Results extends Component {

  constructor(props) {
    super(props);
    this.state = {
      home: false, 
      cashwl: false, 
      slapwl: false, 
      cash: false, 
      slap: false,
      home2: true 
    };
  }

  setHome = () => {
    this.setState({
      home: true,
      home2: false 
    });
  };


  setCashWW = () => {
    this.setState({
      home: false, 
      home2: false, 
      cash: true, 
    });
  };

  setCashWL = () => {
    this.setState({
      home: false, 
      cashwl: true
    });
  };

  setSlapWW = () => {
    this.setState({
      home: false, 
      slap: true
    });
  };

  setSlapWL = () => {
    this.setState({
      home: false, 
      slapwl: true
    });
  };


  render () {
    return (
      <div>
        {this.state.home2 && <Home2 setHome = {this.setHome.bind(this)}/>}
        {this.state.home && <Home setCashWW = {this.setCashWW.bind(this)} setCashWL = {this.setCashWL.bind(this)} setSlapWL = {this.setSlapWL.bind(this)} setSlapWW = {this.setSlapWW.bind(this)} cash = {this.props.cash} slap = {this.props.slap}/>}
        {this.state.cash && <Cash key = {this.props.key} room = {this.props.room} setHome = {this.props.setHome}/>}
        {this.state.slap && <Slap key = {this.props.key} room = {this.props.room} setHome = {this.props.setHome}/>}
      </div>
    );
  }
}

export default Results;
//sjnj