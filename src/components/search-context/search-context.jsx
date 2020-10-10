import React from "react";

import SearchList from "../../components/search-list/search-list.jsx";

import "./search-context.scss";


function SearchContext() {
    return <>
        <div className="context-main">
            <SearchList />
        </div>
    </>
};

export default SearchContext;
