// build time:Mon Aug 03 2020 12:49:59 GMT+0800 (GMT+08:00)
(function(){function e(e,t){var o,n;var i={x:0,y:0};var l=false;var r=0;var s={};var a={};var f={};f.name="wobblew";f.position="relative";f.depth=-1;f.overflowX="visible";f.overflowY="visible";f.offsetX=0;f.offsetY=0;f.moveTypeIn="move";f.moveTypeOut="wobble";f.wobbleFactor=.95;f.wobbleSpeed=.1;f.moveSpeed=6;f.lineWidth=1;f.transplantLineColor=false;f.lineColor="";f.transplantBodyColor=true;f.bodyColor="";f.radius=50;f.pointCountX=7;f.pointCountY=5;f.movementLeft=true;f.movementRight=true;f.movementTop=true;f.movementBottom=true;f.autoResize=true;f.debug=false;if(t!==undefined){for(var u in t){if(t.hasOwnProperty(u)&&f.hasOwnProperty(u)){f[u]=t[u]}}}if(!e){throw Error("\n"+"No div element found")}if(f.pointCountX%2===0){throw Error("\n"+"Param pointCountX must be an odd integer")}if(f.pointCountY%2===0){throw Error("\n"+"Param pointCountY must be an odd integer")}HTMLElement.prototype.__defineGetter__("currentStyle",function(){return this.ownerDocument.defaultView.getComputedStyle(this,null)});function p(){o=document.createElement("canvas");o.id=f.name;o.style.position="absolute";o.style.zIndex=f.depth.toString();o.addEventListener("mousemove",w);o.addEventListener("mouseleave",C);n=o.getContext("2d");e.appendChild(o);e.style.position=f.position;e.style.zIndex=(f.depth+1).toString();if(f.overflowX.length>0){e.parentElement.style.overflowX=f.overflowX}if(f.overflowY.length>0){e.parentElement.style.overflowY=f.overflowY}if(f.transplantBodyColor){if(e.currentStyle.backgroundColor.length>0){f.bodyColor=e.currentStyle.backgroundColor}}if(f.transplantLineColor){if(e.currentStyle.borderColor.length>0){f.lineColor=e.currentStyle.borderColor}}s.elementWidth=e.offsetWidth;s.elementHeight=e.offsetHeight;d();h();c();if(f.transplantBodyColor){if(e.currentStyle.backgroundColor.length>0){if(e.className.length>0){e.className+=" wobbleTransparentBK"}else{e.className=" wobbleTransparentBK"}}}if(f.transplantLineColor){if(e.currentStyle.borderColor.length>0){if(e.className.length>0){e.className+=" wobbleTransparentLine"}else{e.className=" wobbleTransparentLine"}}}}function d(){s.width=s.elementWidth+f.offsetX*2;s.height=s.elementHeight+f.offsetY*2;if(f.radius>0){f.pointCountX=Math.round(s.width/f.radius);f.pointCountY=Math.round(s.height/f.radius)}if(f.pointCountX%2==0){f.pointCountX=f.pointCountX+1}if(f.pointCountY%2==0){f.pointCountY=f.pointCountY+1}a.spaceX=Math.min(s.elementWidth,s.width/(f.pointCountX-1));a.spaceY=Math.min(s.elementHeight,s.height/(f.pointCountY+1));a.radius=Math.ceil(Math.max(a.spaceX,a.spaceY));s.left=0;s.top=0;f.canvasWidth=s.elementWidth;if(f.movementLeft){o.style.left=-a.radius+"px";f.canvasWidth+=a.radius;s.left=a.radius-f.offsetX}else{o.style.left=-f.offsetX+"px"}if(f.movementRight)f.canvasWidth+=a.radius;f.canvasHeight=s.elementHeight;if(f.movementTop){o.style.top=-a.radius+"px";f.canvasHeight+=a.radius;s.top=a.radius-f.offsetY}else{o.style.top=-f.offsetY+"px"}if(f.movementBottom)f.canvasHeight+=a.radius;o.width=f.canvasWidth;o.height=f.canvasHeight}function h(){a.pointHolder=[];var e;var t;var o,n;t=true;for(o=0,n=f.pointCountX;o<n;o++){if(f.movementTop){if(t){e=m(s.left+o*a.spaceX,s.top,0,0,0,true,a.spaceX,"P",f.debug);t=false}else{e=m(s.left+o*a.spaceX,s.top,0,0,0,true,a.spaceX,"C",f.debug);t=true}if(o===0||o===n-1){e.color="#00FF00";e.movement=false}a.pointHolder.push(e)}else{if(o===0||o===n-1){e=m(s.left+o*a.spaceX,s.top,0,0,0,false,0,"P",f.debug)}a.pointHolder.push(e)}}t=false;for(o=1,n=f.pointCountY+1;o<n;o++){if(f.movementRight){if(t){e=m(s.left+s.width,s.top+o*a.spaceY,0,0,0,true,a.spaceY,"P",f.debug);t=false}else{e=m(s.left+s.width,s.top+o*a.spaceY,0,0,0,true,a.spaceY,"C",f.debug);t=true}a.pointHolder.push(e)}else{if(o===1){e=m(s.left+s.width,s.top+(o-1)*a.spaceY,0,0,0,false,0,"P",f.debug)}else if(o===f.pointCountY){e=m(s.left+s.width,s.top+(o+1)*a.spaceY,0,0,0,false,0,"P",f.debug)}a.pointHolder.push(e)}}t=true;for(o=f.pointCountX-1,n=-1;o>n;o--){if(f.movementBottom){if(t){e=m(s.left+o*a.spaceX,s.top+s.height,0,0,0,true,a.spaceX,"P",f.debug);t=false}else{e=m(s.left+o*a.spaceX,s.top+s.height,0,0,0,true,a.spaceX,"C",f.debug);t=true}if(o===0||o===f.pointCountX-1){e.color="#00FF00";e.movement=false}a.pointHolder.push(e)}else{if(o===0||o===f.pointCountX-1){e=m(s.left+o*a.spaceX,s.top+s.height,0,0,0,false,0,"P",f.debug)}a.pointHolder.push(e)}}t=false;for(o=f.pointCountY,n=-1;o>n;o--){if(f.movementLeft){if(t){e=m(s.left,s.top+o*a.spaceY,0,0,0,true,a.spaceY,"P",f.debug);t=false}else{e=m(s.left,s.top+o*a.spaceY,0,0,0,true,a.spaceY,"C",f.debug);t=true}a.pointHolder.push(e)}else{if(o===0){e=m(s.left,s.top+o*a.spaceY,0,0,0,false,0,"P",f.debug)}else if(o===f.pointCountY){e=m(s.left,s.top+(o+1)*a.spaceY,0,0,0,false,0,"P",f.debug)}a.pointHolder.push(e)}}}function m(e,t,o,n,i,l,r,s,a){var f={};f.x=e;f.y=t;f.xp=e;f.yp=t;f.sx=0;f.sy=0;f.distance=i;f.movement=l;f.radius=r;f.type=s;f.visible=a;return f}window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function c(){requestAnimFrame(c);v();if(f.autoResize){b()}}function v(){n.clearRect(0,0,f.canvasWidth,f.canvasHeight);var e=a.pointHolder;var t,o;n.beginPath();n.moveTo(e[0].x,e[0].y);for(t=1,o=e.length;t<o;t+=2){var l=e[t];var r=i.x-l.xp;var s=i.y-l.yp;l.distance=Math.sqrt(r*r+s*s);if(l.distance<l.radius){if(f.moveTypeIn==="wobble"){l.sx=l.sx*f.wobbleFactor+(i.x-l.x)*f.wobbleSpeed;l.sy=l.sy*f.wobbleFactor+(i.y-l.y)*f.wobbleSpeed;l.x=l.x+l.sx;l.y=l.y+l.sy}else if(f.moveTypeIn==="move"){l.x-=(l.x-i.x)/f.moveSpeed;l.y-=(l.y-i.y)/f.moveSpeed}}else{if(f.moveTypeOut==="wobble"){l.sx=l.sx*f.wobbleFactor+(l.xp-l.x)*f.wobbleSpeed;l.sy=l.sy*f.wobbleFactor+(l.yp-l.y)*f.wobbleSpeed;l.x=l.x+l.sx;l.y=l.y+l.sy}else if(f.moveTypeOut==="move"){l.x-=(l.x-l.xp)/f.moveSpeed;l.y-=(l.y-l.yp)/f.moveSpeed}}var u=e[t-1];var p=e[t+1];if(t>2&&t<e.length-2){if(u.movement){u.x=(e[t-2].x+l.x)/2;u.y=(e[t-2].y+l.y)/2}if(p.movement){p.x=(e[t+2].x+l.x)/2;p.y=(e[t+2].y+l.y)/2}}n.quadraticCurveTo(l.x,l.y,p.x,p.y)}if(f.lineColor.length>0){n.lineWidth=f.lineWidth;n.strokeStyle=f.lineColor;n.stroke()}if(f.bodyColor.length>0){n.fillStyle=f.bodyColor;n.fill()}if(f.debug){for(t=0,o=e.length;t<o;t++){var l=e[t];if(l.visible){if(l.type==="P"){g(l.x,l.y,3,"#FF0000")}else{g(l.x,l.y,6,"#FF00FF")}if(l.color){g(l.x,l.y,12,l.color)}}}n.strokeStyle="#000000";n.strokeRect(0,0,f.canvasWidth,f.canvasHeight)}}function y(){d();h();l=false}function b(){if(!l){if(s.elementWidth!==e.offsetWidth||s.elementHeight!==e.offsetHeight){l=true;s.elementWidth=e.offsetWidth;s.elementHeight=e.offsetHeight;r=window.setTimeout(y,10)}}}function g(e,t,o,i){n.beginPath();n.arc(e,t,o,0,2*Math.PI);n.strokeStyle=i;n.stroke()}function w(e){i=x(o,e)}function C(e){i.x=-1e4;i.y=-1e4}function x(e,t){var o=e.getBoundingClientRect();return{x:t.clientX-o.left,y:t.clientY-o.top}}p()}window.WobbleWindow=e})();if(typeof jQuery!=="undefined"){(function(e){e.fn.wobbleWindow=function(t){var o=arguments;return this.each(function(){if(!e.data(this,"plugin_WobbleWindow")){e.data(this,"plugin_WobbleWindow",new WobbleWindow(this,t))}else{var n=e.data(this,"plugin_WobbleWindow");if(n[t]){n[t].apply(this,Array.prototype.slice.call(o,1))}else{e.error("Method "+t+" does not exist on jQuery.wobbleWindow")}}})}})(jQuery)}
//rebuild by neat 