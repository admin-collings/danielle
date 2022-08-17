import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { useParams, useHistory } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'

import AboutTheArtist from './about-the-artist';

import { nftCards } from '../data/webms';
import { nftCards as nftImage } from '../data/image';
import VideoItem from '../components/video-item';
import { ethers } from 'ethers';



const Item = (props) => {

    const [address, setAddress] = useState("");
    const [totalSupply, setTotalSupply] = useState("?");
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [provider , setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [web3Modal, setWeb3Modal] = useState(null);

    const NFTADDRESS = "0x2051b1CEAFF9f8Bde671DEF839b0528b57e307aa"
    const RPC = "https://eth-mainnet.g.alchemy.com/v2/LhI70D7MahkPLa2TQ6JuRIHUq2BYXLnM"

    const abi = [
        "function mint(uint256 id, uint256 amount ) public payable",
        "function totalSupply(uint256 id) public view returns (uint256)"
    ];


    const { id } = useParams()
    let history = useHistory();

    const currentItem =  nftCards[id - 1]
    const currentItemImage =  nftImage[id - 1]
    
    const nextPage = Number(id)+1
    const prevPage = Number(id)-1


    useEffect(() => {
        // Update the document title using the browser API
        getNftsAvailable()
    }, [id]);

    async function buyNow() {
        if (isWalletConnected) {

            let Contract = new ethers.Contract(
                NFTADDRESS,
                abi,
                signer
            );

            try {
                setShowLoading(true)
                // let txn = await Contract.mint(id, 1, { value: ethers.utils.parseEther("0.22") })
                let txn = await Contract.mint(id, 1)
                const receipt = await txn.wait();
                setShowForm(true)
            } catch (error) {
                alert(error.message)
                window.location.reload();
            }
        } else {
            alert("Please connect your wallet")
        }
    }

    async function getNftsAvailable() {
        let provider = new ethers.providers.JsonRpcProvider(RPC);

        let Contract = new ethers.Contract(
            NFTADDRESS,
            abi,
            provider
        );

        let total = await Contract.totalSupply(id)
        setTotalSupply(total.toString())
        console.log("Available: ", total)
    }
    return (
        <section>

            <AboutTheArtist
                showConnectButton={true}
                address={address}
                setAddress={setAddress}
                isWalletConnected={isWalletConnected}
                setIsWalletConnected={setIsWalletConnected}
                setProvider={setProvider}
                setSigner={setSigner}
                setWeb3Modal={setWeb3Modal}
            />
            {!showForm ? <div>
                
                <div className="container-fluid  bg-white">
                    <div className="container py-5">
                        <div className="row justify-content-between">
                            <div className="col-md-5">
                                <div className="single-nft-img-holder px-5 py-3">
                                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                        <div className="carousel-item active">

                                            <VideoItem 
                                                videoKey={currentItem.name}
                                                videoSource={currentItem.src}
                                                videoType="video/webm"

                                                imgSource={currentItemImage.src}
                                                imgKey={currentItemImage.name}

                                            />

                                        </div>
                                        
                                        </div>
                                        {
                                            id != 1 &&
                                            <button 
                                            onClick={ () => { history.push("/item/" + prevPage  ); } }
                                            className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>

                                            </button>
                                        }
                                        
                                        {   
                                            id != nftCards.length &&
                                            <button 
                                            onClick={ () => { history.push("/item/" + nextPage  ); } }
                                            className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 my-auto">
                                <p className="h2 text-dark text-capitalize fw-bolder single-nft-title">{currentItem.name}</p>
                                <br />
                                <p style={{ whiteSpace : "pre-line" }} className="text-muted">{currentItem.description}</p>
                                {/* <p className="text-dark">Lorem ipsum</p> */}
                                <br />
                                <hr />
                                <p className="text-blue h4">{currentItem.price} ETH</p>
                                {!showLoading ?
                                    <button onClick={() => buyNow()} className="btn btn-primary mt-md-4 buy-now-btn text-white">Buy</button> :
                                    <button className="btn btn-primary mt-md-4 buy-now-btn text-white">
                                        <RotatingLines
                                            strokeColor="white"
                                            strokeWidth="5"
                                            animationDuration="0.75"
                                            width="25"
                                            visible={true}
                                        />
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="container-fluid bg-white py-5" id="about-item-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                <p className="h2 fw-bold mb-md-4">About the Work</p>
                                <p className="mt-2">
                                With personalities like Nelson Mandela, Oprah, Stephen Hawking among a host of other notable figures who have made an impact on world history and society, this new collection from Danielle honours those who have inspired, innovated, and shaped human potential across eras.
                                </p>
                            </div>
                            <div className="col-md-4 d-none">
                                <div>
                                    <p className="text-black my-0 py-0 fw-bolder">Contract Address</p>
                                    <p className="text-muted">000000000000000000000</p>
                                </div>

                                <div className="mt-2">
                                    <p className="text-black my-0 py-0 fw-bolder">Token ID</p>
                                    <p className="text-muted">1</p>
                                </div>

                                <div>
                                    <p className="text-black my-0 py-0 fw-bolder">Medium</p>
                                    <p className="text-muted">Lorem ipsum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>  :
            
                <div className="container-fluid  bg-white">
                    <div className="container py-5">
                        <div className="row justify-content-between">
                            <div className="col-md-6 my-auto">
                                <p className="h2 text-dark fw-bolder single-nft-title">Success</p>
                                <p className="text-muted">Please fill out the form below to receive your physical nft</p>
                            </div>
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf-xkDiq5UV0rMQ4lvjXiVy0STPZpJymeHemdvBiOhpW6Cixg/viewform?embedded=true" width="640" height="1265" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
}

export default Item;