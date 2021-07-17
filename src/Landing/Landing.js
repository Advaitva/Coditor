import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Typewriter from 'typewriter-effect';
import './Landing.css';
class Landing extends React.Component{
    render() {
        return (
            <div className="Landing">
                <Navbar />
                <div className="Landing--Body">
                    <div className="Landing--Type">

                    <Typewriter options={{ strings: ['Code.', 'Edit.', 'Visualize.'], autoStart: true, loop: true }} />
                    </div>
                    <a href="/edit">
                    <div className="Landing--Btn" >
                        Code Now!
                    </div>
                    </a>
                </div>
            </div>
        )
    }
}
export default Landing;