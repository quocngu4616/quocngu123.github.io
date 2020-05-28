import React, { Component } from 'react';

class ItemIn extends Component {
    render() {
        let {item}=this.props
        return (
            <>
                <div className="item__img"><img src={item.hinhAnh} alt="item" />
                <div className="img__overlay" />
            </div>
            <div className="item__info">
                <h5>{item.tenKhoaHoc}</h5>
        <h6>{item.moTa}</h6>
                
                <div className="rating"><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star-half-alt" aria-hidden="true" /><i className="far fa-star" aria-hidden="true" />3.5 <span>(176,466)</span></div>
                
                <h4 className="text-danger"> $19.99</h4>
            </div>
            </>
        );
    }
}

export default ItemIn;