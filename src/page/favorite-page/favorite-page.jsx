import React from "react";

import Header from "../../components/header/header.jsx";
import FavoriteContext from "../../components/favorite-context/favorite-context.jsx";

function FavoritePage() {
    return <>
        <Header />
        <FavoriteContext />
    </>
};

export default FavoritePage;