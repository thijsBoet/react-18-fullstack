import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from '../utils/thunks';

export const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		loading: true,
		articles: {
			items: [],
		},
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchPosts.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.loading = false;
				state.articles.items = action.payload;
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.loading = false;
			});
	},
});

export default postsSlice.reducer;
