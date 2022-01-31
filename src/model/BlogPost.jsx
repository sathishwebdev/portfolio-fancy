import { useEffect, useState } from "react";

let Result = []

const BlogPost = () => {
   
    let url = `https://www.googleapis.com/blogger/v3/blogs/261381331229313907/posts?key=AIzaSyBSa0px6K3mH5HkhhzbH_Tl4MQiHysI03A&fetchImages=true&maxResult=999`

    const [token, setToken] = useState(undefined)
    const [firstPage, setFirstPage] = useState(false)

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

export default BlogPost;