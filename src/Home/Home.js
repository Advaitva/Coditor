import React from 'react';
import axios from 'axios';

import Editor from '../Components/Editor/Editor';
import Navbar from '../Components/Navbar/Navbar';
import "./Home.css";

class Home extends React.Component{
  
    render() {
        return (
            <div className="Home">
                <Navbar />
                <Editor/>
            </div>
        )
    }
}
export default Home;