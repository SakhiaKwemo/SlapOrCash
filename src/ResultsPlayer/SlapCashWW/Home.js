import React, {Component} from 'react';
import axios from "axios"; 

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div>
        <h1>Now you will need to vote between Slap or Cash</h1>
        <button onClick={this.props.setSlap}>Slap Wins</button>
        <button onClick={this.props.setCash}>Cash Wins</button>
      </div>
    );
  }
}

export default Home;
