// Comparador «Cien años después» y formulario que prepara el correo de reserva.
(function () {
  "use strict";

  document.querySelectorAll("[data-comparador]").forEach(function (caja) {
    var control = caja.querySelector("input[type=range]");
    if (!control) return;
    var pintar = function () { caja.style.setProperty("--pos", control.value + "%"); };
    control.addEventListener("input", pintar);
    pintar();
  });

  var form = document.getElementById("formulario-reserva");
  if (!form) return;
  var aviso = document.getElementById("formulario-aviso");
  var DESTINO = "tenerife.ambiental-res@barcelo.com";

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var centro = form.elements.centro;
    if (!centro.value.trim()) {
      centro.setAttribute("aria-invalid", "true");
      centro.focus();
      aviso.textContent = "Escriban el nombre del centro para poder preparar el correo.";
      return;
    }
    centro.removeAttribute("aria-invalid");

    var v = function (n) { return (form.elements[n].value || "").trim() || "—"; };
    var cuerpo = [
      "Hola:",
      "",
      "Queremos solicitar una visita escolar a San Blas Reserva Ambiental para el curso 2026–2027.",
      "",
      "Centro educativo: " + v("centro"),
      "Municipio: " + v("municipio"),
      "Cursos y grupos: " + v("cursos"),
      "Número aproximado de alumnado: " + v("alumnado"),
      "Fechas posibles: " + v("fechas"),
      "Persona de contacto: " + v("nombre"),
      "Teléfono: " + v("telefono"),
      "Observaciones: " + v("notas"),
      "",
      "Quedamos a la espera de su confirmación.",
      "Un saludo."
    ].join("\r\n");
    var asunto = "Solicitud de visita escolar 2026–2027 · " + centro.value.trim();

    window.location.href = "mailto:" + DESTINO +
      "?subject=" + encodeURIComponent(asunto) +
      "&body=" + encodeURIComponent(cuerpo);
    aviso.textContent = "Hemos abierto su programa de correo con el mensaje escrito. Si no se abrió, escríbannos a " + DESTINO + ".";
  });
})();
