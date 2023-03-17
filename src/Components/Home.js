//import React from "react";
import React, {Component,useRef,useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
//import Home from './Home'
import './home.css';
import shop from './shop'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



function Home(){
    const handleClick=()=>{
        sessionStorage.clear();
        window.location.reload();
        

    }


    const [value,setValue]= useState();


    const handleChange=()=>{
      <div>
         <shop/>
      </div>

      
      // sessionStorage.clear();
      // window.location.reload();
      

  }




    return (
        <>
<header>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background:"#063970"}} position="static">
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
          <Tabs textColor="inherit" value={value} onChange={(e,value)=>setValue}  indicatorColor="white" >
             
             <Tab  label="Product"/>
             <Tab  label="Contact"/>

           </Tabs>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <center>
            MPHASIS

          </center>
            
            
            
          </Typography>
          
         
          {/* <HomeIcon /> */}
          <Button onClick={handleClick} sx={{backgroundColor:"white"}}>LogOut</Button>
        </Toolbar>
      </AppBar>
    </Box>



    

   

    </header>
    <div className='background'>

        <h1><center><b>Welcome To My APP</b></center>  </h1>
        {/* <button onClick={handleClick} > logout </button> */}

       

        
        
        <footer style={{paddingTop:'10cm'}}>
        <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
        
        @mphasis
        </Toolbar>
        </Box>  
    </footer>
    

    </div> 
    </>
    )
}


export default Home;