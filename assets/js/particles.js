var count_particles,stats,update,pJS=function(e,t){var i=document.querySelector("#"+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:i,w:i.offsetWidth,h:i.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var a=this.pJS;t&&Object.deepExtend(a,t),a.tmp.obj={size_value:a.particles.size.value,size_anim_speed:a.particles.size.anim.speed,move_speed:a.particles.move.speed,line_linked_distance:a.particles.line_linked.distance,line_linked_width:a.particles.line_linked.width,mode_grab_distance:a.interactivity.modes.grab.distance,mode_bubble_distance:a.interactivity.modes.bubble.distance,mode_bubble_size:a.interactivity.modes.bubble.size,mode_repulse_distance:a.interactivity.modes.repulse.distance},a.fn.retinaInit=function(){a.retina_detect&&window.devicePixelRatio>1?(a.canvas.pxratio=window.devicePixelRatio,a.tmp.retina=!0):(a.canvas.pxratio=1,a.tmp.retina=!1),a.canvas.w=a.canvas.el.offsetWidth*a.canvas.pxratio,a.canvas.h=a.canvas.el.offsetHeight*a.canvas.pxratio,a.particles.size.value=a.tmp.obj.size_value*a.canvas.pxratio,a.particles.size.anim.speed=a.tmp.obj.size_anim_speed*a.canvas.pxratio,a.particles.move.speed=a.tmp.obj.move_speed*a.canvas.pxratio,a.particles.line_linked.distance=a.tmp.obj.line_linked_distance*a.canvas.pxratio,a.interactivity.modes.grab.distance=a.tmp.obj.mode_grab_distance*a.canvas.pxratio,a.interactivity.modes.bubble.distance=a.tmp.obj.mode_bubble_distance*a.canvas.pxratio,a.particles.line_linked.width=a.tmp.obj.line_linked_width*a.canvas.pxratio,a.interactivity.modes.bubble.size=a.tmp.obj.mode_bubble_size*a.canvas.pxratio,a.interactivity.modes.repulse.distance=a.tmp.obj.mode_repulse_distance*a.canvas.pxratio},a.fn.canvasInit=function(){a.canvas.ctx=a.canvas.el.getContext("2d")},a.fn.canvasSize=function(){a.canvas.el.width=a.canvas.w,a.canvas.el.height=a.canvas.h,a&&a.interactivity.events.resize&&window.addEventListener("resize",function(){a.canvas.w=a.canvas.el.offsetWidth,a.canvas.h=a.canvas.el.offsetHeight,a.tmp.retina&&(a.canvas.w*=a.canvas.pxratio,a.canvas.h*=a.canvas.pxratio),a.canvas.el.width=a.canvas.w,a.canvas.el.height=a.canvas.h,a.particles.move.enable||(a.fn.particlesEmpty(),a.fn.particlesCreate(),a.fn.particlesDraw(),a.fn.vendors.densityAutoParticles()),a.fn.vendors.densityAutoParticles()})},a.fn.canvasPaint=function(){a.canvas.ctx.fillRect(0,0,a.canvas.w,a.canvas.h)},a.fn.canvasClear=function(){a.canvas.ctx.clearRect(0,0,a.canvas.w,a.canvas.h)},a.fn.particle=function(e,t,i){if(this.radius=(a.particles.size.random?Math.random():1)*a.particles.size.value,a.particles.size.anim.enable&&(this.size_status=!1,this.vs=a.particles.size.anim.speed/100,a.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=i?i.x:Math.random()*a.canvas.w,this.y=i?i.y:Math.random()*a.canvas.h,this.x>a.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>a.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),a.particles.move.bounce&&a.fn.vendors.checkOverlap(this,i),this.color={},"object"==typeof e.value){if(e.value instanceof Array){var s=e.value[Math.floor(Math.random()*a.particles.color.value.length)];this.color.rgb=hexToRgb(s)}else void 0!=e.value.r&&void 0!=e.value.g&&void 0!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),void 0!=e.value.h&&void 0!=e.value.s&&void 0!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l})}else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=hexToRgb(this.color.value));this.opacity=(a.particles.opacity.random?Math.random():1)*a.particles.opacity.value,a.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=a.particles.opacity.anim.speed/100,a.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var n={};switch(a.particles.move.direction){case"top":n={x:0,y:-1};break;case"top-right":n={x:.5,y:-.5};break;case"right":n={x:1,y:-0};break;case"bottom-right":n={x:.5,y:.5};break;case"bottom":n={x:0,y:1};break;case"bottom-left":n={x:-.5,y:1};break;case"left":n={x:-1,y:0};break;case"top-left":n={x:-.5,y:-.5};break;default:n={x:0,y:0}}a.particles.move.straight?(this.vx=n.x,this.vy=n.y,a.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=n.x+Math.random()-.5,this.vy=n.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var r=a.particles.shape.type;if("object"==typeof r){if(r instanceof Array){var c=r[Math.floor(Math.random()*r.length)];this.shape=c}}else this.shape=r;if("image"==this.shape){var o=a.particles.shape;this.img={src:o.image.src,ratio:o.image.width/o.image.height},this.img.ratio||(this.img.ratio=1),"svg"==a.tmp.img_type&&void 0!=a.tmp.source_svg&&(a.fn.vendors.createSvgImg(this),a.tmp.pushing&&(this.img.loaded=!1))}},a.fn.particle.prototype.draw=function(){if(void 0!=this.radius_bubble)var e=this.radius_bubble;else var e=this.radius;if(void 0!=this.opacity_bubble)var t=this.opacity_bubble;else var t=this.opacity;if(this.color.rgb)var i="rgba("+this.color.rgb.r+","+this.color.rgb.g+","+this.color.rgb.b+","+t+")";else var i="hsla("+this.color.hsl.h+","+this.color.hsl.s+"%,"+this.color.hsl.l+"%,"+t+")";switch(a.canvas.ctx.fillStyle=i,a.canvas.ctx.beginPath(),this.shape){case"circle":a.canvas.ctx.arc(this.x,this.y,e,0,2*Math.PI,!1);break;case"edge":a.canvas.ctx.rect(this.x-e,this.y-e,2*e,2*e);break;case"triangle":a.fn.vendors.drawShape(a.canvas.ctx,this.x-e,this.y+e/1.66,2*e,3,2);break;case"polygon":a.fn.vendors.drawShape(a.canvas.ctx,this.x-e/(a.particles.shape.polygon.nb_sides/3.5),this.y-e/.76,2.66*e/(a.particles.shape.polygon.nb_sides/3),a.particles.shape.polygon.nb_sides,1);break;case"star":a.fn.vendors.drawShape(a.canvas.ctx,this.x-2*e/(a.particles.shape.polygon.nb_sides/4),this.y-e/1.52,5.32*e/(a.particles.shape.polygon.nb_sides/3),a.particles.shape.polygon.nb_sides,2);break;case"image":if("svg"==a.tmp.img_type)var s=this.img.obj;else var s=a.tmp.img_obj;s&&a.canvas.ctx.drawImage(s,this.x-e,this.y-e,2*e,2*e/this.img.ratio)}a.canvas.ctx.closePath(),a.particles.shape.stroke.width>0&&(a.canvas.ctx.strokeStyle=a.particles.shape.stroke.color,a.canvas.ctx.lineWidth=a.particles.shape.stroke.width,a.canvas.ctx.stroke()),a.canvas.ctx.fill()},a.fn.particlesCreate=function(){for(var e=0;e<a.particles.number.value;e++)a.particles.array.push(new a.fn.particle(a.particles.color,a.particles.opacity.value))},a.fn.particlesUpdate=function(){for(var e=0;e<a.particles.array.length;e++){var t=a.particles.array[e];if(a.particles.move.enable){var i=a.particles.move.speed/2;t.x+=t.vx*i,t.y+=t.vy*i}if(a.particles.opacity.anim.enable&&(!0==t.opacity_status?(t.opacity>=a.particles.opacity.value&&(t.opacity_status=!1),t.opacity+=t.vo):(t.opacity<=a.particles.opacity.anim.opacity_min&&(t.opacity_status=!0),t.opacity-=t.vo),t.opacity<0&&(t.opacity=0)),a.particles.size.anim.enable&&(!0==t.size_status?(t.radius>=a.particles.size.value&&(t.size_status=!1),t.radius+=t.vs):(t.radius<=a.particles.size.anim.size_min&&(t.size_status=!0),t.radius-=t.vs),t.radius<0&&(t.radius=0)),"bounce"==a.particles.move.out_mode)var s={x_left:t.radius,x_right:a.canvas.w,y_top:t.radius,y_bottom:a.canvas.h};else var s={x_left:-t.radius,x_right:a.canvas.w+t.radius,y_top:-t.radius,y_bottom:a.canvas.h+t.radius};if(t.x-t.radius>a.canvas.w?(t.x=s.x_left,t.y=Math.random()*a.canvas.h):t.x+t.radius<0&&(t.x=s.x_right,t.y=Math.random()*a.canvas.h),t.y-t.radius>a.canvas.h?(t.y=s.y_top,t.x=Math.random()*a.canvas.w):t.y+t.radius<0&&(t.y=s.y_bottom,t.x=Math.random()*a.canvas.w),"bounce"===a.particles.move.out_mode&&(t.x+t.radius>a.canvas.w?t.vx=-t.vx:t.x-t.radius<0&&(t.vx=-t.vx),t.y+t.radius>a.canvas.h?t.vy=-t.vy:t.y-t.radius<0&&(t.vy=-t.vy)),isInArray("grab",a.interactivity.events.onhover.mode)&&a.fn.modes.grabParticle(t),(isInArray("bubble",a.interactivity.events.onhover.mode)||isInArray("bubble",a.interactivity.events.onclick.mode))&&a.fn.modes.bubbleParticle(t),(isInArray("repulse",a.interactivity.events.onhover.mode)||isInArray("repulse",a.interactivity.events.onclick.mode))&&a.fn.modes.repulseParticle(t),a.particles.line_linked.enable||a.particles.move.attract.enable)for(var n=e+1;n<a.particles.array.length;n++){var r=a.particles.array[n];a.particles.line_linked.enable&&a.fn.interact.linkParticles(t,r),a.particles.move.attract.enable&&a.fn.interact.attractParticles(t,r),a.particles.move.bounce&&a.fn.interact.bounceParticles(t,r)}}},a.fn.particlesDraw=function(){a.canvas.ctx.clearRect(0,0,a.canvas.w,a.canvas.h),a.fn.particlesUpdate();for(var e=0;e<a.particles.array.length;e++)a.particles.array[e].draw()},a.fn.particlesEmpty=function(){a.particles.array=[]},a.fn.particlesRefresh=function(){cancelRequestAnimFrame(a.fn.checkAnimFrame),cancelRequestAnimFrame(a.fn.drawAnimFrame),a.tmp.source_svg=void 0,a.tmp.img_obj=void 0,a.tmp.count_svg=0,a.fn.particlesEmpty(),a.fn.canvasClear(),a.fn.vendors.start()},a.fn.interact.linkParticles=function(e,t){var i=e.x-t.x,s=e.y-t.y,n=Math.sqrt(i*i+s*s);if(n<=a.particles.line_linked.distance){var r=a.particles.line_linked.opacity-n/(1/a.particles.line_linked.opacity)/a.particles.line_linked.distance;if(r>0){var c=a.particles.line_linked.color_rgb_line;a.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+r+")",a.canvas.ctx.lineWidth=a.particles.line_linked.width,a.canvas.ctx.beginPath(),a.canvas.ctx.moveTo(e.x,e.y),a.canvas.ctx.lineTo(t.x,t.y),a.canvas.ctx.stroke(),a.canvas.ctx.closePath()}}},a.fn.interact.attractParticles=function(e,t){var i=e.x-t.x,s=e.y-t.y;if(Math.sqrt(i*i+s*s)<=a.particles.line_linked.distance){var n=i/(1e3*a.particles.move.attract.rotateX),r=s/(1e3*a.particles.move.attract.rotateY);e.vx-=n,e.vy-=r,t.vx+=n,t.vy+=r}},a.fn.interact.bounceParticles=function(e,t){var i=e.x-t.x,a=e.y-t.y;Math.sqrt(i*i+a*a)<=e.radius+t.radius&&(e.vx=-e.vx,e.vy=-e.vy,t.vx=-t.vx,t.vy=-t.vy)},a.fn.modes.pushParticles=function(e,t){a.tmp.pushing=!0;for(var i=0;i<e;i++)a.particles.array.push(new a.fn.particle(a.particles.color,a.particles.opacity.value,{x:t?t.pos_x:Math.random()*a.canvas.w,y:t?t.pos_y:Math.random()*a.canvas.h})),i==e-1&&(a.particles.move.enable||a.fn.particlesDraw(),a.tmp.pushing=!1)},a.fn.modes.removeParticles=function(e){a.particles.array.splice(0,e),a.particles.move.enable||a.fn.particlesDraw()},a.fn.modes.bubbleParticle=function(e){if(a.interactivity.events.onhover.enable&&isInArray("bubble",a.interactivity.events.onhover.mode)){var t=e.x-a.interactivity.mouse.pos_x,i=e.y-a.interactivity.mouse.pos_y,s=Math.sqrt(t*t+i*i),n=1-s/a.interactivity.modes.bubble.distance;function r(){e.opacity_bubble=e.opacity,e.radius_bubble=e.radius}if(s<=a.interactivity.modes.bubble.distance){if(n>=0&&"mousemove"==a.interactivity.status){if(a.interactivity.modes.bubble.size!=a.particles.size.value){if(a.interactivity.modes.bubble.size>a.particles.size.value){var c=e.radius+a.interactivity.modes.bubble.size*n;c>=0&&(e.radius_bubble=c)}else{var o=e.radius-a.interactivity.modes.bubble.size,c=e.radius-o*n;c>0?e.radius_bubble=c:e.radius_bubble=0}}if(a.interactivity.modes.bubble.opacity!=a.particles.opacity.value){if(a.interactivity.modes.bubble.opacity>a.particles.opacity.value){var l=a.interactivity.modes.bubble.opacity*n;l>e.opacity&&l<=a.interactivity.modes.bubble.opacity&&(e.opacity_bubble=l)}else{var l=e.opacity-(a.particles.opacity.value-a.interactivity.modes.bubble.opacity)*n;l<e.opacity&&l>=a.interactivity.modes.bubble.opacity&&(e.opacity_bubble=l)}}}}else r();"mouseleave"==a.interactivity.status&&r()}else if(a.interactivity.events.onclick.enable&&isInArray("bubble",a.interactivity.events.onclick.mode)){if(a.tmp.bubble_clicking){var t=e.x-a.interactivity.mouse.click_pos_x,i=e.y-a.interactivity.mouse.click_pos_y,s=Math.sqrt(t*t+i*i),v=(new Date().getTime()-a.interactivity.mouse.click_time)/1e3;v>a.interactivity.modes.bubble.duration&&(a.tmp.bubble_duration_end=!0),v>2*a.interactivity.modes.bubble.duration&&(a.tmp.bubble_clicking=!1,a.tmp.bubble_duration_end=!1)}function p(t,i,n,r,c){if(t!=i){if(a.tmp.bubble_duration_end){if(void 0!=n){var o=r-v*(r-t)/a.interactivity.modes.bubble.duration;p=t+(t-o),"size"==c&&(e.radius_bubble=p),"opacity"==c&&(e.opacity_bubble=p)}}else if(s<=a.interactivity.modes.bubble.distance){if(void 0!=n)var l=n;else var l=r;if(l!=t){var p=r-v*(r-t)/a.interactivity.modes.bubble.duration;"size"==c&&(e.radius_bubble=p),"opacity"==c&&(e.opacity_bubble=p)}}else"size"==c&&(e.radius_bubble=void 0),"opacity"==c&&(e.opacity_bubble=void 0)}}a.tmp.bubble_clicking&&(p(a.interactivity.modes.bubble.size,a.particles.size.value,e.radius_bubble,e.radius,"size"),p(a.interactivity.modes.bubble.opacity,a.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity"))}},a.fn.modes.repulseParticle=function(e){if(a.interactivity.events.onhover.enable&&isInArray("repulse",a.interactivity.events.onhover.mode)&&"mousemove"==a.interactivity.status){var t=e.x-a.interactivity.mouse.pos_x,i=e.y-a.interactivity.mouse.pos_y,s=Math.sqrt(t*t+i*i),n={x:t/s,y:i/s},r=a.interactivity.modes.repulse.distance,c=clamp(1/r*(-1*Math.pow(s/r,2)+1)*r*100,0,50),o={x:e.x+n.x*c,y:e.y+n.y*c};"bounce"==a.particles.move.out_mode?(o.x-e.radius>0&&o.x+e.radius<a.canvas.w&&(e.x=o.x),o.y-e.radius>0&&o.y+e.radius<a.canvas.h&&(e.y=o.y)):(e.x=o.x,e.y=o.y)}else if(a.interactivity.events.onclick.enable&&isInArray("repulse",a.interactivity.events.onclick.mode)){if(a.tmp.repulse_finish||(a.tmp.repulse_count++,a.tmp.repulse_count!=a.particles.array.length||(a.tmp.repulse_finish=!0)),a.tmp.repulse_clicking){var r=Math.pow(a.interactivity.modes.repulse.distance/6,3),l=a.interactivity.mouse.click_pos_x-e.x,v=a.interactivity.mouse.click_pos_y-e.y,p=l*l+v*v,d=-r/p*1;p<=r&&function t(){var i=Math.atan2(v,l);if(e.vx=d*Math.cos(i),e.vy=d*Math.sin(i),"bounce"==a.particles.move.out_mode){var s={x:e.x+e.vx,y:e.y+e.vy};s.x+e.radius>a.canvas.w?e.vx=-e.vx:s.x-e.radius<0&&(e.vx=-e.vx),s.y+e.radius>a.canvas.h?e.vy=-e.vy:s.y-e.radius<0&&(e.vy=-e.vy)}}()}else!1==a.tmp.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i)}},a.fn.modes.grabParticle=function(e){if(a.interactivity.events.onhover.enable&&"mousemove"==a.interactivity.status){var t=e.x-a.interactivity.mouse.pos_x,i=e.y-a.interactivity.mouse.pos_y,s=Math.sqrt(t*t+i*i);if(s<=a.interactivity.modes.grab.distance){var n=a.interactivity.modes.grab.line_linked.opacity-s/(1/a.interactivity.modes.grab.line_linked.opacity)/a.interactivity.modes.grab.distance;if(n>0){var r=a.particles.line_linked.color_rgb_line;a.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+n+")",a.canvas.ctx.lineWidth=a.particles.line_linked.width,a.canvas.ctx.beginPath(),a.canvas.ctx.moveTo(e.x,e.y),a.canvas.ctx.lineTo(a.interactivity.mouse.pos_x,a.interactivity.mouse.pos_y),a.canvas.ctx.stroke(),a.canvas.ctx.closePath()}}}},a.fn.vendors.eventsListeners=function(){"window"==a.interactivity.detect_on?a.interactivity.el=window:a.interactivity.el=a.canvas.el,(a.interactivity.events.onhover.enable||a.interactivity.events.onclick.enable)&&(a.interactivity.el.addEventListener("mousemove",function(e){if(a.interactivity.el==window)var t=e.clientX,i=e.clientY;else var t=e.offsetX||e.clientX,i=e.offsetY||e.clientY;a.interactivity.mouse.pos_x=t,a.interactivity.mouse.pos_y=i,a.tmp.retina&&(a.interactivity.mouse.pos_x*=a.canvas.pxratio,a.interactivity.mouse.pos_y*=a.canvas.pxratio),a.interactivity.status="mousemove"}),a.interactivity.el.addEventListener("mouseleave",function(e){a.interactivity.mouse.pos_x=null,a.interactivity.mouse.pos_y=null,a.interactivity.status="mouseleave"})),a.interactivity.events.onclick.enable&&a.interactivity.el.addEventListener("click",function(){if(a.interactivity.mouse.click_pos_x=a.interactivity.mouse.pos_x,a.interactivity.mouse.click_pos_y=a.interactivity.mouse.pos_y,a.interactivity.mouse.click_time=new Date().getTime(),a.interactivity.events.onclick.enable)switch(a.interactivity.events.onclick.mode){case"push":a.particles.move.enable?a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb,a.interactivity.mouse):1==a.interactivity.modes.push.particles_nb?a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb,a.interactivity.mouse):a.interactivity.modes.push.particles_nb>1&&a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb);break;case"remove":a.fn.modes.removeParticles(a.interactivity.modes.remove.particles_nb);break;case"bubble":a.tmp.bubble_clicking=!0;break;case"repulse":a.tmp.repulse_clicking=!0,a.tmp.repulse_count=0,a.tmp.repulse_finish=!1,setTimeout(function(){a.tmp.repulse_clicking=!1},1e3*a.interactivity.modes.repulse.duration)}})},a.fn.vendors.densityAutoParticles=function(){if(a.particles.number.density.enable){var e=a.canvas.el.width*a.canvas.el.height/1e3;a.tmp.retina&&(e/=2*a.canvas.pxratio);var t=e*a.particles.number.value/a.particles.number.density.value_area,i=a.particles.array.length-t;i<0?a.fn.modes.pushParticles(Math.abs(i)):a.fn.modes.removeParticles(i)}},a.fn.vendors.checkOverlap=function(e,t){for(var i=0;i<a.particles.array.length;i++){var s=a.particles.array[i],n=e.x-s.x,r=e.y-s.y;Math.sqrt(n*n+r*r)<=e.radius+s.radius&&(e.x=t?t.x:Math.random()*a.canvas.w,e.y=t?t.y:Math.random()*a.canvas.h,a.fn.vendors.checkOverlap(e))}},a.fn.vendors.createSvgImg=function(e){var t=a.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi,function(t,i,a,s){if(e.color.rgb)var n="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")";else var n="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")";return n}),i=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),s=window.URL||window.webkitURL||window,n=s.createObjectURL(i),r=new Image;r.addEventListener("load",function(){e.img.obj=r,e.img.loaded=!0,s.revokeObjectURL(n),a.tmp.count_svg++}),r.src=n},a.fn.vendors.destroypJS=function(){cancelAnimationFrame(a.fn.drawAnimFrame),i.remove(),pJSDom=null},a.fn.vendors.drawShape=function(e,t,i,a,s,n){var r=s*n,c=s/n,o=Math.PI-Math.PI*(180*(c-2)/c)/180;e.save(),e.beginPath(),e.translate(t,i),e.moveTo(0,0);for(var l=0;l<r;l++)e.lineTo(a,0),e.translate(a,0),e.rotate(o);e.fill(),e.restore()},a.fn.vendors.exportImg=function(){window.open(a.canvas.el.toDataURL("image/png"),"_blank")},a.fn.vendors.loadImg=function(e){if(a.tmp.img_error=void 0,""!=a.particles.shape.image.src){if("svg"==e){var t=new XMLHttpRequest;t.open("GET",a.particles.shape.image.src),t.onreadystatechange=function(e){4==t.readyState&&(200==t.status?(a.tmp.source_svg=e.currentTarget.response,a.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),a.tmp.img_error=!0))},t.send()}else{var i=new Image;i.addEventListener("load",function(){a.tmp.img_obj=i,a.fn.vendors.checkBeforeDraw()}),i.src=a.particles.shape.image.src}}else console.log("Error pJS - No image.src"),a.tmp.img_error=!0},a.fn.vendors.draw=function(){"image"==a.particles.shape.type?"svg"==a.tmp.img_type?a.tmp.count_svg>=a.particles.number.value?(a.fn.particlesDraw(),a.particles.move.enable?a.fn.drawAnimFrame=requestAnimFrame(a.fn.vendors.draw):cancelRequestAnimFrame(a.fn.drawAnimFrame)):a.tmp.img_error||(a.fn.drawAnimFrame=requestAnimFrame(a.fn.vendors.draw)):void 0!=a.tmp.img_obj?(a.fn.particlesDraw(),a.particles.move.enable?a.fn.drawAnimFrame=requestAnimFrame(a.fn.vendors.draw):cancelRequestAnimFrame(a.fn.drawAnimFrame)):a.tmp.img_error||(a.fn.drawAnimFrame=requestAnimFrame(a.fn.vendors.draw)):(a.fn.particlesDraw(),a.particles.move.enable?a.fn.drawAnimFrame=requestAnimFrame(a.fn.vendors.draw):cancelRequestAnimFrame(a.fn.drawAnimFrame))},a.fn.vendors.checkBeforeDraw=function(){"image"==a.particles.shape.type?"svg"==a.tmp.img_type&&void 0==a.tmp.source_svg?a.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(a.tmp.checkAnimFrame),a.tmp.img_error||(a.fn.vendors.init(),a.fn.vendors.draw())):(a.fn.vendors.init(),a.fn.vendors.draw())},a.fn.vendors.init=function(){a.fn.retinaInit(),a.fn.canvasInit(),a.fn.canvasSize(),a.fn.canvasPaint(),a.fn.particlesCreate(),a.fn.vendors.densityAutoParticles(),a.particles.line_linked.color_rgb_line=hexToRgb(a.particles.line_linked.color)},a.fn.vendors.start=function(){isInArray("image",a.particles.shape.type)?(a.tmp.img_type=a.particles.shape.image.src.substr(a.particles.shape.image.src.length-3),a.fn.vendors.loadImg(a.tmp.img_type)):a.fn.vendors.checkBeforeDraw()},a.fn.vendors.eventsListeners(),a.fn.vendors.start()};function hexToRgb(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,i,a){return t+t+i+i+a+a});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function clamp(e,t,i){return Math.min(Math.max(e,t),i)}function isInArray(e,t){return t.indexOf(e)>-1}Object.deepExtend=function(e,t){for(var i in t)t[i]&&t[i].constructor&&t[i].constructor===Object?(e[i]=e[i]||{},arguments.callee(e[i],t[i])):e[i]=t[i];return e},window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},window.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout,window.pJSDom=[],window.particlesJS=function(e,t){"string"!=typeof e&&(t=e,e="particles-js"),e||(e="particles-js");var i=document.getElementById(e),a="particles-js-canvas-el",s=i.getElementsByClassName(a);if(s.length)for(;s.length>0;)i.removeChild(s[0]);var n=document.createElement("canvas");n.className=a,n.style.width="100%",n.style.height="100%",null!=document.getElementById(e).appendChild(n)&&pJSDom.push(new pJS(e,t))},window.particlesJS.load=function(e,t,i){var a=new XMLHttpRequest;a.open("GET",t),a.onreadystatechange=function(t){if(4==a.readyState){if(200==a.status){var s=JSON.parse(t.currentTarget.response);window.particlesJS(e,s),i&&i()}else console.log("Error pJS - XMLHttpRequest status: "+a.status),console.log("Error pJS - File config not found")}},a.send()},particlesJS("particles-js",{particles:{number:{value:380,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})