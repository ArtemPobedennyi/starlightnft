import React, { useState, useEffect } from 'react';

const initData = {    
    heading: "scenario",
    content1: "Earth, far in the future...A scientist has discovered a serum that can prevent aging and cure all diseases. The World Government considered this serum a threat to humanity and decided to hunt down all Eternals, a name given to people who used the serum.",
    content2: "Chaos erupted. Soon a deadly battle between the World Government and Eternals formed. The Eternals were outnumbered and soon realized that their only way to survive was to leave Earth.",
    content3: "A massive interplanetary ship, called Starlight, was built by the World Government to explore new planets and possible habitats. Prior to the scheduled launch date, 5000 Eternals stormed the space city and made their escape.",
    content4: "Join the Eternals and the other passengers of Starlight on their journey of finding a new habitable planet to live. Alien encounters, planetary stop overs and new galaxies will be in store for anyone brave enough to come aboard.",
    faqimg: "assets/imgs/faq-img.png", 
    faqicon: "/img/faqicon.png"   
}

function Story() {
    const [data, setData] = useState({})

    useEffect(() => {
        setData(initData)
    }, []);

    return (
        <section id="scenario" className="story-section">
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
                                <div className="row justify-content-center">
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
                                            <p className='story-content mb-3'>{data.content1}</p>
                                            <p className='story-content mb-3'>{data.content2}</p>
                                            <p className='story-content mb-3'>{data.content3}</p>
                                            <p className='story-content'>{data.content4}</p>
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

export default Story;