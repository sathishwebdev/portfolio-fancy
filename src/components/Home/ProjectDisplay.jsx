import { Link } from "react-router-dom";
import ProjectModel from "../../model/ProjectModel";

const ProjectDisplay = () =>(
    <div id="projects" className="full-con" style={{minHeight: '50vh'}}>
        <>
          <div>
            <h1>Projects</h1>
          </div>
           <>
            <div data-aos="fade-right" style={{width:'100%', maxWidth:"500px"}} >
              {ProjectModel.map((pro, key) => (
                  <Link key={key}  to={`project/${pro.name}`} className='link'>
                    <img 
                      data-aos="flip-up"
                      className="tid"
                      alt={pro.name}
                      title={pro.name}
                      src={pro.img}
                    />
                     </Link>
              ))}
            </div>
          </>
        
        </>
      </div>
)

export default ProjectDisplay;