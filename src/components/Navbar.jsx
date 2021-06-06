import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import '../css/navbar.css';


const Navbar=()=>{
    useEffect(()=>{
        const icon = document.querySelector('.icon');
        const nav = document.querySelector('.navbar-nav');
        icon.addEventListener('click',()=>{
            nav.classList.toggle('drop');
        })
    },[]);
    return(
        <nav className="navbar fixed-top">
            <a className="navbar-brand"> 
             Frontend<span>Soldier</span></a>
            <ul className="navbar-nav">
                <li className="nav-item"><a href="" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="" className="nav-link">Service</a></li>
                <li className="nav-item"><a href="" className="nav-link">About</a></li>
                <li className="nav-item"><a href="" className="nav-link">Contact</a></li>
            </ul>
            <span className="icon">
                <i className="fa fa-th-large"></i>
            </span>
        </nav>
    )
}

export default Navbar;