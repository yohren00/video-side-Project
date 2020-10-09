import React from "react";

import FavoriteList from "../favorite-list/favorite-list.jsx";

import "./favorite-context.scss";


function FavoriteContext() {
    return <>
        <div className="context-main">
            <FavoriteList />
        </div>
    </>
};

export default FavoriteContext;
