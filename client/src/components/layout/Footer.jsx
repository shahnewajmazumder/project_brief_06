import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="site-footer">

            <div className="footer-content">

                {/* Brand */}
                <div className="footer-brand">
                    <h2>Eventlify</h2>

                    <p>
                        Your simple and reliable event management platform.
                    </p>
                </div>


                {/* Quick Links */}
                <div className="footer-links">

                    <h3>Quick Links</h3>

                    <Link to="/">Homepage</Link>
                    <Link to="/products">Venue</Link>
                    <Link to="/about">About</Link>

                </div>


                {/* Event Services */}
                <div className="footer-links">

                    <h3>Event Services</h3>

                    <Link to="/dashboard">Suppliers</Link>
                    <Link to="/profile">Media</Link>
                    <Link to="/login">Login</Link>

                </div>

            </div>


            {/* Copyright */}
            <div className="footer-bottom">

                <p>
                    © 2026 Eventlify. All rights reserved.
                </p>

            </div>

        </footer>
    );
}

export default Footer;