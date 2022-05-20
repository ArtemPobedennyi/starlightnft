import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

var sectionStyle = {
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    background: '#26262600',
    // border: '2px solid #2a2a2a',
    borderRadius: '10px',
    padding: '31px',
    // clipPath: "polygon(5% 0, 95% 0, 100% 11%, 100% 80%, 91% 100%, 6% 100%, 0 89%, 0 10%)",
    // background: '#2b2b2b',
  };

const initData = {    
    heading: "ROADMAP",
    content: "Nam molestie nisi vestibulum tempus vestibulum. Sed vehicula scelerisque placerat. Nullam ullamcorper ornare dui quis iaculis. Sed vitae purus egestas, auctor ipsum eu, suscipit tortor. Ut nec lacus fermentum, tor.m. ",      
}

const roadmaps = [
    {
        stepDate: 'Q1 - 2022',
        stepTitle: 'THE FOUNDATION',
        content1: 'Foundation Laid',
        content2: 'Community Building',
        content3: 'Mini-Game Development begins',
        content4: '3D Asset Concepts / Designs',
        description1: "We strive to be one of Ethereum’s most transparent and community driven NFT projects.",
        icon: <img src="assets/imgs/step.png" />
    },
    {
        stepDate: 'Q2 - 2022',
        stepTitle: 'THE LAUNCH',
        content1: 'Starlight NFT Season 1 Mint',
        content2: 'VR Experience Developed for the Starlight lobby',
        content3: 'Starlight FPS Development Begins',
        description1: 'By minting a Starlight NFT room you get early access to the Starlight Lobby to chat with other members, Season 1 Pass to exclusive NFTs earned through the game and exclusive rights to vote on the direction of the story and community/collaborations.',
        icon: <img src="assets/imgs/step.png" />
    },
    {
        stepDate: 'Q3 - 2022',
        stepTitle: 'METASPACE',
        content1: 'Starlight Season 2 Land Deed',
        content2: 'Launch of Starlight Minigame',
        content3: 'Airdrops',
        content4: 'Expanded Starlight Walkthrough',
        content5: 'Closed Beta Access Pass',
        description1: "Experience top of the line amenities that Starlight has to offer, nightlife in Starlight’s Metaclub, where contests will be held and experience real artists on stage and Starlight’s Museum where you can see the process and creation of the project itself and all its collaborators along the way.",
        description2: "Now that you have secured a room, join the fight in Starlight Season 2. Own a piece of the Starlight ship and join in on its economy and earn $SIMA.",
        icon: <img src="assets/imgs/step.png" />
    },
    {
        stepDate: 'Q4 - 2022',
        stepTitle: 'THE FIGHT',
        content1: 'Starlight Season 3 Metahuman',
        content2: 'Open Beta Launch',
        content3: 'Strategy Game Development',
        description1: 'Fight for the Eternals or side with the Oligarch Agents, to the victor go the spoils! Win NFT skins, guns, and more! Choose what side your Metahuman will side with!',
        icon: <img src="assets/imgs/step.png" />
    },
    {
        stepDate: 'Q1 - 2023',
        stepTitle: 'THE BEYOND',
        content1: 'Seasonal Themed Events',
        content2: 'Competitions with Prizes',
        content3: 'Collaborations and Integrations of Metaverses',
        content4: 'MMO Development',
        content5: 'Strategy Game Launch',
        description1: "With the Strategy game launch you can earn $SIMA and win a multitude of prizes based on the leaderboard.",
        description2: "Explore the entirety of Starlight.  Join us as we integrate new innovations and technologies to bring you the best journey you will ever have! Starlight, it's never going to get better than this!",
        icon: <img src="assets/imgs/step.png" />
    }
]

class Roadmap extends Component {
    state = {
        data: {},
    }
    componentDidMount(){
        this.setState({
            data: initData,
        })
    }
    render() {
        return (
            <section id="roadmap" className="roadmap-section">
                {/* <div className="bottom-gradient"></div> */}
                <div className="container">
                    <div className="row justify-content-center">                          
                        <h1 className="game-text mt-4">{this.state.data.heading}</h1>                                                                                                                       
                    </div>           
                    <div className="row pt-2 desktop-roadmap">  
                        <VerticalTimeline lineColor={'#8b8b8b'}>
                            {roadmaps.map((item, idx) => {
                                return (
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        contentStyle={sectionStyle}
                                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                                        // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                        date={<div><p className='text-white roadmap-date'>{item.stepDate}</p><h3 className='my-0 roadmap-date-title'>{item.stepTitle}</h3></div>}
                                        icon={item.icon}
                                        key={idx}
                                    >
                                        <div className="roadmap-item">
                                            <ul>
                                                <li>{item.content1}</li>
                                                <li>{item.content2}</li>
                                                {item.content3 &&
                                                    <li>{item.content3}</li> 
                                                }
                                                {item.content4 &&
                                                    <li>{item.content4}</li> 
                                                }
                                                {item.content5 &&
                                                    <li>{item.content5}</li> 
                                                }
                                            </ul>
                                            <p className="roadmap-description">{item.description1}</p>
                                            {item.description2 && 
                                                <p className="roadmap-description">{item.description2}</p>
                                            }
                                            {item.description3 && 
                                                <p className="roadmap-description">{item.description3}</p>
                                            }
                                        </div>
                                    </VerticalTimelineElement>
                                );
                            })}
                        </VerticalTimeline>    
                    </div>
                    <div className="row pt-2 mobile-roadmap">
                        <div className="justify-content-around howto-block"
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="30"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <img src="assets/imgs/roadmap.webp" style={{maxWidth: 'fit-content', width: '110%'}} />
                        </div>
                    </div>
                </div>                   
                {/* <div className="top-gradient"></div> */}
            </section>
        );
    }
}

export default Roadmap;