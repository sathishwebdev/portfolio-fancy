 import React from "react";
import { Link } from "react-router-dom";
import BlogPost from "../model/BlogPost";
 
 const Blogs = () => {
   let posts = BlogPost()
  console.log(posts)
    return (
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
      </div>
    );
  };
export default Blogs