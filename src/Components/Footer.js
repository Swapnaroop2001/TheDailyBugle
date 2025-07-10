import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark text-light pt-5 pb-3 mt-5">
                <div className="container">
                    <div className="row">
                        {/* Logo + About */}
                        <div className="col-md-3 mb-4">
                            <h5 className="text-uppercase">The Daily Bugle</h5>
                            <p className="small">
                                Bringing you reliable news, weather, and more.
                            </p>
                            <p className="small">© {new Date().getFullYear()} The Daily Bugle</p>
                        </div>

                        {/* Navigation Links */}
                        <div className="col-md-3 mb-4">
                            <h6 className="text-uppercase">Sections</h6>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">Home</a></li>
                                <li><a href="#" className="text-light text-decoration-none">World</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Politics</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Business</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Tech</a></li>
                            </ul>
                        </div>

                        {/* More Links */}
                        <div className="col-md-3 mb-4">
                            <h6 className="text-uppercase">More</h6>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">Opinion</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Science</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Health</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Sports</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Arts</a></li>
                            </ul>
                        </div>

                        {/* Legal & Contact */}
                        <div className="col-md-3 mb-4">
                            <h6 className="text-uppercase">Company</h6>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>

                    <hr className="border-gray" />
                    <p className="text-center small mt-3">
                        Built with ❤️ using React & Bootstrap
                    </p>
                </div>
            </footer>
        )
    }
}
