import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (obj, { rejectWithValue, fulfillWithValue }) => {
    // console.log(thunkAPI.getState());
    // thunkAPI.dispatch(testAsyncDispatch({}));
	try {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/users`
        );
        // return fulfillWithValue('We are victorious!');
		return response.data;
	} catch (error) {
		return rejectWithValue('Oopsie doopsie');
	}
});

export const usersSlice = createSlice({
	name: 'users',
	initialState: {
		type: 'Guest',
        users: [],
        loading: false,
        // test: false,
	},
	reducers: {
		setType: (state, action) => {
			state.type = action.payload || 'Guest';
        },
        // testAsyncDispatch: (state, action) => {
        //     state.test = true;
        // }
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUsers.pending, state => {
                state.loading = true;
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.loading = false;
				state.users = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				console.log(action.payload);
			});
	},
});

export const { setType } = usersSlice.actions;
export default usersSlice.reducer;
