import React, {Component} from 'react';
import Home from './Home';
import Home2 from './Home2';
import HeartWL from './HeartWL';
import HeartWW from './HeartWW';
import SlapCashWL from './SlapCashWL';
import SlapCashWW from './SlapCashWW/SlapCashWW';
import axios from "axios";

class Results extends Component {

  constructor(props) {
    super(props);
    this.state = {
      home: false, 
      heartww: false, 
      heartwl: false, 
      slapcashwl: false, 
      slapcashww: false,
      home2: true, 
    };
  }

  setHome = () => {
    this.setState({
      home: true, 
      home2: false, 
      heartww: false, 
      heartwl: false, 
      slapcashwl: false, 
      slapcashww: false,
    });
  };

  setHeartww = () => {
    this.setState({
      home: false, 
      heartww: true, 
      heartwl: false, 
      slapcashwl: false, 
      slapcashww: false,
    });
  };

  setHeartwl = () => {
    this.setState({
      home: false, 
      heartww: false, 
      heartwl: true, 
      slapcashwl: false, 
      slapcashww: false,
    });
  };

  setSlapCashwl = () => {
    this.setState({
      home: false, 
      heartww: false, 
      heartwl: false, 
      slapcashwl: true, 
      slapcashww: false,
    });
  };

  setSlapCashww = () => {
    this.setState({
      home: false, 
      heartww: false, 
      heartwl: false, 
      slapcashwl: false, 
      slapcashww: true, 
    });
  };

  render () {
    return (
      <div>
        {this.state.home2 && <Home2 setHome = {this.setHome.bind(this)}/>}
        {this.state.home && <Home myVote = {this.props.myVote} room = {this.props.room} setSlapCashwl = {this.setSlapCashwl} setSlapCashww = {this.setSlapCashww} setHeartwl = {this.setHeartwl} setHeartww = {this.setHeartww}/>}
        {this.state.heartwl && <HeartWL setHome = {this.props.setHome}/>}
        {this.state.heartww && <HeartWW setHome = {this.props.setHome}/>}
        {this.state.slapcashwl && < SlapCashWL setHome = {this.props.setHome}/>}
        {this.state.slapcashww && <SlapCashWW setHome = {this.props.setHome} room = {this.props.room}setResultsP = {this.props.setResultsP}/>}
      </div>
    );
  }
}

export default Results;
