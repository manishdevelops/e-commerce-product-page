const NavigationBar = () => {
	return (
		<nav>
			<ul className='md:flex md:text-grayish-blue'>
				<li className='capitalize  font-bold text-xl mt-3 mx-4 md:mx-0  md:text-sm  cursor-pointer hover:text-very-dark-blue md:text-center'>
					<a
						href='#collections'
						className="h-10 md:h-20 after:content-[''] after:bg-orange-1 after:w-[72.94px] md:hover:after:h-[3px]  after:top-4 flex flex-col justify-between duration-200"
					>
						collections
					</a>
				</li>
				<li className='capitalize mt-3 mx-4 md:mx-0  md:text-sm font-bold text-xl cursor-pointer hover:text-very-dark-blue md:text-center'>
					<a
						href='#men'
						className="h-10 md:h-20 after:content-[''] after:bg-orange-1 after:w-[72.94px] md:hover:after:h-[3px]  after:top-4 flex flex-col justify-between duration-200"
					>
						men
					</a>
				</li>
				<li className='capitalize mt-3 mx-4 md:mx-0  md:text-sm font-bold text-xl cursor-pointer hover:text-very-dark-blue md:text-center'>
					<a
						href='#women'
						className="h-10 md:h-20 after:content-[''] after:bg-orange-1 after:w-[72.94px] md:hover:after:h-[3px]  after:top-4 flex flex-col justify-between duration-200"
					>
						women
					</a>
				</li>
				<li className='capitalize mt-3 mx-4 md:mx-0 md:text-sm font-bold text-xl cursor-pointer hover:text-very-dark-blue md:text-center'>
					<a
						href='#about'
						className="h-10 md:h-20 after:content-[''] after:bg-orange-1 after:w-[72.94px] md:hover:after:h-[3px]  after:top-4 flex flex-col justify-between duration-200"
					>
						about
					</a>
				</li>
				<li className='capitalize mt-3 mx-4 md:mx-0 md:text-sm font-bold text-xl cursor-pointer hover:text-very-dark-blue md:text-center'>
					<a
						href='#contact'
						className="h-10 md:h-20 after:content-[''] after:bg-orange-1 after:w-[72.94px] md:hover:after:h-[3px]  after:top-4 flex flex-col justify-between duration-200"
					>
						contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavigationBar;
