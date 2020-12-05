import React from 'react';

const Home = () => {
    return(
        <section className="home" id="home">
            <div className="home__container bd-grid">
                <div className="home__data">
                    <div className="home__img">
                        <img src={require('../assets/home-profile.png')} alt="Youssef Elhaimoudi" />
                    </div>

                    <h1 className="home__title">Youssef Elhaimoudi</h1>
                    <span className="home__profession">Full Stack Web Developer/Designer</span>

                    <div className="home__social">
                        <a href="/#" target="_blank" rel="noopener noreferrer" className="home__social-link"><i className='bx bxl-linkedin'></i></a>
                        <a href="https://github.com/ossef217" target="_blank" rel="noopener noreferrer" className="home__social-link"><i className='bx bxl-github'></i></a>
                        <a href="/#" target="_blank" rel="noopener noreferrer" className="home__social-link"><i className='bx bx-envelope'></i></a>
                        <a href="/#" target="_blank" rel="noopener noreferrer" className="home__social-link"><i className='bx bxl-facebook'></i></a>
                    </div>

                    <a href={require('../assets/my-resume/Youssef-Elhaimoudi-Resume.pdf')} target="_blank" rel="noopener noreferrer" className="button home__button" download="Youssef Elhaimoudi Resume">Download Resume</a>

                </div>
            </div>
        </section>
    )
};

export default Home;