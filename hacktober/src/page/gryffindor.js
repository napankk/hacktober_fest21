import { Fragment , useState} from "react";
import '../css/gryffindor.css'
import gryffindorFlag from '../../src/images/picture/gryffindor-house-red-and-yellow-banner-wallpaper-1600x900_47.jpg' ;
import Navbar from "../components/layout/navbar";

function GryffindorNavbar(props){
    return <>
       <Navbar />
  
   <div className="gryffindorBg">
       <img src={gryffindorFlag} alt="Gryffindor" />
   </div>
    </>
} 

export default GryffindorNavbar ;