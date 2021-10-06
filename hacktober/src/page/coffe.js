import {useParams } from "react-router-dom";
import { useEffect} from "react";

function Coffee() {
  let params = useParams();
  
  useEffect(() => {
   console.log(params);
  }, []);

  return (
    <>
    <p> Coffee page. {params.type} </p>
    </>
  );
}

export default Coffee;