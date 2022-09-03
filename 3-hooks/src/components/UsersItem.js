import React, { useContext } from 'react';
import { MyContext } from '../context/index';

const UserItem = () => {
	const context = useContext(MyContext);
	return (
		<>
			{context.active
				? context.users.map(user => (
						<div key={user.id}>
							<h3>Name: {user.name}</h3>
						</div>
				  ))
				: null}
			<hr />
			<button onClick={context.toggleActive}>Toggle Names</button>
		</>
	);
};

export default UserItem;
