import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const projectVariant = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
	const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
	const projectTitle = title.split(" ").join("-").toLowerCase();

	return (
		<motion.div variants={projectVariant} className="relative">
			<div className={overlayStyles}>
				<p className="text-1xl font-playfair">{title}</p>
				<p className="mt-3 text-xs">
					Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
					porttitor accumsan tincidunt.
				</p>
			</div>
			<img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
		</motion.div>
	);
};

const Projects = () => {
	return (
		<>
			<section id="projects" className="pt-10 pb-20">
				{/* HEADINGS */}
				<motion.div
					className="lg:w-2/5 mx-auto text-center"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: -50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div>
						<p className="font-playfair font-semibold text-3xl">
							<span className="text-red">PRO</span>JECTS
						</p>
						<div className="flex justify-center mt-2">
							<LineGradient width="w-2/4" />
						</div>
					</div>
					<p className="mt-5 mb-10 text-xs">
						Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
						fames odio in at. At magna ornare dictum lectus. Purus massa morbi
						purus nec eget eleifend ut elit.
					</p>
				</motion.div>

				{/* PROJECTS */}
				<div className="flex justify-center">
					<motion.div
						className="ss:grid ss:grid-cols-3"
						variants={container}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
					>
						{/* ROW 1 */}
						<div
							className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
						>
							BEAUTIFUL USER INTERFACES
						</div>
						<Project title="Project 1" />

						<div
							className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
						>
							SMOOTH USER EXPERIENCE
						</div>
					</motion.div>
				</div>
			</section>
			<LineGradient />
		</>
	);
};

export default Projects;