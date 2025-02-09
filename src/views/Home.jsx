import {Intro, ProjectDisplay, Tid, About, Contact } from "../components/Home";

const Home = () => (
    <div>
        <section id="home" > <Intro /> </section>
        <section id="about" ><About/> </section>
        <section id="skill" ><Tid/> </section>
        <section id="projects" ><ProjectDisplay /> </section>
        <section id="contact" > <Contact /></section>
        
    </div>
)

export default Home