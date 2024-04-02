import AboutUsColumn from "./AboutUsColumn";
import ContactInfo from "./ContactInfo";
import FooterInfoSection from "./FooterInfoSection";
import LegalSection from "./LegalSection";
import NewsletterSection from "./NewsletterSection";
import React from "react";
import location from "../../assets/location.svg";
import phone from "../../assets/phone.svg";

const Footer = () => {
	const aboutUsLinks = ["About", "Delivery information", "Privacy Policy", "Sales", "Terms & Conditions", "EMI Payment"];
	const accountLinks = ["My Account", "My Orders", "Returns", "Shipping", "Wishlist", "Account Details"];
	const storeLinks = ["Affiliate", "Discounts", "Sale", "Contact", "All Collections"];
	const contactDetails = [
		{ icon: location, alt: "Location", text: "California, USA" },
		{ icon: phone, alt: "Phone", text: "+12012987481" },
	];

	return (
		<div className="font-['Inter']">
			<div className="relative flex flex-col items-start w-full bg-newsletter-hero bg-cover bg-no-repeat">
				<NewsletterSection />
			</div>
			<div className="bg-gray-800 text-white p-8 md:p-16">
				<div className="flex flex-col lg:flex-row justify-between space-y-3 lg:space-y-0">
					<AboutUsColumn />
					<FooterInfoSection title="Information" links={aboutUsLinks.map((link) => ({ text: link }))} />
					<FooterInfoSection title="Account" links={accountLinks.map((link) => ({ text: link }))} />
					<FooterInfoSection title="Store" links={storeLinks.map((link) => ({ text: link }))} />
					<ContactInfo title="Contact Us" details={contactDetails} />
				</div>
				<hr className="hidden md:block border-t border-gray-300 mt-24" />
			</div>
			<LegalSection />
		</div>
	);
};

export default Footer;
