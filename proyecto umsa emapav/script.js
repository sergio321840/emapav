// Funcionalidad del menú móvil
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileNav = document.getElementById("mobileNav")
  const menuIcon = document.getElementById("menuIcon")
  const header = document.querySelector(".header")

  const whatsappBtn = document.getElementById("whatsappBtn")
  const customerServiceBtn = document.getElementById("customerServiceBtn")
  const settingsBtn = document.getElementById("settingsBtn")

  // Hacer las burbujas visibles inmediatamente
  whatsappBtn.style.opacity = "1"
  whatsappBtn.style.visibility = "visible"
  customerServiceBtn.style.opacity = "1"
  customerServiceBtn.style.visibility = "visible"

  // Redirección del acceso interno al login local
  customerServiceBtn.addEventListener("click", () => {
    window.location.href = "./admin.html"
  })

  customerServiceBtn.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      window.location.href = "./admin.html"
    }
  })

  // Toggle menú móvil
  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active")

    if (mobileNav.classList.contains("active")) {
      menuIcon.className = "fas fa-times"
    } else {
      menuIcon.className = "fas fa-bars"
    }
  })

  // Cerrar menú móvil al hacer click en un enlace
  const mobileLinks = mobileNav.querySelectorAll(".nav-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active")
      menuIcon.className = "fas fa-bars"
    })
  })

  // Efecto scroll en header
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Smooth scroll para enlaces internos
  const navLinks = document.querySelectorAll('a[href^="#"]')
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      // Only apply smooth scroll for links with a valid target ID (more than just "#")
      if (targetId && targetId.length > 1) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          const headerHeight = header.offsetHeight;
          const targetPosition = targetSection.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });

  function initCarousel(carouselId, prevBtnId, nextBtnId, dotsId) {
    console.log(carouselId, prevBtnId, nextBtnId, dotsId);
    const carousel = document.getElementById(carouselId)
    const prevBtn = document.getElementById(prevBtnId)
    const nextBtn = document.getElementById(nextBtnId)
    const dotsContainer = document.getElementById(dotsId)

    if (!carousel || !prevBtn || !nextBtn || !dotsContainer) return

    const slides = carousel.querySelectorAll(".carousel-slide")
    const dots = dotsContainer.querySelectorAll(".dot")
    if (!slides.length || !dots.length) return
    let currentSlide = 0

    function showSlide(index) {
      slides.forEach((slide) => slide.classList.remove("active"))
      dots.forEach((dot) => dot.classList.remove("active"))
      slides[index].classList.add("active")
      dots[index].classList.add("active")
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length
      showSlide(currentSlide)
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length
      showSlide(currentSlide)
    }

    nextBtn.addEventListener("click", nextSlide)
    prevBtn.addEventListener("click", prevSlide)

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentSlide = index
        showSlide(currentSlide)
      })
    })

    setInterval(nextSlide, 8000)
    showSlide(0)
  }

  // Inicializar carruseles
  initCarousel("projectsCarousel", "projectsPrev", "projectsNext", "projectsDots")
  initCarousel("newsCarousel", "newsPrev", "newsNext", "newsDots")
  initCarousel("buildingCarousel", "buildingPrev", "buildingNext", "buildingDots")

  // Animaciones al hacer scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  const animatedElements = document.querySelectorAll(
    ".service-card, .stat-item, .contact-item, .about-content, .about-image, .carousel-container",
  )
  animatedElements.forEach((el) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })

  // Animación de contadores en stats
  const statNumbers = document.querySelectorAll(".stat-number")
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target)
          statsObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  statNumbers.forEach((stat) => {
    statsObserver.observe(stat)
  })

  function animateCounter(element) {
    const text = element.textContent
    const hasPlus = text.includes("+")
    const hasPercent = text.includes("%")
    const hasSlash = text.includes("/")
    const hasDash = text.includes("-")

    let finalNumber
    if (hasSlash || hasDash) {
      return
    } else {
      finalNumber = Number.parseInt(text.replace(/[^\d]/g, ""))
    }

    let currentNumber = 0
    const increment = finalNumber / 50
    const timer = setInterval(() => {
      currentNumber += increment
      if (currentNumber >= finalNumber) {
        currentNumber = finalNumber
        clearInterval(timer)
      }

      let displayText = Math.floor(currentNumber).toLocaleString()
      if (hasPlus) displayText += "+"
      if (hasPercent) displayText += "%"

      element.textContent = displayText
    }, 40)
  }

  function createSettingsPanel() {
    const panel = document.createElement("div")
    panel.className = "settings-panel"
    panel.id = "settingsPanel"
    panel.innerHTML = `
      <h3><i class="fas fa-cog"></i> Configuraciones</h3>
      
      <div class="setting-item">
        <span class="setting-label">Modo Oscuro</span>
        <label class="toggle-switch">
          <input type="checkbox" id="darkModeToggle">
          <span class="toggle-slider"></span>
        </label>
      </div>
      
      <div class="setting-item">
        <span class="setting-label">Animaciones</span>
        <label class="toggle-switch">
          <input type="checkbox" id="animationsToggle" checked>
          <span class="toggle-slider"></span>
        </label>
      </div>
      
      <div class="setting-item">
        <span class="setting-label">Tamaño de Fuente</span>
        <div class="setting-buttons">
          <button class="setting-btn" data-size="small">A</button>
          <button class="setting-btn active" data-size="normal">A</button>
          <button class="setting-btn" data-size="large">A</button>
        </div>
      </div>
    `

    document.body.appendChild(panel)
    return panel
  }

  const settingsPanel = createSettingsPanel()
  let isPanelVisible = false

  settingsBtn.addEventListener("click", () => {
    isPanelVisible = !isPanelVisible
    if (isPanelVisible) {
      settingsPanel.classList.add("active")
    } else {
      settingsPanel.classList.remove("active")
    }
  })

  document.addEventListener("click", (e) => {
    if (!settingsBtn.contains(e.target) && !settingsPanel.contains(e.target)) {
      settingsPanel.classList.remove("active")
      isPanelVisible = false
    }
  })

  const darkModeToggle = settingsPanel.querySelector("#darkModeToggle")
  const animationsToggle = settingsPanel.querySelector("#animationsToggle")
  const fontSizeButtons = settingsPanel.querySelectorAll(".setting-btn")

  darkModeToggle.checked = localStorage.getItem("darkMode") === "true"
  animationsToggle.checked = localStorage.getItem("animations") !== "false"
  const savedFontSize = localStorage.getItem("fontSize") || "normal"

  applySettings()

  darkModeToggle.addEventListener("change", () => {
    localStorage.setItem("darkMode", darkModeToggle.checked)
    applySettings()
  })

  animationsToggle.addEventListener("change", () => {
    localStorage.setItem("animations", animationsToggle.checked)
    applySettings()
  })

  fontSizeButtons.forEach((btn) => {
    if (btn.dataset.size === savedFontSize) {
      btn.classList.add("active")
    }

    btn.addEventListener("click", () => {
      fontSizeButtons.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
      localStorage.setItem("fontSize", btn.dataset.size)
      applySettings()
    })
  })

  function applySettings() {
    const darkMode = localStorage.getItem("darkMode") === "true"
    const animations = localStorage.getItem("animations") !== "false"
    const fontSize = localStorage.getItem("fontSize") || "normal"

    if (darkMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }

    if (!animations) {
      document.body.classList.add("no-animations")
    } else {
      document.body.classList.remove("no-animations")
    }

    document.body.className = document.body.className.replace(/font-size-\w+/g, "")
    if (fontSize !== "normal") {
      document.body.classList.add(`font-size-${fontSize}`)
    }
  }

  whatsappBtn.addEventListener("click", () => {
    const phoneNumber = "59169960342"
    const message = "Hola, me gustaría obtener información sobre los servicios de EMAPAV."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  })

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const hero = document.querySelector(".hero")
    const heroBackground = document.querySelector(".hero-background")

    if (hero && heroBackground) {
      const rate = scrolled * -0.5
      heroBackground.style.transform = `translateY(${rate}px)`
    }
  })

  const andeanPatterns = document.querySelectorAll(".andean-pattern")
  const llamaPixel = document.querySelector(".llama-pixel")
  const condorPixel = document.querySelector(".condor-pixel")

  andeanPatterns.forEach((pattern, index) => {
    setInterval(
      () => {
        const randomX = Math.random() * 10 - 5
        const randomY = Math.random() * 10 - 5
        pattern.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 10 - 5}deg)`
      },
      4000 + index * 1500,
    )
  })

  if (llamaPixel) {
    setInterval(() => {
      llamaPixel.style.transform = `translateY(${Math.sin(Date.now() * 0.001) * 5}px)`
    }, 50)
  }

  if (condorPixel) {
    setInterval(() => {
      condorPixel.style.transform = `translateX(${Math.sin(Date.now() * 0.0008) * 8}px) translateY(${Math.cos(Date.now() * 0.0012) * 3}px)`
    }, 50)
  }

  const serviceCards = document.querySelectorAll(".service-card")
  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  const newsLinks = document.querySelectorAll(".news-link")
  newsLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.02)"
    })

    link.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
    })
  })

  // Lógica para el modal de Guía de Trámites
  const tramitesModal = document.getElementById("tramitesModal");
  const openTramitesModalBtn = document.getElementById("openTramitesModalBtn");
  const closeTramitesModalBtn = document.getElementById("closeTramitesModalBtn");
  const tramitesTableBody = document.getElementById("tramitesTableBody");

  if (tramitesModal && openTramitesModalBtn && closeTramitesModalBtn && tramitesTableBody) {
    openTramitesModalBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      tramitesModal.style.display = "block";
      await loadTramites();
    });

    closeTramitesModalBtn.addEventListener("click", () => {
      tramitesModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target == tramitesModal) {
        tramitesModal.style.display = "none";
      }
    });

    async function loadTramites() {
      try {
        const response = await fetch('./gs-app/tramites_api.php');
        const result = await response.json();
        
        if (result.success) {
          tramitesTableBody.innerHTML = ''; // Limpiar tabla
          if (result.data.length === 0) {
            tramitesTableBody.innerHTML = '<tr><td colspan="2">No hay trámites disponibles en este momento.</td></tr>';
            return;
          }

          result.data.forEach(tramite => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
              <td>${tramite.nombre}</td>
              <td class="text-center">
                <a href="./gs-app/tramites_api.php?id=${tramite.id}" target="_blank" class="btn-pdf">
                  <i class="fas fa-file-pdf"></i>
                </a>
              </td>
            `;
            tramitesTableBody.appendChild(tr);
          });
        } else {
            // Lanzar un error con los detalles del backend
            throw new Error(result.error + (result.details ? `: ${result.details}` : ''));
        }
      } catch (error) {
        console.error('Error en loadTramites:', error);
        // Mostrar el mensaje de error detallado en la tabla
        tramitesTableBody.innerHTML = `<tr><td colspan="2">Error al cargar los trámites: ${error.message}</td></tr>`;
      }
    }
  }

  // ==================== CALCULADORA MODAL ====================
  const calcFloatBtn = document.getElementById('calculatorFloatBtn');
  const calcModal = document.getElementById('calculatorModalOverlay');
  const calcCloseBtn = document.getElementById('closeCalcModal');
  const calcForm = document.getElementById('calculatorModalForm');
  const calcLoading = document.getElementById('calcModalLoading');
  const calcResult = document.getElementById('calcModalResult');
  const calcError = document.getElementById('calcModalError');
  const calcErrorText = document.getElementById('calcModalErrorText');
  
  const categoriaModalSelect = document.getElementById('calcModalCategoria');
  const periodoModalSelect = document.getElementById('calcModalPeriodo');
  const consumoModalInput = document.getElementById('calcModalConsumo');
  const descuentoModalDiv = document.getElementById('calcModalDescuentoDiv');
  const descuentoModalCheckbox = document.getElementById('calcModalDescuentoLey');
  const alcantarilladoModalDiv = document.getElementById('calcModalAlcantarilladoDiv');
  const alcantarilladoModalCheckbox = document.getElementById('calcModalIncluirAlcantarillado');

  if (calcFloatBtn) {
    calcFloatBtn.addEventListener('click', () => {
      calcModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      loadCalculatorData();
    });

    function closeCalculatorModal() {
      calcModal.classList.remove('active');
      document.body.style.overflow = '';
    }

    calcCloseBtn.addEventListener('click', closeCalculatorModal);
    
    calcModal.addEventListener('click', (e) => {
      if (e.target === calcModal) closeCalculatorModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && calcModal.classList.contains('active')) {
        closeCalculatorModal();
      }
    });

    async function loadCalculatorData() {
      await loadModalCategorias();
      await loadModalPeriodos();
      toggleModalDescuento();
      toggleAlcantarilladoCheckbox();
    }

    async function loadModalCategorias() {
      try {
        const response = await fetch('./gs-app/api2/categorias.php');
        
        if (!response.ok) {
          throw new Error('Error al cargar categorías');
        }
        
        const categorias = await response.json();
        
        categoriaModalSelect.innerHTML = '<option value="">Seleccione una categoría</option>';
        categorias.forEach(cat => {
          const option = document.createElement('option');
          option.value = cat.id_categoria;
          option.textContent = cat.nombre;
          option.dataset.nombre = cat.nombre;
          categoriaModalSelect.appendChild(option);
        });
      } catch (error) {
        console.error('Error:', error);
        showError('Error al cargar las categorías. Por favor, recargue la página.');
      }
    }

    async function loadModalPeriodos() {
      try {
        const response = await fetch('./gs-app/api2/periodos.php');
        
        if (!response.ok) {
          throw new Error('Error al cargar períodos');
        }
        
        const periodos = await response.json();
        
        periodoModalSelect.innerHTML = '<option value="">Seleccione un período</option>';
        periodos.forEach(p => {
          const option = document.createElement('option');
          option.value = p.key;
          option.textContent = p.texto;
          periodoModalSelect.appendChild(option);
        });
      } catch (error) {
        console.error('Error:', error);
        showError('Error al cargar los períodos. Por favor, recargue la página.');
      }
    }

    function toggleModalDescuento() {
      const selectedOption = categoriaModalSelect.options[categoriaModalSelect.selectedIndex];
      const nombre = selectedOption ? selectedOption.dataset.nombre : '';
      const consumo = parseFloat(consumoModalInput.value) || 0;
      
      const esDomestica = (nombre === 'Domestica 1' || nombre === 'Domestica 2');
      
      if (esDomestica) {
        descuentoModalDiv.classList.add('show');
        
        const label = descuentoModalDiv.querySelector('label');
        if (consumo > 15) {
          label.innerHTML = '<strong>Aplicar descuento Ley 1886</strong> (-20% sobre los primeros 15 m³)<br><small style="color: #666;">El descuento solo se aplicará a los primeros 15 metros cúbicos consumidos.</small>';
        } else {
          label.innerHTML = '<strong>Aplicar descuento Ley 1886</strong> (-20% para categorías domésticas 1 y 2)';
        }
      } else {
        descuentoModalDiv.classList.remove('show');
        descuentoModalCheckbox.checked = false;
      }
    }

    function toggleAlcantarilladoCheckbox() {
      const selectedPeriod = periodoModalSelect.value;
      if (!selectedPeriod) {
        alcantarilladoModalDiv.classList.remove('show');
        return;
      }

      const month = selectedPeriod.split('-')[0];
      if (month === '8') {
        alcantarilladoModalDiv.classList.add('show');
      }

      else {
        alcantarilladoModalDiv.classList.remove('show');
        alcantarilladoModalCheckbox.checked = false;
      }
    }

    categoriaModalSelect.addEventListener('change', toggleModalDescuento);
    consumoModalInput.addEventListener('input', toggleModalDescuento);
    periodoModalSelect.addEventListener('change', toggleAlcantarilladoCheckbox);

    function showError(message) {
      calcErrorText.textContent = message;
      calcError.classList.add('show');
      
      setTimeout(() => {
        calcError.classList.remove('show');
      }, 5000);
    }

    calcForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      calcError.classList.remove('show');
      calcResult.classList.remove('show');
      
      const formData = new FormData(calcForm);
      const params = new URLSearchParams();
      
      params.append('categoria_id', formData.get('categoria'));
      params.append('consumo', formData.get('consumo_mc'));
      params.append('periodo', formData.get('periodo'));
      
      if (formData.get('descuento_ley')) {
        params.append('aplicar_ley', '1');
      }

      if (formData.get('incluir_alcantarillado')) {
        params.append('incluir_alcantarillado', '1');
      }

      calcLoading.classList.add('show');

      try {
        const response = await fetch(`./gs-app/api2/calcular.php?${params}`);
        const data = await response.json();

        if (!data.success || data.error) {
          throw new Error(data.error || 'Error al calcular la tarifa');
        }

        displayModalResult(data);
        
      } catch (error) {
        console.error('Error:', error);
        showError(error.message || 'Hubo un error al calcular. Por favor, intente nuevamente.');
      } finally {
        calcLoading.classList.remove('show');
      }
    });

    function displayModalResult(result) {
      const detailsDiv = document.getElementById('calcModalResultDetails');
      const totalDiv = document.getElementById('calcModalTotalAmount');

      detailsDiv.innerHTML = '';

      result.detalle.forEach(item => {
        const div = document.createElement('div');
        div.className = 'calc-result-item';
        div.innerHTML = `
          <span class="calc-result-label">${item.concepto}</span>
          <span class="calc-result-value">${item.valor}</span>
        `;
        detailsDiv.appendChild(div);
      });

      totalDiv.textContent = `Bs. ${result.total_a_pagar.toFixed(2)}`;

      calcResult.classList.add('show');
      
      setTimeout(() => {
        calcResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }
})

