import React from 'react';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import { useState } from 'react';
import WalletConnectProvider from "@walletconnect/web3-provider/dist/umd/index.min.js";
import Web3Modal from "web3modal";

const AboutTheArtist = (props) => {

  const renderAddress = (address) => {
    return address.substring(0, 5) + "..." + address.substring(address.length - 4, address.length);
  }

  const connectToWalletConnect = async () => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            1: "https://eth-mainnet.g.alchemy.com/v2/LhI70D7MahkPLa2TQ6JuRIHUq2BYXLnM",
            // 4: "https://eth-goerli.g.alchemy.com/v2/nEMP0yR-AUl8ErVNSG0ZnE41GiupzPgQ",
          },
        },
      },
    };

    let web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions,
    });
    await web3Modal.clearCachedProvider();

    const instance = await web3Modal.connect();

    // This is only to get the wallet connect events. Ignore for metamask
    instance.on("disconnect", async () => {
      console.log("You have disconnected");
      await web3Modal.clearCachedProvider();
      window.location.reload();
    });
    instance.on("accountsChanged", async () => {
      console.log("You have changed accounts");
      try {
        props.setIsWalletConnected(false);
        props.setAddress("");
      } catch {
        console.log("Disconnected");
        await web3Modal.clearCachedProvider();
      }
      window.location.reload();
    });

    instance.on("chainChanged", () => window.location.reload());

    try {
      let provider = new ethers.providers.Web3Provider(instance);
      let signer = provider.getSigner();
      let address = await signer.getAddress();
      props.setAddress(address);
      props.setIsWalletConnected(true);
      props.setProvider(provider);
    } catch (error) {
      console.log("Ouch");
      await web3Modal.clearCachedProvider();
      console.error(error);
    }
  }

  const connectToWallet = async () => {
    if (window.ethereum) {
      const ChainID = 4;
      if (window.ethereum.networkVersion != ChainID) {
        alert("Wrong Network. Please connect to Ethereum Network");
        window.location.reload();
      } else {
        let provider = new ethers.providers.Web3Provider(window.ethereum);
        if (typeof provider !== 'undefined') {
          const [address] = await window.ethereum.enable();
          props.setAddress(address);
          console.log(address)
          props.setIsWalletConnected(true);
          window.ethereum.on("chainChanged", function () {
            props.setIsWalletConnected(false);
            props.setAddress("");
            window.location.reload();
          });
          window.ethereum.on('accountsChanged', function () {
            props.setIsWalletConnected(false);
            props.setAddress("");
            window.location.reload();
          })
        }
      }
    } else {
      alert("No wallet detected.");
      window.location.reload();
    }

  }


  return (
    <div className="container-fluid bg-white">
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-4" id="navbar">
        <div className="container">
          <div className="d-flex w-100">
            <div className="col my-auto">
              <a className="navbar-brand fw-bolder" href="https://daniellesartwork.com/pages/about-me">ABOUT THE ARTIST</a>
            </div>
            <div className="col logo-col">
              <div className="d-flex justify-content-center">
                <Link to="/" className="nav-link active" aria-current="page" href="#">
                  <img src="../assets/images/logo.png" className="img-fluid logo" />
                </Link>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }} className="col my-auto empty-nav-col">
              {
                props.showConnectButton &&
                <button onClick={() => connectToWalletConnect()} className='btn btn-primary btn-rounded wallet__connect'>{props.isWalletConnected ? renderAddress(props.address) : "Connect Wallet"}</button>
              }
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AboutTheArtist;