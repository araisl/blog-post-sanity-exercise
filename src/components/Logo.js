import React from 'react'

const Logo = (props) => {
  return (
    <div>
      <img src={props.path} alt={props.alt} width={props.width} height={props.height}/>
    </div>
  )
}

export default Logo
