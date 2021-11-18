import React from 'react'
import * as svg from '../../assets/Svg/Svg';

import './Skills.css';

function Skills() {
    const languages = [
        {svg:'JsSvg', name:'JavaScript'},
        {svg:'TsSvg', name: 'TypeScript'},
        // {svg:'PythonSvg', name:'Python'},
        {svg: 'JavaSvg', name: 'Java'}
    ]

    const frontend = [
        {svg:'HtmlSvg', name: 'HTML'},
        {svg:'CssSvg',  name:'CSS'},
        {svg:'SassSvg', name:'Sass'},
        {svg:'ReactJsSvg', name:'ReactJs'},
        {svg:'ReduxSvg',name:'Redux'},
    ]
    
    const backend = [
        {svg:'ExpressSvg',  name:'ExpressJs'},
        {svg: 'NodeSvg',    name:'NodeJs'},
        {svg: 'MongoSvg',   name:'MongoDb'},
        {svg: 'PostgresqlSvg', name:'PostgresQL'},
        {svg: 'DjangoSvg', name:'Django'},
    ]

    return (
        <section class="skills-section" id="skills">
            <h1 class="section__title--separator skills-main-title">Skills</h1>
            {/* <span class="section__subtitle">My technical level</span> */}
            <div class="skills-container">
               
                {/* <!------------------------ SKILLS 1------------------------> */}
                <div class="skills-content skills1">
                    <div class="skills-header">
                            <h1 class="skills-category">Programming<br /> Languages</h1>
                    </div>
                    <div className="skills-svg">
                        {svg.BracketsSvg()}
                    </div>
                    <div class="skills-list grid">
                        {
                            languages.map((i) => {
                                return (
                                    <div class="skills-data">
                                        {/* <div class="skills-svg">
                                            {svg[i.svg]()}
                                        </div> */}
                                        <div class="skills-title">
                                            <h3 class="skills-name">{i.name}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* <!------------------------ SKILLS 2------------------------>*/}
                <div class="skills-content skills2">
                    <div class="skills-header ">
                            <h1 class="skills-category">Frontend<br /> Skills</h1>
                    </div>
                    <div className="skills-svg">
                        {svg.FrontendSvg()}
                    </div>
                    <div class="skills-list grid">
                        {
                            frontend.map((i) => {
                                return (
                                    <div class="skills-data">
                                        {/* <div class="skills-svg">
                                            {svg[i.svg]()}
                                        </div> */}
                                        <div class="skills-title">
                                            <h3 class="skills-name">{i.name}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                    {/* <!------------------------ SKILLS 3------------------------>*/}
                    <div class="skills-content skills3" >
                        <div class="skills-header">
                            
                                <h1 class="skills-category">Backend<br /> Skills</h1>
                        </div>
                        <div className="skills-svg">
                            {svg.BackendSvg()}
                        </div>
                        <div class="skills-list grid">
                        {
                            backend.map((i) => {
                                return (
                                    <div class="skills-data">
                                        {/* <div class="skills-svg">
                                            {svg[i.svg]()}
                                        </div> */}
                                        <div class="skills__titles">
                                            <h3 class="skills-name">{i.name}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        </div>
                    </div>
                </div>
        </section>

    )
}

export default Skills
