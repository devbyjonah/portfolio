"use client";

import { useTheme } from "next-themes";
import { RxSun, RxMoon } from "react-icons/rx";

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const isDarkMode = theme === "dark";

	return (
		<button
			aria-label="Toggle Theme"
			aria-pressed={isDarkMode}
			className="hover:scale-105 transition text-light-text/80 text-3xl flex justify-center items-center rounded-2xl w-12 h-12 bg-gradient-to-tr p-8 to-dark-text from-logo-blue drop-shadow-logo-blue"
			onClick={() => setTheme(isDarkMode ? "light" : "dark")}
		>
			<div>
				<RxMoon className="hidden dark:block" size={35} />
				<RxSun className="dark:hidden" size={35} />
				<span className="sr-only">
					{isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
				</span>
			</div>
		</button>
	);
}
