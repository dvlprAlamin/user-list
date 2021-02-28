import React from 'react';
import AddedUserInfo from '../AddedUserInfo/AddedUserInfo';
import './AddedUsers.css'
const AddedUsers = (props) => {
    const salary = props.addUsers.reduce((total, item) => total + item.location?.salary,0)
    let addedUser = props.addUsers.reduce((total, item) => [...total, {name:item.name,img:item.picture}] ,[])
    return (
        <div>
            <h3>Added {props.addUsers?.length} users</h3>
            <h4>Total salary: {salary}</h4>
            <div className="user-info">
                <AddedUserInfo addedUser={addedUser}/>
            </div>
        </div>
    );
};

export default AddedUsers;