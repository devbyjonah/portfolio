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
			className="bg-logo-blue text-dark-text transition-all rounded h-12 w-12 my-auto animate-pulseShadow"
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
