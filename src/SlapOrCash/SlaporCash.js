import React, {Component} from 'react';
import '../App.css';

import SlapORCashStart from './SlaporCashStart'

class SlapOrCash extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render () {
    return (
      <div className="SlapCashpopUp">
        <SlapORCashStart/>
      </div>
    );
  }
}

export default SlapOrCash;
