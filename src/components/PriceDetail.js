const PriceDetail = () => {
	return (
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
	);
};

export default PriceDetail;
