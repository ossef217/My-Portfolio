import React from 'react';


const Works = () => {
    return(
        <section className="works section" id="works">

            <span className="section-subtitle">My Portfolio</span>
            <h2 className="section-title">Recent Works</h2>

            <div className="works__container bd-grid">
                
                <div className="works__img">
                    <img src={require('../assets/profile1.png')} alt="Recent Works" class="project__img" />
                    <div className="works__data">
                        <a href="/#" target="_blank" rel="noopener noreferrer" className="works__link"><i className="bx bx-link-alt"></i></a>
                        <span className="works__title">Project #1</span>
                    </div>
                </div>

                <div className="works__img">
                    <img src={require('../assets/profile1.png')} alt="Recent Works" class="project__img" />
                    <div className="works__data">
                        <a href="/#" target="_blank" rel="noopener noreferrer" className="works__link"><i className="bx bx-link-alt"></i></a>
                        <span className="works__title">Project #2</span>
                    </div>
                </div>

                <div className="works__img">
                    <img src={require('../assets/profile1.png')} alt="Recent Works" class="project__img" />
                    <div className="works__data">
                        <a href="/#" target="_blank" rel="noopener noreferrer" className="works__link"><i className="bx bx-link-alt"></i></a>
                        <span className="works__title">Project #3</span>
                    </div>
                </div>

                <div className="works__img">
                    <img src={require('../assets/profile1.png')} alt="Recent Works" class="project__img" />
                    <div className="works__data">
                        <a href="/#" target="_blank" rel="noopener noreferrer" className="works__link"><i className="bx bx-link-alt"></i></a>
                        <span className="works__title">Project #4</span>
                    </div>
                </div>

                <div className="works__img">
                    <img src={require('../assets/profile1.png')} alt="Recent Works" class="project__img" />
                    <div className="works__data">
                        <a href="/#" target="_blank" rel="noopener noreferrer" className="works__link"><i className="bx bx-link-alt"></i></a>
                        <span className="works__title">Project #5</span>
                    </div>
                </div>

                <div className="works__img">
                    <img src={require('../assets/profile1.png')} alt="Recent Works" class="project__img" />
                    <div className="works__data">
                        <a href="/#" target="_blank" rel="noopener noreferrer" className="works__link"><i className="bx bx-link-alt"></i></a>
                        <span className="works__title">Project #6</span>
                    </div>
                </div>

            </div>

        </section>
    )
};

export default Works;