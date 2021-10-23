import Navbar from "../components/layout/navbar";
import Fragment from "react";
import '../css/ravenclaw.css' ;
import RavenclawBackground from '../images/picture/ravenclaw_wallpaper.jpg' ;

function RavenclawHouse(){
    return <>
    <div className="ravenclaw_content">
      <Navbar />
        <div className="ravenclawBg">
           <img src={RavenclawBackground} alt="RavenclawBackground" />
        </div>

        <div className="ravenclaw_quote">
           Or yet in wise old Ravenclaw if you've a ready mind Where those of wit and learning Will always find their kind 
           <div className="sorting_hat">
               - Sorting hat
           </div>
        </div>
    </div>

    </>
}

export default RavenclawHouse ;