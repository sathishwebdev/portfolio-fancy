import ThingsModel from "../../model/ThingsModel"
const Tid = () => {
  
  return (
    <div className="dark-con">
        <div style={{ maxWidth: "800px" }}>
          <h2 style={{textAlign:'center'}} > Things i do with...</h2>
          <br />
        </div>

        <div  style={{  maxWidth : "1200px"}}>

<div >
        {Object.keys(ThingsModel).map(( key, id)=>
        <>
          {/* <p id={`${key}-${id}`} className="d-block d-xl-none" style={{  color: "#fcdc4e"}} >{key.toUpperCase()}</p> */}
          <div className="row" >
          {/* <p id={`${key}-${id}`} className="d-none d-xl-block" style={{textAlign:"center", writingMode:"sideways-lr", textOrientation:"sideways", color: "#fcdc4e"}} >{key.toUpperCase()}</p> */}
          <div className="scroll-container">
            <div className={`scroll-content ${id%2===0? "scroll-right" : "scroll-left"}`}>{
                  ThingsModel[key].map(({name, link}, id2)=>(
                    ( <img
                      key={`${key}-${id}-${id2}`}
                      title={name}
                      alt={name}
                      src={link}
                      loading='lazy'
                    />)
                  ))}

                  {ThingsModel[key].map(({name, link}, id2)=>(
                    ( <img
                      key={`${key}-${id}-${id2}`}
                      title={name}
                      alt={name}
                      src={link}
                      loading='lazy'
                    />)
                  ))}
              </div>
              
              </div>
          </div>
        </>
        )}
        </div>
        </div>
        <div className=" pad glass " > 
        <div className="row wrap justify-content-center align-items-start">
        {Object.keys(ThingsModel).map(( key, id)=>
        <div className="col-12 col-md pad">
         
            <p id={`${key}-${id}`}  style={{  color: "#fcdc4e", textAlign:"center"}} >{key.toUpperCase()}</p>
           <div className="row  justify-content-around align-items-center "> 
            
          {
              ThingsModel[key].map(({name, link}, id2)=>(
                ( <p className="pad m-1 glass" >{name.toUpperCase()}</p>)
              ))}
          
          </div>
     
        </div>
        )} </div>
        </div>
      </div>
)}

export default Tid