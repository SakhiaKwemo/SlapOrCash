import React, {Component} from 'react';
import axios from "axios"; 

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vote: [], 
      heart: 0, 
      sc: 0, 
      heart2: 0, 
      sc2: 0, 
      seconds: 30
    };
  }

  setVote = (e) => {
    this.setState({
      vote: e 
    });
    if(this.state.vote.vote1 == "heart"){
      this.setState({
        heart: this.state.heart + 1 
      });
    }
    if(this.state.vote.vote1 == "sc"){
      this.setState({
        sc: this.state.sc + 1 
      });
    }
  }

  setHeart = (e) => {
    this.setState({
      heart2: e, 
      seconds: this.state.seconds - 1 
    });
  }

  setSC = (e) => {
    this.setState({
      sc2: e 
    });
  }

  componentDidMount() {
    axios.get("http://localhost:3001/getVote1").then((response) => {
      for (var i = 0; i < response.data.length; i++){
        this.setVote(response.data[i]);
      }
    }); 
    const timeinterval = setInterval(() => {
      this.setHeart(Math.floor(Math.random() * 100));
      this.setSC(Math.floor(Math.random() * 100));
      if (this.state.seconds == 0) {
          clearInterval(timeinterval);
          this.setHeart(this.state.heart);
          this.setSC(this.state.sc);
        }
    },100);
    const time = setInterval(() => {
      axios.get("http://localhost:3001/Ready").then((response) => {
        if(response.data[0].ready == 2) {
          this.setNext();
        }
    }); 
    },100);
  };

  setNext = () => {
    if(this.state.heart >= this.state.sc){
      if(this.props.myVote == "heart"){
        this.props.setHeartww();
        console.log("heart win win")
      }
      else if (this.props.myVote == "sc") {
        this.props.setHeartwl();
        console.log("heart win lose")
      }
    }
    else if (this.state.heart < this.state.sc){
      if(this.props.myVote == "sc"){
        this.props.setSlapCashww();
        console.log("sc win win")
      }
      else if (this.props.myVote == "heart") {
        this.props.setSlapCashwl();
        console.log("sc win lose")
        console.log(this.props.myVote)
      }
    }
  }

  render () {
    return (
      <div>
        <h1>This is where the results maker animation will show up</h1>
        <p>Heart Votes: {this.state.heart2}</p>
        <p>Slap Cash Votes: {this.state.sc2}</p>
      </div>
    );
  }
}

export default Home;
