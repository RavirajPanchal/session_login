

import './Login.css';
import React, {Component,useRef} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Home from './Home'

function Login() {

    const email=useRef()
    const password=useRef()
    const getEmail=sessionStorage.getItem("emailData")
    const getPassword=sessionStorage.getItem("passwordData")
    

    const handleSubmit=()=>{
        if(email.current.value=="ravi@gmail.com" && password.current.value=="123"){
            sessionStorage.setItem("emailData","ravi@gmail.com")
            sessionStorage.setItem("passwordData","123")
        }


    }

  return (
    <>
    <header>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MY APP
          </Typography>
          <HomeIcon />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

    <div>
            {
                getEmail&&getPassword?
                <Home/>:

      
     <div className="outer">
      <div className="inner">

      <div className='app'>
    <div className="login-form">


            <form onSubmit={handleSubmit}>
        <div className="form-group">
         <label>Email</label>    
            <input type="text" className="form-control" ref={email}/>
        </div><br/>
        <div className="form-group">
            <label>Password</label>  
            <input type="password" 
            className="form-control"
             ref={password} />
        </div>
        <br/>

         <button>Login</button>
            </form>
            </div>
            </div>
            </div>
            </div>

}
        </div>


    </header>

    <footer style={{paddingTop:"10cm"}}>
        @mphasis
    </footer>
    </>
  );
}

export default Login