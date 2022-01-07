import React, {Component} from 'react';
import axios from "axios"; 

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vote: [], 
    };
  }

  
  setVote = (e) => {
    this.setState({
      vote: e 
    });
  }

  componentDidMount() {
    axios.get("http://localhost:3001/getVoteCount").then((response) => {
      this.setVote(response.data[0]);
    }); 
    const timeinterval = setInterval(() => {
      axios.get("http://localhost:3001/getVoteCount").then((response) => {
        this.setVote(response.data[0]);
      }); 
    },1000);
  };

  render () {

    const video = (
      <video autoPlay loop className="playerVideo" src={"Jeopardy.mp4"}
      ref={video => {
          this.myVideo = video;
      }}/> // Callback every ~250ms with currentTime
    );

    return (
      <div>
        {video}
        <img className = "MakeRoom2Picture" src="SlapOrCash.png"/>
        <div className='MakeRoomTitle'>
          <h1>Voting :</h1>
        </div>
        <div className='MakeRoom2Voting'>
          <p>{this.state.vote.vote2}</p>
          <button onClick={this.props.setResults} className="MakeRoom2VotingButton2">Next</button>
        </div>
        <div style={{display: "flex", flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "center", marginTop: "45px"}}>
          <img style={{height: "150px", marginRight: "20px", marginLeft: "20px", marginTop: "50px"}}src="Slap.png"/>
          <img style={{height: "150px", marginRight: "20px", marginLeft: "20px", marginTop: "50px"}} src="Cash.png"/>
        </div>
      </div>
    );
  }
}

export default Home;
