const publicDefaults = {
  heroBadge: "Empresa Municipal de Agua Potable y Alcantarillado", heroTitle: "Construyendo las bases del desarrollo humano en Viacha", heroDescription: "EMAPAV es una empresa municipal comprometida con brindar servicios de agua potable y alcantarillado de calidad para el desarrollo sostenible de nuestra comunidad.",
  aboutTitle: "Sobre EMAPAV", aboutIntro: "Comprometidos con el desarrollo sostenible de Viacha", mission: "Prestar los servicios de agua potable y alcantarillado sanitario a la población de la ciudad de Viacha, Provincia Ingavi, Departamento de La Paz.", vision: "Ser una empresa autónoma con vocación de servicio, capacidad de gestión técnica y administrativa, trabajando constantemente para brindar eficacia, eficiencia, excelencia, calidad responsabilidad, respondiendo a las expectativas y compromiso con los usuarios de los servicios de agua potable y alcantarillado sanitario.",
  servicesTitle: "Nuestros Servicios", servicesIntro: "Servicios integrales de agua potable y alcantarillado", service1Title: "Agua Potable", service1Text: "Suministro continuo de agua potable de calidad para todos los sectores de Viacha.", service2Title: "Alcantarillado", service2Text: "Sistema integral de recolección y tratamiento de aguas residuales.", service3Title: "Mantenimiento", service3Text: "Mantenimiento preventivo y correctivo de la infraestructura hídrica.", service4Title: "Atención al Cliente", service4Text: "Servicio de atención personalizada para consultas y reclamos.",
  projectsTitle: "Nuestros Proyectos", projectsIntro: "Infraestructura para el desarrollo de Viacha", project1Title: "Renovación de la Red Principal", project1Text: "Modernización y optimización de la infraestructura de distribución de agua.", project1Image: "images/ob1.png", project2Title: "Renovación de red", project2Text: "Trabajos de renovación de red, en la Calle Illimani entre Libertad y Pisagua.", project2Image: "images/ob2.png", building1Image: "images/edif1.png", building2Image: "images/edif2.png", building3Image: "images/edif3.png", building4Image: "images/edif4.png", footerLogo: "images/emapa-logo-white.png", partnerLogo: "images/aaps.png", plantTitle: "Planta de Tratamiento de Aguas Residuales", plantIntro: "Una infraestructura clave para devolver el agua al entorno con responsabilidad y proteger la salud de la comunidad.", plantHeading: "Tratamiento y cuidado del agua", plantText: "La planta forma parte de la gestión de saneamiento de Viacha y se relaciona con el tratamiento de aguas residuales antes de su disposición.", plantImage: "images/planta-tratamiento-viacha.jpg", newsTitle: "Cobro por Alcantarillado", newsText: "SE COMUNICA A LOS USUARIOS, QUE EN LA FACTURA MES DE AGOSTO SE INCLUYE EL COBRO POR EL SERVICIO DE ALCANTARILLADO SANITARIO", newsDate: "3 Septiembre 2025", newsImage: "images/not1.png", newsLink: "https://www.facebook.com/share/p/177XVjTunc/", videoTitle: "Conoce más sobre EMAPAV", videoIntro: "Mira nuestro video informativo", videoSource: "video/EMA 2.mp4", documentsTitle: "Informes y Documentos", documentsIntro: "Consulta en línea nuestros informes de calidad de agua", stats1: "15,000+", stats1Label: "Familias Beneficiadas", stats2: "98%", stats2Label: "Cobertura de Agua", stats3: "85%", stats3Label: "Cobertura Alcantarillado", contactIntro: "Estamos aquí para atenderte", address: "Av. Hacia el Mar, Viacha, Bolivia", phone: "2800592 - 2800514", whatsapp: "69960342", hours: "Lun - Vie: 8:00 - 12:00 y 14:00 - 18:00", hoursCash: "Lun - Vie: 8:00 - 12:00 y 14:00 - 17:30", facebook: "https://www.facebook.com/profile.php?id=61566741580695"
};

