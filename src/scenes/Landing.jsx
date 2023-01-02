import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SocialMediaIcons from '../components/SocialMediaIcons'
import LineGradient from '../components/LineGradient'


const Landing = ({ setSelectedPage }) => {

	const isAboveMediumScreens = useMediaQuery('(min-width:990px)')



	return (
		<>
			<section id='home' className='lg:flex lg:justify-between md:items-center md:h-full gap-16 py-2'>

				{/* IMAGE SECTION */}

				<div className='md:order-2 flex justify-center basis-1/2 z-10 mt-8 md:mt-32'>
					{isAboveMediumScreens ? (
						<div
							className="relative z-0 ml-20 before:absolute before:-top-7 before:-left-7 before:rounded-t-[400px] before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
						>
							<img src="assets/DP8.jpg"
								alt="profile"
								className='hover:filter rounded-t-[400px] hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]'
							/>
						</div>
					) : (
						<img src="assets/DP8.jpg"
							alt="profile"
							className='hover:filter rounded-t-[400px] hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]'
						/>
					)}
				</div>

				{/* MAIN SECTION */}

				<div className="z-30 basis-1/2 mt-12 md:mt-32">
					{/* HEADINGS */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<p className="text-6xl font-playfair z-10 text-center lg:text-start md:text-center">
							Precious{"   "}
							<span
								className="md:relative md:text-deep-blue md:font-semibold z-20 md:before:content-brush
              before:absolute before:-left-[25px] before:-top-[60px] before:z-[-1]"
							>
								Ikpa
							</span>
						</p>

						<p className="mt-10 mb-7 text-sm text-center lg:text-start md:text-center">
							Hi, I am a front-end web developer. I specialize in building and designing user interfaces for websites and web applications.  I have a passion for creating clean, intuitive, and visually appealing designs that provide a great user experience.
						</p>
					</motion.div>

					{/* CALL TO ACTION */}
					<motion.div
						className='flex mt-5 lg:justify-start md:justify-center'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 }
						}}
					>

						<a
							className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500 '
							href="https://drive.google.com/file/d/1tNF5FVIXYJsM0U_3X4pLBZQzAEss2k8x/view?usp=share_link"							
							target="_blank" rel='noreferrer'
						>
							Download CV

						</a>

						<AnchorLink

							className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5'
							onClick={() => setSelectedPage('contact')}
							href='#contact'
						>
							<div
								className='bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10'
							>
								Let's talk
							</div>
						</AnchorLink>
					</motion.div>
					<motion.div
						className='flex mt-5 justify-center lg:justify-start md:justify-center'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 }
						}}
					>
						<SocialMediaIcons />
					</motion.div>
				</div>
			</section >

			<LineGradient />
		</>
	)
}

export default Landing;