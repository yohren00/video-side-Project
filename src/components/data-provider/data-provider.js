import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";
const YOUTUBE_VIDEO_API = "https://www.googleapis.com/youtube/v3/videos";

export const DataContext = createContext();

export function DataProvider(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function axiosData() {
            await axios.get(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet,contentDetails,status&playlistId=UU5CwaMl1eIgY8h02uZw7u8A&maxResults=12&key=${process.env.YOUTUBE_API_KEY}`)
                .then(res => {
                    setProducts(res.data.items);
                })
                .catch(error => {
                    console.log(error);
                });
        }

        axiosData();
    }, []);


    return <>
        <DataContext.Provider value={[products, setProducts]}>
            {props.children}
        </DataContext.Provider>
    </>
}