function getPublicContent() {
  try { return { ...publicDefaults, ...JSON.parse(localStorage.getItem("emapav_demo_content") || "{}").content }; } catch { return { ...publicDefaults }; }
}

function setText(selector, value) { const element = document.querySelector(selector); if (element) element.textContent = value; }
function setImage(selector, value) { const element = document.querySelector(selector); if (element && value) element.src = value; }
function getNewsItems() {
  const fallback = [
    { id: "news-1", title: "Cobro por Alcantarillado", text: "SE COMUNICA A LOS USUARIOS, QUE EN LA FACTURA MES DE AGOSTO SE INCLUYE EL COBRO POR EL SERVICIO DE ALCANTARILLADO SANITARIO", date: "3 Septiembre 2025", image: "images/not1.png", link: "https://www.facebook.com/share/p/177XVjTunc/" },
    { id: "news-2", title: "Trabajo de Renovación", text: "Trabajos de mejora en la red de distribución de agua potable", date: "11 Agosto 2025", image: "images/not2.png", link: "https://www.facebook.com/share/p/1BSXBetbYz/" },
    { id: "news-3", title: "EMAPAV informa", text: "Diferentes tipos de Categorias", date: "3 Abril 2025", image: "images/not3.png", link: "https://www.facebook.com/share/v/1AEDDLkw5K/" },
    { id: "news-4", title: "Pago fácil y rápido", text: "Ahora tus facturas de agua puedes pagarlas a través de la Banca Móvil del BancoSol", date: "29 Septiembre 2025", image: "images/not4.png", link: "https://www.facebook.com/share/p/1A1WQzhVw6/" }
  ];
  try {
    const saved = JSON.parse(localStorage.getItem("emapav_demo_content") || "{}").newsItems;
    return Array.isArray(saved) ? saved : fallback;
  } catch { return fallback; }
}

function getDocumentItems() {
  const fallback = [
    { id: "doc-1", title: "Estanques - Resultados", text: "Resultados de análisis de estanques correspondientes al mes de junio.", code: "estanques" },
    { id: "doc-2", title: "Fuentes Subterráneas", text: "Informe de monitoreo de fuentes subterráneas del mes de junio.", code: "subterraneas" },
    { id: "doc-3", title: "Informes Externos 2026", text: "Compilado de informes externos de laboratorio de la gestión 2026.", code: "externos" },
    { id: "doc-4", title: "Red de Distribución", text: "Resultados de control de calidad en la red de distribución de junio.", code: "red" }
  ];
  try {
    const saved = JSON.parse(localStorage.getItem("emapav_demo_content") || "{}").documentItems;
    return Array.isArray(saved) ? saved : fallback;
  } catch { return fallback; }
}

function renderPublicDocuments() {
  const grid = document.querySelector(".documents-grid");
  if (!grid) return;
  grid.innerHTML = getDocumentItems().map((item) => `<article class="document-card"><div class="document-icon"><i class="fas fa-file-pdf"></i></div><h3>${escapePublicHtml(item.title)}</h3><p>${escapePublicHtml(item.text)}</p><button class="btn-view-pdf" data-doc="${escapePublicAttribute(item.code)}" data-title="${escapePublicAttribute(item.title)}"><i class="fas fa-book-open"></i> Leer documento</button></article>`).join("");
}

function renderPublicNews() {
  const carousel = document.querySelector("#newsCarousel");
  const dots = document.querySelector("#newsDots");
  if (!carousel || !dots) return;
  const items = getNewsItems();
  carousel.innerHTML = items.map((item, index) => `<div class="carousel-slide${index === 0 ? " active" : ""}"><a href="${escapePublicAttribute(item.link || "#")}" target="_blank" rel="noreferrer" class="news-link"><img src="${escapePublicAttribute(item.image || "images/not1.png")}" alt="${escapePublicAttribute(item.title || "Publicación EMAPAV")}"><div class="slide-content"><h3>${escapePublicHtml(item.title)}</h3><p>${escapePublicHtml(item.text)}</p><span class="news-date">${escapePublicHtml(item.date)}</span></div></a></div>`).join("");
  dots.innerHTML = items.map((_, index) => `<span class="dot${index === 0 ? " active" : ""}" data-slide="${index}"></span>`).join("");
}

