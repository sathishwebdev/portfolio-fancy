import React from "react";
import * as Icons from "@mui/icons-material";
import ProjectModel from "../model/ProjectModel";
import { Link } from "react-router-dom";
import Button from '../components/mui/Button'

const Projects = () => {
    return (
      <div className="projects">
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
                  />
                </Link>
              </div>
              <div className="pro-details">
                <Link className="link" to={`../project/${pro.name}`}>
                  <h2>{pro.name}</h2>
                </Link>
                <small>{`${pro.Description.substring(0, 50)}...`}</small>
                <br />
                {!pro.source ? (
                  ``
                ) : (
                  <Button
                    onClick={() => window.open(pro.source, "_blank")}
                    sx={{ fontSize: "11px" }}
                  >
                    <Icons.CodeOutlined /> Source
                  </Button>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Projects;