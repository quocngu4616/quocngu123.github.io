import React, { Component } from 'react'
import UserItem from './UserItem'
import { connect } from 'react-redux'
import { fetchUsers } from '../../Redux/Action/user'
import { ADD_USERS, DELETE_USERS } from '../../Redux/Action/type';
import { userService } from '../../Services';
import { createAction } from '../../Redux/Action';
import { notify } from '../../Services/notify/Notify';
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                email: "",
                soDT: "",
                maLoaiNguoiDung: "HV",
                maNhom: "GP01",
            }
        }
    }
    onChange = e => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value,
            },
        },
            console.log(this.state.user))

    }
    onAddUser = () => {
        // console.log(this.state.user);
        
        userService.addUsers(this.state.user)
            .then(res => {
                this.props.addUser(res.data);
                notify("success", "THÊM NGƯỜI DÙNG THÀNH CÔNG")
            })
            .catch(err => {
                // console.log(err);
                notify("", "THÊM NGƯỜI THẤT BẠI")
            })
    }

    onClearForm = () => {
        this.setState({
            user: {
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                email: "",
                soDT: "",
                maLoaiNguoiDung: "HV",
            },
            // userEdit: {}
        })
        // this.props.showEditCourse({})
    }
    // showUsers
    render() {
        let { userList } = this.props
        // console.log(userList);

        return (
            <>
                <div className="title"><i className="fas fa-user-shield" aria-hidden="true" /> My Dashboard
   </div>
                <div className="row post__title">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 add__search">
                        <button className="add__course" data-toggle="modal" data-target="#courseModal">
                            <i className="fas fa-plus" aria-hidden="true" /> ADD USER
   </button>
                        <input name="search" type="text" placeholder="Search User" />
                    </div>
                </div>
                <div className="modal" id="courseModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add New User</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>User Name</label>
                                    <input name="taiKhoan" type="text" className="form-control" onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input name="matKhau" type="text" className="form-control" onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>FullName</label>
                                    <input name="hoTen" type="text" className="form-control" onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input name="soDT" type="text" className="form-control" onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input name="email" type="text" className="form-control" onChange={this.onChange} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={this.onAddUser}>Add</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table table-striped table__users">
                    <thead>
                        <tr>
                            <th>ID<i className="fas fa-sort-amount-up" aria-hidden="true" /></th>
                            <th>Fullname<i className="fas fa-sort-amount-up" aria-hidden="true" /></th>
                            <th>Phone<i className="fas fa-sort-amount-up" aria-hidden="true" /></th>
                            <th>Email<i className="fas fa-sort-amount-up" aria-hidden="true" /></th>
                            <th>Action<i className="fas fa-sort-amount-up" aria-hidden="true" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* userItem */}
                        {/* {this.showUsers()} */}
                        {userList.map((user, i) => {
                            return <UserItem key={i} user={user} />
                        })}

                    </tbody>
                </table>
            </>
        )
    }
}
const mapStateToProps = state => ({

    userList: state.user.userList

})
const mapDispatchToProps = dispatch => {
    return {
        addUser: user => {
            dispatch({
                type: ADD_USERS,
                payload: user
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User)