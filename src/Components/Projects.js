import React from 'react'
import profilePic from '../Assets/profile-pic-two.jpeg'

const Projects = () => {
    return (
        <>
        <a name="PROJECTS"></a>
        <div className="project-section">
            

            <div className="projects-section-header">My Projects</div>

            <div className="projects-container">

                <div className="project">
                    <div className="project-icon">
                        <i className="fa fa-border-all" aria-hidden="true"></i>
                    </div>
                    
                    <div className="project-name">
                        Tic-Tac-Toe
                    </div>
                    <div className="project-description">
                        This is a simple React JS based project which I created recently to learn basic CSS and CSS Animations. It covers props, state and event-handling.
                    </div>
                    <a href="https://rkant225.github.io/tic-tac-toe-react/" target="_blank" rel="noreferrer">
                        <div className="btn-view-project">View</div>
                    </a>
                </div>

                <div className="project">
                    <div className="project-icon">
                        <i className="fa fa-syringe" aria-hidden="true"></i>
                    </div>
                    <div className="project-name">
                        Covid-19 Vaccination
                    </div>
                    <div className="project-description">
                        This application demonstrate the concept of useEffect and useState React hooks. It fetches data from open API provided by indian Govt.
                    </div>
                    <a href="https://rkant225.github.io/covid-vaccine-avalibility/" target="_blank" rel="noreferrer">
                        <div className="btn-view-project">View</div>
                    </a>
                </div>

                <div className="project">
                    <div className="project-icon">
                        <i className="fa fa-dog" aria-hidden="true"></i>
                    </div>
                    <div className="project-name">
                        Animations
                    </div>
                    <div className="project-description">
                        This is pure HTML and CSS based prohect and I have used React JS to implementing Routing and wraper of html and css. As of now there are 5-6 animations in this App.
                    </div>
                    <a href="https://rkant225.github.io/animations/" target="_blank" rel="noreferrer">
                        <div className="btn-view-project">View</div>
                    </a>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Projects;