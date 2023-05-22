import { createContext } from 'react';
import img1 from '../assets/images/image-product-1.jpg';
import img2 from '../assets/images/image-product-2.jpg';
import img3 from '../assets/images/image-product-3.jpg';
import img4 from '../assets/images/image-product-4.jpg';
import thumbnail1 from '../assets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../assets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../assets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../assets/images/image-product-4-thumbnail.jpg';

const UserContext = createContext({
	data: {
		images: [
			{
				url: img1,
				id: 1,
			},
			{
				url: img2,
				id: 2,
			},
			{
				url: img3,
				id: 3,
			},
			{
				url: img4,
				id: 4,
			},
		],
		thumbnails: [
			{
				url: thumbnail1,
				id: 5,
			},
			{
				url: thumbnail2,
				id: 6,
			},
			{
				url: thumbnail3,
				id: 7,
			},
			{
				url: thumbnail4,
				id: 8,
			},
		],
	},
});

export default UserContext;
