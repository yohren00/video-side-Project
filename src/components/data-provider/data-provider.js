import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";

export const DataContext = createContext();

export function DataProvider(props) {
    const [video, setVideo] = useState([]);
    const [favorite, setFavorite] = useState([]);
    const [searchVideo, setSearchVideo] = useState([]);

    //取得youtube aip 資料
    useEffect(() => {
        async function axiosData() {
            await axios.get(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet,contentDetails,status&playlistId=UU5CwaMl1eIgY8h02uZw7u8A&maxResults=12&key=${process.env.YOUTUBE_API_KEY}`)
                .then(res => {
                    setVideo(res.data.items);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        console.log("useRffect")
        axiosData();
    }, []);

    //新增到收藏
    const addFavorite = (id) => {
        if (favorite.length === 0) {
            const data = video.filter(video => {
                return video.contentDetails.videoId === id;
            });
            setFavorite([...favorite, ...data]);
        } else {
            const check = favorite.every(item => {
                return item.contentDetails.videoId !== id;
            });
            if (check) {
                const data = video.filter(video => {
                    return video.contentDetails.videoId === id;
                })
                setFavorite([...favorite, ...data]);
            } else {
                alert("已收藏。")
            }
        }
    }

    //刪除收藏
    const removeVideo = (id) => {
        if (window.confirm("確定要刪去影片?")) {
            favorite.forEach((item, index) => {
                if (item.contentDetails.videoId === id) {
                    favorite.splice(index, 1)
                }
            })
            setFavorite([...favorite])
        }
    }

    // //取得localStorage中的資料
    useEffect(() => {
        const dataVideo = JSON.parse(localStorage.getItem("dataVideo"));
        // dataVideo ? setFavorite(dataVideo) : console.log("localStorage getItem error")
        if (dataVideo) setFavorite(dataVideo)
    }, [])

    //資料存在localStorage中
    useEffect(() => {
        localStorage.setItem("dataVideo", JSON.stringify(favorite));
    }, [favorite])

    //收尋
    const filterVideo = (value) => {
        let filterValue = video.filter((item) => {
            const filterValue = item.snippet.title.match(value);
            return filterValue;
        });
        setSearchVideo(filterValue);
    }

    const value = {
        video: [video, setVideo],
        favorite: [favorite, setFavorite],
        searchVideo: [searchVideo, setSearchVideo],
        addFavorite: addFavorite,
        removeVideo: removeVideo,
        filterVideo: filterVideo
    }

    return <>
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    </>
}