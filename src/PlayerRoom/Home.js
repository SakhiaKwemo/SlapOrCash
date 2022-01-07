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
    const key = this.state.roomkey; 
    axios.post("http://localhost:3001/create", {roomkey: key}).then(() => { console.log("success1")})   
    this.props.setR2(key); 
  }

  render () {      
    return (
        <div>
        <p>Write Down your name</p>
        <p>Try and use a unique name (i.e) First Name Last Name, make sure nobody takes the same name as you</p>
        <input onChange={this.getRoomKey}/>
        <button onClick={this.sendRoomKey}>Create Username</button>
        </div>
    );
  }
}

export default Home;
