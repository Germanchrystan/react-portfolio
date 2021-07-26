import React from 'react'
import * as svg from '../../assets/Svg/Svg';

import './Skills.css';

function Skills() {
    const languages = [
        {svg:'JsSvg', name:'JavaScript'},
        {svg:'TsSvg', name: 'TypeScript'},
        {svg:'PythonSvg', name:'Python'}
    ]

    const frontend = [
        {svg:'HtmlSvg', name: 'HTML'},
        {svg:'CssSvg',  name:'CSS'},
        {svg:'LessSvg', name:'Less'},
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

/*================================== ACCORDION SKILLS TOGGLE =======================================*/
    const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

    function toggleSkills(){
        let itemClass = this.parentNode.className;

        for(let i = 0; i < skillsContent.length; i++){
            skillsContent[i].className = 'skills__content skills__close'
        }

        if(itemClass === "skills__content skills__close"){
            this.parentNode.className = "skills__content skills__open"
        }
    }

    skillsHeader.forEach((el) => {
        el.addEventListener('click', toggleSkills)
    })



    return (
        <section class="skills section" id="skills">
            <h1 class="section__title--separator">Skills</h1>
            {/* <span class="section__subtitle">My technical level</span> */}
            <div class="skills__container">
               
                {/* <!------------------------ SKILLS 1------------------------> */}
                <div class="skills__content skills__close">
                    <div class="skills__header">
                        <i class="uil uil-brackets-curly skills__icon"></i>
                        <div>
                            <h1 class="skills__title">Programming <br />Languages</h1>
                        </div>
                        <i class="uil uil-angle-down skills__arrow"></i>
                    </div>
                    <div class="skills__list grid">
                        {
                            languages.map((i) => {
                                return(
                                    <div class="skills__data">
                                        <div class="skills__titles">
                                            {svg[i.svg]()}
                                            <h3 class="skills_name">{i.name}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* <!------------------------ SKILLS 2------------------------>*/}
                <div class="skills__content skills__close">
                    <div class="skills__header">
                        <i class="uil uil-brackets-curly skills__icon"></i>
                        <div>
                            <h1 class="skills__title">Frontend<br /> Skills</h1>
                        </div>
                        <i class="uil uil-angle-down skills__arrow"></i>
                    </div>
                    <div class="skills__list grid">
                        {
                            frontend.map((i) => {
                                return (
                                    <div class="skills__data">
                                        <div class="skills__titles">
                                            {svg[i.svg]()}
                                            <h3 class="skills_name">{i.name}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                    {/* <!------------------------ SKILLS 3------------------------>*/}
                    <div class="skills__content skills__close">
                        <div class="skills__header">
                            <i class="uil uil-server-network skills__icon"></i>
                            <div>
                                <h1 class="skills__title">Backend<br /> Skills</h1>
                                
                            </div>
                            <i class="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div class="skills__list grid">
                        {
                            backend.map((i) => {
                                return (
                                    <div class="skills__data">
                                        <div class="skills__titles">
                                            {svg[i.svg]()}
                                            <h3 class="skills_name">{i.name}</h3>
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
