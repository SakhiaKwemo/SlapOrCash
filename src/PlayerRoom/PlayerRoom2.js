import React, {Component} from 'react';
import axios from "axios";

class PlayerRoom2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      seconds: 2, 
      vote1: null, 
      ready: false, 
      ready2: false, 
      vote: "select vote", 
      color: "gray", 
      color2: "gray", 
      color3: "gray", 
      image1: "/Heart2.png", 
      image2: "/SlapCash2.png" 
    };
  }

  setSeconds = (e) => {
    if(this.state.ready == true){
      this.setState({
        seconds: this.state.seconds - 1 
      });
    }
  }

  componentDidMount = () => {
    const timeinterval = setInterval(() => {
      axios.get("http://localhost:3001/Ready").then((response) => {
        if (response.data[0].ready == 5) {
          this.state.ready = true
        }
        this.setSeconds();
      }); 
      if (this.state.seconds == 0) {
          this.setImage();
          clearInterval(timeinterval);
      }
    },1000);
  }

  sendHeart = () => {
    axios.post("http://localhost:3001/voteheart", {room: this.props.room}).then(() => { console.log("success2")}) 
    axios.get("http://localhost:3001/getVoteCount").then((response) => {
      this.props.setResultsP(response.data[0].vote2);
    }); 
    this.props.myVote("heart");
  }

  sendSC = () => {
    axios.post("http://localhost:3001/voteSC", {room: this.props.room}).then(() => { console.log("success2")}) 
    axios.get("http://localhost:3001/getVoteCount").then((response) => {
      this.props.setResultsP(response.data[0].vote2);
    }); 
    this.props.myVote("slap");
  }

  setImage = () => {
    this.setState({
      image1: "/Heart.png", 
      image2: "/SlapCash.png", 
      ready2: true 
    });
  }

  setNext = () => {
    if(this.state.vote == "heart"){
      this.sendHeart();
    }
    else if (this.state.vote == "slapcash") {
      this.sendSC();
    }
  }

  render () {
    return (
      <div>
        <img className = "MakeRoom2Picture" src="SlapOrCash.png"/>
        <div className='MakeRoomTitle'>
          <h1>Voting</h1>
        </div>
        {!this.state.ready &&
          <p style={{color: "white"}}>Waiting for the game to start</p>
        }
        {this.state.ready &&
        <div>
          {!this.state.ready2 
          ?
          <button disabled style = {{cursor: "not-allowed", color: "this.state.color3", borderColor: this.state.color3, width: "150px", marginTop: "40px"}} className="HeartWinnerButton2" onClick = {this.setNext}>{this.state.vote}</button>
          :
          <button style = {{color: this.state.color3, borderColor: this.state.color3, width: "150px", marginTop: "40px"}} className="HeartWinnerButton2" onClick = {this.setNext}>{this.state.vote}</button> 
          }
          <div style = {{marginTop: "10px", backgroundColor: "black", height: "250px"}} className='ResultsMakerVoteBox'>
            <img style = {{height: "150px", width: "150px", borderColor: this.state.color, borderWidth: "3px", borderStyle: "solid", borderRadius: "20px", marginRight: "20px"}} className="voteBox1" onClick = {() => {if (this.state.ready2){this.setState({vote: "heart", color2: "gray", color: "red", color3: "red"})}}} src={this.state.image1}/>
            <img style = {{height: "150px", width: "150px", borderColor: this.state.color2, borderWidth: "3px", borderStyle: "solid", borderRadius: "20px", marginLeft: "20px"}} className="voteBox2" onClick = {() => {if(this.state.ready2){this.setState({vote: "slapcash", color: "gray", color2: "green", color3: "green"})}}} src={this.state.image2}/>
          </div>
          {!this.state.ready2 && <p style ={{fontSize: "30px", fontFamily:"'Russo One', sans-serif", color: "gray"}}>{this.state.seconds}</p>}
        </div>
        }
      </div>
    );
  }
}

export default PlayerRoom2;
