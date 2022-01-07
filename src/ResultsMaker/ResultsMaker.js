import React, {Component} from 'react';
import axios from "axios"; 
import Home from './Home';
import Hwin from './HeartWinner';
import SCwin from './SlapCashWinner/SlapCashWinner';

class ResultsMaker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      home: true, 
      hwin: false, 
      scwin: false, 
    };
  }

  setHwin = () => {
    this.setState({
      home: false, 
      hwin: true,
      scwin: false
    });
  };

  setSCwin = () => {
    this.setState({
      home: false, 
      hwin: false,
      scwin: true, 
    });
  };

  render () {
    return (
      <div>
        {this.state.home && <Home setHome = {this.props.setHome} setHwin = {this.setHwin.bind(this)} setSCwin = {this.setSCwin.bind(this)}/>}
        {this.state.hwin && <Hwin setHome = {this.props.setHome}/>}
        {this.state.scwin && <SCwin setHome = {this.props.setHome}/>}
      </div>
    );
  }
}

export default ResultsMaker;
