// https://dev.to/wpreble1/typescript-with-react-functional-components-4c69#:~:text=%20TypeScript%20with%20React%20Functional%20Components%20%201,programmers%20who%20are%20not%20used%20to...%20More%20
// https://www.w3schools.io/learn/react-typescript-functional-components/

import React, { FC } from 'react';
/* 
type ChildProps = {
    name: string,
    id: number,
    bio?: string,
  } */
interface ChildProps {
    name: string,
    id: number,
    bio?: string,
}
// we can Either use interface or type 

const FunctionalComponentsRT: FC<ChildProps> = ({ name, id, bio = 'Bio empty' }) => {
  return (
    
    <div>
      <h2>Name: {name}, Id: {id}</h2>
      <p>{bio}</p>
    </div>

  )
}

export default FunctionalComponentsRT