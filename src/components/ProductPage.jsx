import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data'
import './css/ProductPage.css';
import img from "../img/img.png";

const ProductPage = (props) => {
    let [products] = useState(data)
    let [selectedProduct, setSelectedProduct] = useState({});
    let [paragraphs, setParagraphs] = useState([]);

    useEffect(() => {
        for (let product of products) {
            if ((product.id + 1) == props.match.params.id) {
                setSelectedProduct(selectedProduct = product)
                setParagraphs(paragraphs = product.text)
            }
        }
    }, [])

    return ( 
        <div className="product-page">
                <div className="img-container">
                    <img src={img} alt="img"/>
                </div>
                <div className="content">
                    <h1 className="main-header">
                        {selectedProduct.main_header}
                    </h1>
                    <h2 className="second-header">
                        {selectedProduct.second_header}
                    </h2>
                    <div className="content-text">
                            {paragraphs.map((paragraph, id) => (
                            <p key={id}> {paragraph} </p>    
                        ))} 
                    </div> 
                    <Link to={'/'}> <button className="nazaj-btn">NAZAJ NA SEZNAM</button> </Link>
                </div>
            </div>
     );
}
 

export default ProductPage;