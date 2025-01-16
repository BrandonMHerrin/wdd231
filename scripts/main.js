function setCopyYear() {
    const yearElement = document.querySelector("#copy-year");
    const year = new Date().getFullYear();
    yearElement.textContent = year;
}

function setLastUpdate() {
    const lastUpdateElement = document.querySelector("#last-update");
    const date = new Date();
    lastUpdateElement.textContent = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

function setEventListeners() {
    document.querySelector('#nav-toggle').addEventListener('click', toggleNav);
}

function toggleNav() {
    const navElement = document.querySelector('nav');
    navElement.classList.toggle('visible');
}

function program() {
    setCopyYear();
    setLastUpdate();
    setEventListeners();
}

program();
