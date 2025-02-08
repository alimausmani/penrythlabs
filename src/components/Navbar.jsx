
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);


    return (
        <nav className="navbar">
            <div className="navbar-top">
                <div className="navbar-top-left">
                    <span>📞 Call us: +917496980581</span>
                    <span>📧 Email: Penrythlabs@gmail.com</span>
                </div>
                <button className="btn">Products List</button>
            </div>
            <hr className="navbar-divider" />

            <div className="navbar-main">
                <img
                    src="https://penrythlabs.com/wp-content/uploads/2017/12/Logo.png" alt="Penryth Labs Logo"className="logo"/>
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT US</Link></li>
                    <li className="dropdown">
                        <span>SERVICES ⌵</span>
                        <ul className="dropdown-menu">
                            <li><Link to="/services">PHARMA </Link></li>
                        </ul>
                    </li>
                    <li><Link to="/products">PRODUCTS</Link></li>
                    <li><Link to="/gallery">GALLERY</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
                    <span className="search-icon" onClick={() => setSearchOpen(true)}>🔍</span>
                    {searchOpen && (
                        <div className="modal">
                            <div className="modal-content">
                                <span className="close-btn" onClick={() => setSearchOpen(false)}>✖</span>
                                <input type="text" placeholder="Type to search" className="search-input" />
                                <div>
                                <hr className="navbar-divider" />
                                <p>Begin typing your search above and press return to search.</p>
                                </div>
                            </div>
                        </div>
                    )}

                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
            </div>
        </nav>
    );
};

export default Navbar;
