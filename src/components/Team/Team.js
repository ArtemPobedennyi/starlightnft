import React, { useEffect } from 'react';

const initData = {    
    sm_heading: "HOW TO GET",
    heading: "STARLIGHT NFT",
}

const infos = [
    {
        name: "Paka",
        role1: "NFT Creator Extraordinaire",
        role2: "a.k.a Lead Developer",
        content: "I developed stuff.  I invented the technology for scratch-and-sniff NFTs.  Beta testing it on Bored Ape Yacht Club was not a pleasant experience.",    
        img: '/assets/imgs/Parker.webp',
        link: 'https://twitter.com/Yello_Paka',
    },
    {
        name: "Dan",
        role1: "Conference Call Commander",
        role2: "a.k.a Gaming Project Lead",
        content: "I am a blockchain engineer and won several coding contests and hackathons… but here they got me managing conference calls.  Hit the mute button god dammit.",    
        img: '/assets/imgs/Daniel.webp',
        link: 'https://twitter.com/DyorDaniel',
    },
    {
        name: "Laf",
        role1: "Big Dog",
        role2: "a.k.a NFT Project Lead",
        content: "I never miss a dev meeting and I never miss a leg day.  Managing non-interchangeable units of data are like 500-pound deadlifts for me...easy.",    
        img: '/assets/imgs/Leslie.webp',
        link: 'https://twitter.com/NFT7even',
    },
    {
        name: "Jenny",
        role1: "English Professor",
        role2: "a.k.a Roadmap Manager",
        content: "Graduating with an English degree left me with zero marketable skills.  Writing the storyline for Starlight saved my butt.  Thanks, Starlight.",    
        img: '/assets/imgs/Mia.webp',
        link: 'https://twitter.com/msmeowgln',
    },
    {
        name: "Roki",
        role1: "DYOR Director",
        role2: "a.k.a Collab Manager",
        content: "Outsourcing is my thing. NFT is a piece of art. Start your day with a cup of coffee and end it with NFTs. This is not financial advice. Please do your own research.",    
        img: '/assets/imgs/Cielo.webp',
        link: 'https://twitter.com/ethxroki',
    },
    {
        name: "Kat",
        role1: "Diamond Hands Handler",
        role2: "a.k.a. Community Manager",
        content: "Get your diamond hands ready bitches and get ready to strap on your seatbelts because we’re going to take you on a wild ride through the metaverse.",    
        img: '/assets/imgs/Isa.webp',
        link: 'https://twitter.com/isamartinezb_',
    },
    {
        name: "Toria",
        role1: "Boss Lady",
        role2: "a.k.a Community Lead",
        content: "If you don't buy an NFT from us I will find you. I know where you live. I’ll track you down and…I mean…Welcome to Starlight NFT chat, how may I help you.",    
        img: '/assets/imgs/Viki.webp',
        link: 'https://twitter.com/NFTVika',
    },
    {
        name: "Meg",
        role1: "Head of FOMO",
        role2: "a.k.a Dev. Team Leader",
        content: "I missed Bitcoin in 2010 and Eth in 2015.  I am now head of FOMO and manage various FOMO activities.  You don't want to miss this project.  Trust me.",    
        img: '/assets/imgs/Meg.webp',
        link: 'https://twitter.com/MegFer1',
    },
]

function Team() {
    const [data, setData] = React.useState({});

    useEffect(() => {
        setData(initData);
    }, []);

    return (
        <section id="team" className="team-section">
            {/* <div className="bottom-gradient"></div>    */}
            <div className="container">
                <div className="row justify-content-center mb-5">   
                    <div>
                        <h1 className="game-text text-center">OUR TEAM</h1>
                    </div>                       
                </div>            
                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="30"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className="row mt-5 team-content">
                        <div className="col-12">
                            <div className="m-auto text-center team-item" style={{maxWidth: '500px'}}>
                                <div>
                                    <img className='mb-2' src='/assets/imgs/Tim.webp' />
                                </div>
                                <h1 className="team-name">
                                    Tim
                                    <a href="https://mobile.twitter.com/metivest" target="_blank" className="team-item-social-link pl-4">
                                        <img src="assets/imgs/twitter.png" />
                                    </a>
                                </h1>
                                <h4 className="team-role">Anti Gravity Guru a.k.a Founder</h4>
                                <p className="team-description" style={{maxWidth: '500px'}}>I got this party started by creating a hypothetical NFT phenomenon that is free from the force of gravity. Let's turn this world upside down together.</p>
                            </div>
                        </div>
                        {infos.map((item, idx) => {
                            return (
                                <div className="col-6 col-sm-3 col-md-3 col-ls-3" key={idx}>
                                    <div className="my-auto text-center team-item">
                                        <div className='team-img'>
                                            <img className='mb-2' src={item.img} />
                                        </div>                                        
                                        <h1 className="team-name">{item.name}{ item.link ? 
                                        <a href={item.link} target="_blank" className="team-item-social-link pl-4">
                                            <img src="assets/imgs/twitter.png" />
                                        </a> : <></> }</h1>
                                        <h4 className="team-role">{item.role1}</h4>
                                        <h4 className="team-role">{item.role2}</h4>
                                        <p className="team-description">{item.content}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>          
            {/* <div className="top-gradient"></div>   */}
        </section>
    );
}

export default Team;