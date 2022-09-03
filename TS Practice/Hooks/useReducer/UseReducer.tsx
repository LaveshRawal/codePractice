import { useReducer } from "react"


const counterReducer =(state: any, action: any)=>{

  console.log("State", state);
  console.log("Action", action)

  if(action.type === "ADD_TODO"){
    return { count: state.count + 1, };
  }
  return state;
}

const UseReducer = () => {

  //const state [state, setState] = useState({count:0})
  // setState() ===   dispatch() used to update state
  
  const [state, dispatch] = useReducer(counterReducer, {count:0} );

  return (
    <div>
      
      <button onClick={()=>dispatch({type: "ADD_TODO"})}>Change State</button>

      <br />
      {state.count}
    </div>
  )
}

export default UseReducer