import React, {Component} from 'react';
import axios from "axios"; 

class Home2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    const timeinterval = setInterval(() => {
      axios.get("http://localhost:3001/Ready").then((response) => {
        if(response.data[0].ready == 3) {
          this.props.setHome();
        }
    }); 
    },1000);
  }

  render () {
    return (
      <div className='ResultsMakerHome'>  
        <img className = "MakeRoom2Picture" src="SlapOrCash.png"/>
        <div className='MakeRoomTitle'>
          <h1>Results</h1>
        </div>
        <p style={{color: "white"}}>We are waiting for all votes to come in</p>
      </div>
    );
  }
}

export default Home2;
