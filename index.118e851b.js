!function(){var e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=document.querySelector("body"),c=document.querySelector(".js-menu-nav"),d=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),o.classList.toggle("scroll-no-menu"),o[n?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",d),n.addEventListener("click",d),c.addEventListener("click",d),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),o.enableBodyScroll(document.body),o.classList.remove("scroll-no-menu"))}))}();
//# sourceMappingURL=index.118e851b.js.map