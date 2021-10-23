import Fragment from "react";
import '../css/gryffindor.css'
import gryffindorFlag from '../../src/images/picture/gryffindor-house-red-and-yellow-banner-wallpaper-1600x900_47.jpg' ;
import Navbar from "../components/layout/navbar";

function GryffindorNavbar(props){
    return <>
  <div className="gryffindor_content">
      <Navbar/>
        <div className="gryffindorBg">
            <img src={gryffindorFlag} alt="Gryffindor" />
        </div>
        
        <div className="gryffindor_quote">
        You might belong in GryffindorWhere dwell the brave at heart Their daring, nerve, and chivalry Set Gryffindors apart 
           <div className="sorting_hat">
               - Sorting hat
           </div>
        </div>
       <button hidden="true"></button>
  </div>
    </>
} 

export default GryffindorNavbar ;