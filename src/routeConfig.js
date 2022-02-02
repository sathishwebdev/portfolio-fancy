import React, { useState } from 'react'
import {BrowserRouter, Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import { Project} from './App'
import * as mui from '@mui/material'
import * as Icons from '@mui/icons-material'
import {Home, Projects} from './views'
import { IconButton } from './components/mui'
import NavModel from './model/NavModel'


const Button = mui.styled(mui.Button)(({ theme }) => ({
  color: theme.palette.getContrastText(mui.colors.purple[500]),
  backgroundColor: "#202020",
  marginLeft: '2%',
  marginRight: '2%',
fontFamily:"hussor-bold",

  '&:hover': {
    backgroundColor: "#202020",
    borderBottom:'2px solid whitesmoke'
  },
  '&:focus':{
      border: 'none',
      boxShadow: "none",
      outline: "none"
  },
}));

function RouteConfig() {
  return <BrowserRouter>
  <div className="d-none d-md-block" >
    <NavBar />
  </div>
  <div className="d-block d-md-none" >
    <CollapesNav/>
  </div>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='projects' element={<Projects />} />
        <Route exact path='project/:ProName' element={<Project />} />
        {/* <Route exact path='blogs' element={<Blogs />} />
        <Route exact path='blog/post/:postId/:postName' element={<Post />} /> */}

        <Route path='*' element={<div className='App'>
            <div className="full-con" >
                <h1 style={{
                    fontSize:"50px"
                }} >404</h1>
                <img src='https://sathishwebdev.netlify.app/mearn.png' alt="relax" width="100%" />
            </div>
        </div>} />
    </Routes>
  </BrowserRouter>;
}

export default RouteConfig;


const NavBar = () =>{
  const location = useLocation()
  const navigate = useNavigate()


  return       <div
      className='nav'
  >
      { location.pathname === '/' ? <Button
       href="#home"
      >
       Home
       </Button> : <Button
       
       onClick={()=>{
       navigate(-1)
       }}
    
       >
     <Icons.ChevronLeftRounded/>  Back
       </Button> }
    
       {location.pathname === '/' || location.pathname === '/projects'  ? '' : <Button
     onClick={()=>{
         navigate('./')
     }}
    >
         Home
     </Button>
       }
        <Button
        href="../#about"
       >
       About
       </Button>
       <Button
        href="../#skill"
       >
       Skills
       </Button>
      <Button
        href='../#projects'
       >
       Projects
       </Button>
      <Button
        href="../#contact"
       >
       Contact
       </Button>
{/* 
       <mui.Button
       sx={{
         backgroundColor:'#ffce0a',
         color:'black',
         fontFamily:'hussor-bold'
       }}

       >
        <Icons.AttachMoneyRounded /> Donate
       </mui.Button> */}
      
  </div>
   
}

const CollapesNav = () =>{
 
  const [navStatus, setNavStatus] = useState(false)

  const CloseMenu = () =>{
    document.getElementById('c-nav').style.transform = 'translateY(-100vh)'
    setNavStatus(false)
  }

  const OpenMenu = () =>{
    document.getElementById('c-nav').style.transform = 'translateY(0vh)'
    setNavStatus(true)
  }

  return <>
  <div className='nav-btn' >
    <IconButton
      onClick={!navStatus ? OpenMenu : CloseMenu}
    >
      {!navStatus ? <Icons.Menu fontSize= "large"/> :<Icons.Close sx={{color:'whitesmoke'}} fontSize='large' />}
    </IconButton>
  </div>
    <div
    className='collopse-nav' id="c-nav"
    >
   {NavModel.map(({name,link}, id)=>(
     <Button
     key={id}
     sx={{
       margin:'5%'
     }}
     onClick={CloseMenu}
      href={link}
     >
      {name}
      </Button>
   )) }
    </div>
  </>

}