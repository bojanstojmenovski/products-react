import React, { Component, createRef } from 'react';
import './css/NavBar.css'
import logo from "../img/logo.png";

class NavBar extends Component {
    constructor(props) {
        super(props);
        

        this.state = {
            helper: true
        };
    }

    collapseNavRef = createRef();
    parentNavRef = createRef();

    onToglerClick = () => {
        if (!this.state.helper) {
        this.collapseNavRef.classList.remove("show");
        this.parentNavRef.style.height = "80px"
        this.setState({
            helper: true,
        });
        } else {
        this.parentNavRef.style.height = "330px"
        setTimeout(() => {
            this.collapseNavRef.classList.add("show");
        }, 700)
        this.setState({
            helper: false,
        });
        }
    };

    render() { 
        return ( 
            <div className="navbar navbar-expand-lg navbar-dark nav" ref={(div) => (this.parentNavRef = div)}>

                <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={this.onToglerClick}
                >
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className='logo-container'>
                    <img src={logo} alt="logo"/>
                </div>

                <div 
                    className="collapse navbar-collapse nav-bar" 
                    id="navbarTogglerDemo01"
                    ref={(div) => (this.collapseNavRef = div)}
                >
                    <ul className="navbar-nav mr-auto mt-lg-0">
                        <li className="nav-link">Domov</li>
                        <li className="nav-link">O nas</li>
                        <li className="nav-link">Kontakt</li>
                        <li className="nav-link">Pišite nam</li>
                        <li className="nav-link">IZDEKLI</li>
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default NavBar;