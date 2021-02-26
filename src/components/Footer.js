import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                Profitez-en, et publiez dés maintenant vos oeuvres
                </p>
                <p className="footer-subcription-text">
                Utilisez notre notoriété pour vous faire voir
                </p>
                <div className="input-areas">
                <form> 
                <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                <Button buttonstyle="btn--outline">Abonnez-vous
                </Button>
                </form>
                </div>
            </section>
            <div className="footer-links">
            <div className="footer-links-wrapper">
            <div className="footer-link-items">
            <h2> About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/products'>Shop</Link>
            <Link to='/services'>Nos services</Link>
            <Link to='/home'>By Sneaker Custom</Link>
            </div>

            <div className="footer-link-items">
            <h2> Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Commande</Link>
            <Link to='/'>Sponsors</Link>
            </div>

            <div className="footer-links-wrapper">
            <div className="footer-link-items">
            <h2> Videos </h2>
            <Link to='/'>Envoyez vos vidéos</Link>
            <Link to='/'>Parrainnage</Link>
            <Link to='/'></Link>
            <Link to='/'>By Sneaker Custom</Link>
            </div>

            <div className="footer-link-items">
            <h2> Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
            </div>

                </div>
            </div>
        </div>
        <section className="social-media">
        <div className="social-media-wrap">
        <div className="footer-logo">
        <Link to="/" className="social-logo">
        Sneaker Custom <i className="fab fa-typo3"></i>
        </Link>
        </div>
        <small className='website-rights'>Sneaker Custom</small>
        <div className="social-icons">
            <Link className="social-social-icon-link facebook">
                <i className="fab fa-facebook-f"
                to="/"
                target='_blank'
                aria-label='Facebook'>
                </i>
            </Link>

            <Link className="social-social-icon-link instagram">
            <i className="fab fa-instagram"
            to="/"
            target='_blank'
            aria-label='Instagram'>
            </i>
        </Link>

        <Link className="social-social-icon-link Twitter">
        <i className="fab fa-twitter"
        to="/"
        target='_blank'
        aria-label='Twitter'>
        </i>
    </Link>

        </div>
        </div>
        </section>
    </div>
    )
}

export default Footer
