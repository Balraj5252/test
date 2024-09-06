


import React, { Component } from 'react';
import axios from "axios";

const printData = (item) => {
    return (
        item === undefined ? "" :
            <div>
                <h5>Selected Candidate Full Details </h5>
                <table>
                    <tr>
                        <td> Name </td>
                        <td>{item.firstName}</td>
                    </tr>
                    <tr>
                        <td> SurName </td>
                        <td>{item.lastName}</td>
                    </tr>
                    <tr>
                        <td> Contact </td>
                        <td>{item.phone}</td>
                    </tr>
                    <tr>
                        <td> Gender </td>
                        <td>{item.gender}</td>
                    </tr>
                </table>
            </div>
    );
}

// eslint-disable-next-line no-undef
class TableData extends Component {
    constructor(props) {
        super(props);
        this.state ={
            selectedData : undefined,
            urlData : []
        };
        this.getCustomersData();
    }

    clickedData = (item) => {
        this.setState({selectedData: item})
    }
    getCustomersData = () => {
        axios
            .get("/user/all")
            .then(data => {
                this.setState({urlData: data.data});
            })
            .catch(error => console.log(error));
    };
    render() {
        return (
            <div>
                {printData(this.state.selectedData)}
                {this.state.urlData.length > 0 ?
                    <table>
                        <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Name</th>
                            <th>Sur-Name</th>
                            <th>Gender</th>
                            <th>Contact</th>
                        </tr>
                        </thead>
                        {this.state.urlData.map((item, index) =>
                        {
                            return (
                                <tbody>
                                <tr key={index} onClick={()=>this.clickedData(item)}>
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.phone}</td>
                                </tr>
                                </tbody>
                            );
                        })}
                    </table> :null
                }
            </div>
        );
    }
}


export default TableData;