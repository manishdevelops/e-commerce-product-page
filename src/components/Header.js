import menu from '../assets/images/icon-menu.svg';
import cart from '../assets/images/icon-cart.svg';
import avatar from '../assets/images/image-avatar.png';
import close from '../assets/images/icon-close.svg';
import logo from '../assets/images/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useState } from 'react';
import { closeMenu, toggleMenu } from '../utils/appSlice';
import NavigationBar from './NavigationBar';
import TotalCartItems from './TotalCartItems';
const Cart = lazy(() => import('./Cart.js'));

const Header = () => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const dispatch = useDispatch();
	const toggleMenuHandler = function () {
		dispatch(toggleMenu());
	};
	const closeMenuHandler = function () {
		dispatch(closeMenu());
	};

	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

	return (
		<>
			<header className='font-kumbh-sans flex md:w-[95%] lg:w-[85%] mx-auto mt-4 md:mt-8 justify-between align-baseline px-5 pt-5 md:pt-0'>
				<div className='flex '>
					<div className='flex mr-6 md:mr-10'>
						<button className='md:hidden' onClick={toggleMenuHandler}>
							<img className='w-6 h-5  mr-4 block' alt='menu' src={menu} />
						</button>
						<span aria-label='logo'>
							<img
								alt='logo'
								src={logo}
								className='w-[70%] md:w-full md:h-7 ml-2 h-6 lg:mr-10 '
							/>
						</span>
					</div>
					<div
						className={`w-[70%] fixed z-30 md:static md:block h-full bg-white  left-0 top-0 px-3  md:mt-0 ${
							isMenuOpen ? 'block' : 'hidden'
						}`}
					>
						<button className='md:hidden' onClick={closeMenuHandler}>
							<img alt='close' src={close} className='my-7 w-5 mx-4' />
						</button>
						<NavigationBar />
					</div>
				</div>
				<div className='flex '>
					<button
						onClick={() => {
							setIsCartOpen(!isCartOpen);
						}}
						className='flex'
					>
						<TotalCartItems />
						<img alt='cart' src={cart} className='w-6 h-6 mr-3 md:mr-6' />
					</button>
					{isCartOpen && (
						<Suspense>
							<Cart />
						</Suspense>
					)}
					<span aria-label='avatar'>
						<img
							alt='avatar'
							src={avatar}
							className=' cursor-pointer rounded-full w-8 h-8 max-w-full hover:border-2 hover:border-orange-1'
						/>
					</span>
				</div>
			</header>
			<hr className=' md:w-[92%] lg:w-[85%] mx-auto hidden md:block' />
		</>
	);
};

export default Header;
