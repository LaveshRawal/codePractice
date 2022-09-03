import React from 'react'
// https://dev.to/devbyrayray/how-to-use-a-typescript-interface-
//https://dev.to/toluagboola/type-aliases-vs-interfaces-in-typescript-3ggg
//Interfaces are another way to name data structures e.g objects.
// Interfaces make sure that everything is implemented as expected
// An interface is a blueprint for an Object. It tells you which properties there are, which are required and optional and which type of data they hold.
// The example above shows an interface for our pizza. We gave all the properties a single data type. Now we can create 
// our Pizza object and use the interface to ensure it has the correct properties.
// Interfaces are similar to type aliases, except they only apply to object types.
const TypeScriptInterface = () => {
  
interface DominosPizza {
  name: string;
  slices: number;
  toppings: string[];
  price: number;
  cheescrust: boolean;
  vegan?: boolean;
  vegetarian: boolean;
}

const pizza: DominosPizza = {
  name: 'CheeseBurst',
  slices: 6,
  toppings: ['Paneer','BBQ Sauce','Bell Paper'],
  price: 50,
  cheescrust: true,
  vegetarian: true,

}

// Iterating over an Object with "Object.entries()" method to get an array of key-value pairs.
/* 
https://bobbyhadz.com/blog/typescript-object-foreach

forEach after Object.entries (better)

Object.entries(pizza).forEach(([key, value], index) => {
  
  console.log(key, value, index);
});

*/

   return (
          <>
            {Object.entries(pizza).forEach(([key, value],index) => console.log(`index: ${index} :::::   ${key}: ${value}`))} 
            
            {/* // we can also use map ::: also returning with list in first and with div in second example*/}

            <br />

            {Object.entries(pizza).map((item,index)=>(
              <ul key={index}>
                <li><h2>index{index} : {item.join(' ')}</h2> </li>
              </ul>
            ))}
            
            <br />
           

            {Object.entries(pizza).map((item,index)=>(
              <div key={index}>
                <div><h2>index{index} : {item.join(' ')}</h2> </div>
              </div>
            ))}

            
            


          </>
  )
}

export default TypeScriptInterface