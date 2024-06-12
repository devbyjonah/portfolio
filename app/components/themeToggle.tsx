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

	return (
		<button
			className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-all rounded h-12 w-12 my-auto drop-shadow-logo-blue"
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
