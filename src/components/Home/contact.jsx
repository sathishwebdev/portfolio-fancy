import IconButton from '../mui/IconButton'
import {LinkedIn, GitHub, Mail, Phone} from '@mui/icons-material'

const Contact = () =>(
    <div className="full-con">
        <h2 data-aos="fade-right">Contact - Anytime - Anywhere</h2>
        <div data-aos="fade-down">
          <IconButton
            color="inherit"
            className="icon-link"
            onClick={()=>{window.open("https://www.linkedin.com/in/sathish-kumar-b96348179/", '_blank')}}
          >
            <LinkedIn sx={{ fontSize: "50px" }} />
          </IconButton>

          <IconButton
            color="inherit"
            className="icon-link"
            onClick={()=>{window.open("https://www.github.com/sathishwebdev", '_blank')}}
          >
            <GitHub sx={{ fontSize: "50px" }} />
          </IconButton>

          <IconButton
            color="inherit"
            className="icon-link"
            href="mailto:sathishweb27@gmail.com"
          >
            <Mail sx={{ fontSize: "50px" }} />
          </IconButton>

          <IconButton
            color="inherit"
            className="icon-link"
            href="tel:9025171810"
          >
            <Phone sx={{ fontSize: "50px" }} />
          </IconButton>
        </div>
      </div>
);

export default Contact;