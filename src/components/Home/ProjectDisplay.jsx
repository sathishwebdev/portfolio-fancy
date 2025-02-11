import { Link } from "react-router-dom";
import ProjectModel from "../../model/ProjectModel";

const ProjectDisplay = () =>(
    <div className="dark-con">
            <div style={{ maxWidth: "800px" }}>
          <h2 style={{textAlign:'center'}} > Projects </h2>
          <br />
        </div>
            <div  className="row justify-content-center align-items-center" style={{maxWidth:"1200px"}} >
              {ProjectModel.map((pro, key) => (
                  <Link key={key}  to={`project/${pro.name}`} className='link'>
                    <img 
                      className="pro-img"
                      alt={pro.name}
                      title={pro.name}
                      src={pro.img}
                      loading='lazy'
                    />
                     </Link>
              ))}
            </div>
      </div>
)

export default ProjectDisplay;