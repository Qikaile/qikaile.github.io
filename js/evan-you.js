// build time:Thu Feb 04 2021 18:42:35 GMT+0800 (GMT+08:00)
if(document.getElementById("evanyou")){var c=document.getElementById("evanyou"),x=c.getContext("2d"),pr=window.devicePixelRatio||1,w=window.innerWidth,h=window.innerHeight,f=90,q,m=Math,r=0,u=m.PI*2,v=m.cos,z=m.random;c.width=w*pr;c.height=h*pr;x.scale(pr,pr);x.globalAlpha=.6;function evanyou(){x.clearRect(0,0,w,h);q=[{x:0,y:h*.7+f},{x:0,y:h*.7-f}];while(q[1].x<w+f)d(q[0],q[1])}function d(e,n){x.beginPath();x.moveTo(e.x,e.y);x.lineTo(n.x,n.y);var o=n.x+(z()*2-.25)*f,t=y(n.y);x.lineTo(o,t);x.closePath();r-=u/-50;x.fillStyle="#"+(v(r)*127+128<<16|v(r+u/3)*127+128<<8|v(r+u/3*2)*127+128).toString(16);x.fill();q[0]=q[1];q[1]={x:o,y:t}}function y(e){var n=e+(z()*2-1.1)*f;return n>h||n<0?y(e):n}document.onclick=evanyou;document.ontouchstart=evanyou;evanyou()}
//rebuild by neat 