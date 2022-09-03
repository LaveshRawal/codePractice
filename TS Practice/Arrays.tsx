// https://www.typescripttutorial.net/typescript-tutorial/typescript-array-type/

/* 
We use arrays to store values of the same type. Arrays are ordered and indexed collections of values. 
The indexing starts at 0, i.e., the first element has index 0, the second has index 1, and so on.
*/


import React from "react";

// let arrayName: type[];

let skills: string[] = ["Problem Solving","Programming"];
skills[2] = "Backend with NodeJS"
skills[3] = "FrontEnd with ReactJS"

skills.push('Software Design');

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

  let numbers: number[];
  numbers = [1,2,3,4,5,6,7,8,9];

  let scores : (string | number)[];
scores = ['Programming', 5, 'Software Design', 4]; 

let series: number[] = [1, 2, 3];
console.log(series.length); 

let doubleIt: number[] = series.map(e => e* 2);
console.log(doubleIt);
  
const Arrays = () => {

    return (
    <>
        <h1>Skills: {skills.join(',')}</h1>
        <h2>Name: {array[0].name} : age: {array[0].age} </h2>
        <h2>Name: {array[1].name}</h2>
        <h2>age: {array[1].age}</h2>
        <h1>Mix Array string | number: {scores.join(' , ')}</h1>
        <h3>Numbers:{ numbers.join(' ') }</h3>
        {numbers.map((nums,i)=>  
          <h4> <li>Index:{i} Value: {nums}</li></h4>          
      )}
        <br />
    </>
  )
}
export default Arrays