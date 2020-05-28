import * as type from "../Action/type";

let initialState = {
    categories: [],
    choosenCategory: "BackEnd",//lưu giá trị là mã danh mục
    courseCategories: [],
    courses: [],
    couseDetail: null,
}
const CourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.FETCH_CATEGORIES: {
            // console.log(action.payload);          
            state.categories = action.payload
            return { ...state }
        }
        case type.FETCH_COURSE_CATEGORIES: {
            state.courseCategories = action.payload
            return { ...state }
        }
        case type.FETCH_COURSES: {
            state.courses = action.payload
            return { ...state }
        }
        case type.FETCH_COURSES_DETAIL: {
            state.couseDetail = action.payload
            return { ...state }
        }
        case type.ADD_COURSES:{
           state.courses.push(action.payload)
           return {...state}
        }
        default: return state; //vào cái gì ra cái đó,ko thay đổi, k chỉnh sửa
    }
}
export default CourseReducer