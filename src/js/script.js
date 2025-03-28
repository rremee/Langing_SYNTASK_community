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
        const profilesChildrenNumber = profilesChildren.length;

        for (let i = 0; i < 2; i++) {
            profilesChildren.forEach((item) => {
                profilesContainer.appendChild(item.cloneNode(true));
            });
        }

        profilesContainer.addEventListener("animationiteration", () => {
            profilesContainer.style.transform = "translateX(0)";
        });
    });
});