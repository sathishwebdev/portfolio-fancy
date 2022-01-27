import React, { useEffect, useState } from "react";
import "./App.css";
import * as mui from "@mui/material";
import * as Icons from "@mui/icons-material";
import AOS from "aos";
import projects from './project.json'
import { Link, useLocation, useParams } from "react-router-dom";
AOS.init();
// style

const Button = mui.styled(mui.Button)(({ theme }) => ({
  color: theme.palette.getContrastText(mui.colors.purple[500]),
  backgroundColor: "#000000",
  margin: "3%",
  fontFamily:"hussor-bold",

  "&:hover": {
    backgroundColor: "rgba(56, 56, 56, 0.938)",
    color: "white",
    boxShadow: "0px 0px 20px 1px #0f0f0f",
  },
  '&:focus':{
    border: 'none',
    boxShadow: "none",
    outline: "none"
},
}));

function Home() {
  return (
    <div>
      <div className="full-con" style={{ flexDirection: "row", flexWrap:"wrap" }} >
        <div data-aos="fade-right">
          <img
            alt="portfolio"
            title="poster"
            style={{ height: "45vh" }}
            src="mypic.jpg"
          />
        </div>
        <div data-aos="fade-left">
          <h1 style={{ fontSize: "500%" }}>Sathish Kumar S</h1>
          <small>MERN STACK - WEB DEVELOPER</small>
          {/* social icons */}
          <div>
            <mui.IconButton
              color="inherit"
              className="icon-link"
              href="https://www.linkedin.com/in/sathish-kumar-b96348179/"
            >
              <Icons.LinkedIn />
            </mui.IconButton>

            <mui.IconButton
              color="inherit"
              className="icon-link"
              href="https://www.github.com/sathishwebdev"
            >
              <Icons.GitHub />
            </mui.IconButton>

            <mui.IconButton
              color="inherit"
              className="icon-link"
              href="mailto:sathishweb27@gmail.com"
            >
              <Icons.Mail />
            </mui.IconButton>

            <mui.IconButton
              color="inherit"
              className="icon-link"
              href="tel:9025171810"
            >
              <Icons.Phone />
            </mui.IconButton>
            <Button
              href="https://drive.google.com/file/d/1jnoo0RheBloIYQ_hj4tPBTxPZvBF7yvP/view?usp=drivesdk"
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
      

          {/* projects */}
          <div className="full-con"  >
        <div className="d-flex flex-wrap justify-content-center align-items-center "   >
          <div data-aos="fade-right" className="pad" >
              <h2>Projects i have done...</h2>
          
            <div style={{ width: "100%", maxWidth: "500px" }}>
              {projects.map((pro)=>(<a href={pro.link} target="_blank" rel="noreferrer">
                <img
                  data-aos="flip-up"
                  className="tid"
                  alt={pro.name}
                  title={pro.name}
                  src={pro.img}
                />
              </a>))}
            </div>
          </div>
          <div data-aos="fade-left" className="pad">
          
              <h2>Projects i working on...</h2>
          
          
            <div style={{ width: "100%", maxWidth: "500px" }}>
          
                <img
                  data-aos="flip-up"
                  className="tid"
                  title="pizza guy"
                  alt="pizza guy"
                  src="project/pizza-guy.jpg"
                />
          
                <img
                  data-aos="flip-up"
                  className="tid"
                  alt="cc"
                  title="cc"
                  src="project/cc.jpg"
                />
          
            </div>
          </div>
        </div>
      </div>       

      
{/* things i do with */}
      <div className="full-con"  >
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <h2>Things i do with...</h2>
          <br />
        </div>

        <div style={{ width: "100%", maxWidth: "500px" }}>
          <img
            data-aos="flip-up"
            className="tid"
            alt="React"
            src="TID-img/react.jpg"
          />
          <img
            data-aos="flip-up"
            className="tid"
            alt="MongoDB"
            src="TID-img/mongodb.jpg"
          />
          <img
            data-aos="flip-up"
            className="tid"
            alt="Nodejs"
            src="TID-img/node.jpg"
          />
          <img
            data-aos="flip-up"
            className="tid"
            alt="Heroku"
            src="TID-img/heroku.jpg"
          />
          <img
            data-aos="flip-up"
            className="tid"
            alt="git"
            src="TID-img/git.jpg"
          />
          <img
            data-aos="flip-up"
            className="tid"
            alt="npm"
            src="TID-img/npm.png"
          />
          <img
            data-aos="flip-up"
            className="tid"
            alt="html5"
            src="TID-img/html.jpg"
          />
          <img
            data-aos="flip-up"
            className="tid"
            alt="CSS"
            src="TID-img/css.jpg"
          />
          <img
            data-aos="flip-up"
            className="tid"
            alt="VS Code"
            src="TID-img/vscode.jpg"
          />
          <img
            data-aos="flip-up"
            className="tid"
            alt="firebase"
            src="TID-img/firebase.jpg"
          />
          <img
            data-aos="flip-up"
            className="tid"
            alt="Canva"
            src="TID-img/canva.jpg"
          />
          <img
            data-aos="flip-down"
            className="tid"
            alt="Netlify"
            src="TID-img/netlify.jpg"
          />
          <img
          data-aos="flip-up"
          className="tid"
          alt="Postman"
          src="TID-img/postman.jpg"
          />
          <img
          data-aos="flip-up"
          className="tid"
          alt="Bootstrap"
          src="TID-img/bootstrap.jpg"
          />
        </div>
      </div>

      {/* about */}
      
        <div className="full-con" style={{flexDirection:"row"}} >
          <div style={{ width: "100%", maxWidth: "800px" }} >
            <h1>About Me !</h1>
            <div
              className="center"
              style={{
                maxWidth: "500px",
                padding: "3%"
              }}
            >
            
              <div style={{ padding: "2%", margin: "1%" }}>
                <div >
                  <img
                    className="d-block d-lg-none"
                    alt="me"
                    title="me"
                    style={{ width: "100%" }}
                    src="about.jpg"
                  />
                  <h4>
                    H! Thizz <sup>zz</sup> Sathish,
                  </h4>
                  <p>
                    In this fast developing digital world, I proud to say that i'm
                    a developer. I specially trained to develope amazing websites
                    like portfolios for a celeberities or organisations, Ecommerce
                    pages, Product launching sites, Blog etc., I completed my MERN
                    Stack developer course in{" "}
                    <span>
                      <a
                        className="link"
                        href="https://www.guvi.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GUVI
                      </a>
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-out" className="d-none d-lg-block">
            <img
              alt="me"
              title="me"
              style={{ height: "45vh" }}
              src="about1.jpg"
            />
          </div>
          </div>
    
         <div className="full-con" >
           <h2 data-aos="fade-right" >Contact - Anytime - Anywhere</h2>
         <div data-aos="fade-down"  >
            <mui.IconButton
              color="inherit"
              className="icon-link"
              href="https://www.linkedin.com/in/sathish-kumar-b96348179/"
            >
              <Icons.LinkedIn 
              sx={{fontSize:"50px"}} />
            </mui.IconButton>

            <mui.IconButton
              color="inherit"
              className="icon-link"
              href="https://www.github.com/sathishwebdev"
            >
              <Icons.GitHub 
              sx={{fontSize:"50px"}} />
            </mui.IconButton>

            <mui.IconButton
              color="inherit"
              className="icon-link"
              href="mailto:sathishweb27@gmail.com"
            >
              <Icons.Mail 
              sx={{fontSize:"50px"}} />
            </mui.IconButton>

            <mui.IconButton
              color="inherit"
              className="icon-link"
              href="tel:9025171810"
            >
              <Icons.Phone 
              sx={{fontSize:"50px"}} />
            </mui.IconButton>
          </div>
         </div>
        </div>
  );
}

