import React from 'react';
import IconButton from '../mui/IconButton'
import {LinkedIn, GitHub, Mail, Phone} from '@mui/icons-material'

const Contact = () =>{
  const iframe = '<iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1_ezCehQHSaKzrlghcB2XmjznV84Wt6lHE56-XZMXJSQM7ClThcaTlm4rx5-dlKM52ot7LMvmA?gv=true" style="border: 0" width="100%" height="600" frameborder="0"></iframe>'
  return(
    <div className="p-5 full-con  row justify-content-center align-items-center" >
      <h2>Contact - Anytime - Anywhere</h2>
        <div>
          <IconButton
            color="inherit"
            className="icon-link"
            onClick={()=>{window.open("https://linkedin.sathishwebdev.com", '_blank')}}
          >
            <LinkedIn sx={{ fontSize: "50px" }} />
          </IconButton>

          <IconButton
            color="inherit"
            className="icon-link"
            onClick={()=>{window.open("https://git.sathishwebdev.com", '_blank')}}
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
        <div>
        </div>
      </div>
)};

export default Contact;