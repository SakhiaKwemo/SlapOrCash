import React, {Component} from 'react';
import axios from "axios"; 

class SlapWinner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slap: [], 
      name: "", 
      seconds: 30, 
      length: 0,
    };
  }

  setSlap = (e) => {
    console.log(e)
    if(e.vote1 == "slap"){
        this.state.slap.push(e.roomkey)
    }
  }

  setName2 = (e) => {
    this.setState({
      name: e
    });
  }

  setName = () => {
    var r = Math.floor(Math.random() * this.state.length);
    this.setState({
      name: this.state.slap[r],  
      seconds: this.state.seconds - 1
    });
  }

  setLength = (e) => {
    this.setState({
      length: e,  
    });
  }

  Empty = () => {
    axios.post("http://localhost:3001/empty").then(() => { console.log("success2")}) 
    this.props.setHome();
  }

  componentDidMount() {
    axios.get("http://localhost:3001/get").then((response) => {
      for (var i = 0; i < response.data.length; i++){
        this.setSlap(response.data[i]);
        this.setLength(response.data.length);
      }
    }); 
    const timeinterval = setInterval(() => {
      this.setName();
      if (this.state.seconds == 0) {
        axios.get("http://localhost:3001/winner").then((response) => {
          console.log(response.data[0].winner)
          this.setName2(response.data[0].winner)
        }); 
          clearInterval(timeinterval);
      }
    },100);
  };

  render () {
    return (
      <div>
        <h1>A Winner is chosen for the slap</h1>
        <a>Follow Me On Instagram @DJKwemo</a>
        <button onClick={this.Empty}>Exit Game</button>
        <p>The winner is: {this.state.name}</p>
      </div>
    );
  }
}

export default SlapWinner;
