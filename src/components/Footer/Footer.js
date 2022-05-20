import React, { Component } from 'react';

class Footer extends Component {    
    render() {
        return (
            <footer className="footer-area">   
                <div className="pt-5">
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <img src="assets/imgs/mint.webp" alt="" style={{width: '50px'}} />
                                </div>
                                <div className="col-12 mb-3">
                                    <div className="copyright-area d-flex flex-wrap justify-content-center text-center py-4">                              
                                        <p className="mb-2">STARLIGHT NFT ©2022. All Rights Reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                             
            </footer>
        );
    }
}

export default Footer;