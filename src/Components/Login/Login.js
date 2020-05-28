import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
// import { userService } from '../../Services'
// import { fetchCredentials } from '../../Redux/Action/user'
import { connect } from 'react-redux'
import { notify } from '../../Services/notify/Notify'
import { userService } from '../../Services'
import { createAction } from '../../Redux/Action'
import { FETCH_CREDENTIALS } from '../../Redux/Action/type'
class Loginform extends Component {

    _handleSubmit = values => {
        userService.logIn(values)
            .then(res => {
                this.props.dispatch(createAction(FETCH_CREDENTIALS, res.data));
                localStorage.setItem('credentials', JSON.stringify(res.data))//gửi taikhoan lên localst
                let user = JSON.parse(localStorage.getItem('credentials'));
                if (user.maLoaiNguoiDung === "HV") {
                    notify('success', 'ĐĂNG NHẬP THÀNH CÔNG')
                    this.props.history.push('./info');
                }
                if (user.maLoaiNguoiDung === "GV") {
                    notify('success', 'ĐĂNG NHẬP THÀNH CÔNG')
                    this.props.history.push('./admin');
                }
            })
            .catch(err => {
                notify('error', 'ĐĂNG NHẬP THẤT BẠI')
            })
    }
    render() {
        return (
            <Formik
                initialValues={{
                    taiKhoan: "",
                    matKhau: "",
                }}
                onSubmit={this._handleSubmit}
                render={formikProps => (
                    < Form action className="content-signin__form" >
                        <div className="form-group">
                            <Field type="text" className="form-control"
                                placeholder="Tài Khoản"
                                name="taiKhoan"
                                onChange={formikProps.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <Field type="text" className="form-control"
                                placeholder="Mật Khẩu"
                                name="matKhau"
                                onChange={formikProps.handleChange} />
                        </div>
                        <button className="btn btn--red">Đăng Nhập</button>
                    </Form >
                )}
            />


        )
    }
}
export default connect()(Loginform)