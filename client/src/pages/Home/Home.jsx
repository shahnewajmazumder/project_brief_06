import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div className="shop-home">

            {/* ================= HERO SECTION ================= */}

            <section className="shop-hero">

                <div className="hero-content">

                    <span className="hero-label">
                        EVENT MANAGEMENT • PLAN YOUR EVENT
                    </span>

                    <h1>
                        Plan.
                        <br />
                        <span>Celebrate.</span>
                        <br />
                        Remember.
                    </h1>

                    <p>
                        Discover beautiful venues and trusted suppliers
                        for weddings, parties, conferences and special events.
                        Plan your perfect event with ease.
                    </p>

                    <div className="hero-buttons">

                        {/* Go to Venues */}
                        <NavLink
                            to="/products"
                            className="primary-btn"
                        >
                            EXPLORE VENUES →
                        </NavLink>

                        {/* Go to Venues for categories */}
                        <NavLink
                            to="/products"
                            className="secondary-btn"
                        >
                            VIEW EVENT CATEGORIES
                        </NavLink>

                    </div>

                    {/* ================= STATISTICS ================= */}

                    <div className="hero-stats">

                        <div>
                            <strong>100+</strong>
                            <span>Venues</span>
                        </div>

                        <div>
                            <strong>20+</strong>
                            <span>Event Categories</span>
                        </div>

                        <div>
                            <strong>1K+</strong>
                            <span>Happy Clients</span>
                        </div>

                    </div>

                </div>


                {/* ================= RIGHT SIDE ================= */}

                <div className="hero-visual">

                    <div className="floating-label label-top">
                        ✦ FEATURED EVENTS
                    </div>

                    <div className="shopping-card">

                        <div className="card-top">

                            <span>EVENT MANAGEMENT</span>

                            <span>01 / 04</span>

                        </div>


                        <div className="card-content">

                            <div className="product-symbol">
                                ✦
                            </div>

                            <span className="card-category">
                                FEATURED EVENT
                            </span>

                            <h2>
                                Your Event
                                <br />
                                Your Way
                            </h2>

                            <p>
                                Plan beautifully.
                                <br />
                                Celebrate perfectly.
                            </p>

                        </div>


                        <NavLink
                            to="/products"
                            className="card-bottom"
                        >
                            <span>EXPLORE VENUES</span>
                            <span>↗</span>
                        </NavLink>

                    </div>


                    <div className="floating-label label-bottom">
                        ✦ POPULAR VENUES
                    </div>


                    <div className="mini-card">

                        <span className="mini-number">
                            03
                        </span>

                        <div>

                            <small>
                                EVENT MANAGEMENT
                            </small>

                            <strong>
                                Perfect Events
                            </strong>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CATEGORY SECTION ================= */}

            <section className="category-section">

                <div className="section-heading">

                    <span>
                        EXPLORE EVENTS
                    </span>

                    <h2>
                        Everything you need,
                        <br />
                        to make it memorable.
                    </h2>

                </div>


                <div className="category-list">

                    <NavLink
                        to="/products"
                        className="category-item"
                    >
                        <span>01</span>
                        <h3>Weddings</h3>
                        <p>Beautiful venues for your special day</p>
                        <b>↗</b>
                    </NavLink>


                    <NavLink
                        to="/products"
                        className="category-item"
                    >
                        <span>02</span>
                        <h3>Corporate Events</h3>
                        <p>Professional spaces for every occasion</p>
                        <b>↗</b>
                    </NavLink>


                    <NavLink
                        to="/products"
                        className="category-item"
                    >
                        <span>03</span>
                        <h3>Parties</h3>
                        <p>Celebrate birthdays and special moments</p>
                        <b>↗</b>
                    </NavLink>


                    <NavLink
                        to="/products"
                        className="category-item"
                    >
                        <span>04</span>
                        <h3>Social Events</h3>
                        <p>Make every gathering unforgettable</p>
                        <b>↗</b>
                    </NavLink>

                </div>

            </section>


            {/* ================= BRAND SECTION ================= */}

            <section className="brand-section">

                <div>

                    <span>
                        THE EVENT MANAGEMENT EXPERIENCE
                    </span>

                    <h2>
                        WE MAKE
                        <br />
                        EVENTS
                        <br />
                        <em>MEMORABLE.</em>
                    </h2>

                </div>


                <div className="brand-description">

                    <p>
                        Our Event Management System brings venues,
                        suppliers and event services together in one
                        simple and convenient platform.
                    </p>

                    <NavLink
                        to="/about"
                        className="about-button"
                    >
                        ABOUT OUR SERVICE →
                    </NavLink>

                </div>

            </section>


            {/* ================= FEATURES SECTION ================= */}

            <section className="features-section">

                <div>
                    <span>01</span>

                    <h3>QUALITY</h3>

                    <p>
                        Discover trusted venues and suppliers for your event.
                    </p>
                </div>


                <div>
                    <span>02</span>

                    <h3>RELIABLE</h3>

                    <p>
                        Plan your event with dependable services and support.
                    </p>
                </div>


                <div>
                    <span>03</span>

                    <h3>CONVENIENT</h3>

                    <p>
                        Find venues and event services in one convenient place.
                    </p>
                </div>

            </section>

        </div>
    );
}

export default Home;