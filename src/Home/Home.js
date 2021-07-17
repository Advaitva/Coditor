import React from 'react';
import axios from 'axios';

import Editor from '../Components/Editor/Editor';
import Navbar from '../Components/Navbar/Navbar';
import "./Home.css";

class Home extends React.Component{
    async componentDidMount() {
        const data = {
            "api_dev_key": "M5DdG_pG8S-0tckZ_R7Pav67v7UyG4jI",
            "api_option": "paste",
            "api_paste_code":"Testing"
        }
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              },
          }
        try {
            let res = await axios.post("https://pastebin.com/api/api_post.php",data,config);
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    }
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