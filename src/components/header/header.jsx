import React, { useState, useContext } from "react";
import { Link, Redirect } from 'react-router-dom';

import searchImage from "../../../public/images/loupe.png";

import { DataContext } from "../data-provider/data-provider.js";

import "./header.scss";


function Header() {
    const filterVideo = useContext(DataContext).filterVideo;
    const [inputValue, setinputValue] = useState("");
    console.log("inputValue", inputValue)

    const changeState = (event) => {
        setinputValue(event.target.value);
    }

    // const inputKeyEnter = (e) => {
    //     if (e.keyCode === 13) {
    //         let href = location.host;
    //         return location.href = "http://" + href + "/search";
    //     }
    // }

    return <>
        <div className="header-main">
            <div className="menu">
                <div className="home"><Link to="/" >首頁</Link></div>
                <div className="favorite"><Link to="/favorite">收藏頁</Link></div>
            </div>
            <div className="searchbar">
                <input className="search" type="text" placeholder="搜尋" onChange={changeState} /*onKeyUp={inputKeyEnter}*/ />
                <Link to="/search">
                    <div className="search-button" onClick={() => filterVideo(inputValue)} ><img src={searchImage} /></div>
                </Link>
            </div>
        </div>
    </>
};

export default Header;

