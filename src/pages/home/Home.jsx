import { assets } from "./assets/assets";
import { Link } from 'react-router-dom';
import "./home.scss";

export default function Home() {
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
                <section className="hero">
                    <div className="hero__content">
                        <h1>The furniture brand for the future, with timeless designs</h1>
                        <Link to="/product" className="bottom">View collection</Link>
                    <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.</p>
                    </div>
                    <img src={assets.chair} alt="chair" className="hero__image" />
                </section>
                <section className="features">
                    <h2 className="section-title">What makes our brand different</h2>
                    <div className="features__grid">
                        <div className="feature-card">
                            <span className="material-symbols-outlined">car_crash</span>
                            <h3>Next day delivery</h3>
                            <p>Order before 3pm and get your order the next day as standard</p>
                        </div>
                        <div className="feature-card">
                        <span className="material-symbols-outlined">check_circle</span>
                            <h3>Handmade crafts</h3>
                            <p>Handmade crafted goods made with real passion and craftmanship</p>
                        </div>
                        <div className="feature-card">
                        <span className="material-symbols-outlined">credit_card</span>
                            <h3>Customizable</h3>
                            <p>For our materials and quality you won’t find better prices anywhere</p>
                        </div>
                        <div className="feature-card">
                            <span className="material-symbols-outlined">macro_auto</span>
                            <h3>Sustainable production</h3>
                            <p>We use 100% recycled packaging to ensure our footprint is manageable</p>
                        </div>
                    </div>
                </section>
                <section className="new-arrivals">
                    <h2 className="section-title">New ceramics</h2>
                    <div className="new-arrivals__grid">
                        <div className="product-item">
                            <img src={assets.chair} alt="The Dandy chair" />
                            <p>The Dandy chair</p>
                            <span>£250</span>
                        </div>
                        <div className="product-item">
                            <img src={assets.vase} alt="Rustic Vase Set" />
                            <p>Rustic Vase Set</p>
                            <span>£150</span>
                        </div>
                        <div className="product-item">
                            <img src={assets.vase_2} alt="The Silky Vase" />
                            <p>The Silky Vase</p>
                            <span>£100</span>
                        </div>
                        <div className="product-item">
                            <img src={assets.lamp} alt="The Lucy Lamp" />
                            <p>The Lucy Lamp</p>
                            <span>£100</span>
                        </div>
                    </div>
                    <button className="btn btn--secondary">View all products</button>
                </section>
                <section className="popular-products">
                    <h2 className="section-title">Our popular products</h2>
                    <div className="popular-products__grid">
                        <div className="product-item">
                            <img src={assets.sofa} alt="The Dandy sofa" />
                            <p>The Dandy sofa</p>
                            <span>£1000</span>
                        </div>
                        <div className="product-item">
                            <img src={assets.chair} alt="The Dandy chair" />
                            <p>The Dandy chair</p>
                            <span>£250</span>
                        </div>
                        <div className="product-item">
                            <img src={assets.table} alt="The Dandy table" />
                            <p>The Dandy table</p>
                            <span>£450</span>
                        </div>
                    </div>
                    <button className="btn btn--secondary">View all products</button>
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
                <section className="extra-content">
                    <div className="extra-content__left">
                        <h2>From a studio in London to a global brand with over 200 stores</h2>
                        <p>When we started, we wanted to create high-quality, sustainable furniture. Our brand has grown, but our mission has remained the same.</p>
                        <button className="btn btn--primary">View collection</button>
                    </div>
                    <div className="extra-content__right">
                        <img src={assets.extra_content_img} alt="Interior" />
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