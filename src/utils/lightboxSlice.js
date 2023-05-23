import { createSlice } from '@reduxjs/toolkit';

const lightboxSlice = createSlice({
	name: 'lightbox',
	initialState: {
		isLightboxOpen: false,
	},
	reducers: {
		toggleLightbox: (state) => {
			state.isLightboxOpen = !state.isLightboxOpen;
		},
		closeLightbox: (state) => {
			state.isLightboxOpen = false;
		},
	},
});

export const { toggleLightbox, closeLightbox } = lightboxSlice.actions;
export default lightboxSlice.reducer;
