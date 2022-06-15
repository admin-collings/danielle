import React from 'react';
import ReactDOM from 'react-dom';
import { useParams, useHistory } from 'react-router-dom';

import AboutTheArtist from './about-the-artist';
import { nftCards } from '../data/cards';

const Item = () => {
    const { id } = useParams()
    let history = useHistory();

    const currentItem =  nftCards[id - 1]
    
    const nextPage = Number(id)+1
    const prevPage = Number(id)-1

    return ( 
        <section>
        
            <AboutTheArtist />
          
            <div className="container-fluid  bg-white">
                <div className="container py-5">
                    <div className="row justify-content-between">
                        <div className="col-md-5">
                            <div className="single-nft-img-holder px-5 py-3">
                                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={currentItem.src} className="d-block w-100 img-fluid" alt="..." />
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
                            <p className="h2 text-dark fw-bolder single-nft-title">{currentItem.name}</p>
                            <br />
                            <p className="text-muted">{currentItem.description}</p>
                            {/* <p className="text-dark">Lorem ipsum</p> */}
                            <br />
                            <hr />
                            <p className="text-blue h4">{currentItem.price} ETH</p>
                            <button className="btn btn-primary mt-md-4 buy-now-btn text-white">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
 
            <div className="container-fluid bg-white py-5 d-none" id="about-item-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            
                        </div>
                        <div className="col-md-4">
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
  
        </section>
     );
}
 
export default Item;