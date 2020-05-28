import { combineReducers } from 'redux';
import CourseReducer from './Course';
import CartReducer from './Cart';
import UserReducer from './User';
import DisplaySearchReducer from './DisplaySearch';

const RootReducers = combineReducers({
  course:CourseReducer, //quản lý tất cả dữ liệu liên quan tới course
  cart:CartReducer,
  user:UserReducer,
  displaySearch:DisplaySearchReducer
})
export default RootReducers