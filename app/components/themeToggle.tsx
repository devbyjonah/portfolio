"use client";

import { useState, useEffect } from "react";

import { useTheme } from "next-themes";
import { RxSun, RxMoon } from "react-icons/rx";

export default function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
		return () => {
			setMounted(false);
		};
	}, []);

	if (!mounted) return null;

	const sharedClasses = "rounded p-6 cursor-pointer";

	return (
		<button
			className="bg-black dark:bg-white rounded h-12 w-12 my-auto dark:drop-shadow-yellow drop-shadow-gray"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
		>
			{" "}
			{theme === "light" ? (
				<RxMoon className="mx-auto bg-black text-white" size={30} />
			) : (
				<RxSun className="mx-auto bg-white text-black" size={30} />
			)}
		</button>
	);
}
