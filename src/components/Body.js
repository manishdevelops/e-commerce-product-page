import ProductShow from './ProductShow';
import ProductInfo from './ProductInfo';
import Lightbox from './Lightbox';
import { useSelector } from 'react-redux';
import BgOverlay from './BgOverlay';

const Body = () => {
	const isLightboxOpen = useSelector((state) => state.lightbox.isLightboxOpen);
	const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

	return (
		<main className='my-10  md:w-[90%] lg:w-[75%] mx-auto font-kumbh-sans md:flex md:justify-between'>
			<ProductShow />
			<ProductInfo />
			{isLightboxOpen && <Lightbox />}
			{isMenuOpen && <BgOverlay />}
		</main>
	);
};

export default Body;
