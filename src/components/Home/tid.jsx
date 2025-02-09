import ThingsModel from "../../model/ThingsModel"
const Tid = () => {
  
  return (
    <div className="full-con">
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <h2 style={{textAlign:'center'}} > Things i do with...</h2>
          <br />
        </div>

        <div style={{ width: "100%", maxWidth : "1200px"}}>

<div  className="col">
        {Object.keys(ThingsModel).map(( key, id)=>
        <div className="row">
        <h3 id={`${key}-${id}`} className="d-none d-lg-block" style={{textAlign:"center", writingMode:"sideways-lr", textOrientation:"sideways"}} >{key}</h3>
        <div className="gallery">{
              ThingsModel[key].map(({name, link}, id2)=>(
                ( <img
                  key={`${key}-${id}-${id2}`}
                  title={name}
                  alt={name}
                  src={link}
                />)
              ))}
              </div>
              </div>
        )}
</div>
        </div>
      </div>
)}

export default Tid