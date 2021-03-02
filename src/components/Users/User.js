import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPhone, faEnvelope, faMoneyCheck } from '@fortawesome/free-solid-svg-icons'
import './User.css'
const User = ({user,addUserHandler}) => {
    const {cell, email, name, picture, salary} = user;
    const [ isClicked, setIsClicked ] =  useState(false);
    return (
        <div className="user">
            <img src={picture.large} alt=""/>
            <div className="user-details">
                <h3><FontAwesomeIcon className='icons' icon={faUser} /> {name.first+ ' '+ name.last}</h3>
                <h4><FontAwesomeIcon className='icons' icon={faEnvelope} /> {email}</h4>
                <h4><FontAwesomeIcon className='icons' icon={faPhone} /> {cell}</h4>
                <h4><FontAwesomeIcon className='icons' icon={faMoneyCheck} />  ${salary}</h4>
            </div>
            <button disabled={isClicked} onClick={() => {
                addUserHandler(user)
                setIsClicked(true)
                }} className="add-user">
                    {isClicked ? '✔ User added' : "⊕ Add user"}
                    </button>
        </div>
    );
};

export default User;