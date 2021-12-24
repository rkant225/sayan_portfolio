import React from 'react'

const Projects = () => {
    const PROJECTS = [
        {
            iconName : 'border-all',
            projectName : 'Tic-Tac-Toe',
            projectDescription : 'This is a simple React JS based project which I created recently to learn basic CSS and CSS Animations. It covers props, state and event-handling.',
            projectUrl : 'https://rkant225.github.io/tic-tac-toe-react/'
        },
        {
            iconName : 'syringe',
            projectName : 'Covid-19 Vaccination',
            projectDescription : 'This application demonstrate the concept of useEffect and useState React hooks. It fetches data from open API provided by indian Govt.',
            projectUrl : 'https://rkant225.github.io/covid-vaccine-avalibility/'
        },
        {
            iconName : 'dog',
            projectName : 'Animations',
            projectDescription : 'This is pure HTML and CSS based prohect and I have used React JS to implementing Routing and wraper of html and css. As of now there are 5-6 animations in this App.',
            projectUrl : 'https://rkant225.github.io/animations/'
        },
    ];
    return (
        <>
            <a name="PROJECTS"></a>
            <div className="project-section">
                

                <div className="projects-section-header">My Projects</div>

                <div className="projects-container">
                    {PROJECTS.map((project)=>{
                        return(
                            <div className="project">
                                <div className="project-icon">
                                    <i className={`fa fa-${project.iconName}`} aria-hidden="true"></i>
                                </div>
                                
                                <div className="project-name">
                                    {project.projectName}
                                </div>
                                <div className="project-description">
                                    {project.projectDescription}
                                </div>
                                <a href={project.projectUrl} target="_blank" rel="noreferrer">
                                    <div className="btn-view-project">View</div>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Projects;