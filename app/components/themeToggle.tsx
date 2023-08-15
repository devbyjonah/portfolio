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
			className="hover:scale-125"
			onClick={() => {
				setTheme(theme === "light" ? "dark" : "light");
			}}
		>
			{theme === "light" ? <RxMoon size={30} /> : <RxSun size={30} />}
		</button>
	);
}
