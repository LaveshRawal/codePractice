/* 

•	A collection of values belonging to the same data types can be stored in an array,

whereas a collection of values belonging to different data types cannot be stored in an array.

A tuple works like an array with some additional considerations:

The number of elements in the tuple is fixed.
The types of elements are known, and need not be the same.
For example, you can use a tuple to represent a value as a pair of a string and a number:

let skill: [string, number];
skill = ['Programming', 5];

// Array of Tuples in Typescript
let myTuple:[ string, number ][] = [ [ "HTML", 10 ], 
                                     [ "CSS", 9 ], 
                                    [ "Javascript", 10 ] 
                                ];
you can use a tuple to define an RGB color that always comes in a three-number pattern:
let color: [number, number, number] = [255, 0, 0];

Optional Tuple Elements
Since TypeScript 3.0, a tuple can have optional elements specified using the question mark (?) postfix.

For example, you can define an RGBA tuple with the optional alpha channel value:

let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

Summary
A tupple is an array with a fixed number of elements whose types are known.


*/

import React from 'react'

const Tuple = () => {

    let skillScore: [string, number];
        skillScore = ['Programming', 5];

        type AgeAndName = [ number, string ];
        const person: AgeAndName = [ 26, 'Tim' ];
        const age = person[0];
         const name = person[1];

         // How does destructuring work on a Tuple?
// Another way of accessing a Tuple element is to use JavaScript destructuring. B
        // const [ age, name ] = person;

        // How to use optional Tuple elements? type AgeFirstLast = [ number, string, string?  ];
        // How does the labeled Tuple work? 
        type AgeFirst = [ agef: number, firstName: string  ];
         let agef = 20; 
         const firstName = "Rahul";
  return (
    <>
            <h1>{skillScore}</h1>
            <h1>{person[0]}</h1>
            <h1>{person[1]}</h1>
            <h1>{age}</h1>
            <h1>{name}</h1>
            <h1>{agef}</h1>
            <h1>{firstName}</h1>
    </>
  )
}

export default Tuple

/* Tuple VS Array - What is the difference?

Since the Tuple has similar behavior to the Array it can be hard to know the difference between them.
                        Tuple	        Array
Number of elements	    Fixed	        Variable
Elements types	    Different Types	    Same Type

Readability	Easy (especially with labels) */
