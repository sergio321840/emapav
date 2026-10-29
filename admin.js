const demoCredentials = { username: "admin", password: "admin123" };
const STORE_KEY = "emapav_demo_content";

const defaultNewsItems = [
  { id: "news-1", title: "Cobro por Alcantarillado", text: "SE COMUNICA A LOS USUARIOS, QUE EN LA FACTURA MES DE AGOSTO SE INCLUYE EL COBRO POR EL SERVICIO DE ALCANTARILLADO SANITARIO", date: "3 Septiembre 2025", image: "images/not1.png", link: "https://www.facebook.com/share/p/177XVjTunc/" },
  { id: "news-2", title: "Trabajo de Renovación", text: "Trabajos de mejora en la red de distribución de agua potable", date: "11 Agosto 2025", image: "images/not2.png", link: "https://www.facebook.com/share/p/1BSXBetbYz/" },
  { id: "news-3", title: "EMAPAV informa", text: "Diferentes tipos de Categorias", date: "3 Abril 2025", image: "images/not3.png", link: "https://www.facebook.com/share/v/1AEDDLkw5K/" },
  { id: "news-4", title: "Pago fácil y rápido", text: "Ahora tus facturas de agua puedes pagarlas a través de la Banca Móvil del BancoSol", date: "29 Septiembre 2025", image: "images/not4.png", link: "https://www.facebook.com/share/p/1A1WQzhVw6/" }
];

const defaultProjectItems = [
  { id: "project-1", title: "Renovación de la Red Principal", text: "Modernización y optimización de la infraestructura de distribución de agua.", image: "images/ob1.png" },
  { id: "project-2", title: "Renovación de red", text: "Trabajos de renovación de red, en la Calle Illimani entre Libertad y Pisagua.", image: "images/ob2.png" }
];

const defaultDocumentItems = [
  { id: "doc-1", title: "Estanques - Resultados", text: "Resultados de análisis de estanques correspondientes al mes de junio.", code: "estanques" },
  { id: "doc-2", title: "Fuentes Subterráneas", text: "Informe de monitoreo de fuentes subterráneas del mes de junio.", code: "subterraneas" },
  { id: "doc-3", title: "Informes Externos 2026", text: "Compilado de informes externos de laboratorio de la gestión 2026.", code: "externos" },
  { id: "doc-4", title: "Red de Distribución", text: "Resultados de control de calidad en la red de distribución de junio.", code: "red" }
];

