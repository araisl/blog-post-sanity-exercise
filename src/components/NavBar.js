import React from 'react'
import Logo from './Logo';
import logo from  '../taktsoft-logo.svg';

const NavBar = () => {
  return (
    <nav className="navContainer">
			<div className='navItemContainer'>
				<a href='/'>
					<p> Home </p>
				</a>
			</div>
			<div className='navItemContainer'>
				<a href='#'>
					<p> Posts </p>
				</a>
			</div>
			<div className='navItemContainer'>
				<a href='#'>
					<p> About </p>
				</a>
			</div>
			<div className='navItemContainer'>
				<a href='#'>
					<p> Contact </p>
				</a>
			</div>
			<div className='navItemContainer'>
				<a href="https://taktsoft.com">
					{/* <img src={logo} width={140} height={70}/> */}
					<Logo path={logo} width={140} height={70} />
				</a>
			</div>
	  </nav>
  )
}

export default NavBar
