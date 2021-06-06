import React from 'react';
import '../css/contact.css'

const Contact =()=>{
    return(
        <footer id="contact" className="contact">
            <div className="container m-auto ">
                <h1 className="display-3 text-center">
                    Let's Talk!
                </h1>
                <div className="container row m-auto text-center">
                    <div className="col-md-4">
                       <span>
                       <i className="fa fa-phone"></i>
                           </span>
                        <p>(+233 555 925 076)</p>
                    </div>
                    <div className="col-md-4">
                       <span>
                       <i className="fa fa-send"></i>
                           </span>
                        <p>solomonboateng231@gmail.com</p>
                    </div>
                    <div className="col-md-4">
                       <span>
                       <i className="fa fa-github"></i>
                           </span>
                        <p>@liptonzuma</p>
                    </div>
                </div>
                <div className="col-12 text-center p-5">
                    <form>
                        <input type="text" className="form-control mb-2" placeholder="leave a message" />
                        <a href="solomonboateng231@gmail.com?Subject=message from portfolio" className="btn" target="top">Send</a>
                    </form>

                </div>
            </div>
        </footer>
    )
}

export default Contact;