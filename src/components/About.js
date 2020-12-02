import React from 'react';

const About = () => {
    return(
        <section className="about section" id="about">
            <span className="section-subtitle">My intro</span>
            <h2 class="section-title">About Me</h2>

            <div className="about__container bd-grid">
                <div className="about__data">
                    <p className="about__description">
                    Over 6 years of Web and App development experience, 
                    proven background successfully managing all facets of 
                    site development, from initial design and architecture 
                    to site deployment and client management. 
                    Knowledgeable in the user interface, testing, 
                    and debugging processes. Bringing forth expertise 
                    in design, installation, testing, and maintenance 
                    of web systems. Equipped with diverse and promising 
                    skill-set. Proficient in as assortment of technologies, 
                    including HTML5, CSS3, JavaScript, React, Angular, 
                    Asp.Net, Vb.Net, JAVA, PHP, SQL, MySql, and more. 
                    Able to effectively self-manage during independent 
                    projects, as well as collaborate in a team setting.
                    </p>
                    <img src={require('../assets/about-profile.png')} alt="About Youssef Elhaimoudi" class="about__img" />
                </div>

                <div>
                    <div className="about__information">
                        <h3 className="about__information-title">Information</h3>
                        
                        <div className="about__information-data">
                            <i className="bx bx-user about__information-icon"></i>
                            <span>&nbsp;Youssef Elhaimoudi</span>
                        </div>

                        <div className="about__information-data">
                            <i className="bx bx-phone about__information-icon"></i>
                            <span>&nbsp;646-379-3176</span>
                        </div>

                        <div className="about__information-data">
                            <i className="bx bx-envelope about__information-icon"></i>
                            <span>&nbsp;yelhaim1@gmail.com</span>
                        </div>

                    </div>

                    <div className="about__information">
                
                        <h3 className="about__information-title">Experience and Support</h3>

                        <div className="about__information-data">
                            <i className="bx bx-medal about__information-icon"></i>
                            <div>
                                <span className="about__information-subtitle">6 Years Job</span>
                                <span className="about__information-subtitle-small">Experience</span>
                            </div>
                        </div>

                        <div className="about__information-data">
                            <i className="bx bx-briefcase about__information-icon"></i>
                            <div>
                                <span className="about__information-subtitle">20+ Projects</span>
                                <span className="about__information-subtitle-small">Completed</span>
                            </div>
                        </div>

                        <div className="about__information-data">
                            <i className="bx bx-support about__information-icon"></i>
                            <div>
                                <span className="about__information-subtitle">Support</span>
                                <span className="about__information-subtitle-small">Online 24/7</span>
                            </div>
                        </div>

                    </div>
                
                </div>

            </div>

        </section>
    )
};

export default About;