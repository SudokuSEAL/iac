"use strict";

(function () {

  window.addEventListener('load', init);

  function init() {
    embedPDF('.brochure-embed', 'docs/uw-iac-brochure.pdf#toolbar=0');
    embedPDF('.expectations-embed', 'docs/what-to-expect.pdf#toolbar=0');

    // if (!navigator.pdfViewerEnabled) {

    // } else {

    // }

    // if ('PDF Viewer' in navigator.plugins) {

    // } else {

    // }
  }

  /**
   * Adds pdf embed in the selected element, inserts download link if not supported.
   * @param {String} element - selector for the element the embed should go in.
   * @param {*} file - relative path to the pdf file.
   */
  function embedPDF(element, file) {
    let embed = document.createElement('embed');
    embed.src = file;
    embed.type = 'application/pdf';
    embed.width = '100%';
    embed.height = '100%';

    let container = document.querySelector(element);
    container.appendChild(embed);
  }


})();