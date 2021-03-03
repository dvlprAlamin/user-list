import React, { useEffect, useState } from 'react';
import './Users.css';
import User from './User';
import AddedUsers from '../Added-users/AddedUsers';
import Warning from '../Warning/Warning';
const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=18')
        .then(res => res.json())
        .then(data => setUsers(data.results.map(user => {
            return {...user, salary:(Math.round(Math.random()*10000))}
        })))
    }, [])
    const [addUsers, setAddUsers] = useState([])
    // const addUserHandler = (user) => {
    //     setAddUsers([...addUsers, user]);
    // }
    const [warning, setWarning] = useState('')
    const addUserHandler = user => {
        if(addUsers.find(users => users === user )){
            setAddUsers(addUsers);
            setWarning(user.name?.first + ' ' + user.name?.last + ' already added')
            setTimeout(() => setWarning(''), 2000);
        }
        else{
            setAddUsers([...addUsers, user]);
        }
    }


    const removeUser = cell => {
        setAddUsers(addUsers.filter(user => user.cell !== cell));

    }
    return (
        <div className="users-container">
            <Warning text={warning}/>
            <div className="users">
                {
                    users.map(user => <User
                        key={user.cell}
                        user={user}
                        addUserHandler={addUserHandler}
                        ></User>)
                }
            </div>
            <div className="users-added">
            <AddedUsers 
                addUsers={addUsers}
                removeUser={removeUser}
                />
            </div>
        </div>
    );
};

export default Users;