import menu from '../assets/images/icon-menu.svg';
import cart from '../assets/images/icon-cart.svg';
import avatar from '../assets/images/image-avatar.png';
import close from '../assets/images/icon-close.svg';
import { useState } from 'react';

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	return (
		<>
			<header className='font-kumbh-sans flex md:w-[95%] lg:w-[85%] mx-auto justify-between align-baseline p-5'>
				<div className='flex '>
					<div className='flex mr-14'>
						<button
							className='md:hidden'
							onClick={() => setIsNavOpen(!isNavOpen)}
						>
							<img className='w-6 h-5 mr-4 ' alt='menu' src={menu} />
						</button>
						<h1 className='font-bold text-4xl'>sneakers</h1>
					</div>
					<div
						className={`w-[70%] absolute md:static md:block h-full  left-0 top-0 px-3 ${
							isNavOpen ? 'block' : 'hidden'
						}`}
					>
						<button className='md:hidden' onClick={() => setIsNavOpen(false)}>
							<img alt='close' src={close} className='my-7 w-5' />
						</button>
						<nav className=' '>
							<ul className='md:flex'>
								<li className='capitalize my-3 mx-4 font-bold text-sm'>
									collections
								</li>
								<li className='capitalize my-3 mx-4 font-bold text-sm'>men</li>
								<li className='capitalize my-3 mx-4 font-bold text-sm'>
									women
								</li>
								<li className='capitalize my-3 mx-4 font-bold text-sm'>
									about
								</li>
								<li className='capitalize my-3 mx-4 font-bold text-sm'>
									contact
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div className='flex'>
					<img alt='cart' src={cart} className='w-6 h-6 mr-6' />
					<img alt='avatar' src={avatar} className='w-8 h-8' />
				</div>
			</header>
			<hr className=' md:w-[92%] lg:w-[85%] mx-auto' />
		</>
	);
};

export default Header;
