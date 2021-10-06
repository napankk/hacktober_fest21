import { Fragment , useState} from "react";
import '../css/slytherin.css'
import gryffindorFlag from '../../src/images/picture/gryffindor_bg.jpg' ;

function GryffindorNavbar(props){
    return <>
    <ul class="nav">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="#">Gryffindor</a></li>
    <li><a href="/slytherin">Slytherin</a></li>
    <li><a href="#">Hufflepuff</a></li>
    <li><a href="#">Ravenclaw</a></li>
  </ul>
  
   <div className="gryffindorBg">
       <img src={gryffindorFlag} alt="Gryffindor" />
   </div>
    </>
} 

export default GryffindorNavbar ;