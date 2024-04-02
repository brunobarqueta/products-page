const ContactInfo = ({ title, details }) => {
	return (
	  <div className="space-y-3">
		<h3 className="text-md md:text-2xl underline underline-offset-1 md:no-underline font-medium uppercase">{title}</h3>
		{details.map((detail, index) => (
		  <div key={index} className="hidden md:flex items-center space-x-2">
			<img src={detail.icon} alt={detail.alt} className="w-6" />
			<span>{detail.text}</span>
		  </div>
		))}
	  </div>
	);
  };
  
  export default ContactInfo;