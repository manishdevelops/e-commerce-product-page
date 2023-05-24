import plusIcon from '../assets/images/icon-plus.svg';
import minusIcon from '../assets/images/icon-minus.svg';

const AddItemButton = ({ totalItem, setTotalItem }) => {
	return (
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
	);
};

export default AddItemButton;
