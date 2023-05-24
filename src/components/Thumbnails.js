import React from 'react';

const Thumbnails = ({ data, imgIndex, setImgIndex }) => {
	return (
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
	);
};

export default Thumbnails;
