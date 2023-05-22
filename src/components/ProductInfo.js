import React from 'react';
import plusIcon from '../assets/images/icon-plus.svg';
import minusIcon from '../assets/images/icon-minus.svg';
import cartIcon from '../assets/images/icon-cart.svg';
const ProductInfo = () => {
	return (
		<section className='p-8 lg:mt-6 md:w-[50%] lg:w-[45%]'>
			<h1 className='font-bold uppercase text-orange-1'>sneaker company</h1>
			<h2 className='capitalize font-700 text-3xl my-5 lg:my-8 lg:text-4xl'>
				fall limited edition sneakers
			</h2>
			<p className='text-dark-grayish-blue text-sm'>
				These low-profile sneakers are your perfect casual wear companion.
				Featuring a durable rubber outer sole, they’ll withstand everything the
				weather can offer.
			</p>
			<div className='flex justify-between my-5 lg:my-8 md:flex-col'>
				<div>
					<span className='mr-6 text-2xl font-700'>$125.00</span>
					<span className='text-orange-1 text-md font-700 bg-Pale-orange px-2 py-1 rounded-md'>
						50%
					</span>
				</div>
				<span className='font-700 text-grayish-blue line-through md:mt-2'>
					$250.00
				</span>
			</div>
			<div className='md:flex md:justify-between'>
				<div className='flex justify-between bg-light-grayish-blue px-4 py-4 md:py-4 rounded-md my-8 md:my-0 md:w-1/3 md:mr-4'>
					<button>
						<img src={minusIcon} alt='minus' />
					</button>
					<p className='font-700 text-lg'>0</p>
					<button>
						<img src={plusIcon} alt='plus' />
					</button>
				</div>
				<button className='flex text-White-1 bg-orange-1 font-700 text-xl md:text-sm w-full px-4 justify-center py-4 rounded-md md:w-2/3 md:h-[3.5rem]'>
					<img src={cartIcon} alt='cart' className='mr-4 fill-slate-50' />
					Add to cart
				</button>
			</div>
		</section>
	);
};

export default ProductInfo;
