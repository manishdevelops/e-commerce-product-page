import ProductShow from './ProductShow';
import ProductInfo from './ProductInfo';
import { useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
const BgOverlay = lazy(() => import('./BgOverlay'));
const Lightbox = lazy(() => import('./Lightbox'));

const Body = () => {
	const isLightboxOpen = useSelector((state) => state.lightbox.isLightboxOpen);
	const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

	return (
		<main className='my-10  md:w-[90%] lg:w-[75%] mx-auto font-kumbh-sans md:flex md:justify-between'>
			<ProductShow />
			<ProductInfo />
			<Suspense>
				{isLightboxOpen && <Lightbox />}
				{isMenuOpen && <BgOverlay />}
			</Suspense>
		</main>
	);
};

export default Body;
