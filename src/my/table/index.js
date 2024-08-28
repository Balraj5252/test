



//let  data = {sno: Number, name: String, surName: String, contact: Number, address: String }

import {useState} from "react";

let data1 = [
    {
        sno:1,
        name: "balraj",
        surName: "H",
        contact: 234,
        address: "12"
    },
    {
        sno:2,
        name: "balu",
        surName: "H",
        contact: 234,
        address: "12"
    },
    {
        sno:3,
        name: "balz",
        surName: "H",
        contact: 234,
        address: "12"
    },
    {
        sno:4,
        name: "bal5225",
        surName: "H",
        contact: 234,
        address: "12"
    },
    {
        sno:5,
        name: "balrajH",
        surName: "H",
        contact: 234,
        address: "12"
    },

]


const printData = (item) => {
    return (
        item === undefined ? "" :
            <div>
                <h5>Selected Candidate Full Details </h5>
                <table>
                    <tr>
                        <td> Name </td>
                        <td>{item.name}</td>
                    </tr>
                    <tr>
                        <td> SurName </td>
                        <td>{item.surName}</td>
                    </tr>
                    <tr>
                        <td> Contact </td>
                        <td>{item.contact}</td>
                    </tr>
                    <tr>
                        <td> Address </td>
                        <td>{item.address}</td>
                    </tr>
                </table>
            </div>
    );
}

function TableData() {
    const [selectedData, setSelectedData] = useState(undefined);
    const clickedData = (item) => {
        setSelectedData(item)
    }
    return(
        <div>
            {printData(selectedData)}
            <h5>All The Candidates </h5>
            <table>
                <thead>
                <tr>
                    <th>Sno</th>
                    <th>Name</th>
                    <th>Sur-Name</th>
                    <th>Contact</th>
                    <th>Address</th>
                </tr>
                </thead>
                {data1.map((item, index) =>
                {
                    return (
                    <tbody>
                      <tr key={index} onClick={ () => {clickedData(item)}}>
                          <td>{item.sno}</td>
                          <td>{item.name}</td>
                          <td>{item.surName}</td>
                          <td>{item.contact}</td>
                          <td>{item.address}</td>
                      </tr>
                    </tbody>
                    );
                })}
            </table>
        </div>
    );
}


export default TableData;