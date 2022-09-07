import { useSelector, useDispatch } from 'react-redux';
import { addMovie } from './store/movies';

const App = () => {
	const movies = useSelector(state => state.movies.list);
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
			<button onClick={() => dispatch(addMovie())}>Add Movie</button>
		</>
	);
};

export default App;
