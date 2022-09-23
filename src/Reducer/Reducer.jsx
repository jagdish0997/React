import {Add} from "../Types/Types";

const InitState = {};
 
export default function Reducer(state=InitState,action){

    const{type,payload} = action
    switch (action.type) {
        case Add:
            return {...state,payload} 
        default:
           return state
    }
} 