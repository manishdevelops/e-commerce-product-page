import cartIcon from '../assets/images/icon-cart.svg';

const AddCartButton = ({ handleAddItem }) => {
	return (
		<button
			className='flex duration-200 text-White-1 bg-orange-1 font-700 text-xl md:text-sm w-full px-4 justify-center py-4 rounded-md md:w-2/3 md:h-[3.5rem] hover:opacity-50'
			onClick={handleAddItem}
		>
			<img src={cartIcon} alt='cart' className='mr-4 fill-slate-50' />
			Add to cart
		</button>
	);
};

export default AddCartButton;
