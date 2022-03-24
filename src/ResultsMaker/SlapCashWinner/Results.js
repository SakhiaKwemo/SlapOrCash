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
      seconds: 30, 
      color: "white", 
      color2: "white" 
    };
  }

  setColor = () => {
    if(this.state.slap2 >= this.state.cash2){
      this.setState({
        color: "gold" 
      });
    }
    else {
      this.setState({
        color2: "green" 
      });
    }
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
          this.myVideo.pause();
          this.myVideo2.play();
          this.myVideo3.play();
          clearInterval(timeinterval);
          this.setSlap(this.state.slap);
          this.setCash(this.state.cash);
          this.setColor();
        }
    },100);
  };

  setNext = () => {
    if(this.state.slap2 >= this.state.cash2){
      this.props.setSlap();
    }
    else if (this.state.slap2 < this.state.cash2){
      this.props.setCash();
    }
    axios.post("http://localhost:3001/Ready4").then(() => { console.log("success4")}) 
  }


  render () {
    const video = (
      <video autoPlay loop className="playerVideo" src={"drumroll.mp4"}
      ref={video => {
          this.myVideo = video;
      }}/> // Callback every ~250ms with currentTime
    );

    const video2 = (
      <audio className="playerVideo" src={"Cymbal Crash 005.wav"}
      ref={video => {
          this.myVideo2 = video;
      }}/> // Callback every ~250ms with currentTime
    );

    const video3 = (
      <video className="playerVideo" src={"pleasedCrowd.mp4"}
      ref={video => {
          this.myVideo3 = video;
      }}/> // Callback every ~250ms with currentTime
    );

    return (
      <div className = "ResultsMakerHome">
      {video}
      {video2}
      {video3}
        <img className = "MakeRoom2Picture" src="SlapOrCash.png"/>
        <div className='MakeRoomTitle'>
          <h1>Results</h1>
        </div>
        <button onClick={this.setNext}>Next</button>
        <div className='ResultsMakerVoteBox'>
          <div className='ResultsMakerColumn'>
            <img src="/Slap.png"/>
            <p style={{color: this.state.color}}>{this.state.slap2}</p>
          </div>
          <div className='ResultsMakerColumn'>
            <img src="/Cash.png"/>
            <p style={{color: this.state.color2}}>{this.state.cash2}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
