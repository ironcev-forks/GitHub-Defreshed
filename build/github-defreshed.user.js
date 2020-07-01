// ==UserScript==
// @name         GitHub Defreshed
// @namespace    GitHub
// @version      1.1.5
// @author       Kir_Antipov
// @description  Make GitHub Great Again!
// @license      MIT
// @homepageURL  https://github.com/Kir-Antipov/GitHub-Defreshed
// @updateURL    https://raw.githubusercontent.com/Kir-Antipov/GitHub-Defreshed/master/build/github-defreshed.meta.js
// @downloadURL  https://raw.githubusercontent.com/Kir-Antipov/GitHub-Defreshed/master/build/github-defreshed.user.js
// @supportURL   https://github.com/Kir-Antipov/GitHub-Defreshed/issues/new
// @match        https://github.com/*
// @grant        none
// ==/UserScript==
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){"use strict";const n=r(1),a=r(2);t.all=n,t.check=e=>(e=(e||"").toString().toLowerCase(),n.includes(e)),t.oddballs=e=>e&&e in a?a[e]:Object.keys(a).sort()},function(e){e.exports=JSON.parse('["400","401","402","403","404","405","406","407","408","409","410","411","412","413","414","415","416","417","418","419","420","421","422","423","424","425","426","427","428","429","430","431","500","501","502","503","504","505","506","507","508","509","510","511","about","access","account","admin","anonymous","any","api","apps","attributes","auth","billing","blob","blog","bounty","branches","business","businesses","c","cache","case-studies","categories","central","certification","changelog","cla","cloud","codereview","collection","collections","comments","commit","commits","community","companies","compare","contact","contributing","cookbook","coupons","customer","customers","dashboard","dashboards","design","develop","developer","diff","discover","discussions","docs","downloads","downtime","editor","editors","edu","enterprise","events","explore","featured","features","files","fixtures","forked","garage","ghost","gist","gists","graphs","guide","guides","help","help-wanted","home","hooks","hosting","hovercards","identity","images","inbox","individual","info","integration","interfaces","introduction","invalid-email-address","investors","issues","jobs","join","journal","journals","lab","labs","languages","launch","layouts","learn","legal","library","linux","listings","lists","login","logos","logout","mac","maintenance","malware","man","marketplace","mention","mentioned","mentioning","mentions","migrating","milestones","mine","mirrors","mobile","navigation","network","new","news","none","nonprofit","nonprofits","notices","notifications","oauth","offer","open-source","organisations","organizations","orgs","pages","partners","payments","personal","plans","plugins","popular","popularity","posts","press","pricing","professional","projects","pulls","raw","readme","recommendations","redeem","releases","render","reply","repositories","resources","restore","revert","save-net-neutrality","saved","scraping","search","security","services","sessions","settings","shareholders","shop","showcases","signin","signup","site","spam","sponsors","ssh","staff","starred","stars","static","status","statuses","storage","store","stories","styleguide","subscriptions","suggest","suggestion","suggestions","support","suspended","talks","teach","teacher","teachers","teaching","teams","ten","terms","timeline","topic","topics","tos","tour","train","training","translations","tree","trending","updates","username","users","visualization","w","watching","wiki","windows","works-with","www0","www1","www2","www3","www4","www5","www6","www7","www8","www9"]')},function(e){e.exports=JSON.parse('{"avatars":{"reserved":true,"taken":true,"typical":true,"included":false},"assets":{"reserved":true,"taken":true,"typical":true,"included":false},"bookmarks":{"reserved":true,"taken":true,"typical":true,"included":false},"checks":{"reserved":true,"taken":true,"typical":true,"included":false},"conversations":{"reserved":true,"taken":true,"typical":true,"included":false},"labels":{"reserved":true,"taken":true,"typical":true,"included":false},"media":{"reserved":true,"taken":true,"typical":true,"included":false},"nodes":{"reserved":true,"taken":true,"typical":true,"included":false},"owners":{"reserved":true,"taken":true,"typical":true,"included":false},"page":{"reserved":true,"taken":true,"typical":true,"included":false},"registry":{"reserved":true,"taken":true,"typical":true,"included":false},"seats":{"reserved":true,"taken":true,"typical":true,"included":false},"shared":{"reserved":true,"taken":true,"typical":true,"included":false},"tasks":{"reserved":true,"taken":true,"typical":true,"included":false},"uploads":{"reserved":true,"taken":true,"typical":true,"included":false},"account":{"reserved":true,"taken":false,"typical":false,"redirect":"https://github.com/settings/profile","included":true},"apps":{"reserved":true,"taken":false,"typical":false,"redirect":"https://github.com/marketplace","included":true},"blog":{"reserved":true,"taken":false,"typical":false,"redirect":"https://blog.github.com","included":true},"c":{"reserved":true,"taken":false,"typical":false,"redirect":"https://github.com/contact","included":true},"contributing":{"reserved":true,"taken":false,"typical":false,"redirect":"https://github.com/about/careers","included":true},"customer":{"reserved":true,"taken":false,"typical":false,"redirect":"https://github.com/business/customers","included":true},"customers":{"reserved":true,"taken":false,"typical":false,"redirect":"https://github.com/business/customers","included":true},"developer":{"reserved":true,"taken":false,"typical":false,"redirect":"https://developer.github.com","included":true},"edu":{"reserved":true,"taken":false,"typical":false,"redirect":"https://education.github.com","included":true},"guides":{"reserved":true,"taken":false,"typical":false,"redirect":"https://help.github.com","included":true},"help":{"reserved":true,"taken":false,"typical":false,"redirect":"https://help.github.com","included":true},"launch":{"reserved":true,"taken":false,"typical":false,"redirect":"https://github.com/search","included":true},"mac":{"reserved":true,"taken":false,"typical":false,"redirect":"https://desktop.github.com","included":true},"mirrors":{"reserved":true,"taken":false,"typical":false,"redirect":"https://help.github.com/articles/about-github-mirrors/","included":true},"pages":{"reserved":true,"taken":false,"typical":false,"redirect":"https://pages.github.com","included":true},"plans":{"reserved":true,"taken":false,"typical":false,"redirect":"https://github.com/pricing","included":true},"press":{"reserved":true,"taken":false,"typical":false,"redirect":"https://github.com/about/press","included":true},"readme":{"reserved":true,"taken":true,"typical":false,"redirect":"https://github.com/about","included":true},"repositories":{"reserved":true,"taken":false,"typical":false,"redirect":"https://github.com/trending","included":true},"resources":{"reserved":true,"taken":false,"typical":false,"redirect":"https://resources.github.com","included":true},"security":{"reserved":true,"taken":false,"typical":false,"redirect":"https://help.github.com/articles/github-security/","included":true},"settings":{"reserved":true,"taken":false,"typical":false,"redirect":"https://github.com/settings/profile","included":true},"signup":{"reserved":true,"taken":false,"typical":false,"redirect":"https://github.com/join","included":true},"terms":{"reserved":true,"taken":false,"typical":false,"redirect":"https://help.github.com/articles/github-terms-of-service/","included":true},"topic":{"reserved":true,"taken":false,"typical":false,"redirect":"https://github.com/topics","included":true},"tos":{"reserved":true,"taken":false,"typical":false,"redirect":"https://help.github.com/articles/github-terms-of-service/","included":true},"training":{"reserved":true,"taken":false,"typical":false,"redirect":"https://services.github.com","included":true},"users":{"reserved":true,"taken":false,"typical":false,"redirect":"https://github.com","included":true},"wiki":{"reserved":true,"taken":false,"typical":false,"redirect":"https://github.com","included":true},"windows":{"reserved":true,"taken":false,"typical":false,"redirect":"https://desktop.github.com","included":true},"collections":{"reserved":true,"taken":false,"typical":false,"included":true,"notes":"Curated lists of GitHub repos"},"hovercards":{"reserved":true,"taken":false,"typical":false,"included":true,"notes":"HTTP ERROR 406"},"inbox":{"reserved":true,"taken":true,"typical":false,"redirect":"https://github.com/410","included":true,"notes":"410 ERROR"},"invalid-email-address":{"reserved":true,"taken":true,"typical":false,"included":true,"notes":"HTTP ERROR 404"},"suggestions":{"reserved":true,"taken":false,"typical":false,"included":true},"suspended":{"reserved":true,"taken":true,"typical":false,"redirect":"https://github.com","included":true,"notes":"Page behaviour depends on whether you\'re logged in or if your account is actually suspended"},"case-studies":{"reserved":false,"taken":true,"typical":false,"included":true},"watching":{"reserved":false,"taken":true,"typical":false,"included":true},"save-net-neutrality":{"reserved":false,"taken":true,"typical":false,"included":true},"ghost":{"reserved":false,"taken":true,"typical":true,"included":true},"status":{"reserved":true,"taken":false,"typical":false,"included":true}}')},function(e,t,r){"use strict";function n(e){return new Promise(t=>{setTimeout(t,e)})}r.r(t),r.d(t,"sleep",(function(){return n}))},function(e,t,r){"use strict";r.r(t);var n=r(0);function a(e=location.pathname){try{e=new URL(e).pathname}catch(e){}return e.replace(/^[/]|[/]$/g,"")}function i(e=location.pathname){return s(e=a(e))?e.split("/",2).join("/"):null}function l(e=location.pathname){if(!s(e=a(e)))return null;let t=e.match(/^[^/]+[/][^/]+[/]?(.*)$/);return t?t[1]:null}function s(e=location.pathname){let t=(e=a(e)).substring(0,e.indexOf("/"));return/^[^/]+\/[^/]+/.test(e)&&!Object(n.check)(t)&&!function(e=location.pathname){return/^((orgs[/][^/]+[/])?dashboard([/]index[/]\d+)?)?$/.test(a(e))}(e)&&!function(e=location.pathname){return/^([^/]+[/][^/]+\/)?notifications/.test(a(e))}(e)}function o(e=location.pathname){return/^(tree[/][^/]+)?$/.test(l(e))}function c(e=location.pathname){return/^tree\//.test(l(e))}function u(e,t){try{return new URL(e).host==t}catch(e){return!1}}function d(e=location.pathname,t=location.host,r=location.protocol){return function(e){try{return new URL(e),!0}catch(e){return!1}}(e)?e:`${r}//${t}/${e=a(e)}`}function p(e=window.location.href){return u(e,"github.com")}const{sleep:h}=r(3);async function m(e,t,r,n){let a=new Date;for(;!e.querySelector(t)&&new Date-a<n;)await h(r);return!!e.querySelector(t)}async function f(e){"string"==typeof e?e={selectors:[...arguments]}:e instanceof Node&&(e={container:arguments[0],selectors:[...arguments].splice(1)}),e.container=e.container||document,e.interval=e.interval||100,e.timeout=e.timeout||1500,Array.isArray(e.selectors)||(e.selectors=[...e.selectors]);let t=await Promise.all(e.selectors.map(t=>m(e.container,t,e.interval,e.timeout)));return t.every(e=>e)}class y{isApplieble(e=window.location.href,t=null){return!0}waitUntilFixerReady(){return!0}apply(e=window.location.href,t=null){}}function g(e,t){if(e instanceof HTMLElement&&(function(e){return!!e&&"function"==typeof e[Symbol.iterator]}(t.children)&&(e.append(...t.children),delete t.children),t.attributes&&"object"==typeof t.attributes)){for(let r in t.attributes)e.setAttribute(r,t.attributes[r]);delete t.attributes}for(let r in t){let n=e[r],a=t[r];a&&"object"==typeof a?(null==n&&(n=e[r]={}),g(n,a)):e[r]=t[r]}}function v(e="div",t){"string"==typeof t&&(t={className:t}),t=t||{};let r=document.createElement(e);return g(r,t),r}async function b(e){!function(){let e=document.querySelector(".progress-pjax-loader");if(e){const t=1200,r=100;e.firstElementChild.style.width=0,e.style.opacity="100%";for(let n=0;n<t;n+=r){let r=Math.floor((Math.exp(n/t)-1)/(Math.E-1)*100);r=Math.min(r,100),setTimeout(()=>e.firstElementChild.style.width=r+"%",n)}setTimeout(()=>e.style.opacity=0,t+r)}}();let t=await fetch(e);return{document:(new DOMParser).parseFromString(await t.text(),"text/html"),url:t.url}}async function w(e=window.location.href,t=!0){let r=function(e=location.pathname){return!a(e)}(),n=await b(e),i=n.document.querySelector("main");if(i.style.display="none",r){document.querySelector("body > div.application-main").prepend(v("div",{className:"",attributes:{itemscope:"",itemtype:"http://schema.org/SoftwareSourceCode"},children:[v("main")]}))}let l=document.querySelector("main");if(l.parentElement.insertBefore(i,l),await k(n.url),l.replaceWith(i),r){let e=document.querySelector("body > div.application-main");for(let t of[...e.children].splice(1))e.removeChild(t);document.body.className="logged-in env-production page-responsive intent-mouse"}i.style.display="",t&&function(e){try{history.pushState(null,null,e)}catch(t){location.hash="#"+e}}(n.url)}var x=[new class extends y{isApplieble(e){return s(e)}waitUntilFixerReady(){return f("main:nth-child(1) .container-xl")}apply(){[...document.querySelectorAll("main .container-xl")].forEach(e=>e.className="container-lg clearfix new-discussion-timeline px-3")}},new class extends y{isApplieble(e){return s(e)}waitUntilFixerReady(){return f("main:nth-child(1) > div.repohead")}apply(){let e=document.querySelector("main > div.repohead");e.className="pagehead repohead hx_repohead readability-menu bg-gray-light pb-0 pt-3",e.firstElementChild.className="d-flex container-lg mb-4 px-3",e.querySelector("nav").className="js-repo-nav js-sidenav-container-pjax clearfix hx_reponav reponav px-3 container-lg",e.querySelector("nav > ul").className="list-style-none",[...e.querySelectorAll("nav > ul > li")].forEach(e=>{e.className="";let t=e.querySelector("a"),r=t.classList.contains("selected");t.className="js-selected-navigation-item reponav-item"+(r?" selected":"")})}},new class extends y{isApplieble(e){return o(e)||c(e)}waitUntilFixerReady(){return f("main:nth-child(1) .repository-content .js-details-container .Details-content--hidden")}apply(){let e=document.querySelector(".repository-content div.css-truncate.css-truncate-overflow.text-gray");this._moveCommitDate(e),this._fixCommitMessage(e)}_moveCommitDate(e){let t=e.parentElement.parentElement.querySelector(":scope > div.flex-shrink-0:not(.hx_avatar_stack_commit)");for(let e of[...t.children])t.removeChild(e);let r=v("div",{className:"css-truncate css-truncate-overflow text-gray",children:["Latest commit ",e.querySelector(".text-mono")," ",e.querySelector("relative-time")]});t.append(r)}_fixCommitMessage(e){let t=e.parentElement.parentElement.querySelector(":scope > .Details-content--hidden"),r=t.querySelector("a"),n=t.querySelector("pre"),a=t.querySelector("a[anchor='comments']"),i=e.parentElement.querySelector(":scope > span.hidden-text-expander"),l=e.querySelector("a");for(let t of[...e.childNodes])e.removeChild(t);e.append(l," ",r),a&&i.parentElement.insertBefore(a,i),n||i.parentElement.removeChild(i)}},new class extends y{isApplieble(e){return o(e)}waitUntilFixerReady(){return f({selectors:["main:nth-child(1) .flex-shrink-0.col-12.col-md-3 .Progress"],timeout:300})}apply(){let e=v("div","d-flex repository-lang-stats-graph"),t=v("ol","repository-lang-stats-numbers"),r=v("details",{className:"details-reset mb-3",children:[v("summary",{title:"Click for language details",children:[e]}),v("div",{className:"repository-lang-stats",children:[t]})]}),n=[...document.querySelector(".flex-shrink-0.col-12.col-md-3 .Progress").parentElement.nextElementSibling.children];for(let r of n.map(this._extractLanguageData)){let n=v("span",{className:"language-color",attributes:{"aria-label":`${r.name} ${r.percent}`,itemprop:"keywords"},innerText:r.name,style:{width:r.percent,backgroundColor:r.color}});e.append(n);let a=v(r.link?"a":"span",{href:r.link,children:[v("span",{className:"color-block language-color",style:{backgroundColor:r.color}}),v("span",{className:"lang",innerText:` ${r.name} `}),v("span",{className:"percent",innerText:r.percent})]});t.append(v("li",{children:[a]}))}document.querySelector(".repository-content").prepend(r)}_extractLanguageData(e){return e.querySelector("a")?{name:e.querySelector("span").innerText,percent:e.querySelectorAll("span")[1].innerText,color:e.querySelector("svg").style.color,link:e.querySelector("a").href}:{name:e.querySelectorAll("span")[1].innerText,percent:e.querySelectorAll("span")[2].innerText,color:e.querySelector("svg").style.color,link:""}}},new class extends y{isApplieble(e){return o(e)}apply(e,t){let r=document.querySelector(".repository-content details summary div.repository-lang-stats-graph"),n=v("ul",{className:"numbers-summary",children:[this._createCommitsSummaryElement(t),this._createBranchesSummaryElement(t),this._createPackagesSummaryElement(t),this._createReleasesSummaryElement(t,e),this._createContributorsSummaryElement(t,e),this._createLicenseSummaryElement(t)].filter(e=>e)});document.querySelector(".repository-content").prepend(v("div",{className:"overall-summary "+(r?"border-bottom-0 mb-0 rounded-bottom-0":"mb-3"),children:[n]}))}_createCommitsSummaryElement(e){let t=e.querySelector(".repository-content ul.list-style-none.d-flex li:nth-child(1)"),r=t.querySelector("strong").innerText,n=t.querySelector("a").href;return this._createSummaryElement('<svg class="octicon octicon-git-commit" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"></path></svg>',n,"commit",r)}_createBranchesSummaryElement(e){let t=e.querySelector(".repository-content ul.list-style-none.d-flex li:nth-child(2)"),r=t.querySelector("strong").innerText,n=t.querySelector("a").href;return this._createSummaryElement('<svg class="octicon octicon-git-branch" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path></svg>',n,"branch",r,"es")}_createPackagesSummaryElement(e){let t=[...e.querySelectorAll(".flex-shrink-0.col-12.col-md-3 div.BorderGrid-cell")].find(e=>{let t=e.querySelector("a");return t&&t.href.endsWith("packages")});if(t){let e=(t.querySelector("span.Counter")||{}).innerText||0,r=t.querySelector("a").href,n='<svg class="octicon octicon-tag" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path></svg>';return this._createSummaryElement(n,r,"package",e)}return null}_createReleasesSummaryElement(e,t){let r,n,a=[...e.querySelectorAll(".flex-shrink-0.col-12.col-md-3 div.BorderGrid-cell")].find(e=>{let t=e.querySelector("a");return t&&t.href.endsWith("releases")});return a?(r=(a.querySelector("span.Counter")||{}).innerText||0,n=a.querySelector("a").href):(r=0,n=i(t)+"/releases"),this._createSummaryElement('<svg class="octicon octicon-tag" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path></svg>',n,"release",r)}_createContributorsSummaryElement(e,t){let r,n,a=[...e.querySelectorAll(".flex-shrink-0.col-12.col-md-3 div.BorderGrid-cell")].find(e=>{let t=e.querySelector("a");return t&&t.href.endsWith("contributors")});return a?(r=(a.querySelector("span.Counter")||{}).innerText||0,n=a.querySelector("a").href):(r=1,n=i(t)+"/graphs/contributors"),this._createSummaryElement('<svg class="octicon octicon-people" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path></svg>',n,"contributor",r)}_createLicenseSummaryElement(e){let t=e.querySelector(".flex-shrink-0.col-12.col-md-3 svg.octicon-law");if(t){let e=t.parentElement.href,r=t.parentElement.innerText.trim().replace(" License",""),n='<svg class="octicon octicon-law" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path></svg>';return this._createSummaryElement(n,e,r)}return null}_createSummaryElement(e,t,r,n=-1,a="s"){let i=e+"\n";return-1==n?i+=r:(i+=`<span class="num text-emphasized">${n}</span>`,i+="\n",i+=r,1!=n&&(i+=a)),v("li",{children:[v("a",{href:t,innerHTML:i})]})}},new class extends y{isApplieble(e){return o(e)}waitUntilFixerReady(){return f({selectors:["main:nth-child(1) .flex-shrink-0.col-12.col-md-3 div.list-topics-container.f6"],timeout:300})}apply(){let e=document.querySelector(".flex-shrink-0.col-12.col-md-3 div.list-topics-container.f6");e&&document.querySelector(".repository-content").prepend(v("div",{className:"repository-topics-container mt-2 mb-3 js-topics-list-container",children:[e]}))}},new class extends y{isApplieble(e){return o(e)}waitUntilFixerReady(){return f({selectors:["main:nth-child(1) .flex-shrink-0.col-12.col-md-3 .f4"],timeout:300})}apply(){let e=document.querySelector(".repository-content"),t=document.querySelector(".flex-shrink-0.col-12.col-md-3 .f4"),r=e.querySelector("div.list-topics-container.f6");t&&e.prepend(v("div",{className:r?"":"mb-3",children:[v("div",{className:"f4",innerHTML:t.innerHTML})]}))}},new class extends y{isApplieble(e){return o(e)}waitUntilFixerReady(){return f({selectors:["main:nth-child(1) .flex-shrink-0.col-12.col-md-3 details"],timeout:300})}apply(){let e=document.querySelector(".flex-shrink-0.col-12.col-md-3 details");e&&document.querySelector(".repository-content").prepend(e)}},new class extends y{isApplieble(e){return o(e)}waitUntilFixerReady(){return f("main:nth-child(1) .flex-shrink-0.col-12.col-md-3")}apply(){let e=document.querySelector(".repository-content"),t=document.querySelector(".flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0"),r=document.querySelector(".gutter-condensed.gutter-lg.d-flex.flex-column.flex-md-row");e.append(...t.children),r.parentElement.removeChild(r)}},new class extends y{isApplieble(e){return o(e)||c(e)}waitUntilFixerReady(){return f({selectors:["main:nth-child(1) #readme"],timeout:300})}apply(){let e=document.querySelector("#readme");if(e){e.className="Box md js-code-block-container Box--condensed",e.querySelector(".Box-header").className="Box-header d-flex flex-items-center flex-justify-between";let t='<svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path></svg>',r=e.querySelector(".Box-title.pr-3");r.innerHTML=t+r.innerHTML}}},new class extends y{apply(){this._setupObserver(),this._fixAll()}_needToBeFixed(e){return!e.hasAttribute("defreshed")&&e.href&&!e.href.endsWith("#")&&(!!(t=e.href)&&(t.startsWith("/")||u(t,location.host)))&&s(e.href)&&!function(e=location.pathname){return(l(e)||"").startsWith("raw/")}(e.href)&&!function(e=location.pathname){return(l(e)||"").startsWith("archive/")}(e.href);var t}_fix(e){e.setAttribute("defreshed",""),e.addEventListener("click",(async function(e){e.stopPropagation(),e.preventDefault(),w(d(this.href))}))}_fixAll(){[...document.querySelectorAll("a")].filter(this._needToBeFixed).forEach(this._fix)}_setupObserver(){window.defreshObserver||(window.defreshObserver=new MutationObserver(()=>this._fixAll()),window.defreshObserver.observe(document.body,{childList:!0,subtree:!0}))}},new class extends y{apply(){window.onpopstate=function(){let e=document.location.href;p(e)&&s(e)?w(e,!1):window.location.href=document.location.href}}}];async function k(e=window.location.href){let t=document.cloneNode(!0);for(let r of x)if(r.isApplieble(e,t)&&await r.waitUntilFixerReady())try{r.apply(e,t)}catch(e){console.log("Fixer exception: ",e)}}!window.defreshed&&p()&&(window.defreshed=!0,k())}]);