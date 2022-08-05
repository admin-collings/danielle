import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EqualHeight, EqualHeightElement } from 'react-equal-height';

import { nftCards } from '../data/image';


const MobileItem = () => {

    const [loadImage, setLoadImage] =  useState(false)

    return (

        <div class="d-md-none">

    <EqualHeight updateOnChange={loadImage}>
        <div className="row">
            {
                nftCards.map(item => (
                    <div key={item.id} className="col-md-3 mb-5">
                        <div className="nft-box">
                            <Link to={'/item/' + item.id}>
                                {/* <VideoItemHomepage
                                    setLoadImage={setLoadImage}
                                    source={item.src}
                                    format="video/webm"
                                /> */}
                                <img className="img-fluid" src={item.src} />
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

    )

}

export default MobileItem;