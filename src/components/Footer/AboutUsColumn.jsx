import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import messenger from '../../assets/messenger.svg'
import youtube from '../../assets/youtube.svg'

const AboutUsColumn = () => {
	return (
	  <div className="space-y-3 w-full md:w-1/3 pr-8">
		<h3 className="text-md md:text-2xl underline underline-offset-2 md:no-underline font-medium uppercase">About Us</h3>
		<p className="hidden md:block text-md leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec laoreet.</p>
		<div className="hidden md:flex space-x-4">
		  <a href="#" className="block w-8">
			<img src={facebook} alt="Facebook" />
		  </a>
		  <a href="#" className="block w-8">
			<img src={messenger} alt="Messenger" />
		  </a>
		  <a href="#" className="block w-8">
			<img src={instagram} alt="Instagram" />
		  </a>
		  <a href="#" className="block w-8">
			<img src={youtube} alt="YouTube" />
		  </a>
		</div>
	  </div>
	);
  };
  
  export default AboutUsColumn;