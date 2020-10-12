import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';

import { DataContext } from "../data-provider/data-provider.js";

import "./search-list.scss";

function SearchList() {

    const [searchVideo] = useContext(DataContext).searchVideo;
    return <>
        <div className="video-views">
            {
                searchVideo ? searchVideo.map(item => {
                    const { id, snippet = {}, contentDetails = {} } = item;
                    const { videoId, videoPublishedAt } = contentDetails;
                    const { title, channelTitle, thumbnails = {} } = snippet;
                    const { maxres = {} } = thumbnails;
                    let time = videoPublishedAt.replace("T", " ").replace("Z", "");
                    return <>
                        <div className="video-list" key={videoId} id={videoId} >
                            <div className="add" onClick={() => addFavorite(videoId)}>+</div>
                            <Link to={`/${videoId}`}>
                                <img src={maxres.url} alt={title} />
                                <p>
                                    {title}<br />
                                    {channelTitle}<br />
                                    {time}
                                </p>
                            </Link>
                        </div>
                    </>
                })
                    : "lodaing..."
            }
        </div>
    </>
};

export default SearchList;