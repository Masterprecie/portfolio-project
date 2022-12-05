import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
	return (
		<footer className=" bg-red py-5">
			<div className="w-10/12 mx-auto">
				<SocialMediaIcons />
				<div className="md:flex justify-center md:justify-between text-center ">
					<p className="font-playfair font-semibold text-2xl text-yellow">
						PRECIOUS IKPA
					</p>
					<p className="font-playfair text-md text-yellow">
						©2022 Presh. All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;