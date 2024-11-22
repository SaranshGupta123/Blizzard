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