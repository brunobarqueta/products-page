import halfStar from '../../assets/half-star.svg'
import star from '../../assets/star.svg'

const Rating = () => {
	return (
		<div className="flex gap-2 items-center mb-2 mt-1">
			<img src={star} alt="Star" className="w-3 md:w-8" />
			<img src={star} alt="Star 2" className="w-3 md:w-8" />
			<img src={star} alt="Star 3" className="w-3 md:w-8" />
			<img src={halfStar} alt="Star Half" className="w-3 md:w-8" />
		</div>
	);
};

export default Rating;
