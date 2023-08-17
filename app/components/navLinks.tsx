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
					"dark:text-gray-300 text-gray-500 underline decoration-logo-blue text-xl font-light hover:underline hover:-translate-y-1 hover:text-logo-blue " +
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
			<ul className="hidden md:flex gap-10 items-center">
				<NavLink href="/#intro" label="Intro" />
				<NavLink href="/#about" label="About" />
				<NavLink href="/#work" label="Work" />
				<NavLink href="/#contact" label="Contact" />
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
					className="fixed md:hidden top-0 right-0 h-full w-full"
				></div>
			)}
			<ul
				id="nav-links"
				className={`md:hidden fixed top-0 right-0 h-full dark:bg-black bg-white w-2/3 flex flex-col gap-10 items-center transition-transform ${
					open
						? "transform translate-x-0"
						: "transform translate-x-full"
				}`}
			>
				<button
					className="absolute top-12 right-10"
					onClick={() => setOpen(false)}
				>
					<RxCross1 size={30} />
				</button>
				<NavLink className="mt-20" href="/#intro" label="Intro" />
				<NavLink href="/#about" label="About" />
				<NavLink href="/#work" label="Work" />
				<NavLink href="/#contact" label="Contact" />
			</ul>
		</>
	);
}
