import React, { Component } from 'react'
import SearchCouse from '../../Containers/SearchCouse'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { notify } from '../../Services/notify/Notify'
import _ from 'lodash'
import { createAction } from '../../Redux/Action'
import { SET_CREDENTIALS_EMPTY } from '../../Redux/Action/type'
import { fetchUsers } from '../../Redux/Action/user'
import CartHoverItem from '../../Components/Cart/CartHoverItem'

class Header extends Component {
    componentDidMount() {
        this.props.dispatch(fetchUsers())
    }
    checkShowAccount = (userList) => {
        let credentials = JSON.parse(localStorage.getItem('credentials'));
        console.log("header", credentials);
        // 
        if (_.isEmpty(userList) && !credentials) {
            return (
                <div className="button">
                    <Link to='/login' className="btn btn--white mr-1">Log In</Link>
                    <Link to='/signin' className="btn btn--red">Sign Up</Link>
                </div>
            )
        }
        else {
            return (
                <div className="user">
                    <Link to="./info">
                        <div className="user__avatar"><img src="/img/avatar.png" alt /></div>
                    </Link>
                    <div className="logout__btn"><span className="lnr lnr-power-switch" onClick={() => this.handleLogout()} /></div>
                </div>
            )
        }
    }
    showSetting = (userList) => {
        // let credentials=JSON.parse(localStorage.getItem('credentials'));
        if (userList.maLoaiNguoiDung === "HV") {

        }
        else if (userList.maLoaiNguoiDung === "GV") {
            return (
                <Link to="/admin">
                    <div className="admin__panel"><span className="lnr lnr-cog" /></div>
                </Link>
            )
        }

    }
    handleLogout = () => {
        this.props.dispatch(createAction(SET_CREDENTIALS_EMPTY, {})) //set lại credential của user trống
        localStorage.removeItem('credentials');
        notify('success', 'ĐĂNG XUẤT THÀNH CÔNG');
        this.props.history.push('/')
    }
    render() {
        let { userList, history } = this.props
        console.log(userList);

        return (
            <header className="container-fluid myNavBar">
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <div className="col-xl-6 col-lg-9 col-md-8">
                        <div className="row">
                            <Link className="navbar-brand" to="/">
                                <img src="../../img/logo-coral.svg" alt="không hiển thi ảnh" />
                            </Link>
                            {/* <div class="categories">
                <i class="fa fa-th"></i>Categories
            </div> */}
                            <div className="input_search">
                                {/* sử dụng input group */}
                                <SearchCouse history={history} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-3 col-md-4">
                        <nav className="navbar navbar-expand-md navbar-light bg-light">
                            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavId">
                                <ul className="navbar-nav">
                                    <li className="nav-item business">
                                        <a className="nav-link" href="#">Udemy for Business</a>
                                    </li>
                                    <li className="nav-item cart">
                                        <Link className="nav-link" to="/cart">
                                            <img src="./img/cart.svg" className="w-20" height={20} alt />

                                        </Link>
                                        <span className="badge_cart">
                                            {this.props.cartList.length}
                                        </span>
                                        <CartHoverItem />


                                        <a className="nav-link" href="#">
                                            <img src="./img/love.svg" className="w-20" height={20} alt />
                                        </a>
                                        <span className="badge_love">2</span>

                                        <a className="nav-link" href="#"><img src="./img/bell.svg" className="w-20" height={20} alt /></a>
                                        <span className="badge_bell">0</span>

                                    </li>
                                    <li className="nav-item">
                                        {/* <div className="button">
                                            <button className="btn btn--white mr-1" data-toggle="modal" data-target="#modelSignIn">Log In</button>
                                            <button className="btn btn--red" data-toggle="modal" data-target="#modelRes">Sign Up</button>
                                        </div> */}
                                        {this.showSetting(this.props.userList)}

                                        {this.checkShowAccount(this.props.userList)}
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </nav>
            </header>
        )
    }
}
const mapStateToProps = state => ({
    cartList: state.cart,
    userList: state.user.credentials
})
export default connect(mapStateToProps, null)(Header)