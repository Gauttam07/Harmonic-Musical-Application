class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="container footer-container">
                <div class="footer-logo">
                    <h2 class="brand-name">Harmonic</h2>
                </div>
                <div class="footer-links">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="premium.html">Premium</a></li>
                        <li><a href="download.html">Download</a></li>
                        <li><a href="help.html">Help</a></li>
                    </ul>
                </div>
                <div class="footer-copy">
                    <p>© 2025 Harmonic. All rights reserved.</p>
                </div>
            </div>
        </footer>
        <style>
            footer {
                background: #000;
                color: #fff;
                padding: 40px 20px;
                margin-top: 40px;
            }
            .footer-container {
                max-width: 1200px;
                margin: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            .footer-logo .brand-name {
                font-size: 28px;
                font-weight: 700;
                color: #e75480; /* reddish-pink */
                margin-bottom: 20px;
                font-family: 'DM Sans', sans-serif;
            }
            .footer-links ul {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                gap: 20px;
            }
            .footer-links ul li a {
                color: #fff;
                text-decoration: none;
                font-weight: 500;
                transition: color 0.3s ease;
            }
            .footer-links ul li a:hover {
                color: #e75480;
            }
            .footer-copy {
                margin-top: 20px;
                font-size: 14px;
                color: #aaa;
            }
        </style>
        `;
    }
}

customElements.define("custom-footer", CustomFooter);
