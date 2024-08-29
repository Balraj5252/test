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
            <div className="home">
            <Routes>
                <Route
                    path="/my/tac"
                    element={<div><Tic /></div>}
                />
                <Route
                    path="/my/table"
                    element={<div><TableData /></div>}
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