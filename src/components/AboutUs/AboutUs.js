import React, { Component } from 'react';

const initData = {    
    heading: "STARLIGHT NFT",
    content1: "Welcome to Starlight NFT. The world’s first fully immersive and interactive NFT project set to launch June 2022.",
    content2: "10,000 rooms onboard the Starlight interplanetary ship will be offered to valiant spacefarers who leave Earth and travel into the void of outer space. Compete against other holders to win NFT skins, and other exclusive digital loot. Starlight, It’s never going to get better than this.",
    heroImg: "/assets/imgs/aboutus.webp",       
}

class AboutUs extends Component {
    state = {
        data: {}
    }
    componentDidMount(){
        this.setState({
            data: initData
        })
    }
    render() {
        return (
            <section id="about" className="aboutus-section hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 my-auto d-flex desktop">    
                            <div className='about-left'
                                data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-delay="30"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="true"
                                data-aos-anchor-placement="top-bottom"
                            >
                                <img src={this.state.data.heroImg} />
                            </div>
                            <div className="about-right"
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
                                    <h1 className="mt-4 game-text">{this.state.data.heading}</h1>
                                    <p className="hero-content">{this.state.data.content1}</p>
                                    <p className="hero-content">{this.state.data.content2}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 my-auto d-flex mobile">    
                            <div
                                data-aos="fade-left"
                                data-aos-offset="200"
                                data-aos-delay="30"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="true"
                                data-aos-anchor-placement="top-bottom"
                            >
                                <div className="my-auto text-center">
                                    {/* <h1 className="mt-4 hero-title">{this.state.data.heading}</h1> */}
                                    <img src="assets/imgs/Starlight-NFT.png" style={{width: '300px'}} />
                                    <p className="hero-content">{this.state.data.content1}</p>
                                    <p className="hero-content">{this.state.data.content2}</p>
                                </div>
                            </div>
                            <div className="mt-5"
                                data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-delay="30"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="true"
                                data-aos-anchor-placement="top-bottom"
                            >
                                <img src={this.state.data.heroImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUs;