// jQuery for page scrolling feature - requires jQuery Easing plugin
(function () {
    'use strict';
    $(function() {

        $('body').on('click', '.page-scroll a', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

// Floating label headings for the contact form
$(function() {
    $('body').on('input propertychange', '.floating-label-form-group', function(e) {
        $(this).toggleClass('floating-label-form-group-with-value', !! $(e.target).val());
    }).on('focus', '.floating-label-form-group', function() {
        $(this).addClass('floating-label-form-group-with-focus');
    }).on('blur', '.floating-label-form-group', function() {
        $(this).removeClass('floating-label-form-group-with-focus');
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Cierra el Menu responsivo del menu de items
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//  Cuando la barra de navegación de Bootstrap se colapsa,
//  la accion por defecto al clicar en el menú es mantenerlo abierto.
//  Con esta funcion el menú se cierra automáticamente
//  cuando se hace clic en un elemento de menú.
$('.navbar-nav li a').click(function(event) {// jshint ignore:line
    $('.navbar-collapse').collapse('hide');
});


}());




