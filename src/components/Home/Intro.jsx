import {Button, IconButton} from '../mui'
import IntroIconModel from '../../model/IntroIconModel'
import { FileDownload } from '@mui/icons-material';

const Intro = () => (<div
        className="full-con"
        style={{ flexDirection: "row", flexWrap: "wrap", paddingTop:"200px" }}
      >
        <div data-aos="fade-right">
          <img
            alt="portfolio"
            title="poster"
            height="300px"
            style={{marginTop:"-75px"}}
            src="profile.webp"
            loading='lazy'
          />
        </div>
        <div  data-aos="fade-left" className="pad" >
          <h1 className="titleName">Sathish Kumar S</h1>
          <small>MERN STACK - ANDROID DEVELOPER</small>
          {/* social icons */}
          <div className='col'>
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
            sx={{
              border:"2px solid white",
              backgroundColor:"transparent"
            }}
            onClick={()=>{
                window.open("https://drive.google.com/file/d/1F09U5KGvii9vkK1EPBwCcltKnz8rCUX3/view?usp=sharing", "_blank")}}>
              <FileDownload/>   Resume
            </Button>
          </div>
          
          <div className='row glass pad m-0 justify-content-center align-items-center'>
            <div className='col'>
            <h6>Adiuvo Diagnostics Pvt. Ltd.</h6>
            <small>Full Stack Engineer - Research and Development</small>
            </div>
            <div className='col'>
              <p className='w-100 primary-text' style={{textAlign:"center"}}>2022-Present</p>
            </div>
          </div>

        </div>
      </div>);

export default Intro