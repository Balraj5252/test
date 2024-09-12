


import React, { Component } from 'react';
import axios from "axios";
import {CustomInput} from "../util";


// eslint-disable-next-line no-undef
class Anagrams extends Component {
    constructor(props) {
        super(props);
        this.state ={
            inputData : undefined,
            outputData : []
        };
    }

    onChangeInput = (item) => {
        this.setState({inputData: item.target.value})
    }
    getCustomersData = () => {
        axios
            .get("/test/anagrams/" + this.state.inputData)
            .then(data => {
                this.setState({outputData: data.data});
            })
            .catch(error => console.log(error));
    };
    render() {
        return (
            <div>
                <div style={{margin: "20px", border: '2px solid cornflowerblue', textAlign:"center"}}>
                <CustomInput
                    props = {{
                        label: "Input String for anagram : ",
                        onChangeInput: this.onChangeInput,
                        type : "string",
                        value: this.state.inputData,
                        isButton: true,
                        onButtonClick : this.getCustomersData,
                        valid : true
                    }}
                />
                </div>
                {this.state.outputData.length > 0 ?
                <div style={{margin: "20px", border: '2px solid cornflowerblue', textAlign:"center", maxHeight: 300, overflow: "scroll"}}>
                    {this.state.outputData.map((value) => {return (<div key={value}> {value}&nbsp;&nbsp;&nbsp;&nbsp;</div>)})}
                </div> : null}
                </div>
        );
    }
}


export default Anagrams;