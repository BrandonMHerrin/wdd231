const currentYear = new Date().getFullYear();

document.querySelectorAll('.current-year')
    .forEach((item) => item.textContent = currentYear)

document.querySelector("#last-modification").textContent = document.lastModified;

document
  .querySelector("#menu-toggle")
  .addEventListener("click", () =>
    document.querySelector("header .nav-container").classList.toggle('open')
  );