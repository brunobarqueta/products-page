const FooterInfoSection = ({ title, links }) => {
	return (
	  <div className="space-y-3">
		<h3 className="text-md md:text-2xl font-medium underline underline-offset-1 md:no-underline uppercase">{title}</h3>
		{links.map((link, index) => (
		  <p key={index} className="hidden md:block text-md">
			{link.text}
		  </p>
		))}
	  </div>
	);
  };
  
  export default FooterInfoSection;