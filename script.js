"use strict";

/*
  Script simple, limpio y escalable
*/

document.addEventListener("DOMContentLoaded", () => {
  initGallery();
});

function initGallery() {
  const images = document.querySelectorAll(".gallery-grid img");

  images.forEach(image => {
    image.addEventListener("click", () => {
      showMessage();
    });
  });
}

function showMessage() {
  alert("¡Gracias por tu interés en Zipline Guanacaste!");
}
