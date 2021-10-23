import Fragment from "react";
import '../css/slytherin.css'
import slytherinFlag from '../../src/images/picture/crop.jpg';
import Navbar from "../components/layout/navbar";

function SlytherinHouse(props) {
   return <>
    <div class="slytherin_content">
       <Navbar />
      <div className="slytherin_bg">
         <img src={slytherinFlag} alt="Slytherin" />
           <div class="slytherin_quote">
         Or perhaps in Slytherin,
         You'll make your real friends,
         Those cunning folk use any means,
         To achieve their ends
              <div class="sorting_hat">
              - Sorting hat
              </div>
           </div>
       </div>
       <button hidden="true"></button>
    </div>
   </>
}

export default SlytherinHouse;