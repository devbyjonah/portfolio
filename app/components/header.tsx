import ThemeToggle from "./themeToggle";
import NavLinks from "./navLinks";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="animate-slidein z-10 fixed top-0 right-0 w-full dark:bg-black bg-white">
			<div className="max-w-7xl mx-auto flex justify-between p-6">
				<div className="flex gap-6">
					<Link href="/#intro">
						<Image
							src="/profile.png"
							alt="devbyjonah logo"
							width={75}
							height={75}
						/>
					</Link>
					<ThemeToggle />
				</div>
				<NavLinks />
			</div>
		</header>
	);
}
