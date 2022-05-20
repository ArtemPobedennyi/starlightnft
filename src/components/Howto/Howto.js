import React, { useEffect } from 'react';

const initData = {    
    sm_heading: "HOW TO GET",
    heading: "STARLIGHT NFT",
}

const infos = [
    {
        title: "Install metamask",
        content: "Install Metamask Wallet extension in your Chrome browser",    
        img: '/assets/imgs/metamask.webp',
        color: '#f38511'
    },
    {
        title: "Transfer your eth",
        content: "Purchase Ethereum through Metamask wallet or send from any exchange",    
        img: '/assets/imgs/transfer.webp',
        color: '#838baa'
    },
    {
        title: "Mint your nft",
        content: "Connect your Metamask to the Starlight website and mint your Starlight NFT",    
        img: '/assets/imgs/mint.webp',
        color: '#de00ff'
    }
]

function Howto() {
    const [data, setData] = React.useState({});

    useEffect(() => {
        setData(initData);
    }, []);

    return (
        <section id="howto" className="artwork-section">
            {/* <div className="bottom-gradient"></div>    */}
            <div className="container">
                <div className="row justify-content-center mb-5">   
                    <div>
                        <h4 className="sm-game-text text-center mt-4 mb-0">HOW TO GET</h4>                                                                                                                       
                        <h1 className="game-text text-center">STARLIGHT NFT</h1>                                                                                                                       
                    </div>                       
                </div>            
                <div className="row mt-5">
                    <div className="col-12 col-md-12">    
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
                            {infos.map((item, idx) => {
                                return (
                                    <div className="my-auto text-center howto-item" key={idx}>
                                        <div className='howto-img'>
                                            <img className='mb-2' src={item.img} />
                                        </div>
                                        <h1 className="mt-4 mb-2 howto-title" style={{color: item.color}}>{item.title}</h1>
                                        <p className="howto-content mt-0">{item.content}</p>
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

export default Howto;