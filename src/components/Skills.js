import React from 'react';

const Skills = () => {
    return(
        <section className="skills section" id="skills">
            <span className="section-subtitle">Why Choose Me</span>
            <h2 className="section-title">My Expertise Area</h2>
        
            <div className="skills__container bd-grid">

                <div className="skills__content">
                    <h3 className="skills__subtitle">Front End</h3>

                    <div className="skills__data">
                        <span className="skills__name">HTML/CSS</span>
                        <span className="skills__number">99%</span>
                        <span className="skills__bar skills__html"></span>
                    </div>    

                    <div className="skills__data">
                        <span className="skills__name">JavaScript</span>
                        <span className="skills__number">85%</span>
                        <span className="skills__bar skills__js"></span>
                    </div>  

                    <div className="skills__data">
                        <span className="skills__name">React</span>
                        <span className="skills__number">90%</span>
                        <span className="skills__bar skills__react"></span>
                    </div>  

                    <div className="skills__data">
                        <span className="skills__name">Angular</span>
                        <span className="skills__number">75%</span>
                        <span className="skills__bar skills__angular"></span>
                    </div>  
                </div>

                <div className="skills__content">
                    <h3 className="skills__subtitle">Back End</h3>

                    <div className="skills__data">
                        <span className="skills__name">Python</span>
                        <span className="skills__number">80%</span>
                        <span className="skills__bar skills__py"></span>
                    </div>    

                    <div className="skills__data">
                        <span className="skills__name">Php</span>
                        <span className="skills__number">70%</span>
                        <span className="skills__bar skills__php"></span>
                    </div>  

                    <div className="skills__data">
                        <span className="skills__name">Node Js</span>
                        <span className="skills__number">60%</span>
                        <span className="skills__bar skills__node"></span>
                    </div>  

                    <div className="skills__data">
                        <span className="skills__name">Firebase</span>
                        <span className="skills__number">50%</span>
                        <span className="skills__bar skills__firebase"></span>
                    </div>  

                </div>

            </div>
        
        </section>
    )
};

export default Skills;