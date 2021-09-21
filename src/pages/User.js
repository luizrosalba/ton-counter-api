import React, {useState, useEffect} from 'react'

import {
    getUserInfo
} from "../service/userService"

import '../styles/Home.css';

const User = () => {
    const [user, setUser] = useState(1);
    const [id, setId] = useState(null);
    
    useEffect(() => {
        getUserInfo(id).then(
          (res)=>{
            setUser(res)
        })
      }, [id])

    return (
        <>
        {(user)?
        (
            <div style={{
                display: "block",
                margin:"30px",
                fontSize:"24px"
            }}>
                User Info: 
            <div>
                ID: 
                <input 
                  type="text" 
                  value={id}
                  onChange={e => setId(e.target.value)}
                  autoFocus={true}
                />
            </div>
            <div>
                UserName: {user.UserName}
            </div>
            <div>
                Password: {user.Password}
            </div>
            <div>
                Email: {user.Email}
            </div>
            <div>
                Cpf: {user.Cpf}
            </div>
            </div>
        ):
        (
            <div> No info to Display</div>
        )}
        </>
    )
}
export default User;
