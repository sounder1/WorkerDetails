import React,{useState} from 'react'

function Register() {
    const [id, setId] = useState('');
    const [workerName, setName] = useState('');
    const [phoneNumber, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const [available, setAvailable] = useState('');
   
    const save = (e) => {
        e.preventDefault();
        const obj = {
            id,workerName,phoneNumber,address,available
        }
        fetch("http://localhost:8080/worker",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(obj)}).then(console.log("New Worker Added"));
        alert("Registered successfully")
    }
  
    return ( 
        <div className='container' style={{paddingTop:70}}>
       
        <div style={{border:'5px sold black',backgroundColor:"grey",borderRadius:10,backgroundColor:"yellow"}}>
        <center>
        <h1>Registration form</h1>
        <form>
    
        <div className='row' style={{padding:10,width:800}}>
            <label>ID</label>
            <br></br>
            <input type="text" value={id} onChange={(event) => setId(event.target.value)} placeholder='Type id here'/> 
        </div>
       
        <div className='row' style={{padding:10,width:800}}>
            <label>WORKERNAME</label>
            <br></br>
            <input type="text"  value={workerName} onChange={(event) => setName(event.target.value)} placeholder='Type workername  here'/> 
        
        </div>
        <div className='row' style={{padding:10,width:800}}>
            <label>PHONENUMBER</label>
            <br></br>
            <input type="number"  value={phoneNumber} onChange={(event) => setNumber(event.target.value)} placeholder='Type phoneNumber  here'/> 
        
        </div>
       
        <div className='row' style={{padding:10,width:800}}>
            <label>ADDRESS</label>
            <br></br>
            <input type="text"  value={address} onChange={(event) => setAddress(event.target.value)} placeholder='Type address  here' /> 
        
        </div>
        <div className='row' style={{padding:10,width:800}}>
            <label>AVAILABLE</label>
            <br></br>
            <input type="text"  value={available} onChange={(event) => setAvailable(event.target.value)} placeholder='Type availability  here' /> 
        
        </div>
        
            <button className='btn btn-primary'  onClick={save}>Register</button>
    </form>
    </center>
    </div>
    </div>
    
     );
}

export default Register;