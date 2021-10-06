import { Fragment , useState} from "react";
import '../css/slytherin.css'
import slytherinFlag from '../../src/images/picture/crop.jpg' ;

function SlytherinNavbar(props){
    return <>
    <ul class="nav">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="#">Gryffindor</a></li>
    <li><a href="/slytherin">Slytherin</a></li>
    <li><a href="#">Hufflepuff</a></li>
    <li><a href="#">Ravenclaw</a></li>
  </ul>
  
       <div className="slytherin_bg">
          <img src={slytherinFlag} alt="Slytherin" />
       </div>
    </>
}

export default SlytherinNavbar ;