const contentDefaults = {
  heroBadge: "Empresa Municipal de Agua Potable y Alcantarillado",
  heroTitle: "Construyendo las bases del desarrollo humano en Viacha",
  heroDescription: "EMAPAV es una empresa municipal comprometida con brindar servicios de agua potable y alcantarillado de calidad para el desarrollo sostenible de nuestra comunidad.",
  aboutTitle: "Sobre EMAPAV",
  aboutIntro: "Comprometidos con el desarrollo sostenible de Viacha",
  mission: "Prestar los servicios de agua potable y alcantarillado sanitario a la población de la ciudad de Viacha, Provincia Ingavi, Departamento de La Paz.",
  vision: "Ser una empresa autónoma con vocación de servicio, capacidad de gestión técnica y administrativa, trabajando constantemente para brindar eficacia, eficiencia, excelencia, calidad responsabilidad, respondiendo a las expectativas y compromiso con los usuarios de los servicios de agua potable y alcantarillado sanitario.",
  servicesTitle: "Nuestros Servicios",
  servicesIntro: "Servicios integrales de agua potable y alcantarillado",
  service1Title: "Agua Potable",
  service1Text: "Suministro continuo de agua potable de calidad para todos los sectores de Viacha.",
  service2Title: "Alcantarillado",
  service2Text: "Sistema integral de recolección y tratamiento de aguas residuales.",
  service3Title: "Mantenimiento",
  service3Text: "Mantenimiento preventivo y correctivo de la infraestructura hídrica.",
  service4Title: "Atención al Cliente",
  service4Text: "Servicio de atención personalizada para consultas y reclamos.",
  projectsTitle: "Nuestros Proyectos",
  projectsIntro: "Infraestructura para el desarrollo de Viacha",
  project1Title: defaultProjectItems[0].title,
  project1Text: defaultProjectItems[0].text,
  project1Image: defaultProjectItems[0].image,
  project2Title: defaultProjectItems[1].title,
  project2Text: defaultProjectItems[1].text,
  project2Image: defaultProjectItems[1].image,
  building1Image: "images/edif1.png",
  building2Image: "images/edif2.png",
  building3Image: "images/edif3.png",
  building4Image: "images/edif4.png",
  footerLogo: "images/emapa-logo-white.png",
  partnerLogo: "images/aaps.png",
  plantTitle: "Planta de Tratamiento de Aguas Residuales",
  plantIntro: "Una infraestructura clave para devolver el agua al entorno con responsabilidad y proteger la salud de la comunidad.",
  plantHeading: "Tratamiento y cuidado del agua",
  plantText: "La planta forma parte de la gestión de saneamiento de Viacha y se relaciona con el tratamiento de aguas residuales antes de su disposición.",
  plantImage: "images/planta-tratamiento-viacha.jpg",
  newsTitle: "Cobro por Alcantarillado",
  newsText: "SE COMUNICA A LOS USUARIOS, QUE EN LA FACTURA MES DE AGOSTO SE INCLUYE EL COBRO POR EL SERVICIO DE ALCANTARILLADO SANITARIO",
  newsDate: "3 Septiembre 2025",
  newsImage: "images/not1.png",
  newsLink: "https://www.facebook.com/share/p/177XVjTunc/",
  videoTitle: "Conoce más sobre EMAPAV",
  videoIntro: "Mira nuestro video informativo",
  videoSource: "video/EMA 2.mp4",
  documentsTitle: "Informes y Documentos",
  documentsIntro: "Consulta en línea nuestros informes de calidad de agua",
  stats1: "15,000+",
  stats1Label: "Familias Beneficiadas",
  stats2: "98%",
  stats2Label: "Cobertura de Agua",
  stats3: "85%",
  stats3Label: "Cobertura Alcantarillado",
  contactIntro: "Estamos aquí para atenderte",
  address: "Av. Hacia el Mar, Viacha, Bolivia",
  phone: "2800592 - 2800514",
  whatsapp: "69960342",
  hours: "Lun - Vie: 8:00 - 12:00 y 14:00 - 18:00",
  hoursCash: "Lun - Vie: 8:00 - 12:00 y 14:00 - 17:30",
  facebook: "https://www.facebook.com/profile.php?id=61566741580695"
};

const sections = [
  ["Portada", [["heroBadge", "Texto superior", "input"], ["heroTitle", "Título principal", "textarea"], ["heroDescription", "Descripción", "textarea"]]],
  ["Nosotros", [["aboutTitle", "Título de sección", "input"], ["aboutIntro", "Descripción corta", "input"], ["mission", "Misión", "textarea"], ["vision", "Visión", "textarea"]]],
  ["Servicios", [["servicesTitle", "Título", "input"], ["servicesIntro", "Descripción", "input"], ["service1Title", "Servicio 1: título", "input"], ["service1Text", "Servicio 1: texto", "textarea"], ["service2Title", "Servicio 2: título", "input"], ["service2Text", "Servicio 2: texto", "textarea"], ["service3Title", "Servicio 3: título", "input"], ["service3Text", "Servicio 3: texto", "textarea"], ["service4Title", "Servicio 4: título", "input"], ["service4Text", "Servicio 4: texto", "textarea"]]],
  ["Nuestros Proyectos", [["projectsTitle", "Título", "input"], ["projectsIntro", "Descripción", "input"], ["project1Title", "Proyecto 1: título", "input"], ["project1Text", "Proyecto 1: texto", "textarea"], ["project1Image", "Proyecto 1: imagen", "image"], ["project2Title", "Proyecto 2: título", "input"], ["project2Text", "Proyecto 2: texto", "textarea"], ["project2Image", "Proyecto 2: imagen", "image"], ["building1Image", "Historia: imagen 1", "image"], ["building2Image", "Historia: imagen 2", "image"], ["building3Image", "Historia: imagen 3", "image"], ["building4Image", "Historia: imagen 4", "image"]]],
  ["Planta de tratamiento", [["plantTitle", "Título", "input"], ["plantIntro", "Descripción", "textarea"], ["plantHeading", "Encabezado", "input"], ["plantText", "Texto", "textarea"], ["plantImage", "Imagen (ruta o URL)", "image"]]],
  ["Conoce más sobre EMAPAV", [["videoTitle", "Título del video", "input"], ["videoIntro", "Descripción del video", "input"], ["videoSource", "Archivo o ruta de video", "input"]]],
  ["Informes y Documentos", [["documentsTitle", "Título de documentos", "input"], ["documentsIntro", "Descripción de documentos", "input"]]],
  ["Estadísticas", [["stats1", "Dato 1", "input"], ["stats1Label", "Etiqueta 1", "input"], ["stats2", "Dato 2", "input"], ["stats2Label", "Etiqueta 2", "input"], ["stats3", "Dato 3", "input"], ["stats3Label", "Etiqueta 3", "input"]]],
  ["Contacto y pie de página", [["contactIntro", "Descripción", "input"], ["address", "Dirección", "input"], ["phone", "Teléfono", "input"], ["whatsapp", "WhatsApp", "input"], ["hours", "Horario general", "input"], ["hoursCash", "Horario de cajas", "input"], ["facebook", "Facebook", "url"], ["footerLogo", "Logo EMAPAV", "image"], ["partnerLogo", "Logo institucional asociado", "image"]]]
];

