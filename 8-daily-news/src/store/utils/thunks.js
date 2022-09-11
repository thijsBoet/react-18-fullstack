import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const URL_SERV = 'http://localhost:3001';

export const fetchPosts = createAsyncThunk(
	'posts/fetchPosts',
	async ({ page = 1, order = 'desc', limit = 6 }, { getState }) => {
		try {
			// localhost:3001/posts?_page=1&_limit=10&_order=desc&_sort=id
			const response = await axios.get(
				`${URL_SERV}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`
			);

			const prevState = getState().posts;
			return {
				items: [...prevState.articles.items, ...response.data],
				page: page,
			}
		} catch (error) {
			throw error;
		}
	}
);
