import React, { Component } from 'react'
import ItemHover from '../Components/Item/ItemHover'
import Item from '../Components/Item/Item'

export default class ProductItems extends Component {
    render() {
        let { item } = this.props;
        // console.log("day la item",item);
        return (
            <div className="product__item">
                {/* ITEM */}
                <Item item={item} />
                {/* ITEM HOVER */}
                <ItemHover item={item} />
            </div>
        )
    }
}