const loginView = document.querySelector("#loginView");
const dashboardView = document.querySelector("#dashboardView");
const loginForm = document.querySelector("#loginForm");
const loginMessage = document.querySelector("#loginMessage");
const contentForm = document.querySelector("#contentForm");
const saveStatus = document.querySelector("#saveStatus");

/* ---------- Almacenamiento (un solo lugar para leer/escribir) ---------- */

function readStore() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY) || "{}"); }
  catch { return {}; }
}

function writeStore(patch) {
  localStorage.setItem(STORE_KEY, JSON.stringify({ ...readStore(), ...patch, updatedAt: new Date().toISOString() }));
}

function readContent() {
  return { ...contentDefaults, ...(readStore().content || {}) };
}

function readNews() {
  const saved = readStore().newsItems;
  return Array.isArray(saved) ? saved : defaultNewsItems.map((item) => ({ ...item }));
}

function readDocuments() {
  const saved = readStore().documentItems;
  return Array.isArray(saved) ? saved : defaultDocumentItems.map((item) => ({ ...item }));
}

/* ---------- Utilidades ---------- */

function escapeAttribute(value) { return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;"); }
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character])); }

function loadImage(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => { document.querySelector(`[data-key="${input.dataset.imageFor}"]`).value = reader.result; };
  reader.readAsDataURL(file);
}

/* ---------- Editor de contenido ---------- */

function renderEditor(content) {
  const editor = document.querySelector("#contentEditor");
  const sectionIcons = ["fa-house", "fa-building", "fa-droplet", "fa-road", "fa-recycle", "fa-circle-play", "fa-file-lines", "fa-chart-simple", "fa-address-card"];
  editor.innerHTML = sections.map(([title, fields], index) => `<fieldset class="editor-section"><legend><span class="section-number">${String(index + 1).padStart(2, "0")}</span><span>${title}</span><i class="fas ${sectionIcons[index] || "fa-pen"}"></i></legend><div class="editor-grid">${fields.map(([key, label, type]) => `<label class="editor-field ${type === "textarea" ? "wide" : ""}"><span>${label}</span>${type === "textarea" ? `<textarea data-key="${key}" rows="3">${escapeHtml(content[key] || "")}</textarea>` : type === "image" ? `<input data-key="${key}" type="text" value="${escapeAttribute(content[key] || "")}"><small>También puedes elegir un archivo local</small><input data-image-for="${key}" type="file" accept="image/*">` : `<input data-key="${key}" type="${type === "url" ? "url" : "text"}" value="${escapeAttribute(content[key] || "")}">`}</label>`).join("")}</div></fieldset>`).join("");
  editor.querySelectorAll("input[type=file]").forEach((input) => input.addEventListener("change", () => loadImage(input)));

  const plantSection = [...editor.querySelectorAll(".editor-section")].find((section) => section.querySelector("legend")?.textContent.includes("Planta de tratamiento"));
  const documentsSection = [...editor.querySelectorAll(".editor-section")].find((section) => section.querySelector("legend")?.textContent.includes("Informes y Documentos"));
  const documentsManager = document.querySelector("#documentsManager");
  const newsManager = document.querySelector("#newsManager");
  if (plantSection && newsManager) plantSection.insertAdjacentElement("afterend", newsManager);
  if (documentsSection && documentsManager) documentsSection.insertAdjacentElement("afterend", documentsManager);
}

