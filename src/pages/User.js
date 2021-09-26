import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'

import {
    getUserInfo
} from "../service/userService"

import '../styles/Home.css';

const User = () => {
    const [user, setUser] = useState(0);
    const [id, setId] = useState(0);
    
    useEffect(() => {
        getUserInfo(id)
        .then(
          (userInfo)=>{
            setUser(userInfo)
        })
        .catch((e)=>
            console.error("No user with this ID", e)
        )
      }, [id])

    return (
    <>
    <div className="ton-user-info-wrapper">
        <div className="ton-user-display">
            <div className="ton-user-title-header">
                User Info
            </div>
            <div className="user-info-grid">
                <div>
                    User ID: 
                </div>
                <div>
                    <input
                        type="text"
                        className="user-info-input"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        autoFocus={true}
                    />
                    <Button 
                        className="user-info-buttons"
                        variant="outline-success"
                        onClick={()=>{setId(id+1)}}>
                        +
                    </Button>
                    <Button 
                        className="user-info-buttons"
                        variant="outline-danger"
                        onClick={()=>{(id===0)?setId(0):setId(id-1)}}>
                        -
                    </Button>
                </div>
                <div>
                    UserName:
                </div>
                <div>
                    {user.UserName}
                </div>
                <div>
                    Password: 
                </div>
                <div>
                    {user.Password}
                </div>
                <div>
                    Email:
                </div>
                <div>
                    {user.Email}
                </div>
                <div>
                    Cpf:
                </div>
                <div>
                    {user.Cpf}
                </div>
            </div>

        </div>
    </div>
    
    </>
    )
}
export default User;
