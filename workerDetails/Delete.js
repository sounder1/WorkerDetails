import React from 'react';
import axios from 'axios';
import { useState} from 'react';
// import { Link } from 'react-router-dom'
// import Find from './Find';
import "./delete.css";
function Deleteform() {
    const [id, setId] = useState('');
    const [error, setError] = useState('');
    function del() {
        // useEffect(() => {
        axios
            .delete('http://localhost:8080/worker?id=' + id)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => setError(error.message));
        alert("User Deleted");
    }
    //  []);
    // }
    return (
        <>
        <center>
            <div id="wrap">
            <h2>Delete User</h2>
            <br></br>
            <div>
                <input type="number" placeholder='Enter Id' className="form-control1" value={id} onChange={(e) => setId(e.target.value)}/>
            </div>
            <br></br>
            <button type="submit" class="btn btn-primary" onClick
                ={del}>Submit</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <Link to='/'>
                <button type="submit" class="btn btn-primary"
                >Back</button>
            </Link> */}
            <h2>
                {error}
            </h2>
            {/* <div className='Find'>

                <Find />
            </div> */}
            </div>
            </center>
        </>
    );
}

export default Deleteform;