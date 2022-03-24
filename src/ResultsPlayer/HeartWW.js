import React, {Component} from 'react';
import axios from "axios"; 

class HeartWW extends Component {

  constructor(props) {
    super(props);
    this.state = {
      heart: [], 
      name: "", 
      seconds: 30, 
      length: 0, 
      video: null, 
      color: "white"
    };
  }

  setVideo = () => {
    if(this.state.name == this.props.room) {
      this.setState({
        video: "crowdYay.mp4", 
        color: "red"
      });
    }
    else if (this.state.name != this.props.room) {
      this.setState({
        video: "Boo.mp4"
      });
    }
   }

  setHeart = (e) => {
    console.log(e)
    if(true){ //if(e.vote1 == "heart")
        this.state.heart.push(e.roomkey)
    }
  }

  setName = () => {
    var r = Math.floor(Math.random() * this.state.length);
    this.setState({
      name: this.state.heart[r],  
      seconds: this.state.seconds - 1
    });
  }

  setName2 = (e) => {
    this.setState({
      name: e
    });
    if(this.props.room == e) {
      this.setState({
        video: "crowdYay.mp4", 
        color: "red"
      });
    }
    else {
      this.setState({
        video: "Boo.mp4"
      });
    }
  }

  setLength = (e) => {
    this.setState({
      length: e,  
    });
  }

  Empty = () => {
    this.props.setHome();
  }

  componentDidMount() {
    axios.get("http://localhost:3001/get").then((response) => {
      for (var i = 0; i < response.data.length; i++){
        this.setHeart(response.data[i]);
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
          this.myVideo.play();
          clearInterval(timeinterval);
      }
    },100);
  };

  render () {
    const video = (
      <video className="playerVideo" src= {this.state.video}
      ref={video => {
          this.myVideo = video;
      }}/> // Callback every ~250ms with currentTime
    );
  
    return (
      <div>
        {video}
        <img className = "MakeRoom2Picture" src="SlapOrCash.png"/>
        <div className='MakeRoomTitle'>
          <h1>Heart Winner</h1>
        </div>
        <img style={{height: "200px", marginTop: "20px", marginBottom: "-20px"}} src="/Heart.png"/>
        <p style={{color: this.state.color, fontSize: "45px", fontFamily: "'Russo One', sans-serif"}}>{this.state.name}</p>
        <a style = {{width: "200px", height: "60px", color: "red", borderColor: "red"}} className="HeartWinnerButton" href="https://www.instagram.com/djkwemo/">Follow Me</a>
      </div>
    );
  }
}

export default HeartWW;
