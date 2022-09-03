/* 
useRef is used when we want to keep our pointer focus in/on an element even after a component has re-rendered. 
example in a todo list After adding value to the list focus should not remove from the input text area. 
or we can say ref DOM node of which we want to manipulate property without re-rendering component.

https://atomizedobjects.com/blog/react/how-to-use-useref-with-typescript/#:~:text=For%20the%20most%20part%20if%20you%20have%20the,element%20at%20the%20place%20you%20are%20using%20it.
*/

import React, {useRef} from 'react'

const UseRefHook =()=> {
const inputRef = useRef<HTMLInputElement | null>(null);
// to remove error object is possibly null we need to wrap our function in chaining operator
const controlInput=()=>{
  if (inputRef.current) {
  console.warn("Function Called")
  inputRef.current.value = "abc";
  inputRef.current.focus();
  inputRef.current.style.color="green";
                        }
}

    return (
      <div className="App">
        <h1>useRef in React </h1>
        <input type="text" ref={inputRef} />
        <button onClick={controlInput}>Handle Input</button>
      </div>
    );
  
  }

export default UseRefHook