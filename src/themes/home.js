import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import AboutUs from '../components/AboutUs/AboutUs';
import Story from '../components/Story/Story';
import Metaverse from '../components/Metaverse/Metaverse';
import Artwork from '../components/Artwork/Artwork';
import Utility from '../components/Utility/Utility';
import Howto from '../components/Howto/Howto';
import Roadmap from '../components/Roadmap/Roadmap';
import Faq from '../components/Faq/Faq';
import Team from '../components/Team/Team';
import Community from '../components/Community/Community';
import Footer from '../components/Footer/Footer';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class Home extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Hero />  
                <AboutUs />  
                <Story />            
                <Metaverse />            
                <Artwork />       
                <Roadmap />  
                <Utility />      
                <Howto />      
                <Team />                                                                           
                <Faq />                                                                           
                <Community />
                <Footer />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default Home;