import React from 'react';
import './Warning.css'
const Warning = ({text}) => {
    return (
        <div className="warning-text">
            <h2>{text}</h2>
        </div>
    );
};

export default Warning;