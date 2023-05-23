import React from 'react';
import ProductShow from './ProductShow';
import ProductInfo from './ProductInfo';
import Lightbox from './Lightbox';
import { useSelector } from 'react-redux';

const Body = () => {
	const isLightboxOpen = useSelector((state) => state.lightbox.isLightboxOpen);

	return (
		<main className='my-10  md:w-[90%] lg:w-[75%] mx-auto font-kumbh-sans md:flex md:justify-between'>
			<ProductShow />
			<ProductInfo />
			{isLightboxOpen && <Lightbox />}
		</main>
	);
};

export default Body;
