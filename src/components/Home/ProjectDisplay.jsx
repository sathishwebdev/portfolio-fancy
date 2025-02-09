import { Link } from "react-router-dom";
import ProjectModel from "../../model/ProjectModel";

const ProjectDisplay = () =>(
    <div className="full-con ">
            <div style={{ width: "100%", maxWidth: "800px" }}>
          <h2 style={{textAlign:'center'}} > Projects </h2>
          <br />
        </div>
            <div  className="gallery" style={{width:'100%', maxWidth:"1200px"}} >
              {ProjectModel.map((pro, key) => (
                  <Link key={key}  to={`project/${pro.name}`} className='link'>
                    <img 
                      alt={pro.name}
                      title={pro.name}
                      src={pro.img}
                    />
                     </Link>
              ))}
            </div>
      </div>
)

export default ProjectDisplay;