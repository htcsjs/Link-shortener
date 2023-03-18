const t={original_link:"",short_link:""};let e=[];var n={};
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */n=function(){return function(){var t={686:function(t,e,n){n.d(e,{default:function(){return k}});var r=n(279),o=n.n(r),i=n(370),c=n.n(i),u=n(817),a=n.n(u);function s(t){try{return document.execCommand(t)}catch(t){return!1}}var l=function(t){var e=a()(t);return s("cut"),e},f=function(t,e){var n=function(t){var e="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(r,"px"),n.setAttribute("readonly",""),n.value=t,n}(t);e.container.appendChild(n);var r=a()(n);return s("copy"),n.remove(),r},p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"==typeof t?n=f(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==t?void 0:t.type)?n=f(t.value,e):(n=a()(t),s("copy")),n};function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}var y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,r=t.container,o=t.target,i=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==o){if(!o||"object"!==d(o)||1!==o.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&o.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(o.hasAttribute("readonly")||o.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return i?p(i,{container:r}):o?"cut"===n?l(o):p(o,{container:r}):void 0};function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},m(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r,o,i=b(t);if(e){var c=b(this).constructor;n=Reflect.construct(i,arguments,c)}else n=i.apply(this,arguments);return r=this,!(o=n)||"object"!==h(o)&&"function"!=typeof o?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(r):o}}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}function E(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(i,t);var e,n,r,o=g(i);function i(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(n=o.call(this)).resolveOptions(e),n.listenClick(t),n}return e=i,n=[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===h(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=c()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",r=y({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(r?"success":"error",{action:n,text:r,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return E("action",t)}},{key:"defaultTarget",value:function(t){var e=E("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return E("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}],r=[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return p(t,e)}},{key:"cut",value:function(t){return l(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}],n&&v(e.prototype,n),r&&v(e,r),i}(o()),k=S},828:function(t){var e=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,n){for(;t&&t.nodeType!==e;){if("function"==typeof t.matches&&t.matches(n))return t;t=t.parentNode}}},438:function(t,e,n){var r=n(828);function o(t,e,n,r,o){var c=i.apply(this,arguments);return t.addEventListener(n,c,o),{destroy:function(){t.removeEventListener(n,c,o)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}t.exports=function(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,r,i)})))}},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var r=n(879),o=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(r.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(r.string(t))return function(t,e,n){return o(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(t){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,c=r.length;i<c;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}return n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n(686)}().default}();var r=new class{_form=document.querySelector(".shortener-container");_textInput=document.querySelector(".input-link");_errorMessage=document.querySelector(".error-message");_linksContainer=document.querySelector(".shortened-links");_copyBtn=document?.querySelectorAll(".btn--copy");_bars=document.querySelector(".bars");_mobileNav=document.querySelector(".mobile-nav__container");i=0;inputValue(){return this._textInput.value}submitEvent(t){this._form.addEventListener("submit",(function(e){e.preventDefault(),t()}))}changeButton(t){const e=t.target;e.textContent="Copied!",e.classList.add("copied"),e.style.pointerEvents="none",this.timeout(e)}toggleMobileMenu(){this._bars.addEventListener("click",function(t){this._mobileNav.classList.toggle("hide")}.bind(this))}timeout(t){setTimeout((()=>{t.textContent="Copy",t.classList.remove("copied"),t.style.pointerEvents="initial"}),3e3)}copyEvent(){new n(".btn--copy"),this._linksContainer.addEventListener("click",function(t){t.target.classList.contains("btn--copy")&&this.changeButton(t)}.bind(this))}generateMarkup(t){let e=this.i++;const n=`\n      <div class="link__short">\n         <div>\n            <input type="text" disabled value="${t.original_link}"></input>\n         </div>\n         <div>\n            <span href="${t.short_link}" target="blank" id="short_link${e}">${t.short_link}</span>\n            <button class="btn--copy" data-clipboard-action="copy" data-clipboard-target="#short_link${e}">Copy</button>\n         </div>\n      </div>`;return this._linksContainer.insertAdjacentHTML("beforeend",n),n}insertMarkup(t){this._textInput.classList?.remove("error"),this._errorMessage.textContent="",t.map((t=>{this.generateMarkup(t)}))}renderError(t){this._textInput.classList.add("error"),this._errorMessage.textContent=t}};const o=async function(){try{const n=r.inputValue(),o=await async function(n){try{const r=await fetch(`https://api.shrtco.de/v2/shorten?url=${n}`),o=await r.json();if(!o.ok)throw new Error(o.error);return t.original_link=o.result.original_link,t.short_link=o.result.short_link,e.push(t),localStorage.setItem("links",JSON.stringify(e)),o.result}catch(t){throw t}}(n);r.insertMarkup([o])}catch(t){const e=t.message.replaceAll(".",",").split(",")[0];r.renderError(e)}};!function(){const t=function(){const t=localStorage.getItem("links");return t&&(e=JSON.parse(t)),JSON.parse(t)}();t&&r.insertMarkup(t)}();r.submitEvent(o),r.copyEvent(),r.toggleMobileMenu();
//# sourceMappingURL=index.a9915691.js.map
