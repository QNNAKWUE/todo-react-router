import React from 'react';

import { Link } from 'react-router-dom';

const Card = ({ userId, title, body }) => {
	return (
		<div className='card'>
			<h2 className='card-title'>{title}</h2>
			<p className='card-body'>{body}</p>
			<Link to={`/userposts/${userId}`}>Todo List by: user {userId}</Link>
		</div>
	);
};

export default Card;
