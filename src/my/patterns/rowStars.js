import {CustomInput} from "../util";
import {useState} from "react";


const RowStars = () => {
    const [stars, setStars] = useState("");

    const onChangeInput = (value) => {
        let starsL= "";
        for (let i=0;i<value.target.value;i++){
            starsL = starsL + "*";
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

            <span style={{fontSize : "40px", color: "#4f567c"}}> {stars} </span>
        </div>
    );
}

export default RowStars;