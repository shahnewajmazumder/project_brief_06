import "./Footer.css";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content">

                <div className="footer-brand">
                    <h2>ShopSphere</h2>
                    <p>Your simple and reliable shopping destination.</p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>

                    <a href="/">Home</a>
                    <a href="/products">Products</a>
                    <a href="/about">About</a>
                </div>

                <div className="footer-links">
                    <h3>Account</h3>

                    <a href="/login">Login</a>
                    <a href="/profile">Profile</a>
                    <a href="/dashboard">Dashboard</a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 ShopSphere. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;