import Fragment from "react";
import Navbar from "../components/layout/navbar";
import '../css/home.css' ;

function Home() {

    return <>
        <Navbar />

        <div className="home-container">

        
            <div style={{ display: 'flex', width: '100%', height: '100%', flexWrap: 'wrap' }}>
                
                <a href="/gryffindor" className="gryffindor" />

                <a href="/slytherin" className="slytherin" />

                <a href="/hufflepuff" className="hufflepuff" />
                
                <a href="/ravenclaw" className="revenclaw" />

            </div>

        </div>
    </>
}

export default Home;