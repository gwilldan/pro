import { easeInOut, motion } from "framer-motion";

const Loader = () => {
	return (
		<main className=" h-screen w-screen overflow-hidden fixed top-0 bg-white z-10 grid place-content-center">
			<motion.div
				initial={{
					opacity: 0,
					scale: 0.75,
				}}
				animate={{
					opacity: 1,
					scale: 1,
				}}
				transition={{
					ease: easeInOut,
				}}
				className="h-[250px] w-[250px]"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
					<radialGradient
						id="a11"
						cx=".66"
						fx=".66"
						cy=".3125"
						fy=".3125"
						gradientTransform="scale(1.5)"
					>
						<stop offset="0" stop-color="#0C0217"></stop>
						<stop offset=".3" stop-color="#0C0217" stop-opacity=".9"></stop>
						<stop offset=".6" stop-color="#0C0217" stop-opacity=".6"></stop>
						<stop offset=".8" stop-color="#0C0217" stop-opacity=".3"></stop>
						<stop offset="1" stop-color="#0C0217" stop-opacity="0"></stop>
					</radialGradient>
					<circle
						transform-origin="center"
						fill="none"
						stroke="url(#a11)"
						stroke-width="14"
						stroke-linecap="round"
						stroke-dasharray="200 1000"
						stroke-dashoffset="0"
						cx="100"
						cy="100"
						r="70"
					>
						<animateTransform
							type="rotate"
							attributeName="transform"
							calcMode="spline"
							dur="1"
							values="0;360"
							keyTimes="0;1"
							keySplines=" 1 1 0 0"
							repeatCount="indefinite"
						></animateTransform>
					</circle>
					<circle
						transform-origin="center"
						fill="none"
						opacity=".2"
						stroke="#0C0217"
						stroke-width="14"
						stroke-linecap="round"
						cx="100"
						cy="100"
						r="70"
					></circle>
				</svg>
			</motion.div>
		</main>
	);
};

export default Loader;
