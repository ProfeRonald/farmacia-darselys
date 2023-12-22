(function($) {
'use strict';
    
       
  // PRELOADER
    $(window).on('load', function() {
        $('#page-loader').fadeOut('slow', function() {
            $(this).remove();
        });
    });

    
  // SCROLL TO TOP
  
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
        $('.scroll-to-top').addClass('reveal');
    } else {
        $('.scroll-to-top').removeClass('reveal');
    }
    
});
 
 
 $(window).on('scroll', function () {
    if ($(window).scrollTop() > 230) {
        $('nav').addClass('fixed-top');
        $('nav').removeClass('rounded-radius');
        $('#logobanner').addClass('d-none d-md-block');
    } else {
        $('nav').removeClass('fixed-top');
        $('nav').addClass('rounded-radius');
        $('#logobanner').removeClass('d-md-block');
        $('#logobanner').addClass('d-none');
    }
    
});
 
 
/* ----------------------------------------------------------- */
    /*  Fixed header
    /* ----------------------------------------------------------- */


    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 70) {
            $('.site-navigation,.trans-navigation').addClass('header-white');
        } else {
            $('.site-navigation,.trans-navigation').removeClass('header-white');
        }

    });

 
    
  // Smooth scrolling using jQuery easing
// jQuery for page scrolling feature - requires jQuery Easing plugin
    
    
    $('a.js-scroll-trigger').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'ease');
        event.preventDefault();
    });


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').on('click', function(event) {
    $('.navbar-collapse').collapse('hide');
  });

   

          /*START GOOGLE MAP*/
          function initialize() {
            var mapOptions = {
              zoom: 15,
              scrollwheel: false,
              center: new google.maps.LatLng(40.7127837, -74.00594130000002)
            };
            var map = new google.maps.Map(document.getElementById('map'),
                mapOptions);
            var marker = new google.maps.Marker({
              position: map.getCenter(),
              icon: 'assets/img/map_pin.png',
              map: map
            });
          }
          //google.maps.event.addDomListener(window, 'load', initialize);	
          /*END GOOGLE MAP*/	

 

})(jQuery); // End of use strict



