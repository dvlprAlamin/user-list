import React from 'react';
import AddedUserInfo from '../AddedUserInfo/AddedUserInfo';
import './AddedUsers.css'
const AddedUsers = ({addUsers, removeUser}) => {
    const salary = addUsers.reduce((total, user) => total + user.salary,0)
    return (
        <div className="added-users">
            <h3 className="user-count">Added {addUsers?.length} users</h3>
            <h4 className="total-salary">Total salary: {salary}</h4>
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