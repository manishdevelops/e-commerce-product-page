import React, { useState, useContext } from 'react';
import plusIcon from '../assets/images/icon-plus.svg';
import minusIcon from '../assets/images/icon-minus.svg';
import cartIcon from '../assets/images/icon-cart.svg';
import { addItem, clearCart } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
import UserContext from '../utils/UserContext.js';

const ProductInfo = () => {
	const data = useContext(UserContext);
	const [totalItem, setTotalItem] = useState(0);

	const dispatch = useDispatch();
	const handleAddItem = function () {
		dispatch(clearCart());

		dispatch(
			addItem({
				desc: 'fall limited edition sneakers',
				price: 125,
				url: data.data.thumbnails[0].url,
				totalItem: totalItem,
			})
		);
	};

	return (
		<section className='p-8 lg:mt-6 md:w-[50%] lg:w-[45%] font-kumbh-sans'>
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
					<button
						onClick={() => {
							totalItem > 0 && setTotalItem(totalItem - 1);
						}}
					>
						<img src={minusIcon} alt='minus' className='hover:opacity-50' />
					</button>
					<p className='font-700 text-lg'>{totalItem}</p>
					<button
						onClick={() => {
							setTotalItem(totalItem + 1);
						}}
					>
						<img src={plusIcon} alt='plus' className='hover:opacity-50' />
					</button>
				</div>
				<button
					className='flex duration-200 text-White-1 bg-orange-1 font-700 text-xl md:text-sm w-full px-4 justify-center py-4 rounded-md md:w-2/3 md:h-[3.5rem] hover:opacity-50'
					onClick={handleAddItem}
				>
					<img src={cartIcon} alt='cart' className='mr-4 fill-slate-50' />
					Add to cart
				</button>
			</div>
		</section>
	);
};

export default ProductInfo;
