import React from 'react'

/* 
ENUMS

Enums(short for enumerated) are a data type that includes values which are predefined. In TypeScript it is initialized with the keyword 'enum':
To make this more clear, let's look at a simple example of an enum. 
Suppose that we are building an application that models the days of the week as numbers (0 through 6). 
Instead of needing to remember what the number for each day of the week is, we can create an enum that stores that information:

enum DayOfWeek {
  Monday = 0,
  Tuesday = 1,
  Wednesday = 2,
  Thursday = 3,
  Friday = 4,
  Saturday = 5,
  Sunday = 6,
}
 To create a constant object, we simply define an object and then add as const to make it a constant object.

 const DayOfWeek = {
  Monday: 0,
  Tuesday: 1,
  Wednesday: 2,
  Thursday: 3,
  Friday: 4,
  Saturday: 5,
  Sunday: 6,
} as const;

By default, the first item in the brace's value is set to 0, and each value following it's value will be incremented by 1 so:
a = 0
b = 1
c = 2
Do use an enum when you have a small set of fixed values that are closely related and known at compile time.

*/

const Enum = () => {
  enum CarName {
    Honda = 10,
    Toyota,
    Alto,
    Swift,
    map
  };

  // another one
  enum AppStatus {  
    ACTIVE,  
    INACTIVE,  
    ONHOLD  
}   
//////////////////
enum Country
{
India,
USA,
Germany,
London
}

const checkStatus = (status:AppStatus)=> status;
  
  return (
    <>
    <h1>{CarName.Honda}</h1>

    <h1>Value of Alto is :{CarName.Alto}</h1>

    <h1>{checkStatus(AppStatus.ONHOLD)}</h1>

    <h1>{AppStatus[1]}</h1> {/* INACTIVE : reverse mapping means we can access the value of an enum member, and also can access a member name from its value. */}

    <h1>{checkStatus(AppStatus["INACTIVE"])}</h1> {/* 1 */}

    <h1>{Country[0]}</h1> {/* India */}

    <h1>{Country[1]}</h1> {/* USA */}

    <h1>{Country[2]}</h1> {/* Germany */}

    <h1>{Country[3]}</h1> {/* London */}
    
    </>
  )
}

export default Enum
/* 
// All enum members in 'Name' and 'Profile' are constant.  
enum Name {   
  Abhishek,  
  Ravi,  
  Ajay  
}  
enum Profile {   
  Engineer=1,  
  Leader,  
  Businessman  
}   */