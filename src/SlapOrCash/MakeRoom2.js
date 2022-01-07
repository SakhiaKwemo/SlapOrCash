import React, {Component} from 'react';
import axios from "axios";

function pad(n, width, z=0) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position) => ([
pad(Math.floor(position / 60), 2),
pad(position % 60, 2),
]);

class MakeRoom2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vote: [], 
      songImage: "", 
      songMP3: "", 
      songTitle: "", 
      paused: false,
      totalLength: 0,
      currentPosition: 0,
      selectedTrack: 0,
    };
  }

  setVote = (e) => {
    this.setState({
      vote: e 
    });
  }

  setSong = (e) => {
    this.setState({
      songImage: e.image, 
      songMP3: e.mp3, 
      songTitle: e.title
    });
  }

  componentDidMount() {
    axios.get("http://localhost:3001/getSongs").then((response) => {
      this.setSong(response.data[this.props.id - 1])
    }); 
    axios.get("http://localhost:3001/getVoteCount").then((response) => {
      this.setVote(response.data[0]);
    }); 
    const timeinterval = setInterval(() => {
      axios.get("http://localhost:3001/getVoteCount").then((response) => {
        this.setVote(response.data[0]);
      }); 
    },1000);
  };

  setDuration = () => {
    this.setState({totalLength: Math.floor(this.myVideo.duration)});
    this.setState({paused: false})
  }

  seekVid = () => {
      var seekto = Math.floor(this.myVideo.duration) * (this.input.value/100);
      this.myVideo.currentTime = seekto;
  }

  setTime = () => {
      this.setState({currentPosition: Math.floor(this.myVideo.currentTime)});
      var nt = Math.floor(this.myVideo.currentTime) * (100/this.myVideo.duration);
      this.input.value = nt;
  }

  setRevert = () => {
      if(this.state.paused) {
          this.myVideo.play()
          this.setState({paused: !this.state.paused})
          console.log(this.state.paused)
      }
      else {
          this.myVideo.pause()
          this.setState({paused: !this.state.paused})
          console.log(this.state.paused)
      }
  }


  render () {
    console.log(this.state.songImage);
    console.log(this.state.songMP3);
    console.log(this.state.songTitle);
    console.log(this.props.id);

    const elapsed = minutesAndSeconds(this.state.currentPosition);
    const remaining = minutesAndSeconds(this.state.totalLength - this.state.currentPosition);

    const input = (
      <input 
      ref={input => {this.input = input;}}
      onChange = {this.seekVid}
      className="inputM"
      type="range" 
      min="0" 
      max="100"
    />
    );

    const video = (
        <audio autoPlay loop className="playerVideo" src={this.state.songMP3}
        ref={video => {
            this.myVideo = video;
        }}
        onCanPlay={this.setDuration}    // Callback when video loads   
        onTimeUpdate={this.setTime} /> // Callback every ~250ms with currentTime
    );

    return (
      <div className="MakeRoom2">
        <img className = "MakeRoom2Picture" src="SlapOrCash.png"/>
        <div className='MakeRoomTitle'>
          <h1>Voting :</h1>
        </div>
        <div className='MakeRoom2Voting'>
          <p>{this.state.vote.vote2}</p>
          <button onClick={this.props.setResultsM} className="MakeRoom2VotingButton">Next</button>
        </div>
        {video}
        <img className = "MakeRoom2Image"src ={this.state.songImage}/>
        {input}
      </div>
    );
  }
}

export default MakeRoom2;
