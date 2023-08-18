"use client";

import { useEffect } from "react";

export default function Observer() {
	useEffect(() => {
		const targets = document.querySelectorAll(".on-scroll");
		const callback: IntersectionObserverCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("animate-fadeUp");
				} else {
					entry.target.classList.remove("animate-fadeUp");
				}
			});
		};
		const observer = new IntersectionObserver(callback);
		targets.forEach((target) => {
			observer.observe(target);
		});
	});

	return <></>;
}
