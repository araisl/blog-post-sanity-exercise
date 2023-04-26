import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import {useNavigate, Link} from 'react-router-dom';

import {mainNavbarItems} from './consts/navbarItems'
import { navbarStyles } from './styles';

const NavBar = () => {

	const navigateTo = useNavigate();

	return(
		<Drawer
			sx={navbarStyles.drawer}
			variant="permanent"
			anchor="left"
		>
			<Toolbar />
			<Divider />
			<List>
				{mainNavbarItems.map((item) => (
					<ListItem onClick={() => navigateTo(item.route)} key={item.id} disablePadding>
						<ListItemButton>
							<ListItemIcon sx={navbarStyles.icons}>
								{item.icon}
							</ListItemIcon>
							<ListItemText sx={navbarStyles.text} primary={item.label} />
						</ListItemButton>
					</ListItem>
				))}
				<Link to="https://taktsoft.com">
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon sx={navbarStyles.icons}>
							</ListItemIcon>
							<ListItemText sx={navbarStyles.text} primary={"Taktsoft"} />
						</ListItemButton>
					</ListItem>
				</Link>
			</List>
			<Divider />
		</Drawer>
	)
}

export default NavBar






// import React from 'react'
// import Logo from './Logo';
// import logo from  '../taktsoft-logo.svg';
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
// 		<header>
//     <nav className="navContainer">
// 			<ul className='navList'>
// 				<div className='menu'>
// 					<li className='navItemContainer'>
// 						<Link to="/">Home</Link>
// 					</li>
// 					<li className='navItemContainer'>
// 						<Link to="/posts">Posts</Link>
// 					</li>
// 					<li className='navItemContainer'>
// 						<Link to="/authors">Authors</Link>
// 					</li>
// 					<li className='navItemContainer'>
// 						<Link to="/about">About</Link>
// 					</li>
// 				</div>
// 			</ul>
// 			<div className='Logo' style={{float: 'right'}}>
// 					<Link to="https://taktsoft.com">
// 						<Logo path={logo} width={140} height={70} />
// 					</Link>
// 			</div>
// 	  </nav>
// 		</header>
//   )
// }

// export default NavBar
