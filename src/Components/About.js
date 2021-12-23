import React, { useEffect, useState } from 'react'
import profilePic from '../Assets/profile-img.jpg'
import Resume from '../Assets/Resume.pdf'

const About = () => {

    const [displayMoreText, setDisplayMoreText] = useState(false);
    const $ = window.$; // JQuery

    useEffect(()=>{
        $('#extra-about-text').slideUp()
    }, [])


    const handleHideAndDisplayExtraDetail=()=>{
        setDisplayMoreText(!displayMoreText);
        if(displayMoreText){
            $('#extra-about-text').slideUp()
        } else{
            $('#extra-about-text').slideDown()
        }
    }
    return (
        <>
            <a name="ABOUT"></a>

            <div className="about-section-container">
                
                <div className="about-me-section-header">About Me</div>

                <div className="about-container">
                    <div className="profile-pic-container">
                        <img className="profile-pic" src={profilePic} alt="Profile pic"/>
                    </div>
                    <div className="about-text">
                        <div className="i-am-header-under-about">I am Rahul and I'm a <span className="typing-2"></span></div>
                            I have total 3.9 years of experience in IT/Software industry. My area of expertise is React JS, which is frontend library developed and maintained by Facebook, and I have 3 years of experience in React JS. Worked with UI technologies like HTML5, JavaScript, CSS. Hands on experience in Redux (state management). Apart from this I have good hands on experience in Python and Python based Machine Learning model building to solve business problems. 
                            
                            <div className='about-details-grid'>
                                <div className='about-details-grid-items'>
                                    <p className='about-grid-item'><b>Birthday:</b> 26 Mar 1996</p>
                                    <p className='about-grid-item'><b>Website:</b> www.example.com</p>
                                    <p className='about-grid-item about-grid-item-coloured'><b>Mobile:</b> +91 80139 29660</p>
                                    <p className='about-grid-item'><b>City:</b> Kolkata, India</p>
                                </div>
                                <div className='about-details-grid-items'>
                                    <p className='about-grid-item'><b>Age:</b> 25</p>
                                    <p className='about-grid-item'><b>Degree:</b> Master's</p>
                                    <p className='about-grid-item about-grid-item-coloured'><b>Email:</b> sayan12@gmail.com</p>
                                    <p className='about-grid-item'><b>Freelance:</b> Kolkata, India</p>
                                </div>
                            </div>

                            <div id="extra-about-text" className="about-text" style={{width : '100%'}}>
                                <br/>
                                I have completed my Masters and Bachlors in Electronics and Communication Engineering (ECE). I loved working on electronics projects mostly programming the Arduino and Raspberry-Pi boards. I have created number of projects during my graduation, few of them are Line following robot, Visitor counter, System to controll home applinces wirelessly using Wi-Fi, Wi-Fi controlled Robo Car and many more.
                                <br/>
                                <br/>
                                
                            </div>

                        <div className="btn-more-less" onClick={()=>{handleHideAndDisplayExtraDetail()}}>{displayMoreText ? 'Less' : 'More'}</div>

                        <br/>

                        <a href={Resume} download>
                            <div className="btn-download-cv">Download CV</div>
                        </a>

                    </div>
                </div>
                
            </div>
        </>
    )
}

export default About;