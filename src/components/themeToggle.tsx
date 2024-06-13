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
			className="hover:scale-105 transition text-light-text/80 text-3xl flex justify-center items-center rounded-2xl w-12 h-12 bg-gradient-to-tr p-8 to-dark-text from-logo-blue drop-shadow-logo-blue"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
		>
			<div>
				<RxMoon className="hidden dark:block" size={35} />
				<RxSun className="dark:hidden" size={35} />
			</div>
		</button>
	);
}
