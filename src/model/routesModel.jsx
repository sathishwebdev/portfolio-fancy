import BlogPost from "./BlogPost"

const RoutesModel= () => {
    let posts = BlogPost()

    const routes = []

    posts.forEach(({id,param, updated})=>{
        routes.push({url : `https://sathishwebdev.netlify.app/blog/post/${id}/${param}`, updated})
    })

    return routes
} 

export default RoutesModel
