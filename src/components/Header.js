import menu from '../assets/images/icon-menu.svg';
import cart from '../assets/images/icon-cart.svg';
import avatar from '../assets/images/image-avatar.png';
import close from '../assets/images/icon-close.svg';
import logo from '../assets/images/logo.svg';
import Delete from '../assets/images/icon-delete.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { clearCart } from '../utils/cartSlice';
import { closeMenu, toggleMenu } from '../utils/appSlice';

const Header = () => {
	const [isCartOpen, setIsCartOpen] = useState(false);

	const cartItems = useSelector((store) => store.cart.items);
	const dispatch = useDispatch();

	const handleRemoveCart = function () {
		dispatch(clearCart());
	};

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
						<nav>
							<ul className='md:flex md:text-grayish-blue'>
								<li className='capitalize  font-bold text-xl mt-3 mx-4 md:mx-0  md:text-sm  cursor-pointer hover:text-very-dark-blue md:text-center'>
									<a
										href='#collections'
										className="h-20 after:content-[''] after:bg-orange-1 after:w-[72.94px] md:hover:after:h-[3px]  after:top-4 flex flex-col justify-between duration-200"
									>
										collections
									</a>
								</li>
								<li className='capitalize mt-3 mx-4 md:mx-0  md:text-sm font-bold text-xl cursor-pointer hover:text-very-dark-blue md:text-center'>
									<a
										href='#men'
										className="h-20 after:content-[''] after:bg-orange-1 after:w-[72.94px] md:hover:after:h-[3px]  after:top-4 flex flex-col justify-between duration-200"
									>
										men
									</a>
								</li>
								<li className='capitalize mt-3 mx-4 md:mx-0  md:text-sm font-bold text-xl cursor-pointer hover:text-very-dark-blue md:text-center'>
									<a
										href='#women'
										className="h-20 after:content-[''] after:bg-orange-1 after:w-[72.94px] md:hover:after:h-[3px]  after:top-4 flex flex-col justify-between duration-200"
									>
										women
									</a>
								</li>
								<li className='capitalize mt-3 mx-4 md:mx-0 md:text-sm font-bold text-xl cursor-pointer hover:text-very-dark-blue md:text-center'>
									<a
										href='#about'
										className="h-20 after:content-[''] after:bg-orange-1 after:w-[72.94px] md:hover:after:h-[3px]  after:top-4 flex flex-col justify-between duration-200"
									>
										about
									</a>
								</li>
								<li className='capitalize mt-3 mx-4 md:mx-0 md:text-sm font-bold text-xl cursor-pointer hover:text-very-dark-blue md:text-center'>
									<a
										href='#contact'
										className="h-20 after:content-[''] after:bg-orange-1 after:w-[72.94px] md:hover:after:h-[3px]  after:top-4 flex flex-col justify-between duration-200"
									>
										contact
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div className='flex '>
					<button
						onClick={() => {
							setIsCartOpen(!isCartOpen);
						}}
						className='flex'
					>
						{cartItems?.[0]?.totalItem > 0 && (
							<p className='relative left-8 top-[-.6rem] text-xs font-700 text-White-1 bg-orange-1 rounded-2xl px-[7px]'>
								{cartItems?.[0]?.totalItem}
							</p>
						)}
						<img alt='cart' src={cart} className='w-6 h-6 mr-3 md:mr-6' />
					</button>
					{isCartOpen && (
						<article className='absolute z-10 top-32 md:top-20 left-[5vw] md:left-auto w-[90vw] md:right-[5%] lg:right-[6%]  md:w-80 h-64 bg-White-1 shadow-xl p-[6vw] md:p-6 rounded-md'>
							<p className='p-4'>cart</p>
							<hr />
							{(cartItems?.[0]?.totalItem === 0 || cartItems.length === 0) && (
								<p className='text-center my-14 font-700 text-dark-grayish-blue text-sm'>
									Your cart is empty.
								</p>
							)}
							{cartItems?.[0]?.totalItem > 0 && (
								<>
									<div className='flex justify-center my-4 leading-8'>
										<span aria-label='product-icon'>
											<img
												src={cartItems[0].url}
												alt='product-icon'
												className='h-14 md:w-10 md:h-10 mr-2 rounded-md'
											/>
										</span>
										<div className='mx-4 md:mx-2'>
											<p className='capitalize text-sm'>{cartItems[0].desc}</p>
											<p>
												$125 x {cartItems?.[0]?.totalItem}{' '}
												<span className='font-bold ml-2'>
													${cartItems?.[0].price * cartItems?.[0]?.totalItem}
												</span>
											</p>
										</div>
										<button aria-label='delete-icon' onClick={handleRemoveCart}>
											<img
												src={Delete}
												alt='delete'
												className='mt-2 cursor-pointer'
											/>
										</button>
									</div>
									<button className='w-full capitalize font-bold text-White-1 bg-orange-1 rounded-md py-3 md:py-2 hover:opacity-50 duration-200'>
										checkout
									</button>
								</>
							)}
						</article>
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
