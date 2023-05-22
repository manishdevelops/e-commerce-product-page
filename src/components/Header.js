import menu from '../assets/images/icon-menu.svg';
import cart from '../assets/images/icon-cart.svg';
import avatar from '../assets/images/image-avatar.png';
import close from '../assets/images/icon-close.svg';
import logo from '../assets/images/logo.svg';

import { useState } from 'react';

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	return (
		<>
			<header className='font-kumbh-sans flex md:w-[95%] lg:w-[85%] mx-auto mt-4 justify-between align-baseline px-5 pt-5'>
				<div className='flex '>
					<div className='flex mr-6 md:mr-10'>
						<button
							className='md:hidden'
							onClick={() => setIsNavOpen(!isNavOpen)}
						>
							<img className='w-6 h-5  mr-4 block' alt='menu' src={menu} />
						</button>
						<img
							alt='logo'
							src={logo}
							className='w-[70%] md:w-full md:h-7 ml-2 h-6 lg:mr-10'
						/>
					</div>
					<div
						className={`w-[70%] absolute z-10 md:static md:block h-full bg-white  left-0 top-0 px-3 mt-4 md:mt-0 ${
							isNavOpen ? 'block' : 'hidden'
						}`}
					>
						<button className='md:hidden' onClick={() => setIsNavOpen(false)}>
							<img alt='close' src={close} className='my-7 w-5 mx-4' />
						</button>
						<nav>
							<ul className='md:flex md:text-grayish-blue'>
								<li className='capitalize  font-bold text-xl mt-3 mx-4 md:mx-0  md:text-sm  cursor-pointer hover:text-very-dark-blue md:text-center'>
									<a
										href='#collections'
										className="h-20 after:content-[''] after:bg-orange-1 after:w-[72.94px] md:hover:after:h-[3px]  after:top-4 flex flex-col justify-between"
									>
										collections
									</a>
								</li>
								<li className='capitalize mt-3 mx-4 md:mx-0  md:text-sm font-bold text-xl cursor-pointer hover:text-very-dark-blue md:text-center'>
									<a
										href='#men'
										className="h-20 after:content-[''] after:bg-orange-1 after:w-[72.94px] md:hover:after:h-[3px]  after:top-4 flex flex-col justify-between"
									>
										men
									</a>
								</li>
								<li className='capitalize mt-3 mx-4 md:mx-0  md:text-sm font-bold text-xl cursor-pointer hover:text-very-dark-blue md:text-center'>
									<a
										href='#women'
										className="h-20 after:content-[''] after:bg-orange-1 after:w-[72.94px] md:hover:after:h-[3px]  after:top-4 flex flex-col justify-between"
									>
										women
									</a>
								</li>
								<li className='capitalize mt-3 mx-4 md:mx-0 md:text-sm font-bold text-xl cursor-pointer hover:text-very-dark-blue md:text-center'>
									<a
										href='#about'
										className="h-20 after:content-[''] after:bg-orange-1 after:w-[72.94px] md:hover:after:h-[3px]  after:top-4 flex flex-col justify-between"
									>
										about
									</a>
								</li>
								<li className='capitalize mt-3 mx-4 md:mx-0 md:text-sm font-bold text-xl cursor-pointer hover:text-very-dark-blue md:text-center'>
									<a
										href='#contact'
										className="h-20 after:content-[''] after:bg-orange-1 after:w-[72.94px] md:hover:after:h-[3px]  after:top-4 flex flex-col justify-between"
									>
										contact
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div className='flex'>
					<img alt='cart' src={cart} className='w-6 h-6 mr-3 md:mr-6' />
					<article className='absolute top-32 md:top-20 left-[5vw] md:left-auto w-[90vw] md:right-[5%] lg:right-[6%] md:w-60 lg:w-80 h-40 bg-slate-500'></article>
					<img alt='avatar' src={avatar} className='w-8 h-8 max-w-full' />
				</div>
			</header>
			<hr className=' md:w-[92%] lg:w-[85%] mx-auto hidden md:block' />
		</>
	);
};

export default Header;
