/* =========================================================
   EMAPAV · Lógica del sitio
   1. Configuración (edite aquí los datos)
   2. Utilidades
   3. Menú
   4. Carruseles
   5. Contadores
   6. Modales
   7. Secciones dinámicas
   8. Formulario de consultas
   9. Botón subir
   ========================================================= */
(function () {
  'use strict';

  /* ---------- 1. CONFIGURACIÓN ---------- */
  var CONFIG = {
    endpointConsultas: 'api/consultas.php',

    informes: [
      { t: 'Estanques - Resultados',  d: 'Análisis de estanques del mes de junio.',        f: 'documentos/estanques.pdf' },
      { t: 'Fuentes subterráneas',    d: 'Monitoreo de fuentes subterráneas, junio.',      f: 'documentos/subterraneas.pdf' },
      { t: 'Informes externos 2026',  d: 'Informes de laboratorio de la gestión 2026.',    f: 'documentos/externos.pdf' },
      { t: 'Red de distribución',     d: 'Control de calidad en la red, junio.',           f: 'documentos/red.pdf' }
    ],

    tramites: [
      { t: 'Ejemplo: Solicitud de nueva conexión', f: 'tramites/nueva-conexion.pdf' }
    ],

    autoridades: [
      { n: 'Nombre Apellido', c: 'Gerente General',                 f: '' },
      { n: 'Nombre Apellido', c: 'Jefe Administrativo Financiero',  f: '' },
      { n: 'Nombre Apellido', c: 'Jefe Técnico Operativo',          f: '' },
      { n: 'Nombre Apellido', c: 'Jefe de Atención al Usuario',     f: '' }
    ],

    /* Ejemplo: { f: '30/10/2026', z: 'Zona Centro', m: 'Mantenimiento de red' } */
    cortes: [],

    transparencia: [
      { t: 'Rendición pública de cuentas', d: 'Informe de gestión',    i: 'fa-chart-pie',        f: '#' },
      { t: 'Memoria institucional',        d: 'Resumen anual',         i: 'fa-book',             f: '#' },
      { t: 'Normativa y reglamentos',      d: 'Documentos legales',    i: 'fa-scale-balanced',   f: '#' },
      { t: 'Convocatorias',                d: 'Trabaje con nosotros',  i: 'fa-briefcase',        f: '#' },
      { t: 'Estructura organizacional',    d: 'Organigrama',           i: 'fa-sitemap',          f: '#' },
      { t: 'Resoluciones de tarifas',      d: 'Tarifas vigentes',      i: 'fa-file-signature',   f: '#' }
    ],

    galeria: [
      'images/ob1.png', 'images/ob2.png',
      'images/edif1.png', 'images/edif2.png', 'images/edif3.png', 'images/edif4.png',
      'images/planta-tratamiento-viacha.jpg', 'images/not1.png'
    ]
  };


  /* ---------- 2. UTILIDADES ---------- */
  function $(selector, ctx) { return (ctx || document).querySelector(selector); }
  function $$(selector, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(selector)); }

  /* Evita que un texto de la configuración rompa el HTML */
  function esc(text) {
    return String(text).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }


  /* ---------- 3. MENÚ ---------- */
  function initMenu() {
    var nav = $('#nav');
    $('#burger').addEventListener('click', function () { nav.classList.toggle('on'); });
    $$('#nav a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('on'); });
    });
  }


  /* ---------- 4. CARRUSELES ---------- */
  function initCarousels() {
    $$('[data-car]').forEach(function (car) {
      var track = $('.slides', car);
      var total = track.children.length;
      var current = 0;
      var timer;

      car.insertAdjacentHTML('beforeend',
        '<button class="cbtn p" aria-label="Anterior"><i class="fas fa-chevron-left"></i></button>' +
        '<button class="cbtn n" aria-label="Siguiente"><i class="fas fa-chevron-right"></i></button>' +
        '<div class="dots">' + new Array(total + 1).join('<i></i>') + '</div>');

      var dots = $$('.dots i', car);

      function goTo(index) {
        current = (index + total) % total;
        track.style.transform = 'translateX(-' + current * 100 + '%)';
        dots.forEach(function (d, i) { d.classList.toggle('on', i === current); });
      }
      function restartTimer() {
        clearInterval(timer);
        timer = setInterval(function () { goTo(current + 1); }, 5500);
      }

      $('.p', car).addEventListener('click', function () { goTo(current - 1); restartTimer(); });
      $('.n', car).addEventListener('click', function () { goTo(current + 1); restartTimer(); });
      dots.forEach(function (d, i) { d.addEventListener('click', function () { goTo(i); restartTimer(); }); });

      goTo(0);
      restartTimer();
    });
  }


  /* ---------- 5. CONTADORES ---------- */
  function initCounters() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);

        var el = entry.target;
        var max = Number(el.dataset.n);
        var suffix = el.dataset.s || '';
        var start = null;

        function step(ts) {
          start = start || ts;
          var p = Math.min((ts - start) / 1400, 1);
          el.textContent = Math.round(max * p).toLocaleString('es-BO') + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });

    $$('[data-n]').forEach(function (el) { observer.observe(el); });
  }


  /* ---------- 6. MODALES ---------- */
  function openModal(id) { $('#' + id).classList.add('on'); }

  function closeModals() {
    $$('.modal.on').forEach(function (m) { m.classList.remove('on'); });
    $('#docFrame').src = 'about:blank';
  }

  function initModals() {
    $$('[data-open]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(btn.dataset.open);
      });
    });

    $$('.modal').forEach(function (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal || e.target.hasAttribute('data-close')) closeModals();
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModals();
    });
  }


  /* ---------- 7. SECCIONES DINÁMICAS ---------- */
  function renderAutoridades() {
    $('#dirGrid').innerHTML = CONFIG.autoridades.map(function (a) {
      var avatar = a.f
        ? '<img src="' + esc(a.f) + '" alt="' + esc(a.n) + '">'
        : '<i class="fas fa-user-tie"></i>';
      return '<div class="person"><div class="av">' + avatar + '</div><b>' + esc(a.n) + '</b><span>' + esc(a.c) + '</span></div>';
    }).join('');
  }

  function renderCortes() {
    var body = $('#cortesBody');
    if (!CONFIG.cortes.length) {
      body.innerHTML = '<tr><td colspan="3" class="empty"><i class="fas fa-circle-check"></i> No hay cortes programados por ahora.</td></tr>';
      return;
    }
    body.innerHTML = CONFIG.cortes.map(function (c) {
      return '<tr><td>' + esc(c.f) + '</td><td>' + esc(c.z) + '</td><td>' + esc(c.m) + '</td></tr>';
    }).join('');
  }

  function renderTransparencia() {
    $('#transGrid').innerHTML = CONFIG.transparencia.map(function (t) {
      return '<a class="tr" href="' + esc(t.f) + '" target="_blank" rel="noopener"><i class="fas ' + esc(t.i) + '"></i>' +
             '<div><b>' + esc(t.t) + '</b><span>' + esc(t.d) + '</span></div></a>';
    }).join('');
  }

  function renderInformes() {
    $('#docGrid').innerHTML = CONFIG.informes.map(function (d, i) {
      return '<article class="doc"><i class="fas fa-file-pdf f"></i><h3>' + esc(d.t) + '</h3><p>' + esc(d.d) + '</p>' +
             '<button class="btn btn-azul" data-doc="' + i + '"><i class="fas fa-book-open"></i> Leer documento</button></article>';
    }).join('');

    $$('[data-doc]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var doc = CONFIG.informes[btn.dataset.doc];
        $('#docTitle').textContent = doc.t;
        $('#docFrame').src = doc.f + '#toolbar=0&navpanes=0'; /* solo lectura */
        openModal('mDoc');
      });
    });
  }

  function renderTramites() {
    $('#tramBody').innerHTML = CONFIG.tramites.map(function (t) {
      return '<tr><td>' + esc(t.t) + '</td><td><a class="btn btn-azul btn-small" href="' + esc(t.f) + '" download aria-label="Descargar"><i class="fas fa-download"></i></a></td></tr>';
    }).join('');
  }

  function renderGaleria() {
    $('#galGrid').innerHTML = CONFIG.galeria.map(function (src, i) {
      return '<button data-g="' + i + '" aria-label="Ampliar foto ' + (i + 1) + '"><img src="' + esc(src) + '" alt="Foto ' + (i + 1) + '" loading="lazy"></button>';
    }).join('');

    $$('[data-g]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        $('#lbImg').src = CONFIG.galeria[btn.dataset.g];
        openModal('mLb');
      });
    });
  }


  /* ---------- 8. FORMULARIO DE CONSULTAS ---------- */
  function initClaimForm() {
    var form = $('#claimForm');
    var status = $('#claimStatus');
    var submit = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      status.className = 'form-status';
      status.textContent = 'Enviando tu solicitud…';
      status.classList.add('success');
      submit.disabled = true;

      var f = form.elements;
      var payload = {
        nombre: f.nombre.value.trim(),
        correo: f.correo.value.trim(),
        direccion: f.direccion.value.trim(),
        motivo: f.motivo.value,
        detalle: f.detalle.value.trim(),
        consentimiento: f.consentimiento.checked
      };

      try {
        var response = await fetch(CONFIG.endpointConsultas, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        });
        var result = await response.json();
        if (!response.ok || !result.ok) throw new Error(result.message || 'No se pudo registrar la solicitud.');

        status.className = 'form-status success';
        status.textContent = '¡Solicitud recibida! Tu número de referencia es ' + result.referencia +
          '. EMAPAV podrá responder al correo ' + payload.correo + '. Guarda este número para futuras consultas.';
        form.reset();
      } catch (err) {
        status.className = 'form-status error';
        status.textContent = 'No se pudo enviar la solicitud al sistema. Comprueba tu conexión o inténtalo más tarde. Si el problema continúa, llama al 2800592 o 2800514.';
      } finally {
        submit.disabled = false;
      }
    });
  }


  /* ---------- 9. BOTÓN SUBIR ---------- */
  function initScrollTop() {
    var btn = $('#top');
    btn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    window.addEventListener('scroll', function () {
      btn.style.display = window.scrollY > 600 ? 'block' : 'none';
    });
  }


  /* ---------- INICIO ---------- */
  initMenu();
  initCarousels();
  initCounters();
  initModals();
  renderAutoridades();
  renderCortes();
  renderTransparencia();
  renderInformes();
  renderTramites();
  renderGaleria();
  initClaimForm();
  initScrollTop();
})();