/* ---------- Documentos ---------- */

function renderDocumentManager() {
  const documents = readDocuments();
  const list = document.querySelector("#documentList");
  document.querySelector("#documentCount").textContent = `${documents.length} ${documents.length === 1 ? "documento" : "documentos"}`;
  document.querySelector("#documentEmpty").hidden = documents.length > 0;
  list.innerHTML = documents.map((item) => `<article class="news-admin-card document-admin-card" data-document-id="${escapeAttribute(item.id)}"><div class="document-cover"><i class="fas fa-file-pdf"></i><span>PDF · ${escapeHtml(item.code)}</span></div><div class="news-card-body"><div class="news-card-top"><span class="news-kind"><i class="fas fa-eye"></i> Publicado</span><button class="icon-button delete-document" type="button" title="Eliminar documento" aria-label="Eliminar documento"><i class="fas fa-trash"></i></button></div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p><div class="news-card-actions"><button class="button light edit-document" type="button"><i class="fas fa-pen"></i> Editar</button></div></div></article>`).join("");
  list.querySelectorAll(".edit-document").forEach((button) => button.addEventListener("click", () => openDocumentDialog(button.closest(".document-admin-card").dataset.documentId)));
  list.querySelectorAll(".delete-document").forEach((button) => button.addEventListener("click", () => deleteDocument(button.closest(".document-admin-card").dataset.documentId)));
}

function openDocumentDialog(id = "") {
  const documents = readDocuments();
  const item = documents.find((entry) => entry.id === id) || { id: `doc-${Date.now()}`, title: "", text: "", code: "" };
  document.querySelector("#documentId").value = item.id;
  document.querySelector("#documentItemTitle").value = item.title;
  document.querySelector("#documentItemText").value = item.text;
  document.querySelector("#documentItemCode").value = item.code;
  document.querySelector("#documentDialogTitle").textContent = id ? "Editar documento" : "Nuevo documento";
  document.querySelector("#documentDialog").showModal();
}

function deleteDocument(id) {
  const documents = readDocuments();
  const item = documents.find((entry) => entry.id === id);
  if (!item || !window.confirm(`¿Eliminar “${item.title}” de los documentos públicos?`)) return;
  writeStore({ documentItems: documents.filter((entry) => entry.id !== id) });
  renderDocumentManager();
  saveStatus.textContent = "Documento eliminado";
}

/* ---------- Noticias ---------- */

function renderNewsManager() {
  const news = readNews();
  const list = document.querySelector("#newsList");
  document.querySelector("#newsCount").textContent = `${news.length} ${news.length === 1 ? "publicación" : "publicaciones"}`;
  document.querySelector("#newsEmpty").hidden = news.length > 0;
  list.innerHTML = news.map((item, index) => `<article class="news-admin-card" data-news-id="${escapeAttribute(item.id)}">
    <div class="news-preview"><img src="${escapeAttribute(item.image || "images/not1.png")}" alt=""><span class="preview-tag">${index === 0 ? "Primera del carrusel" : `Tarjeta ${index + 1}`}</span><span class="preview-date">${escapeHtml(item.date)}</span></div>
    <div class="news-card-body"><div class="news-card-top"><span class="news-kind"><i class="fas fa-bullhorn"></i> Noticia / comunicado</span><button class="icon-button delete-news" type="button" title="Eliminar publicación" aria-label="Eliminar publicación"><i class="fas fa-trash"></i></button></div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p><div class="news-card-actions"><button class="button light edit-news" type="button"><i class="fas fa-pen"></i> Editar</button><a class="preview-link" href="${escapeAttribute(item.link || "#")}" target="_blank" rel="noreferrer"><i class="fas fa-arrow-up-right-from-square"></i> Ver enlace</a></div></div>
  </article>`).join("");
  list.querySelectorAll(".edit-news").forEach((button) => button.addEventListener("click", () => openNewsDialog(button.closest(".news-admin-card").dataset.newsId)));
  list.querySelectorAll(".delete-news").forEach((button) => button.addEventListener("click", () => deleteNews(button.closest(".news-admin-card").dataset.newsId)));
}

