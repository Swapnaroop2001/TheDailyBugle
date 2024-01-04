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
                            <div className="offcanvas offcanvas-start" data-bs-scroll="true"  tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel"> Select Country</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/about" >About</Link>
                                        </li>
                                        <form className="d-flex mt-3" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                    </ul>
                                    
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
                                    <div className="dropdown">
                                            <Link className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                US
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <Link className="nav-link" to="/us/technology">Technology</Link>
                                                <Link className="nav-link" to="/us/health">Health</Link>
                                                <Link className="nav-link" to="/us/science">Science</Link>
                                                <Link className="nav-link" to="/us/sports">Sports</Link>
                                                <Link className="nav-link " to="/us/business">Business</Link>
                                                <Link className="nav-link" to="/us/entertainment">Entertainment</Link>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <Link className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                India
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <Link className="nav-link" to="/in/technology">Technology</Link>
                                                <Link className="nav-link" to="/in/health">Health</Link>
                                                <Link className="nav-link" to="/in/science">Science</Link>
                                                <Link className="nav-link" to="/in/sports">Sports</Link>
                                                <Link className="nav-link " to="/in/business">Business</Link>
                                                <Link className="nav-link" to="/in/entertainment">Entertainment</Link>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">

                                    </li>
                                    <li className="nav-item">
                                    <div className="dropdown">
                                            <Link className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                UK
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <Link className="nav-link" to="/gb/technology">Technology</Link>
                                                <Link className="nav-link" to="/gb/health">Health</Link>
                                                <Link className="nav-link" to="/gb/science">Science</Link>
                                                <Link className="nav-link" to="/gb/sports">Sports</Link>
                                                <Link className="nav-link " to="/gb/business">Business</Link>
                                                <Link className="nav-link" to="/gb/entertainment">Entertainment</Link>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                    <div className="dropdown">
                                            <Link className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                Germany
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <Link className="nav-link" to="/de/technology">Technology</Link>
                                                <Link className="nav-link" to="/de/health">Health</Link>
                                                <Link className="nav-link" to="/de/science">Science</Link>
                                                <Link className="nav-link" to="/de/sports">Sports</Link>
                                                <Link className="nav-link" to="/de/business">Business</Link>
                                                <Link className="nav-link" to="/de/entertainment">Entertainment</Link>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                    <div className="dropdown">
                                            <Link className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                Australia
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <Link className="nav-link" to="/au/technology">Technology</Link>
                                                <Link className="nav-link" to="/au/health">Health</Link>
                                                <Link className="nav-link" to="/au/science">Science</Link>
                                                <Link className="nav-link" to="/au/sports">Sports</Link>
                                                <Link className="nav-link " to="/au/business">Business</Link>
                                                <Link className="nav-link" to="/au/entertainment">Entertainment</Link>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                    <div className="dropdown">
                                            <Link className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                China
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <Link className="nav-link" to="/cn/technology">Technology</Link>
                                                <Link className="nav-link" to="/cn/health">Health</Link>
                                                <Link className="nav-link" to="/cn/science">Science</Link>
                                                <Link className="nav-link" to="/cn/sports">Sports</Link>
                                                <Link className="nav-link " to="/cn/business">Business</Link>
                                                <Link className="nav-link" to="/cn/entertainment">Entertainment</Link>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                    <div className="dropdown">
                                            <Link className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                Saudi Arabia
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <Link className="nav-link" to="/sa/technology">Technology</Link>
                                                <Link className="nav-link" to="/sa/health">Health</Link>
                                                <Link className="nav-link" to="/sa/science">Science</Link>
                                                <Link className="nav-link" to="/sa/sports">Sports</Link>
                                                <Link className="nav-link " to="/sa/business">Business</Link>
                                                <Link className="nav-link" to="/sa/entertainment">Entertainment</Link>
                                            </ul>
                                        </div>
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
