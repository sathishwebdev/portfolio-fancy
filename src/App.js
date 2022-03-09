import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import * as Icons from "@mui/icons-material";
import AOS from "aos";
import ProjectModel from "./model/ProjectModel";
import { useLocation, useParams } from "react-router-dom";
import Button from './components/mui/Button'
import BlogPost from './model/BlogPost';
import { IconButton } from "./components/mui";
import { Projects } from "./views";

AOS.init();
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 


const Project = () => {
  let projects = ProjectModel
  const { ProName } = useParams();
  const location = useLocation();
  const [project, setProject] = useState(null);
  const forScroll = useRef(null)
  const scroll = () => scrollToRef(forScroll)
  useEffect(() => {
    setProject(projects.filter((pro) => pro.name === ProName));
    scroll();
  }, [ProName, projects]);

  const share = async (data) => {
    try {
      await navigator.share(data);
    } catch (err) {
      alert("Error: " + err.message);
    }
  };
console.log(project)
  return (
    <div
    ref={forScroll}
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
                />
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
              <div style={{ textAlign: "center", padding:"1%" }}>
                <img style={{ maxWidth: "300px", width:"100%" }} src={`../${project[0].img}`} alt={project[0].name} />
              </div>
              <p>{project[0].Description}</p>
            </section>
            <section
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap"
              }}
            >
              {!project[0].source ? (
                ``
              ) : (
                <>
                   {project[0].source.front && <Button
                      onClick={() => window.open(project[0].source.front, "_blank")}
                      sx={{ fontSize: "11px" }}
                    >
                      <Icons.CodeOutlined /> Front-end Source
                    </Button>}
                   {project[0].source.back && <Button
                      onClick={() => window.open(project[0].source.back, "_blank")}
                      sx={{ fontSize: "11px" }}
                    >
                      <Icons.CodeOutlined /> Back-end Source
                    </Button>}
                  </>
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
      <aside>
        <Projects/>
      </aside>
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
