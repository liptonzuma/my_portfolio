import React ,{useEffect}from 'react';
import '../css/about.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About =()=>{
    useEffect(()=>{
        Aos.init({
            duration:1000
        })
    },[])
    return(
        <section id="about" className="about pt-5 m-auto">
            <div className="container pt-5 m-auto">
                        <h1 data-aos="zoom-out">About me</h1>
                        <p className="lead p-3" data-aos="zoom-in">
                            My name is <span className="name">Solomon Boateng Gyan</span>, the FrontendSoldier.
                            I am a self taught frontend developer and currently a student of the university of Ghana (legon).
                            I love music and gaming. I am very hardworking and humurous, my work is my priority so I don't 
                            play with my precious work. I love to code and javascript makes the love even stronger.
                            
                        </p>
            </div>

        </section>
    )
}
export default About;