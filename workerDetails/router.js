 import React from 'react';
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import Deleteform from './Delete';
import Get from './get';

import Register from './post';
import Update from './put';
import "./router.css";
function Dum(){
    return (
        <div className='App'>
                 <Router>
                    <div class='nav'>
                        <div class='nav-link'>
                    <Link to='/'><button><b>HOME</b></button></Link>
                    <Link to='/put'><button><b>UPDATE</b></button></Link>
                    <Link to='/get'><button><b>VIEW</b></button></Link>
                    <Link to='/Delete'><button><b>DELETE</b></button></Link>
                    </div>
                    </div>
                <Routes>
                    
                
                <Route path='/' element={<Register/>}/>
                <Route path='/get' element={<Get/>}/>
                <Route path='/put' element={<Update/>}/>
                <Route path='/Delete' element={<Deleteform/>}/>

                </Routes>
                </Router>

        </div>
    )
}

export default Dum;