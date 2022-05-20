import React, { useEffect } from 'react';

const initData = {    
    heading: "UTILITIES",
    content: "10,000 Rooms aboard the Mothership Starlight will be offered to those brave enough to leave Earth and travel into the darkness of Outerspace. Compete against other holders to receive skins. NFTs and other digital loot in Starlight's PVP game. It's never going to get any better than this.",    
    artworkImg: 'assets/imgs/utility.webp'
}

const infos1 = [
    {
        sub_heading: "Metaspace Access",
        content: "Access to Starlight and VR walkthrough of environment",    
    },
    {
        sub_heading: "IN-GAME ADVANTAGES",
        content: "Get access to the Season 1 Battle Pass",    
    },
    {
        sub_heading: "PRIVATE DISCORD HOLDER ACCESS",
        content: "Strategize your next play with exclusive community access",    
    }
]

const infos2 = [
    {
        sub_heading: "Participative Gameplay",
        content: "Change the tide of war by selecting which side to fight for, the Eternals or Oligarch Agents",    
    },
    {
        sub_heading: "Priority Access",
        content: "Be the first on the battlefield with early access to games and modes as they release",    
    },
    {
        sub_heading: "Room display",
        content: "Showcase your favorite NFT’s on the Starlight Spacewall",    
    }
]

function Utility() {
    const [data, setData] = React.useState({});

    useEffect(() => {
        setData(initData);
    }, []);

    return (
        <section id="utility" className="artwork-section">
            {/* <div className="bottom-gradient"></div>    */}
            <div className="container">
                <div className="row justify-content-center mb-5">                          
                    <h1 className="game-text text-center mt-4">UTILITIES</h1>                                                                                                                       
                </div>            
                <div className="row mt-5">
                    <div className="col-12 my-auto utility-block">    
                        <div className='utility-side'
                            data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="30"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-anchor-placement="top-bottom"
                        >
                            {infos1.map((item, idx) => {
                                return (
                                    <div className="my-auto" key={idx}>
                                        <h1 className="mt-4 mb-2 utility-title">{item.sub_heading}</h1>
                                        <p className="utility-content mt-0">{item.content}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='utility-center m-auto'
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="30"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <img src={data.artworkImg} />
                        </div>
                        <div className='utility-side'
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="30"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-anchor-placement="top-bottom"
                        >
                            {infos2.map((item, idx) => {
                                return (
                                    <div className="my-auto" key={idx}>
                                        <h1 className="mt-4 mb-2 utility-title">{item.sub_heading}</h1>
                                        <p className="utility-content mt-0">{item.content}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>          
            {/* <div className="top-gradient"></div>   */}
        </section>
    );
}

export default Utility;