/*!

pica
https://github.com/nodeca/pica

*/
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).pica=t()}}((function(){return function t(e,r,i){function n(a,o){if(!r[a]){if(!e[a]){var s="function"==typeof require&&require;if(!o&&s)return s(a,!0);if(A)return A(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var h=r[a]={exports:{}};e[a][0].call(h.exports,(function(t){return n(e[a][1][t]||t)}),h,h.exports,t,e,r,i)}return r[a].exports}for(var A="function"==typeof require&&require,a=0;a<i.length;a++)n(i[a]);return n}({1:[function(t,e,r){"use strict";var i=t("inherits"),n=t("multimath"),A=t("./mm_unsharp_mask"),a=t("./mm_resize");function o(t){var e=t||[],r={js:e.indexOf("js")>=0,wasm:e.indexOf("wasm")>=0};n.call(this,r),this.features={js:r.js,wasm:r.wasm&&this.has_wasm()},this.use(A),this.use(a)}i(o,n),o.prototype.resizeAndUnsharp=function(t,e){var r=this.resize(t,e);return t.unsharpAmount&&this.unsharp_mask(r,t.toWidth,t.toHeight,t.unsharpAmount,t.unsharpRadius,t.unsharpThreshold),r},e.exports=o},{"./mm_resize":4,"./mm_unsharp_mask":9,inherits:19,multimath:20}],2:[function(t,e,r){"use strict";function i(t){return t<0?0:t>255?255:t}e.exports={convolveHorizontally:function(t,e,r,n,A,a){var o,s,u,h,c,f,l,g,d,p,m,I=0,w=0;for(d=0;d<n;d++){for(c=0,p=0;p<A;p++){for(f=a[c++],l=a[c++],g=I+4*f|0,o=s=u=h=0;l>0;l--)h=h+(m=a[c++])*t[g+3]|0,u=u+m*t[g+2]|0,s=s+m*t[g+1]|0,o=o+m*t[g]|0,g=g+4|0;e[w+3]=i(h+8192>>14),e[w+2]=i(u+8192>>14),e[w+1]=i(s+8192>>14),e[w]=i(o+8192>>14),w=w+4*n|0}w=4*(d+1)|0,I=(d+1)*r*4|0}},convolveVertically:function(t,e,r,n,A,a){var o,s,u,h,c,f,l,g,d,p,m,I=0,w=0;for(d=0;d<n;d++){for(c=0,p=0;p<A;p++){for(f=a[c++],l=a[c++],g=I+4*f|0,o=s=u=h=0;l>0;l--)h=h+(m=a[c++])*t[g+3]|0,u=u+m*t[g+2]|0,s=s+m*t[g+1]|0,o=o+m*t[g]|0,g=g+4|0;e[w+3]=i(h+8192>>14),e[w+2]=i(u+8192>>14),e[w+1]=i(s+8192>>14),e[w]=i(o+8192>>14),w=w+4*n|0}w=4*(d+1)|0,I=(d+1)*r*4|0}}}},{}],3:[function(t,e,r){"use strict";e.exports="AGFzbQEAAAAADAZkeWxpbmsAAAAAAAEXA2AAAGAGf39/f39/AGAHf39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMEAwABAgYGAX8AQQALB1cFEV9fd2FzbV9jYWxsX2N0b3JzAAAIY29udm9sdmUAAQpjb252b2x2ZUhWAAIMX19kc29faGFuZGxlAwAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAAK7AMDAwABC8YDAQ9/AkAgA0UNACAERQ0AA0AgDCENQQAhE0EAIQcDQCAHQQJqIQYCfyAHQQF0IAVqIgcuAQIiFEUEQEGAwAAhCEGAwAAhCUGAwAAhCkGAwAAhCyAGDAELIBIgBy4BAGohCEEAIQsgFCEHQQAhDiAGIQlBACEPQQAhEANAIAUgCUEBdGouAQAiESAAIAhBAnRqKAIAIgpBGHZsIBBqIRAgCkH/AXEgEWwgC2ohCyAKQRB2Qf8BcSARbCAPaiEPIApBCHZB/wFxIBFsIA5qIQ4gCEEBaiEIIAlBAWohCSAHQQFrIgcNAAsgC0GAQGshCCAOQYBAayEJIA9BgEBrIQogEEGAQGshCyAGIBRqCyEHIAEgDUECdGogCUEOdSIGQf8BIAZB/wFIGyIGQQAgBkEAShtBCHRBgP4DcSAKQQ51IgZB/wEgBkH/AUgbIgZBACAGQQBKG0EQdEGAgPwHcSALQQ51IgZB/wEgBkH/AUgbIgZBACAGQQBKG0EYdHJyIAhBDnUiBkH/ASAGQf8BSBsiBkEAIAZBAEobcjYCACADIA1qIQ0gE0EBaiITIARHDQALIAxBAWoiDCACbCESIAMgDEcNAAsLCx4AQQAgAiADIAQgBSAAEAEgAkEAIAQgBSAGIAEQAQs="},{}],4:[function(t,e,r){"use strict";e.exports={name:"resize",fn:t("./resize"),wasm_fn:t("./resize_wasm"),wasm_src:t("./convolve_wasm_base64")}},{"./convolve_wasm_base64":3,"./resize":5,"./resize_wasm":8}],5:[function(t,e,r){"use strict";var i=t("./resize_filter_gen"),n=t("./convolve").convolveHorizontally,A=t("./convolve").convolveVertically;e.exports=function(t){var e=t.src,r=t.width,a=t.height,o=t.toWidth,s=t.toHeight,u=t.scaleX||t.toWidth/t.width,h=t.scaleY||t.toHeight/t.height,c=t.offsetX||0,f=t.offsetY||0,l=t.dest||new Uint8Array(o*s*4),g=void 0===t.quality?3:t.quality,d=t.alpha||!1,p=i(g,r,o,u,c),m=i(g,a,s,h,f),I=new Uint8Array(o*a*4);return n(e,I,r,a,o,p),A(I,l,a,o,s,m),d||function(t,e,r){for(var i=3,n=e*r*4|0;i<n;)t[i]=255,i=i+4|0}(l,o,s),l}},{"./convolve":2,"./resize_filter_gen":6}],6:[function(t,e,r){"use strict";var i=t("./resize_filter_info");function n(t){return Math.round(16383*t)}e.exports=function(t,e,r,A,a){var o,s,u,h,c,f,l,g,d,p,m,I,w,_,B,b,y,v=i[t].filter,Q=1/A,C=Math.min(1,A),E=i[t].win/C,M=Math.floor(2*(E+1)),x=new Int16Array((M+2)*r),D=0,G=!x.subarray||!x.set;for(o=0;o<r;o++){for(s=(o+.5)*Q+a,u=Math.max(0,Math.floor(s-E)),c=(h=Math.min(e-1,Math.ceil(s+E)))-u+1,f=new Float32Array(c),l=new Int16Array(c),g=0,d=u,p=0;d<=h;d++,p++)g+=m=v((d+.5-s)*C),f[p]=m;for(I=0,p=0;p<f.length;p++)I+=w=f[p]/g,l[p]=n(w);for(l[r>>1]+=n(1-I),_=0;_<l.length&&0===l[_];)_++;if(_<l.length){for(B=l.length-1;B>0&&0===l[B];)B--;if(b=u+_,y=B-_+1,x[D++]=b,x[D++]=y,G)for(p=_;p<=B;p++)x[D++]=l[p];else x.set(l.subarray(_,B+1),D),D+=y}else x[D++]=0,x[D++]=0}return x}},{"./resize_filter_info":7}],7:[function(t,e,r){"use strict";e.exports=[{win:.5,filter:function(t){return t>=-.5&&t<.5?1:0}},{win:1,filter:function(t){if(t<=-1||t>=1)return 0;if(t>-1.1920929e-7&&t<1.1920929e-7)return 1;var e=t*Math.PI;return Math.sin(e)/e*(.54+.46*Math.cos(e/1))}},{win:2,filter:function(t){if(t<=-2||t>=2)return 0;if(t>-1.1920929e-7&&t<1.1920929e-7)return 1;var e=t*Math.PI;return Math.sin(e)/e*Math.sin(e/2)/(e/2)}},{win:3,filter:function(t){if(t<=-3||t>=3)return 0;if(t>-1.1920929e-7&&t<1.1920929e-7)return 1;var e=t*Math.PI;return Math.sin(e)/e*Math.sin(e/3)/(e/3)}}]},{}],8:[function(t,e,r){"use strict";var i=t("./resize_filter_gen");var n=!0;try{n=1===new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0]}catch(t){}function A(t,e,r){if(n)e.set(function(t){return new Uint8Array(t.buffer,0,t.byteLength)}(t),r);else for(var i=r,A=0;A<t.length;A++){var a=t[A];e[i++]=255&a,e[i++]=a>>8&255}}e.exports=function(t){var e=t.src,r=t.width,n=t.height,a=t.toWidth,o=t.toHeight,s=t.scaleX||t.toWidth/t.width,u=t.scaleY||t.toHeight/t.height,h=t.offsetX||0,c=t.offsetY||0,f=t.dest||new Uint8Array(a*o*4),l=void 0===t.quality?3:t.quality,g=t.alpha||!1,d=i(l,r,a,s,h),p=i(l,n,o,u,c),m=this.__align(0+Math.max(e.byteLength,f.byteLength)),I=this.__align(m+n*a*4),w=this.__align(I+d.byteLength),_=w+p.byteLength,B=this.__instance("resize",_),b=new Uint8Array(this.__memory.buffer),y=new Uint32Array(this.__memory.buffer),v=new Uint32Array(e.buffer);return y.set(v),A(d,b,I),A(p,b,w),(B.exports.convolveHV||B.exports._convolveHV)(I,w,m,r,n,a,o),new Uint32Array(f.buffer).set(new Uint32Array(this.__memory.buffer,0,o*a)),g||function(t,e,r){for(var i=3,n=e*r*4|0;i<n;)t[i]=255,i=i+4|0}(f,a,o),f}},{"./resize_filter_gen":6}],9:[function(t,e,r){"use strict";e.exports={name:"unsharp_mask",fn:t("./unsharp_mask"),wasm_fn:t("./unsharp_mask_wasm"),wasm_src:t("./unsharp_mask_wasm_base64")}},{"./unsharp_mask":10,"./unsharp_mask_wasm":11,"./unsharp_mask_wasm_base64":12}],10:[function(t,e,r){"use strict";var i=t("glur/mono16");e.exports=function(t,e,r,n,A,a){var o,s,u,h,c;if(!(0===n||A<.5)){A>2&&(A=2);var f=function(t,e,r){for(var i,n,A,a,o=e*r,s=new Uint16Array(o),u=0;u<o;u++)i=t[4*u],n=t[4*u+1],A=t[4*u+2],a=i>=n&&i>=A?i:n>=A&&n>=i?n:A,s[u]=a<<8;return s}(t,e,r),l=new Uint16Array(f);i(l,e,r,A);for(var g=n/100*4096+.5|0,d=a<<8,p=e*r,m=0;m<p;m++)h=(o=f[m])-l[m],Math.abs(h)>=d&&(u=((s=(s=(s=o+(g*h+2048>>12))>65280?65280:s)<0?0:s)<<12)/(o=0!==o?o:1)|0,t[c=4*m]=t[c]*u+2048>>12,t[c+1]=t[c+1]*u+2048>>12,t[c+2]=t[c+2]*u+2048>>12)}}},{"glur/mono16":18}],11:[function(t,e,r){"use strict";e.exports=function(t,e,r,i,n,A){if(!(0===i||n<.5)){n>2&&(n=2);var a=e*r,o=4*a,s=2*a,u=2*a,h=4*Math.max(e,r),c=o,f=c+s,l=f+u,g=l+u,d=g+h,p=this.__instance("unsharp_mask",o+s+2*u+h+32,{exp:Math.exp}),m=new Uint32Array(t.buffer);new Uint32Array(this.__memory.buffer).set(m);var I=p.exports.hsv_v16||p.exports._hsv_v16;I(0,c,e,r),(I=p.exports.blurMono16||p.exports._blurMono16)(c,f,l,g,d,e,r,n),(I=p.exports.unsharp||p.exports._unsharp)(0,0,c,f,e,r,i,A),m.set(new Uint32Array(this.__memory.buffer,0,a))}}},{}],12:[function(t,e,r){"use strict";e.exports="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"},{}],13:[function(t,e,r){"use strict";function i(t,e){this.create=t,this.available=[],this.acquired={},this.lastId=1,this.timeoutId=0,this.idle=e||2e3}i.prototype.acquire=function(){var t,e=this;return 0!==this.available.length?t=this.available.pop():((t=this.create()).id=this.lastId++,t.release=function(){return e.release(t)}),this.acquired[t.id]=t,t},i.prototype.release=function(t){var e=this;delete this.acquired[t.id],t.lastUsed=Date.now(),this.available.push(t),0===this.timeoutId&&(this.timeoutId=setTimeout((function(){return e.gc()}),100))},i.prototype.gc=function(){var t=this,e=Date.now();this.available=this.available.filter((function(r){return!(e-r.lastUsed>t.idle)||(r.destroy(),!1)})),0!==this.available.length?this.timeoutId=setTimeout((function(){return t.gc()}),100):this.timeoutId=0},e.exports=i},{}],14:[function(t,e,r){"use strict";e.exports=function(t,e,r,i,n,A){var a=r/t,o=i/e,s=(2*A+2+1)/n;if(s>.5)return[[r,i]];var u=Math.ceil(Math.log(Math.min(a,o))/Math.log(s));if(u<=1)return[[r,i]];for(var h=[],c=0;c<u;c++){var f=Math.round(Math.pow(Math.pow(t,u-c-1)*Math.pow(r,c+1),1/u)),l=Math.round(Math.pow(Math.pow(e,u-c-1)*Math.pow(i,c+1),1/u));h.push([f,l])}return h}},{}],15:[function(t,e,r){"use strict";function i(t){var e=Math.round(t);return Math.abs(t-e)<1e-5?e:Math.floor(t)}function n(t){var e=Math.round(t);return Math.abs(t-e)<1e-5?e:Math.ceil(t)}e.exports=function(t){var e,r,A,a,o,s,u=t.toWidth/t.width,h=t.toHeight/t.height,c=i(t.srcTileSize*u)-2*t.destTileBorder,f=i(t.srcTileSize*h)-2*t.destTileBorder;if(c<1||f<1)throw new Error("Internal error in pica: target tile width/height is too small.");var l,g=[];for(a=0;a<t.toHeight;a+=f)for(A=0;A<t.toWidth;A+=c)(e=A-t.destTileBorder)<0&&(e=0),e+(o=A+c+t.destTileBorder-e)>=t.toWidth&&(o=t.toWidth-e),(r=a-t.destTileBorder)<0&&(r=0),r+(s=a+f+t.destTileBorder-r)>=t.toHeight&&(s=t.toHeight-r),l={toX:e,toY:r,toWidth:o,toHeight:s,toInnerX:A,toInnerY:a,toInnerWidth:c,toInnerHeight:f,offsetX:e/u-i(e/u),offsetY:r/h-i(r/h),scaleX:u,scaleY:h,x:i(e/u),y:i(r/h),width:n(o/u),height:n(s/h)},g.push(l);return g}},{}],16:[function(t,e,r){"use strict";function i(t){return Object.prototype.toString.call(t)}e.exports.isCanvas=function(t){var e=i(t);return"[object HTMLCanvasElement]"===e||"[object OffscreenCanvas]"===e||"[object Canvas]"===e},e.exports.isImage=function(t){return"[object HTMLImageElement]"===i(t)},e.exports.isImageBitmap=function(t){return"[object ImageBitmap]"===i(t)},e.exports.limiter=function(t){var e=0,r=[];function i(){e<t&&r.length&&(e++,r.shift()())}return function(t){return new Promise((function(n,A){r.push((function(){t().then((function(t){n(t),e--,i()}),(function(t){A(t),e--,i()}))})),i()}))}},e.exports.cib_quality_name=function(t){switch(t){case 0:return"pixelated";case 1:return"low";case 2:return"medium"}return"high"},e.exports.cib_support=function(t){return Promise.resolve().then((function(){if("undefined"==typeof createImageBitmap)return!1;var e=t(100,100);return createImageBitmap(e,0,0,100,100,{resizeWidth:10,resizeHeight:10,resizeQuality:"high"}).then((function(t){var r=10===t.width;return t.close(),e=null,r}))})).catch((function(){return!1}))},e.exports.worker_offscreen_canvas_support=function(){return new Promise((function(t,e){if("undefined"!=typeof OffscreenCanvas){var r=btoa("(".concat(function(t){"undefined"!=typeof createImageBitmap?Promise.resolve().then((function(){var t=new OffscreenCanvas(10,10);return t.getContext("2d").rect(0,0,1,1),createImageBitmap(t,0,0,1,1)})).then((function(){return t.postMessage(!0)}),(function(){return t.postMessage(!1)})):t.postMessage(!1)}.toString(),")(self);")),i=new Worker("data:text/javascript;base64,".concat(r));i.onmessage=function(e){return t(e.data)},i.onerror=e}else t(!1)})).then((function(t){return t}),(function(){return!1}))},e.exports.can_use_canvas=function(t){var e=!1;try{var r=t(2,1).getContext("2d"),i=r.createImageData(2,1);i.data[0]=12,i.data[1]=23,i.data[2]=34,i.data[3]=255,i.data[4]=45,i.data[5]=56,i.data[6]=67,i.data[7]=255,r.putImageData(i,0,0),i=null,12===(i=r.getImageData(0,0,2,1)).data[0]&&23===i.data[1]&&34===i.data[2]&&255===i.data[3]&&45===i.data[4]&&56===i.data[5]&&67===i.data[6]&&255===i.data[7]&&(e=!0)}catch(t){}return e},e.exports.cib_can_use_region=function(){return new Promise((function(t){if("undefined"!=typeof createImageBitmap){var e=new Image;e.src="data:image/jpeg;base64,/9j/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAYAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAABIAAAAAQAAAEgAAAAB/9sAQwAEAwMEAwMEBAMEBQQEBQYKBwYGBgYNCQoICg8NEBAPDQ8OERMYFBESFxIODxUcFRcZGRsbGxAUHR8dGh8YGhsa/9sAQwEEBQUGBQYMBwcMGhEPERoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoa/8IAEQgAAQACAwERAAIRAQMRAf/EABQAAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAF/P//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8hf//aAAwDAQACAAMAAAAQH//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Qf//Z",e.onload=function(){createImageBitmap(e,0,0,e.width,e.height).then((function(r){r.width===e.width&&r.height===e.height?t(!0):t(!1)}),(function(){return t(!1)}))},e.onerror=function(){return t(!1)}}else t(!1)}))}},{}],17:[function(t,e,r){"use strict";e.exports=function(){var e,r=t("./mathlib");onmessage=function(t){var i=t.data.opts,n=!1;if(!i.src&&i.srcBitmap){var A=new OffscreenCanvas(i.width,i.height),a=A.getContext("2d",{alpha:Boolean(i.alpha)});a.drawImage(i.srcBitmap,0,0),i.src=a.getImageData(0,0,i.width,i.height).data,A.width=A.height=0,A=null,i.srcBitmap.close(),i.srcBitmap=null,n=!0}e||(e=new r(t.data.features));var o=e.resizeAndUnsharp(i);if(n){var s=new ImageData(new Uint8ClampedArray(o),i.toWidth,i.toHeight),u=new OffscreenCanvas(i.toWidth,i.toHeight);u.getContext("2d",{alpha:Boolean(i.alpha)}).putImageData(s,0,0),createImageBitmap(u).then((function(t){postMessage({bitmap:t},[t])}))}else postMessage({data:o},[o.buffer])}}},{"./mathlib":1}],18:[function(t,e,r){var i,n,A,a,o,s;function u(t,e,r,i,n,A){var a,o,s,u,h,c,f,l,g,d,p,m,I,w;for(g=0;g<A;g++){for(f=g,l=0,u=h=(a=t[c=g*n])*i[6],p=i[0],m=i[1],I=i[4],w=i[5],d=0;d<n;d++)s=(o=t[c])*p+a*m+u*I+h*w,h=u,u=s,a=o,r[l]=u,l++,c++;for(l--,f+=A*(n-1),u=h=(a=t[--c])*i[7],o=a,p=i[2],m=i[3],d=n-1;d>=0;d--)s=o*p+a*m+u*I+h*w,h=u,u=s,a=o,o=t[c],e[f]=r[l]+u,c--,l--,f-=A}}e.exports=function(t,e,r,h){if(h){var c=new Uint16Array(t.length),f=new Float32Array(Math.max(e,r)),l=function(t){t<.5&&(t=.5);var e=Math.exp(.527076)/t,r=Math.exp(-e),u=Math.exp(-2*e),h=(1-r)*(1-r)/(1+2*e*r-u);return i=h,n=h*(e-1)*r,A=h*(e+1)*r,a=-h*u,o=2*r,s=-u,new Float32Array([i,n,A,a,o,s,(i+n)/(1-o-s),(A+a)/(1-o-s)])}(h);u(t,c,f,l,e,r),u(c,t,f,l,r,e)}}},{}],19:[function(t,e,r){"function"==typeof Object.create?e.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(t,e){if(e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}}},{}],20:[function(t,e,r){"use strict";var i=t("object-assign"),n=t("./lib/base64decode"),A=t("./lib/wa_detect"),a={js:!0,wasm:!0};function o(t){if(!(this instanceof o))return new o(t);var e=i({},a,t||{});if(this.options=e,this.__cache={},this.__init_promise=null,this.__modules=e.modules||{},this.__memory=null,this.__wasm={},this.__isLE=1===new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0],!this.options.js&&!this.options.wasm)throw new Error('mathlib: at least "js" or "wasm" should be enabled')}o.prototype.has_wasm=A,o.prototype.use=function(t){return this.__modules[t.name]=t,this.options.wasm&&this.has_wasm()&&t.wasm_fn?this[t.name]=t.wasm_fn:this[t.name]=t.fn,this},o.prototype.init=function(){if(this.__init_promise)return this.__init_promise;if(!this.options.js&&this.options.wasm&&!this.has_wasm())return Promise.reject(new Error('mathlib: only "wasm" was enabled, but it\'s not supported'));var t=this;return this.__init_promise=Promise.all(Object.keys(t.__modules).map((function(e){var r=t.__modules[e];return t.options.wasm&&t.has_wasm()&&r.wasm_fn?t.__wasm[e]?null:WebAssembly.compile(t.__base64decode(r.wasm_src)).then((function(r){t.__wasm[e]=r})):null}))).then((function(){return t})),this.__init_promise},o.prototype.__base64decode=n,o.prototype.__reallocate=function(t){if(!this.__memory)return this.__memory=new WebAssembly.Memory({initial:Math.ceil(t/65536)}),this.__memory;var e=this.__memory.buffer.byteLength;return e<t&&this.__memory.grow(Math.ceil((t-e)/65536)),this.__memory},o.prototype.__instance=function(t,e,r){if(e&&this.__reallocate(e),!this.__wasm[t]){var n=this.__modules[t];this.__wasm[t]=new WebAssembly.Module(this.__base64decode(n.wasm_src))}if(!this.__cache[t]){var A={memoryBase:0,memory:this.__memory,tableBase:0,table:new WebAssembly.Table({initial:0,element:"anyfunc"})};this.__cache[t]=new WebAssembly.Instance(this.__wasm[t],{env:i(A,r||{})})}return this.__cache[t]},o.prototype.__align=function(t,e){var r=t%(e=e||8);return t+(r?e-r:0)},e.exports=o},{"./lib/base64decode":21,"./lib/wa_detect":22,"object-assign":23}],21:[function(t,e,r){"use strict";e.exports=function(t){for(var e=t.replace(/[\r\n=]/g,""),r=e.length,i=new Uint8Array(3*r>>2),n=0,A=0,a=0;a<r;a++)a%4==0&&a&&(i[A++]=n>>16&255,i[A++]=n>>8&255,i[A++]=255&n),n=n<<6|"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e.charAt(a));var o=r%4*6;return 0===o?(i[A++]=n>>16&255,i[A++]=n>>8&255,i[A++]=255&n):18===o?(i[A++]=n>>10&255,i[A++]=n>>2&255):12===o&&(i[A++]=n>>4&255),i}},{}],22:[function(t,e,r){"use strict";var i;e.exports=function(){if(void 0!==i)return i;if(i=!1,"undefined"==typeof WebAssembly)return i;try{var t=new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]),e=new WebAssembly.Module(t);return 0!==new WebAssembly.Instance(e,{}).exports.test(4)&&(i=!0),i}catch(t){}return i}},{}],23:[function(t,e,r){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
"use strict";var i=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;function a(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(t){i[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var r,o,s=a(t),u=1;u<arguments.length;u++){for(var h in r=Object(arguments[u]))n.call(r,h)&&(s[h]=r[h]);if(i){o=i(r);for(var c=0;c<o.length;c++)A.call(r,o[c])&&(s[o[c]]=r[o[c]])}}return s}},{}],24:[function(t,e,r){var i=arguments[3],n=arguments[4],A=arguments[5],a=JSON.stringify;e.exports=function(t,e){for(var r,o=Object.keys(A),s=0,u=o.length;s<u;s++){var h=o[s],c=A[h].exports;if(c===t||c&&c.default===t){r=h;break}}if(!r){r=Math.floor(Math.pow(16,8)*Math.random()).toString(16);var f={};for(s=0,u=o.length;s<u;s++){f[h=o[s]]=h}n[r]=["function(require,module,exports){"+t+"(self); }",f]}var l=Math.floor(Math.pow(16,8)*Math.random()).toString(16),g={};g[r]=r,n[l]=["function(require,module,exports){var f = require("+a(r)+");(f.default ? f.default : f)(self);}",g];var d={};!function t(e){for(var r in d[e]=!0,n[e][1]){var i=n[e][1][r];d[i]||t(i)}}(l);var p="("+i+")({"+Object.keys(d).map((function(t){return a(t)+":["+n[t][0]+","+a(n[t][1])+"]"})).join(",")+"},{},["+a(l)+"])",m=window.URL||window.webkitURL||window.mozURL||window.msURL,I=new Blob([p],{type:"text/javascript"});if(e&&e.bare)return I;var w=m.createObjectURL(I),_=new Worker(w);return _.objectURL=w,_}},{}],"/index.js":[function(t,e,r){"use strict";function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var i,n,A=[],a=!0,o=!1;try{for(r=r.call(t);!(a=(i=r.next()).done)&&(A.push(i.value),!e||A.length!==e);a=!0);}catch(t){o=!0,n=t}finally{try{a||null==r.return||r.return()}finally{if(o)throw n}}return A}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}var A=t("object-assign"),a=t("webworkify"),o=t("./lib/mathlib"),s=t("./lib/pool"),u=t("./lib/utils"),h=t("./lib/worker"),c=t("./lib/stepper"),f=t("./lib/tiler"),l={},g=!1;try{"undefined"!=typeof navigator&&navigator.userAgent&&(g=navigator.userAgent.indexOf("Safari")>=0)}catch(t){}var d=1;"undefined"!=typeof navigator&&(d=Math.min(navigator.hardwareConcurrency||1,4));var p={tile:1024,concurrency:d,features:["js","wasm","ww"],idle:2e3,createCanvas:function(t,e){var r=document.createElement("canvas");return r.width=t,r.height=e,r}},m={quality:3,alpha:!1,unsharpAmount:0,unsharpRadius:0,unsharpThreshold:0},I=!1,w=!1,_=!1,B=!1,b=!1;function y(){return{value:a(h),destroy:function(){if(this.value.terminate(),"undefined"!=typeof window){var t=window.URL||window.webkitURL||window.mozURL||window.msURL;t&&t.revokeObjectURL&&this.value.objectURL&&t.revokeObjectURL(this.value.objectURL)}}}}function v(t){if(!(this instanceof v))return new v(t);this.options=A({},p,t||{});var e="lk_".concat(this.options.concurrency);this.__limit=l[e]||u.limiter(this.options.concurrency),l[e]||(l[e]=this.__limit),this.features={js:!1,wasm:!1,cib:!1,ww:!1},this.__workersPool=null,this.__requested_features=[],this.__mathlib=null}v.prototype.init=function(){var e=this;if(this.__initPromise)return this.__initPromise;if("undefined"!=typeof ImageData&&"undefined"!=typeof Uint8ClampedArray)try{new ImageData(new Uint8ClampedArray(400),10,10),I=!0}catch(t){}"undefined"!=typeof ImageBitmap&&(ImageBitmap.prototype&&ImageBitmap.prototype.close?w=!0:this.debug("ImageBitmap does not support .close(), disabled"));var r=this.options.features.slice();if(r.indexOf("all")>=0&&(r=["cib","wasm","js","ww"]),this.__requested_features=r,this.__mathlib=new o(r),r.indexOf("ww")>=0&&"undefined"!=typeof window&&"Worker"in window)try{t("webworkify")((function(){})).terminate(),this.features.ww=!0;var i="wp_".concat(JSON.stringify(this.options));l[i]?this.__workersPool=l[i]:(this.__workersPool=new s(y,this.options.idle),l[i]=this.__workersPool)}catch(t){}var n,a,h=this.__mathlib.init().then((function(t){A(e.features,t.features)}));n=w?u.cib_support(this.options.createCanvas).then((function(t){e.features.cib&&r.indexOf("cib")<0?e.debug("createImageBitmap() resize supported, but disabled by config"):r.indexOf("cib")>=0&&(e.features.cib=t)})):Promise.resolve(!1),_=u.can_use_canvas(this.options.createCanvas),a=(a=w&&I&&-1!==r.indexOf("ww")?u.worker_offscreen_canvas_support():Promise.resolve(!1)).then((function(t){B=t}));var c=u.cib_can_use_region().then((function(t){b=t}));return this.__initPromise=Promise.all([h,n,a,c]).then((function(){return e})),this.__initPromise},v.prototype.__invokeResize=function(t,e){var r=this;return e.__mathCache=e.__mathCache||{},Promise.resolve().then((function(){return r.features.ww?new Promise((function(i,n){var A=r.__workersPool.acquire();e.cancelToken&&e.cancelToken.catch((function(t){return n(t)})),A.value.onmessage=function(t){A.release(),t.data.err?n(t.data.err):i(t.data)};var a=[];t.src&&a.push(t.src.buffer),t.srcBitmap&&a.push(t.srcBitmap),A.value.postMessage({opts:t,features:r.__requested_features,preload:{wasm_nodule:r.__mathlib.__}},a)})):{data:r.__mathlib.resizeAndUnsharp(t,e.__mathCache)}}))},v.prototype.__extractTileData=function(t,e,r,i,n){if(this.features.ww&&B&&(u.isCanvas(e)||b))return this.debug("Create tile for OffscreenCanvas"),createImageBitmap(i.srcImageBitmap||e,t.x,t.y,t.width,t.height).then((function(t){return n.srcBitmap=t,n}));if(u.isCanvas(e))return i.srcCtx||(i.srcCtx=e.getContext("2d",{alpha:Boolean(r.alpha)})),this.debug("Get tile pixel data"),n.src=i.srcCtx.getImageData(t.x,t.y,t.width,t.height).data,n;this.debug("Draw tile imageBitmap/image to temporary canvas");var A=this.options.createCanvas(t.width,t.height),a=A.getContext("2d",{alpha:Boolean(r.alpha)});return a.globalCompositeOperation="copy",a.drawImage(i.srcImageBitmap||e,t.x,t.y,t.width,t.height,0,0,t.width,t.height),this.debug("Get tile pixel data"),n.src=a.getImageData(0,0,t.width,t.height).data,A.width=A.height=0,n},v.prototype.__landTileData=function(t,e,r){var i;if(this.debug("Convert raw rgba tile result to ImageData"),e.bitmap)return r.toCtx.drawImage(e.bitmap,t.toX,t.toY),null;if(I)i=new ImageData(new Uint8ClampedArray(e.data),t.toWidth,t.toHeight);else if((i=r.toCtx.createImageData(t.toWidth,t.toHeight)).data.set)i.data.set(e.data);else for(var n=i.data.length-1;n>=0;n--)i.data[n]=e.data[n];return this.debug("Draw tile"),g?r.toCtx.putImageData(i,t.toX,t.toY,t.toInnerX-t.toX,t.toInnerY-t.toY,t.toInnerWidth+1e-5,t.toInnerHeight+1e-5):r.toCtx.putImageData(i,t.toX,t.toY,t.toInnerX-t.toX,t.toInnerY-t.toY,t.toInnerWidth,t.toInnerHeight),null},v.prototype.__tileAndResize=function(t,e,r){var i=this,n={srcCtx:null,srcImageBitmap:null,isImageBitmapReused:!1,toCtx:null};return Promise.resolve().then((function(){if(n.toCtx=e.getContext("2d",{alpha:Boolean(r.alpha)}),u.isCanvas(t))return null;if(u.isImageBitmap(t))return n.srcImageBitmap=t,n.isImageBitmapReused=!0,null;if(u.isImage(t))return w?(i.debug("Decode image via createImageBitmap"),createImageBitmap(t).then((function(t){n.srcImageBitmap=t})).catch((function(t){return null}))):null;throw new Error('Pica: ".from" should be Image, Canvas or ImageBitmap')})).then((function(){if(r.canceled)return r.cancelToken;i.debug("Calculate tiles");var A=f({width:r.width,height:r.height,srcTileSize:i.options.tile,toWidth:r.toWidth,toHeight:r.toHeight,destTileBorder:r.__destTileBorder}).map((function(e){return function(e){return i.__limit((function(){if(r.canceled)return r.cancelToken;var A={width:e.width,height:e.height,toWidth:e.toWidth,toHeight:e.toHeight,scaleX:e.scaleX,scaleY:e.scaleY,offsetX:e.offsetX,offsetY:e.offsetY,quality:r.quality,alpha:r.alpha,unsharpAmount:r.unsharpAmount,unsharpRadius:r.unsharpRadius,unsharpThreshold:r.unsharpThreshold};return i.debug("Invoke resize math"),Promise.resolve(A).then((function(A){return i.__extractTileData(e,t,r,n,A)})).then((function(t){return i.debug("Invoke resize math"),i.__invokeResize(t,r)})).then((function(t){return r.canceled?r.cancelToken:(n.srcImageData=null,i.__landTileData(e,t,n))}))}))}(e)}));function a(t){t.srcImageBitmap&&(t.isImageBitmapReused||t.srcImageBitmap.close(),t.srcImageBitmap=null)}return i.debug("Process tiles"),Promise.all(A).then((function(){return i.debug("Finished!"),a(n),e}),(function(t){throw a(n),t}))}))},v.prototype.__processStages=function(t,e,r,n){var a=this;if(n.canceled)return n.cancelToken;var o,s=i(t.shift(),2),u=s[0],h=s[1],c=0===t.length;return n=A({},n,{toWidth:u,toHeight:h,quality:c?n.quality:Math.min(1,n.quality)}),c||(o=this.options.createCanvas(u,h)),this.__tileAndResize(e,c?r:o,n).then((function(){return c?r:(n.width=u,n.height=h,a.__processStages(t,o,r,n))})).then((function(t){return o&&(o.width=o.height=0),t}))},v.prototype.__resizeViaCreateImageBitmap=function(t,e,r){var i=this,n=e.getContext("2d",{alpha:Boolean(r.alpha)});return this.debug("Resize via createImageBitmap()"),createImageBitmap(t,{resizeWidth:r.toWidth,resizeHeight:r.toHeight,resizeQuality:u.cib_quality_name(r.quality)}).then((function(t){if(r.canceled)return r.cancelToken;if(!r.unsharpAmount)return n.drawImage(t,0,0),t.close(),n=null,i.debug("Finished!"),e;i.debug("Unsharp result");var A=i.options.createCanvas(r.toWidth,r.toHeight),a=A.getContext("2d",{alpha:Boolean(r.alpha)});a.drawImage(t,0,0),t.close();var o=a.getImageData(0,0,r.toWidth,r.toHeight);return i.__mathlib.unsharp_mask(o.data,r.toWidth,r.toHeight,r.unsharpAmount,r.unsharpRadius,r.unsharpThreshold),n.putImageData(o,0,0),A.width=A.height=0,o=a=A=n=null,i.debug("Finished!"),e}))},v.prototype.resize=function(t,e,r){var i=this;this.debug("Start resize...");var n=A({},m);if(isNaN(r)?r&&(n=A(n,r)):n=A(n,{quality:r}),n.toWidth=e.width,n.toHeight=e.height,n.width=t.naturalWidth||t.width,n.height=t.naturalHeight||t.height,0===e.width||0===e.height)return Promise.reject(new Error("Invalid output size: ".concat(e.width,"x").concat(e.height)));n.unsharpRadius>2&&(n.unsharpRadius=2),n.canceled=!1,n.cancelToken&&(n.cancelToken=n.cancelToken.then((function(t){throw n.canceled=!0,t}),(function(t){throw n.canceled=!0,t})));return n.__destTileBorder=Math.ceil(Math.max(3,2.5*n.unsharpRadius|0)),this.init().then((function(){if(n.canceled)return n.cancelToken;if(i.features.cib)return i.__resizeViaCreateImageBitmap(t,e,n);if(!_){var r=new Error("Pica: cannot use getImageData on canvas, make sure fingerprinting protection isn't enabled");throw r.code="ERR_GET_IMAGE_DATA",r}var A=c(n.width,n.height,n.toWidth,n.toHeight,i.options.tile,n.__destTileBorder);return i.__processStages(A,t,e,n)}))},v.prototype.resizeBuffer=function(t){var e=this,r=A({},m,t);return this.init().then((function(){return e.__mathlib.resizeAndUnsharp(r)}))},v.prototype.toBlob=function(t,e,r){return e=e||"image/png",new Promise((function(i){if(t.toBlob)t.toBlob((function(t){return i(t)}),e,r);else if(t.convertToBlob)i(t.convertToBlob({type:e,quality:r}));else{for(var n=atob(t.toDataURL(e,r).split(",")[1]),A=n.length,a=new Uint8Array(A),o=0;o<A;o++)a[o]=n.charCodeAt(o);i(new Blob([a],{type:e}))}}))},v.prototype.debug=function(){},e.exports=v},{"./lib/mathlib":1,"./lib/pool":13,"./lib/stepper":14,"./lib/tiler":15,"./lib/utils":16,"./lib/worker":17,"object-assign":23,webworkify:24}]},{},[])("/index.js")}));


    
		$(document).ready(function() {
			
			$('.edicion').hide();
			
			const firebaseConfig = {
		    apiKey: "AIzaSyBpvBsiV9Qgpzp-YojRlwG3XhJalvLtTUc",
		    authDomain: "farmaciadarselys.com",
		    projectId: "farmacia-darselys",
		    storageBucket: "farmacia-darselys.appspot.com",
		    messagingSenderId: "183991736345",
		    appId: "1:183991736345:web:6e13855566acd0ce6b3288",
		    measurementId: "G-WSND7B6MV8"
		  };

  	firebase.initializeApp(firebaseConfig);
  	
  	firebase.database().ref('darselys1/datos').on('value', function(informaciones) {
   	
   	informaciones.forEach(function (inf) {

			if(inf.key == 'nostexto'){
				var nostexto = inf.val();
				nostexto = nostexto.split('\n');
				var nostextomini = nostexto[0];
				nostexto = nostexto.join('</p><p class="mb-3" style="text-indent: 2em;">');
				nostexto = '<p class="mb-3" style="text-indent: 2em;">' + nostexto + '</p>';
				$('#'+inf.key).html(nostexto);
				$('#'+inf.key+'mini').html(nostextomini);
			}else{
				$('#'+inf.key).html(inf.val());	
			}		
		
		});
		
		});

		var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
			
		  	firebase.database().ref('darselys1/novedades').on('value', function(noticias) {
   	
   	var nots = '';
   	var pnots = '';
   	var carr = new Array();
   	var notis = [];
   	var i = 0;
   	var k = 1;
   	var h = 0;
   	
   	firebase.auth().onAuthStateChanged( userInfo => {
   	
	   	if(userInfo){
	   		if((userInfo.email == 'educador@proferonald.com' || userInfo.email == 'farmaciadarselys@gmail.com') && userInfo.email != ''){
	   			$('.edicion').show();
	   		}
	   	}
	
		});
   	
   	noticias.forEach(function (not) {
   	var notkey = not.key;
   	var titulonot = not.val().titulonot;
   	var valcontnot = not.val().contnot;
   	var lcontnot = valcontnot.length;
   	var imgnot = not.val().imgnot;
   	
   	if(imgnot == '' || imgnot == 'undefined' || imgnot == undefined){
   		imgnot = 'noticia.jpg';
   	}
   	
   	if(lcontnot > 115){
   		contnot = '<p>'+valcontnot.substring(0, 115)+'...<a href="#" idnov="'+notkey+'" data-toggle="modal" data-target="#novedad" class="read-more mt-0 d-block text-right">Leer m&aacute;s</a></p>';
   	}else{
   		contnot = '<p>'+valcontnot+'</p>';
   	}
   	
   	var fecha = not.val().fechanot
		var date = new Date(fecha);
		
		var fechanot = date.getDate() + ' ' + meses[date.getMonth()];
   	   		
   	notis[h] = {'notkey':notkey, 'titulonot':titulonot, 'valcontnot':valcontnot, 'imgnot':imgnot, 'contnot':contnot, 'fechanot':fechanot}
   	h++;
   	})
   	
   	notis.reverse();
   	
   	notis.forEach(function (noti) {
   	
   	if(noti['imgnot'].substring(0, 26) == 'https://youtube.com/embed/'){
			var imgvidnot1 = '<iframe width="245" height="auto" src="'+noti['imgnot']+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="img-fluid rounded float-left m-2" style="max-width: 50%" allowfullscreen></iframe>';
			var imgvidnot2 = '<iframe width="245" height="auto" src="'+noti['imgnot']+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="img-fluid" allowfullscreen></iframe>';
			var imgvidnot3 = '<iframe width="245" height="auto" src="'+noti['imgnot']+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="img-fluid blog-img" allowfullscreen></iframe>';
			var imgvidnot4 = '<iframe width="100%" height="auto" src="'+noti['imgnot']+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="img-fluid border" allowfullscreen></iframe>';
		}else{
			var imgvidnot1 = '<img src="'+noti['imgnot']+'" alt="" class="img-fluid rounded float-left m-2" style="max-width: 50%">';
			var imgvidnot2 = '<img src="'+noti['imgnot']+'" alt="" class="img-fluid">';
			var imgvidnot3 = '<img style="filter: blur(2px);" src="'+noti['imgnot']+'" alt="" class="img-fluid blog-img">';
			var imgvidnot4 = '<img src="'+noti['imgnot']+'" alt="" class="img-fluid border">';
		}
   
   
			if(i > 1){

		nots += '<div style="display:none" id="cont'+noti['notkey']+'" fecha="'+noti['fechanot']+'" titulo="'+noti['titulonot']+'">'+imgvidnot1+''+noti['valcontnot']+'</div><div class="col-lg-4 col-md-6 mb-3"><div class="blog-box"><div class="blog-img-box">'+imgvidnot3+'</div><div class="single-blog"><div class="blog-content"><h6>'+noti['fechanot']+' <span style="display:none" class="edicion elnot" idnot="'+noti['notkey']+'"><i class="fas fa-trash"></i></span></h6><a href="#"><h3 class="card-title" style="white-space: normal;word-wrap: break-word;">'+noti['titulonot']+'</h3></a><span style="white-space: normal;word-wrap: break-word;">'+noti['contnot']+'</span></div></div></div></div>';
		
		carr[k] = '<div style="display:none" id="cont'+noti['notkey']+'" fecha="'+noti['fechanot']+'" titulo="'+noti['titulonot']+'">'+imgvidnot1+''+noti['valcontnot']+'</div><div class="col-lg-10 col-md-10 mb-5"><h6>'+noti['fechanot']+'</h6><a href="#"><h3 class="card-title" style="white-space: normal;word-wrap: break-word;">'+noti['titulonot']+'</h3></a><div class="blog-img-box">'+imgvidnot4+'<div class="blog-content"><span style="white-space: normal;word-wrap: break-word;">'+noti['contnot']+'</span></div></div></div>';
		
		k++;
				
			}else{
		pnots += '<div style="display:none" id="cont'+noti['notkey']+'" fecha="'+noti['fechanot']+'" titulo="'+noti['titulonot']+'">'+imgvidnot1+''+noti['valcontnot']+'</div><div class="col-lg-6 col-md-6 mb-3"><div class="blog-box"><div class="blog-img-box">'+imgvidnot2+'</div><div class="single-blog"><div class="blog-content"><h6>'+noti['fechanot']+' <span style="display:none" class="edicion elnot" idnot="'+noti['notkey']+'"><i class="fas fa-trash"></i></span></h6><a href="#"><h3 class="card-title" style="white-space: normal;word-wrap: break-word;">'+noti['titulonot']+'</h3></a><span style="white-space: normal;word-wrap: break-word;">'+noti['contnot']+'</span></div></div></div></div>';			
			}
		
		i++;
		});
		
		
		$('.carousel-item').remove();
		
		$('<div class="carousel-item active"><img id="carract" src="foto-frente.jpeg" alt="banner-img" class="img-fluid rounded"></div>').appendTo('.carousel-inner');
		$('<li data-target="#carousel" data-slide-to="0"></li>').appendTo('.carousel-indicators');
		
    for(let j = 1; j < k; j++) {
        $('<div class="carousel-item">'+carr[j]+'</div>').appendTo('.carousel-inner');
        $('<li data-target="#carousel" data-slide-to="'+j+'"></li>').appendTo('.carousel-indicators');

    }

    

		
		if(pnots != ''){
			$('#pnovedades').html(pnots);
			$('.vernovedades').show('slow');
		}
		
		if(nots != ''){
			$('#novedades').html(nots);
			$('.vernoticias').show('slow');
		}
		
		
		});
		
		firebase.database().ref('darselys1/srcs').on('value', function(src) {
   	
   	src.forEach(function (sr) {

		$('#'+sr.key).attr('src', sr.val());	
				
		});
		
		});
		
				$(document).on('mouseenter', '.blog-img', function () {
			$(this).css({'filter': 'blur(0px)'});
		});	
		$(document).on('mouseleave', '.blog-img', function () {
			$(this).css({'filter': 'blur(2px)'});
		});	
		
		$(document).on('click', '.read-more', function () {
				var idnov = $(this).attr('idnov');
				var hcont = $('#cont'+idnov);
				$('#novedadFecha').html(hcont.attr('fecha'));
				$('#novedadTitulo').html(hcont.attr('titulo'));
				
				var hconthtml = hcont.html().split('\n');
				hconthtml = hconthtml.join('</p><p style="text-indent: 2em;">');
				hconthtml = '<p style="text-indent: 2em;">' + hconthtml + '</p>';
				$('#novedadCont').html(hconthtml);
		});
  	
  	$(document).on('click', '#entrar', function () {

			Sesion();

		});


function Sesion(){
				
	const provider = new firebase.auth.GoogleAuthProvider();
 	firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function() {
	return firebase.auth().signInWithPopup( provider ).then(()=>{
	})
	.catch( err => {
     	setTimeout(function(){
     		$('#sesion').html('<span class="font-weight-bold text-danger p-2 rounded">&iexcl;Ha ocurrido un error!</span>');
     	},500);
     	setTimeout(function(){
     		$('#sesion').text('Intentando de nuevo...');
     	},5000);
     	setTimeout(function(){
     		Sesion();
     	},7000);
    });
  });

}
});

