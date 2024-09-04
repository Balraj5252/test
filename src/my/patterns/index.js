
import {patternData} from "./patternData";
import {useState} from "react";
import RowColmStars from "./rowStars";
import Triangle from "./triangle";

const Patterns = () => {
    const [selectedPattern, setSelectedPattern] = useState(patternData[0]);
    const ssp = (event) => {
        let v;
        for ( let i =0; i<patternData.length;i++) {
            if(patternData[i].id.toString() === event.target.value){
                v = patternData[i];
            }
        }
        setSelectedPattern(v);
    }

    const switchCase = () => {
        return (
            <div>
                {selectedPattern.id === 0 ? <RowColmStars Row = "row" /> : null}
                {selectedPattern.id === 1 ? <RowColmStars Row = "column" /> : null}
                {selectedPattern.id === 11 ? <RowColmStars Row = "diagonal-right" /> : null}
                {selectedPattern.id === 10 ? <RowColmStars Row = "diagonal-left" /> : null}
                {selectedPattern.id === 12 ? <RowColmStars Row = "cross" /> : null}
                {selectedPattern.id === 2 ? <Triangle triangle = "left-angle" /> : null}
                {selectedPattern.id === 3 ? <Triangle triangle = "center-angle" /> : null}
                {selectedPattern.id === 4 ? <Triangle triangle = "right-angle" /> : null}

            </div>
        );
    }
    return (
        <div>
            <div id ="content" style={{margin: "20px", border: '2px solid cornflowerblue', textAlign:"center"}}>
            <div id="left">
                <span style={{fontSize : "20px", marginRight: "20px"}}>
                    please select pattern :
                </span>
                <select onChange={ssp} >
                    {patternData.map((item) => {
                        return(
                            <option value={item.id} key={item.id}>{item.name}</option>
                        );
                    })}
                </select>
            </div>
            <div id="right" style={{textAlign:"center"}}>
                {/*<span style={{marginLeft:20, fontSize : "20px",textAlign:"left"}}>Example : </span><br/>*/}
                {selectedPattern.example}
            </div>
            </div>
            <div style={{margin: "20px", border: '2px solid cornflowerblue', textAlign:"center"}}>
                {switchCase()}
            </div>

        </div>
    );
}


export default Patterns;