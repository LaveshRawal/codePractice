import React, {useState} from 'react'

const Content = () => {

  const [name, setName] = useState("Shankar Lal");
  const handleNameChange =()=>{
  
    const names:string[] = ["Lavesh","Ashok","Tanvi","Kumar"];
    const int: number = Math.floor(Math.random() * 4);
    console.log(names[int]);  
    setName(names[int]);
  }

  const handleClick = ()=>{
      console.log("You Clicked Me")
  }
  const handleClick2 = (name:string)=>{
      console.log(`${name} was Clicked`);
  }
  const handleClick3 = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
      console.log(e.target);
  }

  return (
            <main>

                <h1>{name}</h1>
                <br/>
                <button onClick={handleClick}>Click IT</button>
                <br/>
                <button onClick={()=>handleClick2('Lavesh')}>Click IT 2</button>
                <br/>
                <button onClick={(e)=>handleClick3(e)}>Event Target</button>
                <br/>
                <button onClick={()=>handleNameChange()}>Change Name State</button>

            </main>
  )
}

export default Content

