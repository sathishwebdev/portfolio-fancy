import { Link } from "react-router-dom";
import ProjectModel from "../../model/ProjectModel";

const ProjectDisplay = () =>(
    <div className="full-con">
        <div className="d-flex flex-wrap justify-content-center align-items-center ">
          <h1>Projects </h1>
           <div data-aos="fade-right" className="pad">
            <div style={{ width: "100%", maxWidth: "500px" }}>
              {ProjectModel.map((pro, key) => (
                <Link key={key} to={`project/${pro.name}`}>
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
          </div>
        
        </div>
      </div>
)

export default ProjectDisplay;