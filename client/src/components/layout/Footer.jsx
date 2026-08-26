import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content">

                {/* Brand */}
                <div className="footer-brand">
                    <h2>ShopSphere</h2>
                    <p>Your simple and reliable shopping destination.</p>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>

                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/about">About</Link>
                </div>

                {/* Account Links */}
                <div className="footer-links">
                    <h3>Account</h3>

                    <Link to="/login">Login</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </div>

            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>© 2026 ShopSphere. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;