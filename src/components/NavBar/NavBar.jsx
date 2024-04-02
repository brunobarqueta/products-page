import MidSection from "./MidSection";
import Navigation from "./Navigation";
import Welcome from "./Welcome";

const NavBar = () => {
	return (
		<div className="w-full text-white font-inter">
			<Welcome />
			<MidSection />
			<Navigation />
		</div>
	);
};

export default NavBar;
