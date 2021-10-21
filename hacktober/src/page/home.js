import { Fragment , useState} from "react";
import Navbar from "../components/layout/navbar";

function Home() {

    return <Fragment>
        <Navbar />

        <div className="home-container">

        
            <div style={{ display: 'flex', width: '100%', height: '100%', flexWrap: 'wrap' }}>
                
                <a href="/gryffindor" className="gryffindor" />

                <a href="/slytherin" className="slytherin" />

                <div className="hufflepuff" >
                 
                </div>
                
                <div className="revenclaw" >

                </div>
            </div>

        </div>

    </Fragment>
}

//  <button onClick={() => handleChangeUsername()} >Change username</button>

export default Home;