import ThemeToggle from "./themeToggle";
import NavLinks from "./navLinks";

export default function Header() {
	return (
		<header className="backdrop-blur bg-light-bg/90 dark:bg-dark-bg/90 animate-slidein z-10 fixed top-0 right-0 w-full">
			<div className="max-w-7xl mx-auto flex justify-between p-4">
				<div className="flex gap-6">
					<ThemeToggle />
				</div>
				<NavLinks />
			</div>
		</header>
	);
}
