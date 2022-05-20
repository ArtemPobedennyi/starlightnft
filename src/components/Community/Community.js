import React, { useState, useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from '../NewsletterForm/NewsletterForm';

const datas = [
    {imgurl: '/assets/imgs/footer_twitter.png', url: 'https://twitter.com/Starlightnft1'},
    {imgurl : '/assets/imgs/footer_discord.png', url: 'https://discord.com/invite/WVA4WFkZQs'},
    {imgurl : '/assets/imgs/footer_telegram.png', url: 'https://t.me/StarlightNFT'},
    {imgurl : '/assets/imgs/footer_instagram.png', url: 'https://www.instagram.com/starlight_nft1/'},
    // {imgurl : '/assets/imgs/footer_facebook.png', url: 'https://www.facebook.com/Starlight-NFT-104904372149527'},
    {imgurl : '/assets/imgs/footer_youtube.png', url: 'https://www.youtube.com/channel/UCq8XxMJPlXgEz5gBwB9dhJg'},
    {imgurl : '/assets/imgs/footer_opensea.png', url: 'https://opensea.io/'},
    // {imgurl : '/assets/imgs/footer_tiktok.png', url: 'https://www.tiktok.com/@starlightnft_'},
    // {imgurl : '/assets/imgs/footer_redit.png', url: 'https://www.reddit.com/r/StarlightNFT/'}
]

function Community() {  
    const MAILCHIMP_URL = 'https://metamintlabs.us4.list-manage.com/subscribe/post?u=96f6f41a9684183219af13fa6&amp;id=cfff37c4f9';

    return (
        <div className="py-5 mt-5 community-section">
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
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
                                <h1 className='community-title text-center mb-3'>JOIN THE COMMUNITY</h1>
                                {datas.map((item, idx) => {
                                    return (
                                        <a href={item.url} target="_blank" key={idx}>
                                            <img className="footer-social-icon" src={item.imgurl} alt="" />
                                        </a>
                                    );
                                })}
                                <MailchimpSubscribe
                                    url={ MAILCHIMP_URL }
                                    render={ ( props ) => {
                                        const { subscribe, status, message } = props || {};
                                        return (
                                            <NewsletterForm
                                                status={ status }
                                                message={ message }
                                                onValidated={ formData => subscribe( formData ) }
                                            />
                                        );
                                    } }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    );
}

export default Community;