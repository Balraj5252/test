import {CustomInput} from "../util";
import {useState} from "react";


const RowColmStars = (props) => {
    const [stars, setStars] = useState([]);
    const [row] = useState(props.Row)
    const onChangeInput = (value) => {
        let starsL= [];
        if (row === "diagonal-left" || row === "diagonal-right") {
            for (let i = 0; i < value.target.value; i++) {
                let starLine = "";
                if (row === "diagonal-right") {
                    starLine = starLine + "*";
                }
                for (let j = 0; j< i; j++) {
                    starLine = starLine + "      ";
                }
                if (row === "diagonal-left") {
                    starLine =starLine + "*";
                }
                starsL.push(starLine);
            }
        } else if (row === "cross") {
            for (let i = 0; i <= value.target.value; i++) {
                let starLine = "";
                for (let j = 0; j<= value.target.value; j++) {
                    if(i === j  || i === value.target.value - j) {
                        starLine =starLine + "*";
                    }
                    starLine = starLine + "      ";
                }
                starsL.push(starLine);
            }

        } else {
            for (let i = 0; i < value.target.value; i++) {
                starsL.push("*")
            }
        }
        setStars(starsL);
    }
    return (
        <div>
            <CustomInput
                props = {{
                    label: "please input number : ",
                    onChangeInput: onChangeInput,
                    value: null,
                    type: "number",
                    isButton: false,
                    onButtonClick : null,
                    valid : true
                }}
            />
            {stars.length > 0 ?<>
            <div style={{margin: "20px", border: '2px solid cornflowerblue', textAlign:"center", maxHeight: 300, overflow: "scroll"}}>
                {row === "row" ? <span style={{fontSize : "20px"}}> {stars.map((item) => {return item})} </span> : null }
                {row === "column" ? <div>{stars.map((item) => {return(<div>{item}<br/></div>);})}</div> : null}
                {row === "diagonal-left" ? <div style={{textAlign:"left"}}>{stars.map((item) => {return(<div>{item.replace(/ /g, "\u00A0")}<br/></div>);})}</div> : null}
                {row === "diagonal-right" ? <div style={{textAlign:"right"}}>{stars.map((item) => {return(<div>{item.replace(/ /g, "\u00A0")}<br/></div>);})}</div> : null}
                {row === "cross" ? <div>{stars.map((item) => {return(<div>{item.replace(/ /g, "\u00A0")}<br/></div>);})}</div> : null}
            </div></> : null}
        </div>
    );
}

export default RowColmStars;