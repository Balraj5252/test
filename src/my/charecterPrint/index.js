import {useState} from "react";
import {CustomInput} from "../util";

const CharacterPrint = () => {
    const [str, setStr] = useState("");
    const [valid, setValid] = useState(true);

    const [value, setValue] = useState("");

    const onChangeInput = (value) => {
        const reg = new RegExp(/[a-zA-Z_0-9]$/);
        setValid(reg.test(value.target.value));
        setStr(value.target.value)
        setValue("")
    }
    const printString = () => {
        let printValue = "";
        let c = 0;
        let s = str.split("");
        let p = "";
        for (let i=0; i< s.length;i++) {
            if ( s[i] === "0" || s[i] === "1" || s[i] === "2" || s[i] === "3" ||
                s[i] === "4" || s[i] === "5" || s[i] === "6" || s[i] === "7" || s[i] === "8" || s[i] === "9" ) {
                if ( c > 0) {
                    c = c * 10 + Number(s[i]) - c;
                } else {
                    c = Number(s[i])
                }
            } else {
                p = s[i];
                c =0;
            }

            for (let j=0; j< c; j++) {
                printValue = printValue + p ;
            }
        }

        setValue(printValue)
    }
    return (
        <div>
            <span style={{fontSize : "20px", textAlign: "center"}}>
            <h5>printing the char by number follows</h5>
            <p> only takes the input in form of alphabets and numerics no special character is allowed</p>
            <p> example input : a1b4</p>
            <p> example output : abbbb</p>
                </span>
            <CustomInput
                props = {{
                    label: "please give input string : ",
                    onChangeInput: onChangeInput,
                    type : "string",
                    value: str,
                    isButton: true,
                    onButtonClick :printString,
                    valid : valid
            }}
            />
                <p>{valid ? null :
                    <span style={{fontSize : "20px", color: "#ee3131"}}>
                        Please enter a valid string
                    </span>}
                </p>
            <p style={{fontSize : "20px", color: "#4f567c", marginTop : "20px"}}> {value}</p>
        </div>
    );
}


export default CharacterPrint;