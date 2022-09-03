import { useReducer } from 'react';

const initialState = {
  counter: 0
};

function reducer(state: { counter: number; }, action: { type: any; }) {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 };
    case 'decrement':
        return { ...state, counter: state.counter - 1 };
    default:
      throw new Error();
  }
}

const Reducer = () => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ border:'5px solid red', padding:'50px', marginTop:'100px', marginLeft:'300px', width:'500px'}}>
      
      <div style={{ marginTop:'50px', marginLeft:'180px', }}>
        
        <h1>  {state.counter}   </h1>
        
        </div>
      
      <button style={{height:'50px', width:'150px', margin:'20px' }} onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </button>
      <button style={{height:'50px', width:'150px', margin:'20px' }} onClick={() => dispatch({ type: 'decrement' })}>
        Decrement
      </button>
      
    </div>
  );
}

export default Reducer

/* 
// https://dev.to/sanjosedennis/react-introduction-to-usereducer-hook-5461

useReducer is one of the hooks that helps in managing states.
You can use this hook as a replacement for useState, 
doesn't necessarily require context api, it's a standalone hook.

Instead of updating state directly, we dispatch actions that go to a reducer function, 
and then figure out how to compute the next state.

How does it work?

For react reducer to work we need an 
1. initial state, 
2. reducer function and 
3. dispatch 

to update data.

This Hook accepts 2 arguments: a reducer function and an initial state.
 It accepts reducer function as its first parameter and the initial state as the second.

It returns an array that holds the current value and a dispatch function 
in which you can pass an action to the reducer function.

useReducer(reducer, initialState);
const [state, dispatch] = useReducer(reducerFn, initialState)
reducerFn(state,action) => action will come from dispatch method on eventclick and type

state: This is the current value of the initialState passed to the Hook.

reducer: a function that accepts state and an action. Based on these arguments it determines how the value of state will change.

dispatch: dispatches the action to be used to update the state.

// action is nothing but an object
// {
//   type : "increment",
//   payload:2
// }
Action is an object with type and payload as it properties


*/