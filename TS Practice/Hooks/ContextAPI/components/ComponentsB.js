import { useContext, useEffect } from "react";
import NoteContext from "../Context/Notes/NoteContext";

const ComponentsB = () => {
    
  const a = useContext(NoteContext);

  useEffect(()=>{
    a.update();
  },[])

  return (
            <>
            <h1>This is Component B: {a.state.name} {a.state.Role} </h1>
            {/* when we using state variable we need to access value by state variable */}
            </>
  )
}

export default ComponentsB