function escapePublicHtml(value) { return String(value || "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character])); }
function escapePublicAttribute(value) { return escapePublicHtml(value); }

function applyPublicContent() {
  const content = getPublicContent();
  renderPublicNews();
  renderPublicDocuments();
  const texts = {
    ".hero-badge span": "heroBadge", ".hero-title": "heroTitle", ".hero-description": "heroDescription", ".about .section-header h2": "aboutTitle", ".about .section-header p": "aboutIntro", "#missionText": "mission", "#visionText": "vision", ".services .section-header h2": "servicesTitle", ".services .section-header p": "servicesIntro", ".projects .section-header h2": "projectsTitle", ".projects .section-header p": "projectsIntro", ".treatment-plant-section .section-header h2": "plantTitle", ".treatment-plant-section .section-header p": "plantIntro", ".treatment-plant-content h3": "plantHeading", ".treatment-plant-intro p": "plantText", ".news #newsTitle": "newsTitle", ".news #newsText": "newsText", ".news #newsDate": "newsDate", ".video-section .section-header h2": "videoTitle", ".video-section .section-header p": "videoIntro", ".documents-section .section-header h2": "documentsTitle", ".documents-section .section-header p": "documentsIntro", ".contact .section-header p": "contactIntro"
  };
  Object.entries(texts).forEach(([selector, key]) => setText(selector, content[key]));
  document.querySelectorAll(".service-card").forEach((card, index) => { const n = index + 1; setTextWithin(card, "h3", content[`service${n}Title`]); setTextWithin(card, "p", content[`service${n}Text`]); });
  document.querySelectorAll(".projects .carousel-slide").forEach((slide, index) => { const n = index + 1; setTextWithin(slide, "h3", content[`project${n}Title`]); setTextWithin(slide, "p", content[`project${n}Text`]); });
  const stats = document.querySelectorAll(".stat-item"); [1, 2, 3].forEach((n, index) => { if (stats[index]) { setTextWithin(stats[index], ".stat-number", content[`stats${n}`]); setTextWithin(stats[index], ".stat-label", content[`stats${n}Label`]); } });
  setImage(".treatment-plant-image img", content.plantImage); setImage("#newsCarousel .carousel-slide:first-child img", content.newsImage); setImage("#buildingCarousel .carousel-slide:nth-child(1) img", content.building1Image); setImage("#buildingCarousel .carousel-slide:nth-child(2) img", content.building2Image); setImage("#buildingCarousel .carousel-slide:nth-child(3) img", content.building3Image); setImage("#buildingCarousel .carousel-slide:nth-child(4) img", content.building4Image); setImage("#projectsCarousel .carousel-slide:nth-child(1) img", content.project1Image); setImage("#projectsCarousel .carousel-slide:nth-child(2) img", content.project2Image); setImage(".footer-logo img", content.footerLogo); setImage(".footer-logo a img", content.partnerLogo);
  const newsLink = document.querySelector("#newsCarousel .carousel-slide:first-child a"); if (newsLink) newsLink.href = content.newsLink;
  const video = document.querySelector(".video-container video source"); if (video) { video.src = content.videoSource; video.parentElement.load(); }
  const contactItems = document.querySelectorAll(".contact-info .contact-item p"); if (contactItems[0]) contactItems[0].textContent = content.address; if (contactItems[1]) contactItems[1].textContent = content.phone; if (contactItems[2]) contactItems[2].textContent = content.whatsapp; if (contactItems[4]) contactItems[4].textContent = content.hours; if (contactItems[5]) contactItems[5].textContent = content.hoursCash;
}

function setTextWithin(parent, selector, value) { const element = parent.querySelector(selector); if (element) element.textContent = value; }
document.addEventListener("DOMContentLoaded", applyPublicContent);
