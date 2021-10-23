import { Fragment } from "react";
import Navbar from "../components/layout/navbar";
import '../css/about.css';
import hogwartLogo from '../../src/images/picture/logo.png';
import aboutWallpaper from '../../src/images/picture/room.jpg' ;

function About() {
    return <>
        <Navbar />
        <div className="biggestAbout">
           <img src={aboutWallpaper} alt="wallpaper" className="aboutWallpaper" />
            <div>
                <p className="introduceReact">This website was built by React.js</p>
                <p className="writer"> Written by Napan Kongkai </p>
                <div className="containerAbout">
                    <img src={hogwartLogo} alt="Logo" className="hogwartLogo" />
                </div>
            </div>
            <button hidden="true"></button>
        </div>
    </>
}

export default About;