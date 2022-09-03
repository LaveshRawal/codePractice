// When typing functions, we can type its parameters as well as its return value: 
// www.malcolmkee.com/typescript-for-react-developer/function/
import React from 'react'

const Functions = () => {

  // Simple Function Annotations
  let add: (a: number, b: number) => number = (a,b) => { 
    return a + b 
 }
 console.log(add(5,5));

 // Using Type Alias
 
 
   interface myData {
        name: string;
        city: string;
        age: number;
        printMsg: (message: string) => string;
      }
      
      let user101: myData = {
        name: "German",
        city: "Buenos Aires",
        age: 29,
        printMsg: (message) => message
      };

      ///////////
      interface Person {
        name: string
        age: number
        greet(): string
      }
      
      let john: Person = {
        name: "John Doe",
        age: 20,
        greet() {
          return `Hello World`
         }
      } 
      
      
  return (
    <>
    <h1>{user101.printMsg("Hello TypeScript")}</h1>
        {/* <h1>{user101.printMsg(55)}</h1>  */}{/* gives an errir as only receive string here */}
        <h1>{john.greet()}</h1>
    </>
  )
}

export default Functions