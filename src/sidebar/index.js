import "./../App.css";
import Sidebar from "./sidebar";
import {
    BrowserRouter as Router,
    Routes,
    Route, Link,
} from "react-router-dom";
import {Tic} from "./../my/ticTac";
import TableData from "./../my/table"
import styled from "styled-components";
import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import CharacterPrint from "../my/charecterPrint";
import Patterns from "../my/patterns";


const Nav = styled.div`
    background: #1a3986;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

let sideStyle = "sidebarhome";
let marginstyle = "200px";
const SideMenu = () => {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => {
        if (sidebar) {
            sideStyle = "home";
            marginstyle = "20px";
        } else {
            sideStyle = "sidebarhome";
            marginstyle = "200px";
        }
        setSidebar(!sidebar)
    };
    return (
        <Router>
            <IconContext.Provider value={{ color: "#fff" }}>
            <Nav>
                <NavIcon to="#">
                    <FaIcons.FaBars
                        onClick={showSidebar}
                    />
                </NavIcon>
                <h1
                    style={{
                        textAlign: "center",
                        marginLeft: marginstyle,
                        color: "#fff",
                    }}
                >
                    Balraj
                </h1>
            </Nav>
            </IconContext.Provider>
            <Sidebar props={{sidebar : sidebar, show : showSidebar }} />
            <div className={sideStyle}>
            <Routes>
                <Route
                    path="/my/tac"
                    element={<div><Tic /></div>}
                />
                <Route
                    path="/my/table"
                    element={<div><TableData /></div>}
                />
                <Route
                    path="/my/charPrint"
                    element={<div><CharacterPrint /></div>}
                />
                <Route
                    path="/my/patterns"
                    element={<div><Patterns /></div>}
                />
                    {/*<Route*/}
                {/*    path="/about-us/aim"*/}
                {/*    element={<OurAim />}*/}
                {/*/>*/}
                {/*<Route*/}
                {/*    path="/about-us/vision"*/}
                {/*    element={<OurVision />}*/}
                {/*/>*/}

                {/*<Route*/}
                {/*    path="/support"*/}
                {/*    element={<Support />}*/}
                {/*/>*/}
            </Routes>
            </div>
        </Router>

    );
}

export default SideMenu;