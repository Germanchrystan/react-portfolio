import React from 'react';

import Header from './../Header/Header';
import Skills from './../Skills/Skills';
import WorkGrid from './../WorkGrid/WorkGrid';
import Contact from './../Contact/Contact';
import Footer from './../Footer/Footer';

export default function Main() {
    return (
        <div>
            <Header/>
            <Skills />
            <WorkGrid />
            <Contact />
            <Footer />
        </div>
    )
}
