(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();console.log("Hello world!");new Swiper(".BannerSwiper",{initialSlide:0,loop:!0,spaceBetween:40,slidesPerView:1.2,centeredSlides:!0,breakpoints:{992:{slidesPerView:1.2,spaceBetween:40},0:{slidesPerView:1,spaceBetween:24}},navigation:{nextEl:".swiper-button-next-n",prevEl:".swiper-button-prev-n"}});new Swiper(".TopsalesSwiper",{slidesPerView:1,spaceBetween:24,loop:!0,breakpoints:{768:{slidesPerView:2,spaceBetween:24},992:{slidesPerView:3,spaceBetween:24},1400:{slidesPerView:4,spaceBetween:24}},navigation:{nextEl:".swiper-button-next-n",prevEl:".swiper-button-prev-n"}});new Swiper(".TeacherSwiper",{slidesPerView:1,spaceBetween:24,loop:!0,breakpoints:{992:{slidesPerView:2,spaceBetween:24},1200:{slidesPerView:3,spaceBetween:24}},pagination:{el:".swiper-pagination"}});new Swiper(".HotThemeSwiper",{loop:!0,slidesPerView:1,spaceBetween:16,breakpoints:{430:{slidesPerView:2,spaceBetween:16},768:{slidesPerView:3,spaceBetween:16},992:{slidesPerView:4,spaceBetween:24},1200:{slidesPerView:5,spaceBetween:24},1400:{slidesPerView:6,spaceBetween:24}},pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next-icon",prevEl:".swiper-button-prev-icon"}});
