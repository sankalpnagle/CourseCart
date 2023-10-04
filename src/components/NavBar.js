import React from 'react'
import '../home.css'
import logo from "../images/logo.svg"


export default function NavBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg" style={{ backgroundColor: " transparent" }}>
                <div class="container container-fluid">
                    <a class="navbar-brand petro" href="#"><img src={logo} alt="Girl in a jacket" width="29px" height="19px" style={{ marginTop: "-6px" }} /><span className='p-2'>LandGuru</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar m-auto me-auto mb-3 mb-lg-0 nav-container">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#">Home</a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Advertise
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Support
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>

                        </ul>
                        <form class="d-flex" role="search">
                            <button class="nav-button" type="submit">Try For Free</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
