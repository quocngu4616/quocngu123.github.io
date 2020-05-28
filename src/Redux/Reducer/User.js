import * as type from "../Action/type";

let initialState={
    credentials:{},
    userList:[]
}
const UserReducer=(state=initialState,action)=>{
    switch(action.type){
        case type.FETCH_CREDENTIALS:{
            state.credentials=action.payload
            return {...state}
        }
        case type.SET_CREDENTIALS_EMPTY:{
            state.credentials=action.payload
            return {...state}
        }
        case type.FETCH_USERS:{
            state.userList=action.payload
            return {...state}
        }
        case type.ADD_USERS:{
            // state.userList.push(action.payload)
            state.userList=[...state.userList,action.payload]
            return {...state}
        }
        case type.DELETE_USERS:{
            let newList=[...state.userList];
            newList=state.userList.filter(user=>user.taiKhoan !== action.payload);
            state=newList;
            return{...state}
        }
        default: return state;
    }
}
export default UserReducer