import { SetStateAction, useState } from 'react';


const Todo = () => {
    const[todo, setTodo] = useState("");
    const[todolist, setTodoList] = useState<string[]>([])  // we we are creating an /object in Usestate variable we need to define its type useState<string[]>

    const addTodo = ()=>{
        // ['eat','code']
        setTodoList([...todolist,todo]);
        setTodo("");
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setTodo(e.target.value);
    }
  return (
    <div>
        <input type="text" placeholder='type todo' value={todo}
        /* onChange={(e)=>setTodo(e.target.value)} */        
        onChange={handleChange}
        />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
            {todolist.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default Todo