import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import HomePage from "./page/home-page/home-page.jsx";
import FavoritePage from "./page/favorite-page/favorite-page.jsx";
import PlayVideoPage from "./page/play-video-page/play-video-page.jsx";
import SearchPage from "./page/search-page/search-page.jsx";
import { DataProvider } from "./components/data-provider/data-provider.js";

import "./global.scss";


function App() {
    return <>
        <DataProvider>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/favorite" component={FavoritePage} />
                    <Route exact path="/search" component={SearchPage} />
                    <Route exact path="/:id" component={PlayVideoPage} />
                </Switch>
            </HashRouter>
        </DataProvider>
    </>
}

export default App;