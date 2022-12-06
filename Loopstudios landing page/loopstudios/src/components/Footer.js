import React from 'react'
import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';


const Footer = function() {
    return (
        <section id="footer">
                <div className="logo">
                    <img src={logo} alt="Loopstudios" />
                </div>
                <nav>
                    <ul>
                        <li>
                        <button>About</button>
                        </li>
                        <li>
                        <button>Careers</button>
                        </li>
                        <li>
                        <button>Events</button>
                        </li>
                        <li>
                        <button>Products</button>
                        </li>
                        <li>
                        <button>Support</button>
                        </li>
                    </ul>
                </nav>
                <div className='icons'>
                    <img src={facebook} alt="facebook icon"/>
                    <img src={twitter} alt="twitter icon"/>
                    <img src={pinterest} alt="pinterest icon"/>
                    <img src={instagram} alt="instagram icon"/>
                </div>
                <p>© { new Date().getFullYear() } Looplstudios. All rights reserved.</p>
        </section>
    );
}

export default Footer;