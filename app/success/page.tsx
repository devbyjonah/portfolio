import Link from "next/link";

export default function Success() {
	return (
		<div className="w-full min-h-screen flex flex-col justify-center items-center gap-4 p-8 md:p-20 text-center">
			<h1 className="font-semibold text-3xl">
				Thank you for your&nbsp;message!
			</h1>
			<h2 className="text-xl">
				I&apos;ll get back to you{" "}
				<span className="whitespace-nowrap">as soon as possible.</span>
			</h2>
			<Link
				className="md:w-1/2 flex-shrink-0 whitespace-nowrap animate-pulseShadow hover:drop-shadow-logo-blue my-4 md:my-0 text-xl flex items-center font-bold rounded-2xl px-8 h-12 max-w-fit bg-gradient-to-tr to-logo-blue text-gray-600 dark:text-dark-bg from-light-bg"
				href="/"
			>
				Return home
			</Link>
		</div>
	);
}
