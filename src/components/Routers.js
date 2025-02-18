import React from "react";
import {BrowserRouter, Routes, NavLink, Route} from "react-router-dom";
import CurrentLocation from "./CurrentLocation";
import RoutesPath from "./RoutesPath";

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

                <RoutesPath />
            </BrowserRouter>
        </>
    )
}

export default Routers;