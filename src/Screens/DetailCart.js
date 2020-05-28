import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'
import { notify } from '../Services/notify/Notify'
class DetailCart extends Component {
    render() {
        return (
            <>
                <Header history={this.props.history} />
                {/* conten */}
                <div className="cart_page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 pl-0">
                                <table className="cart__table text-center table mt-4">
                                    <thead>
                                        <tr>
                                            <th colSpan={2}>Khóa Học</th>
                                            <th>Giá</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody className="cart__body">
                                        {this.props.cartList.map((item, i) => {
                                            return (
                                                <tr className="cart__item" key={i}>
                                                    <td className="cart__thumbnail">
                                                        <div><img src={item.hinhAnh} alt="cart" /></div>
                                                    </td>
                                                    <td className="cart__name">
                                                        <div>{item.tenKhoaHoc} &amp; Data Analytics</div>
                                                        <div>{item.moTa}</div>
                                                    </td>
                                                    <td className="cart__price">
                                                        <div className="amount">$19.90 <i className="fas fa-tag" aria-hidden="true" /></div>
                                                    </td>
                                                    <td className="cart__remove">
                                                        <div className="btn__remove"><a href="#1" onClick={() => this.props.deleteCart(item.maKhoaHoc)} className="remove"><i className="fas fa-times" aria-hidden="true" /></a></div>
                                                    </td>
                                                </tr>
                                            )
                                        })}


                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-3 px-0">
                                <div className="cart__total">
                                    <table className="table">
                                        <tbody className="table__total">
                                            <tr>
                                                <td colSpan={2}><span className="total__header">TỔNG GIỎ HÀNG</span></td>
                                            </tr>
                                            <tr>
                                                <td>CHI TIẾT</td>
                                                <td className="amount">${this.props.cartList.length * 19.90}0</td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontWeight: 'bold' }}>TỔNG CỘNG</td>
                                                <td className="amount" style={{ fontSize: '1.4rem' }}>${this.props.cartList.length * 19.90}0</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}><a href="/checkout">
                                                    <button className="add">THANH TOÁN
                   </button>
                                                </a>
                                                    <a href="/courses">
                                                        <button className="continue">TIẾP TỤC MUA SẮM</button>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
const mapStateToProps = state => ({
    cartList: state.cart
})
const mapDispatchToProps = dispatch => {
    return {
        deleteCart: maKhoaHoc => {
            const action = {
                type: "DELETE_TO_CART",
                maKhoaHoc
            }
            dispatch(action)
            notify('success', 'XÓA THÀNH CÔNG')
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailCart)