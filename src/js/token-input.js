function handleTokenError() {
    const input = document.querySelector("#token-block input");
    input.focus();
    displayError("token-block");
}

function tokenElement() {
    return document.getElementById("token-input");
}

function getToken() {
    return tokenElement().value;
}

function isFilledToken() {
    if (!getToken()) {
        handleTokenError();
    }

    return true;
}

function initTokenInput() {
    if ("token" in localStorage) {
        tokenElement().value = localStorage.getItem("token");
    }
    tokenElement().addEventListener("focusout", () => {
        localStorage.setItem("token", tokenElement().value);
    });
}