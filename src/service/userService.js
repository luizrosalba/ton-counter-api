import * as util from "../utils/constants";

import * as req from "../api/AppRequests"

//Get user info.
export const getUserInfo = (id) =>{
    let options={
        id
    }
    return req.getUserInfo(
        options.id, 
    );
}

//Create user.
export const createUser = (props) =>{
    const {
        userName,
        password,
        email,
        cpf,
    } = props
    return req.createUser(props);
}

