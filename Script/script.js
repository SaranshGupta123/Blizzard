document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", function (event) {
        const navbarCollapse = document.querySelector(".navbar-collapse");
        const navbarToggler = document.querySelector(".navbar-toggler");
        const searchDropdownMenu = document.getElementById("searchDropdownMenu");
        const searchDropdownToggle = document.getElementById("searchDropdownToggle");
        if (
            navbarCollapse.classList.contains("show") &&
            !navbarCollapse.contains(event.target) &&
            !navbarToggler.contains(event.target)
        ) {
            navbarToggler.click();
        }
        if (searchDropdownToggle.contains(event.target)) {
            searchDropdownMenu.style.display =
                searchDropdownMenu.style.display === "block" ? "none" : "block";
        } else if (!searchDropdownMenu.contains(event.target)) {
            searchDropdownMenu.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const languageDropdownToggle = document.getElementById("languageDropdown");
    const languageDropdownMenu = document.querySelector("#languageDropdown + .dropdown-menu");

    // Toggle dropdown menu on click
    languageDropdownToggle.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents default action to avoid any unexpected behavior
        languageDropdownMenu.style.display =
            languageDropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", function (event) {
        if (
            !languageDropdownToggle.contains(event.target) &&
            !languageDropdownMenu.contains(event.target)
        ) {
            languageDropdownMenu.style.display = "none";
        }
    });
});