import React from "react";
import {BrowserRouter, Route, Routes, Link, NavLink} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import AboutNestedRouter from "./AboutNestedRouter";
import CurrentLocation from "./CurrentLocation";

function Routers() {
    const id = 5;
    const param = "contact/" + id;
    return (
        <>
            <BrowserRouter future={{
                v7_relativeSplatPath: true,
                v7_startTransition: true,
            }}>
                <CurrentLocation />

                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? "activeLink" : "")}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? "activeLink" : "")}
                                state={{message: "hello"}}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about/nested" className={({ isActive }) => (isActive ? "activeLink" : "")}>
                                Nested
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={param} className={({ isActive }) => (isActive ? "activeLink" : "")}>
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />}>
                        <Route path="nested" element={<AboutNestedRouter />} />
                    </Route>
                    <Route path="/contact/:id" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routers;