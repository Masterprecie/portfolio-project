import LineGradient from "../components/LineGradient";
//import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";


const MyProjects = () => {
	//const isAboveLarge = useMediaQuery("(min-width: 990px)");
	return (
		<>
			<section id="skills" className="pt-5 mb-20 ">
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
						<p className="font-playfair font-semibold text-4xl">
							<span className="text-red">PRO</span>JECTS
						</p>
						<div className="flex justify-center mt-3">
							<LineGradient width="w-1/4" />
						</div>
					</div>
					<div className="mt-5 mb-5 w-full">

						<p >
							Checkout My Recent Projects
						</p>
					</div>
				</motion.div>

				{/* PROJECTS */}

				<div className="grid lg:grid-cols-3 gap-4">
					<div className="shadow-sm bg-slate-400 p-3 hover:opacity-70 transition duration-500">
						<div className="">
							<a
								target="_blank" rel='noreferrer'
								href="https://master-admin-dashboard.netlify.app/">
								<img src="assets/projectDashboard.png" alt="" className="w-fit" />
							</a>

						</div>
						<div className="bg-slate-700">
							<p className="text-white p-2 text-center">An Admin Dashboard Page </p>
						</div>
					</div>
					<div className="shadow-sm  bg-slate-400 p-3 hover:opacity-70 transition duration-500">
						<div className="w-full">
							<a
								target="_blank" rel='noreferrer'
								href="https://master-metabnb.netlify.app/">
								<img src="assets/projectMeta1.png" alt="" />
							</a>

						</div>
						<div className="bg-slate-700">
							<p className="text-white p-2 text-center">MetaBnb website</p>
						</div>
					</div>
					<div className="shadow-sm bg-slate-400 p-3 hover:opacity-70 transition duration-500">
						<div className="w-full">
							<a
								target="_blank" rel='noreferrer'
								href="https://master-mini-shopping-cart.netlify.app/">
								<img src="assets/projectShoppingCart.png" alt="" />
							</a>

						</div>
						<div className="bg-slate-700">
							<p className="text-white p-2 text-center">A shopping bag website</p>
						</div>
					</div>
					<div className="shadow-sm  bg-slate-400 p-3 hover:opacity-70 transition duration-500">
						<div className="w-full">
							<a
								target="_blank" rel='noreferrer'
								href="https://presh-blog.netlify.app/">
								<img src="assets/projectBlog.png" alt="" />
							</a>

						</div>
						<div className="bg-slate-700">
							<p className="text-white p-2 text-center">Blog Page </p>
						</div>
					</div>
					<div className="shadow-sm bg-slate-400 p-3 hover:opacity-70 transition duration-500">
						<div className="w-full">
							<a
								target="_blank" rel='noreferrer'
								href="https://react-second-project2.netlify.app/">
								<img src="assets/projectLogin.png" alt="" />
							</a>

						</div>
						<div className="bg-slate-700">
							<p className="text-white p-2 text-center">Login and Signup page</p>
						</div>
					</div>
					<div className="shadow-sm  bg-slate-400 p-3 hover:opacity-70 transition duration-500">
						<div className="w-full">
							<a
								target="_blank" rel='noreferrer'
								href="https://masterprecie.github.io/E-commerce/">
								<img src="assets/projectE-commerce.png" alt="" />
							</a>

						</div>
						<div className="bg-slate-700">
							<p className="text-white p-2 text-center">An E-commerce website</p>
						</div>
					</div>
					<div className="shadow-sm  bg-slate-400 p-3 hover:opacity-70 transition duration-500">
						<div className="w-full">
							<a
								target="_blank" rel='noreferrer'
								href="https://crosson-design.netlify.app/">
								<img src="assets/projectCrosson.png" alt="" />
							</a>

						</div>
						<div className="bg-slate-700">
							<p className="text-white p-2 text-center">The Crosson Website</p>
						</div>
					</div>
					<div className="shadow-sm bg-slate-400 p-3 hover:opacity-70 transition duration-500">
						<div className="w-full">
							<a
								target="_blank" rel='noreferrer'
								href="https://university-webdesign.netlify.app/">
								<img src="assets/projectUni.png" alt="" />
							</a>

						</div>
						<div className="bg-slate-700">
							<p className="text-white p-2 text-center">University Website</p>
						</div>
					</div>
					<div className="shadow-sm bg-slate-400 p-3 hover:opacity-70 transition duration-500">
						<div className="w-full">
							<a
								target="_blank" rel='noreferrer'
								href="https://masterprecie.github.io/Blogr/">
								<img src="assets/projectBlogr.png" alt="" />
							</a>

						</div>
						<div className="bg-slate-700">
							<p className="text-white p-2 text-center">A Blogr Landing Page</p>
						</div>
					</div>
				</div>
			</section>
			<LineGradient />
		</>
	);
};

export default MyProjects;
