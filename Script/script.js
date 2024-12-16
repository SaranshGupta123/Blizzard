document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.createElement('div');
    sidebar.id = 'mobile-sidebar';
    const hamburgerButton = document.querySelector('.navbar-toggler');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const closeIcon = document.getElementById('closeIcon');
    const navbarNav = document.getElementById('navbarNav'); 
    const searchToggle = document.getElementById("searchDropdown"); 
    const searchTray = document.getElementById("searchTray");
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (event) {
            event.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            const isDisplayed = dropdownMenu.style.display === 'block';
            dropdownMenu.style.display = isDisplayed ? 'none' : 'block';
        });
    });
    document.addEventListener('click', function (event) {
        dropdownToggles.forEach(toggle => {
            const dropdownMenu = toggle.nextElementSibling;
            if (!toggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.style.display = 'none';
            }
        });
    }); 
    hamburgerButton.addEventListener('click', function () {
        const isMenuOpen = navbarNav.classList.contains('show'); 
        if (isMenuOpen) {
            closeIcon.classList.add('d-none');
            hamburgerIcon.classList.remove('d-none');
        } else {
            hamburgerIcon.classList.add('d-none');
            closeIcon.classList.remove('d-none');
        }
    });
    navbarNav.addEventListener('hidden.bs.collapse', () => {
        closeIcon.classList.add('d-none');
        hamburgerIcon.classList.remove('d-none');
    });
    navbarNav.addEventListener('shown.bs.collapse', () => {
        hamburgerIcon.classList.add('d-none');
        closeIcon.classList.remove('d-none');
    });
    searchToggle.addEventListener("click", function (event) {
        event.preventDefault();
        searchTray.style.display = searchTray.style.display === "block" ? "none" : "block";
    });
    document.addEventListener("click", function (event) {
        if (!searchTray.contains(event.target) && !searchToggle.contains(event.target)) {
            searchTray.style.display = "none";
        }
    });
    sidebar.innerHTML = `
        <div class="header">
            <img src="images/9.webp" alt="Blizzard Logo" style="height:40px; margin-top:0px"/>
            <i class="bi bi-x close-btn" style="background-color: #f0f6f633; width:30px; height:40px"></i>
            <a href="#" class="login-btn">Log In</a>
            <a href="#"><i class="bi bi-person"></i>WoW Characters</a>
            <a href="#"><i class="bi bi-gear"></i>Account Settings</a>
            <a href="forms.html"><i class="bi bi-pencil-square"></i>Sign Up</a>
        </div>
        <a href="#"><i class="bi bi-question-circle"></i>Support</a>
        <a href="#"><i class="bi bi-shop"></i>Shop</a>
        <a href="#"><i class="bi bi-phone"></i>Battle.net Mobile App</a>
    `;
    document.body.appendChild(sidebar);
    const userIcon = document.getElementById('accountDropdown');
    const closeBtn = sidebar.querySelector('.close-btn');

    userIcon.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.style.right = '0';
    });
    closeBtn.addEventListener('click', () => {
        sidebar.style.right = '-100%';
    });
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && e.target !== userIcon) {
            sidebar.style.right = '-100%';
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const languageDropdownToggle = document.getElementById("languageDropdown");
    const languageDropdownMenu = languageDropdownToggle.nextElementSibling; 
    const languageItems = languageDropdownMenu.querySelectorAll(".dropdown-item");

    languageDropdownToggle.addEventListener("click", function (event) {
        event.preventDefault(); 
        const isDisplayed = languageDropdownMenu.style.display === "block";
        languageDropdownMenu.style.display = isDisplayed ? "none" : "block";
    });
    languageItems.forEach(item => {
        item.addEventListener("click", function () {
            languageItems.forEach(i => i.classList.remove("selected"));
            this.classList.add("selected");
            languageDropdownToggle.innerHTML = `<i class="bi bi-globe"></i> ${this.textContent} <i class="bi bi-chevron-down ms-2"></i>`;
            languageDropdownMenu.style.display = "none";
        });
    });
    document.addEventListener("click", function (event) {
        if (
            !languageDropdownToggle.contains(event.target) &&
            !languageDropdownMenu.contains(event.target)
        ) {
            languageDropdownMenu.style.display = "none";
        }
    });
});