import api from "./Requests"

export async function serverAlive() {
    try {
        return api.get("/isAlive").then(
        (res) => {
            if (res.data==="Server Alive"){
                return(true)
            }else{
                return("")
            }
        })
    }catch(e) {
        console.error("Failed to require service");
        throw e;      
    }
}

export const getKeyValue = (namespace, key) => 
new Promise((resolve, reject) => {
    let data= {
        namespace, 
        key
    }
    try {
        return api.post("/counter/accesses",data)
        .then((res) =>{
            (res.data)? 
                resolve(res.data)
            :
                reject("")
        })
    }catch(e) {
        console.log("Failed to get key value API");
        throw e;      
    }
})

export const setKeyValue = (namespace, key, value) => 
    new Promise((resolve, reject) => {
    try {
        let data={
            namespace, 
            key,
            value
        }
        return api.post("/counter/setKeyValue", data).then(
            (res) => 
            {(res.data)?
                resolve(res.data)
                :
                reject("")
        })
    }catch(e) {
        console.error("Failed to set key value API");
        throw e;      
    }
})

export const getInfoKey = (namespace, key) => 
    new Promise((resolve, reject) => {
    try {
        let data= {
            namespace, 
            key
        }
        return api.post("/counter/getInfoKey", data).then(
            (res) => 
            {(res.data)?
                resolve(res.data)
                :
                reject("")    
        })
    }catch(e) {
        console.error("Failed to get Info key API");
        throw e;      
    }
})

export const updateKeyValue = (namespace, key, amount) => 
    new Promise((resolve, reject) => {
    try {
        let data= {
            namespace, 
            key,
            amount
        }
        return api.post("/counter/updateKeyValue", data).then(
            (res) => 
            {(res.data)?
                resolve(res.data)
                :
                reject("")    
        })
    }catch(e) {
        console.error("Failed to update key value API");
        throw e;      
    }
})

export const getUserInfo = (id) => 
    new Promise((resolve, reject) => {
    try {
        let data= {
            id
        }
        return api.post("/users/getUserByID", data).then(
            (res) => 
            {(res.data)?
                resolve(res.data)
                :
                reject("")    
        })
    }catch(e) {
        console.error("Failed to get user info");
        throw e;      
    }
})

export const createUser = (data) => 
    new Promise((resolve, reject) => {
    try {
        return api.post("/users/createUser", data).then(
            (res) => 
            {(res.data)?
                resolve(res.data)
                :
                reject("")    
        })
    }catch(e) {
        console.error("Failed to create user");
        throw e;      
    }
})