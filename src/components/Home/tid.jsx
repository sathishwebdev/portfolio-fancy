import ThingsModel from "../../model/ThingsModel"
const Tid = () => (
    <div id="skill" className="full-con" style={{alignItems:'top'}} >
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <h2 style={{textAlign:'center'}} > Things i do with...</h2>
          <br />
        </div>

        <div  data-aos="fade-right" className="row justify-content-center align-items-center" style={{ width: "100%", maxWidth : "1200px"}}>
         {ThingsModel.map(({name, link}, id)=>( <img
            data-aos="flip-up"
            className="tid"
            key={id}
            title={name}
            alt={name}
            src={link}
          />))}
        </div>
      </div>
)

export default Tid