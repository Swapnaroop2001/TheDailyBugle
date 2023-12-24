import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          formattedDate: this.getFormattedDate()
        };
      }

      ok=()=>{
        console.log("hello");
        
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
                                            <button className="nav-link active" aria-current="page" href="#" onClick={this.ok}>United States</button>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#">United Kingdom</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#">India</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#">Australia</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#">China</a>
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
                            <div className="collapse navbar-collapse " id="navbarNavDropdown" style={{justifyContent: "center" }}>
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link " href="/business" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Business
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link " href="/entertainment" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Entertainment
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link " href="/Science" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Science
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link " href="/Health" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Health
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link " href="/Sports" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Sports
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link" href="/technology" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Technology
                                        </a>
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
