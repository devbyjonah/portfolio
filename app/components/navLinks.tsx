"use client";

import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export default function NavLinks() {
	const [open, setOpen] = useState(false);

	function NavLink({ href, label }: { href: string; label: string }) {
		return (
			<a
				onClick={() => setOpen(false)}
				className="text-xl font-light hover:underline"
				href={href}
			>
				{label}
			</a>
		);
	}

	return (
		<>
			<ul className="hidden md:flex gap-10 items-center">
				<NavLink href="#about" label="About" />
				<NavLink href="#experience" label="Experience" />
				<NavLink href="#work" label="Work" />
				<NavLink href="#contact" label="Contact" />
			</ul>
			<button
				onClick={() => setOpen((cur) => !cur)}
				className={open ? "hidden" : "md:hidden"}
			>
				<RxHamburgerMenu className="hover:scale-125" size={30} />
			</button>
			{open && (
				<div
					id="blur-overlay"
					className="md:hidden fixed top-0 right-0 h-full w-full flex justify-end"
				>
					<ul className="dark:bg-black bg-white w-2/3 flex flex-col gap-10 items-center mt-20">
						<button
							className="absolute top-12 right-10"
							onClick={() => setOpen(false)}
						>
							<RxCross1 size={30} />
						</button>
						<NavLink href="#about" label="About" />
						<NavLink href="#experience" label="Experience" />
						<NavLink href="#work" label="Work" />
						<NavLink href="#contact" label="Contact" />
					</ul>
				</div>
			)}
		</>
	);
}
