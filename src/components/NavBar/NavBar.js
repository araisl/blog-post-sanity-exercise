import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import {mainNavbarItems} from './consts/navbarItems'

const drawerWidth = 220;

const NavBar = () => {
	return(
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
				},
			}}
			variant="permanent"
			anchor="left"
		>
			<Toolbar />
			<Divider />
			<List>
				{mainNavbarItems.map((item, index) => (
					<ListItem key={item.id} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{item.icon}
							</ListItemIcon>
							<ListItemText primary={item.label} />
						</ListItemButton>
					</ListItem>
				))}
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
