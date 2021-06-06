import React ,{useEffect} from 'react';
import {gsap} from 'gsap';

import Aos from 'aos'
import 'aos/dist/aos.css'

import '../css/home.css'

const Home =()=>{
    useEffect(()=>{
        Aos.init({
            duration:1000
        })
       
        gsap.from('.name',{
            opacity:0,
            y:-100,
            duration:2,
        })
        gsap.from('.intro',{
            opacity:0,
            y:100,
            duration:2,
            delay:2,
        })
        gsap.from('.buttons',{
            opacity:0,
            duration:2,
            delay:2,
        })
    },[])
    return(
        <>
        <header id="home"  className="pt-5  mt-2 home">
            <div className="container m-auto">
                <div className="row home-row">
                    <div className="col-md-7 pt-md-5 mt-md-5">
                    <h1 className="display-5 name pt-md-5 mt-md-5">
                         Solomon Boateng Gyan
                    </h1>
                    <span className="lead intro">I am a Frontend Developer. I build responsive websites with javascript</span>
                    <div className="buttons pt-3">
                    <a href="#about" className="btn btn-1">Read more</a>
                    <a href="#contact" className="btn btn-cta">Hire me</a>
                </div>
                    </div>
                    <div className="col-md-5">
                        <img src="https://www.clipartmax.com/png/full/258-2585462_%C2%A0-web-responsive-clipart.png" alt="banner" className="image-fluid image-reponsive mt-5 pt-5" data-aos="zoom-in"/>
                    </div>
                </div>
             
            </div>
            
        </header>
        </>
    )
}

export default Home;