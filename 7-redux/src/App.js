import { useSelector, useDispatch } from 'react-redux';
import { addMovie } from './store/movies';
import { setType, fetchUsers } from './store/users';

const App = () => {
	const movies = useSelector(state => state.movies.list);
	const users = useSelector(state => state.users);
	const dispatch = useDispatch();

	return (
		<>
			<h2>Movies</h2>
			<ul>
				{movies &&
					movies.map(movie => (
						<li key={movie.id}>{`${movie.title} - ${movie.year}`}</li>
					))}
			</ul>
			<hr />
			<button
				onClick={() =>
					dispatch(
						addMovie({
							id: 6,
							title: 'Sunshine',
							year: 2019,
						})
					)
				}
			>
				Add Movie
			</button>
			<hr />
			<h2>User Type: {users.type}</h2>
			<button onClick={() => dispatch(setType('Admin'))}>Set Type</button>
			<hr />
			<h2>Users</h2>
			<div>
				{users.loading ? 'loading...' : null}
				<ul>
					{users
						? users.users.map(user => <li key={user.id}>{user.name}</li>)
						: null}
				</ul>
			</div>
			<button onClick={() => dispatch(fetchUsers())}>Get Users</button>
		</>
	);
};

export default App;
