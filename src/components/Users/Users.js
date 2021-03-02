import React, { useEffect, useState } from 'react';
import './Users.css';
import User from './User';
import AddedUsers from '../Added-users/AddedUsers';
const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=18')
        .then(res => res.json())
        .then(data => setUsers(data.results.map(user => {
            return {...user, salary:(Math.round(Math.random()*10000))}
        })))
    }, [])
    // const newUsers = users.map(user => {
    //     return {...user, salary:(Math.random().toFixed(3)*10000)}
    // })
    // setUsers(newUsers);
    // console.log(newUsers);
    const [addUsers, setAddUsers] = useState([])
    const addUserHandler = (user) => {
        setAddUsers([...addUsers, user]);
    }
    const removeUser = cell => {
        setAddUsers(addUsers.filter(user => user.cell !== cell))
    }
    return (
        <div className="users-container">
            <div className="users">
                {
                    users.map(user => <User
                        key={user.cell}
                        user={user}
                        addUserHandler={addUserHandler}
                        ></User>)
                }
            </div>
            <div className="added-users">
                <AddedUsers 
                addUsers={addUsers}
                removeUser={removeUser}
                />
            </div>
        </div>
    );
};

export default Users;