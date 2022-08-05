const VideoItemHomepage = (props) => {

    return ( 
        <video 
            onLoadedData={()=>props.setLoadImage(true)}
            autoPlay 
            loop 
            muted 
            className="img-fluid nft-img">
            <source alt="" src={props.source} type={props.format} />
        </video>
     );
}
 
export default VideoItemHomepage;