import React from 'react';
import { Link } from 'react-router-dom';

function homeActive() {
    let home = document.getElementById('home')
    let about = document.getElementById('about');
    home.classList.add('active');
    about.classList.remove('active')
}
// function aboutActive(){
//     let home=document.getElementById('home')
//     let about=document.getElementById('about');
//     let className='nav-link';
//     if(this.props.isactive){
//         className+=' active'
//     }
// }
export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode == 'light' ? 'info' : 'dark'}`}>
                <div className="container-fluid" style={{ marginLeft: '50px' }}>
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link id='home' className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link id='about' className="nav-link" to="/about">About</Link>
                            </li>

                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
