!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=9)}([function(e,t,o){},,function(e,t,o){},,function(e,t){document.querySelector(".menu-btn").addEventListener("click",function(){document.querySelector(".menu").classList.toggle("visible"),document.querySelector(".header-and-main").classList.toggle("menu-visible")})},function(e,t){document.querySelector(".devices").addEventListener("scroll",function(){0!==this.scrollTop?this.classList.add("scrolled"):this.classList.remove("scrolled")})},function(e,t){window.addEventListener("load",function(){document.querySelector(".section-scenarios .left").disabled=!0,document.querySelector(".scenarios").clientHeight<document.querySelector(".scenarios").scrollHeight?document.querySelector(".section-scenarios .right").style.opacity="1":document.querySelector(".section-scenarios .right").disabled=!0}),document.querySelector(".section-scenarios .left").addEventListener("click",function(){var e=document.querySelector(".scenarios");e.style.opacity="0",setTimeout(function(){e.scrollTop-=346,e.style.opacity="1"},200)}),document.querySelector(".section-scenarios .right").addEventListener("click",function(){var e=document.querySelector(".scenarios");e.style.opacity="0",setTimeout(function(){e.scrollTop+=346,e.style.opacity="1"},200)}),document.querySelector(".scenarios").addEventListener("scroll",function(){var e=document.querySelector(".section-scenarios .left"),t=document.querySelector(".section-scenarios .right");this.scrollTop<=0?(e.style.opacity=".3",e.disabled=!0):(e.style.opacity="1",e.disabled=!1),this.clientHeight+this.scrollTop>=this.scrollHeight?(t.style.opacity=".3",t.disabled=!0):(t.style.opacity="1",t.disabled=!1)})},function(e,t){var o=30,n=330,r=10,c=25;function i(e,t){var i=r+(c-r)*(t-o)/(n-o);document.querySelector(".round-slider .displayTemp").innerText="+"+Math.round(i)}function l(e){var t=window.getComputedStyle(e).getPropertyValue("transform");if("none"===t)return 0;var o=t.split("(")[1].split(")")[0].split(","),n=o[0],r=o[1],c=Math.round(Math.asin(r)*(180/Math.PI));n<0&&(c=90+(90-Math.round(Math.asin(r)*(180/Math.PI))));return c<0&&(c=360+c),c}function s(e,t){e.style.transform="rotate("+t+"deg)"}function u(e){var t=document.querySelector(".round-slider"),o=t.clientWidth/2,n=t.clientHeight/2,r=e.x-o,c=e.y-n;if(0===r)return c>0?180:0;var i=180*Math.atan(c/r)/Math.PI;return i=r>0?i+90:i+270,i+=180}function a(e){var t=e;return function(e){e.preventDefault();document.querySelector(".round-slider");var r=document.querySelector(".block-2"),c=document.querySelector(".block-3"),a=document.querySelector(".pointer"),d={x:e.targetTouches?e.targetTouches[0].pageX-e.target.getBoundingClientRect().left:e.offsetX,y:e.targetTouches?e.targetTouches[0].pageY-e.target.getBoundingClientRect().top:e.offsetY},m=u(t),y=u(d)-m;if(t=d,!(Math.abs(y)>100)){if(!(l(c)+y<=330&&l(c)+y>=30))return l(c)+y>330?(s(r,n-180),s(c,n),s(a,n),void i(0,l(c))):l(c)+y<30?(s(r,o+180),s(c,o),s(a,o),void i(0,l(c))):void 0;s(r,l(r)+y),s(c,l(c)+y),s(a,l(a)+y),i(0,l(c)),l(c)<180?(r.style.opacity="0",c.style.opacity="1"):(r.style.opacity="1",c.style.opacity="0")}}}window.addEventListener("load",function(){var e=new Image;e.src="img/termo.svg",e.onload=function(){document.querySelector(".round-slider .displayTemp").style.css="url("+e.src+")"}});var d=document.querySelector(".round-slider");d.addEventListener("touchstart",function(e){var t={x:e.targetTouches[0].pageX-e.target.getBoundingClientRect().left,y:e.targetTouches[0].pageY-e.target.getBoundingClientRect().top};d.ontouchmove=a(t)}),d.addEventListener("mousedown",function(e){var t={x:e.offsetX,y:e.offsetY};d.onmousemove=a(t)}),document.addEventListener("mouseup",function(){d.onmousemove=null})},function(e,t){function o(e){var t=e;return function(e){var o={x:e.clientX,y:e.clientY};document.documentElement.clientWidth<992?this.scrollTop+=t.y-o.y:this.scrollLeft+=t.x-o.x,t=o}}document.querySelector(".temp-modal .handler").addEventListener("mousedown",function(e){var t={x:e.clientX,y:e.clientY};document.querySelector(".temp-modal .inner").onmousemove=o(t)}),document.addEventListener("mouseup",function(){document.querySelector(".temp-modal .inner").onmousemove=null}),document.querySelector(".light-modal .handler").addEventListener("mousedown",function(e){var t={x:e.clientX,y:e.clientY};document.querySelector(".light-modal .inner").onmousemove=o(t)}),document.addEventListener("mouseup",function(){document.querySelector(".light-modal .inner").onmousemove=null})},function(e,t,o){"use strict";o.r(t);o(0),o(2),o(4),o(5),o(6),o(7),o(8);for(var n=document.querySelectorAll(".section-fav-devices .filter button"),r=0;r<n.length;r++)n[r].addEventListener("click",function(){document.querySelector(".filter").classList.remove("visible"),document.querySelector(".show-filter-btn").innerText=this.innerText,this.classList.add("active");for(var e=0;e<n.length;e++)n[e]!==this&&n[e].classList.remove("active");for(var t=document.querySelectorAll(".section-fav-devices .fav-devices li"),o=0;o<t.length;o++)"Все"===this.dataset.filter?t[o].style.display="block":t[o].dataset.filter!==this.dataset.filter?t[o].style.display="none":t[o].style.display="block";document.querySelector(".fav-devices").clientWidth<document.querySelector(".fav-devices").scrollWidth?document.querySelector(".section-fav-devices .right").style.opacity="1":document.querySelector(".section-fav-devices .right").style.opacity=".3"});window.addEventListener("load",function(){document.querySelector(".fav-devices").clientWidth<document.querySelector(".fav-devices").scrollWidth&&(document.querySelector(".section-fav-devices .right").style.opacity="1")}),document.querySelector(".section-fav-devices .left").addEventListener("click",function(){document.querySelector(".fav-devices").scrollLeft-=215}),document.querySelector(".section-fav-devices .right").addEventListener("click",function(){document.querySelector(".fav-devices").scrollLeft+=215}),document.querySelector(".fav-devices").addEventListener("scroll",function(){var e=document.querySelector(".section-fav-devices .left"),t=document.querySelector(".section-fav-devices .right");this.scrollLeft<=0?e.style.opacity=".3":e.style.opacity="1",this.clientWidth+this.scrollLeft>=this.scrollWidth?t.style.opacity=".3":t.style.opacity="1"});var c=document.querySelectorAll(".modal .mode button");for(r=0;r<c.length;r++)c[r].addEventListener("click",function(){this.classList.add("active");for(var e=0;e<c.length;e++)c[e]!==this&&c[e].classList.remove("active")});var i=document.querySelectorAll(".fav-devices button");function l(e,t){var o=e.querySelector(".modal-wrapper"),n=document.querySelector(".page-wrapper");o.style.left=t.getBoundingClientRect().left+"px",o.style.top=t.getBoundingClientRect().top+"px",e.classList.add("visible"),setTimeout(function(){o.style.cssText="",e.classList.add("animate"),n.classList.add("blur")},100)}for(r=0;r<i.length;r++)i[r].addEventListener("click",function(){if("temp"===this.parentElement.dataset.type){var e=(t=document.querySelector(".temp-modal")).querySelector(".icon-temp");t.querySelector(".name").innerText=this.querySelector(".name").innerText,t.querySelector(".status").innerText=this.querySelector(".action").innerText,"on"===this.parentElement.dataset.power?(e.classList.remove("powerOff"),e.classList.add("powerOn")):(e.classList.remove("powerOn"),e.classList.add("powerOff")),l(t,this)}else if("light"===this.parentElement.dataset.type){e=(t=document.querySelector(".light-modal")).querySelector(".icon-light");t.querySelector(".name").innerText=this.querySelector(".name").innerText,t.querySelector(".status").innerText=this.querySelector(".action").innerText,"on"===this.parentElement.dataset.power?(e.classList.remove("powerOff"),e.classList.add("powerOn")):(e.classList.remove("powerOn"),e.classList.add("powerOff")),l(t,this)}else if("floor"===this.parentElement.dataset.type){var t;e=(t=document.querySelector(".floor-modal")).querySelector(".icon-temp");t.querySelector(".name").innerText=this.querySelector(".name").innerText,t.querySelector(".status").innerText=this.querySelector(".action").innerText,"on"===this.parentElement.dataset.power?(e.classList.remove("powerOff"),e.classList.add("powerOn")):(e.classList.remove("powerOn"),e.classList.add("powerOff")),l(t,this)}});function s(e){e.classList.remove("visible"),e.classList.remove("animate"),document.querySelector(".page-wrapper").classList.remove("blur")}document.querySelector(".temp-modal .close-modal").addEventListener("click",function(){s(document.querySelector(".temp-modal"))}),document.querySelector(".temp-modal .save-modal").addEventListener("click",function(){s(document.querySelector(".temp-modal"))}),document.querySelector(".light-modal .close-modal").addEventListener("click",function(){s(document.querySelector(".light-modal"))}),document.querySelector(".light-modal .save-modal").addEventListener("click",function(){s(document.querySelector(".light-modal"))}),document.querySelector(".floor-modal .close-modal").addEventListener("click",function(){s(document.querySelector(".floor-modal"))}),document.querySelector(".floor-modal .save-modal").addEventListener("click",function(){s(document.querySelector(".floor-modal"))}),document.querySelector(".show-filter-btn").addEventListener("click",function(){document.querySelector(".filter").classList.toggle("visible")})}]);
//# sourceMappingURL=main.js.map