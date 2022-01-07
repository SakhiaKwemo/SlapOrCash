import React, {Component} from 'react';
import './App.css';
import Home from './SlapOrCash/Home';
import MakeRoom from './SlapOrCash/MakeRoom';
import MakeRoom2 from './SlapOrCash/MakeRoom2';
import PlayerRoom from './PlayerRoom/PlayerRoom';
import ResultsP from './ResultsPlayer/ResultsPlayer';
import ResultsM from './ResultsMaker/ResultsMaker';
import axios from "axios";
import SlapOrCash from './SlapOrCash/SlaporCash';
import NavBar from './NavBar';
import Games from './Games';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    console.log(this.state.myVote)
    return (
      <div className="App">
        <NavBar/>
        <Games/>
        <SlapOrCash/>
      </div>
    );
  }
}

export default App;
