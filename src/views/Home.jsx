import {Intro, ProjectDisplay, Tid, About, Contact } from "../components/Home";
import Experiences from "../components/Home/experiences";
import SEO from "../components/SEO";

const Home = () => {
    const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sathish Kumar S",
    "jobTitle": "Full Stack & Android Developer",
    "url": "https://sathishwebdev.com",
    "sameAs": [
      "https://linkedin.com/in/sathishwebdev",
      "https://github.com/sathishwebdev",
      "https://instagram.com/sathishkumars_",
      "https://wa.me/+918940800307"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Adiuvo Diagnostics Pvt. Ltd."
    },
    "knowsAbout": [
      "Java",
      "Android Development",
      "React",
      "Node.js",
      "OpenGL",
      "Firebase",
      "OpenCV",
      "AWS"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "business",
      "availableLanguage": ["English", "Tamil"],
      "name": "Sathish Kumar S",
      "url": "https://sathishwebdev.com",
      "email": "sathishweb27@gmail.com",
      "telephone": "+918940800307"
    }
  };
    return(
    <div>
        <SEO title = "Sathish kumar S - Portfolio | Developer | Sathishwebdev" schema = {schema} />
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
}

export default Home