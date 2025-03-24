"use strict";

import "/src/sass/style.scss";

document.addEventListener("DOMContentLoaded", () => {
    const headerNav = document.querySelector(".header");
    const burger = document.querySelector(".burger");

    burger.addEventListener("click", () => {
        headerNav.classList.toggle("header__navigation_active");
    })
})
