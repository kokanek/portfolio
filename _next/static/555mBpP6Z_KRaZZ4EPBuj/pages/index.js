(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(e,a,t){"use strict";a.__esModule=!0,a.isInAmpMode=l,a.useAmp=function(){return l(r.default.useContext(o.AmpStateContext))};var n,r=(n=t("q1tI"))&&n.__esModule?n:{default:n},o=t("lwAK");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.ampFirst,t=void 0!==a&&a,n=e.hybrid,r=void 0!==n&&n,o=e.hasQuery;return t||r&&(void 0!==o&&o)}},"7W2i":function(e,a,t){var n=t("SksO");e.exports=function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&n(e,a)}},"8Kt/":function(e,a,t){"use strict";a.__esModule=!0,a.defaultHead=c,a.default=void 0;var n=i(t("q1tI")),r=i(t("Xuae")),o=t("lwAK"),l=t("FYa8"),s=t("/0+H");function i(e){return e&&e.__esModule?e:{default:e}}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=[n.default.createElement("meta",{charSet:"utf-8"})];return e||a.push(n.default.createElement("meta",{name:"viewport",content:"width=device-width"})),a}function u(e,a){return"string"===typeof a||"number"===typeof a?e:a.type===n.default.Fragment?e.concat(n.default.Children.toArray(a.props.children).reduce((function(e,a){return"string"===typeof a||"number"===typeof a?e:e.concat(a)}),[])):e.concat(a)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,a){return e.reduce((function(e,a){var t=n.default.Children.toArray(a.props.children);return e.concat(t)}),[]).reduce(u,[]).reverse().concat(c(a.inAmpMode)).filter(function(){var e=new Set,a=new Set,t=new Set,n={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var l=r.key.slice(r.key.indexOf("$")+1);e.has(l)?o=!1:e.add(l)}switch(r.type){case"title":case"base":a.has(r.type)?o=!1:a.add(r.type);break;case"meta":for(var s=0,i=f.length;s<i;s++){var c=f[s];if(r.props.hasOwnProperty(c))if("charSet"===c)t.has(c)?o=!1:t.add(c);else{var u=r.props[c],p=n[c]||new Set;p.has(u)?o=!1:(p.add(u),n[c]=p)}}}return o}}()).reverse().map((function(e,a){var t=e.key||a;return n.default.cloneElement(e,{key:t})}))}var d=(0,r.default)();function m(e){var a=e.children;return(n.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return n.default.createElement(l.HeadManagerContext.Consumer,null,(function(t){return n.default.createElement(d,{reduceComponentsToState:p,handleStateChange:t,inAmpMode:(0,s.isInAmpMode)(e)},a)}))})))}m.rewind=d.rewind;var h=m;a.default=h},Bnag:function(e,a){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,a){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,a,t){"use strict";var n;a.__esModule=!0,a.HeadManagerContext=void 0;var r=((n=t("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);a.HeadManagerContext=r},Ijbi:function(e,a,t){var n=t("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},Nsbk:function(e,a){function t(a){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(a)}e.exports=t},PJYZ:function(e,a){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,a,t){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},RIqP:function(e,a,t){var n=t("Ijbi"),r=t("EbDI"),o=t("ZhPi"),l=t("Bnag");e.exports=function(e){return n(e)||r(e)||o(e)||l()}},RNiq:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.r(a),t.d(a,"default",(function(){return c}));var r=t("q1tI"),o=t.n(r),l=t("8Kt/"),s=t.n(l),i=o.a.createElement;function c(){return i("div",null,i("nav",{className:"navbar"},i("ul",{className:"navbar-nav"},i("li",{className:"logo"},i("a",{href:"#",className:"nav-link"},i("span",{className:"link-text logo-text"},"Fireship"),i("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"angle-double-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"},i("g",{className:"fa-group"},i("path",{fill:"currentColor",d:"M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z",className:"fa-secondary"}),i("path",{fill:"currentColor",d:"M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z",className:"fa-primary"}))))),i("li",{className:"nav-item"},i("a",{href:"#",className:"nav-link"},i("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"cat",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"svg-inline--fa fa-cat fa-w-16 fa-9x"},i("g",{className:"fa-group"},i("path",{fill:"currentColor",d:"M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z",className:"fa-secondary"}),i("path",{fill:"currentColor",d:"M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z",className:"fa-primary"}))),i("span",{className:"link-text"},"Cats"))),i("li",{className:"nav-item"},i("a",{href:"#",className:"nav-link"},i("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"alien-monster",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",className:"svg-inline--fa fa-alien-monster fa-w-18 fa-9x"},i("g",{className:"fa-group"},i("path",{fill:"currentColor",d:"M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z",className:"fa-secondary"}),i("path",{fill:"currentColor",d:"M160,320h64V224H160Zm192-96v96h64V224Z",className:"fa-primary"}))),i("span",{className:"link-text"},"Aliens"))),i("li",{className:"nav-item"},i("a",{href:"#",className:"nav-link"},i("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"space-station-moon-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x"},i("g",{className:"fa-group"},i("path",{fill:"currentColor",d:"M501.70312,224H448V160H368V96h48V66.67383A246.86934,246.86934,0,0,0,256,8C119.03125,8,8,119.0332,8,256a250.017,250.017,0,0,0,1.72656,28.26562C81.19531,306.76953,165.47656,320,256,320s174.80469-13.23047,246.27344-35.73438A250.017,250.017,0,0,0,504,256,248.44936,248.44936,0,0,0,501.70312,224ZM192,240a80,80,0,1,1,80-80A80.00021,80.00021,0,0,1,192,240ZM384,343.13867A940.33806,940.33806,0,0,1,256,352c-87.34375,0-168.71094-11.46094-239.28906-31.73633C45.05859,426.01953,141.29688,504,256,504a247.45808,247.45808,0,0,0,192-91.0918V384H384Z",className:"fa-secondary"}),i("path",{fill:"currentColor",d:"M256,320c-90.52344,0-174.80469-13.23047-246.27344-35.73438a246.11376,246.11376,0,0,0,6.98438,35.998C87.28906,340.53906,168.65625,352,256,352s168.71094-11.46094,239.28906-31.73633a246.11376,246.11376,0,0,0,6.98438-35.998C430.80469,306.76953,346.52344,320,256,320Zm-64-80a80,80,0,1,0-80-80A80.00021,80.00021,0,0,0,192,240Zm0-104a24,24,0,1,1-24,24A23.99993,23.99993,0,0,1,192,136Z",className:"fa-primary"}))),i("span",{className:"link-text"},"Space"))),i("li",{className:"nav-item"},i("a",{href:"#",className:"nav-link"},i("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"space-shuttle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",className:"svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"},i("g",{className:"fa-group"},i("path",{fill:"currentColor",d:"M32 416c0 35.35 21.49 64 48 64h16V352H32zm154.54-232h280.13L376 168C243 140.59 222.45 51.22 128 34.65V160h18.34a45.62 45.62 0 0 1 40.2 24zM32 96v64h64V32H80c-26.51 0-48 28.65-48 64zm114.34 256H128v125.35C222.45 460.78 243 371.41 376 344l90.67-16H186.54a45.62 45.62 0 0 1-40.2 24z",className:"fa-secondary"}),i("path",{fill:"currentColor",d:"M592.6 208.24C559.73 192.84 515.78 184 472 184H186.54a45.62 45.62 0 0 0-40.2-24H32c-23.2 0-32 10-32 24v144c0 14 8.82 24 32 24h114.34a45.62 45.62 0 0 0 40.2-24H472c43.78 0 87.73-8.84 120.6-24.24C622.28 289.84 640 272 640 256s-17.72-33.84-47.4-47.76zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.91 0 31.94 80 0 80z",className:"fa-primary"}))),i("span",{className:"link-text"},"Shuttle"))),i("li",{className:"nav-item",id:"themeButton"},i("a",{href:"#",className:"nav-link"},i("svg",n({className:"theme-icon",id:"lightIcon","aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"moon-stars",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},"className","svg-inline--fa fa-moon-stars fa-w-16 fa-7x"),i("g",{className:"fa-group"},i("path",{fill:"currentColor",d:"M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z",className:"fa-secondary"}),i("path",{fill:"currentColor",d:"M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z",className:"fa-primary"}))),i("svg",n({className:"theme-icon",id:"solarIcon","aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"sun",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},"className","svg-inline--fa fa-sun fa-w-16 fa-7x"),i("g",{className:"fa-group"},i("path",{fill:"currentColor",d:"M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z",className:"fa-secondary"}),i("path",{fill:"currentColor",d:"M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z",className:"fa-primary"}))),i("svg",n({className:"theme-icon",id:"darkIcon","aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"sunglasses",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},"className","svg-inline--fa fa-sunglasses fa-w-18 fa-7x"),i("g",{className:"fa-group"},i("path",{fill:"currentColor",d:"M574.09 280.38L528.75 98.66a87.94 87.94 0 0 0-113.19-62.14l-15.25 5.08a16 16 0 0 0-10.12 20.25L395.25 77a16 16 0 0 0 20.22 10.13l13.19-4.39c10.87-3.63 23-3.57 33.15 1.73a39.59 39.59 0 0 1 20.38 25.81l38.47 153.83a276.7 276.7 0 0 0-81.22-12.47c-34.75 0-74 7-114.85 26.75h-73.18c-40.85-19.75-80.07-26.75-114.85-26.75a276.75 276.75 0 0 0-81.22 12.45l38.47-153.8a39.61 39.61 0 0 1 20.38-25.82c10.15-5.29 22.28-5.34 33.15-1.73l13.16 4.39A16 16 0 0 0 180.75 77l5.06-15.19a16 16 0 0 0-10.12-20.21l-15.25-5.08A87.95 87.95 0 0 0 47.25 98.65L1.91 280.38A75.35 75.35 0 0 0 0 295.86v70.25C0 429 51.59 480 115.19 480h37.12c60.28 0 110.38-45.94 114.88-105.37l2.93-38.63h35.76l2.93 38.63c4.5 59.43 54.6 105.37 114.88 105.37h37.12C524.41 480 576 429 576 366.13v-70.25a62.67 62.67 0 0 0-1.91-15.5zM203.38 369.8c-2 25.9-24.41 46.2-51.07 46.2h-37.12C87 416 64 393.63 64 366.11v-37.55a217.35 217.35 0 0 1 72.59-12.9 196.51 196.51 0 0 1 69.91 12.9zM512 366.13c0 27.5-23 49.87-51.19 49.87h-37.12c-26.69 0-49.1-20.3-51.07-46.2l-3.12-41.24a196.55 196.55 0 0 1 69.94-12.9A217.41 217.41 0 0 1 512 328.58z",className:"fa-secondary"}),i("path",{fill:"currentColor",d:"M64.19 367.9c0-.61-.19-1.18-.19-1.8 0 27.53 23 49.9 51.19 49.9h37.12c26.66 0 49.1-20.3 51.07-46.2l3.12-41.24c-14-5.29-28.31-8.38-42.78-10.42zm404-50l-95.83 47.91.3 4c2 25.9 24.38 46.2 51.07 46.2h37.12C489 416 512 393.63 512 366.13v-37.55a227.76 227.76 0 0 0-43.85-10.66z",className:"fa-primary"}))),i("span",{className:"link-text"},"Themify"))))),i("div",{className:"container"},i(s.a,null,i("title",null,"Create Next App"),i("link",{rel:"icon",href:"/favicon.ico"})),i("main",null,i("h1",{className:"title"},"Welcome to ",i("a",{href:"https://nextjs.org"},"Comscience!")),i("p",{className:"description"},"Javascript learning ",i("code",null,"made easy")),i("p",{className:"description"},"Created with  \u2764\ufe0f by kapeel kokane"),i("div",{className:"grid"},i("a",{href:"https://nextjs.org/docs",className:"card"},i("h3",null,"Documentation \u2192"),i("p",null,"Find in-depth information about Next.js features and API.")),i("a",{href:"https://nextjs.org/learn",className:"card"},i("h3",null,"Learn \u2192"),i("p",null,"Learn about Next.js in an interactive course with quizzes!")),i("a",{href:"https://github.com/zeit/next.js/tree/master/examples",className:"card"},i("h3",null,"Examples \u2192"),i("p",null,"Discover and deploy boilerplate example Next.js projects.")),i("a",{href:"https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:"card"},i("h3",null,"Deploy \u2192"),i("p",null,"Instantly deploy your Next.js site to a public URL with Vercel.")))),i("footer",null,i("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer"},"Powered by"," ",i("img",{src:"/vercel.svg",alt:"Vercel Logo",className:"logo"})))))}},SksO:function(e,a){function t(a,n){return e.exports=t=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e},t(a,n)}e.exports=t},W8MJ:function(e,a){function t(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}},WkPL:function(e,a){e.exports=function(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}},Xuae:function(e,a,t){"use strict";var n=t("lwsE"),r=t("PJYZ"),o=t("W8MJ"),l=t("7W2i"),s=t("a1gu"),i=t("Nsbk"),c=t("RIqP");function u(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=i(e);if(a){var r=i(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return s(this,t)}}a.__esModule=!0,a.default=void 0;var f=t("q1tI"),p=!1;a.default=function(){var e,a=new Set;function t(t){e=t.props.reduceComponentsToState(c(a),t.props),t.props.handleStateChange&&t.props.handleStateChange(e)}return(function(s){l(c,s);var i=u(c);function c(e){var o;return n(this,c),o=i.call(this,e),p&&(a.add(r(o)),t(r(o))),o}return o(c,null,[{key:"rewind",value:function(){var t=e;return e=void 0,a.clear(),t}}]),o(c,[{key:"componentDidMount",value:function(){a.add(this),t(this)}},{key:"componentDidUpdate",value:function(){t(this)}},{key:"componentWillUnmount",value:function(){a.delete(this),t(this)}},{key:"render",value:function(){return null}}]),c}(f.Component))}},ZhPi:function(e,a,t){var n=t("WkPL");e.exports=function(e,a){if(e){if("string"===typeof e)return n(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,a):void 0}}},a1gu:function(e,a,t){var n=t("cDf5"),r=t("PJYZ");e.exports=function(e,a){return!a||"object"!==n(a)&&"function"!==typeof a?r(e):a}},cDf5:function(e,a){function t(a){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(a)}e.exports=t},lwAK:function(e,a,t){"use strict";var n;a.__esModule=!0,a.AmpStateContext=void 0;var r=((n=t("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});a.AmpStateContext=r},lwsE:function(e,a){e.exports=function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,1]]]);