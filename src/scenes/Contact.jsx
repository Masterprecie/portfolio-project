import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import contactImage from '../assets/contact-image.jpeg'

const Contact = () => {
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	const onSubmit = async (e) => {
		console.log("~ e", e);
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	return (
		<>
			<section id="contact" className="contact py-10">
				{/* HEADINGS */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: 50 },
						visible: { opacity: 1, x: 0 },
					}}
					className="flex justify-end w-full"
				>
					<div>
						<p className="font-playfair font-semibold text-3xl">
							<span className="text-yellow">CONTACT ME</span> TO GET STARTED
						</p>
						<div className="flex md:justify-end my-5">
							<LineGradient width="w-1/2" />
						</div>
					</div>
				</motion.div>

				{/* FORM & IMAGE */}
				<div className="lg:flex md:flex-row md:justify-between gap-16 mt-5">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
						className="flex justify-center"
					>
						<img src={contactImage} alt="contact" />
					</motion.div>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
						className="basis-1/2 mt-10 md:mt-10 lg:mt-0"
					>
						<form
							target="_blank"
							onSubmit={onSubmit}
							action="https://formsubmit.co/6b05701e1b854b052268554dbcc1fd87"
							method="POST"
						>
							<input
								className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
								type="text"
								placeholder="Name"
								{...register("name", {
									required: true,
									maxLength: 100,
								})}
							/>
							{errors.name && (
								<p className="text-red mt-1">
									{errors.name.type === "required" && "This field is required."}
									{errors.name.type === "maxLength" && "Max length is 100 char."}
								</p>
							)}

							<input
								className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
								type="text"
								placeholder="Email"
								{...register("email", {
									required: true,
									pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								})}
							/>
							{errors.email && (
								<p className="text-red mt-1">
									{errors.email.type === "required" && "This field is required."}
									{errors.email.type === "pattern" && "Invalid email address."}
								</p>
							)}

							<textarea
								className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
								name="message"
								placeholder="Message"
								rows="4"
								cols="50"
								{...register("message", {
									required: true,
									maxLength: 2000,
								})}
							/>
							{errors.message && (
								<p className="text-red mt-1">
									{errors.message.type === "required" &&
										"This field is required."}
									{errors.message.type === "maxLength" &&
										"Max length is 2000 char."}
								</p>
							)}

							<button
								className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
								type="submit"
							>
								SEND ME A MESSAGE
							</button>
						</form>
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default Contact;