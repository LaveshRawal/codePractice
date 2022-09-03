import React, { FC } from 'react'

interface propstype {
  title:string;
}
const Header:FC<propstype> = ({title}) => {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

/* Default Props */

Header.defaultProps = {
  title: "Default Title"
}
export default Header