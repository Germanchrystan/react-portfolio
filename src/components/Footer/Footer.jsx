import React from 'react';

import github from './../../assets/Img/github.svg';
import linkedin from './../../assets/Img/linkedin.svg';
import twitter from './../../assets/Img/twitter.svg';

import './Footer.css';

function Footer() {
    return (
           	<footer class="Footer">
                <p>Follow me on social media</p>
                <div class="SocialIcons">
                    <a href="#" rel="noreferrer" >
                        <img src={twitter} alt="" class="SocialIcon" />
                    </a>
                    <a href="https://www.linkedin.com/in/germ%C3%A1n-chrystan/" target="_blank" rel="noreferrer" >
                        <img src={linkedin} alt="" class="SocialIcon--LinkedIn"/>
                    </a>
                    <a href="https://github.com/Germanchrystan" target="_blank" rel="noreferrer">
                        <img src={github} alt="" class="SocialIcon" />
                    </a>
                    {/* <!-- <img src="" alt="" class="SocialIcon"> --> */}
                </div>
                <p class="Copyright">Germán Chrystan - 2021</p>
            </footer> 
    )
}

export default Footer
