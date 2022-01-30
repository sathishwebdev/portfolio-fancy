import ThingsModel from "../../model/ThingsModel"
const Tid = () => (
    <div className="full-con">
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <h2>Things i do with...</h2>
          <br />
        </div>

        <div style={{ width: "100%", maxWidth: "500px" }}>
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