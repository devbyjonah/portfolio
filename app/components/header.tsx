import ThemeToggle from "./themeToggle";
import NavLinks from "./navLinks";

import Image from "next/image";

export default function Header() {
	return (
		<div className="fixed w-full dark:bg-black bg-white">
			<div className="max-w-7xl mx-auto flex justify-between p-6">
				<div className="flex gap-10">
					<Image
						src="/profile.png"
						alt="devbyjonah logo"
						width={75}
						height={75}
					/>
					<ThemeToggle />
				</div>
				<NavLinks />
			</div>
		</div>
	);
}
