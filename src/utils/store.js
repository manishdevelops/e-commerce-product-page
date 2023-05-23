import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import appSlice from './appSlice';
import lightboxSlice from './lightboxSlice';

const store = configureStore({
	reducer: {
		cart: cartSlice,
		app: appSlice,
		lightbox: lightboxSlice,
	},
});

export default store;
