import React from 'react'
import Logo from './Logo';
import logo from  '../taktsoft-logo.svg';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navContainer">
			<div className='navItemContainer'>
				<Link to="/">Home</Link>
			</div>
			<div className='navItemContainer'>
				<Link to="/posts">Posts</Link>
			</div>
			<div className='navItemContainer'>
				<Link to="/about">About</Link>
			</div>
			<div className='navItemContainer'>
				<Link to="/contact">Contact</Link>
			</div>
			<div className='navItemContainer'>
				<Link to="https://taktsoft.com">
					<Logo path={logo} width={140} height={70} />
				</Link>
			</div>
	  </nav>
  )
}

export default NavBar
