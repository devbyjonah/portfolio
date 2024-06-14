"use client";

import Link from "next/link";

import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export default function NavLinks() {
	const [open, setOpen] = useState(false);

	function NavLink({
		href,
		label,
		className,
	}: {
		href: string;
		label: string;
		className?: string;
	}) {
		return (
			<Link
				onClick={() => setOpen(false)}
				className={
					" decoration-logo-blue text-xl font-semibold hover:underline hover:text-logo-blue " +
					className
				}
				href={href}
			>
				{label}
			</Link>
		);
	}

	return (
		<>
			<ul className="hidden sm:flex gap-10 items-center">
				<NavLink href="/#intro" label="Intro" />
				<NavLink href="/#about" label="About" />
				<NavLink href="/#work" label="Work" />
				<NavLink href="/#contact" label="Contact" />
			</ul>
			<button
				onClick={() => {
					setOpen((prev) => !prev);
				}}
				className="sm:hidden"
			>
				{!open ? (
					<RxHamburgerMenu className="hover:scale-110" size={30} />
				) : (
					<RxCross1 className="hover:scale-110" size={30} />
				)}
			</button>

			<ul
				id="nav-links"
				className={`bg-light-bg dark:bg-dark-bg md:hidden fixed top-[7rem] right-0 h-full w-full flex flex-col gap-10 items-center transition-transform ${
					open ? "transform translate-x-0" : "transform translate-x-full"
				}`}
			>
				<NavLink className="mt-20" href="/#intro" label="Intro" />
				<NavLink href="/#about" label="About" />
				<NavLink href="/#work" label="Work" />
				<NavLink href="/#contact" label="Contact" />
			</ul>
		</>
	);
}
