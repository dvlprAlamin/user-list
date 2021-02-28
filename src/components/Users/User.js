import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faUser, faPhone, faEnvelope, faMoneyCheck } from '@fortawesome/free-solid-svg-icons'
import './User.css'
const User = (props) => {
    const {cell, email, name, picture, location} = props.user;
    const [ isClicked, setIsClicked ] =  useState(false);
    return (
        <div className="user">
            <img src={picture.large} alt=""/>
            <div className="user-details">
                <h3><FontAwesomeIcon className='icons' icon={faUser} /> {name.first+ ' '+ name.last}</h3>
                <h4><FontAwesomeIcon className='icons' icon={faEnvelope} /> {email}</h4>
                <h4><FontAwesomeIcon className='icons' icon={faPhone} /> {cell}</h4>
                <h4><FontAwesomeIcon className='icons' icon={faMoneyCheck} />  ${location.salary}</h4>
            </div>
            <button disabled={isClicked} onClick={() => {
                props.addUserHandler(props.user)
                setIsClicked(true)
                }} className="add-user">
                    {isClicked ? '✔ User added' : "⊕ Add user"}
                    </button>
        </div>
    );
};

export default User;