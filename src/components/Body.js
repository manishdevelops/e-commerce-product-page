import ProductShow from './ProductShow';
import ProductInfo from './ProductInfo';
import Lightbox from './Lightbox';
import { useSelector } from 'react-redux';

const Body = () => {
	const isLightboxOpen = useSelector((state) => state.lightbox.isLightboxOpen);
	const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

	return (
		<main className='my-10  md:w-[90%] lg:w-[75%] mx-auto font-kumbh-sans md:flex md:justify-between'>
			<ProductShow />
			<ProductInfo />
			{isLightboxOpen && <Lightbox />}
			{isMenuOpen && (
				<section className='fixed z-20 w-full h-screen left-0 top-0 bg-black-opacity-75 md:hidden'></section>
			)}
		</main>
	);
};

export default Body;
