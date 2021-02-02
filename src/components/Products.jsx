import React, { Component } from 'react';
import { data } from '../data'
import './css/Products.css'

import ProductCard from './ProductCard';

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: data
        };
    }
    render() { 
        return ( 
            <div className="products-comp">
                {this.state.products.map((product, id) => (
                    <ProductCard {...product} key={id} />
                ))}
            </div>
         );
    }
}
 
export default Products;