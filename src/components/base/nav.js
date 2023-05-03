import logonix from "../assets/img/NIXFC-removebg-preview.png"
import React from 'react';
import { Link } from "react-router-dom";
function Nav() {
    return (

        <nav class="nav navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
            <div class="container"><button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" class="navbar-toggler navbar-toggler-right" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-align-justify"></i></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <Link to="/"><img src={logonix} width="67" height="65"/></Link>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><Link to="/organization" className="nav-link">Organization</Link></li>
                        <li class="nav-item"><a class="nav-link" href="#">Find a player</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">RSV  a pitch</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Nav