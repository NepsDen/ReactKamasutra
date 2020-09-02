import React from 'react';
import prof from './Post-CSS.module.css';

const Post = (props) => {
	return (
		<div className={prof.posts}>
			<div className={prof.item}>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNplTWk2suGea3AcNZ-nzKJVrLX9mL0SGOmA&usqp=CAU" />
			{props.messages}
				<div>
	<span>{props.like}</span>
				</div>
			</div>
		</div>
	);
};

export default Post;
