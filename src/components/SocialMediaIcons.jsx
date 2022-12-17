
const SocialMediaIcons = () => {


	return (
		<div className="flex justify-center md:justify-start my-5 gap-7">
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://www.linkedin.com/in/ikpa-precious-475675166/"
				target='_blank'
				rel='noreferrer'
			>
				<img
					alt="linkedin-link"
					src="../../assets/linkedin.png"
				/>
			</a>
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://twitter.com/IkpaPrecious2"
				target='_blank'
				rel='noreferrer'
			>
				<img
					alt="twitter-link"
					src="../../assets/twitter.png"
				/>
			</a>
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://web.facebook.com/ikpa.precious"
				target='_blank'
				rel='noreferrer'
			>
				<img
					alt="facebook-link"
					src="../../assets/facebook.png"
				/>
			</a>
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://github.com/Masterprecie"
				target='_blank'
				rel='noreferrer'
			>
				<img
					alt="github-link"
					src="../../assets/github.png"
				/>
			</a>

		</div>
	)
}

export default SocialMediaIcons;