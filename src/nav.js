import React, { Component } from "react";
import logo from "./img/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar, Nav} from 'react-bootstrap';
export default class NavPage extends Component {
  render() {
    return (
    
        <div style={{marginBottom:"60px"}}>
        <Navbar collapseOnSelect fixed="top" bg="white" expand="lg">
        <Navbar.Brand href="#intro"> <img
        src={logo}
        width="40"
        height="40"
        className="d-inline-block align-top rounded"
        alt="logo"
      /> <h4 className="ml-3 d-inline-block">SATHISH KUMAR S</h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
       
          <Nav className="mr-auto">
              
            
            <Nav.Link href="#edu">Education</Nav.Link>
            <Nav.Link href="#skill">Skills</Nav.Link>
            <Nav.Link href="#pro">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <div className=" row fixed-bottom justify-content-center align-items-center sobar-mp">

      <div className="col-3 ico ">  <h3><a className="phone" href="tel:+918940800307" ><i class="fa fa-phone  "></i></a></h3> 
</div>

<div className="col-3">
        <h3><a className="insta" target="_blank" href="https://www.instagram.com/sathishkumarsk_" ><i class="fa fa-instagram "></i></a></h3></div>
<div className="col-3">
        <h3><a className="linked" target="_blank" href="https://www.linkedin.com/in/sathish-kumar-b96348179" ><i class="fa fa-linkedin"></i></a></h3></div>

<div className="col-3">
        <h3><a className="mail" href="mailto:sathishweb27@gmail.com" ><i class="fa fa-envelope "></i></a></h3>
</div>

        </div>

      </div>
      
      
      
      
    );
  }
}