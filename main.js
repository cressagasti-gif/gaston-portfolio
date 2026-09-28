// ==========================================================
// Gastón Cressa · Portfolio — main.js
// Sin dependencias. Solo mejoras de interacción.
// ==========================================================

(function () {
  "use strict";

  // ---------- año del footer ----------
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // ---------- marcar la sección activa en el nav ----------
  var links = Array.prototype.slice.call(
    document.querySelectorAll(".nav-links a[href^='#']")
  );
  var sections = links
    .map(function (a) {
      return document.querySelector(a.getAttribute("href"));
    })
    .filter(Boolean);

  function setActive(id) {
    links.forEach(function (a) {
      a.style.color = a.getAttribute("href") === "#" + id ? "var(--red-hi)" : "";
    });
  }

  if (sections.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (s) { io.observe(s); });
  }

  // ---------- parallax suave del hero ----------
  var rain = document.querySelector(".hero-rain");
  if (rain && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var ticking = false;
    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(function () {
          var y = window.pageYOffset;
          if (y < 900) {
            rain.style.transform = "translateY(" + y * 0.22 + "px)";
            rain.style.opacity = String(Math.max(0.12, 0.5 - y / 1400));
          }
          ticking = false;
        });
      },
      { passive: true }
    );
  }

  // ---------- aparición al hacer scroll ----------
  var anim = Array.prototype.slice.call(
    document.querySelectorAll(".card, .chips, .social, .about-grid > *")
  );
  if (anim.length && "IntersectionObserver" in window) {
    anim.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(14px)";
      el.style.transition = "opacity .5s ease, transform .5s ease";
    });
    var io2 = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e, i) {
          if (!e.isIntersecting) return;
          var el = e.target;
          setTimeout(function () {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, i * 60);
          io2.unobserve(el);
        });
      },
      { threshold: 0.12 }
    );
    anim.forEach(function (el) { io2.observe(el); });

    // failsafe: si el observer no dispara (contenido en un iframe raro,
    // scroll raro, etc.) el texto NO puede quedar invisible.
    setTimeout(function () {
      anim.forEach(function (el) {
        if (el.style.opacity === "0") {
          el.style.opacity = "1";
          el.style.transform = "none";
        }
      });
    }, 2500);
  }
})();