setTimeout(function(){

firebase.auth().onAuthStateChanged( userInfo => {
	
	if(userInfo){
	
	$('.edicion').hide();
  
  $('#entrar').parent().after('<li class="nav-item" id="salir"><a href="#a" class="nav-link title-farmacia" title="Cerrar Sesi&oacute;n" data-placement="top" tabindex="-1" data-content="Click para cerrar sesi&oacute;n" data-original-title="Cerrar Sesi&oacute;n"><i class="fas fa-sign-out-alt"></i> Salir</a></li>');
  
  $('#entrar').parent().html('<a id="userinfo" data-placement="top" tabindex="-1" href="#a" class="nav-link title-farmacia" title="'+userInfo.displayName+'" data-content="Gracias por visitarnos" data-original-title="'+userInfo.displayName+'"><img class="rounded-circle" style="width:40px" src="'+userInfo.photoURL+'" alt="'+userInfo.displayName+'"></a>');
  
  $(document).on('click', '#salir', function () {
  	firebase.auth().signOut().then(() => {});
  	$('#salir').remove();
  	$('#userinfo').parent().html('<a href="#a" id="entrar" data-placement="top" tabindex="-1" class="nav-link title-farmacia" title="Entrar" data-content="Click para iniciar sesi&oacute;n con su cuenta de Google" data-original-title="Entrar"><i class="ti-key"></i> Entrar</a>');
  	$('.edicion').hide();
  });
  		
	if((userInfo.email == 'educador@proferonald.com' || userInfo.email == 'farmaciadarselys@gmail.com') && userInfo.email != ''){
		
	$('.edicion').show();
	
	$(document).on('click', '.ehtml', function () {
		
		$('#galeria').removeAttr('src');
		
		var dataid = $(this).attr('data-id');
		
		$('#data-info').attr('data-id', dataid);
		
		firebase.database().ref('darselys1/datos/' + dataid).on('value', function(dat) {
			if(dat.val() != null){
	$('#data-info').val(dat.val());
			}
		});
			
		

		});
		
		$(document).on('click', '.esrc', function () {
		
		$('#foto_mini').attr('w', $(this).attr('w'));
		$('#foto_mini').attr('h', $(this).attr('h'));
		
		var dataid = $(this).attr('data-id');
		
		$('#galeria').attr('src', '1');
		$('#galeria').attr('idfoto', dataid);

		});
		
		$(document).on('click', '.elnot', function () { 
  
  if(!confirm("\u00BFSeguro desea eliminar esta noticia?")) {
    return false;
  }
  var idnot = $(this).attr('idnot');
  firebase.database().ref('darselys1/novedades/' + idnot).remove();
  
  });
		
		$(document).on('click', '#nuevanot', function () {

		var titulonot = $('#titulonot').val();
		var contnot = $('#contnot').val();
		
		if(titulonot != '' && contnot != ''){

		var vidnot = $('#vidnot').val().replace('youtu.be/','youtube.com/embed/');
		var vidnot = vidnot.replace('youtube.com/watch?v=','youtube.com/embed/');
		var vidnot = vidnot.replace('https://www.youtube.com','https://youtube.com');

		if(vidnot.substring(0, 26) == 'https://youtube.com/embed/' && $('#uvideo').prop("checked") == true){
			var imgnot = vidnot;
		}else{
			var imgnot = $('#imgnot').attr('src');
		}	
				
		firebase.database().ref('darselys1/novedades').push({
	  	fechanot: firebase.database.ServerValue.TIMESTAMP,
	  	titulonot: titulonot,
	  	imgnot: imgnot,
	  	contnot: contnot
	  });
	  
	  $('#titulonot').val('');
	  $('#imgnot').attr('src', 'noticia.jpg');
	  $('#vidnot').val('');
	  $('#vidiframe').text('');
	  $('#contnot').val('');
	  
		}

		});
		
		$(document).on('click', '#data-info', function (e) {
    e.stopPropagation();
		});

		$(document).on('blur', '#data-info', function () {
		
		var dataid = $(this).attr('data-id');
		var val = $(this).val();
		
			if(val != ''){
		firebase.database().ref('darselys1/datos/' + dataid).set(val);
			}
		
		});
	
	$('#formnov').html('<h2 class="section-title">Agregar noticia</h2><div class="form-group imgvid"><label for="imgnot">Foto de la noticia</label><br /><img src="noticia.jpg" style="width:145px;height:97px" id="imgnot" class="rounded" /></div><div class="form-group vidimg" style="display:none"><label for="vidnot">Video de la noticia</label><br /><div id="vidiframe"></div><div class="form-group"><label for="vidnot">Url del video</label><input type="text" class="form-control" id="vidnot" /></div></div><div> <input type="checkbox" value="1" style="width:25px;height:25px" id="uvideo" /> Usar video</div><div class="form-group"><label for="titulonot">T&iacute;tulo</label><input type="text" class="form-control" id="titulonot"></div><div class="form-group imgvid"><label for="fotonot">Cambiar foto </label><button type="button" class="btn btn-light btn-sm border ml-3 galeria" data-toggle="modal" data-target="#galeria" id="fotonot">Galer&iacute;a</button></div><div class="form-group"><label for="contnot">Contenido</label><textarea class="form-control h-100" id="contnot" rows="5"></textarea></div><div class="text-right"><button type="button" class="btn btn-primary" id="nuevanot">Publicar</button></div>');
	
	$(document).on('keyup click', '#vidnot', function () {
				 
	var uvideo = $(this).val();
	var avid = $('#vidiframe').attr('vid');
	
	if(uvideo != ''){
		if(uvideo != avid){
	$('#vidiframe').html('Espere...');		
	$('#vidiframe').attr('vid', uvideo);
	var uvideo = uvideo.replace('youtu.be/','youtube.com/embed/');
	var uvideo = uvideo.replace('youtube.com/watch?v=','youtube.com/embed/');
		if(uvideo.substring(0, 30) == 'https://www.youtube.com/embed/' || uvideo.substring(0, 26) == 'https://youtube.com/embed/'){
	$('#vidiframe').html('<iframe width="245" height="auto" src="'+uvideo+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
		}else{
	$('#vidiframe').html('<span class="text-danger">Url no v&aacute;lida</div>');
		}
		
		}
	}else{
	$('#vidiframe').text('');
	$('#vidiframe').attr('vid', '');
	}
	});	
	
	$(document).on('click', '#uvideo', function () {
	if($(this).prop("checked") == true){
	$('.imgvid').hide('slow');
	$('.vidimg').show('slow');
	}else{
	$('#vidiframe').text('');
	$('#vidiframe').attr('vid', '');
	$('.vidimg').hide('slow');
	$('.imgvid').show('slow');
	}
	});	
	
	$(document).on('click', '.infoto', function () {
	
		var src = $(this).attr('src');
		
		var idfoto = $('#galeria').attr('idfoto');
		
		var gsrc = $('#galeria').attr('src');
		
			if(gsrc == 1){
		firebase.database().ref('darselys1/srcs/' + idfoto).set(src);
			}
		
		$('#'+idfoto).attr('src', src);
	
});

$(document).on('click', '#fotonot', function () {
	
		$('#foto_mini').attr('w', 290);
		$('#foto_mini').attr('h', 193);
		$('#galeria').attr('idfoto', 'imgnot');
	
	});
		
	$(document).on('click', '.galeria', function () {
	  
	  $('#fotos-galeria').text('');
	  
    var storageRef = firebase.storage().ref("fotos");
    storageRef.listAll().then(function(result) {
    var urls = '';
      result.items.forEach(function(imageRef) {
      imageRef.getDownloadURL().then(function(url) {
      urls += '<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2 title-farmacia" data-dismiss="modal" data-content="Click para insertar '+imageRef.name+'"><img class="img rounded infoto" alt="Foto" src="'+url+'" /></div>';
      $('#fotos-galeria').html(urls);
    	})
      });

    })
	});
	
	
	
	$("#foto_cargar").change(function () {
  
  $('#barrafoto').text('');
  $('#subiendofoto').text('');
  $('#barrafoto').show();
  $('#subiendofoto').show();
  
	var file = this.files[0];
	var filess = this.files;
	 	
				(function() {
				if(window.performance && window.performance.now) return;
				if(!window.performance) window.performance = {};
				var methods = ['webkitNow', 'msNow', 'mozNow'];
				for(var i = 0; i < methods.length; i++) {
				  if(window.performance[methods[i]]) {
				    window.performance.now = window.performance[methods[i]];
				    return;
				  }
				}
				if(Date.now) {
				  window.performance.now = function() { return Date.now(); };
				  return;
				}
				window.performance.now = function() { return +(new Date()); };
				})();
				
				window.pica.prototype.debug = console.log.bind(console);
				
				var resizer;
				
				var resizer_mode = {
				  js:   true,
				  wasm: true,
				  cib:  true,
				  ww:   true
				};
				
				
				function create_resizer() {
				  var opts = [];
				
				  Object.keys(resizer_mode).forEach(function (k) {
				    if (resizer_mode[k]) opts.push(k);
				  });
				
				  resizer = window.pica({ features: opts });
				}
				
				function canvaFoto() {
				  var src, ctx;
				
				  src = $('#foto_canvas')[0];
				  src.width = img.width;
				  src.height = img.height;

				  ctx = src.getContext("2d");
				  ctx.drawImage(img, 0, 0);
				}
				
				var RedimensionarFoto = _.debounce(function () {
				  var dst, ctx, width;
					
					var w = $('#foto_mini').attr('w');
					var h = $('#foto_mini').attr('h');
				  dst = $('#foto_canvas_mini')[0];
				  dst.width = w;
				  dst.height = h;
				
				  var offScreenCanvas = document.createElement('canvas')
				  offScreenCanvas.width  = dst.width;
				  offScreenCanvas.height = dst.height;
				
				  resizer.resize($('#foto_canvas')[0], offScreenCanvas, {
				    quality: quality,
				    alpha: alpha,
				    unsharpAmount: unsharpAmount,
				    unsharpRadius: unsharpRadius,
				    unsharpThreshold: unsharpThreshold,
				    transferable: true
				  })
				  .then(function () {
				
				   dst.getContext('2d', { alpha: Boolean(alpha) }).drawImage(offScreenCanvas, 0, 0);		   

					var imgtype = file.type;
					var foto = 'fotos/' + file.name;

					var dataurl = offScreenCanvas.toDataURL(imgtype, 1.0);

			   	var subirimagen = firebase.storage().ref().child(foto).putString(dataurl, 'data_url');

					subirimagen.on(firebase.storage.TaskEvent.STATE_CHANGED,
				  function(snapshot) {
				
				    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				    var progress = Math.round(progress);
				    $('#barrafoto').html('<div class="progress-bar rounded progress-bar-striped d-block bg-info progress-bar-animated" role="progressbar" style="width: ' + progress + '%;font-weight:bold;font-size:15pt" aria-valuenow="' + progress + '" aria-valuemin="0" aria-valuemax="100">' + progress + '%</div>');
				    switch (snapshot.state) {
				      case firebase.storage.TaskState.PAUSED:
				        console.log('Pausar subida');
				        break;
				      case firebase.storage.TaskState.RUNNING:
				        $('#subiendofoto').text('Subiendo imagen: ');
				        break;
				    }
				  }, function(error) {
				
				  
				  switch (error.code) {
				    case 'storage/unauthorized':
				     	$('#subiendofoto').html('<div class="text-danger">No se pudo cargar la imagen, intente de nuevo</div>');
				      break;
				    case 'storage/canceled':
				      $('#subiendofoto').html('<div class="text-danger">No se pudo cargar la imagen, intente de nuevo</div>');
				      break;
				
				    case 'storage/unknown':
				      $('#subiendofoto').html('<div class="text-danger">No se pudo cargar la imagen, intente de nuevo</div>');
				      break;
				  }
				}, function() {

				  subirimagen.snapshot.ref.getDownloadURL().then(function(urlfoto) {

					// urlfoto
					
				 	 $('#subiendofoto').html('<div class="text-success">&iexcl;La imagen se ha subido con &eacute;xito!</div>');
				 		
				 	 setTimeout(function(){
				 	 $('#barrafoto').hide('slow');
				 	 $('#subiendofoto').hide('slow');
				 	 },5000);
				  
				  });
				  
				});
				   	
				   	
				  }) 	
				  
				}, 100);
				
				
				var img = new Image();
				
				var quality           = 3;
				var unsharpAmount     = 80;
				var unsharpRadius     = 0.6;
				var unsharpThreshold  = 2;
				var alpha             = true;
				
				resizer_mode.ww   = true;
				resizer_mode.cib  = false;
				resizer_mode.wasm = true;
				
				create_resizer();
				
			  var files = $(this)[0].files;
			  
			  img.src = window.URL.createObjectURL(files[0]);
			  $('#foto_mini').css('background-image', 'url(' + img.src + ')');
      	$('#foto_mini').hide();
      	$('#foto_mini').fadeIn(650);
			  img.onload = function () {
			  canvaFoto();
			  RedimensionarFoto();
			  };
			  
			  
	});
		
	}
	
	}

});		

},500);


		$('body').popover({
    selector: '.title-farmacia',
    trigger: 'hover'
});
     	
    var f = new Date();
    $('#copy').text(f.getFullYear());