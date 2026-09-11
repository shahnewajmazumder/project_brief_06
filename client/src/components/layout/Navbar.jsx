import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <header className="site-header">
            <div className="navbar">

                {/* Logo */}
                <NavLink to="/" className="brand">
                    Eventlify
                </NavLink>

                {/* Navigation */}
                <nav className="nav-menu">

                    {/* Homepage */}
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Homepage
                    </NavLink>

                    {/* Venue */}
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Venue
                    </NavLink>

                    {/* About */}
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        About
                    </NavLink>

                    {/* Suppliers */}
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Suppliers
                    </NavLink>

                    {/* Media */}
                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Media
                    </NavLink>

                    {/* Contact Us */}
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive
                                ? "login-link active"
                                : "login-link"
                        }
                    >
                        Login
                    </NavLink>

                </nav>

                {/* Basic responsive menu button */}
                <button
                    type="button"
                    className="menu-button"
                    aria-label="Open navigation menu"
                >
                    ☰
                </button>

            </div>
        </header>
    );
}

export default Navbar;