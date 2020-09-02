import React from 'react';
import prof from './Profile-CSS.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
	return (
		<div className={prof.content}>
			<div>
				<img src="https://sfwallpaper.com/images/bora-bora-wallpaper-21.jpg" />
			</div>
			<div>ava + description</div>
			<MyPosts />
		</div>
	);
};

export default Profile;
