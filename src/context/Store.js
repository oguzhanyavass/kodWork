import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './jobSlice';  // `favouriteSlice.reducer` yerine `favouriteReducer` olarak import edin

export const Store = configureStore({
    reducer: {
        favorite: favoriteReducer,  // `favouriteSlice` yerine `favouriteReducer`
    },
});
