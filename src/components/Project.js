import React from 'react';


const Project = () => {
    return(
        <section className="project section">
            <div className="project__container bd-grid">

                <div className="project__data">
                    <h2 className="section-title project__title">Do You Have Any Project In Mind?</h2>
                    <p className="project__description">
                        All what I'm looking for is to keep you happy and satisfied with my job and work with you again.
                        Bringing forth expertise in design, installation, testing, and maintenance of web systems. 
                        Equipped with diverse and promising skillset. Proficient in an assortment of technologies.
                    </p>
                    <a href="#contact" className="button button__light">Contact Me</a>
                </div>

                <img src={require('../assets/project-idea.png')} alt="Projects" class="project__img" />

            </div>
        </section>
    )
};

export default Project;