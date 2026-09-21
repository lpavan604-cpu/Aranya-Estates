const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const enquireForm = document.querySelector("#enquire-form");
const formStatus = document.querySelector("#form-status");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

navToggle.addEventListener("click", function () {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

siteNav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  });
});

enquireForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!enquireForm.checkValidity()) {
    formStatus.textContent = "Please complete every field so we can plan your visit.";
    enquireForm.reportValidity();
    return;
  }

  formStatus.textContent = "Thank you. Our concierge will write to you within one working day.";
  enquireForm.reset();
});
