import React, { Component } from 'react'
import Header from '../Layout/Header/Header'
import Loginform from '../Components/Login/Login'

export default class Login extends Component {
    render() {
        return (
            <>
                <div>
                    {/* HEADER */}
                    <Header history={this.props.history}/>
                    {/* content */}
                    <section className="container container__config1">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="content-signin">
                                    <h3>NỀN TẢNG GIÁO DỤC TRỰC TUYẾN LỚN NHẤT ĐÔNG NAM Á</h3>
                                    <p>Đăng nhập nhanh với</p>

                                    <button className="btn btn--btn_blue"><span>f</span>Facebook</button>
                                    <button className="btn btn--btn_red-1"><span>G</span>Gmail</button>
                                    <p>Hoặc đăng nhập ngay</p>
                                    {/* SIGN IN */}
                                    <Loginform history={this.props.history} />
                                </div>
                            </div>
                            {/* style="background-image: url(./img/im-digital.png);" */}
                            <div className="col-md-7">
                                <div className="content_img" style={{ backgroundImage: 'url(./img/im-digital.png)' }}>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </>
        )
    }
}
