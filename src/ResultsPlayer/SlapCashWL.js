import React, {Component} from 'react';
import axios from "axios"; 

class SlapCashWL extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  Empty = () => {
    this.props.setHome();
  }

  render () {
    return (
      <div>
        <h1>You chose heart, but unfortunately the majority of the people didn't thik the song was hard enough</h1>
        <a>Follow me on Instagram @DJKwemo</a>
        <button onClick={this.Empty}>Exit Game</button>
      </div>
    );
  }
}

export default SlapCashWL;
