import React from "react";
import ReactPlayer from "react-player";

import "./video.scss";

function Video() {
    let videoID = location.pathname.replace("/", "");
    console.log(videoID)

    return <>
        <div className="context">
            <div className="video">
                <ReactPlayer controls url={`https://www.youtube.com/watch?v=${videoID}`} />
            </div>
        </div>
    </>
};

export default Video;