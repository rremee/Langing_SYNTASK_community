"use strict";

import "/src/sass/style.scss";

document.addEventListener("DOMContentLoaded", () => {
    const headerNav = document.querySelector(".header");
    const burger = document.querySelector(".burger");

    burger.addEventListener("click", () => {
        headerNav.classList.toggle("header__navigation_active");
    })
    
    const profilesContainers = document.querySelectorAll(".profiles__items");

    profilesContainers.forEach((profilesContainer) => {
        const profilesChildren = [...profilesContainer.children];
        const numberOfItems = profilesChildren.length;

        for (let i = 0; i < numberOfItems; i++) {
            profilesContainer.appendChild(profilesChildren[i].cloneNode(true));
        }
    });
})

