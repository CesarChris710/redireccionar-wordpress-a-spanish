// ==UserScript==
// @name         Redireccionar URLs de WordPress.org a Español
// @namespace    redireccionar-wordpress-a-spanish
// @homepageURL  https://github.com/CesarChris710/redireccionar-wordpress-a-spanish/
// @downloadURL  https://raw.githubusercontent.com/CesarChris710/redireccionar-wordpress-a-spanish/master/Redireccionar-Wordpress-a-Spanish.user.js
// @updateURL    https://raw.githubusercontent.com/CesarChris710/redireccionar-wordpress-a-spanish/master/Redireccionar-Wordpress-a-Spanish.user.js
// @version      1.0
// @description  Redireccionar URLs de WordPress.org a su versión en español
// @author       CesarChris710
// @match        *://*.wordpress.org/plugins/*
// @exclude      *://es.wordpress.org/plugins/*

// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function redireccionarURL() {
        var urlActual = window.location.href;
        var nuevaURL = urlActual.replace(/\/\/[^/]+\/plugins\//, "//es.wordpress.org/plugins/");
        window.location.replace(nuevaURL);
    }
    redireccionarURL();
})();
