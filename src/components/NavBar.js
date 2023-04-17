import React from 'react'
import Logo from './Logo';
import logo from  '../taktsoft-logo.svg';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navContainer">
			<ul>
				<div className='menu'>
					<li className='navItemContainer'>
						<Link to="/">Home</Link>
					</li>
					<li className='navItemContainer'>
						<Link to="/posts">Posts</Link>
					</li>
					<li className='navItemContainer'>
						<Link to="/about">About</Link>
					</li>
					<li className='navItemContainer'>
						<Link to="/contact">Contact</Link>
					</li>
				</div>
			</ul>
			<div className='Logo' style={{float: 'right'}}>
					<Link to="https://taktsoft.com">
						<Logo path={logo} width={140} height={70} />
					</Link>
			</div>
	  </nav>
  )
}

export default NavBar