// Funciones fuera del DOMContentLoaded (si son necesarias globalmente)
function isInViewport(element) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

function handleScrollAnimation() {
  const elements = document.querySelectorAll(".fade-in:not(.visible)")
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("visible")
    }
  })
}

window.addEventListener("scroll", handleScrollAnimation)
window.addEventListener("load", handleScrollAnimation)
/* ===========================================================
   Visor de PDF en solo lectura (sección Informes)
   Renderiza cada página en un canvas con PDF.js: el archivo
   nunca se entrega como enlace descargable.
   =========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("pdfModal")
  const canvas = document.getElementById("pdfCanvas")
  if (!modal || !canvas || typeof pdfjsLib === "undefined") return

  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"

  const ctx = canvas.getContext("2d")
  const titleEl = document.getElementById("pdfTitle")
  const pageNumEl = document.getElementById("pdfPageNum")
  const pageCountEl = document.getElementById("pdfPageCount")
  const loader = document.getElementById("pdfLoader")
  const loaderText = document.getElementById("pdfLoaderText")
  const stage = document.getElementById("pdfStage")
  const prevBtn = document.getElementById("pdfPrev")
  const nextBtn = document.getElementById("pdfNext")
  const zoomInBtn = document.getElementById("pdfZoomIn")
  const zoomOutBtn = document.getElementById("pdfZoomOut")
  const closeBtn = document.getElementById("pdfClose")

  let pdfDoc = null
  let pageNum = 1
  let scale = 1.3
  let rendering = false
  let pendingPage = null

  function showLoader(text) {
    loaderText.textContent = text
    loader.style.display = "flex"
  }

  function hideLoader() {
    loader.style.display = "none"
  }

  function updateControls() {
    prevBtn.disabled = !pdfDoc || pageNum <= 1
    nextBtn.disabled = !pdfDoc || pageNum >= pdfDoc.numPages
  }

  function renderPage(num) {
    if (!pdfDoc) return
    rendering = true
    pdfDoc.getPage(num).then((page) => {
      const viewport = page.getViewport({ scale: scale })
      canvas.width = viewport.width
      canvas.height = viewport.height
      canvas.style.width = viewport.width + "px"
      canvas.style.height = viewport.height + "px"

      page.render({ canvasContext: ctx, viewport: viewport }).promise.then(() => {
        rendering = false
        hideLoader()
        if (pendingPage !== null) {
          const next = pendingPage
          pendingPage = null
          renderPage(next)
        }
      })
    })
    pageNumEl.textContent = num
    updateControls()
  }

  function queueRender(num) {
    if (rendering) {
      pendingPage = num
    } else {
      renderPage(num)
    }
  }

  function openDocument(doc, title) {
    titleEl.textContent = title
    pageNum = 1
    scale = 1.3
    pageNumEl.textContent = "0"
    pageCountEl.textContent = "0"
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
    showLoader("Cargando documento...")

    const task = pdfjsLib.getDocument({
      url: "visor_pdf.php?doc=" + encodeURIComponent(doc),
      // El servidor no soporta peticiones por rango: se descarga en un solo flujo
      disableRange: true,
      disableStream: false,
    })

    task.onProgress = (data) => {
      if (data.total) {
        const pct = Math.round((data.loaded / data.total) * 100)
        showLoader("Cargando documento... " + Math.min(pct, 100) + "%")
      }
    }

    task.promise
      .then((doc) => {
        pdfDoc = doc
        pageCountEl.textContent = doc.numPages
        renderPage(pageNum)
      })
      .catch((error) => {
        console.error("Error al abrir el PDF:", error)
        showLoader("No se pudo cargar el documento. Intente nuevamente.")
      })
  }

  function closeViewer() {
    modal.style.display = "none"
    document.body.style.overflow = ""
    if (pdfDoc) {
      pdfDoc.destroy()
      pdfDoc = null
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  document.querySelectorAll(".btn-view-pdf").forEach((btn) => {
    btn.addEventListener("click", () => {
      openDocument(btn.dataset.doc, btn.dataset.title || "Documento")
    })
  })

  prevBtn.addEventListener("click", () => {
    if (pageNum > 1) {
      pageNum--
      queueRender(pageNum)
    }
  })

  nextBtn.addEventListener("click", () => {
    if (pdfDoc && pageNum < pdfDoc.numPages) {
      pageNum++
      queueRender(pageNum)
    }
  })

  zoomInBtn.addEventListener("click", () => {
    if (!pdfDoc || scale >= 3) return
    scale = Math.min(scale + 0.25, 3)
    queueRender(pageNum)
  })

  zoomOutBtn.addEventListener("click", () => {
    if (!pdfDoc || scale <= 0.6) return
    scale = Math.max(scale - 0.25, 0.6)
    queueRender(pageNum)
  })

  closeBtn.addEventListener("click", closeViewer)

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeViewer()
  })

  // Navegación con teclado y bloqueo de atajos de guardado/impresión
  document.addEventListener("keydown", (event) => {
    if (modal.style.display !== "block") return

    if (event.key === "Escape") {
      closeViewer()
      return
    }
    if (event.key === "ArrowRight" || event.key === "PageDown") {
      nextBtn.click()
      return
    }
    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      prevBtn.click()
      return
    }
    const tecla = event.key.toLowerCase()
    if ((event.ctrlKey || event.metaKey) && (tecla === "s" || tecla === "p")) {
      event.preventDefault()
    }
  })

  // Sin menú contextual ni arrastre sobre el documento
  stage.addEventListener("contextmenu", (event) => event.preventDefault())
  stage.addEventListener("dragstart", (event) => event.preventDefault())
})
