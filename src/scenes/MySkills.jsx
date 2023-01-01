import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";


const MySkills = () => {
	const isAboveLarge = useMediaQuery("(min-width: 990px)");
	return (
		<>
			<section id="skills" className="pt-5 mb-20 ">
				{/* HEADER AND IMAGE SECTION */}
				<div className="lg:flex md:justify-between  md:gap-16 mt-3 md:mt-12">
					<motion.div
						className="lg:w-1/3 "
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<p className="font-playfair font-semibold text-3xl mb-2">
							SKILLS <span className="text-red"> & TECHNOLOGIES</span>
						</p>
						<LineGradient width="w-1/3" />
						<p className="mt-5 mb-7 text-xs">
							I am proficient in Bootstrap, Tailwind CSS and React Js. I am always seeking to learn and stay up-to-date with the latest frontend development technologies and techniques.
						</p>
						<div className="flex gap-2 justify-between">
							<div>
								<div className="flex gap-2 ">
									<img src="assets/GreenTick.png" alt="tick" className="w-6 h-5" />
									<p>HTML</p>
								</div>
								<div className="flex  gap-2 ">
									<img src="assets/GreenTick.png" alt="tick" className="w-6 h-5" />
									<p>CSS</p>
								</div>
								<div className="flex  gap-2 ">
									<img src="assets/GreenTick.png" alt="tick" className="w-6 h-5" />
									<p>JAVASCRIPT</p>
								</div>
								<div className="flex  gap-2 ">
									<img src="assets/GreenTick.png" alt="tick" className="w-6 h-5" />
									<p>REACT JS</p>
								</div>

							</div>

							<div>
								<div className="flex  gap-2 ">
									<img src="assets/GreenTick.png" alt="tick" className="w-6 h-5" />
									<p>BOOTSTRAP</p>
								</div>

								<div className="flex  gap-2 ">
									<img src="assets/GreenTick.png" alt="tick" className="w-6 h-5" />
									<p>TAILWIND CSS</p>
								</div>
								<div className="flex  gap-2 ">
									<img src="assets/GreenTick.png" alt="tick" className="w-6 h-5" />
									<p>CHAKRA UI</p>
								</div>
								<div className="flex  gap-2 ">
									<img src="assets/GreenTick.png" alt="tick" className="w-6 h-5" />
									<p>PYTHON</p>
								</div>
							</div>



						</div>
					</motion.div>


					<div className="mt-16 md:mt-0">
						{isAboveLarge ? (
							<div
								className="relative z-0 ml-20 before:absolute before:-top-[-15] before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
							>
								<img
									alt="skills"
									className="z-10 pt-0 md:pt-10"
									src="assets/skills-image.png"
								/>
							</div>
						) : (
							<img alt="skills" className="z-10 pt-0 md:pt-10" src="assets/skills-image.png" />
						)}
					</div>
				</div>

				{/* SKILLS */}
			</section>
			<LineGradient />
		</>
	);
};

export default MySkills;
