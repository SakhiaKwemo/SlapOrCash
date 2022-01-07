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
      <div className='WelcomePage'>
        <img onClick = {this.props.setHost} className="WelcomePageKwemo" src="dj kelil logo 2.png"/>
        <img className="WelcomePageSlapCash" src="SlapOrCash.png"/>
        <div>
          <button onClick = {this.props.setUser}>Play The Game</button>`
        </div>
      </div>
    );
  }
}

export default Home;
