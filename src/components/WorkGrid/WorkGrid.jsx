import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './WorkGrid.css';
import Projects from './../../assets/Projects/Projects';
import * as img from './../../assets/Img/Img';
import * as svg from './../../assets/Svg/Svg';

function WorkGrid() {

    useEffect(() => {
       console.log(Projects)
    }, [])

    return (
        <section className="my-work">
            <h1 className="section__title--separator work-title">My Works</h1>
            <div className="work-grid-container">
                {
                    Projects.map((w) => 
                       
                        <figure key={w.id} className={`work-grid-item `}>
                            <Link to={`/detail/${w.id}`}>
                            {/* ${index === 1 && 'work-featured'} */}
                            { img[w.img]() }
                            <figcaption className="work-grid-item-overlay">
                                <div>
                                    <h1>{w.name}</h1>
                                </div>
                                <div>
                                    <ul className="work-grid-stack">
                                        { 
                                            [ ...w.stack, ...w.styled ].map((i) => 
                                                <li>{ svg[i.svg]() }</li>
                                            
                                            ) 
                                        }
                                    </ul>
                                </div>
                            </figcaption>
                        </Link>
                        </figure>
                        
                    )
                }

            </div>
        </section>

    )
}

export default WorkGrid
