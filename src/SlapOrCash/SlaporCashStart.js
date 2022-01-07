import React, {Component} from 'react';
import '../App.css';
import Home from './Home';
import MakeRoom from './MakeRoom';
import MakeRoom2 from './MakeRoom2';
import PlayerRoom from '../PlayerRoom/PlayerRoom';
import ResultsP from '../ResultsPlayer/ResultsPlayer';
import ResultsM from '../ResultsMaker/ResultsMaker';
import axios from "axios";

class SlapOrCash extends Component {

  constructor(props) {
    super(props);
    this.state = {
      home: true,
      host: false,
      host2: false, 
      user: false,
      user2: false, 
      resultsp: false, 
      restultsm: false, 
      votes: 0, 
      increment: 10, 
      room: null, 
      myVote: "", 
      id: 1
    };
  }

  setHome = () => {
    this.setState({
      home: true, 
      host: false, 
      host2: false, 
      user: false, 
      user2: false,
      resultsp: false, 
      resultsm: false, 
    });
  };
  
  setHost = () => {
    this.setState({
      home: false, 
      host: true, 
      host2: false, 
      user: false, 
      user2: false,
      resultsp: false, 
      resultsm: false, 
    });
  };

  setHost2 = () => {
    this.setState({
      home: false, 
      host: false, 
      host2: true, 
      user: false, 
      user2: false, 
      resultsp: false, 
      resultsm: false, 
    });
  };

  setUser = () => {
    this.setState({
      home: false, 
      host: false,
      host2: false, 
      user: true, 
      user2: false, 
      resultsp: false, 
      resultsm: false
    });
  };

  setResultsP = (e) => {
    this.setState({
      home: false, 
      host: false,
      host2: false, 
      user: false, 
      user2: false, 
      resultsp: true, 
      resultsm: false, 
    });
    function func() { return ((e * 1) + 1); }
    console.log(func())
    axios.post("http://localhost:3001/voteCount", {votes: func()}).then(() => { console.log("success3")})
  };

  setResultsM = () => {
    this.setState({
      home: false, 
      host: false,
      host2: false, 
      user: false, 
      user2: false, 
      resultsp: false, 
      resultsm: true, 
    });
    axios.post("http://localhost:3001/Ready1").then(() => { console.log("success4")})
  };

  setRoom = (e) => {
    this.setState({
      room: e,
    });
  };

  setID = (e) => {
    this.setState({
      id: e,
    });
  };

  setMyVote = (e) => {
    this.setState({
      myVote: e,
    });
  }

  render () {
    return (
      <div>
        {this.state.home && <Home setHost = {this.setHost.bind(this)} setUser = {this.setUser.bind(this)}/>}
        {this.state.host && <MakeRoom setID = {this.setID.bind(this)} setHost2 = {this.setHost2.bind(this)}/>}
        {this.state.host2 && <MakeRoom2 id = {this.state.id} votes = {this.state.votes} setResultsM = {this.setResultsM.bind(this)}/>}
        {this.state.user && <PlayerRoom myVote = {this.setMyVote.bind(this)}setRoom = {this.setRoom.bind(this)} setResultsP = {this.setResultsP.bind(this)} setRoomKey = {this.setRoomKey} />}
        {this.state.resultsp && <ResultsP setHome = {this.setHome.bind(this)} setResultsP = {this.setResultsP.bind(this)} myVote = {this.state.myVote} room = {this.state.room}/>}
        {this.state.resultsm && <ResultsM setHome = {this.setHome.bind(this)}/>}
      </div>
    );
  }
}

export default SlapOrCash;
