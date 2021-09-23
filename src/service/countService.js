import * as util from "../utils/constants";

import * as req from "../api/AppRequests"

// const createKey = () =>{
//     let options={
//       key:	"6d58a1ff-eb5a-484b-a720-8549a6asdbf3a", /// Name of the key
//       namespace: util.API_COUNTER_NAMESPACE, //Namespace to store the key	
//       value:	0,	// The initial value
//       enable_reset:	0,	//Allows the key to be resetted with set
//       update_lowerbound:	-1,	 //Restrict update to not subtract more than this number. This number must be negative or zero.
//       update_upperbound:	1	 //	Restrict update to not add more than this number. This number must be positive or zero.
//     }

//     countapi.create(options).then(
//         (result) => {console.log(result)}
//     );
// }

//Get the value of a key.
export const getKeyValue = () =>{
    let options={
        key: util.API_COUNTER_KEY,
        namespace: util.API_COUNTER_NAMESPACE,
    }
    return req.getKeyValue(
        options.namespace, 
        options.key
    );
}

//Set the value of a key.
export const setKeyValue = (value) =>{
    let options={
        key: util.API_COUNTER_KEY,
        namespace: util.API_COUNTER_NAMESPACE,
        value
    }
    return req.setKeyValue(
        options.namespace, 
        options.key, 
        options.value
    )
}

//Retrive information about a key.
export const getInfoKey = () =>{
    let options={
        key: util.API_COUNTER_KEY,
        namespace: util.API_COUNTER_NAMESPACE, //Namespace to store the key	
    }
    return req.getInfoKey(
        options.namespace, 
        options.key
    )
}

//Increment key by one
export const updateKeyValue = () =>{
    let options={
        key: util.API_COUNTER_KEY,
        namespace: util.API_COUNTER_NAMESPACE, //Namespace to store the key	
        amount: +1, //can be negative	    
    }
    return req.updateKeyValue(
        options.namespace, 
        options.key,
        options.amount
    )
}