const Projects = () =>{
  return (
    <div className="projects" >
      <div className="pro-con">
      {projects.map((pro, key)=>(
        
        <div key={key} className='pro-card'>
          <div>
            <Link to={`../project/${pro.name}`} >
              <img
                data-aos="flip-up"
                className="pro-img"
                alt={pro.name}
                title={pro.name}
                src={`../${pro.img}`}
              />
            </Link>
          </div>
          <div className="pro-details" >
          <Link className="link" to={`../project/${pro.name}`} > <h2>{pro.name}</h2></Link>
            <small>{`${pro.Description.substring(0, 50)}...`}</small><br/>
            {!pro.source ? `` :<Button
              onClick={()=> window.open(pro.source, "_blank")}
              sx={{fontSize:"11px"}}
            >
             <Icons.CodeOutlined  /> Source
            </Button>}
            {!pro.link ? `` : <Button
              onClick={()=> window.open(pro.link, "_blank")}
              sx={{fontSize:"11px"}}
            >
             <Icons.Link /> demo
            </Button> }
          </div>
        </div>
        
        ))}
        </div>
    </div>
  )
}

const Project = () =>{
  const {ProName} = useParams()
  const location = useLocation()
  const [project, setProject] = useState(null)

  useEffect(()=>{
    setProject(projects.filter(pro=> pro.name === ProName))
  },[ProName])

  const share = async (data) =>{
    try {
      await navigator.share(data)
      console.log('MDN shared successfully')
    } catch(err) {
      alert('Error: ' + err.message)
    }
  }



  return (
      <div className="projects" style={{
        alignItems: 'normal',
        justifyContent: 'center'
      }} >
        <div className="pro-con" style={{width: '100%'}}>
         {
          !project ? <p>Loading...</p> : <article>
            <section style={{display: 'flex', alignItems:'center'}} >
                <div><img src={`../${project[0].img}`} alt={project[0].name} className="pro-img" style={{borderRadius:'50%', width:'60px'}}  />  </div>
              <div style={{lineHeight:"0.1"}} >
                <h1>{project[0].name}</h1><br />
                <small>Sathish Kumar S</small>
              </div>
              <div>
                <mui.IconButton
                  sx={{
                    color: 'white',
                    margin:'3%'
                  }}
                  onClick={()=>{
                    share({
                      title: project[0].name,
                      text: 'Project By Sathish Kumar S',
                      url: `https://sathishwebdev.netlify.app${location.pathname}`
                    })
                  }}
                >
                  <Icons.Share/>
                </mui.IconButton>
              </div>
            </section>
            <hr/>
            <section>
              <div style={{textAlign:'center'}}>
                <img src={`../${project[0].img}`} alt={project[0].name}  />
              </div>
              <p>{project[0].Description}</p>
            </section>
            <section style={{
              display: 'flex', alignItems:'center', justifyContent: 'center'
            }} >
              {!project[0].source ? `` :<Button
             onClick={()=> window.open(project[0].source, "_blank")}
              sx={{fontSize:"11px"}}
            >
             <Icons.CodeOutlined  /> Source
            </Button>}
            {!project[0].link ? `` : <Button
              onClick={()=> window.open(project[0].link, "_blank")}
              sx={{fontSize:"11px"}}
            >
             <Icons.Link /> demo
            </Button> }
            <Button
              sx={{fontSize:"11px"}}
              onClick={()=>{
                share({
                  title: project[0].name,
                  text: 'Project By Sathish Kumar S',
                  url: `https://sathishwebdev.netlify.app${location.pathname}`
                })
              }}
            >
              <Icons.Share/> Share
            </Button>
            </section>

          </article> 
         } 
        </div>          
        </div>
  )
}


export {
  Home,
  Projects,
  Project
}
