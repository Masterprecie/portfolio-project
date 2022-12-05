import linkedIn from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import github from '../assets/github.png'

const SocialMediaIcons = () => {


	return (
		<div className="flex justify-center md:justify-start my-10 gap-7">
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://www.linkedin.com/in/ikpa-precious-475675166/"
				target='_blank'
				rel='noreferrer'
			>
				<img
					alt="linkedin-link"
					src={linkedIn}
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
					src={twitter}
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
					src={facebook}
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
					src={github}
				/>
			</a>

		</div>
	)
}

export default SocialMediaIcons