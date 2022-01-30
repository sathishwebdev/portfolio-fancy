import {Intro, ProjectDisplay, Tid, About, Contact } from "../components/Home";
const Home = () => (
    <div>
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