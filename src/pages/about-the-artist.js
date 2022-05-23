import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const AboutTheArtist = () => {

    const handleWalletConnect = () => {

        //handle connecting wallet here

    }

    return ( 
        <div className="container-fluid bg-white">
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-4" id="navbar">
                <div className="container">
                    <div className="d-flex w-100">
                        <div className="col my-auto">
                            <a className="navbar-brand fw-bolder" href="#">ABOUT THE ARTIST</a>
                        </div>
                        <div className="col logo-col">
                            <div className="d-flex justify-content-center">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">
                                    <img src="../assets/images/logo.png" className="img-fluid logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col my-auto empty-nav-col">
                            <button onClick={handleWalletConnect} className='btn btn-primary btn-rounded wallet__connect'>Wallet Connect</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default AboutTheArtist;