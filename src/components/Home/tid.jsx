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
        <>
        <p id={`${key}-${id}`} className="d-block d-xl-none" style={{  color: "#fcdc4e"}} >{key.toUpperCase()}</p>
        <div className="row">
        <p id={`${key}-${id}`} className="d-none d-xl-block" style={{textAlign:"center", writingMode:"sideways-lr", textOrientation:"sideways", color: "#fcdc4e"}} >{key.toUpperCase()}</p>
        <div className="gallery">{
              ThingsModel[key].map(({name, link}, id2)=>(
                ( <img
                  key={`${key}-${id}-${id2}`}
                  title={name}
                  alt={name}
                  src={link}
                  loading='lazy'
                />)
              ))}
              </div>
              </div></>
        )}
</div>
        </div>
      </div>
)}

export default Tid