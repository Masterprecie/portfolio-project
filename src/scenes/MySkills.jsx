import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skillsImage from '../assets/skills-image.png'

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
							MY <span className="text-red">SKILLS</span>
						</p>
						<LineGradient width="w-1/3" />
						<p className="mt-5 mb-7 text-xs">
							Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
							fames odio in at.
						</p>
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
									src={skillsImage}
								/>
							</div>
						) : (
							<img alt="skills" className="z-10 pt-0 md:pt-10" src={skillsImage} />
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