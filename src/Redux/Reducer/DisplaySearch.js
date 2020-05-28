import { SEARCH_COURSES, SEARCH_USER } from "../Action/type";

let initialState = {
    searchKeyword: ''
}
const DisplaySearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_COURSES: {
            return { ...state, searchKeyword: action.payload }
        }
        // case SEARCH_USER: {
        //     return { ...state, searchKeyword: action.payload }
        // }
        default:
            return state;
    }
}
export default DisplaySearchReducer