import React from 'react'

const Skills = () => {
    const EXPERIENCE = [
        {
            company : 'Cognizant Technology Solutions',
            duration : 'Dec-2017 to Apr-2020'
        },
        {
            company : 'Infosys Ltd.',
            duration : 'Jun-2020 to Present'
        }
    ];

    const SKILLS = [
        {
            technology : 'React',
            percentage : '90%'
        },
        {
            technology : 'Javascript',
            percentage : '80%'
        },
        {
            technology : 'HTML',
            percentage : '60%'
        },
        {
            technology : 'CSS',
            percentage : '50%'
        },
        {
            technology : 'Python',
            percentage : '30%'
        },
    ]
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
                            {EXPERIENCE.map((exp)=>{
                                return(
                                    <div className="experience">
                                        <div className="company">{exp.company}</div>
                                        <div className="duration">{exp.duration}</div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="ask-me-about">
                            Ask me about <span className="typing-3"></span>
                        </div>
                    </div>

                    <div className="my-skills-percentage-container">
                        {SKILLS.map((skill)=>{
                            return(
                                <div className="technologies">
                                    <span>{skill.technology     }</span>
                                    <span>{skill.percentage}</span>
                                    <span className="bar" style={{'--percentage' : skill.percentage}}></span>
                                </div>  
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;