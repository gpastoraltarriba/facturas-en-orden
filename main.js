/* Facturas en orden — JS mínimo: scroll, idioma (placeholder), FAQ y formulario.
   El enlace de WhatsApp está solo en index.html, en #whatsapp (WHATSAPP_URL). */
(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      var id = link.getAttribute("href").slice(1);
      var target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
      var focusTarget = target.querySelector("h1, h2, h3") || target;
      if (!focusTarget.hasAttribute("tabindex")) {
        focusTarget.setAttribute("tabindex", "-1");
      }
      focusTarget.focus({ preventScroll: true });
    });
  });

  document.querySelectorAll("[data-lang-switch]").forEach(function (group) {
    var button = group.querySelector(".lang-de");
    if (!button) return;

    function setOpen(open) {
      group.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", open ? "true" : "false");
    }

    button.addEventListener("click", function () {
      setOpen(button.getAttribute("aria-expanded") !== "true");
    });

    button.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });

    document.addEventListener("click", function (event) {
      if (!group.contains(event.target)) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });
  });

  document.querySelectorAll(".faq-trigger").forEach(function (button) {
    button.addEventListener("click", function () {
      var panel = document.getElementById(button.getAttribute("aria-controls"));
      if (!panel) return;
      var open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", open ? "false" : "true");
      panel.hidden = open;
    });
  });

  var form = document.getElementById("form-contacto");
  if (!form) return;

  var status = document.getElementById("form-status");
  var submit = form.querySelector('[type="submit"]');
  var submitLabel = submit ? submit.textContent : "";

  form.querySelectorAll("input, select, textarea").forEach(function (field) {
    if (field.name === "_gotcha" || field.type === "hidden") return;

    field.addEventListener("invalid", function () {
      if (field.validity.valueMissing) {
        field.setCustomValidity("Rellena este campo.");
      } else if (field.validity.typeMismatch) {
        field.setCustomValidity("Escribe un email válido.");
      } else {
        field.setCustomValidity("Revisa este campo.");
      }
    });

    field.addEventListener("input", function () {
      field.setCustomValidity("");
    });

    field.addEventListener("change", function () {
      field.setCustomValidity("");
    });
  });

  function showStatus(message, kind) {
    status.className = "form-status is-visible " + kind;
    status.textContent = message;
    if (!status.hasAttribute("tabindex")) status.setAttribute("tabindex", "-1");
    status.focus();
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!status || !submit) return;

    status.className = "form-status";
    status.textContent = "";
    submit.disabled = true;
    submit.classList.add("is-loading");
    submit.setAttribute("aria-busy", "true");
    submit.textContent = "Enviando…";

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then(function (response) {
        if (!response.ok) throw new Error("request failed");
        form.reset();
        showStatus(
          "Listo. He recibido tu mensaje. Te escribo para concretar la revisión de 15 minutos.",
          "success"
        );
      })
      .catch(function () {
        showStatus(
          "No se ha podido enviar. Revisa tu conexión e inténtalo de nuevo, o escríbeme por WhatsApp.",
          "error"
        );
      })
      .finally(function () {
        submit.disabled = false;
        submit.classList.remove("is-loading");
        submit.removeAttribute("aria-busy");
        submit.textContent = submitLabel;
      });
  });
})();
