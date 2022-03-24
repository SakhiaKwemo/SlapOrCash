import React, {Component} from 'react';
import axios from "axios"; 

class SlapWinner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slap: [], 
      name: "", 
      seconds: 20, 
      length: 0,
      color: "white"
    };
  }

  setSlap = (e) => {
    console.log(e)
    if(true){ //if(e.vote1 == "slap")
        this.state.slap.push(e.roomkey)
    }
  }

  setColor = () => {
    this.setState({
      color: "gold",  
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
        this.myVideo.pause();
        this.myVideo2.play();
        this.myVideo3.play();
        this.setColor();
        clearInterval(timeinterval);
      }
    },100);
  };

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
      <video className="playerVideo" src={"crowdYay.mp4"}
      ref={video => {
          this.myVideo3 = video;
      }}/> // Callback every ~250ms with currentTime
    );

    axios.post("http://localhost:3001/winner", {winner: this.state.name}).then(() => { console.log("success2")}) 
    return (
      <div>
        {video}
        {video2}
        {video3}
        <img className = "MakeRoom2Picture" src="SlapOrCash.png"/>
        <div className='MakeRoomTitle'>
          <h1>Slap Winner</h1>
        </div>
        <img style={{height: "200px", marginTop: "20px", marginBottom: "-20px"}} src="/Slap.png"/>
        <p style={{color: this.state.color, fontSize: "45px", fontFamily: "'Russo One', sans-serif"}}>{this.state.name}</p>
        <button style = {{color: "gold", borderColor: "gold"}} className="HeartWinnerButton" onClick={this.Empty}>Exit Game</button>
      </div>
    );
  }
}

export default SlapWinner;
