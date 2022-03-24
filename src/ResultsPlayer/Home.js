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
      seconds: 30, 
      color: "white", 
      color2: "white"
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
    if(this.state.vote.vote1 == "slap"){
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

  setColor = () => {
    if(this.state.heart >= this.state.sc){
      this.setState({
        color: "red" 
      });
    }
    else {
      this.setState({
        color2: "green" 
      });
    }
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
          this.setColor();
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
    console.log(this.props.myVote)
    if(this.state.heart >= this.state.sc){
      if(this.props.myVote == "heart"){
        this.props.setHeartww();
        console.log("heart win win")
      }
      else if (this.props.myVote == "slap") {
        this.props.setHeartww();
        console.log("heart win lose")
        console.log("its going through if")
      }
    }
    else if (this.state.heart < this.state.sc){
      if(this.props.myVote == "slap"){
        this.props.setSlapCashww();
        console.log("sc win win")
      }
      else if (this.props.myVote == "heart") {
        this.props.setSlapCashww();
        console.log("sc win lose")
        console.log(this.props.myVote)
      }
    }
  }

  render () {
    console.log("its going through home")
    return (
      <div className='ResultsMakerHome'>  
        <img className = "MakeRoom2Picture" src="SlapOrCash.png"/>
        <div className='MakeRoomTitle'>
          <h1>Results</h1>
        </div>
        <div className='ResultsMakerVoteBox'>
          <div className='ResultsMakerColumn'>
            <img src="/Heart.png"/>
            <p style={{color: this.state.color}}>{this.state.heart2}</p>
          </div>
          <div className='ResultsMakerColumn'>
            <img src="/SlapCash.png"/>
            <p style={{color: this.state.color2}}>{this.state.sc2}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
