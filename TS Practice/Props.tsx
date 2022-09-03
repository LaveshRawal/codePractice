import React, { FC } from 'react'

interface propstype {
    name:string;
    age:number;
    status:'Coder' | 'tester' | 'designer' | 'CEO' ;
    country?:string;
    //children?:string;
    children?:React.ReactNode;
    // in Children Props we can pass HTML TAG, string or a React componenet 
}
// const Props = ({name,age,status,children}):propstype => {   we can use bothstyles here 
const Props: FC<propstype> = ({name,age,status,children}) => {  
  return (
    
    <>
    <div><h1>Hello : {name || "user"} age: {age} status: {status} </h1></div>
    <div><h2>{children}</h2></div>
    </>
  )
}

export default Props