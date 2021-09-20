import api from "./Requests"

export async function serverAlive() {
    try {
        return api.get("/isAlive").then(
        (res) => {
            if (res.data==="Server Alive"){
                return(true)
            }else{
                return(false)
            }
        })
    }catch(e) {
        console.log("Failed to require service");
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
                reject(false)
        })
    }catch(e) {
        console.log("Failed to counter API");
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
                reject(false)
        })
    }catch(e) {
        console.log("Failed to counter API");
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
                reject(false)    
        })
    }catch(e) {
        console.log("Failed to counter API");
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
                reject(false)    
        })
    }catch(e) {
        console.log("Failed to counter API");
        throw e;      
    }
})