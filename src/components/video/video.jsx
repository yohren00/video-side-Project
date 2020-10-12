import React from "react";
import ReactPlayer from "react-player";

import "./video.scss";

function Video() {
    let videoID = location.hash.replace("#/", "");

    return <>
        <div className="context">
            <div className="video">
                <ReactPlayer controls url={`https://www.youtube.com/watch?v=${videoID}`} />
            </div>
        </div>
    </>
};

export default Video;