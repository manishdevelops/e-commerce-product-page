import React, { useState, useContext } from 'react';
import AddItemButton from './AddItemButton';
import { addItem, clearCart } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
import UserContext from '../utils/UserContext.js';
import AddCartButton from './AddCartButton';
import PriceDetail from './PriceDetail';

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
			<PriceDetail />
			<div className='md:flex md:justify-between'>
				<AddItemButton totalItem={totalItem} setTotalItem={setTotalItem} />
				<AddCartButton handleAddItem={handleAddItem} />
			</div>
		</section>
	);
};

export default ProductInfo;
