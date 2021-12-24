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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.                            
                            
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
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.
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