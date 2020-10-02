import React from "react";
import "./header.scss";
// import searchImgae from "../../../public/images/search-svgrepo-com.svg"
import a from "../../../public/images/loupe.png";

function Header() {
    return <>
        <div className="header-main">
            <div className="home" ><a href="/">首頁</a></div>
            <div className="favorite"><a href="/">收藏頁</a></div>
            <div className="Play"><a href="/">播放頁</a></div>
            <div className="searchbar">
                <input className="search" type="text" placeholder="收尋" />
                <div className="search-button" ><img src={a} /></div>
            </div>
        </div>
    </>
};

export default Header;

