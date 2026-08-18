import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <header className="site-header">
            <div className="navbar">

                {/* Logo */}
                <NavLink to="/" className="brand">
                    ShopSphere
                </NavLink>

                {/* Navigation */}
                <nav className="nav-menu">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Products
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Profile
                    </NavLink>

                    <NavLink
                        to="/login"
                        className="login-link"
                    >
                        Login
                    </NavLink>

                </nav>

            </div>
        </header>
    );
}

export default Navbar;