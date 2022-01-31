import {Intro, ProjectDisplay, Tid, About, Contact } from "../components/Home";
import {Helmet} from 'react-helmet'
const Home = () => (
    <div>
        <Helmet>
        <title>SATHISH KUMAR S - PORTFOLIO</title>
    <meta name="description" content=" Hey there!!..this is my portfolio. Show-case of My Works." />
    <meta content='website' property='og:type'/>
    <meta content='SATHISH KUMAR S - PORTFOLIO' property='og:title'/>
    <meta content='https://sathishwebdev.netlify.app/' property='og:url'/>
    <meta content='Here, my works are...' property='og:description'/>
    <meta content='SATHISH KUMAR S - PORTFOLIO' property='og:site_name'/>
    <meta content='https://sathishwebdev.netlify.app/mypic.jpg' property='og:image'/>
    <meta property="og:image:width" content="800" />
    <meta property="og:image:height" content="600" />
    <meta content='summary_large_image' name='twitter:card'/>
    <meta content='https://sathishwebdev.netlify.app/mypic.jpg' name='twitter:image'/>
    <meta content='SATHISH KUMAR S - THE PORTFOLIO' name='twitter:title'/>
    <meta content='https://sathishwebdev.netlify.app/' name='twitter:domain'/>
    <meta content='Here, My works are...' name='twitter:description'/>
        </Helmet>
    <Intro />
    <ProjectDisplay />
     {/* things i do with */}
    <Tid/>
     {/* about */}
    <About/>
    <Contact />
    </div>
)

export default Home