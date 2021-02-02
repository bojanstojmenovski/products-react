import React from 'react';
import { Link } from 'react-router-dom'
import "./css/ProductCard.css"
import img from "../img/img.png";
 
const ProductCard = (props) => {
    return(
        <div className="product-card">
        <div className="card-img-container">
            <img src={img} alt="img"/>
        </div>
        <div className="card-content">
            <h1 className="main-header">{props.main_header}</h1>
            <h2 className='second-header'>{props.second_header}</h2>
            {/* <p className="content-text">{props.text.substring(0, 350) + "..."}</p> */}
            <div className="content-text">
                {props.text.map((paragraph, id) => (
                    <p key={id}>{paragraph}</p>    
                ))}
            </div>
            <Link to={`/${props.id + 1}`}> <button className="btn">VEČ O IZDELKU {props.id + 1}</button> </Link>
        </div>
    </div>
    )
} 
 
export default ProductCard;