(function(a,b,c){function B(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function C(a,c,d,g,h,i){var k=b.createElement("script"),l,m;g=g||A.errorTimeout,k.src=a;for(m in d)k.setAttribute(m,d[m]);c=i?E:c||j,k.onreadystatechange=k.onload=function(){!l&&B(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},e(function(){l||(l=1,c(1))},g),v(),h?k.onload():f.parentNode.insertBefore(k,f)}function D(a,c,d,g,h,i){var k=b.createElement("link"),l,m;g=g||A.errorTimeout,c=i?E:c||j,k.href=a,k.rel="stylesheet",k.type="text/css";for(m in d)k.setAttribute(m,d[m]);h||(v(),f.parentNode.insertBefore(k,f),e(c,0))}function E(){var a=h.shift();i=1,a?a.t?e(function(){(a.t=="c"?A.injectCss:A.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),E()):i=0}function F(a,c,d,g,j,k,n){function s(b){if(!p&&B(o.readyState)){r.r=p=1,!i&&E();if(b){a!="img"&&e(function(){m.removeChild(o)},50);for(var d in x[c])x[c].hasOwnProperty(d)&&x[c][d].onload();o.onload=o.onreadystatechange=null}}}n=n||A.errorTimeout;var o=b.createElement(a),p=0,q=0,r={t:d,s:c,e:j,a:k,x:n};x[c]===1&&(q=1,x[c]=[]),a=="object"?(o.data=c,o.setAttribute("type","text/css")):(o.src=c,o.type=a),o.width=o.height="0",o.onerror=o.onload=o.onreadystatechange=function(){s.call(this,q)},h.splice(g,0,r),a!="img"&&(q||x[c]===2?(v(),m.insertBefore(o,l?null:f),e(s,n)):x[c].push(o))}function G(a,b,c,d,e){return i=0,b=b||"j",t(a)?F(b=="c"?q:p,a,b,this.i++,c,d,e):(h.splice(this.i++,0,a),h.length==1&&E()),this}function H(){var a=A;return a.loader={load:G,i:0},a}var d=b.documentElement,e=a.setTimeout,f=b.getElementsByTagName("script")[0],g={}.toString,h=[],i=0,j=function(){},k="MozAppearance"in d.style,l=k&&!!b.createRange().compareNode,m=l?d:f.parentNode,n=a.opera&&g.call(a.opera)=="[object Opera]",o=!!b.attachEvent&&!n,p=k?"object":o?"script":"img",q=o?"script":p,r=Array.isArray||function(a){return g.call(a)=="[object Array]"},s=function(a){return Object(a)===a},t=function(a){return typeof a=="string"},u=function(a){return g.call(a)=="[object Function]"},v=function(){if(!f||!f.parentNode)f=b.getElementsByTagName("script")[0]},w=[],x={},y={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},z,A;A=function(a){function f(a){var b=a.split("!"),c=w.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h,i;for(h=0;h<e;h++)i=b[h].split("="),g=y[i.shift()],g&&(f=g(f,i));for(h=0;h<c;h++)f=w[h](f);return f}function g(a){var b=a.split("?")[0];return b.substr(b.lastIndexOf(".")+1)}function h(a,b,d,e,h){var i=f(a),j=i.autoCallback,k=g(i.url);if(i.bypass)return;b&&(b=u(b)?b:b[a]||b[e]||b[a.split("/").pop().split("?")[0]]);if(i.instead)return i.instead(a,b,d,e,h);x[i.url]&&i.reexecute!==!0?i.noexec=!0:x[i.url]=1,a&&d.load(i.url,i.forceCSS||!i.forceJS&&"css"==g(i.url)?"c":c,i.noexec,i.attrs,i.timeout),(u(b)||u(j))&&d.load(function(){H(),b&&b(i.origUrl,h,e),j&&j(i.origUrl,h,e),x[i.url]=2})}function i(a,b){function m(a,d){if(""!==a&&!a)!d&&i();else if(t(a))d||(f=function(){var a=[].slice.call(arguments);g.apply(this,a),i()}),h(a,f,b,0,c);else if(s(a)){k=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}();for(l in a)a.hasOwnProperty(l)&&(!d&&!--k&&(u(f)?f=function(){var a=[].slice.call(arguments);g.apply(this,a),i()}:f[l]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),i()}}(g[l])),h(a[l],f,b,l,c))}}var c=!!a.test,d=c?a.yep:a.nope,e=a.load||a.both,f=a.callback||j,g=f,i=a.complete||j,k,l;m(d,!!e||!!a.complete),e&&m(e),!e&&!!a.complete&&m("")}var b,d,e=this.yepnope.loader;if(t(a))h(a,0,e,0);else if(r(a))for(b=0;b<a.length;b++)d=a[b],t(d)?h(d,0,e,0):r(d)?A(d):s(d)&&i(d,e);else s(a)&&i(a,e)},A.addPrefix=function(a,b){y[a]=b},A.addFilter=function(a){w.push(a)},A.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",z=function(){b.removeEventListener("DOMContentLoaded",z,0),b.readyState="complete"},0)),a.yepnope=H(),a.yepnope.executeStack=E,a.yepnope.injectJs=C,a.yepnope.injectCss=D})(this,document),function(){var a,b;a=window.prefix||"http://integration.adlayerjavascriptsdk.com/",b='<div id="mocha">\n\t<h1>\n\t\t<img src="http://adlayer.com.br/img/logo.png" />\n\t\t<span>JS Integration Test</span>\n\t</h1>\n</div>',yepnope({load:[a+"stylesheets/mocha.css",a+"javascripts/jquery.js",a+"node_modules/expect.js/expect.js",a+"node_modules/mocha/mocha.js",a+"javascripts/main/setup.js",a+"tests/spaces.js",a+"tests/page.js"],complete:function(){return $(document).ready(function(){return $("body").prepend(b),mocha.run()})}})}.call(this)