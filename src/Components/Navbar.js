import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            formattedDate: this.getFormattedDate()
        };
    }

    getFormattedDate() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString(undefined, options);
    }

    render() {
        return (
            <div>
                <div>
                    <nav className="navbar bg-body-light sticky-top">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <p><b>{this.state.formattedDate}</b></p>
                            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel"> Select Country</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <button className="nav-link active" aria-current="page" href="#" >United States</button>
                                        </li>
                                        <li className="nav-item">
                                            <button className='button'>India</button>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="/china">China</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Languages
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Spanish</a></li>
                                                <li><a className="dropdown-item" href="#">French</a></li>
                                                <li><a className="dropdown-item" href="#">Chinese</a></li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <form className="d-flex mt-3" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div> 

                {/* Heading */}
                <div style={{ justifyContent: "center" }}>
                    <nav className="navbar bg-body-light" style={{ justifyContent: "center", fontFamily: "initial" }} >
                        <div >
                            <h1 style={{ fontSize: "4.5rem", fontWeight: "revert", fontVariant: "small-caps" }}>The Daily Bugle</h1>
                        </div>
                    </nav>
                </div>

                {/* ThirdNav */}
                 <div>
                    <nav className="navbar navbar-expand-lg bg-body-light" style={{ fontFamily: "Newsreader" }}>
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse " id="navbarNavDropdown" style={{ justifyContent: "center" }}>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/business">
                                            Business
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/entertainment">
                                            Entertainment
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/science">
                                            Science
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/health">
                                            Health
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/sports">
                                            Sports
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/technology">
                                            Technology
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                
            </div>

            


        )
    }
}
