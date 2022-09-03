/* 
3. What is any type, and when to use it?
There are times when you want to store a value in a variable but don’t know the type of that variable in advance. 
For example, the value is coming from an API call or the user input. 

https://www.typescripttutorial.net/typescript-tutorial/typescript-any-type/

// json may come from a third-party API
const json = `{"latitude": 10.11, "longitude":12.12}`;

// parse JSON to find location
const currentLocation = JSON.parse(json);
console.log(currentLocation);

The ‘any’ type allows you to assign a value of any type to the variable of type any.

let temp: any;

temp = "string";
temp = 2;
temp = true;

var New_Array : any[]=[1,"data1"];
New_Array.push("data2");
New_Array.push(2)
New_Array.push("data3");
New_Array.push(3)
console.log(New_Array)

*/

import React from 'react'

const AnyType = () => {

    // json may come from a third-party API
const employeeData: string = `{"name": "John Doe", "salary": 60000}`;


// parse JSON to build employee object
const employee: any = JSON.parse(employeeData);


  return (
    
    <div>
    <h2>
    <div>{employeeData}</div>
    <div>{employee.name}</div>
    <div>{employee.salary}</div>
    </h2>
    </div>   
    
  )
}

export default AnyType


