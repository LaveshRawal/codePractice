/* forEach doesn’t actually return anything. It just calls the function for each array element and then it’s done. 
So whatever you return within that called function is simply discarded.

On the other hand, map will similarly call the function for each array element but instead of 
discarding its return value, it will capture it and build a new array of those return values.

This also means that you could use map wherever you are using forEach but you still shouldn’t do that so you don’t collect the return values without any purpose. 
It’s just more efficient to not collect them if you don’t need them.

Map function array
const myAwesomeArray = [5, 4, 3, 2, 1]
myAwesomeArray.map(x => x * x)
// >>>>>>>>>>>>>>>>> Output: [25, 16, 9, 4, 1] */
import React from "react";

const array = [
    {
      name: "Tim",
      age: 27
    },
    {
      name: "Bob",
      age: 32
    }
  ];
  
const ArrayMap = () => {

    return (
    <>
        {array.map((item,index)=>
        (
            <div key={index}>
                <div>Name: {item.name}</div>
                <div>age: {item.age}</div>
            </div>
        )
    )}

    </>
  )
}

export default ArrayMap

// https://timmousk.com/blog/react-loop-through-array-of-objects/

