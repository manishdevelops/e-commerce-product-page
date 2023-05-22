import React from 'react';
import UserContext from '../utils/UserContext.js';
import { useContext } from 'react';
import prevIcon from '../assets/images/icon-previous.svg';
import nextIcon from '../assets/images/icon-next.svg';

const ProductShow = () => {
	const data = useContext(UserContext);
	console.log(data);
	return (
		<section className='md:w-[45%] '>
			<h1 className='text-[0px]'>Product Images</h1>
			<div className='relative'>
				<figure>
					<img
						alt='product'
						src={data?.data?.images?.[0]?.url}
						className='w-full md:rounded-3xl md:w-[90%]'
					/>
				</figure>
				<div className='flex justify-between absolute w-full top-[40%] px-6 md:hidden'>
					<button className='bg-White-1 px-7 py-6 rounded-full'>
						<img src={prevIcon} alt='previous-icon' />
					</button>
					<button className='bg-White-1 px-7 py-6  rounded-full'>
						<img src={nextIcon} alt=' next-icon' />
					</button>
				</div>
			</div>
			<div className='hidden md:flex justify-evenly w-[95%] mt-6'>
				{data.data.thumbnails.map((thumbnail) => (
					<span key={thumbnail.id} aria-label='thumbnail'>
						<img
							src={thumbnail.url}
							alt='thumbnail '
							className='rounded-xl md:w-[80%]'
						/>
					</span>
				))}
			</div>
		</section>
	);
};

export default ProductShow;
