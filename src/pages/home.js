import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import NFTCollection from '../sections/nft-collection';
import AboutTheArtist from './about-the-artist';
import { nftCards } from '../data/webms';
import { EqualHeight, EqualHeightElement } from 'react-equal-height';
import VideoItemHomepage from '../components/video-item-homepage';


const Home = () => {
    
    const [loadImage, setLoadImage] =  useState(false)

    return (
        <>
            <AboutTheArtist />
            <div className="container-fluid px-0 mask-group"></div>
            <NFTCollection />




            <div className="container-fluid bg-white py-5">

                <div className="container">

                    <h2 className='text-center mb-5 mb-md-5'>Mint your favourite piece below!</h2>

                    <EqualHeight updateOnChange={loadImage}>
                        <div className="row">
                            {
                                nftCards.map(item => (
                                    <div key={item.id} className="col-md-3 mb-5">
                                        <div className="nft-box">
                                            <Link to={'/item/' + item.id}>
                                                <VideoItemHomepage 
                                                    setLoadImage={setLoadImage}
                                                    source={item.src}
                                                    format="video/webm"
                                                />
                                            </Link>
                                            <EqualHeightElement name="names">
                                                <div className="m-2">
                                                    <div className="d-flex mt-4">
                                                        <div className="col">
                                                            <p className="text-muted text-capitalize h5">{item.name}</p>
                                                        </div>
                                                        <div className="col my-auto text-end">
                                                            <p className="text-muted small">Last <i className="fab fa-ethereum text-dark"></i>{item.price}</p>
                                                        </div>
                                                    </div>
                                                    <p className="text-muted pb-0 mb-0">
                                                        {/* {item.description} */}
                                                    </p>
                                                </div>
                                            </EqualHeightElement>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </EqualHeight>
                </div>
            </div>

            <div className="container-fluid bg-black py-5">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-4 my-2">
                            <p className="text-white">Subscribe to receive updates, access to exclusive deals, and more.</p>
                            <input type="text" className="form-control input white-placeholdert text-white" placeholder="Enter your email address" />
                            <button className="btn bg-white text-gray rounded-0 px-2 py-1 mt-4">SUBSCRIBE</button>
                        </div>
                     
                    </div>
                    <hr className="mb-3 mt-5 hr-bottom" />
                    <p className="text-center text-muted fw-bolder mt-4">
                        Created by <a href="https://collingsnft.io/" 
                        target="_blank"
                        className="text-decoration-none text-muted">COLLINGS NFT</a></p>
                </div>
            </div>

        
        </>
    );
}

export default Home;