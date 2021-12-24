import React, { useEffect } from 'react'
import bg_1 from '../Assets/bg_1.jpg';
import bg_2 from '../Assets/bg_2.jpg';
import bg_3 from '../Assets/bg_3.jpg';
import bg_4 from '../Assets/bg_4.jpg';
import bg_5 from '../Assets/bg_5.jpg';
import bg_6 from '../Assets/bg_6.jpg';
import bg_7 from '../Assets/bg_7.jpg';
import bg_8 from '../Assets/bg_8.jpg';
import bg_9 from '../Assets/bg_9.jpg';
import bg_10 from '../Assets/bg_10.jpg';

const Home = () => {

    const updateBackGroungImage = ()=>{
        const IMAGES = [bg_1, bg_2, bg_3, bg_4, bg_5, bg_6, bg_7, bg_8, bg_9, bg_10];
        const randomNumber = Math.floor(Math.random() * 10);

        const homeContainer = document.getElementById('home-container-id');
        homeContainer.style.backgroundImage = `url(${IMAGES[randomNumber]})`;
    }

    return (
        <div className="home-container" id='home-container-id' onClick={updateBackGroungImage}>
            <div className="home-text-content">
                <div className="text-1">
                    Hello, My name is
                </div>
                <div className="text-2">Sayan Ghosh</div>
                <div className="text-3">And I'm a <span className="typing-1"></span></div>
                <a href="#ABOUT">
                    <div className="btn-know-more">Know more</div>
                </a>
            </div>

            <div title="Top" className="btn-scroll-top" onClick={()=>{window.scrollTo(0,0)}}>
                <i className="fa fa-arrow-up" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default Home;