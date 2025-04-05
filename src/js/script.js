"use strict";

import "/src/sass/style.scss";

document.addEventListener("DOMContentLoaded", () => {
	const headerNav = document.querySelector(".header");
	const burger = document.querySelector(".burger");

	burger.addEventListener("click", () => {
		headerNav.classList.toggle("header__navigation_active");
	});

	const profilesContainers = document.querySelectorAll(".profiles__items");

	profilesContainers.forEach((profilesContainer) => {
		const profilesChildren = [...profilesContainer.children];

		for (let i = 0; i < 2; i++) {
			profilesChildren.forEach((item) => {
				profilesContainer.appendChild(item.cloneNode(true));
			});
		}

		profilesContainer.addEventListener("animationiteration", () => {
			profilesContainer.style.transform = "translateX(0)";
		});
	});

	const videoMedia = document.querySelector(".media__video");
	const videoPlayButton = document.querySelector(".play-button");

	videoPlayButton.addEventListener("click", () => {
		if (videoMedia.paused) {
			videoMedia.play();
			videoMedia.setAttribute("controls", "true");
			videoPlayButton.style.display = "none";
		} else {
			videoMedia.pause();
		}
	});

	const marqueeContainers = document.querySelectorAll(".marquee-build__list");

	marqueeContainers.forEach((marqueeContainer) => {
		const items = [...marqueeContainer.children];

		for (let i = 0; i < 2; i++) {
			items.forEach((item) => {
				marqueeContainer.appendChild(item.cloneNode(true));
			});
		}
	});

	const storiesVideo = document.querySelectorAll(
		".slider-stories__video video"
	);
	const storyVideoPlayButtons = document.querySelectorAll(".play-btn");

	storyVideoPlayButtons.forEach((btn, index) => {
		btn.addEventListener("click", () => {
			const storyVideo = storiesVideo[index];

			if (storyVideo.paused) {
				storyVideo.play();
				storyVideo.setAttribute("controls", "true");
				btn.style.display = "none";
			} else {
				storyVideo.pause();
			}
		});
	});

	new Swiper(".slider-stories", {
		loop: true,
		navigation: {
			nextEl: ".slider-stories__button-next",
			prevEl: ".slider-stories__button-prev",
		},
		slidesPerView: "auto",
	});

	const points = document.querySelectorAll(".world__point");
	const pulseDuration = 2800;
	const pulseDelay = 1200;

	function getRandomPoint(oldIndex) {
		let newIndex;
		do {
			newIndex = Math.floor(Math.random() * points.length);
		} while (newIndex === oldIndex);
		return newIndex;
	}

	let currentIndex = -1;

	function animateNext() {
		currentIndex = getRandomPoint(currentIndex);
		const currentPoint = points[currentIndex];

		currentPoint.classList.add("pulse");

		setTimeout(() => {
			currentPoint.classList.remove("pulse");
		}, pulseDuration);

		setTimeout(animateNext, pulseDelay);
	}

	animateNext();

	const avatarsContainers = document.querySelectorAll('.avatars__items');

	avatarsContainers.forEach((avatarsContainer) => {
		const avatarsChildren = [...avatarsContainer.children];

		for (let i = 0; i < 2; i++) {
			avatarsChildren.forEach((item) => {
				avatarsContainer.appendChild(item.cloneNode(true));
			});
		}

		avatarsContainer.addEventListener("animationiteration", () => {
			avatarsContainer.style.transform = "translateX(0)";
		});
	});
});
