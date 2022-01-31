import { PostActionTypes } from "../types/posts.types";
import { useEffect, useState } from "react";
let url = `https://www.googleapis.com/blogger/v3/blogs/261381331229313907/posts?key=AIzaSyBSa0px6K3mH5HkhhzbH_Tl4MQiHysI03A&fetchImages=true&maxResult=999`

export const getPostsList = (token) =>
  async (dispatch) => {
    const [token, setToken] = useState(undefined)
    const [firstPage, setFirstPage] = useState(false)
    
  const Get = async (Result) =>{
    const getData = (pageToken) =>{
       if (!(!pageToken || !firstPage)) {
           url =  `${url}&pageToken=${pageToken}`
       }else if(!pageToken && firstPage ){
           url = ''
       }

      fetch(url).then(response => response.json()).then(data=>{
         
           data.items.forEach(({url, author, title, content, images, lables, id, updated}) => {
               let param = url
               param = param.split('/')
               param = param[5].split('.')[0];
               Result.push({
                   param,
                   author : author.displayName,
                   authorImage : author.image.url,
                   content,
                   title,
                   postImage : images[0].url,
                   lables,
                   id,
                   updated
           
               })
           })
           setFirstPage(true)
           setToken(data.nextPageToken)
       })
   }
   

   useEffect(()=>{
       getData(token)
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[token])

   return Result
 }
    try {
      dispatch({
        type: PostActionTypes.POSTS_LIST.REQUEST,
      });
      
      const { data } = await Get([]);

      dispatch({
        type: PostActionTypes.POSTS_LIST.SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PostActionTypes.POSTS_LIST.ERROR,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

  


   