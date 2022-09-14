import React from 'react';
import Contact from './contact/Contact';
import OurTeam from './ourteam/OurTeam';
import Services from './services/Services';
import Work from './work/Work';

const Main = () => {
    return (
        <>
            <Work />
            <Services />
            <OurTeam />
            <Contact />
        </>
    );
};

export default Main;