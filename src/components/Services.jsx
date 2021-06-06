import React ,{useEffect} from 'react';
import '../css/service.css'


const Services =()=>{
   
    return(
        <section id="service" className="service">
            <div className="container m-auto mt-5 pt-5">
                <div className="row container text-center p-4 m-auto">
                    <div className="col-md-4 " data-aos="fade-right">
                        <div className="card">
                            <div className="card-header">
                       <span className="info">
                       <i className="fa fa-newspaper-o"></i>
                           </span> 
                        <h2 className="pt-4">Creative Design</h2>
                        </div>
                        <div className="card-body">
                        <p className="intro-text">
                            I bring all your designs to life, with more flex.
                            I implement designs as designed, so don't worry about 
                            your page not looking like the deign.
                        </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card">
                            <div className="card-header">
                       <span className="info">
                       <i className="fa fa-dashboard"></i>
                           </span> 
                        <h2 className="pt-4">Support</h2>
                        </div>
                        <div className="card-body">
                        <p className="intro-text">
                            My works are reponsive, which means it will work perfecetly on every 
                            any other device without the content of the page going out of content.
                            
                        </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card">
                            <div className="card-header">
                       <span className="info">
                       <i className="fa fa-code"></i>
                           </span> 
                        <h2 className="pt-4">Development</h2>
                        </div>
                        <div className="card-body">
                        <p className="intro-text">
                           I develop my projects with the latest and sophisticated javascript technologies 
                           around, making my code very easy and simple to manage.
                        </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lang m-auto">
                    <div className="conatainer m-auto p-4">
                        <div className="images m-auto text-center">
                        <img src="https://img.icons8.com/color/48/000000/html-5--v1.svg"/>
                        <img src="https://img.icons8.com/color/48/000000/javascript.svg"/>
                        <img src="https://img.icons8.com/color/48/000000/css3.svg"/>
                        <img src="https://img.icons8.com/color/48/000000/sass.svg"/>
                        <img src="https://img.icons8.com/plasticine/48/000000/react.svg"/>
                        <img src="https://img.icons8.com/color/48/000000/angularjs.svg"/>
                        <img src="https://img.icons8.com/color/48/000000/bootstrap.svg"/>

                    </div>
                    </div>
                </div>
                  
        </section>
    )
}

export default Services;