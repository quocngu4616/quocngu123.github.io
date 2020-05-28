import React, { Component } from 'react'
import { userService } from '../../Services'
import { notify } from '../../Services/notify/Notify'
import { connect } from "react-redux";
import { createAction } from '../../Redux/Action';
import { DELETE_USERS } from '../../Redux/Action/type';
class UserItem extends Component {
    // handleDelete=(taikhoan)=>{
    //     userService.deleteUsers(taikhoan)
    //     .then(res=>{
    //         this.props.dispatch(createAction(DELETE_USERS,taikhoan))
    //         notify('success','XÓA THÀNH CÔNG '+taikhoan)
    //         console.log(res);            
    //     }).catch(err=>{
    //         notify('error','KHÔNG THỂ XÓA '+taikhoan)
    //         console.log(err);            
    //     })
    // }
    handleDelete=()=>{
        userService.deleteUsers(this.props.user.taiKhoan)
        .then(res=>{
            this.props.dispatch(createAction(DELETE_USERS,this.props.user.taiKhoan))
            notify('success','XÓA THÀNH CÔNG ')
        }).catch(err=>{
            notify('error','KHÔNG THỂ XÓA ')
        })
    }
    render() {
        let { user } = this.props
        return (

            <tr>
                <td>
                    <div className="name__wrapper d-flex">
                        <img src="/img/avatar.png" alt="avatar" />
                        <div className="course__name ml-3">
                            <h6>{user.taiKhoan}</h6>
                            <span className="badge badge-info">member</span>
                        </div>
                    </div>
                </td>
                <td className="pt-4">
                    <h6>{user.hoTen}</h6>

                </td>
                <td className="pt-4">
                    {user.soDT}
                </td>
                <td className="pt-4">
                    {user.email}
                </td>
                <td className="pt-4">
                    <button data-toggle="modal" data-target="#courseModal" className="btn btn-info mr-2">
                        <i className="far fa-edit" aria-hidden="true" />
                    </button>
                    <button className="btn btn-danger" onClick={this.handleDelete}>
                        <i className="far fa-trash-alt" aria-hidden="true" />
                    </button>
                </td>
            </tr>
        )
    }
}
export default connect()(UserItem)


