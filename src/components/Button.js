import React from 'react'


const Button = ({ text }) => {

  const clickHandler = () => {
		console.log('clicked');
	}

  return (
    <>
      <button onClick={clickHandler}> { text } </button>
    </>
  )
}

export default Button
