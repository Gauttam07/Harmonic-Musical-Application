class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="container header_container">
                <div class="logo">
                    <h1 class="brand-name">Harmonic</h1>
                </div>
                <nav class="nav-links" id="mySidenav">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="premium.html">Premium</a></li>
                        <li><a href="download.html">Download</a></li>
                        <li><a href="help.html">Help</a></li>
                    </ul>
                </nav>
                
                <!-- User profile -->
                <div class="profile">
                    <div class="profile-title" onclick="profile()">
                        <span>User</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.5 6l6 6 6-6H1.5z"/>
                        </svg>
                    </div>
                    <div id="profileMenu" class="profile-menu">
                        <a href="#">Account</a>
                        <a href="#">Settings</a>
                        <a href="#">Logout</a>
                    </div>
                </div>

                <!-- Mobile menu toggle -->
                <div class="menu-btn" onclick="toggler(this)">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </div>
        </header>
        <style>
            header {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                padding: 10px 0;
                transition: background-color 0.3s ease;
                z-index: 1000;
            }
            .header_container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                max-width: 1200px;
                margin: auto;
                padding: 0 20px;
            }
            .brand-name {
                font-size: 24px;
                font-weight: 700;
                color: #e75480;
                margin: 0;
                font-family: 'DM Sans', sans-serif;
                cursor: pointer;
            }
            nav ul {
                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
                gap: 20px;
            }
            nav ul li a {
                color: white;
                text-decoration: none;
                font-weight: 500;
                transition: color 0.3s ease;
            }
            nav ul li a:hover {
                color: #e75480;
            }
            /* Profile */
            .profile {
                position: relative;
                margin-left: 20px;
            }
            .profile-title {
                display: flex;
                align-items: center;
                cursor: pointer;
                color: white;
                font-weight: 500;
            }
            .profile-title svg {
                margin-left: 6px;
                transition: transform 0.3s ease;
            }
            .profile-title svg.transform {
                transform: rotate(180deg);
            }
            .profile-menu {
                position: absolute;
                top: 40px;
                right: 0;
                background: #111;
                border-radius: 8px;
                display: none;
                flex-direction: column;
                min-width: 150px;
                box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            }
            .profile-menu.active {
                display: flex;
            }
            .profile-menu a {
                padding: 10px 15px;
                color: white;
                text-decoration: none;
                transition: background 0.2s;
            }
            .profile-menu a:hover {
                background: #222;
                color: #e75480;
            }
            /* Menu btn (mobile) */
            .menu-btn {
                display: none;
                cursor: pointer;
            }
            .menu-btn div {
                width: 25px;
                height: 3px;
                background-color: white;
                margin: 5px 0;
                transition: 0.4s;
            }
            /* Responsive */
            @media (max-width: 768px) {
                .nav-links {
                    position: fixed;
                    top: 0;
                    right: -100%;
                    width: 200px;
                    height: 100vh;
                    background: black;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    transition: right 0.3s ease;
                }
                .nav-links.open {
                    right: 0;
                }
                nav ul {
                    flex-direction: column;
                    gap: 15px;
                }
                .menu-btn {
                    display: block;
                }
                .change .bar1 {
                    transform: rotate(-45deg) translate(-5px, 6px);
                }
                .change .bar2 {
                    opacity: 0;
                }
                .change .bar3 {
                    transform: rotate(45deg) translate(-5px, -6px);
                }
            }
        </style>
        <script>
            // Transparent header background
            window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 20) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // semi-transparent black
    } else {
        header.style.backgroundColor = "transparent";
    }
});
            
        </script>
        `;
    }
}

customElements.define("custom-header", CustomHeader);
