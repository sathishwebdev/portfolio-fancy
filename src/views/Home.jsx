import {Intro, ProjectDisplay, Tid, About, Contact } from "../components/Home";

const Home = () => (
    <div>
        <section id="home" > <Intro /> </section>
        <div className="row justify-content-center align-items-center" > 
            <section className="col-12 col-xl-4" id="about" ><About/> </section>
            <section className="col-12 col-xl-7" id="skill" ><Tid/> </section>
        </div>
        
        <section id="projects" ><ProjectDisplay /> </section>
        <section id="contact" > <Contact /></section>
        
    </div>
)

export default Home