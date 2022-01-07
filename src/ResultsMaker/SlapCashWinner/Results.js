import React, {Component} from 'react';
import axios from "axios"; 

class Results extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vote: [], 
      slap: 0,
      cash: 0, 
      slap2: 0, 
      cash2: 0, 
      seconds: 30 
    };
  }

  setSlap = (e) => {
    this.setState({
      slap2: e, 
      seconds: this.state.seconds - 1 
    });
  }

  setCash = (e) => {
    this.setState({
      cash2: e 
    });
  }

  setVote = (e) => {
    this.setState({
      vote: e 
    });
    if(this.state.vote.vote1 == "slap"){
      this.setState({
        slap: this.state.slap + 1 
      });
    }
    if(this.state.vote.vote1 == "cash"){
      this.setState({
        cash: this.state.cash + 1 
      });
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3001/getVote1").then((response) => {
      for (var i = 0; i < response.data.length; i++){
        this.setVote(response.data[i]);
        console.log(response.data[i])
      }
    }); 
    const timeinterval = setInterval(() => {
      this.setSlap(Math.floor(Math.random() * 100));
      this.setCash(Math.floor(Math.random() * 100));
      if (this.state.seconds == 0) {
          clearInterval(timeinterval);
          this.setSlap(this.state.slap);
          this.setCash(this.state.cash);
        }
    },100);
  };

  setNext = () => {
    if(this.state.slap >= this.state.cash){
      this.props.setSlap();
    }
    else if (this.state.slap < this.state.cash){
      this.props.setCash();
    }
    axios.post("http://localhost:3001/Ready4").then(() => { console.log("success4")}) 
  }

  render () {
    return (
      <div>
          <p>Here are the results between slap and cash</p>
          <p>Slap: {this.state.slap2}</p>
          <p>Cash: {this.state.cash2}</p>
          <button onClick={this.setNext}>Next</button>
      </div>
    );
  }
}

export default Results;
