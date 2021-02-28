import React from 'react';
import './User.css'
const User = (props) => {
    const {cell, email, name, picture} = props.user;
    return (
        <div className="user">
            <img src={picture.large} alt=""/>
            <div className="user-details">
                <h3>Name: {name.first+ ' '+ name.last}</h3>
                <h4>Email: {email}</h4>
                <h4>Cell: {cell}</h4>
            </div>
            <button className="add-friend">Add friend</button>
        </div>
    );
};

export default User;