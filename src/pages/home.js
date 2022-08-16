import React from 'react';
import { Link } from 'react-router-dom';

import FilterSection from '../sections/filter';
import NFTCollection from '../sections/nft-collection';
import AboutTheArtist from './about-the-artist';
import { nftCards } from '../data/cards';
import { EqualHeight, EqualHeightElement } from 'react-equal-height';


const Home = () => {

    return (
        <>
            <AboutTheArtist 
                showConnectButton={false}
            />
            <div className="container-fluid px-0 mask-group"></div>
            <NFTCollection />




            <div className="container-fluid bg-white py-5">

                <div className="container">

                    <h2 className='text-center mb-5 mb-md-5'>Mint your favourite piece below!</h2>

                    <EqualHeight>
                        <div className="row">
                            {
                                nftCards.map(item => (
                                    <div key={item.id} className="col-md-3 mb-5">
                                        <div className="nft-box">
                                            <Link to={'/item/' + item.id}>
                                                <img src={item.src} className="img-fluid nft-img" />
                                            </Link>
                                            <EqualHeightElement>
                                                <div className="m-2">
                                                    <div className="d-flex mt-4">
                                                        <div className="col">
                                                            <p className="text-muted h5">{item.name}</p>
                                                        </div>
                                                        <div className="col my-auto text-end">
                                                            <p className="text-muted small">Price <i className="fab fa-ethereum text-dark"></i> {item.price}</p>
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
                        <div className="col-md-6 my-2">
                            <ul className="p-0">
                                <li className="d-inline-block">
                                    <a href="#" className="text-white text-decoration-none mx-2 h5">HOME</a>
                                </li>
                                <li className="d-inline-block">
                                    <a href="#" className="text-white text-decoration-none mx-2 h5">SEARCH</a>
                                </li>
                                <li className="d-inline-block">
                                    <a href="https://daniellesartwork.com/pages/about-me" className="text-white text-decoration-none mx-2 h5">ABOUT THE ARTIST</a>
                                </li>
                                <li className="d-inline-block">
                                    <a href="#" className="text-white text-decoration-none mx-2 h5">CONTACT US</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="mb-3 mt-5 hr-bottom" />
                    <p className="text-center text-muted fw-bolder mt-4">Created by <a href="#" className="text-decoration-none text-muted">COLLINGS NFT</a></p>
                </div>
            </div>

            <button className="btn text-white rounded" style={{ backgroundColor: '#6c757d' }}><i className="fa fa-question-circle"></i> Support</button>

        </>
    );
}

export default Home;