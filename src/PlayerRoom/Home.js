import React, {Component} from 'react';
import axios from "axios";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      roomkey: "", 
    };
  }

  getRoomKey = (e) => {
    console.log(e.target.value)
    this.setState({
      roomkey: e.target.value, 
    });
  }

  sendRoomKey = () => {
    this.props.setKey(this.state.roomkey);
    const key = this.state.roomkey; 
    axios.post("http://localhost:3001/create", {roomkey: key}).then(() => { console.log("success1")})   
    this.props.setR2(key); 
  }

  render () {      
    return (
        <div>
        <img className = "MakeRoom2Picture" src="SlapOrCash.png"/>
        <div className='MakeRoomTitle'>
          <h1>Username</h1>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "350px"}}>
          <input style={{width: "300px", height: "30px", marginTop: "100px", backgroundColor: "black", color: "gold", fontSize: "17px", paddingLeft: "20px", borderColor: "gold", borderRadius: "20px", borderWidth: "3px", borderStyle: "solid"}} type = "text" onChange={this.getRoomKey} placeholder = "Create Username"/>
          <button style={{width: "180px", marginTop: "100px"}} className="MakeRoom2VotingButton" onClick={this.sendRoomKey}>Enter Game</button>
        </div>
        </div>
    );
  }
}

export default Home;
