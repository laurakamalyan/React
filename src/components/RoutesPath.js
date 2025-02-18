import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import AboutNestedRouter from "./AboutNestedRouter";
import Contact from "./Contact";

function RoutesPath() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route path="nested" element={<AboutNestedRouter />} />
                </Route>
                <Route path="/contact/:id" element={<Contact />} />
            </Routes>
        </>
    )
}

export default RoutesPath;