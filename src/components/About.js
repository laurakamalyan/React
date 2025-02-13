import React from "react";
import {Outlet} from "react-router-dom";
import {useLocation} from "react-router";

function About() {
    const location = useLocation();
    const {message} = location.state || {};

    return (
        <>
            <h1>About</h1>
            <Outlet />

            <p>{message ? message : 'default data'}</p>
        </>
    )
}

export default About;