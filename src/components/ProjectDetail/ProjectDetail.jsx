import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import Projects from './../../assets/Projects/Projects';
import * as img from './../../assets/Img/Img';
import * as svg from './../../assets/Svg/Svg';
import './ProjectDetail.css'

function ProjectDetail() {
    const [project, setProject] = useState({})
    const { id } = useParams();

    useEffect(() => {
        setProject(Projects[Projects.findIndex((i) => i.id === Number(id)) || 0]) 
    }, [id])

    return (

        <div className="project-container">
            <div class="project-background"></div>
            <div className="project-detail" >
                <h3 class="project-back">
                    <Link to='/'>
                        {'< Back'}
                    </Link>
                </h3>
                {
                project?.name ?
                <div>
                <h1 className="project-name">
                    {project.name}
                </h1>
                <div className="project-detail-container">
                    <div className="project-detail-container-content">
                        {project.img && project.img.length && img[project.img]()}
                    </div>
                    <div className="project-detail-container-content">
                        <p className="project-desc">{project.desc}</p>
                        <hr className='project-hr'/>
                        <ul className="project-stack">
                            <li><b>Stack: </b></li>
                            {
                                project?.stack?.map((i) => {
                                    return <li>{svg[i.svg]()}</li>
                                    // 
                                })
                            }
                        </ul>
                        <ul className="project-styled">
                            <li><b>Styled with: </b></li>
                            {
                                project?.styled?.map((i) => {
                                    return <li>{svg[i.svg]()}</li>
                                })
                            }
                        </ul>
                        <ul className="project-deployed">
                            <li><b>Deployed using: </b></li>
                            {project?.deployed?.map((i) => {
                                return <li>{svg[i.svg]()}</li>
                            })}
                        </ul>
                        
                        { project.api?.length &&
                            <ul className="project-api">
                                <li><b>Api{project.api.length > 1 ? "'s ": " "}consumed: </b></li>
                                {project?.api?.map((i) => {
                                    return <li>{i}</li>
                                })}
                            </ul>
                        }
                        <hr className='project-hr'/>
                        <div className="Button ContactMe__Form--Submit Button-Visit">
                           <a href={project.link}>VISIT</a>
                        </div>
                    </div>
                </div>
                </div>
                :
                <h1 className="project-name"> No Matching Proyect</h1>
                }
            </div>
        </div>
    )
}


export default ProjectDetail
