import {CustomInput} from "../util";
import {useState} from "react";


const Triangle = (props) => {
    const [stars, setStars] = useState([]);
    const [triangle] = useState(props.triangle);

    const onChangeInput = (value) => {
        let starsL= [];
            for (let i = 0; i < value.target.value; i++) {
                let starLine = ""
                for (let j = 0; j<= i; j++) {
                    starLine = starLine + "*";
                }
                starsL.push(starLine)
            }
            // starsL = starsL + "</span>"
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
                    {triangle === "center-angle" ? <div> {stars.map((item) => {return(<div>{item}<br/></div>);})} </div> : null}
                    {triangle === "left-angle" ? <div>{stars.map((item) => {return(<div style={{textAlign:"left",marginLeft:40}}>{item}<br/></div>);})}</div>: null}
                    {triangle === "right-angle" ?<div>{stars.map((item) => {return(<div style={{textAlign:"right",marginRight:40}}>{item}<br/></div>);})}</div>: null}

                </div></> : null}
        </div>
    );
}

export default Triangle;