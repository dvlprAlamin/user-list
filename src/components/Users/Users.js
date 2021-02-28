import React, { useEffect, useState } from 'react';
import './Users.css';
import data from '../../data/data.json'
import User from './User';
const Users = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        setUser(data);
    }, [])
    return (
        <div className="users-container">
            <div className="users">
                {
                    user.map(user => <User key={user.cell} user={user}></User>)
                }
            </div>
            <div className="added-users">

            </div>
        </div>
    );
};

export default Users;