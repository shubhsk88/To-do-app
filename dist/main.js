!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],d=n[s]||0,l="".concat(s," ").concat(d);n[s]=d+1;var u=c(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:l,updater:v(p,t),references:1}),r.push(l)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function v(e,t){var n,r,o;if(t.singleton){var i=h++;n=m||(m=d(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=d(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=s(e,t),d=0;d<n.length;d++){var l=c(n[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.6%;\r\n}\r\nbody {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.project-card {\r\n  padding: 2rem;\r\n  background-color: #387780;\r\n\r\n  height: 15rem;\r\n  width: 18rem;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n\r\n  color: white;\r\n  font-size: 3rem;\r\n  margin: 4rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-transform: capitalize;\r\n  align-items: center;\r\n}\r\n\r\n.projects-list {\r\n  display: flex;\r\n  margin: 2rem;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.hidden-form {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  min-height: 100vh;\r\n  background: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.show-form {\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\n.new-task-form {\r\n  padding: 20px;\r\n  width: 30%;\r\n\r\n  background: white;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.add-task-btn {\r\n  position: absolute;\r\n  bottom: 10rem;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.project-details-card {\r\n  overflow: scroll;\r\n  height: 70vh;\r\n\r\n  border: 5px solid orangered;\r\n  width: 40%;\r\n  margin: 10rem auto;\r\n  padding: 4rem;\r\n}\r\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t);n(0);class r{constructor(e,t,n,r,o="",i=!1){this.title=e,this.description=t,this.done=i,this.dueDate=n,this.priority=r,this.notes=o}updateTask(e,t,n,r,o="",i=!1){this.title=e,this.description=t,this.done=i,this.dueDate=n,this.priority=r,this.notes=o}}function o(e){const t=document.createElement("li"),n=document.createElement("button");n.classList.add("border-2","mx-2","h-16","w-16","p-2","rounded-lg","border-gray-200","bg-white"),t.classList.add("flex","border","w-full","px-2","py-4","my-4","rounded","bg-gray-100","items-center","justify-between");const r=document.createElement("button");let o=["rounded","p-4","text-2xl","bg-white","mx-2"];const i=document.createElement("button");i.innerHTML='<i class="fas fa-edit"></i>',r.innerHTML='<i class="fas fa-trash"></i>',r.classList.add("delete-button",...o),i.classList.add("edit-button",...o);const a=document.createElement("p");return a.classList.add("text-2xl","font-semibold"),a.classList.add("flex-1"),a.textContent=e.title,t.appendChild(n),t.appendChild(a),t.appendChild(i),t.appendChild(r),t}class i{constructor(e){this.name=e,this.taskList=[]}addTaskToList(e){this.taskList.push(e)}removeTaskFromList(e){this.taskList.splice(e,1)}}const a=new i("work");new i("study");a.addTaskToList(new r("create ui","now","iwa",1)),a.addTaskToList(new r("create bd","as","iwa",1)),a.addTaskToList(new r("create socket","now","iwa",2));const c=[a],s=document.querySelector(".new-project-btn"),d=document.querySelector(".form-project"),l=document.querySelector(".new-task-btn"),u=document.querySelector(".add-task-btn"),p=document.querySelector(".projects-list"),f=document.querySelector(".hidden-form"),m=document.querySelector(".project-details");function h(e={}){const t=e;l.addEventListener("click",(function e(n){n.preventDefault(),d.classList.add("hide");const o=n.currentTarget.getAttribute("edit"),i=document.getElementById("task-title").value,a=document.getElementById("task-description").value,s=document.getElementById("task-due-date").value,u=document.querySelector('input[name="task-priority"]:checked').value,m=document.getElementById("project-selector"),h=m.options[m.selectedIndex].value,b=c[h];if("true"==o)t.updateTask(i,a,s,u);else{const e=new r(i,a,s,u);b.addTaskToList(e)}v(b),f.classList.remove("show-form"),p.classList.add("hide"),l.removeEventListener("click",e)}))}function v(e){m.textContent="";const t=(e=>{const t=document.createElement("div");t.classList.add("project-details-card");const n=document.createElement("div");n.textContent=e.name,n.classList.add("text-center","text-6xl","py-2","capitalize","font-bold"),t.append(n);const r=document.createElement("ul");for(let t=0;t<e.taskList.length;t++){const n=o(e.taskList[t]);n.setAttribute("project",e.name),r.appendChild(n)}return t.appendChild(r),t})(e);m.appendChild(t),function(){const e=document.querySelectorAll(".delete-button");for(let t=0;t<e.length;t++)e[t].addEventListener("click",e=>{const n=e.target.parentElement,r=n.getAttribute("project");c.filter(e=>e.name==r)[0].removeTaskFromList(t),n.remove()})}(),function(){const e=document.querySelectorAll(".edit-button");for(let t=0;t<e.length;t++)e[t].addEventListener("click",e=>{const n=e.target.parentElement.getAttribute("project");g(c.filter(e=>e.name==n)[0].taskList[t])})}()}function b(){p.textContent="";for(let e=0;e<c.length;e++){const t=document.createElement("div"),n=document.createElement("div");n.textContent=c[e].taskList.length+" items",n.classList.add("text-3xl","py-2","text-gray-300"),t.classList.add("project-card"),t.textContent=c[e].name,t.appendChild(n),t.addEventListener("click",(function(){d.classList.add("hide"),p.classList.add("hide"),v(c[e])})),p.appendChild(t)}}function g(e=null){const t=document.getElementById("project-selector");t.textContent="",f.classList.add("show-form");for(let e=0;e<c.length;e+=1){const n=document.createElement("option");n.textContent=c[e].name,n.value=e,t.appendChild(n)}if(e){const t=document.getElementById("task-title"),n=document.getElementById("task-description"),r=document.getElementById("task-due-date"),o=document.querySelector('input[name="task-priority"]:checked'),i=document.getElementById("project-selector");i.options[i.selectedIndex];t.value=e.title,n.value=e.description,r.value=e.dueDate,o.value=e.priority,l.setAttribute("edit",!0),h(e)}else l.setAttribute("edit",!1),h()}u.addEventListener("click",()=>{g()}),s.addEventListener("click",e=>{const t=document.getElementById("project-name").value;if(""!==t){e.preventDefault();const n=new i(t);c.push(n),b()}}),b()}]);