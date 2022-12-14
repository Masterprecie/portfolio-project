import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
	return (
		<>
			<section id="testimonials" className="pt-10 pb-16">
				{/* HEADING */}
				<motion.div
					className="lg:w-1/3  lg:text-left"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className="font-playfair font-semibold text-3xl mb-2 text-red">
						TESTIMONIALS
					</p>
					<LineGradient width="w-1/3" />
					<p className="mt-5 text-xs">
						Here's What People are Saying About My Work. Aliquam aliquet integer
						ut fames odio in at. At magna ornare dictum lectus.
					</p>
				</motion.div>

				{/* TESTIMONIALS */}
				<div className="lg:flex md:flex-row md:justify-between gap-8">
					<motion.div
						className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end pl-16 pr-16 pb-8 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 "
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.6 }}
						variants={{
							hidden: { opacity: 0, scale: 0.8 },
							visible: { opacity: 1, scale: 1 },
						}}
					>
						<img src="assets/person-2.jpg"
							alt="profile"
							className='hover:filter rounded-[500px] transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]'
						/>


						<p className="font-playfair text-6xl">“</p>
						<p className="text-center text-sm">
							Aliquam aliquet integer ut fames odio in at. At magna ornare dictum
							lectus.
						</p>

					</motion.div>

					<motion.div
						className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end pl-16 pr-16 pb-8 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						variants={{
							hidden: { opacity: 0, scale: 0.8 },
							visible: { opacity: 1, scale: 1 },
						}}
					>
						<img src="assets/person-2.jpg"
							alt="profile"
							className='hover:filter rounded-[700px] transition duration-500 z-10 w-full max-w-[100%]'
						/>

						<p className="font-playfair text-6xl">“</p>
						<p className="text-center text-sm">
							I am Timothy Alabi an experienced frontend developer, working with Precious was quite interesting and fun, he has the ability to see through things and he's a good team player. I looking forward to working with him on future projects
						</p>
					</motion.div>

					<motion.div
						className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end pl-16 pr-16 pb-8 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 "
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						variants={{
							hidden: { opacity: 0, scale: 0.8 },
							visible: { opacity: 1, scale: 1 },
						}}
					>
						<img src="assets/person-2.jpg"
							alt="profile"
							className='hover:filter rounded-[500px] transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]'
						/>

						<p className="font-playfair text-6xl">“</p>
						<p className="text-center text-sm">
							Aliquam aliquet integer ut fames odio in at. At magna ornare dictum
							lectus.
						</p>
					</motion.div>
				</div>
			</section>
			<LineGradient />
		</>
	);
};

export default Testimonials;