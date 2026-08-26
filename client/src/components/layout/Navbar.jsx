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

                    {/* Home */}
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Home
                    </NavLink>

                    {/* Products */}
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Products
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

                    {/* Dashboard */}
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Dashboard
                    </NavLink>

                    {/* Profile */}
                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Profile
                    </NavLink>

                    {/* Login */}
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