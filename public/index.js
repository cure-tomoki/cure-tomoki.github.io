"use strict";function fadein(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0,c=$(window).height();$(a).each(function(){var a=$(this).offset().top,d=$(window).scrollTop();d>a-c+b&&$(this).addClass("scrollIn")})}$(function(){// fade in on load
// fadein on scroll
fadein(".fadeIn"),$(window).scroll(function(){fadein(".fadeIn",100)})});