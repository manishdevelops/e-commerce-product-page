import React from 'react';
import UserContext from '../utils/UserContext.js';
import { useContext, useState } from 'react';
import prevIcon from '../assets/images/icon-previous.svg';
import nextIcon from '../assets/images/icon-next.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLightbox } from '../utils/lightboxSlice.js';

const ProductShow = () => {
	const [imgIndex, setImgIndex] = useState(0);

	const data = useContext(UserContext);

	const isLightboxOpen = useSelector((state) => state.lightbox.isLightboxOpen);

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
						alt='product'
						src={data?.data?.images?.[imgIndex]?.url}
						className='w-full md:rounded-3xl md:w-[90%]'
						onClick={lightboxHandler}
					/>
				</figure>
				<div
					className={`flex justify-between absolute w-full top-[40%] px-6 md:hidden `}
				>
					<button
						className='bg-White-1 px-7 py-6 rounded-full'
						onClick={() => {
							if (imgIndex === 0) return;
							setImgIndex(imgIndex - 1);
						}}
					>
						<img src={prevIcon} alt='previous-icon' />
					</button>
					<button className='bg-White-1 px-7 py-6  rounded-full'>
						<img
							src={nextIcon}
							alt=' next-icon'
							onClick={() => {
								if (imgIndex === 3) return;
								setImgIndex(imgIndex + 1);
							}}
						/>
					</button>
				</div>
				{isLightboxOpen && (
					<div
						className={`justify-between absolute w-full top-[40%] left-[-5%]  hidden md:flex`}
					>
						<button
							className='bg-White-1 px-7 py-6 rounded-full'
							onClick={() => {
								if (imgIndex === 0) return;
								setImgIndex(imgIndex - 1);
							}}
						>
							<img src={prevIcon} alt='previous-icon' />
						</button>
						<button className='bg-White-1 px-7 py-6  rounded-full'>
							<img
								src={nextIcon}
								alt=' next-icon'
								onClick={() => {
									if (imgIndex === 3) return;
									setImgIndex(imgIndex + 1);
								}}
							/>
						</button>
					</div>
				)}
			</div>
			<div className='hidden md:flex justify-evenly w-[95%] mt-6'>
				{data.data.thumbnails.map((thumbnail, index) => (
					<span
						key={thumbnail.id}
						onClick={() => {
							setImgIndex(index);
						}}
						aria-label='thumbnail'
						className='hover:opacity-50  cursor-pointer duration-200'
					>
						<img
							src={thumbnail.url}
							alt='thumbnail '
							className={`rounded-xl md:w-[80%] ${
								thumbnail.id === imgIndex + 5 &&
								'border-[3px] border-orange-1 opacity-50'
							}`}
						/>
					</span>
				))}
			</div>
		</section>
	);
};

export default ProductShow;
