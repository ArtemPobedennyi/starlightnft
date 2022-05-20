import React, { useState, useEffect } from 'react';

const initData = {    
    heading: "What is The Metaverse",
    content1: "Earth, far in the future...A scientist has discovered a serum that can prevent aging and cure diseases. The World Government considered this serum a threat to humanity and decided to hunt down all Eternals, people who used the serum.",
    content2: "Chaos erupted. Soon a deadly battle between the government and Eternals formed. The Eternals were outnumbered and soon realized that their only way to survive was to leave earth.",
    content3: "A massive spaceship, called Starlight, was built by the government to explore new planets and habitats. Prior to embarkment, 5000 Eternals stormed the space city and made their escape.",
    content4: "Join the Eternals and other passengers of Starlight on their journey of finding a new habitable planets to live. Alien Encounters, planetary stop overs and new galaxies will be in store for anyone brave enough to come aboard.",
    faqimg: "assets/imgs/faq-img.png", 
    faqicon: "/img/faqicon.png"   
}

function Metaverse() {
    const [data, setData] = useState({})

    useEffect(() => {
        setData(initData)
    }, []);

    return (
        <section id="metaverse" className="metaverse-section">
            {/* <div className="bottom-gradient"></div> */}
            <div className="container">
                <div className="row justify-content-center">                          
                    <h1 className="game-text text-center mt-4">{data.heading}</h1>                                                                                                                       
                </div>                    
                <div className="row px-2">
                    <div className="col-12 col-md-12 text-center">
                        <div className="faq-content">
                            {/* Bowling Accordion */}
                            <div className="accordion" id="bowling-accordion">
                                <div className="row justify-content-center mt-5">
                                    <div data-aos="fade-up"
                                        data-aos-offset="200"
                                        data-aos-delay="30"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="true"
                                        data-aos-anchor-placement="top-bottom"
                                    >
                                        <div className="col-12 col-md-12 p-0">
                                            {/* <video autoPlay loop muted className='metaverse-video mt-4'>
                                                <source src="https://youtu.be/UK6ECn9aQWc" type="video/mp4" />
                                            </video> */}
                                            <iframe width="800" height="500" src="https://www.youtube.com/embed/UK6ECn9aQWc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                                 
        </section>
    );
}

export default Metaverse;