import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { notify } from '../../Services/notify/Notify';
class ItemHover extends Component {
    //btn go to car
    constructor(props) {
        super(props);
        this.state = {
            changeBtnCart: false
        }
    }
    changeCart = (item) => {
        this.props.addToCart(item);
        this.setState({
            changeBtnCart: true
        })
    }
    render() {
        let { item } = this.props
        return (
            <div className="sub__info">
                <div className="info__content">
                    <div className="teacher"><img src="/img/teacher.jpg" alt="teacher" />
                        <h6>{item.nguoiTao.hoTen}</h6>
                    </div>
                    <h5>{item.tenKhoaHoc} &amp; {item.biDanh}</h5>
                    <p>{item.moTa}</p>
                    <div className="meta">
                        <div><i className="fas fa-signal" aria-hidden="true" /> Advanced</div>
                        <div><i className="fas fa-list-ul" aria-hidden="true" /> 6 Lectures</div>
                        <div><i className="far fa-clock" aria-hidden="true" /> 6 Hours</div>
                    </div>
                    {this.state.changeBtnCart
                        ?
                        <Link to="./cart">
                            <button className="add__cart" style={{ backgroundColor: "yellow" }}>XEM GIỎ HANG</button>
                        </Link>
                        : <button className="add__cart" onClick={() => this.changeCart(item)}>THÊM GIỎ HÀNG</button>
                    }
                    <div className="wishlist">
                        <div className="add__list">
                            <div className="heart"><i className="lnr lnr-heart" /></div><span>Thêm lựa
Chọn</span>
                        </div><span className="price">$19.99</span>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addToCart: item => {
            const itemCourse = {
                maKhoaHoc: item.maKhoaHoc,
                tenKhoaHoc: item.tenKhoaHoc,
                hinhAnh: item.hinhAnh,
                moTa: item.moTa,
                giaBan: 19.90,

                // soLuong:1
            }
            const action = {
                type: "ADD_TO_CART",
                itemCourse
            }
            dispatch(action);
            notify('', 'THÊM THÀNH CÔNG')

        }
    }
}
export default connect(null, mapDispatchToProps)(ItemHover)