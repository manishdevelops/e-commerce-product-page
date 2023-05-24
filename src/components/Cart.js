import React from 'react';
import Delete from '../assets/images/icon-delete.svg';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);
	const dispatch = useDispatch();

	const handleRemoveCart = function () {
		dispatch(clearCart());
	};

	return (
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
							<img src={Delete} alt='delete' className='mt-2 cursor-pointer' />
						</button>
					</div>
					<button className='w-full capitalize font-bold text-White-1 bg-orange-1 rounded-md py-3 md:py-2 hover:opacity-50 duration-200'>
						checkout
					</button>
				</>
			)}
		</article>
	);
};

export default Cart;
