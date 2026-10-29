import { siteData } from "../model/site-data.js";
import { renderServices, showToast } from "../view/site-view.js";

const serviceGrid = document.querySelector("#serviceGrid");
const toast = document.querySelector("#toast");
const menuToggle = document.querySelector("#menuToggle");
const siteNav = document.querySelector("#siteNav");

renderServices(siteData.services, serviceGrid);

document.querySelector("#showMessage").addEventListener("click", () => {
  showToast(siteData.projectMessage, toast);
});

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => siteNav.classList.remove("is-open"));
});

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}, { passive: true });
