import React from 'react'
import {BrowserRouter, Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import { Project} from './App'
import * as mui from '@mui/material'
import * as Icons from '@mui/icons-material'
import {Home, Projects, Blogs, Post} from './views'

const Button = mui.styled(mui.Button)(({ theme }) => ({
    color: theme.palette.getContrastText(mui.colors.purple[500]),
    backgroundColor: "#000",
    marginLeft: '2%',
    marginRight: '2%',
  fontFamily:"hussor-bold",

    '&:hover': {
      backgroundColor: "#",
    //   color: "black",
      boxShadow: "0px 0px 15px 1px #303030"
    },
    '&:focus':{
        border: 'none',
        boxShadow: "none",
        outline: "none"
    },
  }));

function RouteConfig() {
  return <BrowserRouter>
  <NavBar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='projects' element={<Projects />} />
        <Route exact path='project/:ProName' element={<Project />} />
        <Route exact path='blogs' element={<Blogs />} />
        <Route exact path='blog/post/:postId/:postName' element={<Post />} />

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
       onClick={()=>{
       navigate('./')
       }}
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
    
       { location.pathname === '/projects' ? <Button
       onClick={()=>{
       navigate('./')
       }}
      >
       Home
       </Button> : <Button
        onClick={()=>{
           navigate('projects')
       }}
       >
       Projects
       </Button>}
       { location.pathname === '/blogs' ? '' : <Button
        onClick={()=>{
           navigate('blogs')
       }}
       >
       Blogs
       </Button>}
  </div>
   
}

