document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.createElement('div');
    sidebar.id = 'mobile-sidebar';
    const hamburgerButton = document.querySelector('.navbar-toggler');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const closeIcon = document.getElementById('closeIcon');
    const navbarNav = document.getElementById('navbarNav'); 
    const searchToggle = document.getElementById("searchDropdown"); 
    const searchTray = document.getElementById("searchTray"); 
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
            <img src="images/15.png" alt="Blizzard Logo" style="height:100px; margin-top:50px"/>
            <i class="bi bi-x close-btn"></i>
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
    languageDropdownToggle.addEventListener("click", function (event) {
        event.preventDefault(); 
        const isDisplayed = languageDropdownMenu.style.display === "block";
        languageDropdownMenu.style.display = isDisplayed ? "none" : "block";
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