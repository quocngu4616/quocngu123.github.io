import React, { Component } from 'react'
import Header from '../Layout/Header/Header'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { userService } from '../Services';
import { signupUserSchema } from '../Services/user';
import { notify } from '../Services/notify/Notify';
import Footer from '../Layout/Footer/Footer';

export default class Signin extends Component {

    _handleSubmit = values => {
        userService.signUp(values)
            .then(res => {
                console.log(res.data);
                notify('success', 'ĐĂNG KÝ THÀNH CÔNG')
            }).catch(err => {
                console.log(err);
                notify('error', 'NGƯỜI DÙNG ĐÃ TỒN TẠI')
            })
        // axios({
        //     method: 'POST',
        //     url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        //     data: values
        // })
        //     .then(res => {
        //         console.log(res);
        //     }).catch(err => {
        //         console.log(err);
        //     })
    }
    render() {
        return (
            <>
                <div>
                    {/* HEADER */}
                    <Header history={this.props.history} />

                    {/* content */}
                    <section className="container container__config">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="content-signin">
                                    <h3>NỀN TẢNG GIÁO DỤC TRỰC TUYẾN LỚN NHẤT ĐÔNG NAM Á</h3>
                                    <p>Đăng kí nhanh với</p>
                                    <button className="btn btn--btn_blue"><span>f</span>Facebook</button>
                                    <button className="btn btn--btn_red-1"><span>G</span>Gmail</button>
                                    <p>Hoặc đăng kí ngay</p>
                                    <Formik
                                        initialValues={{ //tương tự như state
                                            taiKhoan: "",
                                            matKhau: "",
                                            hoTen: "",
                                            email: "",
                                            soDT: "",
                                            maNhom: "GP01"
                                        }}
                                        validationSchema={signupUserSchema}
                                        onSubmit={this._handleSubmit}
                                        render={formikProps => (
                                            <Form action className="content-signin__form">
                                                <div className="form-group">
                                                    <Field type="text" className="form-control"
                                                        name="taiKhoan"
                                                        onChange={formikProps.handleChange}
                                                        placeholder="Tài Khoản" />
                                                    <ErrorMessage name="taiKhoan">{(msg) => <div className="alert alert-danger">{msg}</div>}</ErrorMessage>
                                                </div>
                                                <div className="form-group">
                                                    <Field type="text" className="form-control"
                                                        name="matKhau"
                                                        onChange={formikProps.handleChange}
                                                        placeholder="Mật Khẩu" />
                                                    <ErrorMessage name="matKhau">{(msg) => <div className="alert alert-danger">{msg}</div>}</ErrorMessage>
                                                </div>
                                                <div className="form-group">
                                                    <Field type="text" className="form-control"
                                                        name="hoTen"
                                                        onChange={formikProps.handleChange}
                                                        placeholder="Họ Tên" />
                                                    <ErrorMessage name="hoTen">{(msg) => <div className="alert alert-danger">{msg}</div>}</ErrorMessage>
                                                </div>
                                                <div className="form-group">
                                                    <Field type="text" className="form-control"
                                                        name="email"
                                                        onChange={formikProps.handleChange}
                                                        placeholder="Email" />
                                                    <ErrorMessage name="email">{(msg) => <div className="alert alert-danger">{msg}</div>}</ErrorMessage>
                                                </div>
                                                <div className="form-group">
                                                    <Field type="text" className="form-control"
                                                        name="soDT"
                                                        onChange={formikProps.handleChange}
                                                        placeholder="Số Điện Thoại" />
                                                    <ErrorMessage name="soDT">{(msg) => <div className="alert alert-danger">{msg}</div>}</ErrorMessage>
                                                </div>
                                                <button className="btn btn--red">Đăng ký</button>
                                            </Form>
                                        )}
                                    >

                                    </Formik>

                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="content_img" style={{ backgroundImage: 'url(./img/im-digital.png)' }}>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* <Footer/> */}
            </>
        )
    }
}
