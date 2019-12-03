const headerLoginButton = document.querySelector("#headerLoginButton");

const removeLoginModalOnClick = event => {
    const modalOverlay = document.querySelector("#modalOverlay");
    if (event.target === modalOverlay) {
        modalOverlay.removeEventListener("click", removeLoginModalOnClick, true);
        modalOverlay.remove();
    };
};

const submitLoginDetails = event => {
    event.preventDefault();
    const loginForm = document.querySelector("#loginForm");
    loginForm.reset();
    loginForm.removeEventListener("submit", submitLoginDetails, true);
    const modal = document.querySelector("#modalOverlay")
    modal.removeEventListener("click", removeLoginModalOnClick, true)
    modal.remove();
};

const displayLoginModal = () => {
    const container = document.createElement("div");
    container.setAttribute("id", "modalOverlay");
    container.className = "modal-overlay";
    container.innerHTML = `
    <div id="loginModal" class="login-modal">
        <div class="login-img-container">
            <img src="images/logoweb.png" alt="wellness">
        </div>
        <form id="loginForm">
            <div class="login-form-section">
                <input type="text" placeholder="Username" name="username" required>
                <input type="password" placeholder="Password" name="password" autocomplete="password" required>
                <a class="login-password-reset-link" href="#">Forgot Password?</a>
                <button  class="login-button" type="submit">Login</button>
            </div>
        </form>
        <div class="login-register-link">
            Don't have an account? <a href="register.html">Register Now!</a>
        </div>
    </div>
    `;
    document.body.appendChild(container);
    document.querySelector("#loginForm")
        .addEventListener("submit", submitLoginDetails, true);
    container.addEventListener("click", removeLoginModalOnClick, true);
};

headerLoginButton.addEventListener("click", displayLoginModal, true);