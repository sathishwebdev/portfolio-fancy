import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as Icons from '@mui/icons-material'
import * as mui from '@mui/material'
import { Button } from "../components/mui";

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