import React from "react";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Home</h1>
            <button onClick={() => navigate(
                '/about',
                {state: {message: "get data on click"} }
            ) }>
                Go About page
            </button>
        </>
    )
}

export default Home;