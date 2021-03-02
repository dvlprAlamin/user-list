import React from 'react';
import AddedUserInfo from '../AddedUserInfo/AddedUserInfo';
import './AddedUsers.css'
const AddedUsers = ({addUsers, removeUser}) => {
    const salary = addUsers.reduce((total, user) => total + user.salary,0)
    return (
        <div className="added-users">
            <h3>Added {addUsers?.length} users</h3>
            <h4>Total salary: {salary}</h4>
            <div className="user-info">
                <AddedUserInfo 
                addUsers={addUsers}
                removeUser={removeUser}
                />
            </div>
        </div>
    );
};

export default AddedUsers;