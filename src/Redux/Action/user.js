import { userService } from "../../Services"
import { createAction } from "."
import { FETCH_USERS } from "./type"

export const fetchUsers = () => {
    return dispatch => {
        userService.fetchUsers()
            .then(res => {
                dispatch(createAction(FETCH_USERS, res.data))
            }).catch(err => {
                console.log(err);

            })
    }
}