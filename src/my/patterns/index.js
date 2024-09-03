
import {patternData} from "./patternData";
import {useState} from "react";
import RowStars from "./rowStars";

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
                {selectedPattern.id === 0 ? <RowStars /> : null}
                {selectedPattern.id === 1 ? <span>here comes column</span> : null}
            </div>
        );
    }
    return (
        <div>
            <div style={{margin: "20px"}}>
                <label style={{fontSize : "20px", marginRight: "20px"}}>
                    please select pattern :
                </label>
                <select onChange={ssp} style={{padding: 10}} >
                    {patternData.map((item, index) => {
                        return(
                            <option value={item.id} style={{background:"blue"}}>{item.name}</option>
                        );
                    })}
                </select>
            </div>
            <div>
                {selectedPattern.example}
            </div>
            <div>
                {switchCase()}
            </div>

        </div>
    );
}


export default Patterns;