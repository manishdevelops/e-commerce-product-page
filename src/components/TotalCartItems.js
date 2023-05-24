import { useSelector } from 'react-redux';

const TotalCartItems = () => {
	const cartItems = useSelector((store) => store.cart.items);

	return (
		<>
			{cartItems?.[0]?.totalItem > 0 && (
				<p className='relative left-8 top-[-.6rem] text-xs font-700 text-White-1 bg-orange-1 rounded-2xl px-[7px]'>
					{cartItems?.[0]?.totalItem}
				</p>
			)}
		</>
	);
};

export default TotalCartItems;
