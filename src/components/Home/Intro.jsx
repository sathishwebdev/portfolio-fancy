import {Button, IconButton} from '../mui'
import IntroIconModel from '../../model/IntroIconModel'

const Intro = () => (<div
        className="full-con"
        style={{ flexDirection: "row", flexWrap: "wrap" }}
        id="home"
      >
        <div data-aos="fade-right">
          <img
            alt="portfolio"
            title="poster"
            style={{ height: "45vh" }}
            src="mypic.jpg"
          />
        </div>
        <div  data-aos="fade-left" className="pad" >
          <h1 className="titleName">Sathish Kumar S</h1>
          <small>MERN STACK - WEB DEVELOPER</small>
          {/* social icons */}
          <div>
            {IntroIconModel.map((data,id)=>(
                <IconButton
                key = {id}
                color="inherit"
                className="icon-link"
                href = {!data.href ? null :  data.href }
                onClick = {! data.link ? null : ()=>{window.open( data.link, "_blank")}} >
                    {data.icon}
                </IconButton>
            )) }

            <Button 
            onClick={()=>{
                window.open("https://drive.google.com/file/d/1Up2lLrwllfxjkwyJ69iCI6j4T3FpUtNS/view?usp=sharing", "_blank")}}>
              Resume
            </Button>
          </div>
        </div>
      </div>);

export default Intro