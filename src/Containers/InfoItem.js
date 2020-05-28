import React, { Component } from 'react';
import ItemIn from '../Components/ItemInf/ItemIn';

class InfoItem extends Component {
    render() {
        let {item}=this.props;
        return (     
            <div className="product__item">
                <ItemIn item={item}/>
        
        </div> 
        );
    }
}

export default InfoItem;