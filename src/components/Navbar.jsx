
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpeg";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);


    return (
        <nav className="navbar">
            <div className="navbar-top">
                <div className="navbar-top-left">
                    <span>📞 <strong className="bold-text">Call us:</strong> +917496980581</span>
                    <span>📧 <strong className="bold-text">Email us:</strong> sizwinpharma@gmail.com</span>
                </div>
                <a href="/ProductsPriceList.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="btn">Products List</button>
                </a>
            </div>
            <hr className="navbar-divider" />

            <div className="navbar-main">
                <img
                    src={Logo} alt="Sizwin Pharma Logo" className="logo" />
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
                            <span className="close-btn" onClick={() => setSearchOpen(false)}>☰</span>
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
