import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class CartHoverItem extends Component {
    render() {
        return (
            <div className="header__items">
                <div className="header__item__content">

                    {this.props.cartList.map((item, i) => {
                        return (
                            <Link to={`/courses/${item.maKhoaHoc}`} className="heade__item" style={{ textDecoration: 'none' }} key={i}>
                                <div className=" header-img">
                                    <img className="img-fluid" src={item.hinhAnh} alt />
                                </div>
                                <div class="header-content ">
                                    <p class="name">{item.tenKhoaHoc}</p>
                                    <p class="info"> {item.moTa}</p>
                                    <p class="price">${item.giaBan}
                                        <span class="price-old">$89.99</span>
                                    </p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <div className="btn__goToWistlist">
                    <div className="btn__goToWistlist__button__price">Total :
        <span className="price__new">{this.props.cartList.length * 19.9} $</span>
                        <span className="price__old"> $64.903</span>
                    </div>
                    <button className="btn__goToWistlist__button">Go to Cart</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    cartList: state.cart
})
export default connect(mapStateToProps, null)(CartHoverItem)