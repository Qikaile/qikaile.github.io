<link rel="stylesheet" class="aplayer-secondary-style-marker" href="/assets/css/APlayer.min.css"><script src="/assets/js/APlayer.min.js" class="aplayer-secondary-script-marker"></script>// build time:Thu Oct 07 2021 12:41:06 GMT+0000 (Coordinated Universal Time)
(function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={exports:{},id:r,loaded:false};t[r].call(i.exports,i,i.exports,n);i.loaded=true;return i.exports}n.m=t;n.c=e;n.p="/dist/";return n(0)})([function(t,e,n){"use strict";n(1);var r=n(2);var i=o(r);function o(t){return t&&t.__esModule?t:{"default":t}}var a=[];var u=0;var s;function l(t){var e=t.getBoundingClientRect();var n=getComputedStyle(t,null);var r=document.createElement("i");r.className="icon-film";r.style.color="#fff";r.style.fontSize="26px";r.style.position="absolute";r.style.right="10px";r.style.bottom="10px";r.style.zIndex=1;t.parentNode.appendChild(r)}var c=function h(){var t=document.querySelectorAll('.thumb a[data-type="video"]');for(var e=0,n=t.length;e<n;e++){l(t[e])}};var f="function" g(t){var e ;for(var n="0,r=t.list.length;n<r;n++){var" o="t.list[n].arr;var" a u="0,s=o.link.length;u<s;u++){var" l="https://gitee.com/sky_mirrors_the_clouds/img/raw/master/min_photos/" +o.link[u];var d="o.type[u];var" p="f+(d==="video"?".mp4":".jpg");f+="";a+='<figure" class="thumb" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">                <a href="'+f+'" itemprop="contentUrl" data-size="1080x1080" data-type="'+d+'" data-target="'+f+'">                  <img class="reward-img" data-type="'+d+'" data-src="'+l+'" src="/photos/ins.j/assets/empty.png" itemprop="thumbnail" onload="lzld(this)">                </a>                <figcaption style="display:none" itemprop="caption description">'+o.text[u]+"</figcaption>            "}e=e+'<section class="archives album"><h1 class="year">'+o.year+"年<em>"+o.month+'月</em></h1>        <ul class="img-box-ul">'+a+"</ul>        </section>"}document.querySelector(".instagram").innerHTML='<div class="photos" itemscope itemtype="http://schema.org/ImageGallery">'+e+"</div>";c();i.default.init()};var d=function y(t){var e=t.split("/");return"/photos/assets/ins/"+e[e.length-1]};var p=function b(t){var e={};for(var n=0,r=t.length;n<r;n++){var i="t[n].y;var" o="t[n].m;var" a="d(t[n].src);var" u="t[n].text;var" s="i+""+((o+"").length==1?"0"+o:o);if(e[s]){e[s].srclist.push(a);e[s].text.push(u)}else{e[s]={year:i,month:o,srclist:[a],text:[u]}}}f(e)};function" v(t){if(!s){var e="new" xmlhttprequest;e.open("get",". data.json?t="+ +new Date,true);e.onload=function(){if(this.status>=200&&this.status<300){var e=JSON.parse(this.response);s=e;t(s)}else{console.error(this.statusText)}};e.onerror=function(){console.error(this.statusText)};e.send()}else{t(s)}}var m={init:function w(){v(function(t){f(t)})}};m.init()},function(t,e,n){(function(e){" use strict";var r="n(3);var" o(t){if(l.call(i,t)="==-1){i.push(t)}}function" a(t){t="s({offset:333,src:"data-src",container:false},t||{});if(typeof" t.src="=="string"){o(t.src)}var" n(t){var n="i(t);if(n){t.src=n}t.setAttribute("data-lzled",true);e[l.call(e,t)]=null}function" i(e){if(typeof t.src(e)}return e.getattribute(t.src)}function a(i){i.onload="null;i.removeAttribute("onload");i.onerror=null;i.removeAttribute("onerror");if(l.call(e,i)===-1){r(i,t,n)}}return" a}function u(t){var +t+"element";if(n in e;for(var e||r.call(this,t)}return r.call(this,t)}}function s(t,e){for(var t){if(e[n]="==undefined){e[n]=t[n]}}return" e}function l(t){for(var e}t.exports="a}).call(e,function(){return" this}())},function(t,e){"use i(t){var c(t){t="t.parentNode.parentNode;var" c="0;c<n;c++){i=e[c];if(i.nodeType!==1){continue}o=i.children[0];a=o.getAttribute("data-size").split("x");u=o.getAttribute("data-type");s=o.getAttribute("data-target");l={src:o.getAttribute("href"),w:parseInt(a[0],10),h:parseInt(a[1],10)};if(i.children.length">1){l.title=i.children[1].innerHTML}if(o.children.length>0){l.msrc=o.children[0].getAttribute("src");l.type=u;l.target=s;l.html='<video src="'+s+'" controls="controls" autoplay="autoplay"></video>';if(u==="video"){}}l.el=i;r.push(l)}return r};var n=function f(t,e){return t&&(e(t)?t:f(t.parentNode,e))};var r=function d(t){t=t||window.event;t.preventDefault?t.preventDefault():t.returnValue=false;var e=t.target||t.srcElement;var r=n(e,function(t){return t.tagName&&t.tagName.toUpperCase()==="FIGURE"});if(!r){return}var i=r.parentNode,a=document.getElementsByClassName("thumb"),u=a.length,s=0,l;for(var c=0;c<u;c++){if(a[c].nodeType!==1){continue}if(a[c]===r){l=s;break}s++}if(l>=0){o(l,i)}return false};var i=function p(){var t=window.location.hash.substring(1),e={};if(t.length<5){return e}var n="t.split("&");for(var" r="0;r<n.length;r++){if(!n[r]){continue}var" i="n[r].split("=");if(i.length<2){continue}e[i[0]]=i[1]}if(e.gid){e.gid=parseInt(e.gid,10)}return" e};var o="function" v(t,n,r,i){var p(t){var e="s[t].el.getElementsByTagName("img")[0],n=window.pageYOffset||document.documentElement.scrollTop,r=e.getBoundingClientRect();return{x:r.left,y:r.top+n,w:r.width}}};if(i){if(u.galleryPIDs){for(var" l="0;l<s.length;l++){if(s[l].pid==t){u.index=l;break}}}else{u.index=parseInt(t,10)-1}}else{u.index=parseInt(t,10)}if(isNaN(u.index)){return}if(r){u.showAnimationDuration=0}a=new" photoswipe(o,photoswipeui_default,s,u);a.init();var c;var f="function" v(){if(c){c.remove();c="null}};var" d="function" m(){var t="a.currItem;f();if(t.type==="video"){var" a="document.querySelectorAll(t);for(var" u="0,s=a.length;u<s;u++){a[u].setAttribute("data-pswp-uid",u+1);a[u].onclick=r}var" t(){n(".photos")}return{init:t}}();t.exports="r},function(t,e){(function(e){t.exports=i;var" e.mutationobserver="=="function";function" i(t,r,i){var n[l].isinviewport(t,u,i)}}return n[n.push(s(a))-1].isinviewport(t,u,i)}function o(t,e,n){if(t.attachevent){t.attachevent("on"+e,n)}else{t.addeventlistener(e,n,false)}}function a(t,e,n){var r;return function(){var u(){r="null;if(!n)t.apply(i,o)}}}var" true}return e.document.documentelement.comparedocumentposition?function(t,e){return!!(t.comparedocumentposition(e)&16)}:e.document.documentelement.contains?function(t,e){return t!="=e&&(t.contains?t.contains(e):false)}:function(t,e){while(e=e.parentNode){if(e===t){return" true}}return false}};function s(t){var s="a(n.checkAll(p),15);o(i,"scroll",s);if(i===e){o(e,"resize",s)}if(r){c(n,t,s)}setInterval(s,150);function" f(t,e,n){if(!n){return v(t,e)}var r}function d(t,e,r){function i(){n.add(t,e,r)}function o(){n.remove(t)}return{watch:i,dispose:o}}function p(t,e,r){if(v(t,e)){n.remove(t);r(t)}}function v(n,r){if(!u(e.document.documentelement,n)||!u(e.document.documentelement,t)){return false}if(!n.offsetwidth||!n.offsetheight){return false}var>o.left&&i.left<o.right&&i.bottom>o.top&&i.top<o.bottom;return s}return{container:t,isinviewport:f}}function l(){var t="[];function" e(e,n,r){if(!i(e)){t.push([e,n,r])}}function n(e){var n="r(e);if(n!==-1){t.splice(n,1)}}function" r(e){for(var>=0;n--){if(t[n][0]===e){return n}}return-1}function i(t){return r(t)!==-1}function o(e){return function(){for(var n=t.length-1;n>=0;n--){e.apply(this,t[n])}}}return{add:e,remove:n,isWatched:i,checkAll:o}}function c(t,e,n){var r=new MutationObserver(a);var i=Array.prototype.filter;var o=Array.prototype.concat;r.observe(e,{childList:true,subtree:true,attributes:true});function a(t){if(t.some(u)===true){setTimeout(n,0)}}function u(e){var n=o.call([],Array.prototype.slice.call(e.addedNodes),e.target);return i.call(n,t.isWatched).length>0}}}).call(e,function(){return this}())}]);
//rebuild by neat </o.bottom;return></o.right&&i.bottom></5){return></u;c++){if(a[c].nodeType!==1){continue}if(a[c]===r){l=s;break}s++}if(l></r;n++){var></n;e++){l(t[e])}};var>