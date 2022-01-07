import React, {Component} from 'react';
import axios from "axios";
import PlayerRoom2 from './PlayerRoom2';
import Home from './Home';

class PlayerRoom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      r1: true, 
      r2: false, 
      room: null
    };
  }

  setr2 = (e) => {
    this.setState({
      r2: true, 
      r1: false, 
      room: e 
    });
    this.props.setRoom(e);
  }

  render () {
      
    return (
      <div>
        {this.state.r1 && <Home setR2 = {this.setr2.bind(this)} setRoomKey = {this.props.sendRoomKey} setUser2 = {this.props.setUser2}/>}
        {this.state.r2 && <PlayerRoom2 myVote = {this.props.myVote} room = {this.state.room} setResultsP = {this.props.setResultsP}/>}
      </div>
    );
  }
}

export default PlayerRoom;
