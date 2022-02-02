import React, { useEffect, useState } from "react";
import "./App.css";
import * as Icons from "@mui/icons-material";
import AOS from "aos";
import projects from "./project.json";
import { useLocation, useParams } from "react-router-dom";
import Button from './components/mui/Button'
import BlogPost from './model/BlogPost';
import { IconButton } from "./components/mui";

AOS.init();



const Project = () => {
  const { ProName } = useParams();
  const location = useLocation();
  const [project, setProject] = useState(null);

  useEffect(() => {
    setProject(projects.filter((pro) => pro.name === ProName));
  }, [ProName]);

  const share = async (data) => {
    try {
      await navigator.share(data);
      console.log("MDN shared successfully");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div
      className="projects"
      style={{
        alignItems: "normal",
        justifyContent: "center",
      }}
    >
      <div className="pro-con" style={{ width: "100%" }}>
        {!project ? (
          <p>Loading...</p>
        ) : (
          <article>
            <section style={{ display: "flex", alignItems: "center" }}>
              <div>
                <img
                  src={`../${project[0].img}`}
                  alt={project[0].name}
                  className="pro-img"
                  style={{ borderRadius: "50%", width: "60px" }}
                />{" "}
              </div>
              <div style={{ lineHeight: "0.1" }}>
                <h1>{project[0].name}</h1>
                <br />
                <small>Sathish Kumar S</small>
              </div>
              <div>
                <IconButton
                  sx={{
                    color: "white",
                    margin: "3%",
                  }}
                  onClick={() => {
                    share({
                      title: project[0].name,
                      text: "Project By Sathish Kumar S",
                      url: `https://sathishwebdev.netlify.app${location.pathname}`,
                    });
                  }}
                >
                  <Icons.Share />
                </IconButton>
              </div>
            </section>
            <hr />
            <section>
              <div style={{ textAlign: "center" }}>
                <img style={{ maxWidth: "300px" }} src={`../${project[0].img}`} alt={project[0].name} />
              </div>
              <p>{project[0].Description}</p>
            </section>
            <section
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {!project[0].source ? (
                ``
              ) : (
                <Button
                  onClick={() => window.open(project[0].source, "_blank")}
                  sx={{ fontSize: "11px" }}
                >
                  <Icons.CodeOutlined /> Source
                </Button>
              )}
              {!project[0].link ? (
                ``
              ) : (
                <Button
                  onClick={() => window.open(project[0].link, "_blank")}
                  sx={{ fontSize: "11px" }}
                >
                  <Icons.Link /> demo
                </Button>
              )}
              <Button
                sx={{ fontSize: "11px" }}
                onClick={() => {
                  share({
                    title: project[0].name,
                    text: "Project By Sathish Kumar S",
                    url: `https://sathishwebdev.netlify.app${location.pathname}`,
                  });
                }}
              >
                <Icons.Share /> Share
              </Button>
            </section>
          </article>
        )}
      </div>
    </div>
  );
};

const Blogs =() => {
  let ans = BlogPost()
  console.log(ans)
  return (
    <div className="full-con">
      <div>
      </div>
    </div>
  );
};

export { Project, Blogs };
