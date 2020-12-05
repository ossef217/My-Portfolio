import React from 'react';


const Footer = () => {
    return(
        <footer className="footer section">
            <div className="footer__container bd-grid">
                <h1 className="footer__title">Youssef</h1>
                <p className="footer__description">
                    I am Youssef Elhaimoudi and this is my personal website. Thank you for following me.
                </p>
                <div className="footer__social">
                    <a href="/#" target="_blank" rel="noopener noreferrer" className="footer__link"><i className="bx bxl-facebook"></i></a>
                    <a href="/#" target="_blank" rel="noopener noreferrer" className="footer__link"><i className="bx bxl-instagram"></i></a>
                    <a href="/#" target="_blank" rel="noopener noreferrer" className="footer__link"><i className="bx bxl-twitter"></i></a>
                </div>
                <p className="footer__copy">
                    All rights reserved by Ossef_Tech - 2021
                </p>
            </div>
        </footer>
    )
};

export default Footer;