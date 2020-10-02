import React from "react";
import "./header.scss";
// import searchImgae from "../../../public/images/search-svgrepo-com.svg"

function Header() {
    return <>
        <div className="header-main">
            <div className="home">首頁</div>
            <div className="favorite">收藏頁</div>
            <div className="Play">播放頁</div>
            <div className="searchbar">
                <input className="search" type="text" placeholder="收尋" />
                <div className="search-image">收尋</div>
            </div>
        </div>
    </>
}

export default Header;

