import React, {Component} from 'react';
import axios from "axios"; 

import { Scrollbars } from 'react-custom-scrollbars';
import { FaArrowAltCircleRight} from 'react-icons/fa';
import { TIS620_BIN } from 'mysql/lib/protocol/constants/charsets';

class MakeRoom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      disabled: true, 
      buttonClass: "NextIcon2", 
      key: null, 
      length: 0, 
      song: 'Please Select A Song', 
      song2: [], 
      id: null
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/getSongs").then((response) => {
        this.setSong2(response.data)
      }); 
    const timeinterval = setInterval(() => {
      axios.get("http://localhost:3001/get").then((response) => {
        this.setLength(response.data.length)
        this.setNewKey(response.data[this.state.length - 1]);
      }); 
    },1000);
  };

  setSong2 = (e) => {
    this.setState({
      song2: e
    });
  }

  setLength = (e) => {
    this.setState({
      length: e
    });
  }

  setNewKey = (e) => {
    if (e != null) {
      this.setState({
        key: e.roomkey 
      });
    }
  }

  setNext = () => {
    axios.post("http://localhost:3001/Ready5").then(() => { console.log("success5")})
    this.props.setID(this.state.id);
    this.props.setHost2();
  }

  renderThumb({ style, ...props }) {
    const thumbStyle = {
        backgroundColor: `rgb(233, 135, 178)`, 
        borderRadius: "5px", 
        width: "10px"
    };
    return (
        <div
            style={{ ...style, ...thumbStyle }}
            {...props}/>
    );
  }

  render () {

    
    const songz = this.state.song2;

    const songList = songz.map((song,index) => {
      return (
        <tr onClick={() => {    this.setState({
          song: song.title,  
          disabled: false, 
          buttonClass: "NextIcon",
          id: song.id
        });}}>
        <th>{song.title}</th>
        </tr>
      );
    })

    return (
      <div className="MakeRoom">
        <img src="SlapOrCash.png"/>
        <div className='MakeRoomTitle'>
          <h1> Pick Song</h1>
        </div>
        <div className='MakeRoomNameList'>
          <text>{this.state.key}</text>
          <p>Just joined the Game!!!</p>
          <p className='MakeRoomNumber'>{this.state.length}</p>
        </div>
        <Scrollbars style = {{width: "100%", height: "190px"}}
                                    renderThumbVertical={this.renderThumb}
        >
          <div className='MakeRoomPickSong'>
          <table className='MakeRoomTable'>
            <thead>
              <tr>
                <th>Title</th>
              </tr>
            </thead>
            <tbody className='MakeRoomTableRow'>
              {songList}
            </tbody>
          </table>
          </div>
        </Scrollbars>
        <button disabled = {this.state.disabled} onClick = {this.setNext} className={this.state.buttonClass}>{this.state.song}</button>
      </div>
    );
  }
}

export default MakeRoom;
