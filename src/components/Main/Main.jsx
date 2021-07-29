import React from 'react';

import Header from './../Header/Header';
import Separator from './../Separator/Separator';
import Separator2 from './../Separator2/Separator2';
import Skills from './../Skills/Skills';
import WorkGrid from './../WorkGrid/WorkGrid';
import Contact from './../Contact/Contact';
import Footer from './../Footer/Footer';

export default function Main() {
    return (
        <div>
            <Header/>
            <Separator />
            <Skills />
            <WorkGrid />
            {/* <Separator2 /> */}
            <Contact />
            <Footer />
        </div>
    )
}
