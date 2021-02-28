import React, { useEffect, useState } from 'react';
import './Users.css';
import data from '../../data/data.json'
import User from './User';
import AddedUsers from '../Added-users/AddedUsers';
const Users = () => {
    const [user, setUser] = useState([]);
    useEffect(() => setUser(data), [])
    const [addUsers, setAddUsers] = useState([])
    const addUserHandler = (user) => {
        setAddUsers([...addUsers, user]);
    }
    return (
        <div className="users-container">
            <div className="users">
                {
                    user.map(user => <User
                        key={user.cell}
                        user={user}
                        addUserHandler={addUserHandler}
                        ></User>)
                }
            </div>
            <div className="added-users">
                <AddedUsers addUsers={addUsers}/>
            </div>
        </div>
    );
};

export default Users;