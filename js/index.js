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
    fetch("../loginModal.html")
        .then(response => response.text())
        .then(html => {
            container.innerHTML = html;
            document.body.appendChild(container);
            document.querySelector("#loginForm")
                .addEventListener("submit", submitLoginDetails, true);
        });
    container.addEventListener("click", removeLoginModalOnClick, true);
};

headerLoginButton.addEventListener("click", displayLoginModal, true);