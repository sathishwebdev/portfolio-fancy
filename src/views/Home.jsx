import {Intro, ProjectDisplay, Tid, About, Contact } from "../components/Home";
import Experiences from "../components/Home/experiences";
import SEO from "../components/SEO";

const Home = () => (
    <div>
        <SEO title = "Sathish kumar S - Portfolio | Developer | Sathishwebdev" />
        <section id="home" > <Intro /> </section>
        <section id="experience" > <Experiences /> </section>
        <div className="row justify-content-center align-items-center" > 
            <section className="col-12" id="about" ><About/> </section>
            <section className="col-12" id="skill" ><Tid/> </section>
        </div>
        
        <section id="projects" ><ProjectDisplay /> </section>
        <section id="contact" > <Contact /></section>
        
    </div>
)

export default Home