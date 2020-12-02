import React from 'react';

const Services = () => {
    return(
        <section className="services section" id="services">
            <span className="section-subtitle">What I Offer</span>
            <h2 className="section-title">My Services</h2>

            <div className="services__container bd-grid">
                
                <div className="services__content">
                    <i className="bx bx-code services__icon"></i>
                    <h3 className="services__title">Web Development</h3>
                    <p className="services__description">
                        Writing well designed, testable, efficient code by using best software development practices.
                        Create website layout/user interface by using Multiple Programming Languages.
                        Gather and refine specifications and requirements based on technical needs.
                        Create and maintain software documentation.
                    </p>
                </div>

                <div className="services__content">
                    <i className="bx bxl-codepen services__icon"></i>
                    <h3 className="services__title">Web Design</h3>
                    <p className="services__description">
                        Designing engaging and responsive landing pages.
                        Integrating client CMS programs and data feeds into websites.
                        Employing industry and design best practice through website build process.
                        Ensuring website function and stability across devices i.e. desktop, mobile, tablet.
                    </p>
                </div>

                <div className="services__content">
                    <i className="bx bx-minus-front services__icon"></i>
                    <h3 className="services__title">Front End</h3>
                    <p className="services__description">
                        Use markup languages to create user-friendly web pages. 
                        Maintain and improve website. 
                        Optimize applications for maximum speed.
                        Design mobile-based features.
                    </p>
                </div>

                <div className="services__content">
                    <i className="bx bx-minus-back services__icon"></i>
                    <h3 className="services__title">Back End</h3>
                    <p className="services__description">
                        Database creation, integration, and management.
                        Back-end frameworks to build server-side software.
                        Content management system development, deployment, and maintenance.
                        Security settings and hack prevents
                        Backup and restore technologies for a website’s files and DB
                    </p>
                </div>

                <div className="services__content">
                    <i className="bx bxl-wordpress services__icon"></i>
                    <h3 className="services__title">WordPress</h3>
                    <p className="services__description">
                        By using WordPress, I build an ffiliate hop and let users book online.
                        Create Real Estate Listings. Create a Directory Website with Maps. Build a Classifieds Page
                        Build Profesional Static or Dynamic Websites. Fix all Bugs and offer support 24/7.
                    </p>
                </div>

                <div className="services__content">
                    <i className="bx bx-add-to-queue services__icon"></i>
                    <h3 className="services__title">More +</h3>
                    <p className="services__description">
                        Content management system development, deployment, and maintenance.
                        Security settings and hack prevents
                        Backup and restore technologies for a website’s files and DB
                    </p>
                </div>
            </div>

        </section>
    )
};

export default Services;