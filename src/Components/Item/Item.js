import React, { Component } from 'react'

import { Link, NavLink } from 'react-router-dom'
export default class Item extends Component {

    render() {
        let { item } = this.props;
        return (

            <Link to={`/courses/${item.maKhoaHoc}`}>
                <div className="item__img"><img src={item.hinhAnh} alt="item" />
                    <div className="img__overlay" />
                </div>
                <div className="item__info">
                    <h5>{item.tenKhoaHoc} &amp; {item.biDanh}</h5>
                    <h6>{item.nguoiTao.hoTen}</h6>
                    <div className="rating"><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star-half-alt" aria-hidden="true" /><i className="far fa-star" aria-hidden="true" /><span className="score">3.5 <span className="reviews">(176,466)</span></span></div>
                    <div className="price"><span className="old__price">$199.99</span><span className="price">$19.99 <i className="fas fa-tag" aria-hidden="true" /></span></div>
                </div>
            </Link >
        )
    }
}
