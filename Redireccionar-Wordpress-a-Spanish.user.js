// ==UserScript==
// @name         Redireccionar URLs de WordPress.org a Español
// @namespace    redireccionar-wordpress-a-spanish
// @homepageURL  https://github.com/CesarChris710/redireccionar-wordpress-a-spanish/
// @version      1.0
// @description  Redireccionar URLs de WordPress.org a su versión en español
// @author       CesarChris710
// @match        *://*.wordpress.org/plugins/*
// @exclude      *://es.wordpress.org/plugins/*

// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Función para redireccionar URLs
    function redireccionarURL() {
        // URL actual
        var urlActual = window.location.href;

        // Reemplazar el dominio por "es.wordpress.org"
        var nuevaURL = urlActual.replace(/\/\/[^/]+\/plugins\//, "//es.wordpress.org/plugins/");

        // Redirigir a la nueva URL
        window.location.replace(nuevaURL);
    }

    // Llamar a la función de redireccionamiento cuando se cargue la página
    redireccionarURL();

})();
