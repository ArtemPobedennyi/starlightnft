import React from 'react';

const datas = [
    {imgurl: '/assets/imgs/footer_twitter.png', url: 'https://twitter.com/Starlightnft1'},
    {imgurl : '/assets/imgs/footer_discord.png', url: 'https://discord.com/invite/WVA4WFkZQs'},
    {imgurl : '/assets/imgs/footer_telegram.png', url: 'https://t.me/StarlightNFT'},
    {imgurl : '/assets/imgs/footer_instagram.png', url: 'https://www.instagram.com/starlight_nft1/'}
]

const ModalMenu = () => {
    return (
        <div id="menu" className="modal fade p-0">
            <div className="modal-dialog dialog-animated">
                <div className="modal-content">
                    <div className="modal-header" data-dismiss="modal">
                        <img src="assets/imgs/star-logo.webp" className='m-auto' />
                        <i className="far fa-times-circle icon-close" style={{position: 'absolute', top: '20px', right: '20px'}} />
                    </div>
                    <div className="menu modal-body">
                        <div className="row w-100">
                            <div className="items p-0 col-12 text-center" />
                            <div className='mx-auto mt-4'>
                                {datas.map((item, idx) => {
                                    return (
                                        <a href={item.url} target="_blank" key={idx}>
                                            <img className="footer-social-icon" src={item.imgurl} alt="" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalMenu;