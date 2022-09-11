import React, { useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../store/utils/thunks';

const HomePosts = () => {
    const homePosts = useSelector(state => state.posts);
    
    console.log(homePosts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts({ page: 1, order: 'desc', limit: 6 }));
	});

	return (
		<>
			<Masonry
				breakpointCols={{ default: 3, 800: 2, 400: 1 }}
				className='my-masonry-grid'
				columnClassName='my-masonry-grid_column'
			>
				{/* {homePosts.articles
					? homePosts.articles.items.items.map((post) => (
							<div key={post.id}>Hello</div>
					  ))
					: null} */}
			</Masonry>
		</>
	);
};

export default HomePosts;
