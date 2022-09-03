/* 
If you want to update data and cause a UI update, useState is your Hook. If you need some kind of data container throughout the component's lifecycle
 without causing render cycles on mutating your variable, then useRef is your solution.
The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. 

useRef is used when we want to keep our pointer focus in/on an element even after a component has re-rendered. 
example in a todo list After adding value to the list focus should not remove from the input text area.
https://www.geeksforgeeks.org/react-js-useref-hook/

*/
import { useState, useRef } from "react";

const UseRefDemo = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [todolist, setTodoList] = useState<string[]>([]); // we we are creating an /object in Usestate variable we need to define its type useState<string[]>
  const addTodo = () => {
    if (inputRef.current) {
      const todo = inputRef.current.value;
      setTodoList([...todolist, todo]);
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="type todo" />

      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todolist.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default UseRefDemo;
