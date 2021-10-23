import Fragment from "react" ;
import Navbar from "../components/layout/navbar";
import '../css/hufflepuff.css' ;
import hufflepuffBackground from '../images/picture/hufflepuff_wallpaper6.jpg' ;

function HufflepuffHouse(){
    return <>
    <div className="hufflepuff_content">
      <Navbar/>
        <div className="hufflepuffBg">
           <img src={hufflepuffBackground} alt="HufflepuffBackground" />
        </div>

        <div className="hufflepuff_quote">
           You might belong in Hufflepuff Where they are just and loyal Those patient Hufflepuffs are true And unafraid of toil
           <div className="sorting_hat">
               - Sorting hat
           </div>
        </div>
    </div>
       

    </>
}

export default HufflepuffHouse ;