import React from 'react'
import './Separator.css'
import welcome1 from './../../assets/Img/welcome-01.png';
import welcome2 from './../../assets/Img/welcome-02.png';


function Separator() {
    return (
        <section className="secondIntro">
            <div className="secondIntro__Left">
                <div clasName="secondIntro-overlay"></div>
                <img src={welcome1} alt="welcome1"/>
            </div>
            <div className="secondIntro__Middle">
                <h2>
                     Download My CV
                </h2>
                <div className="cv">
                    
                    <div className="cv-en">

                        English
                    </div>
                    <div className="cv-es">
                        Español
                    </div>
                </div>
            </div>
            <div className="secondIntro__Right">
                <div clasName="secondIntro-overlay"></div>
                <img src={welcome2} alt="welcome2"/>
            </div>
        </section>
    )
}

export default Separator
