import "./../App.css";
import Sidebar from "./sidebar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {Tic} from "./../my/ticTac";
import TableData from "./../my/table"

//import Contact from "./pages/ContactUs";
//import Support from "./pages/Support";
function SideMenu() {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route
                    path="/my/tac"
                    element={<div className="home"><Tic /></div>}
                />
                <Route
                    path="/my/table"
                    element={<div className="home"><TableData /></div>}
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
        </Router>
    );
}

export default SideMenu;