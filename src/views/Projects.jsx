import React from "react";
import * as Icons from "@mui/icons-material";
import ProjectModel from "../model/ProjectModel";
import { Link } from "react-router-dom";
import Button from '../components/mui/Button'
import SEO from "../components/SEO";
  
const Projects = () => {

    return (
      <div className="projects">
        <SEO title = "Projects - Sathish kumar S | Developer | Sathishwebdev" />
        <div className="pro-con">
          {ProjectModel.map((pro, key) => (
            <div key={key} className="pro-card">
              <div>
                <Link to={`../project/${pro.name}`}>
                  <img
                    data-aos="flip-up"
                    className="pro-img"
                    alt={pro.name}
                    title={pro.name}
                    src={`../${pro.img}`}
                    loading='lazy'
                  />
                </Link>
              </div>
              <div className="pro-details">
                <Link className="link" to={`../project/${pro.name}`}>
                  <h2>{pro.name}</h2>
                </Link>
                <small>{`${pro.Description.substring(0, 50)}...`}</small>
                <br />
                <>
                  {!pro.source ? (
                    ``
                  ) : (
                    <>
                     {pro.source.front && <Button
                        onClick={() => window.open(pro.source.front, "_blank")}
                        sx={{ fontSize: "11px" }}
                      >
                        <Icons.CodeOutlined /> Front-end Source
                      </Button>}
                     {pro.source.back && <Button
                        onClick={() => window.open(pro.source.back, "_blank")}
                        sx={{ fontSize: "11px" }}
                      >
                        <Icons.CodeOutlined /> Back-end Source
                      </Button>}
                    </>
                  )}
                  {!pro.link ? (
                    ``
                  ) : (
                    <Button
                      onClick={() => window.open(pro.link, "_blank")}
                      sx={{ fontSize: "11px" }}
                    >
                      <Icons.Link /> demo
                    </Button>
                  )}
                </>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Projects;