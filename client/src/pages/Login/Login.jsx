import { useState } from "react";
import "./Login.css";

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="login-page">

            <div className="login-container">

                {/* Brand */}
                <div className="login-brand">
                    <div className="brand-icon">E</div>

                    <h1>Eventlify</h1>

                    <p>Plan better. Celebrate more.</p>
                </div>

                {/* Login Card */}
                <div className="login-card">

                    <div className="login-heading">
                        <h2>Welcome Back</h2>

                        <p>
                            {isLoggedIn
                                ? "You are logged in successfully."
                                : "Login to continue planning your perfect event."}
                        </p>
                    </div>

                    {/* Conditional Rendering */}
                    {isLoggedIn ? (
                        <div>
                            <p>Welcome to Eventlify!</p>

                            <button
                                type="button"
                                className="login-button"
                                onClick={() => setIsLoggedIn(false)}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <form
                            className="login-form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                setIsLoggedIn(true);
                            }}
                        >

                            <div className="form-group">
                                <label htmlFor="email">
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">
                                    Password
                                </label>

                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                />
                            </div>

                            {/* Remember + Forgot */}
                            <div className="login-options">

                                <label className="remember-me">
                                    <input type="checkbox" />
                                    <span>Remember me</span>
                                </label>

                                <a href="#" className="forgot-password">
                                    Forgot password?
                                </a>

                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="login-button"
                            >
                                Login
                                <span>→</span>
                            </button>

                        </form>
                    )}

                    {/* Divider */}
                    <div className="login-divider">
                        <span></span>
                        <p>or</p>
                        <span></span>
                    </div>

                    {/* Create Account */}
                    <p className="create-account">
                        Don't have an account?
                        <a href="#">
                            Create Account
                        </a>
                    </p>

                    {/* Back */}
                    <a href="/" className="back-home">
                        ← Back to Eventlify
                    </a>

                </div>

            </div>

        </div>
    );
}

export default Login;