import {useLocation} from "react-router-dom";

export function Tic() {
    let location = useLocation();
    return (<div>in Tic Tac {location.pathname}</div>);

}
