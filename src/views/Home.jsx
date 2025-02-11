import {Intro, ProjectDisplay, Tid, About, Contact } from "../components/Home";

const Home = () => (
    <div>
        <section id="home" > <Intro /> </section>
        <div className="row justify-content-center align-items-start" > 
            <section className="col-12 col-lg-6" id="about" ><About/> </section>
            <section className="col-12 col-lg-6 col-xl-5 col-xxl-4" id="skill" ><Tid/> </section>
        </div>
        
        <section id="projects" ><ProjectDisplay /> </section>
        <section id="contact" > <Contact /></section>
        
    </div>
)

export default Home