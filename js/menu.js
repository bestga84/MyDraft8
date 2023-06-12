(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");

    menuBtnRef.addEventListener("click", () => {
        const expanded = menuBtnRef.detAttribute("aria-expanded") === "true" || false;   // два

        menuBtnRef.classList.toggle("is-open");   // один
        menuBtnRef.setAttribute("aria-expanded", !expanded);                                // два

        // mobileMenuRef.classList.toggle("is-open");
    });
})();