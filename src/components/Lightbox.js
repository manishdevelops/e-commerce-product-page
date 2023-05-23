import React from 'react';
import ProductShow from './ProductShow';
import closeIcon from '../assets/images/icon-close.svg';
import { useDispatch } from 'react-redux';
import { closeLightbox } from '../utils/lightboxSlice';

const Lightbox = () => {
	const dispatch = useDispatch();

	const closeLightboxHandler = () => {
		dispatch(closeLightbox());
	};
	return (
		<section className='w-full h-full bg-black-opacity-75 fixed left-0 bottom-0 top-0 z-50 flex flex-col justify-center items-center lg:p-[10%]'>
			<button
				className='md:w-[45%] w-full my-4 flex justify-end'
				onClick={closeLightboxHandler}
			>
				<img src={closeIcon} alt='close' className='h-10 w-10' />
			</button>
			<ProductShow />
		</section>
	);
};

export default Lightbox;
