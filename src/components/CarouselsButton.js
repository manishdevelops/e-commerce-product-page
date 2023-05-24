import prevIcon from '../assets/images/icon-previous.svg';
import nextIcon from '../assets/images/icon-next.svg';

const CarouselsButton = ({ openLightbox, imgIndex, setImgIndex }) => {
	return (
		<div
			className={`flex justify-between absolute w-full top-[40%] px-6  ${
				openLightbox ? 'left-0 md:left-[-5%] md:flex px-6 md:px-0' : 'md:hidden'
			}`}
		>
			<button
				className='bg-White-1 px-7 py-6 rounded-full'
				onClick={() => {
					if (imgIndex === 0) {
						setImgIndex(3);
						return;
					}
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
						if (imgIndex === 3) {
							setImgIndex(0);
							return;
						}
						setImgIndex(imgIndex + 1);
					}}
				/>
			</button>
		</div>
	);
};

export default CarouselsButton;
