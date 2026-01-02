document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuIcon = document.querySelector('.mobile-menu-icon');

    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            alert('Mobile menu clicked! (Feature coming soon)');
        });
    }

    // Radio Button Logic for App Download (Index page only)
    const radios = document.querySelectorAll('input[name="contact-method"]');
    const inputField = document.querySelector('.input-group-row input');

    if (radios.length > 0 && inputField) {
        radios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                if (e.target.parentNode.textContent.trim() === 'Email') {
                    inputField.placeholder = 'Email';
                    inputField.type = 'email';
                } else {
                    inputField.placeholder = 'Phone';
                    inputField.type = 'tel';
                }
            });
        });
    }

    // Filter Buttons Interaction
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
        });
    });

    // --- MODAL LOGIC SAME FOR ALL PAGES ---

    // Inject Modal HTML structure
    const modalContainer = document.getElementById('modal-container') || document.body;

    const modalHTML = `
    <div class="modal-overlay" id="login-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Login</h2>
                <span class="close-modal">&times;</span>
            </div>
            <form class="auth-form">
                <input type="tel" placeholder="Phone">
                <button type="button" class="auth-btn">Send One Time Password</button>
            </form>
            <div class="or-divider">or</div>
            <button class="google-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" width="20">
                Continue with Google
            </button>
            <div class="toggle-auth">
                New to Zomato? <span id="switch-to-signup">Create account</span>
            </div>
        </div>
    </div>
    
    <div class="modal-overlay" id="signup-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Sign Up</h2>
                <span class="close-modal">&times;</span>
            </div>
            <form class="auth-form">
                <input type="text" placeholder="Full Name">
                <input type="email" placeholder="Email">
                <div style="display:flex; gap:10px;">
                    <input type="checkbox" style="width: auto;">
                    <span style="font-size:0.8rem; color:#666;">I agree to Zomato's Terms of Service, Privacy Policy and Content Policies</span>
                </div>
                <button type="button" class="auth-btn">Create Account</button>
            </form>
            <div class="or-divider">or</div>
            <button class="google-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" width="20">
                Continue with Google
            </button>
            <div class="toggle-auth">
                Already have an account? <span id="switch-to-login">Log in</span>
            </div>
        </div>
    </div>
    `;

    // Only inject if not already present (checking for index page mainly, but doing it safely)
    if (!document.getElementById('login-modal')) {
        const div = document.createElement('div');
        div.innerHTML = modalHTML;
        document.body.appendChild(div);
    }

    const loginBtns = document.querySelectorAll('.login-btn');
    const signupBtns = document.querySelectorAll('.signup-btn');
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const closeBtns = document.querySelectorAll('.close-modal');
    const switchToSignup = document.getElementById('switch-to-signup');
    const switchToLogin = document.getElementById('switch-to-login');

    const openModal = (modal) => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop scrolling
    }

    const closeModal = (modal) => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    loginBtns.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(loginModal);
    }));

    signupBtns.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(signupModal);
    }));

    closeBtns.forEach(btn => btn.addEventListener('click', () => {
        closeModal(loginModal);
        closeModal(signupModal);
    }));

    // Close on click outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) closeModal(loginModal);
        if (e.target === signupModal) closeModal(signupModal);
    });

    // Switch Logic
    if (switchToSignup) {
        switchToSignup.addEventListener('click', () => {
            closeModal(loginModal);
            openModal(signupModal);
        });
    }

    if (switchToLogin) {
        switchToLogin.addEventListener('click', () => {
            closeModal(signupModal);
            openModal(loginModal);
        });
    }

});
