import React from 'react';
import './AddedUserInfo.css'
const AddedUserInfo = (props) => {
    return (
        <div className='added'>
            {
                props.addedUser.map(user => 
                <div  key={user.name?.first}  className='added-users'>
                    <img src={user.img?.thumbnail} alt=""/>
                    <h5>{user.name?.first +' '+user.name?.last}</h5>
                    <button>✖</button>
                </div>)
            }
        </div>
    );
};

export default AddedUserInfo;