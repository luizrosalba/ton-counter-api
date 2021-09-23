import * as req from "../api/AppRequests"

//Get user info.
export const getUserInfo = (id) =>{
    return req.getUserInfo(id);
}

//Create user.
export const createUser = (props) =>{
    return req.createUser(props);
}

