import React from 'react';
import classes from './Navbar-CSS.module.css';
console.log(classes)
const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<div className={classes.item}>
				<div className={`${classes.item} ${classes.active}`}>
					<a>Profile</a>
				</div>
				<div>
					<a>Messages </a>
				</div>
				<div>
					<a>News</a>
				</div>
				<div>
					<a>Music</a>
				</div>
				<div>
					<a>Settings</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
