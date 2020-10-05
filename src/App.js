import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./page/home-page/home-page.jsx";
import FavoritePage from "./page/favorite-page/favorite-page.jsx";
import PlayVideoPage from "./page/play-video-page/play-video-page.jsx";
import { DataProvider } from "./components/data-provider/data-provider.js";

import "./global.scss";


function App() {
    return <>
        <DataProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/favorite" component={FavoritePage} />
                    <Route exact path="/video/:id" component={PlayVideoPage} />
                </Switch>
            </BrowserRouter>
        </DataProvider>
    </>
}

export default App;