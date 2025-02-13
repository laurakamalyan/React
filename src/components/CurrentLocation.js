import React from "react";
import {useLocation} from "react-router";

function CurrentLocation() {
    const location = useLocation();

    return (
        <div>
            <p>Path name: {location.pathname}</p>
            <p>Search: {location.search}</p>
            <p>Hash: {location.hash}</p>
        </div>
    )
}

export default CurrentLocation;