import React from 'react';


const Contact = () => {
    return(
        <section className="contact section" id="contact">
            <span className="section-subtitle">Contact Me</span>
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact__container bd-grid">
                <form action="" className="contact__form">

                    <div className="contact__inputs">
                        <input type="text" placeholder="Name" className="contact__input" />
                        <input type="mail" placeholder="E-mail" className="contact__input" />
                    </div>

                    <input type="text" placeholder="Project" className="contact__input" />

                    <textarea name="" id="" cols="30" rows="10" placeholder="Message" className="contact__input"></textarea>

                    <input type="submit" value="Send Message" className="button contact__button" />

                </form>

                <div>
                    <div className="contact__info">
                        <h3 className="contact__subtitle">Phone Number</h3>
                        <span className="contact__text">646-379-3176</span>
                    </div>

                    <div className="contact__info">
                        <h3 className="contact__subtitle">E-mail</h3>
                        <span className="contact__text">yelhaim1@gmail.com</span>
                    </div>

                    <div className="contact__info">
                        <h3 className="contact__subtitle">Location</h3>
                        <span className="contact__text">Philadelphia, PA 19148</span>
                    </div>
                </div>

            </div>
        </section>
    )
};

export default Contact;