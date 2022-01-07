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
      <div>
          <p>Wait until the results are ready to be shown</p>
      </div>
    );
  }
}

export default Home2;
