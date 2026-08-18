import "./Home.css";

function Home() {
    return (
        <div className="shop-home">

            {/* ================= HERO ================= */}

            <section className="shop-hero">

                <div className="hero-content">

                    <span className="hero-label">
                        SHOPSPHERE • ONLINE SHOPPING
                    </span>

                    <h1>
                        Shop.
                        <br />
                        <span>Discover.</span>
                        <br />
                        Enjoy.
                    </h1>

                    <p>
                        Discover products you'll love, from everyday
                        essentials to fashion, technology and lifestyle.
                        Shop smarter with ShopSphere.
                    </p>

                    <div className="hero-buttons">

                        <button className="primary-btn">
                            EXPLORE PRODUCTS →
                        </button>

                        <button className="secondary-btn">
                            VIEW CATEGORIES
                        </button>

                    </div>

                    {/* Statistics */}

                    <div className="hero-stats">

                        <div>
                            <strong>100+</strong>
                            <span>Products</span>
                        </div>

                        <div>
                            <strong>20+</strong>
                            <span>Categories</span>
                        </div>

                        <div>
                            <strong>1K+</strong>
                            <span>Customers</span>
                        </div>

                    </div>

                </div>


                {/* ================= RIGHT SIDE ================= */}

                <div className="hero-visual">

                    <div className="floating-label label-top">
                        ⚡ BEST SELLERS
                    </div>


                    <div className="shopping-card">

                        <div className="card-top">

                            <span>SHOPSPHERE</span>

                            <span>01 / 04</span>

                        </div>


                        <div className="card-content">

                            <div className="product-symbol">
                                ✦
                            </div>

                            <span className="card-category">
                                FEATURED COLLECTION
                            </span>

                            <h2>
                                Everyday
                                <br />
                                Essentials
                            </h2>

                            <p>
                                Simple products.
                                <br />
                                Better living.
                            </p>

                        </div>


                        <div className="card-bottom">

                            <span>EXPLORE COLLECTION</span>

                            <span>↗</span>

                        </div>

                    </div>


                    <div className="floating-label label-bottom">
                        ✦ NEW ARRIVALS
                    </div>


                    <div className="mini-card">

                        <span className="mini-number">
                            03
                        </span>

                        <div>
                            <small>
                                SHOPSPHERE
                            </small>

                            <strong>
                                Smart Shopping
                            </strong>
                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CATEGORY SECTION ================= */}

            <section className="category-section">

                <div className="section-heading">

                    <span>
                        EXPLORE SHOPSPHERE
                    </span>

                    <h2>
                        Everything you need,
                        <br />
                        in one place.
                    </h2>

                </div>


                <div className="category-list">

                    <div className="category-item">
                        <span>01</span>
                        <h3>Electronics</h3>
                        <p>Technology for everyday life</p>
                        <b>↗</b>
                    </div>

                    <div className="category-item">
                        <span>02</span>
                        <h3>Fashion</h3>
                        <p>Style made simple</p>
                        <b>↗</b>
                    </div>

                    <div className="category-item">
                        <span>03</span>
                        <h3>Home & Living</h3>
                        <p>Make your space better</p>
                        <b>↗</b>
                    </div>

                    <div className="category-item">
                        <span>04</span>
                        <h3>Accessories</h3>
                        <p>Complete your everyday style</p>
                        <b>↗</b>
                    </div>

                </div>

            </section>


            {/* ================= BRAND SECTION ================= */}

            <section className="brand-section">

                <div>

                    <span>
                        THE SHOPSPHERE EXPERIENCE
                    </span>

                    <h2>
                        WE MAKE
                        <br />
                        SHOPPING
                        <br />
                        <em>SIMPLER.</em>
                    </h2>

                </div>


                <div className="brand-description">

                    <p>
                        ShopSphere brings products, categories and
                        shopping experiences together in one clean,
                        convenient platform.
                    </p>

                    <button>
                        ABOUT SHOPSPHERE →
                    </button>

                </div>

            </section>


            {/* ================= FEATURES ================= */}

            <section className="features-section">

                <div>
                    <span>01</span>
                    <h3>QUALITY</h3>
                    <p>
                        Carefully selected products for your everyday needs.
                    </p>
                </div>

                <div>
                    <span>02</span>
                    <h3>SECURE</h3>
                    <p>
                        A reliable and secure online shopping experience.
                    </p>
                </div>

                <div>
                    <span>03</span>
                    <h3>CONVENIENT</h3>
                    <p>
                        Discover, compare and shop everything in one place.
                    </p>
                </div>

            </section>

        </div>
    );
}

export default Home;