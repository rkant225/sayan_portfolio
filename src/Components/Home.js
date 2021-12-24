import React, { useEffect } from 'react'

const Home = () => {

    return (
        <div className="home-container" id='home-container-id' onClick={()=>{}}>
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