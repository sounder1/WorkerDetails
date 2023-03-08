import { useState, useEffect } from "react";
// import "../style/Main.css";
import axios from "axios";
import "./get.css"
const Get = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    useEffect(() => {
        axios
            .get("http://localhost:8080/worker")
            .then((response) => {
                console.log(response.data)
                setMyData(response.data)
            })
            .catch((error) => setIsError(error.message));
    }, []);
    return (
        <>
            <div id="box">
            <div className="grid">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>PhoneNumber</th>
                            <th>Address</th>
                            <th>Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myData.map((data, index) => {
                                return (
                                    <tr>
                                        <td>{data.id}</td>
                                        <td>{data.workerName}</td>
                                        <td>{data.phoneNumber}</td>
                                        <td>{data.address}</td>
                                        <td>{data.available}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </div>
        </>
    );
};

export default Get;