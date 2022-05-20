import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar as Nb, Nav
} from 'react-bootstrap';
import { ethers } from "ethers";

// address simplify
function shortenAddress(address, chars = 4) {
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

function Header() {
    const [currentAccount, setCurrentAccount] = useState("");
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // checkIfWalletIsConnected();
    }, []);

    const handleScroll = () => {

        function handleResize() {
            setWidth(window.innerWidth);
        }

        handleResize();

        if(width <= 500) {  // mobile
            if (window.scrollY > 20) {
                document.querySelector(".navbar").className = "navbar navbar-expand scroll d-none";
            } else {
                document.querySelector(".navbar").className = "navbar navbar-expand";
            }
        } else {
            if (window.scrollY > 20) {
                document.querySelector(".navbar").className = "navbar navbar-expand scroll";
            } else {
                document.querySelector(".navbar").className = "navbar navbar-expand";
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }

    const checkIfWalletIsConnected = async () => {
        const { ethereum } = window;

        if (!ethereum) {
            alert("Make sure you have metamask!");
        } else {
            connectWallet();
        }
    }

    const connectWallet = async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                alert("You should install MetaMask!");
            } else {
                const isEthChain = await checkNetwork();
                if (isEthChain) {
                    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

                    setCurrentAccount(accounts[0]);
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const checkNetwork = async () => {
        try {
            const { ethereum } = window;
            let chainId = await ethereum.request({ method: 'eth_chainId' });

            const ethChainId = "0x1"; // ethereum main net
            // const ethChainId = "0x3"; // ropsten test net
            if (chainId.toLowerCase() !== ethChainId.toLowerCase()) {

                alert("You are not connected to the Ethereum Network! Please change to Ethereum Network.");

                return false;
            } else {
                return true;
            }
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    return (
        <header id="header">
            {/* Navbar */}
            <div className="bottom-gradient" style={{height: '100px'}}></div>   
            <nav className="navbar navbar-expand">
                <div className="container header">                                                
                    {/* Navbar Brand*/}
                    <a href="/" className="navbar-brand text-center desktop-logo" >
                        <img className="navbar-brand-sticky" src="assets/imgs/star-logo.webp" alt="sticky brand-logo" />
                    </a>
                    {/* Navbar */}
                    <div>
                        <ul className="navbar-nav items left-header">
                            <li className="nav-item dropdown">
                                <Nav.Link className="nav-link" href="/">HOME</Nav.Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Nav.Link className="nav-link" href="#scenario">SCENARIO</Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link className="nav-link" href="#roadmap">ROADMAP</Nav.Link>
                            </li>                                       
                            <li className="nav-item">
                                <Nav.Link className="nav-link" href="#utility">UTLITIES</Nav.Link>                                
                            </li>    
                            <li className="nav-item">
                                <Nav.Link className="nav-link" href="#team">TEAM</Nav.Link>                                
                            </li>    
                            <li className="nav-item dropdown">
                                <Nav.Link className="nav-link" href="#faq">FAQ</Nav.Link>                                
                            </li>                                        
                        </ul>
                        <ul className="navbar-nav items ml-auto">                               
                            <li className="nav-item">
                                <a href="https://discord.com/invite/WVA4WFkZQs" target="_blank" className="nav-link social-link">
                                    <img src="assets/imgs/discord.png" style={{width: '75%'}} />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://twitter.com/Starlightnft1" target="_blank" className="nav-link social-link px-1">
                                    <img src="assets/imgs/twitter.png" style={{width: '75%'}} />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.instagram.com/starlight_nft1/" target="_blank" className="nav-link social-link">
                                    <img src="assets/imgs/instagram.png" style={{width: '75%'}} />
                                </a>
                            </li>
                            <li className="nav-item">
                                {!currentAccount ? 
                                    <Nav.Link className="btn btn-bordered-white btn-background-gradient ml-4" onClick={() => checkIfWalletIsConnected()}>CONNECT WALLET</Nav.Link> :
                                    <p className='ml-3' style={{fontSize: '22px', fontFamily: 'star-2'}}>{shortenAddress(currentAccount, 6)}</p>
                                }
                            </li>
                        </ul>                            
                        {/* Navbar Toggler */}
                        <ul className="navbar-nav toggle">
                            <li className="nav-item">
                                <Link to="#" className="nav-link" data-toggle="modal" data-target="#menu">
                                    <i className="fas fa-bars toggle-icon m-0" />
                                </Link>
                            </li>
                        </ul>                        
                    </div>
                    <div className="mobile-header-social-group">
                        <div className="d-flex">
                            <a href="https://discord.com/invite/WVA4WFkZQs" target="_blank" className="nav-link social-link">
                                <img src="assets/imgs/discord.png" style={{width: '50%'}} />
                            </a>
                            <a href="https://twitter.com/Starlightnft1" target="_blank" className="nav-link social-link px-1">
                                <img src="assets/imgs/twitter.png" style={{width: '50%'}} />
                            </a>
                            <a href="https://www.instagram.com/starlight_nft1/" target="_blank" className="nav-link social-link">
                                <img src="assets/imgs/instagram.png" style={{width: '50%'}} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='mobile-logo'>
                    <Link className="navbar-brand text-center" to="/">
                        <img className="navbar-brand-sticky" style={{width: '60px'}} src="assets/imgs/mint.webp" alt="sticky brand-logo" />
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;