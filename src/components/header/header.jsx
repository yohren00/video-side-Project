import React from "react";
import { Link } from 'react-router-dom';

import searchImage from "../../../public/images/loupe.png";

import "./header.scss";


function Header() {
    return <>
        <div className="header-main">
            <div className="menu">
                <div className="home"><Link to="/" >首頁</Link></div>
                <div className="favorite"><Link to="/favorite">收藏頁</Link></div>

            </div>
            <div className="searchbar">
                <input className="search" type="text" placeholder="搜尋" />
                <div className="search-button" ><img src={searchImage} /></div>
            </div>
        </div>
    </>
};

export default Header;

