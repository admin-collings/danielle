import React from 'react';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import { useState } from 'react';

const AboutTheArtist = () => {

    const [data, setdata] = useState({
        address: "",
        Balance: null,
      });

    // Button handler button for handling a
    // request event for metamask
      const handleWalletConnect = () => {

        // Asking if metamask is already present or not
        if (window.ethereum) {

          // res[0] for fetching a first wallet
          window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((res) => accountChangeHandler(res[0]));
        } else {
          alert("install metamask extension!!");
        }
      };

      // getbalance function for getting a balance in
      // a right format with help of ethers
      const getbalance = (address) => {

        // Requesting balance method
        window.ethereum
          .request({ 
            method: "eth_getBalance", 
            params: [address, "latest"] 
          })
          .then((balance) => {
            // Setting balance
            setdata({
              Balance: ethers.utils.formatEther(balance),
            });
          });
      };

      // Function for getting handling all events
      const accountChangeHandler = (account) => {
        // Setting an address data
        setdata({
          address: account,
        });

        // Setting a balance
        getbalance(account);
      };


    // const MAINNET_RPC_URL = 'https://mainnet.infura.io/v3/b9630684a49a4193b7ad0d2677da809a'
    // const handleWalletConnect = async () => {
    // }


    return (
        <div className="container-fluid bg-white">
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-4" id="navbar">
                <div className="container">
                    <div className="d-flex w-100 menu-wrap">
                        <div className="col my-auto">
                            <a target="_blank" className="navbar-brand fw-bolder" href="https://daniellesartwork.com/pages/about-me">ABOUT THE ARTIST</a>
                        </div>
                        <div className="col logo-col">
                            <div className="d-flex justify-content-center">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">
                                    <img src="../assets/images/logo.png" className="img-fluid logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col my-auto empty-nav-col">
                            <button onClick={() => handleWalletConnect()} className='btn btn-primary btn-rounded wallet__connect'>Wallet Connect</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default AboutTheArtist;