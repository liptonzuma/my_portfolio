import React ,{useEffect} from 'react';
import '../css/home.css'

const Home =()=>{
    return(
        <header id="home "  className="pt-5  mt-2 home">
            <div className="container m-auto">
                <div className="row">
                    <div className="col-md-7 pt-5 mt-5">
                        <p className="p-5 msg col-lg-4 col-xs-8 mx-3">
                        <span >Hello, I am</span>

                        </p>
                    <h1 className="display-5 name">
                         Solomon Boateng Gyan
                    </h1>
                    <span className="lead">I am a Frontend Developer. I love javascript.</span>
                    </div>
                    <div className="col-md-5">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Home;