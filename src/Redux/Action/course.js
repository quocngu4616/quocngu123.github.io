import { courseService } from "../../Services"
import { createAction } from "."
import { FETCH_COURSES, FETCH_CATEGORIES, FETCH_COURSE_CATEGORIES, FETCH_COURSES_DETAIL, ADD_COURSES } from "./type"

//hàm chứa phương thức bất đồng bộ
export const fetchCategories = () => {
    return dispatch => {
        courseService
            .fetchCategories()
            .then(res => {
                dispatch(createAction(FETCH_CATEGORIES, res.data))
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
}
export const setCourseCategories = id => {
    return dispatch => {
        courseService.setCourseCategories(id)
            .then(res => {
                dispatch(createAction(FETCH_COURSE_CATEGORIES, res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const fetchCourse = () => {
    return dispatch => {
        courseService
            .fetchCourse()
            .then(res => {
                dispatch(createAction(FETCH_COURSES, res.data))
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const fetchCourseDetail = (id) => {
    return dispatch => {
        courseService.fetchCourseDetail(id)
            .then(res => {
                dispatch(createAction(FETCH_COURSES_DETAIL, res.data))
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const addCourseRequest =course=>{
    return dispatch =>{
        courseService.addCourseRequest(course)
        .then(res=>{
            dispatch(createAction(ADD_COURSES,course))
            
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

