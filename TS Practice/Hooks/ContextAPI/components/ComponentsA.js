import { useContext, useEffect } from "react";
import NoteContext from "../Context/Notes/NoteContext";

const ComponentsA = () => {
    
  const a = useContext(NoteContext);
  

useEffect(()=>{
  a.update();
  },[])

  return (
            <>
            <h1>This is Component A: {a.state.name} {a.state.Role} </h1>
            {/* when we using state variable we need */}
            </>
  )
}

export default ComponentsA