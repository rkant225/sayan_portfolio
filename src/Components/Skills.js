import React from 'react'

const Skills = () => {
    return (
        <>
            <a name="SKILLS" ></a>
            <div className="skills-container">
                <div className="my-skills-header">My Skills</div>

                <div className="my-skills-left-right-container">
                    <div className="my-skills-description-container">
                        <div className="my-skills-description-header">My creative skills <span>and experience.</span></div>
                        <div className="my-skills-description-text">
                            I love javascript and currently I am working on React JS. In my current organization I've built a ReactJS based web-application for our client and it went liva last month. Apart from this I am exploring other javascript Framework/Libreries as well such as Angular JS, Vue JS. I have also worked on Node JS, Express JS, Mongo DB while building my personal projects and I am lerning them as well. I have basic knowledge of python and C# as well.
                        </div>

                        <div className="experience-container">
                            <div className="experience">
                                <div className="company">Cognizant Technology Solutions</div>
                                <div className="duration">Dec-2017 to Apr-2020</div>
                            </div>
                            <div className="experience">
                                <div className="company">Infosys Ltd.</div>
                                <div className="duration">Jun-2020 to Present</div>
                            </div>
                        </div>

                        <div className="ask-me-about">
                            Ask me about <span className="typing-3"></span>
                        </div>
                    </div>
                    <div className="my-skills-percentage-container">
                        <div className="technologies">
                            <span>React JS</span>
                            <span>90%</span>
                            <span className="bar" style={{'--percentage' : '90%'}}></span>
                        </div>
                        <div className="technologies">
                            <span>Redux</span>
                            <span>85%</span>
                            <span className="bar" style={{'--percentage' : '60%'}}></span>
                        </div>
                        <div className="technologies">
                            <span>Javascript</span>
                            <span>75%</span>
                            <span className="bar" style={{'--percentage' : '75%'}}></span>
                        </div>
                        <div className="technologies">
                            <span>HTML</span>
                            <span>80%</span>
                            <span className="bar" style={{'--percentage' : '80%'}}></span>
                        </div>
                        <div className="technologies">
                            <span>CSS</span>
                            <span>75%</span>
                            <span className="bar" style={{'--percentage' : '75%'}}></span>
                        </div>
                        <div className="technologies">
                            <span>Node JS</span>
                            <span>40%</span>
                            <span className="bar" style={{'--percentage' : '40%'}}></span>
                        </div>
                        <div className="technologies">
                            <span>Mongo DB</span>
                            <span>35%</span>
                            <span className="bar" style={{'--percentage' : '35%'}}></span>
                        </div>
                        <div className="technologies">
                            <span>Python</span>
                            <span>40%</span>
                            <span className="bar" style={{'--percentage' : '40%'}}></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;