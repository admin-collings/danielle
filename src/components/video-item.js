import React from 'react';


const VideoItem = (props) => {

    

    return ( 
        <React.Fragment>
            <video 
                key={props.videoKey}
                autoPlay 
                loop 
                muted
                playsInline
                className="w-100 img-fluid d-none d-md-block">
                <source alt="" src={props.videoSource} type={props.videoType} />
            </video>
            
            <div class="d-md-none">
                <img className="img-fluid" src={props.imgSource} />
            </div>
        </React.Fragment>
    );
}
 
export default VideoItem;