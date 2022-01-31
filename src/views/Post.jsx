import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as Icons from '@mui/icons-material'
import * as mui from '@mui/material'
import { Button } from "../components/mui";
import {Helmet} from 'react-helmet'

const Post = () =>{
    const { postId } = useParams();
  const location = useLocation();
  const [post, setPost] = useState(null);

  let url = `https://www.googleapis.com/blogger/v3/blogs/261381331229313907/posts/${postId}?key=AIzaSyBSa0px6K3mH5HkhhzbH_Tl4MQiHysI03A`

  useEffect(() => {
    // setpost(.filter((pro) => pro.name === PostName));
    fetch(url).then(response => response.json()).then(data=>{
        let param = data.url
        param = param.split('/')
        param = param[5].split('.')[0];
        setPost({
            param,
            author : data.author.displayName,
            authorImage : data.author.image.url,
            content: data.content,
            title: data.title,
            lables: data.lables    
        })
    })
  }, [postId]);

  const share = async (data) => {
    try {
      await navigator.share(data);
      console.log("MDN shared successfully");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <>
      <div
        className="post"
        style={{
          alignItems: "normal",
        }}
      >
        <div style={{ width: "100%" }}>
          {!post ? (
            <p>Loading...</p>
          ) : (
            <>
            <Helmet>
            <title>{post.title}</title>
            <meta name="description" content=" Blog to Share my thought and knowledge to the world. This is the medium where i can expose myself and what i capable to do." />
            <meta content='website' property='og:type'/>
            <meta content='Blog | CodeZone | SathishWebDev' property='og:title'/>
            <meta content={`https://sathishwebdev.netlify.app/blog/post/${postId}/${post.param}`} property='og:url'/>
            <meta content='Blog to Share my thought and knowledge to the world. This is the medium where i can expose myself and what i capable to do.' property='og:description'/>
            <meta content='CodeZone | SathishWebDev' property='og:site_name'/>
            <meta content='https://sathishwebdev.netlify.app/c.png' property='og:image'/>
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="600" />
            <meta content='summary_large_image' name='twitter:card'/>
            <meta content='https://sathishwebdev.netlify.app/c.png' name='twitter:image'/>
            <meta content= {post.title} name='twitter:title'/>
            <meta content='https://sathishwebdev.netlify.app/' name='twitter:domain'/>
            <meta content='Blog to Share my thought and knowledge to the world. This is the medium where i can expose myself and what i capable to do.' name='twitter:description'/>
            </Helmet>
            <article>
              <section style={{ display: "flex", alignItems: "center" }}>
                <div style={{ lineHeight: "0.1" }}>
                  <h1>{post.title}</h1>
                  <br />
                  <small>{post.author}</small>
                </div>
                <div>
                  <mui.IconButton
                    sx={{
                      color: "white",
                      margin: "3%",
                    }}
                    onClick={() => {
                      share({
                        title: post.title,
                        text: `${post.title} - by ${post.author} \n\n`,
                        url: `https://sathishwebdev.netlify.app${location.pathname}`,
                      });
                    }}
                  >
                    <Icons.Share />
                  </mui.IconButton>
                </div>
              </section>
              <hr />
              <section>
                <div className="post-con" dangerouslySetInnerHTML={{__html: post.content}} >
      
                </div>
              </section>
              <section
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{ fontSize: "11px" }}
                  onClick={() => {
                    share({
                      title: post[0].name,
                      text: "post By Sathish Kumar S",
                      url: `https://sathishwebdev.netlify.app${location.pathname}`,
                    });
                  }}
                >
                  <Icons.Share /> Share
                </Button>
              </section>
            </article></>
          )}
        </div>
      </div>
    </>
  );
};

export default Post