import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar as Nb, Container, Nav, Image, Button
} from 'react-bootstrap';
import { ethers } from "ethers";
import Countdown from "react-countdown";
import date from 'date-and-time';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import doggyclub from '../../abi/DoggyClub.json';

const CONTRACT_ADDRESS = "0xbC99A4C009648077486a357910fCb04B86d5abA8";
const METADATA_BASE_TOKENURI = "https://gateway.pinata.cloud/ipfs/QmTjRmWC916G3CEqaTCDCME3x8hMETqKxGwNp8F3omrNEE/";

// address simplify
function shortenAddress(address, chars = 4) {
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

// counter
const Completionist = () => <span>Time Is Up!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span>
          {days < 10 ? '0' + days : days}:{hours < 10 ? '0' + hours : hours}:{minutes < 10 ? '0' + minutes : minutes}
        </span>
      );
    }
};

// calculates lefted time
const now = new Date();
const endingDate = new Date(2022, 6, 15); // Month should be reduce 1 more. For ex, in case of March, Date(2022, 2, 6)

const leftTime = date.subtract(endingDate, now).toMilliseconds();

function Hero() {
    const [amount, setAmount] = useState(1);
    const [isconnected, setIsConnected] = useState(false);
    const [currentAccount, setCurrentAccount] = useState("");
    const [mintedCount, setMintedCount] = useState(0);
    const [mintLoading, setMintLoading] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    const [open, setOpen] = useState(false);

    const onOpenModal = () => {
        return;
        
        if(isconnected) {
            setOpen(true);
        } else {
            alert('Make sure you have metamask!');
        }
    }
    const onCloseModal = () => setOpen(false);

    useEffect(() => {
        // checkIfWalletIsConnected();
    }, []);

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
                    // getMintedCount();
                    setIsConnected(true);
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

            // const ethChainId = "0x1"; // ethereum main net
            const ethChainId = "0x3"; // ropsten test net
            if (chainId.toLowerCase() !== ethChainId.toLowerCase()) {

                alert("You are not connected to the Ropsten Ethereum Network! Please change to Ropsten Ethereum Network.");

                return false;
            } else {
                return true;
            }
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    const getMintedCount = async () => {
        try {
            const { ethereum } = window;

            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, doggyclub.abi, signer);

                let tokenId = await connectedContract.getTokenID();
                console.log("=============== token id ================", tokenId);
                setMintedCount(parseInt(tokenId.value._hex.toString(16), 16));  // convert hex to decimal
            } else {
                console.log("Ethereum object doesn't exist!");
            }
        } catch (error) {
            console.log("getMintedCount", error)
        }
    }

    const changeAmount = (e) => {
        setAmount(e.target.value);
    }

    const mintNFT = async () => {
        if(amount > 0 && amount <= 20) {
            setShowWarning(false);
            const isEthChain = await checkNetwork();

            // if (isEthChain) {
            //     try {
            //         setMintLoading(true);
            //         const { ethereum } = window;
    
            //         const provider = new ethers.providers.Web3Provider(ethereum);
            //         const signer = provider.getSigner();
            //         const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, doggyclub.abi, signer);

            //         const balance = await signer.getBalance();
            //         const ethBalance = ethers.utils.formatEther(balance.toString());

            //         console.log("Going to pop wallet now to pay gas...")

            //         let nftTxn = '';
            //         if (mintedCount <= 5555) {
            //             if(parseInt(ethBalance) >= 0.05 * amount) {
            //                 nftTxn = await connectedContract.mint(amount, METADATA_BASE_TOKENURI, { value: ethers.utils.parseEther((0.05 * amount).toString()) }); // 0.05
            //             }
            //             else {
            //                 alert('Insufficient funds!');
            //                 setMintLoading(false);
            //                 return;
            //             }
            //         } else if (mintedCount > 5556 && mintedCount <=10000) {
            //             if(parseInt(ethBalance) >= 0.08 * amount) {
            //                 nftTxn = await connectedContract.mint(amount, METADATA_BASE_TOKENURI, { value: ethers.utils.parseEther((0.08 * amount).toString()) }); // 0.08
            //             }
            //             else {
            //                 alert('Insufficient funds!');
            //                 setMintLoading(false);
            //                 return;
            //             }
            //         } else {
            //             alert("NFT was sold out!");
            //             return;
            //         }

            //         console.log("Mining...please wait.")
            //         await nftTxn.wait();

            //         // update minted count
            //         let tokenId = await connectedContract.getTokenID();
            //         setMintedCount(parseInt(tokenId._hex.toString(16), 16));
            //         setMintLoading(false);

            //         alert("Successfully minted! Please check your metamask now!");
            //     } catch (error) {
            //         setMintLoading(false);
            //         console.log(error)
            //     }
            // }
        } else {
            setShowWarning(true);
        }
    }

    return (
        <section className="hero-section">
            <Modal open={open} onClose={onCloseModal} center>
                <div className='mint-modal'>
                    <img src="assets/imgs/animation.gif" />
                    <div className="mint-modal-content">
                        <h4 style={{ fontSize: '20px' }}>{shortenAddress(currentAccount, 10)}</h4>
                        <h4>TOTAL : 10000 / {mintedCount <= 0 ? 0 : mintedCount - 1}</h4>
                        <h4 className='mb-0'>PRICE : {mintedCount <= 5555 ? 0.05 : 0.08} ETH</h4>
                        <div className="form-group d-flex">
                            <h4>AMOUNT : </h4>
                            <input className="my-auto ml-3 amount-input" type="number" name="quantity" min="1" max="20" value={amount} onChange={(e) => changeAmount(e)} />
                        </div>
                        {showWarning && 
                            <h4 style={{fontSize: '14px', color: '#ffeb00', marginTop: '-15px'}}>You can mint max 20 NFT arts.</h4>
                        }
                        {!mintLoading? 
                            <Nav.Link className="btn btn-bordered-white btn-background-gradient m-auto" href={'#'} onClick={mintNFT}>Mint NFT</Nav.Link> :
                            <Nav.Link className="btn btn-bordered-white btn-background-gradient m-auto disabled" href={'#'} onClick={mintNFT} disabled>Minting now...</Nav.Link>
                        }
                    </div>
                </div>
            </Modal>
            <video id="background-video" autoPlay="autoplay" loop muted playsInline>
                <source src="assets/imgs/banner-video.mp4" type="video/mp4" />
            </video>
            <div className="container" style={{ position: 'relative', paddingTop: '100px' }}>
                <div className="text-center">
                    <img src="assets/imgs/banner-starlight.webp" />
                    <h2 className="text-uppercase banner-main-text">It’s never going to get better than this</h2>
                    <h4 className="banner-text mb-4">10,000 NFT rooms onboard Starlight, boarding soon! Get your room to join the Starlight Metaverse and experience the story first hand</h4>
                    <div className='d-flex justify-content-center mt-2'>
                        <Nav.Link className="btn btn-bordered-white btn-watch-trailer text-uppercase" target="_blank" href="https://www.youtube.com/watch?v=3xAaWGLDY-s">Watch Trailer</Nav.Link>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Nav.Link className="btn btn-bordered-white btn-mint text-uppercase" style={{background: '#cd02ee'}} onClick={onOpenModal}>MINT ON TBA</Nav.Link>
                        {/* <Nav.Link className="btn btn-bordered-white btn-mint text-uppercase" style={{background: '#cd02ee'}} href={'#'}>MINT NOW</Nav.Link> */}
                    </div>
                    <div className="time-counter mt-4">
                        {/* <Countdown date={Date.now() + leftTime} renderer={renderer}>
                            <Completionist />
                        </Countdown> */}
                        <div>Countdown to TBA</div>
                    </div>
                </div>
            </div>
            {/* <div className="top-gradient"></div> */}
        </section>
    );
}

export default Hero;