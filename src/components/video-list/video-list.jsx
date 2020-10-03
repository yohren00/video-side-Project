import React, { useState, useEffect } from "react";
import axios from "axios";
import "./video-list.scss";

const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";

function Videolist() {

    const [data, setData] = useState(null);

    async function playlistItems() {
        await axios.get(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet,contentDetails,status&playlistId=UU5CwaMl1eIgY8h02uZw7u8A&key=${process.env.YOUTUBE_API_KEY}`)
            .then(res => setData(res.data.items))
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        playlistItems();
    }, []);
    console.log(data)



    return <>
        <div>
            {
                data ? data.map(item => {
                    console.log(item)
                    const { id, snippet = {} } = item;
                    const { title, thumbnails = {} } = snippet;
                    const { medium = {} } = thumbnails;
                    return <div className="video-views">
                        <img width={medium.width} height={medium.height} src={medium.url} alt="" />
                    </div>
                })
                    : "lodaing..."
            }
        </div>

    </>
};

export default Videolist;