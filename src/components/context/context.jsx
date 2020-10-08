import React from "react";

import VideoList from "components/video-list/video-list.jsx";

import "./context.scss";


function Context() {
    return <>
        <div className="context-main">
            <VideoList />
        </div>
    </>
};

export default Context;
