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

	const video = document.querySelector(".media__video");
	const videoPlayButton = document.querySelector(".play-button");

	videoPlayButton.addEventListener("click", () => {
		if (video.paused) {
			video.play();
			video.setAttribute("controls", "true");
			videoPlayButton.style.display = "none";
		} else {
			video.pause();
		}
	});

	const marqueeContainers = document.querySelectorAll(".marquee-build__list");

	marqueeContainers.forEach((marqueeContainer) => {
        const items = [...marqueeContainer.children];

        // Дублируем элементы дважды для плавного перехода
        for (let i = 0; i < 2; i++) {
            items.forEach((item) => {
                marqueeContainer.appendChild(item.cloneNode(true));
            });
        }
    });
});
