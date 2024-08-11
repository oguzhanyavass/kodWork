import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favoriteJobs: [],
        selectedJob: '',
    },
    reducers: {
        addFavorite: (state, action) => {
            state.favoriteJobs.push(action.payload);
        },
        removeFavorites: (state, action) => {
            state.favoriteJobs = state.favoriteJobs.filter(
                (item) => item.id !== action.payload
            );
        },
        selectJob: (state, action) => {
            state.selectedJob = action.payload;
        },
    },
});

export const { addFavorite, removeFavorites, selectJob } = favoriteSlice.actions;
export default favoriteSlice.reducer;  // Default export
