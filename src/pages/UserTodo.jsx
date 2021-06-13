import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '../components/card';


const UserTodo = () => {
	const [usertodos, setUsertodos] = useState([]);
	const params = useParams();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.userid}`)
			.then((response) => response.json())
			.then((result) => {
				setUsertodos(result);
			});
	}, [params]);

	return (
		<div>
			{usertodos.map(({ title, id, userId, body }) => (
				<Card key={id} title={title} body={body} userId={userId} />
			))}
		</div>
	);
};

export default UserTodo;
