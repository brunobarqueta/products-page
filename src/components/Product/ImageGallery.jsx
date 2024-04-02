import { ChevronLeft, ChevronRight } from "lucide-react";

import mainTv1 from '../../assets/main-tv1.png'
import mainTv2 from '../../assets/main-tv2.png'
import mainTv3 from '../../assets/main-tv3.png'
import mainTv4 from '../../assets/main-tv4.png'

const ImageGallery = () => {
	const images = [
	  { src: mainTv1, alt: "TV image1" },
	  { src: mainTv2, alt: "TV image2" },
	  { src: mainTv3, alt: "TV image3" },
	  { src: mainTv4, alt: "TV image4" },
	];
  
	return (
	  <div className="flex flex-row md:flex-col gap-6 items-center justify-center md:justify-normal order-2 md:order-1">
		<div className="md:hidden bg-gray-300 w-6 h-6 p-1 flex items-center justify-center text-white">
		  <ChevronLeft className="w-4 h-4"/>
		</div>
  
		{images.map((image, index) => (
		  <div key={index} className={`border-2 ${index === 0 ? 'border-text-red-600' : 'border-gray-300'} ${index === 3 && 'hidden md:flex'} flex justify-center items-center w-20 h-20 md:w-32 md:h-32`}>
			<img src={image.src} alt={image.alt} className="object-contain h-full" />
		  </div>
		))}
  
		<div className="md:hidden bg-red-600 w-6 h-6 p-1 flex items-center justify-center text-white">
		  <ChevronRight className="w-4 h-4" />
		</div>
	  </div>
	);
  };
  
  export default ImageGallery;