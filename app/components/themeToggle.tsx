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
			className="bg-gray-400 rounded h-12 w-12 my-auto drop-shadow-logo-blue"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
		>
			{" "}
			{theme === "light" ? (
				<RxMoon className="mx-auto" size={30} />
			) : (
				<RxSun className="mx-auto" size={30} />
			)}
		</button>
	);
}
