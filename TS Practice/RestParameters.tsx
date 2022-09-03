/* TypeScript Rest Parameters

Rest parameters
In TypeScript, when you don't know exactly how many parameters a function will receive, you need to use the rest parameter feature.

A rest parameter is defined with the ... operator.

Here is an example of a function with a rest parameter:

A function has only one rest parameter.
The rest parameter appears last in the parameter list.
The type of the rest parameter is an array type.

function fn(...rest: type[]) {
    //...
 } */

import React from 'react'

const RestParameters = () => { // main function

    const getTotal = (...nums: number[]): number => {
        let total = 0;
        nums.map((num) => (total += num));
        return total;
};

      /* A rest parameter allows a function to accept an indefinite number of arguments as an array. 
      It is denoted by the ‘…’ syntax and indicates that the function can accept one or more arguments. */

      const add = (...nums: number[] ): number =>  {
        let sum = 0;
        nums.forEach(val=> sum+= val);
        return sum;
      } 

      /* 
      
      In contrast, the rest arguments allow a function caller to provide a 
      variable number of arguments from an array. Consider the following example.

      const first = [1, 2, 3];
      const second = [4, 5, 6];

      first.push(...second);
     console.log(first);  // [1, 2, 3, 4, 5, 6]


      */

     const first = [1, 2, 3];
     const second = [4, 5, 6];
     first.push(...second);

  return (
    <>
    <h1>{getTotal(10, 20, 30, 40, 50)}</h1>
    <h1>{getTotal(10,50)}</h1>
    <h1>{add(50,50,25,45,98,78,96,36,50)}</h1>
    <h1>{first}</h1>
    </>
  )
}

export default RestParameters




/* // Program 2

const RestParameters = () => {
  const getTotal = (...nums: number[]): number => {
    let total = 0;
    nums.map((num) => (total += num));
    return total;
  };

  return <>{getTotal(10, 20, 30, 40, 50)}</>;
};export default RestParameters; */



