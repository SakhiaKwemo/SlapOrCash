import React from 'react';
import { FaTable, FaMusic, FaBook, FaVideo, FaMobileAlt, FaMale} from 'react-icons/fa';
import { BrowserRouter as Router } from "react-router-dom";

import ImageLogo from './ImageLogo';

function NavBar(props) {
  return (
    <Router>
        <div className="Nav">
            <div className="NavBox1">
                <a 
                    style = {{background: props.activeT && "black", color: props.activeT && "rgb(226, 78, 78)"}}
                    href ="/Tours" className="tabOption">
                    <FaTable className="navIcon" size="15px"/>Games
                </a>
            </div>
            <img src ="Muzic.png"/>
            <div className="NavBox2">
                <a 
                    style = {{background: props.activeCt && "black", color: props.activeCt && "rgb(226, 78, 78)"}}
                    href ="/Content" className="tabOption">
                    <FaVideo className="navIcon" size="15px"/>
                    AboutUs
                </a>
            </div>
        </div>
    </Router>
  );
}

export default NavBar;

