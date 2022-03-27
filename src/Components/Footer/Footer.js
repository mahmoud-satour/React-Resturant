import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>    
            <div className='container'>
                <div className='row'>
                    <div className='col text-center links'>
                        <a href='#'>Register</a>
                        <a href='#'>Forum</a>
                        <a href='#'>Affiliate</a>
                        <a href='#'>FAQ</a>
                    </div>
                </div>
                <div className='row'>
                    <div className='col text-center Media'>
                        <a href='#'><i className="fab fa-facebook-f"></i></a>
                        <a href='#'><i className="fab fa-twitter"></i></a>
                        <a href='#'><i className="fab fa-youtube"></i></a>
                        <a href='#'><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className='row'>
                    <div className='col text-center'>
                        <h6>© 2021. Foodera. All rights reserved.</h6>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
