import { Link } from "react-router-dom";
import { assets } from "./assets/assets";
import "./product.scss";

export default function Product() {
    return(
        <>
            <header className="header">
                <nav className="header__nav-top">
                    <div className="header__nav-top__left">
                        <span className="material-symbols-outlined">search</span>
                    </div>
                    <div className="header__nav-top__logo">
                        <h1>Avion</h1>
                    </div>
                    <div className="header__nav-top__right">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        <span className="material-symbols-outlined">account_circle</span>
                    </div>
                </nav>
                <nav className="header__nav-bottom">
                    <ul>
                        <li>Plant pots</li>
                        <li><Link to="/zarina">Ceramics</Link></li>
                        <li>Tables</li>
                        <li><Link to="/olim">Chairs</Link></li>
                        <li>Crockery</li>
                        <li>Tableware</li>
                        <li>Cutlery</li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <section className="product-details">
                    <div className="product-details__image-block">
                        <img src={assets.table} alt="table" />
                    </div>
                    <div className="product-details__info">
                        <h2>The Dandy Chair</h2>
                        <p className="price">£250</p>
                        <p className="description">A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
                        <ul className="nostyle">
                            <li><span>.</span> Premium material</li>
                            <li><span>.</span> Handmade upholstery</li>
                            <li><span>.</span> Quality timeless classic</li>
                        </ul>
                        <div className="dimensions">
                            <h3>Dimensions</h3>
                            <ul>
                                <li>Height: 70cm</li>
                                <li>Width: 50cm</li>
                                <li>Depth: 40cm</li>
                            </ul>
                        </div>
                        <div className="form-group">
                            <div>
                                <label htmlFor="amount">Amount:</label>
                                <input type="number" id="amount" defaultValue="1" min="1" />
                            </div>
                            <button className="btn btn--primary">Add to cart</button>
                        </div>
                    </div>
                </section>
                <section className="you-might-like">
                    <h2 className="section-title">You might also like</h2>
                    <div className="you-might-like__grid">
                        <div className="product-item">
                            <img src={assets.chair} alt="chair" />
                            <p>The Dandy Chair</p>
                            <span>£250</span>
                        </div>
                        <div className="product-item">
                            <img src={assets.vase} alt="vase" />
                            <p>Rustic Vase Set</p>
                            <span>£150</span>
                        </div>
                        <div className="product-item">
                            <img src={assets.vase_2} alt="vase2" />
                            <p>The Silky Vase</p>
                            <span>£100</span>
                        </div>
                        <div className="product-item">
                            <img src={assets.lamp} alt="lamp" />
                            <p>The Lucy Lamp</p>
                            <span>£100</span>
                        </div>
                    </div>
                    <button className="btn btn--secondary">View all products</button>
                </section>
                <section className="product-features">
                    <h2 className="section-title">You might also like</h2>
                    <div className="features__grid">
                        <div className="feature-card">
                            <span className="material-symbols-outlined">car_crash</span>
                            <h3>Next day delivery</h3>
                            <p>Delivery in 24 hours</p>
                        </div>
                        <div className="feature-card">
                            <span className="material-symbols-outlined">check_circle</span>
                            <h3>Handmade crafts</h3>
                            <p>All our products are customizable</p>
                        </div>
                        <div className="feature-card">
                            <span className="material-symbols-outlined">credit_card</span>
                            <h3>Customizable</h3>
                            <p>All our products are customizable</p>
                        </div>
                        <div className="feature-card">
                            <span className="material-symbols-outlined">macro_auto</span>
                            <h3>Sustainable production</h3>
                            <p>All our products are customizable</p>
                        </div>
                    </div>
                </section>
                <section className="promo">
                    <div className="promo__card">
                        <h2 className="promo__card-title">Join the club and get the benefits</h2>
                        <p>Sign up for our newsletter and get exclusive offers on new arrivals, sales, and more.</p>
                        <form className="promo__form">
                            <input type="email" placeholder="enter your email address" className="input"/>
                            <button type="submit" className="btn btn--primary">Sign Up</button>
                        </form>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <div className="footer__top">
                    <div className="footer__column">
                        <h3>Menu</h3>
                        <ul>
                            <li>New arrivals</li>
                            <li>Best sellers</li>
                            <li>Recently viewed</li>
                            <li>Popular this week</li>
                            <li>All products</li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <h3>Categories</h3>
                        <ul>
                            <li>Crockery</li>
                            <li>Furniture</li>
                            <li>Homeware</li>
                            <li>Cutlery</li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <h3>Our company</h3>
                        <ul>
                            <li>About us</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <h3>Social</h3>
                        <ul className="column__social">
                            <li><i class="fa-brands fa-linkedin-in"></i></li>
                            <li><i class="fa-brands fa-facebook-f"></i></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                            <li><i class="fa-brands fa-twitter"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>&copy; 2024 Avion. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};