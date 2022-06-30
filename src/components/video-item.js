import React from 'react';


const VideoItem = (props) => {

    

    return ( 
        <video 
            key={props.videoKey}
            autoPlay loop muted
            className="d-block w-100 img-fluid">
            <source alt="" src={props.videoSource} type="video/webm" />
        </video>
    );
}
 
export default VideoItem;