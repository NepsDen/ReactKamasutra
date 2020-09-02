import React from 'react';
import prof from './MyPosts-CSS.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div>
			<div className={prof.post}>My posts</div>

			<div>New Post</div>
			<div className={prof.posts}>
				<Post messages="Hi hello World" like={10} />
				<Post messages="Hi aasdasd" like={10} />
			</div>
		</div>
	);
};

export default MyPosts;
