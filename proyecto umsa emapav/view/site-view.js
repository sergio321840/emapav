export function renderServices(services, container) {
  container.innerHTML = services.map((service) => `
    <article class="service-card">
      <span class="service-number">${service.icon}</span>
      <h3>${service.title}</h3>
      <p>${service.text}</p>
      <span class="card-arrow" aria-hidden="true">↗</span>
    </article>
  `).join("");
}

export function showToast(message, element) {
  element.textContent = message;
  element.classList.add("visible");
  window.setTimeout(() => element.classList.remove("visible"), 4200);
}
