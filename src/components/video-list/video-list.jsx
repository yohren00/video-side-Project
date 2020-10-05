import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import { DataContext } from "../data-provider/data-provider.js";

import "./video-list.scss";

const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";
const YOUTUBE_VIDEO_API = "https://www.googleapis.com/youtube/v3/videos";



function Videolist() {
    const [products, setProducts] = useContext(DataContext);
    const [data, setData] = useState([]);
    const [videoID, setVideoID] = useState([]);
    console.log("products", products)
    // useEffect(() => {
    //     async function axiosData() {
    //         await axios.get(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet,contentDetails,status&playlistId=UU5CwaMl1eIgY8h02uZw7u8A&maxResults=12&key=${process.env.YOUTUBE_API_KEY}`)
    //             .then(res => {
    //                 setData(res.data.items);
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             });
    //     }

    //     axiosData();

    // }, []);
    // console.log(data)

    // async function videosTime() {
    //     await axios.get(`${YOUTUBE_VIDEO_API}?id=${videoId}&key=${process.env.YOUTUBE_API_KEY}&part=contentDetails`)
    //         .then(res => console(res.data.items[0].contentDetails.duration))
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }


    return <>
        <div className="video-views">
            {
                products ? products.map(item => {
                    const { id, snippet = {}, contentDetails = {} } = item;
                    const { videoId, videoPublishedAt } = contentDetails;
                    const { title, channelTitle, thumbnails = {} } = snippet;
                    const { maxres = {} } = thumbnails;
                    let time = videoPublishedAt.replace("T", " ").replace("Z", "");

                    return <>
                        <div key={videoId} id={videoId} className="video-list">
                            <Link to={`/video/${videoId}`}>
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

export default Videolist;