import React, { Component } from 'react';

const initData = {    
    heading: "frequently asked questions",
    faqimg: "assets/imgs/faq-img.png", 
    faqicon: "/img/faqicon.png"   
}

const datas1 = [
    {
        id: "1",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseOne",
        quote: "WHAT IS STARLIGHT NFT?",
        contentId: "collapseOne",
        contentClass: "collapse",
        content: "Starlight NFT is an immersive and interactive metaverse environment with residential, land, and game."
    },
    {
        id: "2",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseTwo",
        quote: "WHEN WILL STARLIGHT OFFICIALLY LAUNCH?",
        contentId: "collapseTwo",
        contentClass: "collapse",
        content: "The official launch date is to be announced. Join our Discord community to be the first to find out."
    },
    {
        id: "3",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseThree",
        quote: "WHAT BENEFITS CAN I GET BEING WHITELISTED?",
        contentId: "collapseThree",
        contentClass: "collapse",
        content: "You can get one of 3 WL types: Free mint, Gas paid mint, Priority mint. Detailed info on discord server."
    },
    {
        id: "4",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseFour",
        quote: "WHAT WOULD BE THE PRICE OF STARLIGHT ROOMS?",
        contentId: "collapseFour",
        contentClass: "collapse",
        content: "The price depends on the market at the time. The price of mint will be around .2ETH."
    }

];

const datas2 = [
    {
        id: "5",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseFive",
        quote: "HOW CAN I USE MY NFT?",
        contentId: "collapseFive",
        contentClass: "collapse",
        content: "Starlight has an upcoming game in the Metaverse. You will be able to use your rooms as an entry to the Starlight Metaspace. You will be able to explore with friends and compete against other holders to win NFT skins, and other exclusive digital loot!"
    },
    {
        id: "6",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseSix",
        quote: "HOW DO I GET WHITELISTED?",
        contentId: "collapseSix",
        contentClass: "collapse",
        content: "We have a whole section on our Discord Server on how to get a 'Reserved Ticket'. Join our community to stay updated."
    },
    {
        id: "7",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseSeven",
        quote: "HOW DO I PARTICIPATE IN THE LAUNCH?",
        contentId: "collapseSeven",
        contentClass: "collapse",
        content: "Remain active on our socials to be the first to have an opportunity to win a whitelist spot and be able to mint before opening to the public."
    }
]

class Faq extends Component {
    state = {
        data: {},
        datas1: [],
        datas2: [],
    }
    componentDidMount(){
        this.setState({
            data: initData,
            datas1: datas1,
            datas2: datas2
        })
    }
    render() {
        return (
            <section id="faq" className="faq-section">
                {/* <div className="bottom-gradient"></div> */}
                <div className="container">
                    <div className="row justify-content-center">                          
                        <h1 className="game-text text-center mt-4" style={{maxWidth: '490px'}}>{this.state.data.heading}</h1>                                                                                                                       
                    </div>                    
                    <div className="row pt-5 px-2">
                        <div className="col-12 col-md-12 text-center">
                            <div className="faq-content">
                                {/* Bowling Accordion */}
                                <div className="accordion" id="bowling-accordion">
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            {/* Single Accordion Item */}
                                            {this.state.datas1.map((item, idx) => {
                                                return (
                                                    <div key={`fd_${idx}`} className="text-left py-2"
                                                        data-aos="fade-up"
                                                        data-aos-offset="200"
                                                        data-aos-delay="30"
                                                        data-aos-duration="1000"
                                                        data-aos-easing="ease-in-out"
                                                        data-aos-mirror="true"
                                                        data-aos-once="true"
                                                        data-aos-anchor-placement="top-bottom"
                                                    >
                                                        {/* Card Header */}
                                                        <div className="card-header bg-inherit border-0 p-0">
                                                            <p className="m-0 faq-header">
                                                                <button className={"faq_button " + item.btnClass} type="button" data-toggle="collapse" data-target={item.target}>
                                                                    {item.quote}
                                                                </button>
                                                            </p>
                                                        </div>
                                                        <div id={item.contentId} className={item.contentClass} data-parent="#bowling-accordion">
                                                            {/* Card Body */}
                                                            <div className="card-body py-3" style={{fontFamily: 'gamma-orionis'}}>
                                                                {item.content}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Single Accordion Item */}
                                            {this.state.datas2.map((item, idx) => {
                                                return (
                                                    <div key={`fd_${idx}`} className="text-left py-2"
                                                        data-aos="fade-up"
                                                        data-aos-offset="200"
                                                        data-aos-delay="30"
                                                        data-aos-duration="1000"
                                                        data-aos-easing="ease-in-out"
                                                        data-aos-mirror="true"
                                                        data-aos-once="true"
                                                        data-aos-anchor-placement="top-bottom"
                                                    >
                                                        {/* Card Header */}
                                                        <div className="card-header bg-inherit border-0 p-0">
                                                            <p className="m-0 faq-header">
                                                                <button className={"faq_button " + item.btnClass} type="button" data-toggle="collapse" data-target={item.target}>
                                                                    {item.quote}
                                                                </button>
                                                            </p>
                                                        </div>
                                                        <div id={item.contentId} className={item.contentClass} data-parent="#bowling-accordion">
                                                            {/* Card Body */}
                                                            <div className="card-body py-3" style={{fontFamily: 'gamma-orionis'}}>
                                                                {item.content}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
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
}

export default Faq;