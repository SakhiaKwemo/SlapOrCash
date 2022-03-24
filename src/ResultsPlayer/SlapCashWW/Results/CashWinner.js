import React, {Component} from 'react';
import axios from "axios"; 

class CashWinner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cash: [], 
      name: "", 
      seconds: 30, 
      length: 0,
      video: null,  
      color: "white"
    };
  }

  setVideo = (e) => {
    if(this.props.room == "e") {
      this.setState({
        video: "crowdYay.mp4", 
        color: "green"
      });
    }
    else {
      this.setState({
        video: "Boo.mp4"
      });
    }
   }

  setCash = (e) => {
    if(true){ //if(e.vote1 == "cash")
        this.state.cash.push(e.roomkey)
    }
  }

  setName = () => {
    var r = Math.floor(Math.random() * this.state.length);
    this.setState({
      name: this.state.cash[r],  
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
        color: "green"
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
        this.setCash(response.data[i]);
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
        //this.setVideo("e");
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
          <h1>Cash Winner</h1>
        </div>
        <img style={{height: "200px", marginTop: "20px", marginBottom: "-20px"}} src="/Cash.png"/>
        <p style={{color: this.state.color, fontSize: "45px", fontFamily: "'Russo One', sans-serif"}}>{this.state.name}</p>
        <button style = {{width: "200px", height: "60px", color: "green", borderColor: "green"}} className="HeartWinnerButton" onClick={this.Empty}>Follow Me On Instagram</button>
      </div>
    );
  }
}

export default CashWinner;
