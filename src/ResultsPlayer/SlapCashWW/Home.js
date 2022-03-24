import React, {Component} from 'react';
import axios from "axios"; 

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ready: false, 
      ready2: false, 
      vote: "select vote", 
      color: "gray", 
      color2: "gray", 
      color3: "gray", 
      image1: "/Slap.png", 
      image2: "/Cash.png" 
    };
  }

  setNext = () => {
    if(this.state.vote== "slap"){
      this.props.setSlap();
    }
    else if (this.state.vote== "cash") {
      this.props.setCash();
    }
  };

  render () {
    return (
      <div>
        <img className = "MakeRoom2Picture" src="SlapOrCash.png"/>
        <div className='MakeRoomTitle'>
          <h1>Voting</h1>
        </div>
        <div>
          <button style = {{color: this.state.color3, borderColor: this.state.color3, width: "150px", marginTop: "40px"}} className="HeartWinnerButton2" onClick = {this.setNext}>{this.state.vote}</button> 
          <div style = {{marginTop: "10px", backgroundColor: "black", height: "250px"}} className='ResultsMakerVoteBox'>
            <img style = {{height: "150px", width: "150px", borderColor: this.state.color, borderWidth: "3px", borderStyle: "solid", borderRadius: "20px", marginRight: "20px"}} className="voteBox3" onClick = {() => {{this.setState({vote: "slap", color2: "gray", color: "gold", color3: "gold"})}}} src={this.state.image1}/>
            <img style = {{height: "150px", width: "150px", borderColor: this.state.color2, borderWidth: "3px", borderStyle: "solid", borderRadius: "20px", marginLeft: "20px"}} className="voteBox2" onClick = {() => {{this.setState({vote: "cash", color: "gray", color2: "green", color3: "green"})}}} src={this.state.image2}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
