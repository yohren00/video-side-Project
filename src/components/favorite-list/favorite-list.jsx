import React, { useContext } from "react";
import { Link } from 'react-router-dom';

import { DataContext } from "../data-provider/data-provider.js";

import "./favorite-list.scss";

function FavoriteList() {
    const [favorite] = useContext(DataContext).favorite;
    const removeVideo = useContext(DataContext).removeVideo;

    return <>
        <div className="video-views">
            {
                favorite ? favorite.map(item => {
                    const { id, snippet = {}, contentDetails = {} } = item;
                    const { videoId, videoPublishedAt } = contentDetails;
                    const { title, channelTitle, thumbnails = {} } = snippet;
                    const { maxres = {} } = thumbnails;
                    let time = videoPublishedAt.replace("T", " ").replace("Z", "");
                    return <>
                        <div className="video-list" key={videoId} id={videoId} >
                            <div className="add" onClick={() => removeVideo(videoId)}>-</div>
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

export default FavoriteList;