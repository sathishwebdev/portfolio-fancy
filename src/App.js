import React from "react";
import "./App.css";
import * as mui from "@mui/material";
import * as Icons from "@mui/icons-material";
import AOS from 'aos'
AOS.init();
  // style

  const Button = mui.styled(mui.Button)(({ theme }) => ({
    color: theme.palette.getContrastText(mui.colors.purple[500]),
    backgroundColor: "#000000",
    margin: "3%",

    "&:hover": {
      backgroundColor: "#a5a5a5",
      color: "black",
      boxShadow: "0px 0px 15px 1px",
    },
  }));

function App() {


  return (
    <div>
      <div className="full-con">
         <div data-aos="fade-right" >
           <img
            alt="portfolio"
            title="poster"
            style={{ height: "45vh" }}
            src="mypic.jpg"
                   />
         </div>
         <div data-aos="fade-left">
          <h1 style={{fontSize:"500%"}} >Sathish Kumar S</h1>
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

          </div>
        </div>
       
      </div>

    <div className="full-con" style={{flexDirection:"column"}} >
      <div style={{width:"100%", maxWidth:"1000px"}} >
        <h2>Things i do with...</h2><br/>
      </div>
      
      <div style={{width:"100%", maxWidth:"500px"}}  >
        <img data-aos= "flip-up" className="tid" alt="React" src="TID-img/react.jpg" />
           <img data-aos= "flip-up" className="tid" alt="MongoDB" src="TID-img/mongodb.jpg" />
          <img data-aos= "flip-up" className="tid" alt="Nodejs" src="TID-img/node.jpg" />
          <img data-aos= "flip-up" className="tid" alt="Heroku" src="TID-img/heroku.jpg" />
           <img data-aos= "flip-up" className="tid" alt="git" src="TID-img/git.jpg" />
          <img data-aos= "flip-up" className="tid" alt="npm" src="TID-img/npm.png" />
          <img data-aos= "flip-up" className="tid" alt="html5" src="TID-img/html.jpg" />
           <img data-aos= "flip-up" className="tid" alt="CSS" src="TID-img/css.jpg" />
          <img data-aos= "flip-up" className="tid" alt="VS Code" src="TID-img/vscode.jpg" /> 
          <img data-aos= "flip-up" className="tid"  alt="firebase" src="TID-img/firebase.jpg" />
          <img data-aos= "flip-up" className="tid" alt="Canva" src="TID-img/canva.jpg" /> 
          <img data-aos= "flip-down"  className="tid" alt="Netlify" src="TID-img/netlify.jpg" />
      </div>
  
    </div>

{/* about */}
      <div>
        <div className="full-con">
          <div
            style={{
              maxWidth: "500px",
              padding: "3%",
              // margin: "1%",
            }}
          >
            <h1>About Me !</h1>
            <div style={{padding:"2%", margin:"1%"}}>
              <img
                className="d-block d-lg-none"
                alt="me"
                title="me"
                style={{ width: "40vw", float: "left" }}
                src="about.jpg"
              />
              <article>
                <h4>
                  H! Thizz <sup>zz</sup> Sathish,
                </h4>
                <p>
                  In this fast developing digital world, I proud to say that i'm a
                  developer. I specially trained to develope amazing websites like
                  portfolios for a celeberities or organisations, Ecommerce pages,
                  Product launching sites, Blog etc., I completed my MERN Stack
                  developer course in <span><a className="link" href="https://www.guvi.com" target="_blank" >GUVI</a></span>.
                </p>
              </article>
            </div>
          </div>
          <div data-aos="zoom-out" className="d-none d-lg-block">
            <img
              alt="me"
              title="me"
              style={{ height: "60vh" }}
              src="about1.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
