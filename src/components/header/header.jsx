import React from "react";
import "./header.scss";
import searchImage from "../../../public/images/loupe.png";

function Header() {
    return <>
        <div className="header-main">
            <div className="menu">
                <div className="home" ><a href="/">首頁</a></div>
                <div className="favorite"><a href="/favorite">收藏頁</a></div>
            </div>
            <div className="searchbar">
                <input className="search" type="text" placeholder="搜尋" />
                <div className="search-button" ><img src={searchImage} /></div>
                {/* <img className="search-button" src={searchImage} /> */}
            </div>
        </div>
    </>
};

export default Header;