function openNewsDialog(id = "") {
  const news = readNews();
  const item = news.find((entry) => entry.id === id) || { id: `news-${Date.now()}`, title: "", text: "", date: "", image: "images/not1.png", link: "" };
  document.querySelector("#newsId").value = item.id;
  document.querySelector("#newsItemTitle").value = item.title;
  document.querySelector("#newsItemText").value = item.text;
  document.querySelector("#newsItemDate").value = item.date;
  document.querySelector("#newsItemImage").value = item.image;
  document.querySelector("#newsItemLink").value = item.link;
  document.querySelector("#newsDialogTitle").textContent = id ? "Editar publicación" : "Nueva noticia";
  document.querySelector("#newsDialog").showModal();
}

function deleteNews(id) {
  const news = readNews();
  const item = news.find((entry) => entry.id === id);
  if (!item || !window.confirm(`¿Eliminar “${item.title}” del carrusel?`)) return;
  writeStore({ newsItems: news.filter((entry) => entry.id !== id) });
  renderNewsManager();
  saveStatus.textContent = "Publicación eliminada del carrusel";
}

/* ---------- Vistas ---------- */

function fillForm() {
  renderEditor(readContent());
  renderNewsManager();
  renderDocumentManager();
}

function showDashboard() {
  loginView.hidden = true;
  dashboardView.hidden = false;
  fillForm();
}

/* ---------- Eventos ---------- */

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value;
  if (username !== demoCredentials.username || password !== demoCredentials.password) {
    loginMessage.textContent = "Usuario o contraseña incorrectos.";
    return;
  }
  loginMessage.textContent = "";
  sessionStorage.setItem("emapav_demo_admin", "true");
  showDashboard();
});

contentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const content = { ...contentDefaults };
  document.querySelectorAll("[data-key]").forEach((field) => { content[field.dataset.key] = field.value.trim(); });
  writeStore({ content });
  saveStatus.textContent = "Cambios guardados en este navegador";
  window.setTimeout(() => { saveStatus.textContent = ""; }, 3500);
});

document.querySelector("#resetButton").addEventListener("click", () => {
  localStorage.removeItem(STORE_KEY);
  fillForm();
  saveStatus.textContent = "Contenido demo restaurado";
});

document.querySelector("#addNewsButton").addEventListener("click", () => openNewsDialog());
document.querySelector("#addDocumentButton").addEventListener("click", () => openDocumentDialog());

document.querySelector("#documentDialogForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const id = document.querySelector("#documentId").value;
  const item = {
    id,
    title: document.querySelector("#documentItemTitle").value.trim(),
    text: document.querySelector("#documentItemText").value.trim(),
    code: document.querySelector("#documentItemCode").value.trim()
  };
  const documents = readDocuments();
  const exists = documents.some((entry) => entry.id === id);
  const next = exists ? documents.map((entry) => entry.id === id ? item : entry) : [...documents, item];
  writeStore({ documentItems: next });
  document.querySelector("#documentDialog").close();
  renderDocumentManager();
  saveStatus.textContent = exists ? "Documento actualizado" : "Documento agregado";
});
document.querySelector("#closeDocumentDialog").addEventListener("click", () => document.querySelector("#documentDialog").close());
document.querySelector("#cancelDocumentDialog").addEventListener("click", () => document.querySelector("#documentDialog").close());

document.querySelector("#newsDialogForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const id = document.querySelector("#newsId").value;
  const item = {
    id,
    title: document.querySelector("#newsItemTitle").value.trim(),
    text: document.querySelector("#newsItemText").value.trim(),
    date: document.querySelector("#newsItemDate").value.trim(),
    image: document.querySelector("#newsItemImage").value.trim(),
    link: document.querySelector("#newsItemLink").value.trim()
  };
  const news = readNews();
  const exists = news.some((entry) => entry.id === id);
  const next = exists ? news.map((entry) => entry.id === id ? item : entry) : [...news, item];
  writeStore({ newsItems: next });
  document.querySelector("#newsDialog").close();
  renderNewsManager();
  saveStatus.textContent = exists ? "Publicación actualizada" : "Publicación agregada al carrusel";
});
document.querySelector("#closeNewsDialog").addEventListener("click", () => document.querySelector("#newsDialog").close());
document.querySelector("#cancelNewsDialog").addEventListener("click", () => document.querySelector("#newsDialog").close());

document.querySelector("#logoutButton").addEventListener("click", () => {
  sessionStorage.removeItem("emapav_demo_admin");
  window.location.reload();
});

if (sessionStorage.getItem("emapav_demo_admin") === "true") showDashboard();