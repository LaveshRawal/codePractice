import NoteContext from "./NoteContext"
import { useState } from 'react';

const NoteState = (props)=>{

    const s1State = {
        "name": "Lavesh",
        "Role": "Developer"
    }


const [state, setState] = useState(s1State);

const update=()=>{
    setTimeout(()=>{
        setState({
            "name": "Vikram",
            "Role":  "NodeJS Developer"
        })
    },4000);
}


    return(
        <NoteContext.Provider value={{state,update}}>

            {props.children}

        </NoteContext.Provider>
    )

}

export default NoteState