import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class HeaderContainer extends Component {
    render() {
        return (
            <header className="container-fluid myNavBar">
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <div className="col-xl-6 col-lg-9 col-md-8">
                        <div className="row">
                            <Link className="navbar-brand" to="/">
                                <img src="./img/logo-coral.svg" alt="không hiển thi ảnh" />
                            </Link>
                            {/* <div class="categories">
                    <i class="fa fa-th"></i>Categories
                </div> */}
                            <div className="input_search">
                                {/* sử dụng input group */}
                                <form action>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Search for Course" />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-search" /></span>
                                        </div>
                                    </div>
                                </form>
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
                                        <span className="badge_cart">4</span>
                                        <div className="header__items">
                                            <div className="header__item__content">
                                                <a className="heade__item" style={{ textDecoration: 'none' }}>
                                                    <div className=" header-img">
                                                        <img className="img-fluid" src="/img/item9.jpg" alt />
                                                    </div>
                                                    <div class="header-content ">
                                                        <p class="name">Advanced CSS and Sass: Flexbox, Grid, Animations and More!</p>
                                                        <p class="info"> By Chris Croft, Management Trainer, Speaker, Author</p>
                                                        <p class="price">$19.99
                                                         <span class="price-old">$89.99</span>
                                                        </p>
                                                    </div>
                                                </a>
                                                {/* <a className="heade__item" style={{ textDecoration: 'none' }}>
                                                    <div className=" header-img">
                                                        <img className="img-fluid" src="/img/item9.jpg" alt />
                                                    </div>
                                                    <div className="header-content ">
                                                        <span>Advanced CSS and Sass:</span>
                                                        <span> By Chris Croft</span>
                                                        <span>$19.99  <span className="price-old">$89.99</span> </span>
                                                    </div>
                                                </a> */}
                                            </div>
                                            <div className="btn__goToWistlist">
                                                <div className="btn__goToWistlist__button__price">Total :
                                            <span className="price__new">40 $</span>
                                                    <span className="price__old"> $64.903</span>
                                                </div>
                                                <button className="btn__goToWistlist__button">Go to Cart</button>
                                            </div>
                                        </div>


                                        <a className="nav-link" href="#">
                                            <img src="./img/love.svg" className="w-20" height={20} alt />
                                        </a>
                                        <span className="badge_love">2</span>

                                        <a className="nav-link" href="#"><img src="./img/bell.svg" className="w-20" height={20} alt /></a>
                                        <span className="badge_bell">0</span>

                                    </li>
                                    <li className="nav-item">
                                        <div className="button">
                                            <button className="btn btn--white mr-1" data-toggle="modal" data-target="#modelSignIn">Log In</button>
                                            <button className="btn btn--red" data-toggle="modal" data-target="#modelRes">Sign Up</button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav></div>
                </nav>
            </header>
        )
    }
}
