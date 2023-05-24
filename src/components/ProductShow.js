import UserContext from '../utils/UserContext.js';
import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleLightbox } from '../utils/lightboxSlice.js';
import Thumbnails from './Thumbnails.js';
import CarouselsButton from './CarouselsButton.js';

const ProductShow = ({ openLightbox }) => {
	const [imgIndex, setImgIndex] = useState(0);
	const data = useContext(UserContext);
	const dispatch = useDispatch();
	const lightboxHandler = () => {
		dispatch(toggleLightbox());
	};

	return (
		<section className='md:w-[45%] font-kumbh-sans '>
			<h1 className='text-[0px]'>Product Images</h1>
			<div className='relative'>
				<figure>
					<img
						fetchpriority='high'
						alt='product'
						src={data?.data?.images?.[imgIndex]?.url}
						srset={data?.data?.images?.[imgIndex]?.url + ' 200w'}
						className='w-full md:rounded-3xl md:w-[90%]'
						onClick={lightboxHandler}
					/>
				</figure>
				<CarouselsButton
					openLightbox={openLightbox}
					imgIndex={imgIndex}
					setImgIndex={setImgIndex}
				/>
			</div>
			<Thumbnails data={data} setImgIndex={setImgIndex} imgIndex={imgIndex} />
		</section>
	);
};

export default ProductShow;
