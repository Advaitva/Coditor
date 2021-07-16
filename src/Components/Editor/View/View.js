import React from 'react';

import './View.css';

class View extends React.Component{
    render() {
        return (
            <div className="View">
                Live View
                <iframe srcDoc={this.props.code} title="liveview" frameBorder="0" className="View--Frame"></iframe>
            </div>
        )
    }
}
export default View;