import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        list: [
            {
                id: 1,
                title: 'The Shawshank Redemption',
                year: 1994,
            },
            {
                id: 2,
                title: 'The Godfather',
                year: 1972,
            },
            {
                id: 3,
                title: 'The Godfather: Part II',
                year: 1974,
            },
            {
                id: 4,
                title: 'The Dark Knight',
                year: 2008,
            },
            {
                id: 5,
                title: 'Top Gun',
                year: 1986,
            },
        ],
    },
    reducers: {
        addMovie: (state, action) => {
            // const newMovie = {
            //     id: state.list.length + 1,
            //     title: 'Sunshine',
            //     year: 2019,
            // }
            state.list = [...state.list, action.payload];
        }
    }
});

export const { addMovie } = moviesSlice.actions;
export default moviesSlice.reducer;