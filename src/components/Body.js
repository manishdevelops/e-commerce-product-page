import React from 'react';
import ProductShow from './ProductShow';
import ProductInfo from './ProductInfo';

const Body = () => {
	return (
		<main className='my-10  md:w-[90%] lg:w-[75%] mx-auto font-kumbh-sans md:flex md:justify-between'>
			<ProductShow />
			<ProductInfo />
		</main>
	);
};

export default Body;
