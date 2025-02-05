// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <nav className="navbar">
//             <div className="navbar-top">
//                 <span>📞 Call us: +917496980581</span>
//                 <span>📧 Email: Penrythlabs@gmail.com</span>
//             </div>

//             <div className="navbar-main">
//                 <img
//                     src="https://penrythlabs.com/wp-content/uploads/2017/12/Logo.png"
//                     alt="Penryth Labs Logo"
//                     className="logo"
//                 /> <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//                     <li><Link to="/">HOME</Link></li>
//                     <li><Link to="/about">ABOUT US</Link></li>
//                     <li className="dropdown">
//                         <span>SERVICES ⌵</span>
//                         <ul className="dropdown-menu">
//                             <li><Link to="/services">Service 1</Link></li>
//                             <li><Link to="/services">Service 2</Link></li>
//                         </ul>
//                     </li>
//                     <li><Link to="/products">PRODUCTS</Link></li>
//                     <li><Link to="/gallery">GALLERY</Link></li>
//                     <li><Link to="/contact">CONTACT</Link></li>
//                 </ul>
//                 <button className="btn">Products List</button>
//                 <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-top">
                <span>📞 Call us: +917496980581</span>
                <span>📧 Email: Penrythlabs@gmail.com</span>
                <button className="btn">Products List</button>
            </div>

            <div className="navbar-main">
                <img
                    src="https://penrythlabs.com/wp-content/uploads/2017/12/Logo.png"
                    alt="Penryth Labs Logo"
                    className="logo"
                />
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT US</Link></li>
                    <li className="dropdown">
                        <span>SERVICES ⌵</span>
                        <ul className="dropdown-menu">
                            <li><Link to="/services">Service 1</Link></li>
                            <li><Link to="/services">Service 2</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/products">PRODUCTS</Link></li>
                    <li><Link to="/gallery">GALLERY</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
            </div>
        </nav>
    );
};

export default Navbar;

