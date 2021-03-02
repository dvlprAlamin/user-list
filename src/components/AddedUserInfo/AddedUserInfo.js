import React from 'react';
import './AddedUserInfo.css'
const AddedUserInfo = ({addUsers, removeUser}) => {
    return (
        <div className='added'>
            {
                addUsers.map(user => 
                <div  key={user.cell}  className='added-users-info'>
                    <img src={user.picture?.thumbnail} alt=""/>
                    <h5>{user.name?.first +' '+user.name?.last}</h5>
                    <button onClick={() => removeUser(user.cell)}>✖</button>
                </div>)
            }
        </div>
    );
};

export default AddedUserInfo;