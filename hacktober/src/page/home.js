import { Fragment , useState} from "react";
import Navbar from "../components/layout/navbar";

function Home() {

    const [username, setUsername] = useState()

    const handleChangeUsername = () => {
        setUsername("fifa")
    }

    return <Fragment>
        <Navbar username={username} />

        <div className="home-container">

        
            <div style={{ display: 'flex', width: '100%', height: '100%', flexWrap: 'wrap' }}>
                
                <div className="gryffindor" >
                       <div className="gryfName"> Gryffindor </div>
                </div>

                <div className="slytherin">
                    
                </div>

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