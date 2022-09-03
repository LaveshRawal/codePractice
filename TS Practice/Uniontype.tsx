import React from "react";

/*
Union | (OR)
What is the use of unions?
Unions can be useful in many situations where we want to use the same memory for two or more members.

 Union types are used when a value can be more than a single type.

Such as when a property would be string or number. 

function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');
My status code is 404.
My status code is 404.

Union advantage: mixed types
One of the most important properties of unions is that they can contain all different kinds of types, 
not just strings and numbers. For example, this is a perfectly valid union which would be impossible 
to represent with an enum:

type SomeUnionOfTypes =
  | "this is a string" // string
  | 1234 // number
  | { this_is: "an object" } // object
  | Array<unknown>; // array (object)
  | true; // boolean

  Union advantage: sub-typing
Another great benefit of union types is that they can be easily transformed into other types.
 For example, we can use union types to generate a large set of possible values:
 https://dev.to/camchenry/the-difference-between-typescript-unions-enums-and-objects-5e3e
 
type Direction = "top" | "right" | "left" | "bottom";
type Property = "margin" | "padding";

type Properties = `${Property}-${Direction}`;

// => "margin-top" | "margin-right" | "margin-left"
//  | "margin-bottom" | "padding-top" | "padding-right"
//  | "padding-left" | "padding-bottom"

Or values can be narrowed down to just a subset:

type Direction = "top" | "right" | "left" | "bottom";

type VerticalDirection = Pick<Direction, "top" | "bottom">;
type HorizontalDirection = Omit<Direction, VerticalDirection>;

*/

const Uniontype = () => {

  type currentState =   "pending"  | "success"  | "failed";  // union

  const status = (checkStatus:currentState): string => {
    var msg:string;
    switch(checkStatus){
      
      case "success":
      msg = "Data received succefully";
      break;

      case "pending":
        msg = "Data pending";
      break;

      case "failed":
      msg = "Data failed";
      break;
    }
     return msg;
  }

  /* Another example of union age */

  interface myData {
    name: string;
    city: string;
    age: number | string;
  }

  // eslint-disable-next-line @typescript-eslint/no-redeclare
  let myData: myData = {
    name: "Germany",
    city: "Buenos Aires",
    age: '29' // I get no error now
  };

  return (
    <div>

      <h1>{status("success")}</h1>
      <h1>{myData.age}</h1>      
    </div>
  );
};

export default Uniontype;

/* 

In this example, the add() function will calculate the sum of its parameters if they are numbers.

In case the parameters are strings, the add() function will concatenate them into a single string. 

If the parameters are neither numbers nor strings, the add() function throws an error.

Summary
A TypeScript union type allows you to store a value of one or serveral types in a variabl
 */



