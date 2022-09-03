import { useEffect,useState } from "react"

const UseEffectTest = () => {
    
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate: 
   useEffect(() => {    
       // Update the document title using the browser API 
       /* setTimeout(()=>{
        document.title = `You clicked ${count} times`;  
       },3000) */
       
       
        document.title = `You clicked ${count} times`;  
       
       
    },[count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default UseEffectTest

/* 
https://dev.to/avinashvagh/useeffect-hook-28a4 
Effects let you synchronize a component with some external system (third-party API, network, etc).
By default, effects run after every render (including the initial one).
React will skip the effect if all of its dependencies have the same values as during the last render.
You can’t “choose” your dependencies. They are determined by the code inside the effect.
An empty dependency array ([]) corresponds to the component “mounting”, i.e. being added to the screen.
When Strict Mode is on, React mounts components twice (in development only!) to stress-test your effects.
If your effect breaks because of remounting, you need to implement a cleanup function. React will call your cleanup function before the effect runs next time, and during the unmount.

useEffect :
https://dev.to/abhisheknaiidu/10-react-hooks-explained-3ino#:~:text=But%20now%2C%20React%20Hooks%20provides%20a%20more%20ergonomic,is%20the%20most%20important%20and%20often%20used%20hook.

It allows us to implement all of the lifecycle hooks from within a single function API.

// this will run when the component mounts and anytime the stateful data changes

React.useEffect(() => {
    alert('Hey, Nads here!');
});

// this will run, when the component is first initialized

React.useEffect(() => {
    alert('Hey, Nads here!');
}, []);

// this will run only when count state changes

React.useEffect(() => {
    fetch('nads').then(() => setLoaded(true));
}, [count]);

// this will run when the component is destroyed or before the component
 is removed from UI.

React.useEffect(() => {
    alert('Hey, Nads here');

    return () => alert('Goodbye Component');
});

*/
