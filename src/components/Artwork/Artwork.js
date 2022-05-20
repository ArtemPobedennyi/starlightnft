import React, { useEffect } from 'react';

const initData = {    
    heading: "THE ARTWORK",
    content: "10,000 rooms available inside Starlight will be offered to those brave enough to leave Earth and travel into the void of outer space. Accommodations include rest area, workstation, space view, and recreational area. Compete against other holders to win NFT skins, and other exclusive digital loot. Starlight, It’s never going to get better than this.",    
    sub_heading: "10,000 Unique Rooms",
    artworkImg: 'assets/imgs/artwork.webp'
}

function Artwork() {
    const [data, setData] = React.useState({});

    useEffect(() => {
        setData(initData);
    }, []);

    return (
        <section className="artwork-section">
            {/* <div className="bottom-gradient"></div>    */}
            <div className="container">
                <div className="row justify-content-center">                          
                    <h1 className="game-text text-center mt-4">{data.heading}</h1>                                                                                                                       
                </div>            
                <div className="row mt-4 artwork-content">
                    <div className="col-12 my-auto d-flex artwork-part">    
                        <div className="about-right" style={{zIndex: 1}}
                            data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="30"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <div className="my-auto">
                                <h1 className="mt-0 artwork-title">{data.sub_heading}</h1>
                                <p className="hero-content">{data.content}</p>
                            </div>
                        </div>
                        <div className='about-left text-center' style={{zIndex: 1}}
                            data-aos="fade-right"
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
                    </div>
                </div>
                <div className="row mt-4 artwork-content-mobile">
                    <div className="col-12 my-auto artwork-part-mobile">    
                        <div className="mobile-up" style={{zIndex: 1}}
                            data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="30"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <div className="my-auto">
                                <h1 className="mt-0 artwork-title">{data.sub_heading}</h1>
                                <p className="hero-content">{data.content}</p>
                            </div>
                        </div>
                        <div className='text-center mt-5 mobile-down' style={{zIndex: 1}}
                            data-aos="fade-right"
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
                    </div>
                </div>
            </div>          
            {/* <div className="top-gradient"></div>   */}
        </section>
    );
}

export default Artwork;