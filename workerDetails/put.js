import React, { useState,useEffect} from 'react';
// import './post.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import './put.css';

function Update1() {
    const [id, setId] = useState('');
    const [workerName, setName] = useState('');
    const [phoneNumber, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const [available, setAvailable] = useState('')
    const [mydata, setMyData] = useState([])
    useEffect(() => {
      axios
          .get("http://localhost:8080/worker")
          .then((response) => {
              console.log(response.data)
              setMyData(response.data)
          })
          // .catch((error) => setIsError(error.message));
  }, []);
  async function update(event) {
    let length=Object.keys(mydata).length;
    event.preventDefault();
    let f=0;
    for(let i=0;i<length;i++){
            if(Number(id)===mydata[i].id){
              f=1;
    
    try {
        await axios.put("http://localhost:8080/worker",
            {

                id: id,
                workerName:workerName,
                phoneNumber:phoneNumber,
                address:address,
                available:available
            });
        alert("Successfully Update");
        setId();
        setName();
        setNumber();
        setAddress();
        setAvailable();
          }

    
    catch (err) {
        alert("update Failed");
    }
  }
  if(f===0){
    alert("Registration not found");
  }
  else{

  }
}
  }

  return (
    <form id="form" >
      <h1>UPDATE FORM</h1>
      <label for="id">Id:</label>
      <br></br>
        <input className="input" type="text" value={id} onChange={(event) => setId(event.target.value)} />
        <br></br>
      <label for="name">WorkerName : </label>
      <br></br>
        <input className="input" type="text" value={workerName} onChange={(event) => setName(event.target.value)} />
        <br></br>
      <label for="number">phoneNumber:</label>
      <br></br>
        <input className="input" type="text" value={phoneNumber} onChange={(event) => setNumber(event.target.value)} />
        <br></br>
      <label className="address">Address:</label>
      <br></br>
        <input className="input" type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
        <br></br>
      <label className="available">Available</label>
      <br></br>
        <input className="input" type="text" value={available} onChange={(event) => setAvailable(event.target.value)} />
        <br></br>
      <button className="btn btn success" type="submit" onClick={update}>Update</button>
    </form>
  );
}



function Update() {
  const [fit, setFit] = useState([]);

  function handleAddTelevision(fits) {
    setFit([...fit, fits]);
  }

  return (
    <div className='all'>
    <br/>
    <div className="container">
      {/* <h1 className="title">TELEVISION DETAILS</h1> */}
      <Update1 Form onAddTelevision={handleAddTelevision} />

    </div>
    <br/><br/>
    {/* <center>
    <Link to='/'>
                <button type="submit" class="btn btn-primary" style={{padding
                :'5px'}}
                >Back</button>
            </Link></center> */}
    </div>
    
  );
}

export default Update;