 import React from "react";
import { Link } from "react-router-dom";
import BlogPost from "../model/BlogPost";
import {Helmet} from 'react-helmet'

 const Blogs = () => {
   let posts = BlogPost()
    return (
      <>
      <Helmet>
        <title>Blog | CodeZone | SathishWebDev</title>
    <meta name="description" content=" Blog to Share my thought and knowledge to the world. This is the medium where i can expose myself and what i capable to do." />
    <meta content='website' property='og:type'/>
    <meta content='Blog | CodeZone | SathishWebDev' property='og:title'/>
    <meta content='https://sathishwebdev.netlify.app/blogs' property='og:url'/>
    <meta content='Blog to Share my thought and knowledge to the world. This is the medium where i can expose myself and what i capable to do.' property='og:description'/>
    <meta content='CodeZone | SathishWebDev' property='og:site_name'/>
    <meta content='https://sathishwebdev.netlify.app/c.png' property='og:image'/>
    <meta property="og:image:width" content="800" />
    <meta property="og:image:height" content="600" />
    <meta content='summary_large_image' name='twitter:card'/>
    <meta content='https://sathishwebdev.netlify.app/c.png' name='twitter:image'/>
    <meta content='Blog | CodeZone | SathishWebDev' name='twitter:title'/>
    <meta content='https://sathishwebdev.netlify.app/' name='twitter:domain'/>
    <meta content='Blog to Share my thought and knowledge to the world. This is the medium where i can expose myself and what i capable to do.' name='twitter:description'/>
        </Helmet>
      <div className="projects">
        <div className="pro-con">
          {posts.length === 0 ? <p>Empty</p> : posts.map(({author, title, authorImage, postImage, param,id}, key) => (
            <div key={key} className="pro-card">
              <div>
                <Link to={`../blog/post/${id}/${param}`}>
                  <img
                    data-aos="flip-up"
                    className="pro-img"
                    alt={title}
                    title={title}
                    src={postImage}
                  />
                </Link>
              </div>
              <div className="pro-details">
                <Link className="link" to={`../blog/post/${id}/${param}`}>
                  <h2>{title}</h2>
                </Link>
                {}
                <small >
                  <img
                    alt={title}
                    title={title}
                    src={authorImage}
                  />{author}</small>
                <br />
              </div>
            </div>
          ))}
        </div>
      </div></>
    );
  };
export default Blogs