import React, {Component} from 'react';
import axios from "axios"; 

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    const timeinterval = setInterval(() => {
      axios.get("http://localhost:3001/Ready").then((response) => {
        if(response.data[0].ready == 1) {
          this.props.setHome();
        }
    }); 
    },1000);
  }

  render () {
    return (
      <div>
          <p>We are simply waiting for all the resutls to come in</p>
      </div>
    );
  }
}

export default Home;
