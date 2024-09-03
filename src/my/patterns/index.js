
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
            <div style={{margin: "20px", border: '2px solid cornflowerblue', textAlign:"center"}}>
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
            <div style={{margin: "20px", border: '2px solid cornflowerblue', textAlign:"center"}}>
                {selectedPattern.example}
            </div>
            <div style={{margin: "20px", border: '2px solid cornflowerblue', textAlign:"center"}}>
                {switchCase()}
            </div>

        </div>
    );
}


export default Patterns;