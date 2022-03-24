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
    console.log(this.state.vote.vote1)
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
          this.myVideo.pause();
          this.myVideo2.play();
          this.myVideo3.play();
          clearInterval(timeinterval);
          this.setHeart(this.state.heart);
          this.setSC(this.state.sc);
          this.setColor();
        }
    },100);
  };

  setNext = () => {
    axios.post("http://localhost:3001/voteInitialCount").then(() => { console.log("success2")}) 
    axios.post("http://localhost:3001/Ready2").then(() => { console.log("success4")}) 
    if(this.state.heart >= this.state.sc){
      this.props.setHwin();
    }
    else {
      this.props.setSCwin();
    }
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
      <div className='ResultsMakerHome'>  
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
