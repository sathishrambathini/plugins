/**
 * For setting back html id and classnames.(Cause headjs causing issues with the
 * bulit in html tag id/clsss attributes)
 */
var ClickDesk_Html_Prop_Reset = {
	id : "",
	classNames : "",
	get : function() {

		var ele = document.getElementsByTagName('html')[0];
		if (!ele)
			return false;
		this.id = ele.id;
		this.classNames = ele.className;

	},
	set : function() {

		var ele = document.getElementsByTagName('html')[0];
		if (!ele)
			return false;

		// if (this.id)
			ele.id = this.id;
		// if (this.classNames)
			ele.className = this.classNames;

	},

};

// Init
(function() {
	ClickDesk_Html_Prop_Reset.get();
})();

/**
 * Check head js function exists in DOM
 */
try {
	if(typeof head.js != "function")
		throw error("No head function");
} catch (e) {
	/* @License */(function(e,t){"use strict";function f(e){o[o.length]=e}function l(e){var t=new RegExp("\\b"+e+"\\b");s.className=s.className.replace(t,"")}function c(e,t){for(var n=0,r=e.length;n<r;n++)t.call(e,e[n],n)}function E(){var t=e.innerWidth||s.clientWidth,n=e.outerWidth||e.screen.width;h.screen.innerWidth=t,h.screen.outerWidth=n;var r=e.outerWidth||s.clientWidth;s.className=s.className.replace(/ (w|lt|portrait|no-portrait|landscape|no-landscape)-\d+/g,""),f("w-"+Math.round(r/100)*100),c(u.screens,function(e){r<=e&&f("lt-"+e)});var i=e.innerHeight||s.clientHeight,o=e.outerHeight||e.screen.height;h.screen.innerHeight=i,h.screen.outerHeight=o,h.feature("portrait",i>t),h.feature("landscape",i<t)}function x(){e.clearTimeout(S),S=e.setTimeout(E,100)}var n=e.document,r=e.navigator,i=e.location,s=n.documentElement,o=[],u={screens:[320,480,640,768,1024,1280,1440,1680,1920],section:"-section",page:"-page",head:"head"};if(e.head_conf)for(var a in e.head_conf)e.head_conf[a]!==t&&(u[a]=e.head_conf[a]);var h=e[u.head]=function(){h.ready.apply(null,arguments)};h.feature=function(e,t,n){return e?(Object.prototype.toString.call(t)==="[object Function]"&&(t=t.call()),f((t?"":"no-")+e),h[e]=!!t,n||(l("no-"+e),l(e),h.feature()),h):(s.className+=" "+o.join(" "),o=[],h)},h.feature("js",!0);var p=r.userAgent.toLowerCase(),d=/mobile|midp/.test(p);h.feature("mobile",d,!0),h.feature("desktop",!d,!0),h.feature("touch","ontouchstart"in e,!0),p=/(chrome|firefox)[ \/]([\w.]+)/.exec(p)||/(iphone|ipad|ipod)(?:.*version)?[ \/]([\w.]+)/.exec(p)||/(android)(?:.*version)?[ \/]([\w.]+)/.exec(p)||/(webkit|opera)(?:.*version)?[ \/]([\w.]+)/.exec(p)||/(msie) ([\w.]+)/.exec(p)||[];var v=p[1],m=parseFloat(p[2]),g=0,y=0;switch(v){case"msie":v="ie",m=n.documentMode||m,g=6,y=10;break;case"chrome":g=8,y=22;break;case"firefox":v="ff",g=3,y=17;break;case"ipod":case"ipad":case"iphone":v="ios",g=3,y=6;break;case"android":g=2,y=4;break;case"webkit":v="safari",g=9,y=12;break;case"opera":g=9,y=12}h.browser={name:v,version:m},h.browser[v]=!0;var b=["ie"];c(b,function(e){e===v?f(e):f("no-"+e)});for(var w=g;w<=y;w++)m<w&&f("lt-"+v+w);v==="ie"&&m<9&&c("abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video".split("|"),function(e){n.createElement(e)}),c(i.pathname.split("/"),function(e,n){if(this.length>2&&this[n+1]!==t)n&&f(this.slice(1,n+1).join("-").toLowerCase()+u.section);else{var r=e||"index",i=r.indexOf(".");i>0&&(r=r.substring(0,i)),s.id=r.toLowerCase()+u.page,n||f("root"+u.section)}}),h.screen={height:e.screen.height,width:e.screen.width},E();var S=0;e.addEventListener?e.addEventListener("resize",x,!1):e.attachEvent("onresize",x)})(window),function(e,t){"use strict";function l(e){for(var n in e)if(s[e[n]]!==t)return!0}function c(e){var t=e.charAt(0).toUpperCase()+e.substr(1),n=(e+" "+u.join(t+" ")+t).split(" ");return!!l(n)}var n=e.document,r=e.navigator,i=n.createElement("i"),s=i.style,o=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),u="Webkit Moz O ms Khtml".split(" "),a=e.head_conf&&e.head_conf.head||"head",f=e[a],h={gradient:function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(#fff));",n="linear-gradient(left top,#eee,#fff);";return s.cssText=(e+o.join(t+e)+o.join(n+e)).slice(0,-e.length),!!s.backgroundImage},rgba:function(){return s.cssText="background-color:rgba(0,0,0,0.5)",!!s.backgroundColor},opacity:function(){return i.style.opacity===""},textshadow:function(){return s.textShadow===""},multiplebgs:function(){return s.cssText="background:url(//:),url(//:),red url(//:)",(new RegExp("(url\\s*\\(.*?){3}")).test(s.background)},boxshadow:function(){return c("boxShadow")},borderimage:function(){return c("borderImage")},borderradius:function(){return c("borderRadius")},cssreflections:function(){return c("boxReflect")},csstransforms:function(){return c("transform")},csstransitions:function(){return c("transition")},fontface:function(){var e=navigator.userAgent,t;return(t=e.match(/Chrome\/(\d+\.\d+\.\d+\.\d+)/))?t[1]>="4.0.249.4"||1*t[1].split(".")[0]>5:(t=e.match(/Safari\/(\d+\.\d+)/))&&!/iPhone/.test(e)?t[1]>="525.13":/Opera/.test({}.toString.call(window.opera))?opera.version()>="10.00":(t=e.match(/rv:(\d+\.\d+\.\d+)[^b].*Gecko\//))?t[1]>="1.9.1":!1}};for(var p in h)h[p]&&f.feature(p,h[p].call(),!0);f.feature()}(window),function(e,t){"use strict";function y(e){if(e._done)return;e(),e._done=1}function b(e){var t=e.split("/"),n=t[t.length-1],r=n.indexOf("?");return r!=-1?n.substring(0,r):n}function w(e){var t;if(typeof e=="object")for(var n in e)e[n]&&(t={name:n,url:e[n]});else t={name:b(e),url:e};var r=l[t.name];return r&&r.url===t.url?r:(l[t.name]=t,t)}function E(e,t){if(!e)return;typeof e=="object"&&(e=[].slice.call(e));for(var n=0;n<e.length;n++)t.call(e,e[n],n)}function S(e){return Object.prototype.toString.call(e)=="[object Function]"}function x(e){e=e||l;var t;for(var n in e){if(e.hasOwnProperty(n)&&e[n].state!=g)return!1;t=!0}return t}function T(e){e.state=d,E(e.onpreload,function(e){e.call()})}function N(e,n){e.state===t&&(e.state=v,e.onpreload=[],k({src:e.url,type:"cache"},function(){T(e)}))}function C(e,t){if(e.state==g)return t&&t();if(e.state==m)return p.ready(e.name,t);if(e.state==v)return e.onpreload.push(function(){C(e,t)});e.state=m,k(e.url,function(){e.state=g,t&&t(),E(f[e.name],function(e){y(e)}),x()&&o&&E(f.ALL,function(e){y(e)})})}function k(e,t){var r=n.createElement("script");r.type="text/"+(e.type||"javascript"),r.src=e.src||e,r.async=!1,r.onreadystatechange=r.onload=function(){var e=r.readyState;!t.done&&(!e||/loaded|complete/.test(e))&&(t.done=!0,t())},(n.body||i).appendChild(r)}function L(){o||(o=!0,E(u,function(e){y(e)}))}var n=e.document,r=e.navigator,i=n.documentElement,s,o,u=[],a=[],f={},l={},c=n.createElement("script").async===!0||"MozAppearance"in n.documentElement.style||e.opera,h=e.head_conf&&e.head_conf.head||"head",p=e[h]=e[h]||function(){p.ready.apply(null,arguments)},d=1,v=2,m=3,g=4;c?p.js=function(){var e=arguments,t=e[e.length-1],n={};return S(t)||(t=null),E(e,function(r,i){r!=t&&(r=w(r),n[r.name]=r,C(r,t&&i==e.length-2?function(){x(n)&&y(t)}:null))}),p}:p.js=function(){var e=arguments,t=[].slice.call(e,1),n=t[0];return s?(n?(E(t,function(e){S(e)||N(w(e))}),C(w(e[0]),S(n)?n:function(){p.js.apply(null,t)})):C(w(e[0])),p):(a.push(function(){p.js.apply(null,e)}),p)},p.ready=function(e,t){if(e==n)return o?y(t):u.push(t),p;S(e)&&(t=e,e="ALL");if(typeof e!="string"||!S(t))return p;var r=l[e];if(r&&r.state==g||e=="ALL"&&x()&&o)return y(t),p;var i=f[e];return i?i.push(t):i=f[e]=[t],p},p.ready(n,function(){x()&&E(f.ALL,function(e){y(e)}),p.feature&&p.feature("domloaded",!0)});if(e.addEventListener)n.addEventListener("DOMContentLoaded",L,!1),e.addEventListener("load",L,!1);else if(e.attachEvent){n.attachEvent("onreadystatechange",function(){n.readyState==="complete"&&L()});var A=1;try{A=e.frameElement}catch(O){}!A&&i.doScroll&&function(){try{i.doScroll("left"),L()}catch(e){setTimeout(arguments.callee,1);return}}(),e.attachEvent("onload",L)}!n.readyState&&n.addEventListener&&(n.readyState="loading",n.addEventListener("DOMContentLoaded",handler=function(){n.removeEventListener("DOMContentLoaded",handler,!1),n.readyState="complete"},!1)),setTimeout(function(){s=!0,E(a,function(e){e()})},300)}(window);/* @License */
}
typeof Object.create!="function"&&(Object.create=function(a){function b(){}b.prototype=a;return new b}),!function(a){var b=a.snack={},c=0,d=Object.prototype.toString,e=Array.prototype.indexOf;b.extend=function(){if(arguments.length==1)return b.extend(b,arguments[0]);var a=arguments[0];for(var c,d=1,e=arguments.length;d<e;d++)for(c in arguments[d])a[c]=arguments[d][c];return a},b.extend({v:"1.2.1",bind:function(a,b,c){return function(){return a.apply(b,c||arguments)}},punch:function(a,c,d,e){var f=a[c];a[c]=e?function(){f.apply(a,arguments);return d.apply(a,arguments)}:function(){var c=[].slice.call(arguments,0);c.unshift(b.bind(f,a));return d.apply(a,c)}},create:function(a,c){var d=Object.create(a);if(!c)return d;for(i in c){if(!c.hasOwnProperty(i))continue;if(!a[i]||typeof c[i]!="function"){d[i]=c[i];continue}b.punch(d,i,c[i])}return d},id:function(){return++c},each:function(a,b,c){if(a.length===void 0){for(var d in a)a.hasOwnProperty(d)&&b.call(c,a[d],d,a);return a}for(var e=0,f=a.length;e<f;e++)b.call(c,a[e],e,a);return a},parseJSON:function(b){if(typeof b=="string"){b=b.replace(/^\s+|\s+$/g,"");var c=/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""));if(!c)throw"Invalid JSON";var d=a.JSON;return d&&d.parse?d.parse(b):(new Function("return "+b))()}},isArray:function(a){return a instanceof Array||d.call(a)=="[object Array]"},indexOf:e?function(a,b){return e.call(b,a)}:function(a,b){for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1}})}(window),!function(a,b){var c={},d;a.wrap=function(b,e){typeof b=="string"&&(b=d(b,e)),b.length||(b=[b]);var f=Object.create(c),g=0,h=b.length;for(;g<h;g++)f[g]=b[g];f.length=h,f.id=a.id();return f},a.extend(a.wrap,{define:function(b,d){if(typeof b!="string")for(i in b)a.wrap.define(i,b[i]);else c[b]=d},defineEngine:function(a){d=a}}),a.wrap.defineEngine(function(a,c){typeof c=="string"&&(c=b.querySelector(c));return(c||b).querySelectorAll(a)})}(snack,document),!function(a,b,c){function l(){try{i.doScroll("left")}catch(a){setTimeout(l,50);return}k("poll")}function k(d){if(d.type!="readystatechange"||c.readyState=="complete")(d.type=="load"?b:c)[e](f+d.type,k,!1),!g&&(g=!0)&&a.each(j,function(a){a.apply(c)})}var d=c.addEventListener?"addEventListener":"attachEvent",e=c.addEventListener?"removeEventListener":"detachEvent",f=c.addEventListener?"":"on",g=!1,h=!0,i=c.documentElement,j=[];a.extend({stopPropagation:function(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},preventDefault:function(a){a.preventDefault?a.preventDefault():a.returnValue=!1}}),a.listener=function(b,g){b.delegate&&(b.capture=!0,_handler=g,g=function(d){var e=d.target||d.srcElement,f=typeof b.delegate=="string"?a.wrap(b.delegate,b.node):b.delegate(b.node);while(e&&a.indexOf(e,f)==-1)e=e.parentNode;e&&e!==this&&e!==c&&_handler.call(e,d,e)}),b.context&&(g=a.bind(g,b.context));var h={attach:function(){b.node[d](f+b.event,g,b.capture)},detach:function(){b.node[e](f+b.event,g,b.capture)},fire:function(){g.apply(b.node,arguments)}};h.attach();return h},a.ready=function(a){g?a.apply(c):j.push(a)};if(c.createEventObject&&i.doScroll){try{h=!b.frameElement}catch(m){}h&&l()}c[d](f+"DOMContentLoaded",k,!1),c[d](f+"readystatechange",k,!1),b[d](f+"load",k,!1)}(snack,window,document),!function(a){a.publisher=function(b){var c={};b=b||{},a.extend(b,{subscribe:function(b,d,e){var f={fn:d,ctxt:e||{}};c[b]||(c[b]=[]);var g={attach:function(){c[b].push(f)},detach:function(){c[b].splice(a.indexOf(d,c[b]),1)}};g.attach();return g},publish:function(b,d){if(!c[b])return!1;a.each(c[b],function(a){a.fn.apply(a.ctxt,d||[])});return c[b].length}});return b},a.publisher(a)}(snack),!function(a,b,c){function e(){}a.JSONP=function(b,d){var e="jsonp"+a.id(),f=c.createElement("script"),g=!1;a.JSONP[e]=function(b){g=!1,delete a.JSONP[e],d(b)},typeof b.data=="object"&&(b.data=a.toQueryString(b.data));var h={send:function(){g=!0,f.src=b.url+"?"+b.key+"=snack.JSONP."+e+"&"+b.data,c.getElementsByTagName("head")[0].appendChild(f)},cancel:function(){g&&f.parentNode&&f.parentNode.removeChild(f),g=!1,a.JSONP[e]=function(){delete a.JSONP[e]}}};b.now!==!1&&h.send();return h},a.toQueryString=function(b,c){var d=[];a.each(b,function(b,e){c&&(e=c+"["+e+"]");var f;switch(a.isArray(b)){case"object":f=a.toQueryString(b,e);break;case"array":var g={};a.each(b,function(a,b){g[b]=a}),f=a.toQueryString(g,e);break;default:f=e+"="+encodeURIComponent(b)}b!==null&&d.push(f)});return d.join("&")};var d=function(){var a=function(){return new XMLHttpRequest},b=function(){return new ActiveXObject("MSXML2.XMLHTTP")},c=function(){return new ActiveXObject("Microsoft.XMLHTTP")};try{a();return a}catch(d){try{b();return b}catch(d){c();return c}}}();a.request=function(b,c){if(!(this instanceof a.request))return new a.request(b,c);var e=this;e.options=a.extend({},e.options,b),e.callback=c,e.xhr=new d,e.headers=e.options.headers,e.options.now!==!1&&e.send()},a.request.prototype={options:{exception:e,url:"",data:"",method:"get",now:!0,headers:{"X-Requested-With":"XMLHttpRequest",Accept:"text/javascript, text/html, application/xml, text/xml, */*"},async:!0,emulation:!0,urlEncoded:!0,encoding:"utf-8"},onStateChange:function(){var a=this,b=a.xhr;if(b.readyState==4&&!!a.running){a.running=!1,a.status=0;try{var c=b.status;a.status=c==1223?204:c}catch(d){}b.onreadystatechange=e;var f=a.status>=200&&a.status<300?[!1,a.xhr.responseText||"",a.xhr.responseXML]:[a.status];a.callback.apply(a,f)}},setHeader:function(a,b){this.headers[a]=b;return this},getHeader:function(a){try{return this.xhr.getResponseHeader(a)}catch(b){return null}},send:function(){var b=this,d=b.options;if(b.running)return b;b.running=!0;var e=d.data||"",f=String(d.url),g=d.method.toLowerCase();typeof e!="string"&&(e=a.toQueryString(e));if(d.emulation&&a.indexOf(g,["get","post"])<0){var h="_method="+g;e=e?h+"&"+e:h,g="post"}if(d.urlEncoded&&a.indexOf(g,["post","put"])>-1){var j=d.encoding?"; charset="+d.encoding:"";b.headers["Content-type"]="application/x-www-form-urlencoded"+j}f||(f=c.location.pathname);var k=f.lastIndexOf("/");k>-1&&(k=f.indexOf("#"))>-1&&(f=f.substr(0,k)),e&&g=="get"&&(f+=(f.indexOf("?")>-1?"&":"?")+e,e=null);var l=b.xhr;l.open(g.toUpperCase(),f,open.async,d.user,d.password),d.user&&"withCredentials"in l&&(l.withCredentials=!0),l.onreadystatechange=a.bind(b.onStateChange,b);for(i in b.headers)try{l.setRequestHeader(i,b.headers[i])}catch(m){d.exception.apply(b,[i,b.headers[i]])}l.send(e),d.async||b.onStateChange();return b},cancel:function(){var a=this;if(!a.running)return a;a.running=!1;var b=a.xhr;b.abort(),b.onreadystatechange=e,a.xhr=new d;return a}}}(snack,window,document),!function(a,b){function d(b,c,d,e){var f=b.data(d);f&&a.each(f,function(a){a[c].apply(b,e)});return b}function c(a){return a.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")}a.wrap.define({data:function(){var a={};return function(b,c){var d=a[this.id];d||(d=a[this.id]={});if(c===void 1)return d[b];return d[b]=c}}(),each:function(b,c){return a.each(this,b,c)},addClass:function(a){return this.each(function(b){c(b.className).indexOf(a)>-1||(b.className=c(b.className+" "+a))})},removeClass:function(a){return this.each(function(b){b.className=b.className.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)"),"$1")})},attach:function(b,c,d){var e=b.split("."),f=[];e[1]&&(f=this.data(e[1])||[]),this.each(function(b){var g={node:b,event:e[0]};d&&(g.delegate=d),f.push(a.listener(g,c))}),e[1]&&this.data(e[1],f);return this},detach:function(a){d(this,"detach",a,null,!0),this.data(a,null);return this},fire:function(a,b){return d(this,"fire",a,b)},delegate:function(a,b,c){return this.attach(a,c,b)}})}(snack,document),!function(a,b){function W(a){var b=[],c,d;label:for(c=0;c<a.length;c++){for(d=0;d<b.length;d++)if(b[d]==a[c])continue label;b[b.length]=a[c]}return b}function V(a,c){var d=typeof c=="string"?V(c)[0]:c||b;if(!d||!a)return[];if(h=T(a,c,V))return h;if(b.getElementsByClassName&&(h=a.match(y)))return G(d.getElementsByClassName(h[1]));return G(d.querySelectorAll(a))}function U(a){return a===window||a&&a.nodeType&&a.nodeType.toString().match(/[19]/)}function T(a,c,d){var e=typeof c=="string"?d(c)[0]:c||b;if(U(a))return!c||U(e)&&S(a,e)?[a]:[];if(a&&typeof a=="object"&&isFinite(a.length))return G(a);if(h=a.match(x))return(m=b.getElementById(h[1]))?[m]:[];if(h=a.match(z))return G(e.getElementsByTagName(h[1]));return!1}function R(a){var b=[],c=[],d,g,h=L.g(a)||L.s(a,a.split(C));h=h.slice(0);if(!h.length)return b;b=O(h);if(!h.length)return b;for(e=0,g=b.length,f=0;e<g;e++){n=b[e],j=n;for(d=h.length;d--;)z:while(j!==B&&(j=j.parentNode))if(p=N.apply(j,M(h[d])))break z;p&&(c[f++]=n)}return c}function Q(a,b,c){switch(a){case"=":return b==c;case"^=":return b.match(K.g("^="+c)||K.s("^="+c,new RegExp("^"+P(c))));case"$=":return b.match(K.g("$="+c)||K.s("$="+c,new RegExp(P(c)+"$")));case"*=":return b.match(K.g(c)||K.s(c,new RegExp(P(c))));case"~=":return b.match(K.g("~="+c)||K.s("~="+c,new RegExp("(?:^|\\s+)"+P(c)+"(?:\\s+|$)")));case"|=":return b.match(K.g("|="+c)||K.s("|="+c,new RegExp("^"+P(c)+"(-|$)")))}return!1}function P(a){return J.g(a)||J.s(a,a.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g,"\\$1"))}function O(a){var c=[],d=a.pop(),e=M(d),f=e[1]||"*",g,i,j,k=a.length&&(h=a[0].match(x))?b.getElementById(h[1]):b;if(!k)return c;j=k.getElementsByTagName(f);for(g=0,i=j.length;g<i;g++)m=j[g],(r=N.apply(m,e))&&c.push(r);return c}function N(a,b,c,e,f,g,h){var j,k,l;if(b&&this.tagName.toLowerCase()!==b)return!1;if(c&&(j=c.match(v))&&j[1]!==this.id)return!1;if(c&&(q=c.match(w)))for(d=q.length;d--;){k=q[d].slice(1);if(!(I.g(k)||I.s(k,new RegExp("(^|\\s+)"+k+"(\\s+|$)"))).test(this.className))return!1}if(e&&!h){i=this.attributes;for(l in i)if(Object.prototype.hasOwnProperty.call(i,l)&&(i[l].name||l)==f)return this}if(e&&!Q(g,this.getAttribute(f)||"",h))return!1;return this}function M(a){return a.match(F)}function G(a){k=[];for(d=0,o=a.length;d<o;d++)k[d]=a[d];return k}var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=/#([\w\-]+)/,w=/\.[\w\-]+/g,x=/^#([\w\-]+$)/,y=/^\.([\w\-]+)$/,z=/^([\w\-]+)$/,A=/^([\w]+)?\.([\w\-]+)$/,B=b.documentElement,C=/\s(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\])/,D=/^([a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/,E=/\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/,F=new RegExp(D.source+"("+E.source+")?"),H=function(){this.c={}};H.prototype={g:function(a){return this.c[a]||undefined},s:function(a,b){this.c[a]=b;return b}};var I=new H,J=new H,K=new H,L=new H,S="compareDocumentPosition"in B?function(a,b){return(b.compareDocumentPosition(a)&16)==16}:"contains"in B?function(a,b){return b!==a&&b.contains(a)}:function(a,b){while(a=a.parentNode)if(a===b)return 1;return 0},X=function(){if(b.querySelector&&b.querySelectorAll)return V;return function(a,c){var d=typeof c=="string"?X(c)[0]:c||b;if(!d||!a)return[];var f,g,i=[],j=[],l;if(h=T(a,c,X))return h;if(h=a.match(A)){s=d.getElementsByTagName(h[1]||"*"),k=I.g(h[2])||I.s(h[2],new RegExp("(^|\\s+)"+h[2]+"(\\s+|$)"));for(f=0,g=s.length,e=0;f<g;f++)k.test(s[f].className)&&(i[e++]=s[f]);return i}for(f=0,s=a.split(","),g=s.length;f<g;f++)j[f]=R(s[f]);for(f=0,g=j.length;f<g&&(u=j[f]);f++){var m=u;if(d!==b){m=[];for(e=0,h=u.length;e<h&&(l=u[e]);e++)S(l,d)&&m.push(l)}i=i.concat(m)}return W(i)}}();X.uniq=W;var Y=a.qwery;X.noConflict=function(){a.qwery=Y;return this},a.qwery=X}(this,document),snack.qwery=qwery.noConflict(),snack.wrap.defineEngine(function(a,b){return snack.qwery(a,b)})/*@license*/
var ClickDeskHandlebars=(function(){var f=(function(){var g;function h(i){this.string=i}h.prototype.toString=function(){return""+this.string};g=h;return g})();var c=(function(p){var q={};var j=p;var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};var g=/[&<>"'`]/g;var k=/[&<>"'`]/;function s(t){return r[t]||"&amp;"}function o(v,u){for(var t in u){if(u.hasOwnProperty(t)){v[t]=u[t]}}}q.extend=o;var i=Object.prototype.toString;q.toString=i;var h=function(t){return typeof t==="function"};if(h(/x/)){h=function(t){return typeof t==="function"&&i.call(t)==="[object Function]"}}var h;q.isFunction=h;var n=Array.isArray||function(t){return(t&&typeof t==="object")?i.call(t)==="[object Array]":false};q.isArray=n;function m(t){if(t instanceof j){return t.toString()}else{if(!t&&t!==0){return""}}t=""+t;if(!k.test(t)){return t}return t.replace(g,s)}q.escapeExpression=m;function l(t){if(!t&&t!==0){return true}else{if(n(t)&&t.length===0){return true}else{return false}}}q.isEmpty=l;return q})(f);var d=(function(){var h;var i=["description","fileName","lineNumber","message","name","number","stack"];function g(){var k=Error.prototype.constructor.apply(this,arguments);for(var j=0;j<i.length;j++){this[i[j]]=k[i[j]]}}g.prototype=new Error();h=g;return h})();var e=(function(r,u){var t={};var p=r;var n=u;var w="1.1.2";t.VERSION=w;var h=4;t.COMPILER_REVISION=h;var k={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};t.REVISION_CHANGES=k;var o=p.isArray,j=p.isFunction,i=p.toString,g="[object Object]";function m(y,x){this.helpers=y||{};this.partials=x||{};q(this)}t.HandlebarsEnvironment=m;m.prototype={constructor:m,logger:s,log:l,registerHelper:function(y,z,x){if(i.call(y)===g){if(x||z){throw new n("Arg not supported with multiple helpers")}p.extend(this.helpers,y)}else{if(x){z.not=x}this.helpers[y]=z}},registerPartial:function(x,y){if(i.call(x)===g){p.extend(this.partials,x)}else{this.partials[x]=y}}};function q(x){x.registerHelper("helperMissing",function(y){if(arguments.length===2){return undefined}else{throw new Error("Missing helper: '"+y+"'")}});x.registerHelper("blockHelperMissing",function(A,z){var y=z.inverse||function(){},B=z.fn;if(j(A)){A=A.call(this)}if(A===true){return B(this)}else{if(A===false||A==null){return y(this)}else{if(o(A)){if(A.length>0){return x.helpers.each(A,z)}else{return y(this)}}else{return B(A)}}}});x.registerHelper("each",function(y,G){var E=G.fn,A=G.inverse;var C=0,D="",B;if(j(y)){y=y.call(this)}if(G.data){B=v(G.data)}if(y&&typeof y==="object"){if(o(y)){for(var z=y.length;C<z;C++){if(B){B.index=C;B.first=(C===0);B.last=(C===(y.length-1))}D=D+E(y[C],{data:B})}}else{for(var F in y){if(y.hasOwnProperty(F)){if(B){B.key=F}D=D+E(y[F],{data:B});C++}}}}if(C===0){D=A(this)}return D});x.registerHelper("if",function(z,y){if(j(z)){z=z.call(this)}if((!y.hash.includeZero&&!z)||p.isEmpty(z)){return y.inverse(this)}else{return y.fn(this)}});x.registerHelper("unless",function(z,y){return x.helpers["if"].call(this,z,{fn:y.inverse,inverse:y.fn,hash:y.hash})});x.registerHelper("with",function(z,y){if(j(z)){z=z.call(this)}if(!p.isEmpty(z)){return y.fn(z)}});x.registerHelper("log",function(z,y){var A=y.data&&y.data.level!=null?parseInt(y.data.level,10):1;x.log(A,z)})}var s={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(z,x){if(s.level<=z){var y=s.methodMap[z];if(typeof console!=="undefined"&&console[y]){console[y].call(console,x)}}}};t.logger=s;function l(y,x){s.log(y,x)}t.log=l;var v=function(x){var y={};p.extend(y,x);return y};t.createFrame=v;return t})(c,d);var b=(function(p,t,j){var r={};var o=p;var m=t;var i=j.COMPILER_REVISION;var l=j.REVISION_CHANGES;function h(w){var v=w&&w[0]||1,y=i;if(v!==y){if(v<y){var u=l[y],x=l[v];throw new Error("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+u+") or downgrade your runtime to an older version ("+x+").")}else{throw new Error("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+w[1]+").")}}}function q(u,x){if(!x){throw new Error("No environment passed to template")}var w;if(x.compile){w=function(z,B,D,E,C,F){var y=g.apply(this,arguments);if(y){return y}var A={helpers:E,partials:C,data:F};C[B]=x.compile(z,{data:F!==undefined},x);return C[B](D,A)}}else{w=function(z,A){var y=g.apply(this,arguments);if(y){return y}throw new m("The partial "+A+" could not be compiled when running in runtime-only mode")}}var v={escapeExpression:o.escapeExpression,invokePartial:w,programs:[],program:function(z,A,B){var y=this.programs[z];if(B){y=n(z,A,B)}else{if(!y){y=this.programs[z]=n(z,A)}}return y},merge:function(A,z){var y=A||z;if(A&&z&&(A!==z)){y={};o.extend(y,z);o.extend(y,A)}return y},programWithDepth:k,noop:s,compilerInfo:null};return function(B,z){z=z||{};var C=z.partial?z:x,D,A;if(!z.partial){D=z.helpers;A=z.partials}var y=u.call(v,C,B,D,A,z.data);if(!z.partial){h(v.compilerInfo)}return y}}r.template=q;function k(v,w,x){var u=Array.prototype.slice.call(arguments,3);var y=function(A,z){z=z||{};return w.apply(this,[A,z.data||x].concat(u))};y.program=v;y.depth=u.length;return y}r.programWithDepth=k;function n(u,v,w){var x=function(z,y){y=y||{};return v(z,y.data||w)};x.program=u;x.depth=0;return x}r.program=n;function g(u,w,y,z,x,A){var v={partial:true,helpers:z,partials:x,data:A};if(u===undefined){throw new m("The partial "+w+" could not be found")}else{if(u instanceof Function){return u(y,v)}}}r.invokePartial=g;function s(){return""}r.noop=s;return r})(c,d,e);var a=(function(q,s,i,m,p){var r;var g=q;var j=s;var l=i;var o=m;var k=p;var n=function(){var t=new g.HandlebarsEnvironment();o.extend(t,g);t.SafeString=j;t.Exception=l;t.Utils=o;t.VM=k;t.template=function(u){return k.template(u,t)};return t};var h=n();h.create=n;r=h;return r})(e,f,d,c,b);return a})();/*@license*/
var Handlebars=((typeof Handlebars)!==undefined&&(typeof Handlebars)!=="undefined")?Handlebars:(function(){var f=(function(){var g;function h(i){this.string=i}h.prototype.toString=function(){return""+this.string};g=h;return g})();var c=(function(p){var q={};var j=p;var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};var g=/[&<>"'`]/g;var k=/[&<>"'`]/;function s(t){return r[t]||"&amp;"}function o(v,u){for(var t in u){if(u.hasOwnProperty(t)){v[t]=u[t]}}}q.extend=o;var i=Object.prototype.toString;q.toString=i;var h=function(t){return typeof t==="function"};if(h(/x/)){h=function(t){return typeof t==="function"&&i.call(t)==="[object Function]"}}var h;q.isFunction=h;var n=Array.isArray||function(t){return(t&&typeof t==="object")?i.call(t)==="[object Array]":false};q.isArray=n;function m(t){if(t instanceof j){return t.toString()}else{if(!t&&t!==0){return""}}t=""+t;if(!k.test(t)){return t}return t.replace(g,s)}q.escapeExpression=m;function l(t){if(!t&&t!==0){return true}else{if(n(t)&&t.length===0){return true}else{return false}}}q.isEmpty=l;return q})(f);var d=(function(){var h;var i=["description","fileName","lineNumber","message","name","number","stack"];function g(){var k=Error.prototype.constructor.apply(this,arguments);for(var j=0;j<i.length;j++){this[i[j]]=k[i[j]]}}g.prototype=new Error();h=g;return h})();var e=(function(r,u){var t={};var p=r;var n=u;var w="1.1.2";t.VERSION=w;var h=4;t.COMPILER_REVISION=h;var k={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};t.REVISION_CHANGES=k;var o=p.isArray,j=p.isFunction,i=p.toString,g="[object Object]";function m(y,x){this.helpers=y||{};this.partials=x||{};q(this)}t.HandlebarsEnvironment=m;m.prototype={constructor:m,logger:s,log:l,registerHelper:function(y,z,x){if(i.call(y)===g){if(x||z){throw new n("Arg not supported with multiple helpers")}p.extend(this.helpers,y)}else{if(x){z.not=x}this.helpers[y]=z}},registerPartial:function(x,y){if(i.call(x)===g){p.extend(this.partials,x)}else{this.partials[x]=y}}};function q(x){x.registerHelper("helperMissing",function(y){if(arguments.length===2){return undefined}else{throw new Error("Missing helper: '"+y+"'")}});x.registerHelper("blockHelperMissing",function(A,z){var y=z.inverse||function(){},B=z.fn;if(j(A)){A=A.call(this)}if(A===true){return B(this)}else{if(A===false||A==null){return y(this)}else{if(o(A)){if(A.length>0){return x.helpers.each(A,z)}else{return y(this)}}else{return B(A)}}}});x.registerHelper("each",function(y,G){var E=G.fn,A=G.inverse;var C=0,D="",B;if(j(y)){y=y.call(this)}if(G.data){B=v(G.data)}if(y&&typeof y==="object"){if(o(y)){for(var z=y.length;C<z;C++){if(B){B.index=C;B.first=(C===0);B.last=(C===(y.length-1))}D=D+E(y[C],{data:B})}}else{for(var F in y){if(y.hasOwnProperty(F)){if(B){B.key=F}D=D+E(y[F],{data:B});C++}}}}if(C===0){D=A(this)}return D});x.registerHelper("if",function(z,y){if(j(z)){z=z.call(this)}if((!y.hash.includeZero&&!z)||p.isEmpty(z)){return y.inverse(this)}else{return y.fn(this)}});x.registerHelper("unless",function(z,y){return x.helpers["if"].call(this,z,{fn:y.inverse,inverse:y.fn,hash:y.hash})});x.registerHelper("with",function(z,y){if(j(z)){z=z.call(this)}if(!p.isEmpty(z)){return y.fn(z)}});x.registerHelper("log",function(z,y){var A=y.data&&y.data.level!=null?parseInt(y.data.level,10):1;x.log(A,z)})}var s={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(z,x){if(s.level<=z){var y=s.methodMap[z];if(typeof console!=="undefined"&&console[y]){console[y].call(console,x)}}}};t.logger=s;function l(y,x){s.log(y,x)}t.log=l;var v=function(x){var y={};p.extend(y,x);return y};t.createFrame=v;return t})(c,d);var b=(function(p,t,j){var r={};var o=p;var m=t;var i=j.COMPILER_REVISION;var l=j.REVISION_CHANGES;function h(w){var v=w&&w[0]||1,y=i;if(v!==y){if(v<y){var u=l[y],x=l[v];throw new Error("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+u+") or downgrade your runtime to an older version ("+x+").")}else{throw new Error("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+w[1]+").")}}}function q(u,x){if(!x){throw new Error("No environment passed to template")}var w;if(x.compile){w=function(z,B,D,E,C,F){var y=g.apply(this,arguments);if(y){return y}var A={helpers:E,partials:C,data:F};C[B]=x.compile(z,{data:F!==undefined},x);return C[B](D,A)}}else{w=function(z,A){var y=g.apply(this,arguments);if(y){return y}throw new m("The partial "+A+" could not be compiled when running in runtime-only mode")}}var v={escapeExpression:o.escapeExpression,invokePartial:w,programs:[],program:function(z,A,B){var y=this.programs[z];if(B){y=n(z,A,B)}else{if(!y){y=this.programs[z]=n(z,A)}}return y},merge:function(A,z){var y=A||z;if(A&&z&&(A!==z)){y={};o.extend(y,z);o.extend(y,A)}return y},programWithDepth:k,noop:s,compilerInfo:null};return function(B,z){z=z||{};var C=z.partial?z:x,D,A;if(!z.partial){D=z.helpers;A=z.partials}var y=u.call(v,C,B,D,A,z.data);if(!z.partial){h(v.compilerInfo)}return y}}r.template=q;function k(v,w,x){var u=Array.prototype.slice.call(arguments,3);var y=function(A,z){z=z||{};return w.apply(this,[A,z.data||x].concat(u))};y.program=v;y.depth=u.length;return y}r.programWithDepth=k;function n(u,v,w){var x=function(z,y){y=y||{};return v(z,y.data||w)};x.program=u;x.depth=0;return x}r.program=n;function g(u,w,y,z,x,A){var v={partial:true,helpers:z,partials:x,data:A};if(u===undefined){throw new m("The partial "+w+" could not be found")}else{if(u instanceof Function){return u(y,v)}}}r.invokePartial=g;function s(){return""}r.noop=s;return r})(c,d,e);var a=(function(q,s,i,m,p){var r;var g=q;var j=s;var l=i;var o=m;var k=p;var n=function(){var t=new g.HandlebarsEnvironment();o.extend(t,g);t.SafeString=j;t.Exception=l;t.Utils=o;t.VM=k;t.template=function(u){return k.template(u,t)};return t};var h=n();h.create=n;r=h;return r})(e,f,d,c,b);return a})();// Cloudfront-version-change
var APP_MODE = 'prod';
var APP_CONFIG = {
    sandbox: {
        url: '-dot-sandbox-dot-clickdeskapp.appspot.com',
        cdnURL: 'http://cdn-widget.clickdesk.com',
        pluginURL: 'http://integrations.clickdesk.com:8080/ClickdeskPlugins-beta',
        scriptURL: (document.location.protocol == 'https:') ? 'https://my-dot-sandbox-dot-clickdeskapp.appspot.com/clickdesk-ui/browser/' : 'http://my-dot-sandbox-dot-clickdeskapp.appspot.com/clickdesk-ui/browser/'
    },
    beta: {
        url: "-dot-beta-dot-clickdeskchat.appspot.com",
        cdnURL: 'http://cdn-widget.clickdesk.com',
        pluginURL: 'http://integrations.clickdesk.com:8080/ClickdeskPlugins-beta',
        scriptURL: (document.location.protocol == 'https:') ? 'https://my-dot-beta-dot-clickdeskchat.appspot.com/clickdesk-ui/browser/' : 'http://my-dot-beta-dot-clickdeskchat.appspot.com/clickdesk-ui/browser/'
    },
    local: {
        url: ".localhost:8888",
        cdnURL: 'http://cdn-widget.clickdesk.com',
        pluginURL: 'http://localhost:8080',
        scriptURL: (document.location.protocol == 'https:') ? 'https://localhost:8888/clickdesk-ui/browser/' : 'http://localhost:8888/clickdesk-ui/browser/'
    },
    prod: {
        url: ".clickdesk.com",
        pluginURL: 'http://integrations.clickdesk.com:8080/ClickdeskPlugins',
        cdnURL: 'https://d1gwclp1pmzk26.cloudfront.net',
        scriptURL: (document.location.protocol == 'https:') ? 'https://my.clickdesk.com/clickdesk-ui/browser/' : 'http://my.clickdesk.com/clickdesk-ui/browser/'
    }
};
// Cloudfront-version-change
var CLOUD_FRONT_VERSION = '4-8';// Set cookie values to input fields
function clickdesk_cd_fill_form_fields_with_cookie_values(form_id) {

	try {
		// Refill conditional prefs from user
		var conditional_check = widgetPrefsJSON.online_form_prefs.prechat_refill_form_fields;
		// if (!conditional_check || conditional_check != "yes")
		// return false;

		if (!conditional_check == "yes")
			return false;

		// Get all input fields from form
		if (form_id && form_id != undefined && form_id !== null)
			formInputFields = ClickDesk_DOM.wrap("#" + form_id + " input, #"
					+ form_id + " textarea")
		else
			formInputFields = ClickDesk_DOM
					.wrap("#clickdesk_popup input, #clickdesk_popup textarea");

		for ( var i = 0; i < formInputFields.length; i++) {

			var element = formInputFields[i];

			if (element.type == "button" || element.type == "submit")
				continue;

			var cookie_value = "";

			if(element.id == "broadcastchat" && element.value)
				 cookie_value = element.value;
				
			var ref_cookie_name = element.getAttribute("ref_cookie_name");
			if (!ref_cookie_name)
				ref_cookie_name = clickdesk_custom_template_prefs_type(element);

			if (ref_cookie_name)
				// Get cookie value of associated field name
				cookie_value = ClickDesk_Storage.get_prefs(ref_cookie_name);

			// Reset and fill value with cookie
			element.value = (!cookie_value) ? "" : cookie_value;

		}

	} catch (err) {
		clickdesk_log(err);
	}

}

// Set values in browser store
function clickdesk_store_form_fields_in_browser_cache(form_id) {

	try {

		// Get all input fields from form
		var formInputFields = ClickDesk_DOM.wrap("#" + form_id + " input, #"
				+ form_id + " textarea");

		for ( var i = 0; i < formInputFields.length; i++) {

			var element = formInputFields[i];

			var ref_cookie_name = element.getAttribute("ref_cookie_name");
			if (!ref_cookie_name)
				ref_cookie_name = clickdesk_custom_template_prefs_type(element);

			if (element.type == "button" || element.type == "submit"
					|| !ref_cookie_name)
				continue;

			var element_value = element.value;
			if (!element_value)
				continue;

			// Check default values
			if (element_value == ClickDesk_Globals.default_place_holders[element.id])
				continue;

			// Reset in browser store
			ClickDesk_Storage.set_prefs(ref_cookie_name, element_value, 10);

		}

	} catch (err) {
		clickdesk_log(err);
	}

}

// Set to defalut options
function clickdesk_reset_forms() {

	// Get all input and textareas in popup
	var formFields = ClickDesk_DOM
			.wrap("#clickdesk_popup input,#clickdesk_popup textarea");

	for ( var i = 0; i < formFields.length; i++) {

		if (formFields[i].type == "button" || formFields[i].type == "submit")
			continue;

		try {

			ClickDesk_DOM.set_style_by_object(formFields[i], {
				'borderColor' : '#CCC'
			});
			var fieldClass = formFields[i].className;

			formFields[i].className = (fieldClass && fieldClass
					.indexOf("clickdesk_error_ele") != -1) ? fieldClass
					.replace("clickdesk_error_ele", "") : fieldClass;

			// Do not focus on mobile browsers (It popsup keyboard )
			if (ClickDesk_Mobile_Util.is_mobile_browser())
				continue;

			formFields[i].focus();
			formFields[i].blur();

		} catch (err) {
		}

	}

	var error_place_holders = [ "cd_valid_email", "offline_valid_email",
			"helpdesk_valid_email" ];
	for ( var i = 0; i < error_place_holders.length; i++) {
		ClickDesk_DOM.set_style_by_id(error_place_holders[i], {
			'display' : 'none'
		});
	}

}

function clickdesk_reset_form_select() {

	var formFields = ClickDesk_DOM.wrap("#clickdesk_popup select");

	for ( var i = 0; i < formFields.length; i++) {

		try {

			if (formFields[i].type.indexOf("select") > -1) {
				formFields[i].selectedIndex = 0;
			}

		} catch (err) {
		}

	}

}
/*
 * Serialize the form and returns json
 */
function clickdesk_serialize_form_data(form_id) {

	// Get all input fields from form
	var formInputFields = ClickDesk_DOM.wrap("#" + form_id + " input, #"
			+ form_id + " textarea, #" + form_id + " select");

	var json = {};

	for ( var i = 0; i < formInputFields.length; i++) {

		var element = formInputFields[i];

		var ref_cookie_name = element.getAttribute("ref_cookie_name");
		
		if(widgetPrefsJSON.template_prefs.template == "agilechat_theme"){
			if(ref_cookie_name == "visitor_email")
			{
				agiletheme_emailverif = true;
			}

		}
		if (!ref_cookie_name)
			ref_cookie_name = element.getAttribute("name");

		if (!ref_cookie_name
				|| (element.id && element.id.indexOf("custom") > -1))
			ref_cookie_name = clickdesk_custom_template_prefs_type(element);

		if (element.type == "button" || element.type == "submit"
				|| !ref_cookie_name)
			continue;

		var element_value = element.value;
		if (!element_value)
			continue;

		// Check default values
		if (element_value == clickdesk_get_element_default_value_(element))
			continue;

		json[ref_cookie_name] = element_value;

	}

	return json;

}

/**
 * Serialize the form and returns json value
 */
function clickdesk_serialize_form_fields(form_id) {

	// Get all input fields from form
	var formInputFields = ClickDesk_DOM.wrap("#" + form_id + " input, #"
			+ form_id + " select");

	// Fields Array
	var fieldsArray = new Array();

	for ( var i = 0; i < formInputFields.length; i++) {

		var element = formInputFields[i];

		if (element.type == "button" || element.type == "submit")
			continue;

		var element_value = element.value;
		var default_val = clickdesk_get_element_default_value_(element);
		if (!element_value || (element_value == default_val))
			continue;

		var field = {};
		var field_name = default_val;
		field.fieldName = field_name;
		field.fieldValue = element_value;
		fieldsArray.push(field);

	}

	return fieldsArray;

}

/**
 * 
 * @param element
 * @returns {String}
 */
function clickdesk_custom_template_prefs_type(element) {

	try {

		var id = element.id;
		if (!id)
			return;

		id = id.toLowerCase();
		if (id.indexOf("name") > 0)
			return "visitor_name";

		else if (id.indexOf("email") > 0)
			return "visitor_email";

		else if (id.indexOf("custom") > 0) {

			if (id == "cd_prechat_custom" || id == "cd_proactive_visitor_custom")
				return "custom_data";

			return "custom_field";
		}

	} catch (e) {
	}

}

/**
 * 
 * @param element
 * @returns {String}
 */
function clickdesk_field_name_from_prefs_type(element) {

	try {

		var id = element.id;
		if (!id)
			return;

		id = id.toLowerCase();
		if (id.indexOf("name") > 0)
			return "Name";

		else if (id.indexOf("email") > 0)
			return "Email";

		else if (id.indexOf("custom") > 0)
			return "Custom";

	} catch (e) {
	}

}

/**
 * 
 * @param ele
 */
function clickdesk_get_element_default_value_(element) {

	var field_name = ClickDesk_Globals.default_place_holders[element.id];
	if (field_name)
		field_name = field_name.replace("*", "").trim();

	if (!field_name)
		field_name = clickdesk_field_name_from_prefs_type(element);

	return field_name;

}/**
 * Validates the form and returns boolean value
 * 
 */
function clickdesk_validate_form(form_id, error_div_id) {

	// Get all input fields from form
	var formInputFields = ClickDesk_DOM.wrap("#" + form_id + " input, #"
			+ form_id + " textarea")

	// Send form data to server
	var validForm = true;
	var errorDiv = ClickDesk_DOM.wrap("#" + error_div_id)[0];

	if(!errorDiv)
		errorDiv = "";

	// Clear message
	errorDiv.innerHTML = "";

	for ( var i = 0; i < formInputFields.length; i++) {

		var element = formInputFields[i];
		if (element.type == "button" || element.type == "submit")
			continue;

		clickdesk_remove_error_class(element);

		if (!clickdesk_validate_field(element)) {

			// Error
			clickdesk_add_error_class(element);

			element.focus();

			// Gets element type attribute
			var type_attr = clickdesk_get_element_type_attr(element);

			var errorMssg = "";

			if (form_id == "ClickdeskPostchatSurveyForm")
				errorMssg = clickdesk_replace_special_characters((ClickDesk_Globals.custom_messages.customstatusmssgs_name_field_label));
			else if (type_attr == "email")
				errorMssg = clickdesk_replace_special_characters((ClickDesk_Globals.custom_messages.customstatusmssgs_email_field_label));
			else if (type_attr == "text")
				errorMssg = clickdesk_replace_special_characters((ClickDesk_Globals.custom_messages.customstatusmssgs_name_field_label));
			else if (type_attr == "number")
				errorMssg = clickdesk_replace_special_characters((ClickDesk_Globals.custom_messages.customstatusmssgs_number_field_label));
			else if (type_attr != "checkbox" && type_attr != "radio")
				errorMssg = clickdesk_replace_special_characters((ClickDesk_Globals.custom_messages.customstatusmssgs_message_field_label));

			if ((type_attr == "checkbox" || type_attr == "radio")
					&& element.getAttribute("rel")) {

				errorMssg = element.getAttribute("rel");
				if(errorMssg){
					errorMssg += " is required.";
				}
			}

			// Set message
			errorDiv.innerHTML = errorMssg;
			var display_option="block";
			if(widgetPrefsJSON.template_prefs.template == "agilechat_theme"){
				if(errorMssg == "Enter your message to chat")
					display_option="none";

			}
			ClickDesk_DOM.set_style_by_object(errorDiv, {
				'display' : display_option
			});

			validForm = false;

			return false;

		}

	}

	return validForm;

}

/**
 * Validates the input field Checks the required attribute and type of the input
 * field and validates the value
 */
function clickdesk_validate_field(element) {

	try {

		var required = false, type = "text", value;

		required = (element.required || element.getAttribute('required')) ? true
				: false;
		type = clickdesk_get_element_type_attr(element);

		if (required && (type == "checkbox" || type == "radio")) {

			var name = element.getAttribute('name'), checked = false, elements;
			if (!name)
				return (element.checked);

			var elements = ClickDesk_DOM.wrap("[name='" + name + "']");

			for ( var i = 0; i < elements.length; i++) {
				if (elements[i].checked) {
					checked = true;
					break;
				}
			}

			return checked;
		}

		value = element.value.trim();

		if (required
				|| (value.length > 0 && value != ClickDesk_Globals.default_place_holders[element.id])) {

			// Email
			if (type == "email") {
				return clickdesk_is_valid_email_address(element.value)
			}

			// Email
			if (type == "number") {
				return clickdesk_is_valid_number(element.value)
			}

			// Text
			else if (required
					&& (value.length == 0 || value == ClickDesk_Globals.default_place_holders[element.id])) {
				return false;
			}

		}

		return true;

	} catch (err) {
		clickdesk_log(err);
	}

	return true;
}

function clickdesk_is_valid_number(number) {

	if (!number || number < 0)
		return false;

	return !(isNaN(number))
}

// Email address validation
function clickdesk_is_valid_email_address(emailAddress) {

	var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,15})?$/);
	if (!emailAddress)
		return false;

	var emails = emailAddress.split(",");

	for ( var i = 0; i < emails.length; i++) {

		// trim
		emails[i] = emails[i].replace(/^\s*/, "").replace(/\s*$/, "");

		var match = pattern.test(emails[i]);

		if (!match)
			return false;

	}

	return true;
}

// Get element type
function clickdesk_get_element_type_attr(element) {
	if (!element)
		return "text";

	return (element.type == "textarea") ? "textarea" : (element
			.getAttribute("type") ? element.getAttribute("type")
			: (element.type ? element.type : type));

}

// Add Error Class
function clickdesk_add_error_class(element) {

	try {
		element.className = (element.className) ? (element.className + " clickdesk_error_ele")
				: "clickdesk_error_ele";

		var label = element.getAttribute("data");

		ClickDesk_DOM.wrap("." + label).addClass("clickdesk_error_label");

	} catch (err) {
	}
}

// Remove Error Class
function clickdesk_remove_error_class(element) {

	try {

		element.className = (element.className.indexOf("clickdesk_error_ele") >= 0) ? (element.className
				.replace(" clickdesk_error_ele", ""))
				: element.className;

		var label = element.getAttribute("data");

		ClickDesk_DOM.wrap("." + label).removeClass("clickdesk_error_label");

	} catch (err) {
	}
}

/**
 * to check if atlest one field of the form is filled or not
 * 
 * @param form_id
 * @param error_div_id
 * @returns {Boolean}
 */
function clickdesk_valid_data_form(form_id, error_div_id) {

	// Get all input fields from form
	var formInputFields = ClickDesk_DOM.wrap("#" + form_id + " input, #"
			+ form_id + " textarea")

	var errorDiv = ClickDesk_DOM.wrap("#" + error_div_id)[0];

	// Clear message
	errorDiv.innerHTML = "";

	for ( var i = 0; i < formInputFields.length; i++) {

		var element = formInputFields[i];
		if (element.type == "button" || element.type == "submit")
			continue;

		if (clickdesk_is_field_has_value(element)) {
			return true;
			break;
		}

	}

	// Set message
	errorDiv.innerHTML = clickdesk_replace_special_characters((ClickDesk_Globals.custom_messages.no_form_data_to_submit));

	ClickDesk_DOM.set_style_by_object(errorDiv, {
		'display' : 'block'
	})

	return false;

}

function clickdesk_is_field_has_value(element) {

	var value, type;

	type = clickdesk_get_element_type_attr(element);

	if (type == "checkbox" || type == "radio") {

		var name = element.getAttribute('name'), checked = false, elements;
		if (!name)
			return (element.checked);

		var elements = ClickDesk_DOM.wrap("[name='" + name + "']");

		for ( var i = 0; i < elements.length; i++) {
			if (elements[i].checked) {
				checked = true;
				break;
			}
		}

		return checked;
	}

	value = element.value.trim();

	if (value.length == 0
			|| value == ClickDesk_Globals.default_place_holders[element.id])
		return false;

	return true;

}

function clickdesk_is_any_field_required(form_id) {

	// Send form data to server
	var requiredFields = false;

	try {
		// Get all input fields from form
		var formInputFields = ClickDesk_DOM.wrap("#" + form_id + " input, #"
				+ form_id + " textarea")

		for ( var i = 0; i < formInputFields.length; i++) {

			var element = formInputFields[i];

			if (element.type == "button" || element.type == "submit")
				continue;

			if (element.required || element.getAttribute('required'))
				requiredFields = true;

		}
	} catch (e) {
	}

	return requiredFields;

}

function clickdesk_is_all_fields_has_value(form_id) {

	try {
		// Get all input fields from form
		var formInputFields = ClickDesk_DOM.wrap("#" + form_id + " input, #"
				+ form_id + " textarea")

		for ( var i = 0; i < formInputFields.length; i++) {

			var element = formInputFields[i];

			if (element.type == "button" || element.type == "submit")
				continue;

			// if (!element.required && !element.getAttribute('required'))
			// continue;

			var ref_cookie_name = element.getAttribute("ref_cookie_name");

			if (!ref_cookie_name)
				ref_cookie_name = clickdesk_custom_template_prefs_type(element);
			
			if (!ref_cookie_name
					|| !ClickDesk_Storage.get_prefs(ref_cookie_name))
				return false;

		}
	} catch (e) {
	}

	return true;
}
var ClickDesk_Globals = ClickDesk_Globals
		|| {

			img_cloud_path : "//d25wh3ilibgxb0.cloudfront.net",

			// Custom default messages
			custom_messages : '{"customstatusmssgs_send_success_mssg_label": "We have saved your preferences","customstatusmssgs_agent_exceeded_time_label": "It seems to be taking longer than usual. You can continue to be on hold or leave us an offline message.","customstatusmssgs_nosession_label": "You have no active chat session at this time.","customstatusmssgs_wait_input_field_status_label": "Please wait...","customstatusmssgs_send_request_label": "Sending...","customstatusmssgs_message_field_label": "Enter your message to chat","customstatusmssgs_name_field_label": "Please fill the required fields.","customstatusmssgs_number_field_label": "Please enter the valid number.","customstatusmssgs_wait_status_label": "Please wait while we connect you to an available agent...","customstatusmssgs_email_field_label": "Enter the valid email address.","customstatusmssgs_send_failure_mssg_label": "Sending failed.Please try again...","session_queued_message":"[You are not currently on active chat with us.]"}',
			custom_messages_new : '{"customstatusmssgs_form_chat_window_call_option_error_label": "There is no active agent to respond","customstatusmssgs_chat_window_more_option_label": "More","customstatusmssgs_chat_window_more_option_send_transcript_label":"Send Transcript","customstatusmssgs_chat_window_more_option_sound_label":"Sound","customstatusmssgs_chat_window_more_option_send_file_label":"Send File", "visitor_blocked":"[Your IP has been blocked by Agent.]","session_queued_message":"[You are not currently on active chat with us.]","queued_offline_message_label" : "or you can send offline message", "no_form_data_to_submit" : "Please provide valid information to save" }',

			// Visitor Name
			visitor_name : "me",

			// Window default title
			window_title : "Can we help?",

			// Default company logo
			company_logo : "//d1gwclp1pmzk26.cloudfront.net/img/gravatar/1.png",

			// Default agent name and image URL
			agent_nick_name : "Live-chat",
			agent_pic : "//d1gwclp1pmzk26.cloudfront.net/img/gravatar/1.png",

			// Globals for future ref
			agent_id : "",
			agent_json : "",

			// Current Call option
			is_call_req_for_audio : "",

			// Co-browsing URL
			co_browse_url : "",

			// Session timeout timer
			session_timeout_timer : "",

			// Auto response message timer
			auto_response_message_timer : "",

			// Default input placeholders
			default_place_holders : {},

			// Offline prechat session id
			offline_prechat_session_id : "",

			// Store forced chat agent id globally
			forced_chat_agent_id : "",

			// Store forced chat messages
			forced_chat_messages : []

		};

var ClickDesk_Global_Users = ClickDesk_Global_Users
		|| {

			// China customer (htc)
			// 2NWhkj - test2@yopmail.com
			HTC_customers : [ "3eAIRj", "4Z5LB2", "4f3fcb", "4egief", "4fZw9a",
					"2NWhkj", "4zakS2", "508JaR", "50SfId", "4zilKA", "50KjcN",
					"50Dr0R", "505xul", "50CQXG", "564QBB", "51wO4s", "QLwkCQV1M",
					"QhIOgl0mu", "T4Td3SuA4", "SvnnHAqBc", "UAugyQ0Lw" ],

			// China pusher service countries(htc)
			HTC_pusher_service_countries : [ "india", "china", "taiwan", "unknown" ],

		};

var ClickDesk_Handlebars = {

	// Backup helpers and templates (Used when new Handlebars instance inserts
	// in
	// DOM)
	hb_tmp_backup : {},
	hb_helpers_backup : {},


	get_template : function(template_id, context) {
		var html = "";
		if (template_id === undefined)
			return "";

		// Sanatize context for XSS result
		context = Cd_Xss_Util.escape_json_values(context);

		try {

			template_id = template_id.replace("-template", "");

			if (!Handlebars.templates || !Handlebars.templates[template_id]) {
				// Re-initialize Handlebars
				this.reinitalize(template_id);
			}

			var template = ClickDeskHandlebars.templates[template_id] || Handlebars.templates[template_id];
			html = template(context);

			return convert_string_to_html(html);

		} catch (err) {
			clickdesk_log("handlebars error = " + err);
		}

		return html;

	},
	reinitalize : function() {

		if (!Handlebars.templates)
			Handlebars.templates = {};

		if(ClickDeskHandlebars.templates[key])
			return;

		var templates = this.hb_tmp_backup;
		for (key in templates) {
			if (Handlebars.templates[key])
				continue;

			Handlebars.templates[key] = templates[key];
			ClickDeskHandlebars.templates[key] = templates[key];
		}

		if (!Handlebars.helpers)
			Handlebars.helpers = {};

		var helpers = this.hb_helpers_backup;
		for (key in helpers) {
			if (Handlebars.helpers[key])
				continue;

			Handlebars.helpers[key] = helpers[key];
		}

	},

	reset_handlebars_heplers : function(){
		for(var key in Handlebars.helpers) {
			if(ClickDeskHandlebars.helpers[key]) 
				continue; 
			ClickDeskHandlebars.helpers[key] = Handlebars.helpers[key];
		}
	},

};

// Init
(function() {

	// Helper for if property condition
	/**
	 * This checks the property value with "yes"
	 * 
	 * @param name -
	 *            object key
	 */
	 //var cd_custom_popup_enabled = "";


	Handlebars.registerHelper('cd_if_property', function(name, options) {

		if (this[name] == "yes" || this[name] == "true")
			return options.fn(this);
		else
			return options.inverse(this);

	});
	// Compare
	/**
	 * This compares equality of given 2 values
	 * 
	 * @param value -
	 *            value1
	 * @param target -
	 *            value2
	 */
	Handlebars.registerHelper('cd_compare', function(value, target, options) {

		if (value == target)
			return options.fn(this);
		else
			return options.inverse(this);

	});

	/**
	 * This checks the Social prefs valid or not
	 * 
	 * @param value -
	 *            facebook, twitter links
	 */
	Handlebars.registerHelper('cd_social_prefs', function(value, options) {

		if (value.replace("http://facebook.com/", "").replace(
				"http://twitter.com/", "") == "")
			return options.fn(this);

		return options.inverse(this);

	});

	/**
	 * This converts the given epoch time to date
	 * 
	 * @param epoch_time
	 * @returns human date
	 */
	Handlebars.registerHelper('cd_epoch_time_to_human_date',
			function(epoch_time, options) {

				if (!epoch_time)
					return false;

				// Parse
				epoch_time = parseInt(epoch_time);

				if (epoch_time < 10000000000)
					epoch_time *= 1000;

				// Initialize the date
				var date = new Date();
				date.setTime(epoch_time);

				return ((date.getHours() > 12) ? date.getHours() - 12 : date
						.getHours())
						+ ":"
						+ ((date.getMinutes() < 10) ? "0" + date.getMinutes()
								: date.getMinutes())
						+ " "
						+ ((date.getHours() >= 12) ? "PM" : "AM");

			});

	/**
	 * This converts the anchor tags and smilies in given chat message
	 * 
	 * @param message -
	 *            chat message
	 * @returns converted message
	 */
	Handlebars.registerHelper('cd_on_new_message', function(message, options) {

		if (!message)
			return false;

		if (Cd_Xss_Util.is_valid_to_escape(message)) {

			// Replace text with clickdesk smilies
			message = ClickDesk_Smilies.convert_emotions(message);

			// Convert links to anchors
			message = clickdesk_convert_message_to_anchor(message);
		}

		try {
			message = message.replace(/\n/g, "<br>").replace(/\r\n/g, "<br>");
		} catch (e) {
		}

		return new Handlebars.SafeString(message);

	});
	/**
	 * This Checks the length of given array
	 * 
	 * @param dept_array -
	 *            departments array in prefs
	 */
	Handlebars.registerHelper('cd_check_length', function(dept_array, options) {

		if (dept_array.length == 1)
			return options.fn(this);

		return options.inverse(this);

	});

	/**
	 * Checks the customer language is right-to-left Script language or not Ex :
	 * Arabic, Urdu, Hebrew etc..
	 * 
	 * @param css -
	 *            styles for rtl language
	 */
	Handlebars.registerHelper('cd_get_script_direction', function(options) {

		var lang = widgetPrefsJSON.language;
		lang = (!lang) ? "english" : lang.current_language;

		var rtl_langs = new Array("hebrew", "arabic", "urdu");

		return (rtl_langs.toString().indexOf(lang) != -1) ? "rtl" : "ltr";

	});

	/**
	 * Add given styles to the visitor webpage
	 * 
	 * @param css -
	 *            styles
	 */
	// It adds some clickdesk styles to the web page
	Handlebars.registerHelper('add_cd_styles', function(css, options) {

		CD_Live_Chat.add_style_css_tag(css);

		return "";

	});

	/**
	 * Checks whether blob object supported by the browser or not
	 */
	Handlebars.registerHelper('cd_check_blob', function(options) {

		try {
			var bb = new Blob();
			return "";
		} catch (e) {
			return "disabled title='This browser not support this feature.'";

		}

	});

	/**
	 * Returns mobile chat page url
	 */
	Handlebars.registerHelper('cd_get_mobile_target_url', function(options) {
		return glcpath.replace("clickdesk-ui/browser/", "") + "cdMob?id="
				+ ClickDesk_Widget_Util.widget_id;
	});

	/**
	 * Checks given string is a substring of original
	 */
	Handlebars.registerHelper('cd_is_substring', function(original, str,
			options) {

		if (original.toLowerCase().indexOf(str.toLowerCase()) > -1)
			return options.fn(this);

		return options.inverse(this);
	});

	/**
	 * Return White label for users who has this feature
	 * 
	 * @param type -
	 *            branding type value: text, logo
	 */
	// White label feature checking
	Handlebars
			.registerHelper(
					'clickdesk_white_label',
					function(type) {

						var json = {};
						json.prefs = widgetPrefsJSON;
						json.type = type;
						json.utm_link = "http://www.clickdesk.com/clickdesk-confirm.jsp?utm_source=powered-by&utm_medium=widget&utm_campaign="
								+ location.host.replace(/\./g, "-")
								+ "&utm_me=" + widgetPrefsJSON.userid;

						var div = document.createElement('div');
						div.appendChild(ClickDesk_Handlebars.get_template(
								"white-label", json));
						return new Handlebars.SafeString(div.innerHTML.replace(
								/&amp;/g, "&"));

					});

	
	
	// Capitilize the words first letter in sentence
	Handlebars.registerHelper('cd_capitalize', function(text) {

		if (!text)
			return;

		text = text.slice(0, 1).toUpperCase() + text.slice(1)

		return text;
	});

	// Heleper to set index value to each helper
	Handlebars.registerHelper('cd_set_index', function(value) {
		this.index = Number(value + 1);
	});

	// Check property
	Handlebars.registerHelper('cd_if_checked', function(value, options) {

		if (value && (value == 'true' || value == true || value == "yes"))
			return options.fn(this);

		return options.inverse(this);
	});

	// Check property
	Handlebars.registerHelper('cd_windows_safari', function(options) {

		var browser = BrowserDetect.browser;
		var os = BrowserDetect.OS;

		// Browser
		if (browser && browser.toLowerCase() == "safari" && os
				&& os.toLowerCase() == "windows")
			return options.fn(this);

		return options.inverse(this);

	});
//var cd_custom_popup_enabled = "";
// Custom popup
Handlebars.registerHelper('custom_popup_enabled', function(options) {

	if(cd_custom_popup_enabled)
		return options.fn(this);

	return options.inverse(this);
});

/*// gdpr checkbox
Handlebars.registerHelper('checkbox_gdpr', function(options) {

	if(document.getElementById("cd_custom_checkbox1").checked){
		document.getElementById("cd_custom_checkbox1").value = "checked";
		//return "not intrested to share email";
	}
	else{
		document.getElementById("cd_custom_checkbox1").value = "unchecked";
		//return "intrested to share mailid";	
	}
	
});*/


Handlebars.registerHelper('changing_color', function(options) {

	if(widgetPrefsJSON.template_prefs.template == "agilechat_theme")
	{
		if(widgetPrefsJSON.template_prefs.color)
		return widgetPrefsJSON.template_prefs.color;
		else
			return "#00A1ED";
	}

	return options.inverse(this);
});

Handlebars.registerHelper('checking_indicator', function(indicator,options) {

	if(widgetPrefsJSON.template_prefs.template == "agilechat_theme")
	{
		if(widgetPrefsJSON.template_prefs.color)
		{
			if(indicator == "welcome")
		return widgetPrefsJSON.template_prefs.color;
		else
			return "";
	}
}
	return options.inverse(this);
});

Handlebars.registerHelper('agiletheme_email_verification', function(type,options) {
//var fields_json=JSON.parse(visitor_info.prechat_fields_array);
//widgetPrefsJSON.online_form_prefs.prechat_form_email_required;
	if(ClickDesk_Storage.get_prefs("visitor_email") || type == "response")
		return options.inverse(this);


		return options.fn(this);

	
});

Handlebars.registerHelper('hide_fields', function(options){
	if(widgetPrefsJSON.template_prefs.template == "agilechat_theme"){
		/*if (ClickDesk_Storage
				.get_prefs(ClickDesk_Proactive_Handler))
		{*/
			if (ClickDesk_Storage
				.get_prefs(ClickDesk_Proactive_Handler.visitor_details_cookie))
			return "none !important";
		else
			return "block !important";
	//}
	}
	

});


Handlebars.registerHelper('mandatory_fields', function(options) {
//var fields_json=JSON.parse(visitor_info.prechat_fields_array);
//widgetPrefsJSON.online_form_prefs.prechat_form_email_required;
	if(widgetPrefsJSON.online_form_prefs.prechat_form_email_required == "true" || widgetPrefsJSON.online_form_prefs.prechat_form_name_required == "true" || widgetPrefsJSON.online_form_prefs.prechat_form_show_custom_field_required == "true")
		return options.fn(this);
	
		return options.inverse(this);
	
});

Handlebars.registerHelper('check_cookie', function(options) {
//var fields_json=JSON.parse(visitor_info.prechat_fields_array);
	if(ClickDesk_Storage.get_prefs("visitor_email"))
		return "";


		return "hidden !important";

	
});
Handlebars.registerHelper('status_enable_disable', function(options) {
if(ClickDesk_Storage.get_prefs("visitor_email") )
	return "";

return "disabled";

});

	// Check property
	Handlebars.registerHelper('cd_test_prefs', function(prefs, options) {
		clickdesk_log(prefs);
	});

	// Check property
	Handlebars
			.registerHelper(
					'cd_is_customer_enabled',
					function(options) {

						var user_id = widgetPrefsJSON.userid;

						// Browser
						if (user_id
								&& (user_id == "2rDk1z" || user_id == "MC39xFuka" || user_id == "1qE" || user_id == "22hxjr"))
							return options.inverse(this);

						return options.fn(this);

					});

})();
/**
 * Prefs utility functions
 */
var ClickDesk_Prefs_Util = {

	/**
	 * Decodes JSON Object
	 */
	decode_json : function(json) {
		if (!json)
			return;
		for (key in json) {
			if (typeof json[key] == "object") {
				ClickDesk_Prefs_Util.decode_json(json[key]);
			} else {
				try {
					json[key] = json[key].replace(/&#39;/g, "'").replace(
							/&#37;/g, "%").replace(/&#34;/g, '\"').replace(
							/\r\n/g, "<br>").replace(/\\r\\n/g, "<br>")
							.replace(/\r/g, "<br>").replace(/\r/g, "<br>");

				} catch (err) {
				}
			}
		}

		return json;
	},

	/**
	 * Refills missed prefs
	 */
	refill_missed_prefs : function() {

		// Refill missed prefs
		if (!widgetPrefsJSON)
			return false;

		if (!widgetPrefsJSON["online_form_prefs"]) {
			var json = {};
			json.prechat_header_label = "We are online. Chat with us.";
			json.prechat_form_name_required = "no";
			json.prechat_form_email_required = "no";
			json.prechat_status_label = "Please enter your name and email address to begin chatting with us.";
			json.prechat_form_name_label = "Name";
			json.prechat_form_email_label = "Email";
			json.prechat_form_gdpr_label = "checkbox";
			json.prechat_form_message_label = "Message";
			json.prechat_form_button_label = "Initiate Chat";
			json.prechat_form_text1_label = "Text1";
			json.prechat_form_text2_label = "Text2";
			json.prechat_form_text3_label = "Text3";
			json.prechat_form_text4_label = "Text4";
			json.prechat_form_text1_required = "no";
			json.prechat_form_text2_required = "no";
			json.prechat_form_text3_required = "no";
			json.prechat_form_text4_required = "no";



			widgetPrefsJSON["online_form_prefs"] = json;
		}
		if (!widgetPrefsJSON["offline_form_prefs"]) {
			var json = {};
			json.offline_header_label = "We are offline.";
			json.offline_form_name_required = "yes";
			json.offline_form_email_required = "yes";

			json.offline_status_label = "Please leave your name and email address, we will get back to you soon. Thanks.";
			json.offline_form_name_label = "Name";
			json.offline_form_email_label = "Email";
			json.offline_message_label = "Message";
			json.offline_form_button_label = "Send Message";

			widgetPrefsJSON["offline_form_prefs"] = json;

		}
		if (!widgetPrefsJSON["emailtovisitor_form_prefs"]) {
			var json = {};
			json.emailtovisitor_form_header_label = "Email me this chat transcript";
			json.emailtovisitor_form_status_message_label = "Please enter your name and email to receive the full transcript after the end of the chat session.";

			json.emailtovisitor_form_name_label = "Name";
			json.emailtovisitor_form_email_label = "Email";
			json.emailtovisitor_form_send_button_text = "Send";
			json.emailtovisitor_form_cancel_button_text = "Cancel";

			widgetPrefsJSON["emailtovisitor_form_prefs"] = json;
		}
		if (!widgetPrefsJSON["ticket_form_prefs"]) {
			var json = {};
			json.ticket_form_header_label = "Create Ticket";
			json.ticket_form_status_message_label = "You can create your support ticket by providing your name, email address and message.";

			json.ticket_form_name_label = "Name";
			json.ticket_form_email_label = "Email";
			json.ticket_form_message_label = "Enter Message";
			json.ticket_form_send_button_text = "Submit";
			json.ticket_form_send_success_text = "Thanks for dropping by. We shall get back to you soon.";

			widgetPrefsJSON["ticket_form_prefs"] = json;


		}
		
		/*if(!widgetPrefsJSON["customchatpopup_form_prefs"]){
			var json = {};
			json.customchat_popup_header_label="Create Header";
			json.customchat_popup_description="You can providing your name, email address and message";
			json.customchat_form_name_label="Name";
			json.customchat_form_email_label="Email";
			json.customchat_yes_message_label="Enter Message";
			json.customchat_no_message_label="Enter Message";
			widgetPrefsJSON["customchatpopup_form_prefs"]=json;
		}*/

		// Check departments and add to helpdesk prefs
		if (widgetPrefsJSON["departments"]) {
			widgetPrefsJSON["ticket_form_prefs"].departments = widgetPrefsJSON["departments"];
		}

		// Set empty socail prefs (Note : If we delete this we will get lot of
		// errors)
		if (!widgetPrefsJSON["social_network"]) {
			widgetPrefsJSON["social_network"] = {
				"twitter_url" : "",
				"facebook_url" : ""
			};
		}

		// Set social networks
		if (widgetPrefsJSON["social_network"]
				&& !widgetPrefsJSON["social_networks"]) {
			widgetPrefsJSON["social_networks"] = widgetPrefsJSON["social_network"];
		}

	},

	/**
	 * Some images are having relative paths. Adding cloud path to those images
	 */
	update_bubble_prefs : function() {
		try {

			// Change eyecatcher image prefs
			var bubblePres = widgetPrefsJSON.bubble_prefs;
			if (bubblePres && bubblePres.offline_image
					&& bubblePres.online_image) {
				var image_path = "//d1gwclp1pmzk26.cloudfront.net/", offline_image = bubblePres.offline_image, online_image = bubblePres.online_image;

				bubblePres.offline_image = (offline_image.indexOf("//") == 0 || offline_image
						.indexOf("http") == 0) ? bubblePres.offline_image
						: (image_path + bubblePres.offline_image);

				bubblePres.online_image = (online_image.indexOf("//") == 0 || online_image
						.indexOf("http") == 0) ? bubblePres.online_image
						: (image_path + bubblePres.online_image);

				widgetPrefsJSON.bubble_prefs = bubblePres;

			}
		} catch (e) {
		}

	}

};// ClickDesk prototype
var CD_Live_Chat = {

	/**
	 * Shows Clickdesk chat window
	 */
	show: function (evt) {

		// Check is it in minimized state
		if (ClickDesk_DOM.has_class('clickdesk_b', 'min')) {

			// Show Current state window
			ClickDesk_Window_Callback.show();

		} else {

			// Clear the chat popup
			ClickDesk_DOM.wrap('#clickdesk_session')[0].innerHTML = '';

			// Check Session
			ClickDesk_Widget_Session.check_and_render_active_session();

		}

		return ClickDesk_DOM.cancel_event(evt);
	},

	/**
	 * Closes clickdesk chat
	 */
	close: function (evt) {

		ClickDesk_Proactive_Handler.is_session_exists = false;

		// Hide window
		ClickDesk_Window_Callback.hide();

		// Delete the session
		ClickDesk_Widget_Session.delete_session("visitor_closed");

		return ClickDesk_DOM.cancel_event(evt);

	},

	/**
	 * minimizes chat window
	 */
	minimize: function (evt) {

		// Hide window
		ClickDesk_Window_Callback.minimize();

		return ClickDesk_DOM.cancel_event(evt);

	},

	/**
	 * loads channel js file
	 */
	load_chanelJS: function (callback) {

		var ClickDesk_Api_Js = this.get_channel_api_js();

		// Firebase implementation
		if (ClickDesk_Widget_Channel.is_firebase_using) {
			ClickDesk_Widget_Util.loadJS(ClickDesk_Api_Js, function () {
				if (callback)
					callback();
			});
			return;
		}

		// Check google object and load if there is no object
		try {

			if (typeof goog.appengine == "object") {
				if (callback)
					callback();

				return;
			}

			throw new Error('No appengine');

		} catch (e) {

			ClickDesk_Widget_Util.loadJS(ClickDesk_Api_Js, function () {
				if (callback)
					callback();
			});
		}
	},

	get_channel_api_js: function () {
		if (ClickDesk_Widget_Channel.is_firebase_using) {
			return "https://www.gstatic.com/firebasejs/4.5.1/firebase.js";
		}

		var js_path = (_glc.version) ? (glcpath.replace(
				"/clickdesk-ui/browser/", "") + "/_ah/channel/jsapi") :
			"https://talkgadget.google.com/talkgadget/channel.js";

		var china_users = ClickDesk_Global_Users.HTC_customers;

		for (var i = 0; i <= china_users.length; i++) {
			if (widgetPrefsJSON.userid == china_users[i]) {
				js_path = "https://my.clickdesk.com/js/channel.js";
				return js_path;
			}
		}

		return js_path;
	},

	/**
	 * Gets user selected widget color
	 */
	get_theme_color: function (color) {

		// Theme colors (Need to change in future if themes are changed)
		var theme_colors = ['007034', '0d8957', '2b9464', '3da179', '399b22',
			'5e8c00', '83bf17', '83aa30', '7ea333', '8bad39', '8c8535',
			'999900', 'b8be1c', 'aba918', 'b1eb00', 'bff073', 'ccc51c',
			'd0c91f', 'cbbb58', 'f7f960', 'ff9700', 'ffba00', 'ffac00',
			'fe9601', 'ff9d33', 'ffc833', 'e8b71a', 'ffe600', 'fce014',
			'ffd900', 'f5df65', 'f0a830', 'ffca00', 'ffd464', 'ffc300',
			'ffd041', 'f07818', 'ff8400', 'cc6600', '9c0f5f', 'b9006e',
			'bd007d', 'cc0063', 'd40e52', 'aa2159', 'e03d89', 'e664a1',
			'ff66cc', 'ff85cb', 'e8a0b8', 'cd7881', 'd94e67', 'bb0f00',
			'de0202', 'cd1719', 'c91b26', 'ff2321', 'ed1c24', 'e53535',
			'dc2742', 'db3340', 'd93240', 'ff432e', 'ff534b', 'dc403b',
			'de4d4e', 'ff4c65', 'e94c6f', 'c15661', 'e74700', 'ff5108',
			'f05a28', 'f2671f', 'e95d22', 'da4624', 'd14d28', 'f05b47',
			'de593a', 'f76835', 'ed7d4e', 'd75c37', 'd96459', 'de5842',
			'c05949', 'fb6648', 'f98a5f', 'df514c', 'e45f56', 'fb6964',
			'f15d58', 'eb7260', 'f26547', 'ef9950', 'f2ae72', '3a0256',
			'5c00bd', '442d65', '3f0082', '660066', '60047a', '86269b',
			'5c2d50', '5e3448', '775ba3', '8b8dd2', '6e70c7', '62587c',
			'74aaf7', '4d6684', '3475a7', '008bba', '14b8b1', '29aba4',
			'4aaaa5', '009d97', '17a697', '25aaa0', '28be9b', '02d0ac',
			'41d4cf', '02c9c9', '5db89d', '77ba9b', '91c5a9', '78c0a8',
			'00b796', '1fda9a', 'a3d39c', '588c73', '59c4c5', '8fd4d9',
			'92dce0', '53bbf4', '33afff', '1499d3', '28abe3', '0b99bc',
			'1ba3e1', '009bff', '0c98cf', '0aa0d9', '6e9ecf', '3a9ad9',
			'59c8df', '0dc9f7', '00c8f8', '00c8f9', '05bde9', '00d2f1',
			'00ccd6', '017280', '241b3b', '021542', '160a47', '10206b',
			'1352a2', '3b5998', '293e6a', '20457c', '015391', '817996',
			'638ca6', '6991ac', '7195a3', '348e99', '5f9da1', '609194',
			'0f5959', '3b3a35', '363635', '3d3d3d', '333333', '333332',
			'525252', '424242', '5a6a62', '818181', '7f7f7f', '6c6e70',
			'666666', '67727a', '3c4554', '354458', '35404f', '274257',
			'7c0f0f', '6e0000', '591e23', '542733', '57102c', '6d2908',
			'643200', '753a48', '8c4646', '954f47', 'a68572', '2d3033',
			'000000', '281400', '333300', '2b2301', '49352a', '493621',
			'5e412f', '704f2d', '73503c', '82683b', 'a68f58', 'afa577',
			'a79e65', 'b6a754', 'b4830b', 'c39c3c'
		];

		try {
			// Check in them colors
			if (!CLICKDESK_CHAT_WINDOW_UI.contains(theme_colors, color.replace(
					'#', '')))
				color = "#241b3b";
		} catch (err) {}

		// Set color property
		widgetPrefsJSON.template_prefs.color = color;

		return color;
	},

	/**
	 * Loads chat widget css file
	 */
	load_template_css_file: function () {

		var color = widgetPrefsJSON.template_prefs.color;

		// Check theme color
		color = this.get_theme_color(color);

		// Get template type(Small - Medium - Big)
		var template_type = widgetPrefsJSON.template_prefs.template;
		var css_template_type = (!template_type || (template_type != "small" && template_type != "medium")) ? "" :
			"-" + template_type;

		clickdesk_log("css_template_type = " + css_template_type);

		var css_file = ClickDesk_CloudFront_URL + "/" +
			CLOUD_FRONT_VERSION + '/widget-css/social/packed/' + color.replace('#', '') +
			css_template_type + '.css';

		var single_color_themes = ["lighten_theme", "custom"];
		for (var i = 0; i < single_color_themes.length; i++) {

			if (!template_type || template_type != single_color_themes[i])
				continue;

			css_file = ClickDesk_CloudFront_URL + "/" + CLOUD_FRONT_VERSION+ "/widget-css/clickdesk_" +
				template_type + "6.css";
			break;

		}

		if (template_type == "ultra_theme")
			css_file = ClickDesk_CloudFront_URL + "/" + CLOUD_FRONT_VERSION +
			'/widget-css/ultra/packed/' + color.replace('#', '') +
			'.css';
		if (template_type == "agilechat_theme")
			css_file = ClickDesk_CloudFront_URL + "/" + CLOUD_FRONT_VERSION +
			'/widget-css/agile/packed/'+color.replace('#', '')+'.css';
		// css_file='http://localhost:8888/css-files/'+color.replace('#', '')+'.css';

		if (template_type.indexOf("minimalistic") == 0)
			css_file = ClickDesk_CloudFront_URL + "/" + CLOUD_FRONT_VERSION +
			'/widget-css/minimalistic/packed/' +
			color.replace('#', '') + '.css';

		if (template_type.indexOf("webrtc_theme") == 0)
			css_file = ClickDesk_CloudFront_URL + "/" + CLOUD_FRONT_VERSION +
			'/widget-css/modern/packed/' +
			color.replace('#', '') + '.css';

		// Load seperate css file to popout window
		if (ClickDesk_Window_Popout.is_window_in_popup()) {

			var f = "social-mobile";
			f = (template_type == "ultra_theme") ? "ultra-mobile" :
				((template_type == "webrtc_theme") ? "modern-mobile" : f);

			css_file = ClickDesk_CloudFront_URL + "/" + CLOUD_FRONT_VERSION + "/widget-mobile-css/" +
				f + "/packed/" + color.replace('#', '') +
				css_template_type + '.css';

		}

		// Load CSS file
		this.load_css_file_url(css_file);

	},

	/**
	 * Loads css file URL
	 */
	load_css_file_url: function (file_path) {

		// Get reference of link tag
		var file_ref = document.createElement("link");

		// Set type
		file_ref.setAttribute("type", "text/css");
		file_ref.setAttribute("rel", "stylesheet");
		// Set css file path
		file_ref.setAttribute("href", file_path);

		// Append css to DOM
		if (file_ref) {
			document.getElementsByTagName("head")[0].appendChild(file_ref);
		}

	},

	/**
	 * Adds style tag to head
	 */
	add_style_css_tag: function (css) {

		var d = document,
			style = d.createElement('style');
		d.getElementsByTagName('head')[0].appendChild(style);
		style.setAttribute('type', 'text/css');

		try {
			style.innerHTML = css;
		} catch (e) {
			style.styleSheet.cssText = css;
		}

	},

	/**
	 * Returns Customization prefs
	 */
	get_custom_prefs: function () {
		try {

			var prefs = ClickDesk_Widget_Util.parse_widget_prefs();
			return prefs.custom_prefs[ClickDesk_Widget_Util.widget_id];

		} catch (err) {}

		return "";

	},

	/**
	 * Loads template ui based on window preferences
	 */
	render_clickdesk_ui: function () {

		// Replace special charecters in JSON
		widgetPrefsJSON = ClickDesk_Prefs_Util.decode_json(widgetPrefsJSON);

		// Add helpers to new ClickDesk handlebars reference
		ClickDesk_Handlebars.reset_handlebars_heplers();

		// Update bubble prefs
		ClickDesk_Prefs_Util.update_bubble_prefs();

		// Replace special charecters in JSON
		ClickDesk_Prefs_Util.refill_missed_prefs();

		// Set referrer
		ClickDesk_Visitor_Info.get_referrer_link();

		// Show Bubble
		clickdesk_construct_bubble();

		// Create popup
		clickdesk_render_chat_window();

		// Check doctype
		clickdesk_check_doctype_in_ie();

	}

};/**
 * Widget Call Option. Used WebRtc tech to initiate call between browser to
 * browser
 */
var ClickDesk_Call = {

	// Window Ref
	call_window : "",

	// Call request error timer
	error_timer : "",

	/**
	 * Checks call support in current browser
	 */
	browser_has_call_support : function() {

		var func = (navigator.getUserMedia || navigator.webkitGetUserMedia
				|| navigator.mozGetUserMedia || navigator.msGetUserMedia);

		// treat lack of browser support like an error
		if (!func)
			return false;

		return true;

	},
	/**
	 * Process signals from channel
	 */
	handle_message_signals : function(msg) {

		// Check same session visitor
		var clientId = ClickDesk_Widget_Pusher_Visitor
				.get_visitor_unique_token();

		if (msg.client_id && clientId !== msg.client_id) {
			return false;
		}

		var from = msg.from;
		if (from && from == "visitor")
			return false;

		// Delete from key from Object
		delete msg.from;

		if (msg.type == "web_rtc_request_response") {

			// Check status
			var status = msg.status;
			if (!status)
				return false;

			// Show error if he is busy with other
			// visitor
			if (status == "busy") {

				this
						.show_call_error("Seems agent is busy with some other call.");
				return;
			}
			if (status == "live") {
				this
						.show_call_error("You are already on an active call with us.");
				return;
			}

			return false;

		} else if (msg.type == "web_rtc_close") {

			// Close rtc connection
			return false;

		} else if (msg.type === 'bye' && pc) {
			return false;

		} else if (msg.type === 'agent_ready') {

			// Everything is OK.

		} else if (msg.type === 'agent_declined') {

			this.show_call_error("Agent has declined your video chat request.");

		} else if (msg.type === 'agent_closed'
				&& (!this.call_window || this.call_window.closed)) {

			this.show_call_error("Agent has declined your video chat request.");

		}

	},

	// Open Call popup window
	open_window : function(accepted) {

		if (this.call_window && !this.call_window.closed) {
			this.call_window.focus();
			return this.call_window;
		}

		// Open in new window
		this.call_window = window.open(this.create_url(accepted),
				'ClickDesk_Window', 'width=400,height=300,fullscreen=1');

		this.call_window.focus();

		if (accepted) {
			var type = (ClickDesk_Globals.is_call_req_for_audio == "audio") ? "voice"
					: "video";
			ClickDesk_GA.trigger_event("visitor_answered_" + type,
					ClickDesk_Globals.agent_nick_name);
		}

	},

	focus_window : function() {

		try {

			if (!this.call_window || this.call_window.closed)
				return;

			ClickDesk_Call.call_window.blur();
			setTimeout(function() {
				ClickDesk_Call.call_window.focus();
			}, 1);

		} catch (e) {
			clickdesk_log(e);
		}

	},

	// Create a popup window url
	create_url : function(accepted) {

		// Get Active Session
		var sessionJSON = ClickDesk_Widget_Session.get_active_session();
		var sessionId = eval("sessionJSON."
				+ ClickDesk_Widget_Session.session_id);

		// return CLICKDESK_SERVER_PATH.replace("https:", "http:")
		// + "/conference?s_id=" + sessionId + "&s_type="
		// + ClickDesk_Globals.is_call_req_for_audio + "&owner=visitor"
		// + ((accepted) ? "&initiator=a" : "");

		var url = CLICKDESK_SERVER_PATH;
		if (CLICKDESK_SERVER_PATH.indexOf("localhost") == -1)
			url = CLICKDESK_SERVER_PATH.replace("http:", "https:");

		return url + "/conference?s_id=" + sessionId + "&s_type="
				+ ClickDesk_Globals.is_call_req_for_audio + "&owner=visitor"
				+ ((accepted) ? "&initiator=a" : "");

	},

	// Toggle error message
	show_call_error : function(message, type) {

		message = (!message) ? "There is no active agent to respond." : message;

		if (this.error_timer)
			return false;

		var element = ClickDesk_DOM.wrap("#cd_valid_session_for_audio_video")[0];
		if (!element)
			return false;

		element.innerHTML = message;
		var css = {
			'display' : 'block',
			"color" : "red",
			"textAlign" : "left"
		};
		if (type && type == "success") {
			css.color = "#333";
			css.textAlign = "center";
		}

		ClickDesk_DOM.set_style_by_object(element, css);

		if (type && type == "success")
			return false;

		this.error_timer = setTimeout(function() {
			ClickDesk_Call.hide_error();
		}, 6000);

	},

	// Hide error
	hide_error : function() {

		var element = ClickDesk_DOM.wrap("#cd_valid_session_for_audio_video")[0];
		if (!element)
			return false;

		element.style.display = "none";

		clearTimeout(this.error_timer);
		this.error_timer = undefined;

	}

};var Clickdesk_Client_Connection_Ping_Pong = {

	is_socket_instance : true,
	timer : "",
	last_msssg_recieved_time : "",
	get_channel_token : function() {

		var sessionJSON = ClickDesk_Widget_Session.get_active_session();
		if (!sessionJSON)
			return;

		return sessionJSON.visitor_token;

	},

	start_timer : function() {

		// Clear idle state timer
		this.clear_timer();

		// Set timer call to 30secs
		this.timer = setTimeout(function() {

			var token = Clickdesk_Client_Connection_Ping_Pong
					.get_channel_token();
			if (!token)
				return;

			// Params
			var json = {};
			json.visitor_token = token;

			// Send request - we will now wait for response to come
			// back from the server
			ClickDesk_JSONP.send_request(CLICKDESK_SERVER_PATH
					+ "/rest/visitor/channel/ping-pong", json, function(
					response) {

				// Reset idle timer
				if (!Clickdesk_Client_Connection_Ping_Pong.is_channel_dead()) {
					return Clickdesk_Client_Connection_Ping_Pong.start_timer();
				}

				// Reconnect
				Clickdesk_Client_Connection_Ping_Pong.reconnect();

			});

		}, 30000);

	},

	clear_timer : function() {

		// Clear interval
		if (this.timer)
			clearTimeout(this.timer);

	},
	/**
	 * Re-Initiate idle timer
	 */
	reset_Ping_Pong_Timer : function() {

		/*if (!this.is_socket_instance)
			return; */

		// Update the last message received time
		this.update_last_message_received_time();

		// Start timer again
		this.start_timer();

	},

	/**
	 * Updates last message received time
	 */
	update_last_message_received_time : function() {
		this.last_msssg_recieved_time = new Date().getTime();
	},

	is_channel_dead : function() {

		// Compare time difference exceeds 1 minute
		var current_time_in_millisec = new Date().getTime();
		var time_diff = current_time_in_millisec
				- this.last_msssg_recieved_time;

		return (time_diff > (1000 * 60));

	},
	reconnect : function() {

		clickdesk_log("Reconnecting channel, stay at idle mode");

		// Reconnect to server to get new client id
		ClickDesk_Widget_Channel.get_channel_token(function() {

			// Get active chat transcript
			ClickDesk_Widget_Session.check_and_render_active_session();

		});

	}

};/**
 * Channel Handler
 */
var ClickDesk_Widget_Channel = {
	is_firebase_using : true,
	
	// Google channel cookie name
	channel_id : "channel_id",
	visitor_token : "",
	is_channel_closed : false,

	// Google socket reference
	widget_socket : "",

	// Check is google channel service disabled user
	is_channel_service_restricted_user : function() {

		try {
			if(true)
				return true;

			// Service req user keys
			var serviceRequestedUsers = ClickDesk_Global_Users.HTC_customers;

			// Channel service restricted countries
			var serviceRequestedCountries = [ "india", "china", "taiwan", "unknown" ];

			if (serviceRequestedUsers.indexOf(widgetPrefsJSON.userid) != -1
					&& serviceRequestedCountries.indexOf(ClickDesk_Visitor_Info
							.getGeoPrefs("country").toLowerCase()) != -1)
				return true;

		} catch (e) {
		}

		return false;

	},

	get_channel_token : function(func_callback) {

		// Get Token First (Channel) and then connect
		var json = {};
		json.widget_id = ClickDesk_Widget_Util.widget_id;
		var token = Clickdesk_Client_Connection_Ping_Pong.get_channel_token();
		if (token)
			json.visitor_token = token;

			//TODO:Soumya kept server path as static
		var path = "https://my.clickdesk.com" + "/rest/visitor";
		path += (!token) ? "/chat/newtoken" : "/channel/clientid";

		clickdesk_log("Connecting to server for token and channel id");

		// Send snack request
		ClickDesk_JSONP.send_request(path, json, function(data) {

			var response = data.response;
			if (!response)
				return;

			clickdesk_log(response);

			// Sets Visitor token for future reference
			ClickDesk_Widget_Channel.visitor_token = response.visitor_token;

			// Establish Channel
			ClickDesk_Widget_Channel.create_socket(response.channel_id,
					func_callback);

			ClickDesk_Widget_Channel.status = "success";//TODO:Soumya remove this future.


		});

	},

	close_socket : function() {

		// Call close on current socket
		if (this.widget_socket) {
			try {
				this.widget_socket.close();
			} catch (e) {
			}
			try {
				this.widget_socket.off();
			} catch (e) {
			}
		}

		if (ClickDesk_Widget_Pusher_Channel_Obj_Channel
				&& ClickDesk_Widget_Channel
						.is_channel_service_restricted_user()) {
			ClickDesk_Widget_Pusher_Visitor.close_channel();
			return;
		}

		Clickdesk_Client_Connection_Ping_Pong.reset_Ping_Pong_Timer();

	},

	create_socket : function(socket_id, func_callback) {
		console.log("222222222222222222");

		console.log("in create socket..")
		if (!socket_id || this.is_channel_service_restricted_user()) {

			Clickdesk_Client_Connection_Ping_Pong.is_socket_instance = false;
			/* ClickDesk_Widget_Pusher_Visitor.channal_subscribe(
					ClickDesk_Widget_Channel.visitor_token, func_callback); */  //TODO : Soumya 

					
					ClickDesk_Widget_Pusher_Visitor.channal_subscribe(
						widgetPrefsJSON.domain_id + "-" + widgetPrefsJSON.created_by, func_callback);
			return;
		}

		// Store in Cookie
		ClickDesk_Storage.set_prefs(ClickDesk_Widget_Channel.channel_id,
				socket_id);

		this.close_socket();
		
		if(ClickDesk_Widget_Channel.is_firebase_using) { 
			ClickDesk_Firebase_Widget_Channel.create_socket(socket_id, func_callback);
			return;
		}
		
		// If connection is opened
		onOpened = function() {

			clickdesk_log('Channel opened ' + socket_id);

			// We don't wait till the channel is established
			if (func_callback)
				func_callback(ClickDesk_Widget_Channel.visitor_token);

			// Save client id in db for future reference
			Clickdesk_Client_Connection_Ping_Pong.reset_Ping_Pong_Timer();

		};
		// If message received
		onMessage = function(evt) {

			// clickdesk_log(evt);

			var dataJSON = JSON.parse(evt.data);

			// Call message received on Session
			try {

				ClickDesk_Channel_Message_Listener.listen(dataJSON);

				// Reset connection error
				Clickdesk_Client_Connection_Ping_Pong.reset_Ping_Pong_Timer();

			} catch (e) {
				clickdesk_log(e);
			}

		};

		// Error
		onError = function() {

			ClickDesk_Widget_Channel.is_channel_closed = true;
			clickdesk_log('error in channel');

		};

		// Close
		onClose = function() {
			ClickDesk_Widget_Channel.is_channel_closed = true;
			clickdesk_log('onClose close');
		};

		// Load channel js and establish channel
		CD_Live_Chat.load_chanelJS(function() {

			clickdesk_log("Establishing Channel " + socket_id);

			// Create google channel
			var cd_google_channel = new goog.appengine.Channel(socket_id);

			ClickDesk_Widget_Channel.widget_socket = cd_google_channel.open();
			ClickDesk_Widget_Channel.widget_socket.onopen = onOpened;
			ClickDesk_Widget_Channel.widget_socket.onmessage = onMessage;
			ClickDesk_Widget_Channel.widget_socket.onerror = onError;
			ClickDesk_Widget_Channel.widget_socket.onclose = onClose;

		});

	}

};/**
 * Channel Handler
 */
;var ClickDesk_Firebase_Widget_Channel = {
	create_socket : function(socket_id, func_callback) {

		// If connection is opened
		onOpened = function() {

			clickdesk_log('Channel opened ' + socket_id);

			// We don't wait till the channel is established
			if (func_callback)
				func_callback(ClickDesk_Widget_Channel.visitor_token);

			// Save client id in db for future reference
			Clickdesk_Client_Connection_Ping_Pong.reset_Ping_Pong_Timer();

		};
		// If message received
		onMessage = function(evt) {

			// clickdesk_log(evt);
			console.log("evt" , evt);
			if(!evt)
				return;

			// Call message received on Session
			try {
				
				// var dataJSON = JSON.parse(evt);
				var dataJSON = evt;
				try {
					ClickDesk_Channel_Message_Listener.listen(dataJSON);
				} catch (e) {
					clickdesk_log(e);
				}
				
				// Reset connection error
				Clickdesk_Client_Connection_Ping_Pong.reset_Ping_Pong_Timer();

			} catch (e) {
				clickdesk_log(e);
			}

		};

		// Error
		onError = function() {

			ClickDesk_Widget_Channel.is_channel_closed = true;
			clickdesk_log('error in channel');

		};

		// Close
		onClose = function() {
			ClickDesk_Widget_Channel.is_channel_closed = true;
			clickdesk_log('onClose close');
		};

		// Load channel js and establish channel
		CD_Live_Chat.load_chanelJS(function() {
			ClickDesk_Firebase_Widget_Channel.initiliaze();
			
			clickdesk_log("Establishing Channel " + socket_id);

			// Create firebase channel
		    // sign into Firebase with the token passed from the server
		    /*firebase.auth().signInWithCustomToken(socket_id).catch(function(error) {
		      console.log('Login Failed!', error.code);
		      console.log('Error message: ', error.message);
		    });*/
		    // [END auth_login]

		    // [START add_listener]
		    // setup a database reference at path /channels/channelId
		    ClickDesk_Widget_Channel.widget_socket = firebase.database().ref('channels/' + ClickDesk_Widget_Channel.visitor_token);
		    // add a listener to the path that fires any time the value of the data changes
		    ClickDesk_Widget_Channel.widget_socket.on('value', function(data) {
		      onMessage(data.val());
		    });
		    
		    // [END add_listener]
		    onOpened();
		    // let the server know that the channel is open
		    
		    var connectedRef = firebase.database().ref(".info/connected");
		    connectedRef.on("value", function(snap) {
		      if (snap.val() === true) {
		        console.log("connected");
		      } else {
		    	 console.log("not connected");
		    	 // onClose();
		      }
		    });
		});
	},

	initiliaze : function() {
		// Initialize Firebase
		var config = {
			apiKey : "AIzaSyCb649cHzoP3vdQuJyelghKQG56G2ZnYgU",
			authDomain : "clickdeskchat.firebaseapp.com",
			databaseURL : "https://clickdeskchat.firebaseio.com",
			projectId : "clickdeskchat",
			storageBucket : "",
			messagingSenderId : "724120312339"
		};
		firebase.initializeApp(config);
	}
};/**
 * Message Util
 * 
 * @param sessionId
 * @param message
 */
var ClickDesk_Message_Auto_Response = {

	set_auto_response_prefs : function() {

		// Get prechat form prefs to hide this window
		var prechat_form_prefs = widgetPrefsJSON.online_form_prefs;

		if (!prechat_form_prefs
				|| prechat_form_prefs.chat_auto_response_required != "true"
				|| !prechat_form_prefs.chat_auto_response_message
				|| !prechat_form_prefs.chat_auto_response_time)
			return;

		// ClickDesk_Agent_Images
		var cookie_pref_name = "cd_auto_response_message_time";

		ClickDesk_Storage.set_prefs(cookie_pref_name, new Date().getTime()
				+ (prechat_form_prefs.chat_auto_response_time * 1000));

		this.initilaize_message_auto_response_timer();

	},

	delete_auto_response_prefs : function() {

		ClickDesk_Storage.delete_prefs("cd_auto_response_message_time");

	},

	get_auto_response_prefs : function() {

		return ClickDesk_Storage.get_prefs("cd_auto_response_message_time");

	},

	/**
	 * Check and initialize auto response message timer
	 */
	initilaize_message_auto_response_timer : function() {

		this.clear_message_auto_response_timer();

		// Get prechat form prefs to hide this window
		var prechat_form_prefs = widgetPrefsJSON.online_form_prefs;

		if (!prechat_form_prefs
				|| prechat_form_prefs.chat_auto_response_required != "true"
				|| !prechat_form_prefs.chat_auto_response_message
				|| !prechat_form_prefs.chat_auto_response_time) {

			ClickDesk_Message_Auto_Response.delete_auto_response_prefs();
			return;
		}

		ClickDesk_Globals.auto_response_message_timer = setTimeout(
				function() {

					var auto_response_time = ClickDesk_Message_Auto_Response
							.get_auto_response_prefs();

					// Check session and chat handled by agent
					if (!auto_response_time
							|| !ClickDesk_Widget_Session.get_active_session()
							|| ClickDesk_Globals.agent_json)
						return;

					if (auto_response_time > new Date().getTime()) {

						ClickDesk_Message_Auto_Response
								.initilaize_message_auto_response_timer();
					} else {

						var name = (!prechat_form_prefs.chat_auto_response_name) ? "Agent"
								: prechat_form_prefs.chat_auto_response_name;

						var message = prechat_form_prefs.chat_auto_response_message
								.replace(/<br\s*[\/]?>/gi, "\n");

						// Append to the body
						ClickDesk_Chat_Window_Util
								.append_message(message, name);

						ClickDesk_Message_Auto_Response
								.delete_auto_response_prefs();

						return;

					}

				}, 5000);

	},

	clear_message_auto_response_timer : function() {

		clearTimeout(ClickDesk_Globals.auto_response_message_timer);

	}

};
/**
 * Message filter
 * 
 * @param dataJSON
 * @returns
 */
var ClickDesk_Widget_Command_Util = {

	call_inviting_message : "[Agent is inviting you to a call. Would you like to join the call?]<br/><br/><a style=\"margin-left: 0px!important;;background: #5877b7!important;;color: #ffffff!important;;border-radius: 5px!important;;padding:3px 5px!important;;font-size: 11px!important;display: inline-block;\" onclick=\"clickdesk_process_visitor_action_on_agent_call_req(this,'accepted', '%request_type%');return false;\">Accept</a> <a style=\"background: #da4f49!important;;color: #ffffff!important;;border-radius: 5px!important;;padding:3px 5px!important;;font-size: 11px!important;display: inline-block;\" onclick=\"clickdesk_process_visitor_action_on_agent_call_req(this, 'declined');\">Decline</a>",
	cobrowse_message : "[Agent has sent you a link to open. Would you like to accept the request and open the page? Please note that the link will open a new window.]<br/><br/><a target='_blank' href='$target_loc' style=\"margin-left: 0px!important;;background: #5877b7!important;;color: #ffffff!important;;border-radius: 5px!important;;padding:3px 5px!important;;font-size: 11px!important;display: inline-block;\" onclick=\"clickdesk_co_browse_url(this, 'accept');\">Yes</a> <a style=\"background: #da4f49!important;;color: #ffffff!important;;border-radius: 5px!important;;padding:3px 5px!important;;font-size: 11px!important;display: inline-block;\" onclick=\"clickdesk_co_browse_url(this, 'declined');\">No</a>",

	execute_command : function(dataJSON) {

		try {

			// Get message type
			var messageType = dataJSON.message_type;
			// Message
			var message = dataJSON.new_chat_message;

			// Typing notifications
			if (messageType == "type_notification") {

				try {
					ClickDesk_Widget_Typing_Noty.handle_typing_events(dataJSON);
				} catch (e) {
				}

				return true;

			}

			// Call Accepted Request
			else if (messageType.indexOf("webrtc_accept") == 0) {

				var req_type = messageType.replace("webrtc_accept_", "");

				ClickDesk_GA.trigger_event("agent_answered_"
						+ req_type.toLowerCase(),
						ClickDesk_Globals.agent_nick_name);

				return true;

			}

			// Show call request to visitor
			else if (messageType == "call_request") {

				var request_type = dataJSON.call_request_type;

				// Capture website as PNG
				if (request_type == "capture") {

					// Please omit if user agent is in popout window
					if (ClickDesk_Window_Popout.is_window_in_popup()
							&& !ClickDesk_Mobile_Util.is_mobile_browser())
						return true;

					// Call screenshot method
					Cd_Add_Wesite_Screenshot.render_canvas(
							Cd_Add_Wesite_Screenshot.send_attachment_to_agent,
							true);

					return true;

				}

				request_type = (request_type.indexOf("video") != -1) ? "video"
						: "audio";

				message = this.call_inviting_message.replace("%request_type%",
						request_type);

				// Add to Google analytics
				request_type = (request_type == "audio") ? "voice" : "video";
				ClickDesk_GA.trigger_event("init_" + request_type + "_call",
						ClickDesk_Globals.agent_nick_name);

			}

			try {
				message = isNaN(message) ? JSON.parse(message) : message;
			} catch (e) {
			}

			// Check co-browse
			if (message.toLowerCase().indexOf("/goto ") == 0) {

				// Get location
				var loc = message.substring(message.indexOf(" "));

				// Get domain name form url string
				var domain_name = clickdesk_get_url_domain(loc);

				// Condition check for IE
				if (domain_name == loc || !domain_name)
					domain_name = location.hostname;

				if (domain_name.indexOf(location.hostname) == -1
						&& !ClickDesk_Mobile_Util.is_mobile_browser()) {

					ClickDesk_Globals.co_browse_url = loc;
					message = this.cobrowse_message.replace("$target_loc",
							ClickDesk_Globals.co_browse_url.trim());

				} else {

					// Parent window
					if (ClickDesk_Mobile_Util.is_mobile_browser()
							|| ClickDesk_Window_Popout.is_window_closed == "true") {
						ClickDesk_Globals.co_browse_url = loc;
						message = this.cobrowse_message.replace("$target_loc",
								ClickDesk_Globals.co_browse_url.trim());

					}

					// Not in mobile
					else if (domain_name.indexOf(location.hostname) != -1
							&& !ClickDesk_Mobile_Util.is_third_party_app()
							&& !ClickDesk_Window_Popout.is_window_closed
							&& !ClickDesk_Window_Popout.is_window_in_popup()) {

						window.location = loc;
						return true;
					}

					else {
						ClickDesk_Globals.co_browse_url = loc;
						message = this.cobrowse_message.replace("$target_loc",
								ClickDesk_Globals.co_browse_url.trim());
					}

				}

			}

			// Handle Queued session
			if (ClickDesk_Widget_Session.queued_session) {

				// Reset to false
				ClickDesk_Widget_Session.queued_session = false;
				ClickDesk_DOM.wrap('#clickdesk_chat_session').removeClass(
						'queued');

				CLICKDESK_CHAT_WINDOW_UI.toggle_file_uploader();
				ClickDesk_Shopify.get_current_cart_("force");
			}

			// Append Message
			this.append_command_message(dataJSON, message);

			return true;

		} catch (e) {
			clickdesk_log(e);
		}

	},

	check_and_handle_webrtc_message : function(message) {

		var user_message = message.new_chat_message;
		if (!user_message)
			return false;

		try {
			user_message = JSON.parse(user_message);
		} catch (e) {
			clickdesk_log("from widget = " + e);
			user_message = {};
		}

		if (!user_message || !user_message.type)
			return false;

		try {

			ClickDesk_Call.handle_message_signals(user_message);

		} catch (e) {
			clickdesk_log(e);
		}

		return true;

	},

	append_command_message : function(dataJSON, message) {

		// Agent nick name (For Conference)
		var agentNick = dataJSON.from_agent;

		if (agentNick) {
			// Prev agent nick for header
			var prevAgentNick = ClickDesk_Globals.agent_nick_name;
			ClickDesk_Globals.agent_nick_name = (prevAgentNick) ? prevAgentNick
					: (agentNick.slice(0, 1).toUpperCase() + agentNick.slice(1));

		} else
			agentNick = ClickDesk_Globals.agent_nick_name;

		// Save Agent Image (Used for conference and transfered chats)
		var agentPic = (dataJSON.agent_pic) ? dataJSON.agent_pic : "";
		if (agentPic) {
			clickdesk_save_agent_pic(dataJSON.from_agent, agentPic);
		}

		// Remove typing alert
		ClickDesk_DOM.find_and_remove('clickdesk-agent-typing',
				dataJSON.agent_id);

		// Message
		var message = (!message) ? dataJSON.new_chat_message : message;
		try {
			message = isNaN(message) ? JSON.parse(message) : message;
		} catch (e) {
		}

		// System message
		if (typeof message == "string" && message.charAt(0) == '[')
			ClickDesk_Chat_Window_Util.append_message(message, "srvstaticmsg");
		else
			ClickDesk_Chat_Window_Util.append_message(message, agentNick);

		// Play Sound if user permits
		ClickDesk_Sounds.play_recv();

		// Blink title
		ClickDesk_Title_Blinker.trigger(message, 20);

		// Set focus
		clickdesk_set_focus_to_message_box();

	}

};
/**
 * Message filter
 * 
 * @param dataJSON
 * @returns
 */
var ClickDesk_Channel_Message_Listener = {

	listen : function(dataJSON) {

		if (!dataJSON)
			return false;

		// Check message belongs to web RTC call and process
		if (ClickDesk_Widget_Command_Util
				.check_and_handle_webrtc_message(dataJSON))
			return false;
		// End of web RTC

		if (dataJSON.agent_pic) {

			// Save Agent Image
			var agentPic = (dataJSON.agent_pic) ? dataJSON.agent_pic : "";

			clickdesk_save_agent_pic(dataJSON.from_agent, agentPic);
		}

		// Get message type
		var messageType = dataJSON.message_type;

		// Check channel maintainance &&
		// Channel Aknowledgement from server when closed the channel
		if (messageType == "channel_maintenance"
				|| messageType == "channel_acknowledgment")
			return;

		// If Session was accepted, server sends a message (reply to client's
		// broadcast request)
		if (messageType == "accepted_chat_message") {

			// Stop Queue polling
			ClickDesk_Queue_Chat_Manage.stopPoll();
			
			// Remove "please wait ..." message from chat window
			ClickDesk_DOM.find_and_remove('clickdesk_session', 'cd_remove');

			// Clear session timeout (This will avoid showing offline message
			// link)
			clearTimeout(ClickDesk_Globals.session_timeout_timer);

			// Clear auto chat response message timer
			ClickDesk_Message_Auto_Response.clear_message_auto_response_timer();

			// Get Session JSON
			var sessionJSON = dataJSON.session_details;

			// Store in cookie
			ClickDesk_Widget_Session.create_session_cookie(sessionJSON.id,
					sessionJSON.visitor_token);

			// Set agent JSON
			clickdesk_set_session_agent_info(dataJSON.agent_details);

			// Set focus for input field
			clickdesk_set_focus_to_message_box();

			/**
			 * Publish Mesage to agent via pusher
			 */
			ClickDesk_Widget_Pusher_Visitor
					.push_message("chat_session_initiated");

		}

		// New Message Or Call Request
		else if (messageType == "new_chat_message"
				|| messageType == "call_request") {

			try {

				// Execute commands
				if (ClickDesk_Widget_Command_Util.execute_command(dataJSON))
					return;

				ClickDesk_Widget_Command_Util.append_command_message(dataJSON);

			} catch (e) {
			}

		}

		// Block user message
		else if (messageType == "block_chat") {

			// IP
			var ip_address = dataJSON.block_ip;

			// Create blocked cookie
			// ClickDesk_Storage.set_prefs(ClickDesk_Widget_Session.blocked,
			// ip_address, ClickDesk_Widget_Session.blocked_period);

			// Append message to window
			ClickDesk_Chat_Window_Util
					.append_message(
							clickdesk_replace_special_characters(ClickDesk_Globals.custom_messages.visitor_blocked),
							"srvstaticmsg");

			// Hide call option
			clickdesk_hide_call_option();

		}

		// Session closed
		else if (messageType == "session_closed") {

			clickdesk_log("Session Closed.");

			// Close Channel Socket
			ClickDesk_Widget_Channel.close_socket();

			// Delete session cookie
			ClickDesk_Widget_Session.delete_session();

			// Delete proactive session cookie
			ClickDesk_Proactive_Handler.is_session_exists = false;
			ClickDesk_Storage
					.erase_cookie(ClickDesk_Proactive_Handler.session_cookie);

		}

		else if (ClickDesk_Widget_Command_Util.execute_command(dataJSON)) {
			return false;
		}

		else {
			// Coming from backend task
			if (dataJSON.status){
				ClickDesk_Widget_Session.handle_create_session_response(dataJSON);
			} else {
				ClickDesk_Chat_Window_Util.append_message(JSON.stringify(dataJSON));
			}			
		}

		// Check visitor closed the chat (If visitor closed, no need to show
		// popup)
		if (messageType != "session_closed"
				&& ClickDesk_Widget_Session.get_active_session() != null) {

			if (ClickDesk_Storage.get_prefs("window_popout")) {
				// Check active session and show upload file option
				CLICKDESK_CHAT_WINDOW_UI.toggle_file_uploader();
				return;
			}

			ClickDesk_Window_Callback.auto_open();

		}

	},
};/**
 * Message Util
 * 
 * @param sessionId
 * @param message
 */
var ClickDesk_Message_Util = {

	// Send message to agent
	send_chat : function(sessionId, message, __callbackId,date) {
		console.log("in send chat json");

		var json = {};
		json.session_id = sessionId;
		json.message = (typeof message == "object") ? JSON
				.stringify(message) : message;

		// Snack request to send the message
		/*
		 * ClickDesk_JSONP.send_request(CLICKDESK_SERVER_PATH +
		 * "/rest/visitor/chat/message", json, function(response) {
		 * clickdesk_log("Text sent " + message); });
		 */
console.log(json);
		 //TODO: Soumya url changed
		 json.widget_id='4416223588075907'; // get dynamically //TODO Soumya
		 console.log("texting for the second time");
		ClickDesk_JSONP_Tips.jsonp("https://clickdesk.dev.500apps.io/c/clkdsk"
		+ "/rest/visitor/chat/startbroadcast", json, function success(data) {
			clickdesk_log("success");
			clickdesk_log(data);
		}, function failure(error) {
			clickdesk_log("error");
			clickdesk_log(error);
		}, __callbackId);

	},
	// Send Message
	send_message : function(message, name, chatType,date) {

		// Get visitor blocked cookie
		var is_visitor_closed = ClickDesk_Storage
				.get_prefs(ClickDesk_Widget_Session.blocked);
		if (is_visitor_closed) {

			ClickDesk_Chat_Window_Util
					.append_message(
							clickdesk_replace_special_characters(ClickDesk_Globals.custom_messages.visitor_blocked),
							"srvstaticmsg");
			return false;

		}

		// Check if Session Is Present
		var sessionJSON = ClickDesk_Widget_Session.get_active_session();
		var sessionId;
		if (sessionJSON) {
			sessionId = eval("sessionJSON."
					+ ClickDesk_Widget_Session.session_id);
		}

		if (chatType == "web_rtc_request" && sessionId) {
			ClickDesk_Message_Util.send_chat(sessionId, message);
			return false;

		}

		// Show Chat box
		CLICKDESK_CHAT_WINDOW_UI.show_chat_box();

		var callback_id = ClickDesk_JSONP.__callbackId++;

		// Append to the body
		/*ClickDesk_Chat_Window_Util.append_message(message, name,
				"clickdesk_request_sending", "callback" + callback_id);*/

				//adding msg with time
				if(widgetPrefsJSON.template_prefs.template == "agilechat_theme"){
				ClickDesk_Chat_Window_Util.append_message(message, name,
				date, "callback" + callback_id);
				}
				else
					ClickDesk_Chat_Window_Util.append_message(message, name,
				"clickdesk_request_sending", "callback" + callback_id);

		// Fire popout option as well
		ClickDesk_Window_Popout.fire_send_message_event(message, name);

		// Empty the chat input field
		ClickDesk_DOM.wrap('#broadcastchat')[0].value = '';

		// Set focus
		clickdesk_set_focus_to_message_box();

		// Play Sound if user permits
		ClickDesk_Sounds.play_send();

		// If no session, disable the button and create the session
		if (sessionJSON == null) {

			if (ClickDesk_Widget_Session.archived_messages.length > 0) {

				// Push messages to array
				ClickDesk_Widget_Session.archived_messages.push({
					callback_id : callback_id,
					message : message
				});
				return false;
			}

			// Push messages to array
			ClickDesk_Widget_Session.archived_messages.push({
				callback_id : callback_id,
				message : message
			});

			// Create session
			ClickDesk_Widget_Session.initialize_session(message, chatType,
					callback_id,date);

			chatType = (!chatType) ? ((ClickDesk_Proactive_Handler.is_session_exists) ? "proactive"
					: "broadcast")
					: chatType;

			if (chatType == "proactive")
				ClickDesk_GA.trigger_event("proactive_chats", "-");

			// Show offline message if sesion not create after 60 secs.
			// ClickDesk_Globals.session_timeout_timer = setTimeout(
			// 		"CLICKDESK_CHAT_WINDOW_UI.show_offline_window_link();",
			// 		60000);

			return false;

		}

		ClickDesk_DOM.find_and_remove('clickdesk_session', 'cd_remove');

		ClickDesk_Message_Util.send_chat(sessionId, message, callback_id,date);

	},

	// Submits form data to server
	submit_chat_form : function() {

		var ele = ClickDesk_DOM.wrap('#broadcastchat');
		if (!ClickDesk_DOM.is_valid_element(ele))
			return false;
		/*if(widgetPrefsJSON.template_prefs.template == "agilechat_theme"){
			if(!ClickDesk_Storage.get_prefs("visitor_email"))
			return false;
		}*/

		var text = ele[0].value.trim();

		// Send message if it is not default message
		if (text
				&& text != ClickDesk_Globals.default_place_holders["broadcastchat"]) {
			ClickDesk_Message_Util.send_message(text,
					ClickDesk_Globals.visitor_name);
		}

		return false;

	},
};
/**
 * Deals Postchat Survey Form
 * 
 * @author Lakshmi
 */
ClickDesk_Postchat = {

	/**
	 * Shows the postsurvey form for the supported users
	 * 
	 * @param sessionJSON -
	 *            perticular chat session json to save survey data to that chat
	 *            session in DB
	 */
	show_window : function(sessionJSON) {

		try {

			// widget prefs
			var prefs = widgetPrefsJSON;

			// Check wether user supports postchat survey feature or not
			if (!(prefs.postchat_survey_form_prefs && prefs.postchat_survey_form_prefs.show_postchat_survey_form == "true"))
				return false;

			try {
				prefs.postchat_survey_form_prefs.questions = JSON
						.parse(prefs.postchat_survey_form_prefs.questions);
			} catch (err) {
			}

			// save chat session id and visitor token
			prefs.sessionId = eval("sessionJSON."
					+ ClickDesk_Widget_Session.session_id);
			prefs.visitor_token = eval("sessionJSON."
					+ ClickDesk_Widget_Session.visitor_token);

			// Render template and show postchat feedback
			document.body.appendChild(ClickDesk_Handlebars.get_template(
					"clickdesk-postchat-survey", prefs));

			ClickDesk_DOM.set_style_by_id("ClickdeskPostchatSurveyForm", {
				'display' : 'block'
			});

			try {

				document.body.className = document.body.className
						+ " clickdesk-hide-overflow";

			} catch (e) {
			}

			// attach events
			this.attach_events();

		} catch (err) {
			clickdesk_log("show_postchat_window" + err);
		}

	},

	/**
	 * Hides and removes the periticular chat session survey form from the DOM
	 */
	hide_window : function() {

		try {

			ClickDesk_Postchat.toggle_loading("none");

			ClickDesk_DOM.set_style_by_id("ClickdeskPostchatSurveyForm", {
				'display' : 'none'
			});

			var cname = document.body.className
			document.body.className = (cname.indexOf("clickdesk-hide-overflow") >= 0) ? cname
					.replace("clickdesk-hide-overflow", "")
					: cname;

			var ele = ClickDesk_DOM.wrap("#ClickdeskPostchatSurveyForm")[0];
			ele.parentNode.removeChild(ele);

			ele = ClickDesk_DOM.wrap("#cd_postchat_bg_overlay")[0];
			ele.parentNode.removeChild(ele);

		} catch (err) {
			clickdesk_log("removing_postchat_window : " + err);
		}

	},

	/**
	 * Attaches events like Click on Postchat form submit button etc..
	 */
	attach_events : function() {

		// Add click event to postchat submit
		ClickDesk_DOM
				.attach_event(
						'#cd_postchat_survey_submit',
						'click',
						function(event) {

							// Validate
							var sendPostchatForm = clickdesk_validate_form(
									"ClickdeskPostchatSurveyForm",
									"cd_valid_postchat_form");

							if (!sendPostchatForm)
								return false;

							ClickDesk_Postchat.toggle_loading("inline");

							var postchatFeedbackArray = new Array();
							var answer_ele;
							var json = {};

							var questions = widgetPrefsJSON.postchat_survey_form_prefs.questions;

							for ( var i = 1; i <= questions.length; i++) {

								json = {};
								json.question = ClickDesk_DOM
										.wrap("#cd_postchat_feedback_q" + i)[0].innerHTML;
								answer_ele = ClickDesk_DOM
										.wrap("[name='cd_postchat_feedback_"
												+ i + "']");
								json.answers = ClickDesk_Postchat
										.get_values_array(answer_ele);
								json.index = i;
								postchatFeedbackArray.push(json);

							}

							json = {};
							json.visitor_token = ClickDesk_DOM
									.wrap("#cd_postchat_visitor_token")[0].value;
							json.session_id = ClickDesk_DOM
									.wrap("#cd_postchat_sessionid")[0].value;
							json.postchat_feedback = JSON
									.stringify(postchatFeedbackArray);

							// Snack Request to save survey details and send
							// email
							ClickDesk_JSONP
									.send_request(
											CLICKDESK_SERVER_PATH
													+ "/rest/visitor/session/postchat-survey-feedback",
											json, function(response) {
												ClickDesk_Postchat
														.hide_window();
												ClickDesk_GA.trigger_event("survey_feedback", "-");
											}, true);

						});

	},

	/**
	 * gets given values for the questions
	 */
	get_values_array : function(elements) {

		var answers = new Array();

		if (clickdesk_get_element_type_attr(elements[0]) == "textarea"
				|| clickdesk_get_element_type_attr(elements[0]) == "text") {
			if (elements[0].value)
				answers.push(elements[0].value);
		} else {
			for ( var i = 0; i < elements.length; i++) {

				if (elements[i].checked)
					answers.push(elements[i].value);

			}

		}

		return answers;
	},

	/**
	 * Toggles loading image
	 */
	toggle_loading : function(display) {

		try {

			ClickDesk_DOM.wrap("#cd_postchat_loading")[0].src = "https://my.clickdesk.com/clickdesk-ui/browser/img/file_upload.gif";

			ClickDesk_DOM.set_style_by_id("cd_postchat_loading", {
				'display' : display
			});
		} catch (e) {
		}

	}
};
/**
 * Typing notifications
 */
var previouseventType="";
var ClickDesk_Widget_Typing_Noty = {
	timer : "",
	clear_timer : function() {

		if (!this.timer)
			return;

			clearTimeout(this.timer);
			

	},

	reset_timer : function(callback, time_in_millis) {

		// Clear existing
		this.clear_timer();

		this.timer = setTimeout(function() {
			if (callback)
				callback();
		}, time_in_millis);

	},

	start_typing_notifier : function() {

		// Agent from globals
		var agent_json = ClickDesk_Globals.agent_json;

		// Do not initiate if agent form IM
		if (agent_json && agent_json.from_webchat != true)
			return;

		// Get visitor entered message
		var message = ClickDesk_DOM.wrap('#broadcastchat')[0].value;
		message = message.trim();

		clickdesk_log("message = " + message);

		var command = "typing";

		// Send message if it is not default message
		if (!(message && message != ClickDesk_Globals.default_place_holders["broadcastchat"])) {
			command = "leaved";
			//previouseventType = "leaved";
			message = "";
		}

		// Publish typing notification message
		//if(previouseventType!=command)
		ClickDesk_Widget_Typing_Noty
				.notify_agent_with_message(message, command);

		// Reset timer after a while
		this.reset_timer(function() {
			ClickDesk_Widget_Typing_Noty.start_typing_notifier();
		}, 5000);

	},

	init_notifier : function(ele_id) {
		//keystroke skip
		/*if(true)
			return;*/
	
		try {
			var ele = ClickDesk_DOM.wrap(ele_id)[0];
			ele.onblur = function() {

				clickdesk_log("onblur");

				// Clear timer for typing
				ClickDesk_Widget_Typing_Noty.notify_agent_with_message("",
						"leaved");

				// Clear timer
				ClickDesk_Widget_Typing_Noty.clear_timer();

				// Set default place holder
				clickdesk_set_default(ele);

			}
			ele.onfocus = function() {

				clickdesk_log("onfocus");

				// Start notifier
				ClickDesk_Widget_Typing_Noty.start_typing_notifier();

				clickdesk_check_default(ele);
			}

		} catch (e) {
		}

	},
	get_visitor_noty_session_id : function() {

		// Check if Session Is Present
		var sessionJSON = ClickDesk_Widget_Session.get_active_session();
		if (!sessionJSON
				|| (eval("sessionJSON." + ClickDesk_Widget_Session.session_id))
						.indexOf("BD") == 0) {
			return false;
		}

		return eval("sessionJSON." + ClickDesk_Widget_Session.session_id);

	},
	notify_agent_with_message : function(visitor_message, command) {

		var session_id = ClickDesk_Widget_Typing_Noty
				.get_visitor_noty_session_id();

		if (!session_id)
			return;

		var json = {};
		json.session_id = session_id;
		json.from = "visitor";

		// Left or typing
		if (command)
			json.type = command;

		json.agent_id = ClickDesk_Globals.agent_id;
		json.message = visitor_message;

		// Snack request to send the message
		var notystatus = (!previouseventType || previouseventType != command);
	if(!notystatus)
		return;
	
		previouseventType = command;
		ClickDesk_JSONP.send_request(CLICKDESK_SERVER_PATH
				+ "/rest/visitor/chat/type-notification/" + command, json,
				function(response) {
				});

	},

	/**
	 * Checks typing alert already exists and also from same agent or not
	 */
	toggle_typing_noty : function(toggleType, messageJSON) {

		toggleType = (!toggleType) ? 'block' : toggleType;

		try {

			var agentId = messageJSON.agent_id, agentName = messageJSON.agent;

			var lastChatElement = ClickDesk_DOM.wrap('#clickdesk_session')[0].lastChild;
			var typingDivExists = (lastChatElement && lastChatElement.className == "clickdesk-agent-typing") ? true
					: false;

			// Remove agent typing info and add
			if (typingDivExists && toggleType == "block") {

				// Check agent id list and return if already in typing mode
				var agentTypingDiv = ClickDesk_DOM
						.wrap('#clickdesk-agent-typing .' + agentId)[0];

				clickdesk_log("className = " + agentTypingDiv.className);

				if (agentTypingDiv.className)
					return false;

			}

			// Remove typing noties
			if (toggleType != "block" && typingDivExists
					&& lastChatElement.childNodes.length < 2) {

				ClickDesk_DOM.find_and_remove('clickdesk_session',
						'clickdesk-agent-typing');
				return false;

			} else if (toggleType != "block") {

				ClickDesk_DOM
						.find_and_remove('clickdesk-agent-typing', agentId);
				return false;
			}

			// user typing message
			var msg = (widgetPrefsJSON.system_message_prefs && widgetPrefsJSON.system_message_prefs.TYPING_ALERT_MESSAGE) ? widgetPrefsJSON.system_message_prefs.TYPING_ALERT_MESSAGE
					: "";

			// Get typing template
			var agent_type_element = ClickDesk_Handlebars.get_template(
					"clickdesk-agent-typing-entry-template", {
						"agent_name" : agentName,
						"agent_id" : agentId,
						"message" : msg
					});

			var appendableElement = (typingDivExists) ? lastChatElement
					: ClickDesk_DOM.create_element("div",
							"clickdesk-agent-typing", "clickdesk-agent-typing");
			appendableElement.appendChild(agent_type_element);

			// Append to Chat Window
			var chatDiv = ClickDesk_DOM.wrap('#clickdesk_session')[0];
			chatDiv.appendChild(appendableElement);

			// Scroll to bottom
			chatDiv.scrollTop = chatDiv.scrollHeight;

		} catch (e) {
		}

	},

	// Show pencil with agent name
	filter_and_show_agent_typing : function(message) {

		var agent_session_id = message.session_id;
		var visitor_session_id = ClickDesk_Widget_Typing_Noty
				.get_visitor_noty_session_id();

		if (!agent_session_id || !visitor_session_id
				|| agent_session_id != visitor_session_id)
			return;

		// Show typing noti
		ClickDesk_Widget_Typing_Noty.toggle_typing_noty('block', message);

	},

	// Handle events
	handle_typing_events : function(dataJSON) {

		var type = dataJSON.type;
		if (!type)
			return false;

		if (type && type == "leaved")
			return ClickDesk_Widget_Typing_Noty.toggle_typing_noty('none',
					dataJSON);

		// dataJSON['from'] = ClickDesk_Globals.agent_nick_name
		return ClickDesk_Widget_Typing_Noty
				.filter_and_show_agent_typing(dataJSON);

	}

};// Read a page's GET URL variables and return them as an associative array.
function clickdesk_get_url_vars() {

	var vars = [], hash;
	var hashes = window.location.href.slice(
			window.location.href.indexOf('?') + 1).split('&');
	for ( var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}

	return vars;
}

// Change message to anchor
function clickdesk_convert_message_to_anchor(text) {

	var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
	try {
		return text.replace(exp,
				"<a href='$1' target='_blank' class='cd_hyperlink'>$1</a>");
	} catch (err) {

		return text;
	}

}

// Get domain from URL
function clickdesk_get_url_domain(url) {
	var a = document.createElement('a');
	a.href = url;
	return a.hostname;
}

// Replace special charecters
function clickdesk_replace_special_characters(value) {

	if (!value)
		return value;

	return value.replace(/&#39;/g, "'").replace(/&#34;/g, '"').replace(
			/&#92;/g, '\\');

}

// Set focus on input field
function clickdesk_set_focus_to_message_box() {

	try {
		document.broadcastchatForm.broadcastchat.focus();
	} catch (error) {
		clickdesk_log(error);
	}
}

function clickdesk_replace_value_with_available_prefs(value) {

	if (!value)
		return value;

	if (value.indexOf("%visitor_name%") != -1) {
		var prefVal = ClickDesk_Storage.get_prefs("visitor_name");
		if (prefVal)
			prefVal = prefVal.trim();

		if (!prefVal) {
			value = "me";
		}

		value = value.replace("%visitor_name%", prefVal);
	}

	if (value.indexOf("%visitor_email%") != -1) {
		var prefVal = ClickDesk_Storage.get_prefs("visitor_email");
		if (!prefVal) {
			value = "email";
		}

		value = value.replace("%visitor_email%", prefVal);
	}

	return value;

}
/**
 * Chat Session Window Utility functions
 */
var ClickDesk_Chat_Window_Util = {

	// Append to Window
	append_message : function(text, name, time, warning) {

		// Replace html chars
		text = this.replace_html_chars(text);

		// Update name with existing prefs
		name = clickdesk_replace_value_with_available_prefs(name);

		// Capitalize first letter in the name
		name = (!name) ? " " : name.slice(0, 1).toUpperCase() + name.slice(1);

		var lastChatUserName = '', cloned_element = "", agent_type_element = "";

		var lastChatElement = ClickDesk_DOM.wrap('#clickdesk_session')[0].lastChild;

		// Remove agent typing info and add
		if (lastChatElement
				&& lastChatElement.className == "clickdesk-agent-typing") {

			agent_type_element = lastChatElement;

			// Remove typing alert
			ClickDesk_DOM.find_and_remove('clickdesk_session',
					"clickdesk-agent-typing");

			lastChatElement = ClickDesk_DOM.wrap('#clickdesk_session')[0].lastChild;
		}

		// Check last message from same source (visitor/agent)
		if (lastChatElement) {
			lastChatElement = ClickDesk_DOM.find_inner_element(lastChatElement,
					"cd_name");

			if (lastChatElement)
				lastChatUserName = lastChatElement.innerHTML;

		}

		// Replace unwanted chars
		lastChatUserName = lastChatUserName.replace(":", "");

		var agent_json = ClickDesk_Globals.agent_json;

		// Message JSON
		var messageJSON = {};
		messageJSON.message = (typeof text == "object") ? text : (text + "");
		messageJSON.from = name;
		messageJSON.agent_image = clickdesk_get_agent_pic(name);

		// Indicator
		messageJSON.indicator = "response";

		// Check popout
		if (ClickDesk_Window_Popout.is_window_in_popup())
			messageJSON.popout_window = "true";

		if (warning && warning.indexOf("callback") != 0)
			messageJSON.warning = "yes";

		// Change file_url
		try {

			// Check hide message to visitor
			if (text.hide_upload)
				return;

			var url = text.file_url;
			if (url && url.indexOf("-screenshot") != -1)
				url = "https://my.clickdesk.com/viewImage?src="
						+ encodeURIComponent(text.file_url);

			text.file_url = url;

		} catch (e) {
		}

		// File indicator
		if (typeof text == "object" && text.file_url)
			text.file_status = "Received";

		// Check visitor name and add indicator
		var visitor_name = ClickDesk_Globals.visitor_name;
		visitor_name = clickdesk_replace_value_with_available_prefs(visitor_name);

		if (visitor_name && visitor_name.toLowerCase() == name.toLowerCase()) {

			messageJSON.indicator = "welcome";

			if (typeof text == "object" && text.file_url)
				text.file_status = "Sent";

		}

		text = (typeof text == "object") ? text : (text + "");

		var date = new Date();
		if (time && time != "proactive") {
			// Set date object
			date.setTime(((time < 10000000000) ? time *= 1000 : time));
		}

		var message_alert_html = "";
		if (time && time == "clickdesk_request_sending") {
			messageJSON.show_sent_req = "clickdesk_request_sending";
			if (warning)
				messageJSON.callback_name = warning;
		}

		messageJSON.date = date.getTime() / 1000;

		// Opposite chatter
		var clonable_template = "clickdesk-new-message-entry-template";

		// Get window type
		var selected_theme = widgetPrefsJSON.template_prefs.template, new_theme = "webrtc_theme";

		// Send message by same chatter
		if (lastChatUserName == name || name === undefined
				|| name == "Srvstaticmsg") {
			clonable_template = (selected_theme != new_theme || name == "Srvstaticmsg") ? "clickdesk-rewrite-entry-template"
					: clonable_template;
		}

		// Fill template with handlebars json
		cloned_element = ClickDesk_Handlebars.get_template(clonable_template,
				messageJSON);

		cloned_element = cloned_element.childNodes[0];

		// Reset
		cloned_element.setAttribute("id", "");
		ClickDesk_DOM.set_style_by_object(cloned_element, {
			'display' : 'block'
		});

		// Custom css to statuic messages
		if (name && name == "Srvstaticmsg") {
			// Set classname
			cloned_element.className = (cloned_element.className) ? cloned_element.className
					+ "_system"
					+ ((time && time == "proactive") ? "_" + time : "")
					: cloned_element.className;

		}

		// Append in a new row or in previous element in list. Its based on
		// theme
		if ((lastChatUserName == name || name === undefined || name == "Srvstaticmsg")
				&& (selected_theme != new_theme)) {
			if (name && name == "Srvstaticmsg")
				ClickDesk_DOM.wrap('#clickdesk_session')[0]
						.appendChild(cloned_element);
			else
				ClickDesk_DOM.wrap('#clickdesk_session')[0].lastChild
						.appendChild(cloned_element);

		} else {
			// Append to Chat Window
			ClickDesk_DOM.wrap('#clickdesk_session')[0]
					.appendChild(cloned_element);
		}

		// Add typing info if exists
		if (agent_type_element) {
			// Append to Chat Window
			ClickDesk_DOM.wrap('#clickdesk_session')[0]
					.appendChild(agent_type_element);
		}

		// Set the scroll to the bottom of the chat div
		var objDiv = ClickDesk_DOM.wrap('#clickdesk_session')[0];
		objDiv.scrollTop = objDiv.scrollHeight;
		/*if(widgetPrefsJSON.template_prefs.template == "agilechat_theme"){
		if(ClickDesk_Storage.get_prefs("visitor_email"))
		return;
			}*/

	},

	// Replace HTML chars in string
	replace_html_chars : function(str) {

		try {
			return str.replace("/&amp;/g", "&amp;").replace(/&lt;/g, "<")
					.replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(
							/&#039;/g, "'");
		} catch (e) {
			// TODO: handle exception
		}

		return str;

	}
};
/**
 * Callback functions when click on window close/open/minimizes
 */
var ClickDesk_Window_Callback = {

	/**
	 * Call back function to show the window after slide effect
	 */
	show : function() {
		ClickDesk_DOM.set_style_by_id('clickdesk_container', {
			'display' : 'block'
		});

		// Hide bubble
		clickdesk_hide_bubble();

		// Reset all forms
		clickdesk_reset_forms();

		// Set dragger positions
		try {
			ClickDesk_Dragger.setWindowTopPosition();
			setTimeout(function() {
				ClickDesk_Dragger.setDraggerPosition();
			}, 1000);

		} catch (err) {
		}

	},

	/**
	 * Call back function to hide the window after slide effect
	 */
	hide : function() {

		// Hide window
		ClickDesk_DOM.set_style_by_id('clickdesk_container', {
			'display' : 'none'
		});

		// Show bubble
		clickdesk_show_bubble();

		// Delete active window
		ClickDesk_Storage.delete_prefs("active_popup");

	},

	// Minimize Popup
	minimize : function() {

		// Hide window
		this.hide();

		// Add min class to window
		ClickDesk_DOM.wrap('.clickdesk_b').addClass('min');

		// return ClickDesk_DOM.cancel_event(e);

	},

	// Auto open window
	auto_open : function() {

		// Hide bubble and show popup
		ClickDesk_DOM.set_style_by_id('clickdesk_container', {
			'display' : 'block'
		});

		CLICKDESK_CHAT_WINDOW_UI.show_chat_box();

		// Set focus to broadcast textarea
		clickdesk_set_focus_to_message_box();

	},

};

/**
 * Show window on call
 */
var CLICKDESK_LIVECHAT = {

	// Show chat window
	show : function() {

		// Clear proactive session
		ClickDesk_Proactive_Handler.remove_time_out();

		ClickDesk_Storage.set_prefs("active_popup", "active");

		// Show livechat window
		CD_Live_Chat.show();

	}

};
/**
 * ClickDesk Chat window popout option
 */
var CLICKDESK_POPOUT_WINDOW;

var ClickDesk_Window_Popout = {

	is_window_closed : false,

	/**
	 * Opens popout window of chat widget
	 */
	window_popout : function() {

		// Check cookie and focus if already present
		var popout = ClickDesk_Storage.get_prefs("window_popout");
		var window_content = (popout && popout != null && popout != "null") ? ""
				: "<div></div>";

		CLICKDESK_POPOUT_WINDOW = window.open('', 'ClickDesk_Popout_Window',
				'width=340,height=480');
		CLICKDESK_POPOUT_WINDOW.focus();

		if (window_content) {

			window_content = "<!DOCTYPE html><html><head><title>Chat Popout Widget</title><link type='text/css' href='' />";
			window_content += this.popout_css();

			window_content += "<script type='text/javascript'>var _glc = '"
					+ JSON.stringify({
						'id' : ClickDesk_Widget_Util.widget_id,
						'debug' : true
					})
					+ "'; var ClickDesk_Widget_Id = '"
					+ ClickDesk_Widget_Util.widget_id
					+ "'; var glcp = '"
					+ glcp
					+ "'; var glcpath = '"
					+ glcpath
					+ "'; var CLICKDESK_TEMPLATE_TYPE='"
					+ ClickDesk_Widget_Util.get_user_template()
					+ "'; var CLICKDESK_WIDGET_IS_IN_POPOUT= true,cd_PopIn=false;";

			// Get Active Session
			var sessionJSON = ClickDesk_Widget_Session.get_active_session();

			if (ClickDesk_Proactive_Handler.is_session_exists
					&& ClickDesk_Proactive_Handler.prefs && !sessionJSON) {
				var proactiveMessage = clickdesk_get_proactive_action_message(
						ClickDesk_Proactive_Handler.prefs).replace(/'/g,
						"&#39;").replace(/%/g, "&#37;").replace(/"/g, '&#34;');
				window_content += "var proactiveJSON = '" + proactiveMessage
						+ "';";
			}

			window_content += "var cd_visitor_typing_msg = '"
					+ ClickDesk_DOM.wrap('#broadcastchat')[0].value + "';";
			window_content += "</script>";

			window_content += "<script type='text/javascript' src='" + glcpath
					+ "min/js_all.js'></script></head><body>";

			CLICKDESK_POPOUT_WINDOW.document.write(window_content);

		}

		// Hide the window
		CD_Live_Chat.minimize();

		// Hide bubble
		clickdesk_hide_bubble();

		// Set cookie for window popout open
		ClickDesk_Storage.set_prefs("window_popout", "true");

		ClickDesk_GA.trigger_event("popout_clicked", "-");

	},

	/**
	 * Closes popout window
	 */
	window_popout_close : function(pop_in) {

		// Delete cookie for window popout open
		if (!ClickDesk_Window_Popout.is_window_in_popup())
			ClickDesk_Storage.delete_prefs("window_popout");

		ClickDesk_DOM.set_style_by_id('clickdesk_popout_container', {
			'display' : 'inline-block!important;'
		});

		// Check session and close/maximize
		var sessionJSON = ClickDesk_Widget_Session.get_active_session();
		if (pop_in || !sessionJSON) {
			if (!sessionJSON && !pop_in) {

				// Clear the chat popup
				ClickDesk_DOM.wrap('#clickdesk_session')[0].innerHTML = '';
				ClickDesk_Proactive_Handler.is_session_exists = false;

				ClickDesk_Window_Callback.show();
				ClickDesk_Widget_Session.check_and_render_active_session();
				return;

			} else if (!sessionJSON) {
				ClickDesk_Window_Callback.show();
				return;
			}

			ClickDesk_Window_Callback.show();
			ClickDesk_Widget_Session.check_and_render_active_session();

		} else
			CD_Live_Chat.close();

	},

	/**
	 * Checks whether popout window is closed or not
	 */
	check_window_popout_close : function() {

		ClickDesk_Window_Popout.is_window_closed = ClickDesk_Storage
				.get_prefs("window_popout");

		if (!ClickDesk_Window_Popout.is_window_closed) {
			ClickDesk_DOM.set_style_by_id('clickdesk_popout_container', {
				'display' : 'inline-block!important;'
			});
			return;
		}

		if (ClickDesk_Window_Popout.is_window_closed == "true") {

			// Don't show popout option
			ClickDesk_DOM.set_style_by_id('clickdesk_popout_container', {
				'display' : 'none!important;'
			});

			var message = ClickDesk_Storage.get_prefs("mssg_fired");
			if (!message)
				return;

			ClickDesk_Storage.delete_prefs("mssg_fired");
			ClickDesk_Chat_Window_Util.append_message(message,
					ClickDesk_Globals.visitor_name);
			return;
		}

		// Check popin
		if (ClickDesk_Window_Popout.is_window_closed == "pop_in") {
			this.window_popout_close("pop_in");
		} else {
			this.window_popout_close();
		}
		ClickDesk_Window_Popout.is_window_closed = false;

	},

	/**
	 * Common css for popout
	 */
	popout_css : function() {

		var css = "<style>"
				+ "html, body {height : 100%;}"
				+ "body {margin: 0px;background: #ffffff url('https://my.clickdesk.com/img/initializing-new.png') 50% 50% no-repeat;}"
				+ "#clickdesk_container #clickdeskchat_container{bottom: 0px;position: absolute !important;z-index: 2147483638;margin: 0px;left: 0px;right: 0px;height: 100%;width: 100%!important;overflow:auto!important;}"
				+ "#clickdesk_container #clickdeskchat_container #clickdesk_popup{width: 100% !important;position: relative !important;overflow-x: auto!important;height: 100%!important;max-width: 650px!important;min-width: 240px!important;margin: 0px auto !important;min-height:465px!important;right:0px !important; display: table!important;}"
				+ "#clickdesk_container #clickdesk_popup #clickdesk-chat-w-footer{max-width: 650px!important;min-width: 240px!important;width:100% !important;padding:0px !important;}"
				+ ".cd-form-sec, #clickdeskchat_social_template, #clickdesk_chat_session, #clickdesk_session {height: 100% !important;box-sizing:border-box !important;-webkit-box-sizing:border-box !important;-moz-box-sizing:border-box !important;}"
				+ ".clickdesk-chat-w-footer{display: table-row!important;} #clickdesk_header {height: 60px!important;}"
				+ ".clickdesk-webrtc #clickdesk-chat-w-footer .clickdesk-tabs-container{float:left !important;padding:0px !important;min-width:0px !important;width:50%!important;background:transparent!important;}"
				+ ".clickdesk-webrtc .clickdesk-footer li a,.clickdesk-webrtc .clickdesk-footer li a.chat-box,.clickdesk-webrtc .clickdesk-footer li a.clickdesk-mail,"
				+ ".clickdesk-webrtc .clickdesk-footer li a.clickdesk-twitter,.clickdesk-webrtc .clickdesk-footer li a.clickdesk-facebook{width:12%!important;margin:0px !important;min-height:0px !important;min-width:0px !important;}"
				+ ".clickdesk-webrtc #clickdesk-chat-w-footer .clickdesk-footer{margin:0px !important}"
				+ "@media screen and (max-width: 350px) {#clickdesk_container select {width: 100% !important}} @media screen and (min-width: 401px) and (max-width: 450px) {#clickdesk_container select {width: 99% !important}}"
				+ "@media screen and (min-width: 451px) and (max-width: 500px) {#clickdesk_container select {width: 98% !important}}@media screen and (min-width: 501px) and (max-width: 600px) {#clickdesk_container select {width: 97.5% !important}}"
				+ "@media screen and (min-width: 601px) {#clickdesk_container select {width: 97.5% !important}}"
				+ "</style>";
		return css;

	},

	/**
	 * Checks whether window is popout or not
	 */
	is_window_in_popup : function() {
		try {
			// Check Popout window
			return CLICKDESK_WIDGET_IS_IN_POPOUT;
		} catch (e) {
		}
		return;
	},

	/**
	 * Fires Send message event in normal chat window
	 */
	fire_send_message_event : function(message, name) {

		try {

			ClickDesk_Window_Popout.is_window_closed = ClickDesk_Storage
					.get_prefs("window_popout");
			if (!ClickDesk_Window_Popout.is_window_closed)
				return;

			// Check mobile browser as well
			if (ClickDesk_Mobile_Util.is_mobile_browser())
				return;

			if (ClickDesk_Window_Popout.is_window_in_popup()) {
				ClickDesk_Storage.set_prefs("mssg_fired", message);
			} else {
				ClickDesk_Storage.set_prefs("mssg_fired_pw", message);
			}

		} catch (e) {
		}

	},

	/**
	 * Checks popout window message
	 */
	check_window_popout_mssg : function() {

		var message = ClickDesk_Storage.get_prefs("mssg_fired_pw");
		if (!message)
			return;

		ClickDesk_Storage.delete_prefs("mssg_fired_pw");
		ClickDesk_Chat_Window_Util.append_message(message,
				ClickDesk_Globals.visitor_name);
		return;

	},

	update_popout_options : function() {

		if (!this.is_window_in_popup())
			return;

		try {

			// Send BYE on refreshing(or leaving) a demo page
			// to ensure the room is cleaned for next session.
			window.onbeforeunload = function() {

				// Set cookie for window popout open
				var cookie_val_name = "false";
				if (cd_PopIn)
					cookie_val_name = "pop_in";
				try {
					window.opener.ClickDesk_Storage.set_prefs("window_popout",
							cookie_val_name);
				} catch (e) {
					ClickDesk_Storage.set_prefs("window_popout",
							cookie_val_name);
				}

			};

			// Get widget Id from the script
			_glc = {
				"id" : ClickDesk_Widget_Util.widget_id,
				"version" : "1.0"
			};

			if (typeof proactiveJSON !== "undefined")
				proactiveJSON = ClickDesk_Prefs_Util.decode_json(proactiveJSON);

		} catch (e) {
		}

	},

};

(function() {

	if (ClickDesk_Window_Popout.is_window_in_popup()) {
		setInterval("ClickDesk_Window_Popout.check_window_popout_mssg();", 100);
		return;
	}

	setInterval("ClickDesk_Window_Popout.check_window_popout_close();", 1300);

})();
function clickdesk_check_proactive_conditions(proactive_rule) {

	if (!proactive_rule)
		return;

	// Conditions
	var conditions = proactive_rule.conditions;
	if (!conditions || conditions.length <= 0)
		return true;

	// Execution condition (Add/Or)
	var exe_condition = proactive_rule.join_condition;

	// Iterate all conditions
	for ( var i = 0; i < conditions.length; i++) {

		// Check each condition
		var result = clickdesk_check_proactive_each_condition(conditions[i],
				proactive_rule);

		if (conditions.length == 1)
			return result;

		else if (!result && exe_condition == "and")
			return false;

		if (result && exe_condition == "or")
			return true;
	}

	return true;

}

function clickdesk_check_proactive_each_condition(condition, rule) {

	// Condition name
	var name = condition.action_type;

	// Condition condition
	var data = condition.action_data;
	if (!data || !data["action_condition"])
		return false;

	var conditon_type = data.action_condition;

	// Condition value
	var target = data.action_value;

	var is_valid = false;

	switch (name) {

	case "reply_by_agent":
		is_valid = clickdesk_check_agent_replied_condition(rule, conditon_type,
				target);
		break;

	case "hour_of_day":
		is_valid = clickdesk_is_valid_proactive_condition(conditon_type,
				new Date().getHours(), target);
		break;

	case "day_of_week":
		is_valid = clickdesk_is_valid_proactive_condition(conditon_type,
				new Date().getDay(), target);
		break;

	case "visitor_geo":
		is_valid = clickdesk_is_valid_proactive_condition(conditon_type,
				ClickDesk_Visitor_Info.getGeoPrefs("country_code")
						.toLowerCase(),
				(target ? target.toLowerCase() : target));
		break;

	case "time_on_site":

		// if (conditon_type == "eq" || conditon_type == "gt")
		// return true;

		var date_diff = new Date().getTime()
				- (ClickDesk_Proactive_Rule_Conditions
						.get_website_time_stamps());

		is_valid = clickdesk_is_valid_proactive_condition(conditon_type,
				(date_diff / 1000), target);
		break;

	case "page_visits":
		is_valid = clickdesk_is_valid_proactive_condition(conditon_type,
				ClickDesk_Proactive_Rule_Conditions.get_page_visits("page"),
				target);
		break;

	case "visitor_previous_visits":
		is_valid = clickdesk_is_valid_proactive_condition(conditon_type,
				ClickDesk_Proactive_Rule_Conditions
						.get_history_page_visits("website"), target);
		break;

	case "visitor_previous_chats":
		is_valid = clickdesk_is_valid_proactive_condition(conditon_type,
				ClickDesk_Proactive_Rule_Conditions.previous_chats_count,
				target);
		break;

	case "page_url":
		is_valid = clickdesk_is_valid_proactive_condition(conditon_type,
				window.location.href, target);
		break;

	case "page_title":
		is_valid = clickdesk_is_valid_proactive_condition(conditon_type,
				document.title, target);
		break;

	case "referer_url":
		is_valid = clickdesk_is_valid_proactive_condition(conditon_type,
				ClickDesk_Visitor_Info.get_referrer_link(), target);
		break;

	case "visitor_name":
		is_valid = clickdesk_is_valid_proactive_condition(conditon_type,
				ClickDesk_Storage.get_prefs("visitor_name"), target);
		break;

	case "visitor_email":
		is_valid = clickdesk_is_valid_proactive_condition(conditon_type,
				ClickDesk_Storage.get_prefs("visitor_email"), target);
		break;
	case "visitor_browser":
		is_valid = clickdesk_is_valid_proactive_condition(conditon_type,
				BrowserDetect.browser, target);
		break;

	case "visitor_os":
		is_valid = clickdesk_is_valid_proactive_condition(conditon_type,
				BrowserDetect.OS.toLowerCase(), (target ? target.toLowerCase()
						: target));
		break;

	case "custom_variable":
		var custom_variable_name = data.custom_variable_name;
		is_valid = clickdesk_is_valid_proactive_condition(conditon_type,
				ClickDesk_JS_Plugin.evaluate_variable(custom_variable_name),
				(target ? target.toLowerCase() : target));
		break;

	}

	return is_valid;

}

function clickdesk_is_valid_proactive_condition(condition, value, target) {

	var is_valid = false;

	// Lowercase all
	value = clickdesk_proactive_lowercase_value(value);
	target = clickdesk_proactive_lowercase_value(target);

	// For all values
	if (condition == "all" || target == "all" || value == "unknown")
		return true;

	switch (condition) {
	case "neq":
		is_valid = (value != target);
		break;
	case "eq":
		is_valid = ((value == "mozilla" || value == "firefox") && (target == "mozilla" || target == "firefox")) ? true
				: (value == target);
		break;
	case "contains":
		is_valid = (value.indexOf(target) > -1);
		break;
	case "not_contains":
		is_valid = (value.indexOf(target) == -1);
		break;
	case "lt":
		is_valid = (value < target);
		break;
	case "gt":
		is_valid = (value > target);
		break;
	case "regex":
		is_valid = (ClickDesk_Proactive_Rule_Conditions.match_urls(value,
				target));
		break;

	}

	return is_valid;
}

function clickdesk_proactive_lowercase_value(value) {
	try {
		value = value.toLowerCase();
	} catch (e) {
	}

	return value;
}

function clickdesk_check_agent_replied_condition(trigger, conditon_type, target) {

	var is_valid = true;

	// Get ClickDesk session
	var sessionJSON = ClickDesk_Widget_Session.get_active_session();
	if (!sessionJSON
			|| (sessionJSON && sessionJSON.session_id.indexOf("BD") != 0))
		is_valid = false;

	var response_time = clickdesk_get_auto_response_cookie_val();
	if ((new Date().getTime() - response_time) < (target * 1000))
		is_valid = false;

	return is_valid;

}

function clickdesk_get_auto_response_cookie_val() {

	var cookie_name = "auto_response_ck";
	var val = ClickDesk_Storage.get_prefs(cookie_name);
	if (!val) {
		val = new Date().getTime();
		ClickDesk_Storage.set_prefs(cookie_name, val);
	}

	return val;

}

function clickdesk_remove_auto_response_cookie_val() {
	ClickDesk_Storage.delete_prefs("auto_response_ck");
}
/**
 * Proactive Rule Conditions Prototype It takes the rule and check the
 * conditions based on the prefs
 */
var ClickDesk_Proactive_Rule_Conditions = {

	visit_count_pref_name : "visit_count",
	website_time : "site_visit_time",
	history_visit_count_pref_name : "history_visit_count",
	previous_chats_count : 0,
	returning_visitor_type : "clickdesk_returning_visitor",

	frequency : function(proactive) {

		if (!proactive)
			return false;

		// Get frequency type
		var frequency = proactive.frequency;

		// If show always no change
		if (!frequency || frequency == "everytime")
			return true;

		// Check the frequency cookie for this url
		var proactive_id = proactive.id;
		var frequency_pref_name = proactive_id
				+ frequency
				+ ClickDesk_Storage.get_prefs(proactive_id
						+ this.returning_visitor_type);

		// Get prefs
		var frequency_prefs = ClickDesk_Storage.get_prefs(frequency_pref_name);

		// If not set
		if (!frequency_prefs) {
			if (frequency == "once_per_day")
				ClickDesk_Storage.set_prefs(frequency_pref_name, "true", 1);
			else
				ClickDesk_Storage.create_cookie(frequency_pref_name, "true");
		}

		return (frequency_prefs == null);

	},

	is_referer_domain_same : function() {

		try {
			if (new URL(document.location.href).hostname == "localhost")
				return true;

			return new URL(document.location.href).hostname == new URL(
					document.referrer).hostname

		} catch (e) {
			return false;
		}
	},

	match_urls : function(url, url_regex, substring_check) {

		url = clickdesk_proactive_lowercase_value(url);
		url_regex = clickdesk_proactive_lowercase_value(url_regex);

		if (!url || !url_regex || url == "all" || url_regex == "all")
			return true;

		// Replace ? with /
		url = url.replace(/\?/g, "/");
		url_regex = url_regex.replace(/\?/g, "/");

		// Replace last char / with space
		url = url.replace(/\/$/, '');
		url_regex = url_regex.replace(/\/$/, '');

		// Check regex symbol in rule, if not check the equality
		if (url_regex.indexOf("*") == -1) {
			if (substring_check)
				return (url.indexOf(url_regex) != -1);
			return (url == url_regex);
		}

		// Repalce * in url_regex with any valid url character
		var matching_pattern = url_regex.replace(/\*/g, '<');
		matching_pattern = matching_pattern.replace(/</g,
				"[a-zA-Z0-9\\-\\:\\%\\?\\&\\=_./#]*");

		return !(url.match(matching_pattern) == null);

	},

	get_visit_count_cookie_prefs : function() {

		// Get cookie values
		var visit_count_prefs = ClickDesk_Storage
				.get_prefs(this.visit_count_pref_name);
		visit_count_prefs = (!visit_count_prefs) ? {} : visit_count_prefs;

		try {
			visit_count_prefs = JSON.parse(visit_count_prefs);
		} catch (e) {
		}

		return visit_count_prefs;

	},

	sort_and_update_visit_count : function(url_json) {

		// Prefs from cookie
		var visit_prefs_json = this.get_visit_count_cookie_prefs();
		visit_prefs_json = this.update_prefs(visit_prefs_json, url_json);

		ClickDesk_Storage.create_cookie(this.visit_count_pref_name, JSON
				.stringify(visit_prefs_json));

		// History Prefs
		var historyvisit_prefs_json = this.get_history_visit_prefs();
		historyvisit_prefs_json = this.update_prefs(historyvisit_prefs_json,
				url_json);

		ClickDesk_Storage.get_prefs(this.history_visit_count_pref_name, JSON
				.stringify(historyvisit_prefs_json));

	},

	update_prefs : function(visit_prefs_json, new_url_json) {

		for (key in new_url_json) {

			var count = 0;
			if (visit_prefs_json[key]) {
				count = visit_prefs_json[key];
			}

			visit_prefs_json[key] = count + 1;

		}

		// Total site views
		var website_count = 0;
		if (visit_prefs_json.website_count)
			website_count = visit_prefs_json.website_count;
		visit_prefs_json.website_count = website_count + 1;

		return visit_prefs_json;

	},

	get_page_visits : function(domain_name) {

		var visit_prefs = this.get_visit_count_cookie_prefs();
		if (domain_name == "website")
			return visit_prefs.website_count;

		// Current URL
		var url = window.location.href.split('?')[0];
		for ( var key in visit_prefs) {
			if (clickdesk_is_valid_proactive_condition("regex", url, key))
				return visit_prefs[key];
		}

		return 1;

	},

	set_website_time_stamps : function() {

		var time_stamp = ClickDesk_Storage.get_prefs(this.website_time);
		if (!time_stamp) {
			ClickDesk_Storage.create_cookie(this.website_time, new Date()
					.getTime());
			return;
		}

		else if (!this.is_referer_domain_same())
			ClickDesk_Storage.create_cookie(this.website_time, new Date()
					.getTime());

	},

	get_website_time_stamps : function() {

		var time_stamp = ClickDesk_Storage.get_prefs(this.website_time);
		if (!time_stamp)
			time_stamp = new Date().getTime();

		return time_stamp;

	},

	get_history_page_visits : function(domain_name) {

		var visit_prefs = this.get_history_visit_prefs();
		if (domain_name == "website")
			return visit_prefs.website_count;

		// Current URL
		var url = window.location.href.split('?')[0];
		for ( var key in visit_prefs) {
			if (clickdesk_is_valid_proactive_condition("regex", url, key))
				return visit_prefs[key];
		}

		return 1;

	},

	get_history_visit_prefs : function() {

		// Get cookie values
		/*var visit_count_prefs = ClickDesk_Storage
				.get_prefs(this.history_visit_count_pref_name);*/
			var visit_count_prefs = ClickDesk_Storage
				.get_prefs(this.visit_count_pref_name);	
		visit_count_prefs = (!visit_count_prefs) ? {} : visit_count_prefs;

		try {
			visit_count_prefs = JSON.parse(visit_count_prefs);
		} catch (e) {
		}

		return visit_count_prefs;

	},

	get_visitor_previous_chats : function(callback, email_id) {

		if (!email_id || this.previous_chats_count > 0) {
			return callback(0);
		}

		var json = {};
		json.email = email_id;
		console.log("ClickDesk_Widget_Util");
		console.log(ClickDesk_Widget_Util);
		
		json.widget_id = ClickDesk_Widget_Util.widget_id;

		ClickDesk_JSONP.send_request("https://clickdesk.dev.500apps.io/c/clkdsk"
				+ "/rest/visitor/proactive/chat/count", json, function(
				response) {
					
			return callback(response);  
		});

		//callback(1); //TODO: Soumya .comment this and. uncommnent above one
	},

	filter_rules_on_page_url : function(proactive_rules) {

		var matched_url_proactive_rules = [];

		// Iterate each rule
		for ( var i = 0; i < proactive_rules.length; i++) {

			var rule = proactive_rules[i];
			var conditions = rule.conditions;

			for ( var j = 0; j < conditions.length; j++) {

				var condition = conditions[j];
				if (condition.action_type != "page_url")
					continue;

				try {

					var val = condition.action_data.action_value;
					if (!val
							|| !ClickDesk_Proactive_Rule_Conditions.match_urls(
									window.location.href, val))
						continue;

					var new_rule = {};
					new_rule.id = rule.id;
					new_rule.created_time = rule.created_time;
					new_rule.url_regex = val;
					matched_url_proactive_rules.push(new_rule);

				} catch (e) {
					clickdesk_log(e);
				}

			}

		}

		// Sort by url length
		matched_url_proactive_rules = this.sort_by_key(
				matched_url_proactive_rules, "url_regex");

		var page_ids_json = {};
		for ( var k = 0; k < matched_url_proactive_rules.length; k++) {
			var each_obj = matched_url_proactive_rules[k];
			page_ids_json[each_obj.id] = "1";
		}

		var filtered_proactive_rules = [];
		for ( var key in page_ids_json) {

			var indexed_rule = this.get_proactive_rule_from_id(proactive_rules,
					key);

			if (!indexed_rule)
				continue;

			filtered_proactive_rules.push(indexed_rule);

		}

		for ( var k = 0; k < proactive_rules.length; k++) {

			if (page_ids_json[proactive_rules[k].id])
				continue;

			filtered_proactive_rules.push(proactive_rules[k]);

		}

		return filtered_proactive_rules;

	},

	get_proactive_rule_from_id : function(rules, id) {

		for ( var k = 0; k < rules.length; k++) {
			if (rules[k].id == id)
				return rules[k];
		}

		return null;

	},

	// Sort by keys
	sort_by_key : function(array, key) {

		return array.sort(function(a, b) {

			var x = a[key];
			var y = b[key];

			if (key == "url_regex")
				return ((x == y) ? (a["created_time"] < b["created_time"] ? 1
						: 0) : (((x.length < y.length) ? 1 : 0)));

		});
	}

}
/**
 * Handles proactive message popups
 */

var ClickDesk_Proactive_Handler = {

	// Cookie names
	session_cookie : "proactive_session_cookie",
	visitor_details_cookie : "proactive_visitor_winow",
	rules_cookie : "proactive_rules_cookie",
	rules_session_cookie : "proactive_rules_session_cookie",

	is_session_exists : false,

	// Prefs
	prefs : "",
	session_time_out : "",
	agent_reply_timer : "",

	// Global to set cookie values
	set_cookie_prefs : false,
	req_for_prefs : false,

	// Cookie name for proactive rules
	triggers_cookie : "chat_triggers_cookie",

	/**
	 * Creates proactive session and show message in window popup
	 * 
	 * @param message
	 * @returns {Boolean}
	 */
	show_message : function(proactiveJSON, proactive_message, sound_url) {
		if(widgetPrefsJSON.template_prefs.template == "agilechat_theme"){
			return;
		}

		try {
			proactiveJSON = JSON.parse(proactiveJSON);
		} catch (e) {
		}

		// Not show if there is a session
		var session = ClickDesk_Widget_Session.get_active_session();

		if (!proactiveJSON || proactiveJSON == null
				|| (session && session.session_id.indexOf("BD") != 0))
			return false;

		clickdesk_log("I am out");

		if (!proactive_message)
			proactive_message = clickdesk_get_proactive_action_message(proactiveJSON);

		if (!proactive_message)
			return false;

		
		proactive_message = clickdesk_replace_special_characters(proactive_message);

		// Show chat box
		CLICKDESK_CHAT_WINDOW_UI.show_chat_box();

		// Display proactive message
		ClickDesk_Chat_Window_Util.append_message(unescape(proactive_message),
				"srvstaticmsg", "proactive");

		ClickDesk_GA.trigger_event("proactive_triggered",
				((widgetPrefsJSON.status == "online") ? "Online" : "Offline"));

		// Play Sound if user permits
		ClickDesk_Sounds.play_send(proactiveJSON.sound_url);

		// Blink title
		// ClickDesk_Title_Blinker.trigger(proavtive_message, 20);

		ClickDesk_Proactive_Handler.is_session_exists = true;

		ClickDesk_Proactive_Handler.prefs = proactiveJSON;

		// ClickDesk_Storage.set_prefs("active_popup", "active");

	},

	/**
	 * Removes proactive session cookie
	 */
	remove_time_out : function() {

		clearTimeout(ClickDesk_Proactive_Handler.session_time_out);
	},

	set_agent_reply_timer : function(trigger, time_in_secs) {
		ClickDesk_Proactive_Handler.agent_reply_timer = setTimeout(function(
				trigger) {

		}, time_in_secs * 1000);
	},
	remove_agent_reply_timer : function() {
		clearTimeout(ClickDesk_Proactive_Handler.agent_reply_timer);
	},

	/**
	 * Checks session, status of the widget and initializes proactive session
	 * after wait time
	 * 
	 * @returns {Boolean}
	 */
	initialize_window : function(action) {

		try {

			// Check session here
			var session = ClickDesk_Widget_Session.get_active_session();
			if (session)
				return;

			// Get previou chats from email
			ClickDesk_Proactive_Rule_Conditions
					.get_visitor_previous_chats(
							function(count) {

								ClickDesk_Proactive_Rule_Conditions.previous_chats_count = count;

								// Get proactive json
								ClickDesk_Proactive_Handler
										.get_message(
												function(proactiveJSON) {

													console
															.log("proactiveJSON = "
																	+ proactiveJSON);

													clickdesk_execute_trigger_on_action(proactiveJSON);

												}, action);

							}, ClickDesk_Storage.get_prefs("visitor_email"));

		} catch (e) {

			clickdesk_log("exception while executing proactive rules: "
					+ e.description);
		}

	},

	/**
	 * Gets appropriate proactive message
	 */
	get_message : function(callback, action) {

		// Check in system (cookie/local-storage)
		var proactive_rules = ClickDesk_Storage
				.get_prefs(ClickDesk_Proactive_Handler.triggers_cookie);

		var proactive_rules_updated = widgetPrefsJSON.proactive_rules_updated;

		// Get proactive rule based on proactive settings
		if (proactive_rules && proactive_rules != null
				&& !proactive_rules_updated) {

			return callback(ClickDesk_Proactive_Handler.satisfied_rule(
					proactive_rules, action));
		}

		// Donot go to server for every call
		if (proactive_rules_updated
				&& ClickDesk_Proactive_Handler.req_for_prefs) {

			return callback(ClickDesk_Proactive_Handler.satisfied_rule(
					proactive_rules, action));
		}

		ClickDesk_Proactive_Handler.req_for_prefs = true;

		// If not send the request to get proactive rules
		var json = {};
		json.widget_id = ClickDesk_Widget_Util.widget_id;

		ClickDesk_JSONP.send_request(CLICKDESK_SERVER_PATH
				+ "/rest/visitor/proactive", json, function(response) {

			clickdesk_log(response.length);

			var proactive_rules = CLICKDESK_CHAT_WINDOW_UI.stringify(response);

			// Set in cookie
			ClickDesk_Storage.set_prefs(
					ClickDesk_Proactive_Handler.triggers_cookie,
					proactive_rules);

			return callback(ClickDesk_Proactive_Handler.satisfied_rule(
					proactive_rules, action));

		});

	},

	/**
	 * Returns Satisfied proactive rule
	 */
	satisfied_rule : function(proactive_rules, action) {

		// If proactive rules are not available
		if (!proactive_rules || proactive_rules == null)
			return null;

		// Check type of rules
		if (typeof proactive_rules === "string")
			proactive_rules = JSON.parse(proactive_rules);

		try {
			proactive_rules = JSON.parse(proactive_rules);
		} catch (e) {
		}

		// Sort based on page url size
		// proactive_rules.sort(clickdesk_sort_on_page_urls);

		// Only once on start
		if (action == "start" && !ClickDesk_Proactive_Handler.set_cookie_prefs) {

			ClickDesk_Proactive_Handler.set_cookie_prefs = true;

			// Set user time
			ClickDesk_Proactive_Rule_Conditions.set_website_time_stamps();

			// Sattisfied urls JSON
			var url_json = clickdesk_same_domain_urls_json(proactive_rules);
			ClickDesk_Proactive_Rule_Conditions
					.sort_and_update_visit_count(url_json);

		}

		// Filter rules on condition
		proactive_rules = clickdesk_get_action_based_rules(proactive_rules,
				action);
		if (!proactive_rules || proactive_rules.length <= 0) {
			return;
		}

		// Sort on created time
		proactive_rules = ClickDesk_Proactive_Rule_Conditions
				.filter_rules_on_page_url(proactive_rules);

		// Iterate each rule
		for ( var i = 0; i < proactive_rules.length; i++) {

			var rule = proactive_rules[i];

			// Check conditions
			if (clickdesk_check_proactive_conditions(rule)
					&& ClickDesk_Proactive_Rule_Conditions.frequency(rule)) {
				clickdesk_log("satisfied" + rule);
				return rule;
			}

		}

		return null;

	},

	/**
	 * Shows Visitor details popup in proactive window
	 */
	show_proactive_visitor_details_window : function(from) {

		// Check User setting for the form
		var user_prefs = widgetPrefsJSON.online_form_prefs;
		if (user_prefs && user_prefs.show_proactive_visitor_info_form
				&& user_prefs.show_proactive_visitor_info_form != "true")
			return;

		// Get ClickDesk session
		var sessionJSON = ClickDesk_Widget_Session.get_active_session();
		if (from && from == "chat_box" && !sessionJSON)
			return;

		// check proactive session
		if (!(ClickDesk_Storage
				.get_prefs(ClickDesk_Proactive_Handler.session_cookie)))
			return false;

		// Check visitor details window closed or saved
		if (ClickDesk_Storage
				.get_prefs(ClickDesk_Proactive_Handler.visitor_details_cookie))
			return false;

		// check wether visitor details already exists
		// var visitor_name = ClickDesk_Storage.get_prefs("visitor_name");
		// var visitor_email = ClickDesk_Storage.get_prefs("visitor_email");
		// var custom = ClickDesk_Storage.get_prefs("custom_field");
		// var custom_req = user_prefs.prechat_form_custom_field_required;
		//
		// if ((visitor_name && visitor_email && (!custom_req || custom_req !=
		// "true"))
		// || (visitor_name && visitor_email && custom_req
		// && custom_req == "true" && custom))
		// return false;

		// Reset field values
		clickdesk_cd_fill_form_fields_with_cookie_values("clickdesk_proactive_visitor_details_window");

		// Check all the required fields data available
		if (clickdesk_is_all_fields_has_value("clickdesk_proactive_visitor_details_window"))
			return false;

		// To support custom css proactive visitor details form form in popup
		if (ClickDesk_Custom_CSS.is_customization_enabled_in_popup()) {

			try {
				// Clear the chat popup
				ClickDesk_DOM
						.wrap('#clickdesk_proactive_visitor_details_window')[0].innerHTML = convert_string_to_html(
						CD_Live_Chat.get_custom_prefs().cd_custom_widget_template)
						.getElementById(
								"clickdesk_proactive_visitor_details_window").innerHTML;

				// Reinitialize proactive visitor details form events
				clickdesk_initialize_proactive_form_events();

			} catch (e) {
			}

		}

		// Check any one of the field is required to hide cancel button
		if (clickdesk_is_any_field_required("clickdesk_proactive_visitor_details_window")) {
			try {
				ClickDesk_DOM.set_style_by_id(
						"cd_proactive_visitor_info_cancel", {
							'display' : 'none !important'
						});
			} catch (e) {
			}
		}

		// Show cancel button if no required fields are there
		// if (custom_req == "true"
		// || (user_prefs.prechat_form_email_required &&
		// user_prefs.prechat_form_email_required == "true")
		// || (user_prefs.prechat_form_name_required &&
		// user_prefs.prechat_form_name_required == "true")) {
		// try {
		// ClickDesk_DOM.set_style_by_id(
		// "cd_proactive_visitor_info_cancel", {
		// 'display' : 'none !important'
		// });
		// } catch (e) {
		// }
		// }

		try {
			ClickDesk_DOM.set_style_by_id(
					"clickdesk_proactive_visitor_details_window", {
						'display' : 'block'
					});
			ClickDesk_DOM.wrap("#cd_proactive_visitor_name")[0].focus();

		} catch (err) {
		}

	},

	/**
	 * Shows Visitor details popup in proactive window
	 */
	hide_proactive_visitor_details_window : function() {

		ClickDesk_DOM.set_style_by_id(
				"clickdesk_proactive_visitor_details_window", {
					'display' : 'none'
				});

	},

	/**
	 * Check wether the visitor details window open
	 */
	is_visitor_details_window_open : function() {

		try {

			return (ClickDesk_DOM
					.wrap("#clickdesk_proactive_visitor_details_window")[0].style.display != "none");

		} catch (e) {
			// TODO: handle exception
		}

		return false;

	}

};

function clickdesk_execute_trigger_on_action(proactiveJSON) {

	if (!proactiveJSON)
		return false;

	// Check for hide offline and status
	if (widgetPrefsJSON.status == "offline"
			&& proactiveJSON.show_offline == "false")
		return false;

	// Execute actions
	clickdesk_execute_proactive_triggers(proactiveJSON);

}

function clickdesk_get_proactive_action_message(proactive_json) {

	try {
		proactive_json = JSON.parse(proactive_json);
	} catch (e) {
	}

	if (!proactive_json.triggers && proactive_json.message) {
		return proactive_json.message;
	}

	var triggers = proactive_json.triggers;
	if (!triggers)
		return;

	for ( var i = 0; i < triggers.length; i++) {
		if (triggers[i].action_type == "message")
			return triggers[i].action_data.message;

	}

}function clickdesk_get_action_based_rules(proactive_rules, condition_type) {

	if (!proactive_rules)
		return;

	if (condition_type == "start")
		condition_type = "when_widget_loaded";

	else if (condition_type == "open")
		condition_type = "clicking_on_bubble";

	else if (condition_type == "message")
		condition_type = "when_chat_initiated";

	// Result rules
	var conditional_rules = new Array();

	// Iterate rules
	for ( var i = 0; i < proactive_rules.length; i++) {

		var rule = proactive_rules[i];
		if (rule.run_trigger == condition_type)
			conditional_rules.push(rule);

	}

	return conditional_rules;

}

function clickdesk_same_domain_urls_json(proactive_rules) {

	var json = {};

	// Iterate rules
	for ( var i = 0; i < proactive_rules.length; i++) {

		var rule = proactive_rules[i];
		var conditions = rule.conditions;
		if (!conditions || conditions.length == 0)
			continue;

		for ( var j = 0; j < conditions.length; j++) {

			if (conditions[j].action_type != "page_url")
				continue;

			var action_data = conditions[j].action_data;
			if (!action_data)
				continue;

			var action_condition = action_data.action_condition;
			if (action_condition == "neq" || action_condition == "not_contains")
				continue;

			var url = window.location.href.split('?')[0];
			if (clickdesk_is_valid_proactive_condition(action_condition,
					window.location.href, action_data.action_value))
				json[action_data.action_value] = "yes";

		}

	}

	return json;
}function clickdesk_execute_proactive_triggers(rule) {

	var triggers = rule.triggers;
	if (!triggers || triggers.length <= 0) {
		return true;
	}

	// iterate over triggers
	for ( var i = 0; i < triggers.length; i++) {

		var action_type = triggers[i].action_type;
		var trigger_action = triggers[i].action_data;

		if (action_type == "hide_chat") {

			setTimeout(function() {

				// Hide the window
				ClickDesk_Window_Callback.hide();

				// Hide bubble
				clickdesk_hide_bubble();

			}, 100);

			return;

		} else if (action_type == "expand_chat") {
			CLICKDESK_LIVECHAT.show();

		} else if (action_type == "message") {

			if (!trigger_action)
				return;

			clickdesk_fire_trigger_when(rule.run_trigger, trigger_action,
					function(action_data) {
						ClickDesk_Proactive_Handler.show_message(JSON
								.stringify(rule), action_data.message,
								rule.sound_url);

					});

		}

	}

}

function clickdesk_fire_trigger_when(rule_condition, trigger, callback) {

	var condition = trigger.trigger_condition;
	if (condition == "immediately") {

		setTimeout(function() {
			callback(trigger);
		}, 10);

		return;
	}

	// Wait for some time
	var delay = trigger.trigger_delay;
	delay = (!delay) ? 0 : delay;

	if (rule_condition == "when_widget_loaded") {
		ClickDesk_Proactive_Handler.session_time_out = setTimeout(function() {
			callback(trigger);
		}, (parseInt(delay) * 1000));
	}

	else {
		setTimeout(function() {
			callback(trigger);
		}, (parseInt(delay) * 1000));

	}

}/**
 * Validates session in server and create the window with the valid session
 */
function clickdesk_refresh_clickdesk_window(sessionId) {

	if (!sessionId)
		return false;

	// Session is Valid - let's reconnect channel id
	var channel = ClickDesk_Storage
			.get_prefs(ClickDesk_Widget_Channel.channel_id);
	if ((channel != null && !ClickDesk_Widget_Channel.widget_socket)
			|| ClickDesk_Widget_Channel.is_channel_closed) {

		clickdesk_log("clickdesk_establish_channel");
		// Establish Channel
		ClickDesk_Widget_Channel.create_socket(channel);
	}

	if (ClickDesk_Widget_Channel.is_channel_service_restricted_user()) {

		var channel_name = ClickDesk_Storage
				.get_prefs(ClickDesk_Widget_Pusher_Visitor.pusher_channel_token);

		Clickdesk_Client_Connection_Ping_Pong.is_socket_instance = false;
		ClickDesk_Widget_Pusher_Visitor.channal_subscribe(channel_name);

	}

	// Show chat window
	CLICKDESK_CHAT_WINDOW_UI.show_chat_box();
	// clickdesk_show_chat_box();

	// Show loading until server response comes
	clickdesk_toggle_loading_icon("show");

	// Validate session in server
	ClickDesk_Queue_Chat_Manage.validateSession(sessionId.trim());
}

function clickdesk_get_server_session_status(json, callback){
	// Snack Request to validate session
	ClickDesk_JSONP
			.send_request(
					CLICKDESK_SERVER_PATH + "/rest/visitor/session/validate",
					json,
					function(response) {

			// Stop Queue polling
			ClickDesk_Queue_Chat_Manage.stopPoll();

			// Hide loading
			clickdesk_toggle_loading_icon("hide");

			// If session is not found
			if (response.status != "success") {

				clickdesk_log("Deleting old session values");

				// Clear the chat popup
				ClickDesk_DOM.wrap('#clickdesk_session')[0].innerHTML = '';

				// Delete Session
				ClickDesk_Storage
						.delete_prefs(ClickDesk_Widget_Session.active_session);
				ClickDesk_Storage
						.delete_prefs(ClickDesk_Widget_Channel.channel_id);

				// Show Prechat Form
				CLICKDESK_CHAT_WINDOW_UI.show_prechat_window();

				return false;

			}

			clickdesk_log("Session valid at server");

			/**
			 * Publish Message to agent via pusher
			 */
			ClickDesk_Widget_Pusher_Visitor
					.push_message("chat_session_initiated");

			// get the agent and archive message json
			var agentJSON = response.response.agent;
			clickdesk_set_session_agent_info(agentJSON, "refresh");

			// Reconstruct the chat Window
			clickdesk_render_session_window(response.response.archive);
			
			//show proactive visitor details popup
			ClickDesk_Proactive_Handler.show_proactive_visitor_details_window();

			// Initialize auto response timer
			ClickDesk_Message_Auto_Response
					.initilaize_message_auto_response_timer();

			// Get queued status
			var status = response.response.session_status;
			if (!status || status != "queued")
				return;

			// Start polling
			ClickDesk_Queue_Chat_Manage.startPoll();

			// Reset queued status
			ClickDesk_Widget_Session.queued_session = true;

			ClickDesk_DOM.wrap('#clickdesk_chat_session').addClass(
					'queued');

			// Queued response
			var queuedResponse = response.response.queue_message;
			queuedResponse = (!queuedResponse) ? ClickDesk_Globals.custom_messages.session_queued_message
					: queuedResponse;

			ClickDesk_Chat_Window_Util.append_message(
					queuedResponse, "srvstaticmsg");
			
			//Show Offline Message Link
			var offline_message = (widgetPrefsJSON.system_message_prefs && widgetPrefsJSON.system_message_prefs.QUEUED_OFFLINE_MESSAGE_LABEL) ? widgetPrefsJSON.system_message_prefs.QUEUED_OFFLINE_MESSAGE_LABEL
					: ClickDesk_Globals.custom_messages_new.queued_offline_message_label;
			CLICKDESK_CHAT_WINDOW_UI.show_offline_window_link(offline_message);
			
			setTimeout(function(){
				ClickDesk_DOM.wrap('#clickdesk_session')[0].scrollTop = ClickDesk_DOM.wrap('#clickdesk_session')[0].scrollHeight;
			},500);
	});
}

// Prompt window with old session history
function clickdesk_render_session_window(history) {

	if (!history)
		return false;

	clickdesk_log(history);

	// Reset textarea value to empty/Cookie message before popout
	var before_popout_message = "";
	try {
		if (cd_visitor_typing_msg)
			before_popout_message = cd_visitor_typing_msg;
	} catch (err) {
	}

	// Set typing message if any
	ClickDesk_DOM.wrap("#broadcastchat")[0].value = before_popout_message;

	// Iterate the history
	for ( var i = 0; i < history.length; i++) {

		var each_session = history[i];

		if (!each_session.message)
			continue;

		// Get chat agent
		var chat_from = each_session.from;

		// Get chat message
		var chat_message = each_session.message;

		try {
			chat_message = isNaN(chat_message) ? JSON.parse(chat_message)
					: chat_message;
		} catch (e) {
		}

		// Specify it is agent or visitor
		if (chat_from == "visitor")
			chat_from = ClickDesk_Globals.visitor_name;
		else if (chat_from == "agent")
			chat_from = ClickDesk_Globals.agent_nick_name;

		// Append to window
		ClickDesk_Chat_Window_Util.append_message(chat_message, chat_from,
				each_session.epoch_time);

	}

	CLICKDESK_CHAT_WINDOW_UI.agilethemevent();
	
}

// Show/Hide loading icon
function clickdesk_toggle_loading_icon(action) {

	switch (action) {
	case "show":

		// Show loading image
		var session_ele = ClickDesk_DOM.wrap('#clickdesk_session')[0];
		session_ele.innerHTML = '<img src="'
				+ ClickDesk_Globals.img_cloud_path
				+ '/images/archiveLoad.gif"  style="position:absolute;top:35%;left:38%;display:block;" />';

		break;

	case "hide":

		// Clear the chat popup
		var session_ele = ClickDesk_DOM.wrap('#clickdesk_session')[0];
		session_ele.innerHTML = '';
		break;

	}

}


/** Queue Refresh **/
var ClickDesk_Queue_Chat_Manage = {
	isQueuedChat : false,
	defaultTime : 60000,
	timer : null,

	getSessionId : function(){
		// Refresh chat session
		var sessionJSON = ClickDesk_Widget_Session.get_active_session();
		return eval("sessionJSON."
					+ ClickDesk_Widget_Session.session_id);
	},
	isSessionInQueue : function(){
		// Refresh chat session
		var sessionJSON = ClickDesk_Widget_Session.get_active_session();
		if(!sessionJSON)
			 return false;

		var sessionId = eval("sessionJSON."
					+ ClickDesk_Widget_Session.session_id);
		if(!sessionId || sessionId.indexOf("BD") != 0)
			  return false;

		return true;
	},

	startPoll : function(time){
		this.isQueuedChat = true;
		if(!time)
			 time = this.defaultTime;

		this.timer = setTimeout(function(){
			if(!ClickDesk_Queue_Chat_Manage.isQueuedChat)
				return;

			if(!ClickDesk_Queue_Chat_Manage.isSessionInQueue()) {
				ClickDesk_Queue_Chat_Manage.stopPoll();
				return;
			}

			var sessionId = ClickDesk_Queue_Chat_Manage.getSessionId();
			ClickDesk_Queue_Chat_Manage.validateSession(sessionId);

		}, time);
	},

	stopPoll : function(){
		try{clearTimeout(this.timer);this.timer = null;}catch(e){}
		this.isQueuedChat = false;
	},

	validateSession : function(sessionId) {
		// Validate session in server
		var json = {};
		json.session_id = sessionId.trim();
		json.visitor_url = window.location.href;

		clickdesk_get_server_session_status(json);
	}
};
/**
 * Chat Session Handler
 */
var ClickDesk_Widget_Session = {

	// Session cookie names
	active_session : "active_session",
	session_id : "session_id",
	visitor_token : "visitor_token",
	sent_session_request_count : 0,

	// Blocked chat period and name
	blocked : "block_chat",
	blocked_period : 30,

	// Visitor History
	history : "archive_session_id",
	history_period : 30,

	// Session Queued reference
	queued_session : false,

	// Hold Contineous messages from visitor and send to agent when there is a
	// valid
	// session
	archived_messages : new Array(),

	// Get Active session from cookie
	get_active_session : function() {

		// Read from cookie
		var sessionJSONString = ClickDesk_Storage
				.get_prefs(ClickDesk_Widget_Session.active_session);

		// Session_cookie_value
		if (sessionJSONString) {
			return JSON.parse(sessionJSONString);
		}

		return null;

	},

	// Check Session
	check_and_render_active_session : function() {

		clickdesk_log("Checking session");

		// Get Active Session
		var sessionJSON = ClickDesk_Widget_Session.get_active_session();

		if (sessionJSON) {

			// Check if Session was established
			var sessionId = eval("sessionJSON."
					+ ClickDesk_Widget_Session.session_id);
			clickdesk_log(sessionId);

			// If there is no session show prechat window
			if (!sessionId)
				// Show Prechat Form
				return CLICKDESK_CHAT_WINDOW_UI.show_prechat_window();

			// Re construct window
			return clickdesk_refresh_clickdesk_window(sessionId);

		}

		// Show offline/prechat window
		if (widgetPrefsJSON.status == "offline")
			// Show Offline Form
			CLICKDESK_CHAT_WINDOW_UI.show_offline_window();
		else
			// Show Prechat Form
			CLICKDESK_CHAT_WINDOW_UI.show_prechat_window();

		return false;

	},

	/**
	 * Initializes chat session with type
	 */
	initialize_session : function(message, chatType, callbackId) {

		// Reset pointer events
		try {
			ClickDesk_DOM.set_style_by_id("clickdesk_close", {
				pointerEvents : "all"
			})
			ClickDesk_DOM.set_style_by_id("clickdesk_popout", {
				pointerEvents : "all"
			})

		} catch (e) {
		}

		// Connect to server for visitor token and channel id
		ClickDesk_Widget_Channel
				.get_channel_token(function(visitor_token) {

					// Form data
					var json = clickdesk_serialize_form_data("ClickdeskprechatForm");

					// Handle proactive chats
					if (ClickDesk_Proactive_Handler.is_session_exists) {
						json.proactive_chat = "proactive";

						// Set proactive session cookie
						ClickDesk_Storage.set_prefs(
								ClickDesk_Proactive_Handler.session_cookie,
								"proactive_session");
						ClickDesk_Proactive_Handler
								.show_proactive_visitor_details_window();

					}

					if (ClickDesk_Proactive_Handler.is_session_exists
							&& (!chatType || ClickDesk_Proactive_Handler.prefs)) {
						json.user_proactive_message = clickdesk_get_proactive_action_message(ClickDesk_Proactive_Handler.prefs);
					}

					json.visitor_token = visitor_token;
					json.message = message;//TODO:Soumya change message in the left side 2 user_message
					json.visitor_info = ClickDesk_Visitor_Info
							.get_visitor_info()

					if (ClickDesk_Globals.forced_chat_agent_id)
						json.forced_chat_agent_id = ClickDesk_Globals.forced_chat_agent_id;

					// ("add_visitor_path");
					// json.widget_id = CLICKDESK_CHAT_WINDOW_UI
					// 		.get_user_seleted_department("prechat");

					//TODO:Soumya uncomment above comment below 
					
					console.log("json");
					console.log(json);
					

					// Fields
					var fieldsArray = clickdesk_serialize_form_fields("ClickdeskprechatForm");
					json.prechat_fields = CLICKDESK_CHAT_WINDOW_UI
							.stringify(fieldsArray);

					// Send request - we will now wait for response to come
					// back from the server
					/*
					 * ClickDesk_JSONP .send_request( CLICKDESK_SERVER_PATH +
					 * "/rest/visitor/chat/startbroadcast", json,
					 * function(response) { // Handle response
					 * ClickDesk_Widget_Session
					 * .handle_create_session_response(response);
					 * 
					 * });
					 */

					var sessionJSON = ClickDesk_Widget_Session
							.get_active_session();
					if (sessionJSON)
						return;

					var count = ClickDesk_Widget_Session.sent_session_request_count;

					if (!count) {
						ClickDesk_Widget_Session.sent_session_request_count++;
					} else
						json.duplicate_request = "true";

					try {
						if (ClickDesk_Global_Users.HTC_customers
								.indexOf(widgetPrefsJSON.userid) != -1)
							json.prechat_fields = "";
					} catch (e) {
					}

					//TODO:Soumya REmove server static path
					json.widget_id='4416223588075907';//Soumya remove
					//json.session_id='4867897';
					console.log("json");
					console.log(JSON.stringify(json));
					ClickDesk_JSONP_Tips
							.jsonp(
									"https://clickdesk.dev.500apps.io/c/clkdsk"
											+ "/rest/visitor/chat/startbroadcast",
									json,
									function success(response) {
										//var response = {"response":{"broadcast_id":"BD1600613865922"},"status":"success"}
										// Handle response
										ClickDesk_Widget_Session
												.handle_create_session_response(response);

									}, function failure(error) {
										console.log("ajaxx failll in msg startbroadcast call")										
										
										//var response = {"response":{"broadcast_id":"BD1600613865922"},"status":"success"}
										// TODO: Soumya - Added
										// ClickDesk_Widget_Session.handle_create_session_response(response);

										clickdesk_log("error");
										clickdesk_log(error);

									}, callbackId);

				});

	},


	
	// Handle session id and visitor token from server
	handle_create_session_response : function(response) {

		clickdesk_log(response);

		// Reset pointer events
		try {
			ClickDesk_DOM.set_style_by_id("clickdesk_close", {
				pointerEvents : "all"
			})
			ClickDesk_DOM.set_style_by_id("clickdesk_popout", {
				pointerEvents : "all"
			})

		} catch (e) {
			// TODO: handle exception
		}

		if (response.response) {

			// Set focus to input field
			clickdesk_set_focus_to_message_box();

			// Clear session timeout
			clearTimeout(ClickDesk_Globals.session_timeout_timer);

		}

		if (!response.status)
			return false;

		// If success/Queued
		if (response.status == "success" || response.status == "queued") {

			// Store Broadcast ID as session id in cookie
			var broadcastId = response.response.broadcast_id;

			// Store in cookie
			ClickDesk_Widget_Session.create_session_cookie(broadcastId,
					ClickDesk_Widget_Channel.visitor_token);

			ClickDesk_Widget_Session.send_archived_messages();

			if (response.status == "queued") {
				// Start polling
				ClickDesk_Queue_Chat_Manage.startPoll();

				// Reset queued status
				ClickDesk_Widget_Session.queued_session = true;

				var offline_message = (widgetPrefsJSON.system_message_prefs && widgetPrefsJSON.system_message_prefs.QUEUED_OFFLINE_MESSAGE_LABEL) ? widgetPrefsJSON.system_message_prefs.QUEUED_OFFLINE_MESSAGE_LABEL
						: ClickDesk_Globals.custom_messages_new.queued_offline_message_label;

				ClickDesk_Chat_Window_Util.append_message(
						response.response.message, "srvstaticmsg");

				// show offline message link
				CLICKDESK_CHAT_WINDOW_UI
						.show_offline_window_link(offline_message);

				ClickDesk_DOM.wrap('#clickdesk_chat_session')
						.addClass('queued');

				ClickDesk_GA.trigger_event("queued_chat", "-");

			} else {

				// Set auto response prefs and initialize timer
				ClickDesk_Message_Auto_Response.set_auto_response_prefs();

				// Check active session and show upload file option
				CLICKDESK_CHAT_WINDOW_UI.toggle_file_uploader();

				// Initialize shopify
				ClickDesk_Shopify.get_current_cart_("force");
			}

			return false;
		}

		var errorMessage = response.errormssg;

		// Show offline link after 13secs when all Agents busy or all
		// Agents are in offline
		if (errorMessage == "agents_not_available") {

			ClickDesk_Globals.offline_prechat_session_id = response.session_id;

			clearTimeout(ClickDesk_Globals.session_timeout_timer);
			setTimeout("CLICKDESK_CHAT_WINDOW_UI.show_offline_window_link();",
					15000);

			if (response.message)
				ClickDesk_Chat_Window_Util.append_message(response.message,
						"srvstaticmsg");

		} else {
			ClickDesk_Chat_Window_Util.append_message(errorMessage,
					"srvstaticmsg");
		}

		// Disable chat button
		ClickDesk_DOM.wrap('#broadcastchat')[0].setAttribute('disabled', true);

		// Close Channel Socket
		ClickDesk_Widget_Channel.close_socket();

	},

	// Add client id to chat session
	add_client_id : function() {

		var json = {};
		json.visitor_token = ClickDesk_Widget_Channel.visitor_token;
		json.message = message; //TODO:Soumya change message in the left side 2 user_message

		ClickDesk_JSONP.send_request(CLICKDESK_SERVER_PATH
				+ "/rest/visitor/channel/add-clientid", json,
				function(response) {
					clickdesk_log(response);
				});

	},
	// Set Session ID and Token in Cookie
	create_session_cookie : function(sessionId, token) {

		// Store in Session Cookie
		var session = {};
		session.session_id = sessionId;
		session.visitor_token = token;

		// Store in Cookie
		ClickDesk_Storage.set_prefs(ClickDesk_Widget_Session.active_session,
				JSON.stringify(session));

		// Save in archived sessions
		if (sessionId.indexOf("BD") == 0)
			return;

		var archive = ClickDesk_Storage
				.get_prefs(ClickDesk_Widget_Session.archived_messages);

		// Set archive as sessionID (if null)
		if (!archive || archive.split(",").length >= 40) {
			archive = sessionId;
		} else {
			archive += (", " + sessionId);
		}

		ClickDesk_Storage.set_prefs(ClickDesk_Widget_Session.history, archive,
				ClickDesk_Widget_Session.history_period);

	},

	// Delete session from cookie
	delete_session : function(event_type) {

		if (event_type)
			this.close_chat();

		// Check session existence to send message to agent via pubnub
		var sessionJSON = ClickDesk_Widget_Session.get_active_session();
		if (sessionJSON) {
			/**
			 * Publish Mesage to agent via pubnub
			 */
			ClickDesk_Widget_Pusher_Visitor.push_message("chat_session_closed");

			ClickDesk_Postchat.show_window(sessionJSON);

			ClickDesk_Globals.forced_chat_agent_id = null;
			ClickDesk_Globals.forced_chat_messages = [];

		}

		try {
			// Remove min class
			ClickDesk_DOM.wrap('.clickdesk_b').removeClass('min');
		} catch (e) {
			// TODO: handle exception
		}

		try {

			clickdesk_set_agent_name_and_image(ClickDesk_Globals.window_title,
					ClickDesk_Globals.company_logo);

			clickdesk_show_browser_phone_option();

		} catch (e) {
			// TODO: handle exception
		}

		// Delete Session from cookie
		ClickDesk_Storage.delete_prefs(ClickDesk_Widget_Session.active_session);
		ClickDesk_Storage.delete_prefs(ClickDesk_Widget_Channel.channel_id);
		ClickDesk_Storage.delete_prefs(ClickDesk_Rating.user_session_rating);
		ClickDesk_Storage
				.erase_cookie(ClickDesk_Proactive_Handler.visitor_details_cookie);
		ClickDesk_Storage
				.delete_prefs(ClickDesk_Proactive_Handler.session_cookie);
		ClickDesk_Storage.delete_prefs("active_popup");
		ClickDesk_Storage.delete_prefs("cd_agent_pics");

		// Reset messages array
		ClickDesk_Widget_Session.archived_messages = new Array();

		// Set chat rationg to default
		ClickDesk_Rating.set_ui(0);

		// Clear session timeout
		clearTimeout(ClickDesk_Globals.session_timeout_timer);

		// Delete typing info
		ClickDesk_DOM.find_and_remove('clickdesk_session',
				'clickdesk-agent-typing');

		// Check active session and show upload file option
		CLICKDESK_CHAT_WINDOW_UI.toggle_file_uploader();

		clickdesk_reset_form_select();

		ClickDesk_Globals.agent_id = null, ClickDesk_Globals.agent_json = null,
				ClickDesk_Globals.is_call_req_for_audio = null;

		// ClickDesk_Widget_Channel.visitor_token = null;
		ClickDesk_Widget_Session.sent_session_request_count = 0;

		// Stop queueing
		ClickDesk_Queue_Chat_Manage.stopPoll();

		// Hide audio/video wiondow
		ClickDesk_Call.hide_error();

		// Close call window reference
		if (ClickDesk_Call.call_window)
			ClickDesk_Call.call_window.close();

	},

	// Send request to server to delete the session (This called when visitor
	// close
	// the cross mark)
	close_chat : function() {

		var json = {};

		if (ClickDesk_Globals.offline_prechat_session_id) {

			json.visitor_token = ClickDesk_Globals.offline_prechat_session_id;

			ClickDesk_Globals.offline_prechat_session_id = "";

		} else {

			// Get session from cookie
			var sessionJSON = ClickDesk_Widget_Session.get_active_session();

			if (!sessionJSON)
				return false;

			json.visitor_token = sessionJSON.visitor_token;
		}

		// Close Session
		ClickDesk_JSONP.send_request(CLICKDESK_SERVER_PATH
				+ "/rest/visitor/session/close", json, function(response) {
		});

	},

	/**
	 * Sends messages to agents who are in gropu once session establish
	 */
	send_archived_messages : function() {

		if (!ClickDesk_Widget_Session.archived_messages
				|| ClickDesk_Widget_Session.archived_messages.length == 0)
			return;

		var length = ClickDesk_Widget_Session.archived_messages.length;
		for ( var i = 0; i < length; i++) {

			var visitor_message = ClickDesk_Widget_Session.archived_messages
					.shift();

			// Do not send first message
			if (i == 0)
				continue;

			// Get Active Session
			var sessionJSON = ClickDesk_Widget_Session.get_active_session();
			if (!sessionJSON)
				return false;

			// Check if Session was established
			var sessionId = eval("sessionJSON."
					+ ClickDesk_Widget_Session.session_id);
			if (!sessionId)
				return false;

			// Send to agent
			ClickDesk_Message_Util.send_chat(sessionId,
					visitor_message.message, visitor_message.callback_id);

		}

	},

	// Check session exists in website on page reload
	init_check_session : function() {

		// Get Active Session
		var sessionJSON = ClickDesk_Widget_Session.get_active_session();

		// Read active popup cookie value
		var activeSession = ClickDesk_Storage.get_prefs("active_popup");

		// Check popout option
		if (ClickDesk_Window_Popout.is_window_in_popup() || sessionJSON)
			activeSession = true;

		// Get agent status
		var agentStatus = widgetPrefsJSON.status;

		// Show window if session exists
		if (activeSession || (agentStatus == "online" && sessionJSON)) {

			// Check popout option
			if (ClickDesk_Window_Popout.is_window_in_popup()
					&& agentStatus == "online") {
				try {
					/*if(widgetPrefsJSON.template_prefs.template == "agilechat_theme"){
						return false;
					}*/
					ClickDesk_Proactive_Handler.show_message(proactiveJSON);
					return false;
				} catch (e) {
				}
			}

			if (clickdesk_is_bubble_enabled()
					|| ClickDesk_Window_Popout.is_window_in_popup())
				CLICKDESK_LIVECHAT.show();
			else
				CLICKDESK_LIVECHAT.show();

			return false;
		}

		// Call proactive window
		if (agentStatus == "online"
				|| widgetPrefsJSON.bubble_prefs.hide_offline != "true"
				|| widgetPrefsJSON.plan_type == "free")
			ClickDesk_Proactive_Handler.initialize_window("start");

		// Bubble
		clickdesk_show_bubble();

	}

};// ClickDesk API prototype
var CLICKDESK_Live_Chat = CLICKDESK_Live_Chat || {};

/**
 * Javascript Developer API
 */
// Clickdesk livechat object declaration for API
CLICKDESK_Live_Chat.call_api_onload = function() {
	try {

		try {
			$CLICKDESK();
		} catch (e) {
		}

		CLICKDESK_Live_Chat.on_after_load();

	} catch (e) {
	}
};

// Set the visitor name field
CLICKDESK_Live_Chat.setName = function(name) {
	try {

		// Fill input filed
		this.fill_api_prefs_values(name, "text");

		// Store in cookie
		ClickDesk_Storage.set_prefs("visitor_name", name);

	} catch (err) {
		clickdesk_log("err in API = " + err);
	}

	return false;
};

// Set visitor email field
CLICKDESK_Live_Chat.setEmail = function(email) {
	try {

		// Fill input filed
		this.fill_api_prefs_values(email, "email");

		// Store in cookie
		ClickDesk_Storage.set_prefs("visitor_email", email);

	} catch (err) {
		clickdesk_log("err in API = " + err);
	}

	return false;
};

// Set message field
CLICKDESK_Live_Chat.setMessage = function(mssg) {

	try {

		// Set message
		ClickDesk_DOM.wrap('#cd_prechat_msg')[0].value = mssg;
		ClickDesk_DOM.wrap('#cd_offline_msg')[0].value = mssg;

	} catch (err) {
		clickdesk_log("err in API = " + err);
	}
	return false;
};

// For multiple values at a time
CLICKDESK_Live_Chat.setPrefs = function(evt, input_type) {

	try {
		if (typeof (evt) == "object") {

			for (key in evt) {
				if (key == "name")
					CLICKDESK_Live_Chat.setName(evt[key]);
				if (key == "email")
					CLICKDESK_Live_Chat.setEmail(evt[key]);
				if (key == "message")
					CLICKDESK_Live_Chat.setMessage(evt[key]);
				if (key == "onStatus")
					CLICKDESK_Live_Chat.onStatus(evt[key]);
				if (key == "bubbleText")
					CLICKDESK_Live_Chat.setBubbleText(evt[key]);

			}
		}

	} catch (err) {
		clickdesk_log("err in API = " + err);

	}
	return false;
};

// Get the status of the widget
CLICKDESK_Live_Chat.onStatus = function(callback) {

	// get the status and call the callback function

	var json = {};
	json.widget_id = ClickDesk_Widget_Util.widget_id;

	// Get response
	ClickDesk_JSONP.send_request(CLICKDESK_SERVER_PATH
			+ "/rest/visitor/widget/status", json, function(response) {

		clickdesk_log(response);
		var message = "";

		if (response.status == 'success') {

			message = response.response.status;

		} else {
			message = response.errormssg;
		}

		if (callback !== undefined) {

			callback(message);
		}

	});
};

// Change the bubble text
CLICKDESK_Live_Chat.setBubbleText = function(bubble_text) {

	try {

		// Set bubble Text
		ClickDesk_DOM.wrap(".clickdesk_bubble .cd-bar")[0].innerHTML = bubble_text;

	} catch (err) {
		clickdesk_log("err in API = " + err);
	}

	return false;
};

// Set name/email/message
CLICKDESK_Live_Chat.fill_api_prefs_values = function(value, input_type) {

	// Set name,email and message in ofline/prechat forms
	ClickDesk_DOM.fill_values_into_input_fields(input_type, value);

};
/**
 * Analytics Integration with ClickDesk
 */
console.log("ClickDesk_GA *****8")
var ClickDesk_GA = {

	category : "ClickDesk LiveChat",
	widget_prefs : {},

	event_labels_json : {

		bubble_clicked : "Chat Bubble Clicked",
		prechat_submitted : "Prechat Form Submitted",
		visitor_transcript : "Visitor Chat Transcript Sent",
		offline_message : "Offline Message Sent",
		hd_ticket_submitted : "Help Desk Ticket Submitted",
		proactive_chats : "Proactive Chats",
		agent_served : "Agent Conversations",
		init_video_call : "Initiated Video Call",
		init_voice_call : "Initiated Voice Call",
		proactive_triggered : "Proactive Message Triggered",
		agent_answered_video : "Agent Answered Video Calls",
		agent_answered_voice : "Agent Answered Voice Calls",
		visitor_answered_video : "Visitor Answered Video Calls",
		visitor_answered_voice : "Visitor Answered Voice Calls",
		transfer_chat : "Chat Transferred",
		twitter : "Twitter Clicked",
		facebook : "Facebook Clicked",
		helpdesk : "Help Desk Clicked",
		forced_chat : "Agent Initiated Chats",
		survey_feedback : "Survey Feedback",
		popout_clicked : "Pop Out",
		busy_offline_link : "Busy Offline Message",
		queued_chat : "Queued Chat",
		file_upload : "Send File",

	},

	get_action_text : function(event_name) {

		var label = this.event_labels_json[event_name];

		if (!label)
			return "";

		return label;

	},

	set_prefs : function(prefs) {
		if (!prefs)
			return;

		this.widget_prefs = prefs;

	},

	trigger_event : function(event_name, label) {
		console.log("***trigger_event**"+event_name)
		label = (label) ? label : "-";

		// Check in prefs to add in GA
		var action = this.get_action_text(event_name);

		if (!action)
			return;

		// Fire event with prefs
		this.track_event(action, label);

	},

	track_event : function(action, label) {

		try {

			try {

				// Check Wether GTM Code Exits
				if ("object" == typeof dataLayer
						&& "function" == typeof dataLayer.push) {

					dataLayer.push({
						event : "ClickDesk LiveChat",
						eventCategory : this.category,
						eventAction : action,
						eventLabel : label

					});

					// return true;

				}

			} catch (e) {
			}
			try{
				ga('send','event',this.category, action, label)
			}catch(e){
				_gaq.push([ '_trackEvent', this.category, action, label ]);
			}
			

		} catch (e) {

			try {
				ga('send', 'event', this.category, action, label);
			} catch (e) {
				ClickDesk_GA.track_custom_analytics(action, label);
				return;
			}

			ClickDesk_GA.track_custom_analytics(action, label);

		}

	},

	track_custom_analytics : function(action, label) {

		// For customized google analytics code
		try {
			__gaTracker.push([ '_trackEvent', this.category, action, label ]);
		} catch (e) {
			try {
				__gaTracker('send', 'event', this.category, action, label);
			} catch (e) {
			}

		}

	}

};
// Set animation effect to bubble
function clickdesk_set_animation_effect() {

	var animation_name = clickdesk_get_animation_effect();
	if (!animation_name || animation_name == "none")
		return false;

	ClickDesk_DOM.wrap('.clickdesk_bubble').addClass(animation_name);

	var clickdesk_bubbles = ClickDesk_DOM.wrap(".clickdesk_bubble");

	for ( var i = 0; i < clickdesk_bubbles.length; i++) {

		ClickDesk_DOM.set_style_by_object(clickdesk_bubbles[i], {
			'AnimationName' : animation_name,
			'MozAnimationName' : animation_name,
			'WebkitAnimationName' : animation_name,
			'OAnimationName' : animation_name
		});

	}

	// if (animation_name == "bounce_in") {
	//
	// ClickDesk_DOM.set_style_by_object(ClickDesk_DOM
	// .wrap(".clickdesk_bubble")[0], {
	// 'animationDuration' : "2s",
	// 'mozAnimationDuration' : "2s",
	// 'webkitAnimationDuration' : "2s",
	// 'oAnimationDuration' : "2s"
	// });
	//
	// }

}

function clickdesk_get_animation_effect() {

	var animation_name = "none", reset_name = "";

	if (!widgetPrefsJSON.bubble_prefs.online_transition_effect
			|| !widgetPrefsJSON.bubble_prefs.offline_transition_effect)
		return animation_name;

	// Get status
	var status = widgetPrefsJSON.status;
	animation_name = (status == "online") ? widgetPrefsJSON.bubble_prefs.online_transition_effect
			: widgetPrefsJSON.bubble_prefs.offline_transition_effect;
	if (animation_name == "slidein" || animation_name == "toss") {
		animation_name += "_" + widgetPrefsJSON.template_prefs.position;
	}

	return animation_name;

}// Eye catcher cookie name
var HIDE_EYE_CATCHER_COOKIE_NAME = "hide_eye_catcher";

// Create Bubble UI
function clickdesk_construct_bubble() {

	// Bubble
	if (!ClickDesk_Custom_CSS.is_customization_enabled())
		document.body.appendChild(ClickDesk_Handlebars.get_template(
			"clickdesk-ui-bar", widgetPrefsJSON));

}

// Check is bubbled enabled
function clickdesk_is_bubble_enabled() {

	// Check hide offline, check plan and check status
	var plan_type = widgetPrefsJSON.plan_type;
	plan_type = (!plan_type) ? "" : plan_type;

	if (widgetPrefsJSON.status == "offline" &&
		widgetPrefsJSON.bubble_prefs.hide_offline == "true" &&
		plan_type != "free")
		return false;

	return true;

}

// Show Bubble
function clickdesk_show_bubble() {

	//console.log("clickdesk_showd_bubble ")

	/**
	 * Not allow hide bubble to free users
	 */
	// Check hide offline and check status
	if (!clickdesk_is_bubble_enabled()) {
		clickdesk_hide_bubble();
		return false;
	}

	// Bubble and eye catcher
	var bubbles = ClickDesk_DOM.wrap(".clickdesk_bubble");

	// Toggle eye catcher
	clickdesk_toggle_eyecatcher_image();

	clickdesk_load_bubble_images();

	var reset_name = "";
	for (var j = 0; j < bubbles.length; j++) {

		ClickDesk_DOM.set_style_by_object(bubbles[j], {
			'display': 'block'
		});

	}

	// Add animation effect
	clickdesk_set_animation_effect();

	ClickDesk_DOM.set_style_by_id('clickdesk_' + widgetPrefsJSON.status +
		'_customized_bubble', {
			'display': 'block'
		});

}

// Hide the bubble
function clickdesk_hide_bubble() {

	// Bubble and eye catcher
	var bubbles = ClickDesk_DOM.wrap(".clickdesk_bubble");

	for (var j = 0; j < bubbles.length; j++) {
		ClickDesk_DOM.set_style_by_object(bubbles[j], {
			'display': 'none',
			'AnimationName': "",
			'MozAnimationName': "",
			'WebkitAnimationName': "",
			'OAnimationName': ""
		});
	}

}

function clickdesk_load_bubble_images() {

	var bubble_def_src = "https://contactuswidget.appspot.com/images/pic.png",
		bubble_src = "",
		bubble_new_def_src = "//d1gwclp1pmzk26.cloudfront.net/img/gravatar/1.png";
	var prefs = widgetPrefsJSON.template_prefs;
	//console.log("image check");

	// Code added to set default image if image src is empty.
	var customImageDOM = ClickDesk_DOM.wrap('#cd_agent_image');
	if (customImageDOM && customImageDOM.length > 0) {
		if (prefs.template != "lighten_theme" && prefs.template != "minimalistic") {
			if (!customImageDOM[0].getAttribute('src').length) {
				if (prefs) {
					bubble_src = prefs.custom_image;
					if (bubble_src == bubble_def_src)
						bubble_src = bubble_new_def_src;
				}
				bubble_src = (!bubble_src) ? bubble_new_def_src : bubble_src;
				console.log("bubble_src is ", bubble_src);

				try {
					// Set bubble image
					var cd_buub_visitor = null;
					if (prefs.template == 'agilechat_theme') {
						cd_buub_visitor = ClickDesk_DOM.wrap(".user-avatar");
					}
					else {
						cd_buub_visitor = ClickDesk_DOM.wrap(".click-desk-visitor img")
					}
					if (cd_buub_visitor) {
						for (var i = 0; i < cd_buub_visitor.length; i++)
							cd_buub_visitor[i].src = bubble_src;
					}
				} catch (e) {
					console.log(e);
				}
			}
		}
	}	
}// Create Clickdesk popup through handle bars
function clickdesk_render_chat_window() {

	// Add misc params to global json
	clickdesk_add_misc_params_to_widget_json()

	// Append template to body
	setTimeout(
			function() {

				// Add custom theme
				if (ClickDesk_Custom_CSS.is_customization_enabled()) {

					ClickDesk_Custom_CSS.render_html();

				} else {

					// Append parent container
					clickdesk_render_template_to_targe_ele(
							"clickdesk-container", document.body);

					var popup_ref = document.getElementById("clickdesk_popup");
					
					// Header
					clickdesk_render_template_to_targe_ele("clickdesk-header",
							popup_ref);

					// To support custom css prechat form in popup
					if (ClickDesk_Custom_CSS
							.is_customization_enabled_in_popup()) {

						try {
							popup_ref
									.appendChild(convert_string_to_html(
											CD_Live_Chat.get_custom_prefs().cd_custom_widget_template)
											.getElementById(
													"ClickdeskprechatForm"));

							ClickDesk_Custom_CSS.add_dept_dropdown();

						} catch (e) {

							clickdesk_render_template_to_targe_ele(
									"clickdesk-prechat", popup_ref);
						}

					} else {
						clickdesk_render_template_to_targe_ele(
								"clickdesk-prechat", popup_ref);
					}

					clickdesk_render_template_to_targe_ele("helpdesk-email",
							popup_ref);
					clickdesk_render_template_to_targe_ele(
							"clickdesk-phone-options", popup_ref);

					clickdesk_render_template_to_targe_ele("clickdesk-offline",
							popup_ref);
					clickdesk_render_template_to_targe_ele("clickdesk-social",
							popup_ref);
					clickdesk_render_template_to_targe_ele(
							"clickdesk-email-to-visitor", popup_ref);
					clickdesk_render_template_to_targe_ele(
							"clickdesk-offline-sent-success", popup_ref);
					// Chat session wrapper
					clickdesk_render_template_to_targe_ele(
							"clickdesk-chat-session", popup_ref);
					//custom popup

					clickdesk_render_template_to_targe_ele("custom-popup",
							popup_ref);
					clickdesk_render_template_to_targe_ele("agiletheme-form",
							popup_ref);


					// Footer template
					clickdesk_render_template_to_targe_ele("clickdesk-footer",
							popup_ref);
					// Sound template
					clickdesk_render_template_to_targe_ele("clickdesk-sound",
							popup_ref);
					//bubble hover
					clickdesk_render_template_to_targe_ele("clickdesk-bubblehover",popup_ref);



				}

				if (ClickDesk_Custom_CSS.is_customization_enabled()) {
					var ele = ClickDesk_DOM.wrap('#cd_agent_name')[0];
					if (ele)
						ClickDesk_Globals.window_title = (ele.innerHTML && ele.innerHTML
								.toString().trim()) ? ele.innerHTML
								: ClickDesk_Globals.window_title;
				}

				ClickDesk_Globals.agent_nick_name = ClickDesk_Globals.window_title;

				// Initialize clickdesk events
				clickdesk_initialize_events();

				// Backup handlebars templates and helpers for future usage
				ClickDesk_Handlebars.hb_tmp_backup = ClickDeskHandlebars.templates || Handlebars.templates;
				ClickDesk_Handlebars.hb_helpers_backup = Handlebars.helpers;
				
			}, 1);

}

/**
 * Add miscllaneous params to widget json
 */
function clickdesk_add_misc_params_to_widget_json() {

	// Check mobile browser
	if ((ClickDesk_Mobile_Util.is_mobile_browser() && ClickDesk_Mobile_Util
			.is_mobile_optimized_widget())
			|| ClickDesk_Mobile_Util.is_third_party_app())
		widgetPrefsJSON.mobile_browser = "true";

	// IE browser
	if (clickdesk_get_ie_version()) {
		widgetPrefsJSON.ie_browser = "true";
	}

	// Window popout
	if (ClickDesk_Window_Popout.is_window_in_popup()) {
		widgetPrefsJSON.popout_window = "true";
	}

	// Set custom validation messages
	if (!widgetPrefsJSON.customvalidationmssgs_prefs)
		ClickDesk_Globals.custom_messages = JSON
				.parse(ClickDesk_Globals.custom_messages);

	// Reset to default
	else
		ClickDesk_Globals.custom_messages = widgetPrefsJSON.customvalidationmssgs_prefs;

	// Update new Custom messages
	try {

		ClickDesk_Globals.custom_messages_new = JSON
				.parse(ClickDesk_Globals.custom_messages_new);

		for (key in ClickDesk_Globals.custom_messages_new) {
			if (ClickDesk_Globals.custom_messages[key])
				continue;

			ClickDesk_Globals.custom_messages[key] = ClickDesk_Globals.custom_messages_new[key];
		}

		// Add Ip blocked message
		if (widgetPrefsJSON.system_message_prefs
				&& widgetPrefsJSON.system_message_prefs.SESSION_BLOCKED_MESSAGE_BY_AGENT_TO_VISITOR)
			ClickDesk_Globals.custom_messages["visitor_blocked"] = widgetPrefsJSON.system_message_prefs.SESSION_BLOCKED_MESSAGE_BY_AGENT_TO_VISITOR;

	} catch (e) {
	}

	// Company logo
	var custom_img = widgetPrefsJSON.template_prefs.custom_image;
	ClickDesk_Globals.company_logo = (custom_img && custom_img != "https://contactuswidget.appspot.com/images/pic.png") ? custom_img
			: ClickDesk_Globals.agent_pic;

	ClickDesk_Globals.agent_pic = ClickDesk_Globals.company_logo;

	// Window title and agent name
	if (ClickDesk_Globals.custom_messages.customstatusmssgs_chat_window_label)
		ClickDesk_Globals.window_title = ClickDesk_Globals.custom_messages.customstatusmssgs_chat_window_label;

	if (ClickDesk_Globals.custom_messages.customstatusmssgs_chat_visitor_label)
		ClickDesk_Globals.visitor_name = ClickDesk_Globals.custom_messages.customstatusmssgs_chat_visitor_label;

}

/**
 * Convert string to html
 */
function convert_string_to_html(html_string) {

	var frag = document.createDocumentFragment(), tmp = document
			.createElement('body'), child, temp;

	tmp.innerHTML = html_string;

	// For IE7&IE8
	if (!tmp.firstChild) {
		return clickdesk_construct_script_node_from_string(html_string);
	}

	// Append elements in a loop to a DocumentFragment, so that the browser
	// does
	// not re-render the document for each node
	while (child = tmp.firstChild) {
		frag.appendChild(child);
	}
	temp = frag;
	frag = tmp = null;

	return temp;

}

function clickdesk_render_template_to_targe_ele(template_name, target_node) {

	try {
		target_node.appendChild(ClickDesk_Handlebars.get_template(
				template_name, widgetPrefsJSON));
	} catch (e) {
	}

}/**
 * Handles CSS Customization feature
 */
ClickDesk_Custom_CSS = {

	/**
	 * Check whether css customization is enabled for the user or not
	 */
	is_customization_enabled : function() {

		// get Custom Prefs
		var prefs = CD_Live_Chat.get_custom_prefs();

		if (prefs && prefs.cd_apply_custom_css == "true"
				&& (!ClickDesk_Window_Popout.is_window_in_popup()))
			return true;

		return false;
	},

	/**
	 * Check whether css customization is enabled for the user in popup and
	 * mobile or not
	 */
	is_customization_enabled_in_popup : function() {

		// get Custom Prefs
		var prefs = CD_Live_Chat.get_custom_prefs();

		if (prefs && prefs.cd_apply_custom_css == "true"
				&& ClickDesk_Window_Popout.is_window_in_popup())
			return true;

		return false;

	},

	/**
	 * Check if Bubble is available in the Customized HTML
	 */
	is_bubble_available : function() {

		var ele = ClickDesk_DOM.wrap('#clickdesk_' + widgetPrefsJSON.status
				+ '_customized_bubble')[0];

		if (ele && ele.toString().trim())
			return true;

		return false;

	},

	/**
	 * Show the customized bubble if available else show our bubble
	 */
	show_custom_bubble : function() {

		if (this.is_bubble_available()) {

			ClickDesk_DOM.set_style_by_id('clickdesk_' + widgetPrefsJSON.status
					+ '_customized_bubble', {
				'display' : 'block'
			});
		} else {
			document.body.appendChild(ClickDesk_Handlebars.get_template(
					"clickdesk-ui-bar", widgetPrefsJSON));
		}

	},

	/**
	 * Appends Department dropdown for users who enabled custom css
	 */
	add_dept_dropdown : function() {

		try {

			if (widgetPrefsJSON.status != "online")
				return;

			this.reset_dept_dropdown();
			if (!widgetPrefsJSON.user_departments)
				return;

			var container = ClickDesk_DOM
					.wrap('#clickdesk_prechat_custom_dept_dropdown')[0];

			container.appendChild(ClickDesk_Handlebars.get_template(
					"widget-dropdown", widgetPrefsJSON));

		} catch (e) {
		}

	},

	/**
	 * Render custom html
	 */
	render_html : function() {

		try {

			var prefs = CD_Live_Chat.get_custom_prefs();

			var div = document.createElement("div");
			div.innerHTML = prefs.cd_custom_widget_template;
			document.body.appendChild(div);

			this.show_custom_bubble();
			this.add_dept_dropdown();

		} catch (e) {
		}

	},

	reset_dept_dropdown : function() {

		try {

			var container = ClickDesk_DOM
					.wrap('#clickdesk_prechat_custom_dept_dropdown')[0];

			container.innerHTML = "";

		} catch (e) {
		}

	}
};/**
 * Show custom Offline/Online images in the DOM
 */
function clickdesk_show_custom_images() {

	// Find chat links in the DOM
	try {

		var custom_images = ClickDesk_DOM.wrap(".ClickdeskChatLink");
		for ( var i = 0; i < custom_images.length; i++) {

			var custom_image = custom_images[i];
			if (!(!custom_image || custom_image.getAttribute("image"))) {

				custom_image.innerHTML = "";

				// Set prefs based on browser
				custom_image.appendChild(ClickDesk_Mobile_Util
						.is_mobile_browser() ? cd_get_custom_images()
						: ClickDesk_Handlebars.get_template(
								"clickdesk-custom-images-template",
								widgetPrefsJSON));

			}

			var source_url = glcpath.replace("clickdesk-ui/browser/", "");
			// source_url = glcpath.replace("clickdesk-ui-v1/browser/", "");

			var href = source_url + "cdMob?id="
					+ ClickDesk_Widget_Util.widget_id;

			if (ClickDesk_Mobile_Util.is_mobile_browser()) {
				custom_image.setAttribute("href", href);
				custom_image.setAttribute("target", "_blank");
				custom_image.setAttribute("onclick", "");

			}

		}

	} catch (err) {
		clickdesk_log(err);
	}
}

/**
 * Returns custom images with sources
 * 
 * @returns {___img0}
 */
function cd_get_custom_images() {

	// Reset widgetprefs JSON for css file load
	widgetPrefsJSON = ClickDesk_Widget_Util.parse_widget_prefs();

	// Check is bubble is enabled
	if (!clickdesk_is_bubble_enabled())
		return "";

	var status = widgetPrefsJSON.status;
	var custom_images_prefs = widgetPrefsJSON.custom_images_prefs;
	var custom_image_src = (custom_images_prefs) ? ((status == "online") ? custom_images_prefs.custom_online_image_url
			: custom_images_prefs.custom_offline_image_url)
			: "//my.clickdesk.com/images/ss/live-" + status + ".png";

	var img = document.createElement('img');
	img.style = "cursor:pointer;border:none;";
	img.src = custom_image_src;

	return img;
}
// Hide/Show eye catcher image
function clickdesk_toggle_eyecatcher_image() {

	// Check eye-catcher cookie to hide
	var show_eyecatcher = (!ClickDesk_Storage
			.get_prefs(HIDE_EYE_CATCHER_COOKIE_NAME)) ? "block" : "none";

	// Hide eyecatcher checking from widget prefs
	var status = widgetPrefsJSON.status;
	if (widgetPrefsJSON.bubble_prefs.online_hide_eyecatcher
			&& show_eyecatcher != "none") {
		show_eyecatcher = (status == "offline") ? (widgetPrefsJSON.bubble_prefs.offline_hide_eyecatcher)
				: (widgetPrefsJSON.bubble_prefs.online_hide_eyecatcher);
		show_eyecatcher = (show_eyecatcher == "true") ? "none" : "block";
	}

	// Set image here
	if (show_eyecatcher == "block") {
		clickdesk_load_eyecatcher_images();
	}

	ClickDesk_DOM.set_style_by_object(ClickDesk_DOM.wrap(".cd-eye-catcher")[0],
			{
				'display' : show_eyecatcher
			});

}

// Hide eye catcher image
function clickdesk_hide_eyecatcher_image() {

	// Set cookie for the image
	ClickDesk_Storage.create_cookie(HIDE_EYE_CATCHER_COOKIE_NAME, "hide");

	clickdesk_toggle_eyecatcher_image();
}

// Initialize eye catcher events
function clickdesk_init_eyecatcher_events() {

	// Mouseover on eyecatcher
	try {

		var eye_catchers = ClickDesk_DOM.wrap(".cd-eye-catcher");
		for ( var i = 0; i < eye_catchers.length; i++) {
			var element = eye_catchers[i];
			if (!element)
				continue;

			element.onmouseover = function(event) {
				// Show cancel image
				ClickDesk_DOM.wrap("#clickdesk_close_eye_catcher_image")[0].style.display = "block";
			}
			element.onmouseout = function(event) {
				// Hide cancel image
				ClickDesk_DOM.wrap("#clickdesk_close_eye_catcher_image")[0].style.display = "none";
			}
		}
	} catch (err) {
		clickdesk_log(err);
	}

}

function clickdesk_load_eyecatcher_images() {

	var src = "", prefs = widgetPrefsJSON.bubble_prefs;
	var status = widgetPrefsJSON.status;

	if (status == "online") {
		src = (prefs.online_image) ? prefs.online_image
				: "//d1gwclp1pmzk26.cloudfront.net/img/popups/popup-1c.png";
	} else {
		src = (prefs.offline_image) ? prefs.offline_image
				: "//d1gwclp1pmzk26.cloudfront.net/img/popups/popup-3d.png";
	}

	var eyecatcher_ele = ClickDesk_DOM.wrap(".cd-eye-catcher img");

	if (eyecatcher_ele) {
		for ( var i = 0; i < eyecatcher_ele.length; i++)
			eyecatcher_ele[i].src = src;
	}

}// Returns mobile view
function clickdesk_get_mobile_view() {

	// Set CSS for mobile image
	var template = ClickDesk_Widget_Util.parse_widget_prefs().template_prefs;
	var pos = template.position;
	pos = (!pos) ? "bottom_right" : pos;
	pos = (pos.indexOf("bottom") == -1) ? ("bottom_" + pos) : pos;
	var hide_bubble = "block";

	// Hide when offline
	widgetPrefsJSON = ClickDesk_Widget_Util.parse_widget_prefs();
	if (widgetPrefsJSON.status == "offline"
			&& (widgetPrefsJSON.bubble_prefs && widgetPrefsJSON.bubble_prefs.hide_offline == "true")) {
		hide_bubble = "none";
	}
	var bgcolor = template.color;
	var font = "@font-face {font-family: 'cd-icons';src: url('"
			+ glcpath
			+ "css/font-icons/IcoMoon.eot?#') format('eot'),url('"
			+ glcpath
			+ "css/font-icons/IcoMoon.ttf') format('truetype');}.cd-mob-icon:before {font-family: cd-icons;content: attr(data-cdicon);speak: none;}";

	var CSS = "<style>"
			+ font
			+ ".cd-mob-chat-widget {position:fixed;bottom:15px;font-size: 20px;margin:0px 10px !important;z-index:2147483638;background:"
			+ bgcolor
			+ " !important;max-width:100%!important;padding: 8px 5px;border-radius: 15px;-moz-border-radius: 15px;-webkit-border-radius: 15px;color: white;font-weight: bold;font-family: verdana, arial,sans-serif;line-height: 25px;"
			+ ((pos == 'bottom_left') ? "left:0px;" : "right: 0px;")
			+ "}"
			+ ".cd-mob-icon {margin: 0 15px;vertical-align: middle;float: left;}.cd-mob-text {margin-right: 20px;margin-bottom: 3px;float: right;}</style>";

	var source_url = glcpath.replace("clickdesk-ui/browser/", "");
	// source_url = glcpath.replace("clickdesk-ui-v1/browser/", "");

	source_url = source_url.replace("contactuswidget.appspot.com",
			"my.clickdesk.com");

	// Anchor tag with mobile icon
	var ele = document.createElement("a");
	ele.setAttribute("href", source_url + "cdMob?id="
			+ ClickDesk_Widget_Util.widget_id + "&widget_type="
			+ ClickDesk_Widget_Util.get_user_template());
	ele.setAttribute("target", "_blank");
	ele.setAttribute("style", "display:" + hide_bubble);
	ele.setAttribute("class", "clickdesk_bubble");

	var bubble_text = "Chat";

	bubble_text = (widgetPrefsJSON.status == "online") ? ((widgetPrefsJSON.bubble_prefs && widgetPrefsJSON.bubble_prefs.mobile_online_text) ? widgetPrefsJSON.bubble_prefs.mobile_online_text
			: "Chat")
			: ((widgetPrefsJSON.bubble_prefs && widgetPrefsJSON.bubble_prefs.mobile_offline_text) ? widgetPrefsJSON.bubble_prefs.mobile_offline_text
					: "Chat");

	ele.innerHTML = CSS
			+ "<div class='cd-mob-chat-widget'>"
			+ "<div class='cd-mob-icon' data-cdicon='&#x25cc;'></div><div class='cd-mob-text'>"
			+ bubble_text + "</div></div>";

	return ele;

}

/**
 * Mobile Utility functions
 */
var ClickDesk_Mobile_Util = {

	is_mobile_browser : function() {

		if (this.is_third_party_app())
			return true;

		return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
				.test(navigator.userAgent));
	},

	is_mobile_optimized_widget : function() {

		widgetPrefsJSON = ClickDesk_Widget_Util.parse_widget_prefs();
		var is_optimized = widgetPrefsJSON.template_prefs.mobile_optimized_chat;

		if (!is_optimized || (is_optimized && is_optimized == "true"))
			return true;

		return false;
	},

	is_third_party_app : function() {

		return (typeof ClickDesk_ThirdParty_App !== "undefined" && ClickDesk_ThirdParty_App) ? true
				: false;
	}

};
// Chat window prototype
var email_success_msg = 0;
var CLICKDESK_CHAT_WINDOW_UI = {

	// Form ids
	window_popup_form_ids : [ "clickdesk_session clickdesk_chat_session",
			"ClickdeskofflineForm", "ClickdeskofflinethxMsg",
			"ClickdeskprechatForm", "emailChatToVisitorForm",
			"ClickdeskhelpdeskForm", "ClickdeskPhoneForm", "ClickdeskcustompopupForm", 
			"AgilethemeForm", "clickdesk-bubblehover"],

	// Chat window
	show_chat_box : function() {
		try {

			/*ClickDesk_DOM.set_style_by_id('agileminimize', {
					'display' : 'block'
				});*/
			/*ClickDesk_DOM.set_style_by_id('AgileThemeEmailBox', {
					'display' : 'block'
				});*/
				/*if(widgetPrefsJSON.template_prefs.template == "agilechat_theme"){

				this.execute_common_functions();
				}*/

			CLICKDESK_CHAT_WINDOW_UI.agilethemevent();


			this.show_window("clickdesk_session");
			ClickDesk_DOM.set_style_by_id('clickdesk_ratingdiv', {
				'display' : 'none'
			});

			this.execute_common_functions("cd_chat");

			// Check active session and show upload file option
			this.toggle_file_uploader();

			// show proactive visitor details window
			ClickDesk_Proactive_Handler
					.show_proactive_visitor_details_window("chat_box");
				

		} catch (err) {
			clickdesk_log("clickdesk_show_chat_box" + err);
		}

	},

	// Phone window
	show_phone_window : function() {

		try {

			this.show_window("ClickdeskPhoneForm");

			try {
				// Load images
				var images = ClickDesk_DOM.wrap("#ClickdeskPhoneForm img");
				for ( var i = 0; i < images.length; i++) {
					images[i].src = images[i].getAttribute("data-src");
				}
			} catch (e) {
			}

			this.execute_common_functions();

		} catch (err) {
			clickdesk_log("show_phone_window" + err);
		}

	},

	// Prechat window
	show_prechat_window : function() {
		try {
			
			
			// Get prechat form prefs to hide this window
			var prechat_form_prefs = widgetPrefsJSON.online_form_prefs;
			if (prechat_form_prefs && prechat_form_prefs.show_prechat_form
					&& prechat_form_prefs.show_prechat_form == "false") {
				this.show_chat_box();
			
				return;
			}

			if(widgetPrefsJSON.customchatpopup_form_prefs){
			this.show_window("ClickdeskcustompopupForm");
			}
			else{
				if(widgetPrefsJSON.template_prefs.template == "agilechat_theme"){
					CLICKDESK_CHAT_WINDOW_UI.agilethemeimage();


				}
				
			this.show_window("ClickdeskprechatForm");
			}

			this.execute_common_functions();

			ClickDesk_DOM.set_style_by_id('ClickdeskprechatForm', {
				'position' : 'relative',
				'zIndex' : '10000'
			});

		} catch (err) {
			clickdesk_log("clickdesk_show_prechat_form " + err);
		}

	},

	// Offline window
	show_offline_window : function() {
		try {
				if(widgetPrefsJSON.template_prefs.template == "agilechat_theme"){
					if (widgetPrefsJSON.bubble_agiletheme_form_prefs){

					ClickDesk_DOM.wrap('#bubble_offline_header')[0].innerHTML = widgetPrefsJSON.bubble_agiletheme_form_prefs.bubble_agiletheme_header_label;

	 				}
	 				else
	 				ClickDesk_DOM.wrap('#bubble_offline_header')[0].innerHTML= "WELCOME TO SUPPORT";

	 				if (widgetPrefsJSON.bubble_agiletheme_form_prefs){

					ClickDesk_DOM.wrap('#bubble_offline_header_success')[0].innerHTML = widgetPrefsJSON.bubble_agiletheme_form_prefs.bubble_agiletheme_header_label;

	 				}
	 				else
	 				ClickDesk_DOM.wrap('#bubble_offline_header_success')[0].innerHTML= "WELCOME TO SUPPORT";

	 				if (widgetPrefsJSON.bubble_agiletheme_form_prefs){

					ClickDesk_DOM.wrap('#bubble_helpdesk_header')[0].innerHTML = widgetPrefsJSON.bubble_agiletheme_form_prefs.bubble_agiletheme_header_label;

	 				}
	 				else
	 				ClickDesk_DOM.wrap('#bubble_helpdesk_header')[0].innerHTML= "WELCOME TO SUPPORT";
	 					
	 				if (widgetPrefsJSON.bubble_agiletheme_form_prefs){

					ClickDesk_DOM.wrap('#chattranscript_header')[0].innerHTML = widgetPrefsJSON.bubble_agiletheme_form_prefs.bubble_agiletheme_header_label;

	 				}
	 				else
	 				ClickDesk_DOM.wrap('#chattranscript_header')[0].innerHTML= "WELCOME TO SUPPORT";

				}
			
				this.show_window("ClickdeskofflineForm");
				this.execute_common_functions();

				ClickDesk_DOM.set_style_by_id('cd_loading', {
					'display' : 'none'
				});
				ClickDesk_DOM.set_style_by_id('loadingp', {
					'marginTop' : '-6px'
				});

			

		} catch (err) {
			clickdesk_log("clickdesk_show_offline_form" + err);
		}

	},

	// Offline success window
	show_offline_success_window : function(type) {

		try {

			this.show_window("ClickdeskofflinethxMsg");
			this.execute_common_functions();

			// Reset form
			Cd_Add_Wesite_Screenshot.reset_form();

			// Name of the visitor
			var name = ClickDesk_Storage.get_prefs("visitor_name");
			name = (name == null) ? "visitor" : name;

			// Name from prefs
			var dear_name = widgetPrefsJSON.offline_form_prefs.offline_send_success_salutation;
			if (type == "helpdesk") {
				dear_name = widgetPrefsJSON.ticket_form_prefs.ticket_send_success_salutation;
				ClickDesk_DOM.wrap("#ClickdeskofflinethxMsgVal")[0].innerHTML = widgetPrefsJSON.ticket_form_prefs.ticket_form_send_success_text;
			}

			dear_name = (!dear_name) ? "Dear" : dear_name;

			// Show name
			ClickDesk_DOM.wrap("#ClickdeskofflinethxMsgName")[0].innerHTML = dear_name
					+ " " + name + ",";

			ClickDesk_DOM.wrap("#ClickdeskofflinethxMsg img")[0].src = "//my.clickdesk.com/clickdesk-ui/browser/img/email-offline.png";

		} catch (err) {
			clickdesk_log("clickdesk_show_offline_form" + err);
		}

	},

	// Email to visitor window
	show_email_to_visitor_window : function() {
		try {

			this.show_window("emailChatToVisitorForm");

			this.execute_common_functions();

			ClickDesk_DOM.wrap("#cd_emailToVistitor_status")[0].innerHTML = '';
			ClickDesk_DOM.set_style_by_id("cd_emailToVistitor_status", {
				'display' : 'none'
			})
			ClickDesk_DOM.set_style_by_id('emailChatToVisitorForm', {
				'position' : 'relative',
				'zIndex' : '1000'
			});

			clickdesk_reset_forms();

		} catch (err) {
			clickdesk_log("show_email_to_visitor_window" + err);
		}

	},

	// Prechat window
	show_helpdesk_window : function() {
		try {

			this.show_window("ClickdeskhelpdeskForm");

			this.execute_common_functions();

		} catch (err) {
			clickdesk_log("clickdesk_helpdesk_form " + err);
		}

	},

	// Offline response window
	show_offline_response_window : function() {
		this.show_window("ClickdeskofflinethxMsg");
	},

	// Hide eye catcher image
	hide_eye_catcher : function(event) {
		// Stop the event from passing to parent level
		try {
			if (event.stopPropagation)
				event.stopPropagation();
			else
				event.cancelBubble = true;
		} catch (err) {
		}

		clickdesk_hide_eyecatcher_image();
	},
	// Get user selected department id
	get_user_seleted_department : function(type) {

		var dept_id = ClickDesk_Widget_Util.widget_id;

		try {
			switch (type) {
			case "prechat":
				var ele = ClickDesk_DOM
						.wrap("#ClickdeskprechatForm select#cd_department")[0];
				dept_id = (ele && ele.value) ? ele.value
						: ClickDesk_Widget_Util.widget_id;
				break;
			case "offline":
				var ele = ClickDesk_DOM
						.wrap("#ClickdeskofflineForm select#cd_department")[0];
				dept_id = (ele && ele.value) ? ele.value
						: ClickDesk_Widget_Util.widget_id;
				break;
			case "helpdesk":
				var ele = ClickDesk_DOM
						.wrap("#ClickdeskhelpdeskForm select#cd_department")[0];
				dept_id = (ele && ele.value) ? ele.value
						: ClickDesk_Widget_Util.widget_id;
				break;
			default:
				dept_id = ClickDesk_Widget_Util.widget_id;
				break;
			}
		} catch (err) {
		}

		return dept_id;

	},

	// Common needs to all forms
	execute_common_functions : function(tab_id) {

		// Show Chat header
		this.update_chat_header_logo_and_name();

		// hide Social Templates
		ClickDesk_Social_Tab_Ui.hide_window();

		// Show JS plugin data
		ClickDesk_JS_Plugin.show_variable_values();

		// Fill form with old values
		clickdesk_cd_fill_form_fields_with_cookie_values();

		if (tab_id) {

			// Find footer and active on tab_id
			ClickDesk_DOM.wrap('#clickdesk_footer_tabs li').removeClass(
					'ClickDeskActive');
			ClickDesk_DOM.wrap('#' + tab_id)[0].parentNode.className = 'ClickDeskActive';
		}

		ClickDesk_Window_Callback.show();

	},

	// Show window based on given id
	show_window : function(id) {

		clickdesk_log("id = " + id);

		if (id === undefined || id == null)
			return false;

		// Search in form ids
		var length = this.window_popup_form_ids.length
		for ( var i = 0; i < length; i++) {

			var window_id = this.window_popup_form_ids[i];
			var display = "block";
			if (!this.contains(window_id.split(" "), id))
				display = "none";

			if (ClickDesk_Window_Popout.is_window_in_popup()
					&& display == "block")
				display = "table-row";

			var form_ids_length = window_id.split(" ").length;
			while (form_ids_length--) {
				ClickDesk_DOM
						.set_style_by_id(
								window_id.split(" ")[form_ids_length],
								{
									'display' : (window_id.split(" ")[form_ids_length] == "clickdesk_session" && display == "table-row") ? "block"
											: display
								});
			}

			// Set class name for expand tab
			try {
				ClickDesk_DOM.wrap('.clickdesk-tabs-option')[0].className = "clickdesk-tabs-option";

				if (id && id == "clickdesk_session")
				{
					ClickDesk_DOM.wrap('.clickdesk-tabs-option').addClass(
							"clickdesk-tabs-expand");
					//agilethemevent();
				}
			} catch (e) {
			}

		}

	},

	// Update logo and name
	update_chat_header_logo_and_name : function() {

		ClickDesk_DOM.set_style_by_id("ClickDeskSocialLogo", {
			'display' : 'none'
		});
		ClickDesk_DOM.set_style_by_id("cd-liviliyheadingtop", {
			'display' : 'block'
		});

		// Check session and set name
		if (!ClickDesk_Widget_Session.get_active_session()
				|| !ClickDesk_Globals.agent_nick_name
				|| !ClickDesk_Globals.agent_pic) {
			ClickDesk_Globals.agent_nick_name = ClickDesk_Globals.window_title;
			ClickDesk_Globals.agent_pic = ClickDesk_Globals.company_logo;
		}

		ClickDesk_Social_Tab_Ui.update_header(
				ClickDesk_Globals.agent_nick_name, ClickDesk_Globals.agent_pic);

	},

	// Check contains in array
	contains : function(obj, value) {

		var i = obj.length;
		while (i--) {
			if (obj[i] === value) {
				return true;
			}
		}
		return false;
	},
	// Check mootools and strigify the given object/array
	stringify : function(obj) {

		if (!obj)
			return obj;

		if (typeof (window.MooTools) != "object")
			return JSON.stringify(obj);

		var str = "[";
		for ( var i = 0; i < obj.length; i++) {
			if (obj[i] instanceof Array)
				CLICKDESK_CHAT_WINDOW_UI.stringify(obj[i]);
			else
				str += JSON.stringify(obj[i])
						+ ((i != (obj.length - 1)) ? "," : "");
		}
		str += "]";

		return str;

	},

	// Toggle file upload option
	toggle_file_uploader : function() {
		try {

			var session_id = ClickDesk_Widget_Typing_Noty
					.get_visitor_noty_session_id();

			// Don't show for IE versions
			if (cd_ie_browser_version && cd_ie_browser_version > 1
					&& cd_ie_browser_version < 10)
				session_id = undefined;

			ClickDesk_DOM.set_style_by_id('cd_file_upload_container', {
				'display' : (!session_id) ? 'none' : 'block'
			});

			if (!session_id)
				ClickDesk_File_Upload.toggle_uploading_image('none');

		} catch (e) {
		}
	},

	// Show Offline Link
	show_offline_window_link : function(msg) {

		// Remove the DOM
		ClickDesk_DOM.find_and_remove('clickdesk_session', 'cd_remove');

		var template = ClickDesk_Handlebars.get_template(
				"clickdesk-rewrite-entry-template", {}).childNodes[0];

		template.id = '';
		template.className = (msg) ? "queued-offline" : 'cd_remove';
		template.innerHTML = (msg) ? '<span id="session_timeout_link" onclick="CLICKDESK_CHAT_WINDOW_UI.show_offline_window();ClickDesk_GA.trigger_event(\'busy_offline_link\', \'-\');" style="color:#0096C0 !important;cursor:pointer!important;font-size:11px !important;">'
				+ clickdesk_replace_special_characters(msg) + '</span>'
				: '<span id="session_timeout_link" onclick="CLICKDESK_CHAT_WINDOW_UI.show_offline_window();ClickDesk_GA.trigger_event(\'busy_offline_link\', \'-\');" style="color:#0096C0 !important;cursor:pointer!important;font-size:13px;color:#000;">['
						+ clickdesk_replace_special_characters((ClickDesk_Globals.custom_messages.customstatusmssgs_agent_exceeded_time_label))
						+ ']</span>';

		ClickDesk_DOM.set_style_by_object(template, {
			'display' : 'block'
		});

		ClickDesk_DOM.wrap('#clickdesk_session')[0].appendChild(template);

	},
	 agilethemevent : function(){

	 	// Add keyup event to input field
	/*document.getElementById('cd_prechat_email').onkeydown = function(e) {
		e = e || event;

		if (e.keyCode === 13 && !e.ctrlKey) {

			// Send form
			ClickDesk_DOM.wrap('#cd_prechat_email')[0].blur();
			ClickDesk_DOM.wrap('#cd_agile_button')[0].click();	
			// Stop the event bubbling
			ClickDesk_DOM.stop_event(e);
			}
			return true;
		}*/
	 	ClickDesk_DOM.attach_event('a.cd_agile_button','click',function(event){
		var ele = ClickDesk_DOM.wrap('#cd_prechat_email');
		var element=document.getElementById("#cd_prechat_email");
		var text = ele[0].value;
		var type = ele[0].type;
		clickdesk_validate_form("clickdesk_chat_session",
		"cd_valid_email_agile");
		/*clickdesk_add_error_class(element);
		element.focus();
		if (type_attr == "email")
			errorMssg = clickdesk_replace_special_characters((ClickDesk_Globals.custom_messages.customstatusmssgs_email_field_label));
		errorDiv.innerHTML = errorMssg;
		ClickDesk_DOM.set_style_by_object(errorDiv, {
			'display' : 'block'
		});
		
		if (text=="")
			{
			//clickdesk_is_valid_email_address(text);
			document.getElementById("cd_valid_email_agile").innerHTML = "please enter email id";
			return;
			}*/
			
		if (type == "email") {
		var result=clickdesk_is_valid_email_address(text);
		}
		
		//alert("hi");
		if(result){
			ClickDesk_Storage.set_prefs("visitor_email", text);
		var json = clickdesk_serialize_form_data("AgileThemeEmailBox");
		var callbackId = ClickDesk_JSONP.__callbackId++;
		// Check if Session Is Present
		var sessionJSON = ClickDesk_Widget_Session.get_active_session();
		var sessionId;
		if (sessionJSON) {
			sessionId = eval("sessionJSON."
					+ ClickDesk_Widget_Session.session_id);
		}
		json.session_id=sessionId;
		
		ClickDesk_JSONP_Tips
		.jsonp(
				CLICKDESK_SERVER_PATH
						+ "/rest/visitor/chat/update-email?widget_id="+ClickDesk_Widget_Util.widget_id+"",
				json,
				function success(response) {

					document.getElementById('AgileThemeEmailBox').style.display = 'none';
					email_success_msg = email_success_msg + 1;
					if(email_success_msg == 1)
					document.getElementById('clickdesk_session').innerHTML += "<span style='text-align:center;background: #dde1e3;color: #686868;padding: 12px 20px !important;line-height: 30px;word-wrap: break-word;border-radius: 3px;margin-left: 20px;'>Your Email is Submitted Successfully</span>";
					document.getElementById("broadcastchat").removeAttribute("disabled");
				}, function failure(error) {

					clickdesk_log("error");
					clickdesk_log(error);

				}, callbackId);
		}
		
	});
	 },

	 agilethemeimage:function(){
	 	try{
	 	if (widgetPrefsJSON.bubble_agiletheme_form_prefs){

		ClickDesk_DOM.wrap('#cd_bubble_image')[0].src = widgetPrefsJSON.bubble_agiletheme_form_prefs.custom_image;

	 	}
	 	else
	 		ClickDesk_DOM.wrap('#cd_bubble_image')[0].src = "https://doxhze3l6s7v9.cloudfront.net/img/livechat/chat-guy.svg";

	 	if (widgetPrefsJSON.bubble_agiletheme_form_prefs){

		ClickDesk_DOM.wrap('#bubble_header')[0].innerHTML = widgetPrefsJSON.bubble_agiletheme_form_prefs.bubble_agiletheme_header_label;

	 	}
	 	else
	 		ClickDesk_DOM.wrap('#bubble_header')[0].innerHTML= "WELCOME TO SUPPORT";

	 	if (widgetPrefsJSON.bubble_agiletheme_form_prefs){

		ClickDesk_DOM.wrap('#bubble_desc')[0].innerHTML = widgetPrefsJSON.bubble_agiletheme_form_prefs.bubble_agiletheme_description;

	 	}
	 	else
	 		ClickDesk_DOM.wrap('#bubble_desc')[0].innerHTML = "Live chat is the easiest and fastest way to reach our friendly agents";

	 	if (widgetPrefsJSON.bubble_agiletheme_form_prefs){

		ClickDesk_DOM.wrap('#bubble_helpdesk_header')[0].innerHTML = widgetPrefsJSON.bubble_agiletheme_form_prefs.bubble_agiletheme_header_label;

		}
		else
		ClickDesk_DOM.wrap('#bubble_helpdesk_header')[0].innerHTML= "WELCOME TO SUPPORT";
			
		if (widgetPrefsJSON.bubble_agiletheme_form_prefs){

		ClickDesk_DOM.wrap('#chattranscript_header')[0].innerHTML = widgetPrefsJSON.bubble_agiletheme_form_prefs.bubble_agiletheme_header_label;

		}
		else
		ClickDesk_DOM.wrap('#chattranscript_header')[0].innerHTML= "WELCOME TO SUPPORT";

	 }catch(e){

	 }	 

	}

};
function clickdesk_initialize_agiletheme_form_events(){
	
	ClickDesk_DOM.attach_event('.agilethemesend', 'click', function(event) {
		var elem = document.getElementById('ClickdeskprechatForm');
		var popup_ref=document.getElementById("clickdesk_popup");
		var ele=document.getElementById("ClickdeskhelpdeskForm");
		elem.parentNode.removeChild(elem);
		popup_ref.insertBefore(ClickDesk_Handlebars.get_template(
				"clickdesk-prechat",widgetPrefsJSON),ele);
		clickdesk_initialize_events();
		//ClickDesk_Widget_Session.init_check_session();
		//clickdesk_initialize_prechat_form_events();
		CLICKDESK_CHAT_WINDOW_UI.show_window("ClickdeskprechatForm");
	});
	//clickdesk_initialize_events();
}function clickdesk_initialize_call_events() {

	// Add click event to minimize and close
	ClickDesk_DOM.attach_event('#clickdesk_video_call', 'click',
			function(event) {
				event.returnValue = false;

				clickdesk_check_permissions_for_audio_and_video("video");
				ClickDesk_GA.trigger_event("init_video_call", "Visitor");

			});

	// Add click event to minimize and close
	ClickDesk_DOM.attach_event('#clickdesk_audio_call', 'click',
			function(event) {
				event.returnValue = false;

				clickdesk_check_permissions_for_audio_and_video("audio");
				ClickDesk_GA.trigger_event("init_voice_call", "Visitor");

			});

	ClickDesk_DOM.attach_event('#cd_voice_phone', 'click', function(event) {
		event.returnValue = false;

		clickdesk_check_permissions_for_audio_and_video("audio");
		ClickDesk_GA.trigger_event("init_voice_call", "Visitor");

	});

	ClickDesk_DOM.attach_event('#cd_video_phone', 'click', function(event) {
		event.returnValue = false;

		clickdesk_check_permissions_for_audio_and_video("video");
		ClickDesk_GA.trigger_event("init_video_call", "Visitor");

	});

}
function clickdesk_initialize_chat_box_events() {
	
	// Message textarea
	try {

		document.getElementById('broadcastchat').onkeydown = function(e) {
			e = e || event;

			if (e.keyCode === 13 && !e.ctrlKey) {

				// Stop the event bubbling
				ClickDesk_DOM.stop_event(e);

				/**
				 * Stop event for a while
				 */
				setTimeout(function() {
					return ClickDesk_Message_Util.submit_chat_form();
				}, 0);

				return false;

			}
			return true;

		}

	} catch (err) {
		clickdesk_log(err);
	}

	try {
		// Add click event to the close chat option in mobile
		ClickDesk_DOM
				.attach_event(
						'#clickdesk_mobile_close_chat',
						'click',
						function(event) {

							ClickDesk_Widget_Session
									.delete_session('visitor_closed');

							setTimeout(
									function() {
										ClickDesk_Social_Tab_Ui
												.show_social_network_tab('cd_chat');

										try {
											// Clear the chat popup
											ClickDesk_DOM
													.wrap('#clickdesk_session')[0].innerHTML = '';
										} catch (e) {
											// TODO: handle exception
										}
									}, 15000);

						});
	} catch (e) {
		// TODO: handle exception
	}

	// initialize proactive visitor details form events
	clickdesk_initialize_proactive_form_events();

}

/**
 * initialize proactive visitor details form events
 */
function clickdesk_initialize_proactive_form_events() {

	// Add click event to the proactive visitor details cancel
	ClickDesk_DOM.attach_event('#cd_proactive_visitor_info_cancel', 'click',
			function(event) {
				ClickDesk_Proactive_Handler
						.hide_proactive_visitor_details_window();
				ClickDesk_Storage.create_cookie(
						ClickDesk_Proactive_Handler.visitor_details_cookie,
						"closed");

			});

	// Add click event to the proactive visitor details save
	ClickDesk_DOM
			.attach_event(
					'#cd_proactive_visitor_info_save',
					'click',
					function(event) {

						//for gdpr check
					if(document.getElementById("cd_custom_checkbox_chatbox") && document.getElementById("cd_custom_checkbox_chatbox").checked){
					document.getElementById("cd_custom_checkbox_chatbox").value = "Agreed to Share Info";
					//return "not intrested to share email";
					}
					else if(document.getElementById("cd_custom_checkbox_chatbox")){
					document.getElementById("cd_custom_checkbox_chatbox").value = "Disagreed to Share Info";
					//return "intrested to share mailid";	
					}


						// Reset form fields
						clickdesk_reset_forms();

						// Validate
						var sendForm = clickdesk_validate_form(
								"clickdesk_proactive_visitor_details_window",
								"cd_proactive_visitor_error");

						if (!sendForm)
							return false;

						// validate form to check if atleast one filed is filled
						// or not
						sendForm = clickdesk_valid_data_form(
								"clickdesk_proactive_visitor_details_window",
								"cd_proactive_visitor_error");

						if (!sendForm)
							return false;

						var status_ele = ClickDesk_DOM
								.wrap("#cd_proactive_visitor_error")[0];

						ClickDesk_DOM.set_style_by_object(status_ele, {
							'display' : 'block'
						});
						status_ele.innerHTML = "<img src='https://my.clickdesk.com/img/21-0.gif' style='width:18px;height:18px;display:inline'/>";
						ClickDesk_DOM.wrap("#cd_proactive_visitor_info_save")[0]
								.setAttribute('disabled', true);

						// Store in browser cache
						clickdesk_store_form_fields_in_browser_cache("clickdesk_proactive_visitor_details_window");

						// Form data
						var json = clickdesk_serialize_form_data("clickdesk_proactive_visitor_details_window");

						// Get active session
						var sessionJSON = ClickDesk_Widget_Session
								.get_active_session();
						if (!ClickDesk_Globals.offline_prechat_session_id
								&& (!sessionJSON || !eval("sessionJSON."
										+ ClickDesk_Widget_Session.session_id))) {

							var status_ele = ClickDesk_DOM
									.wrap("#cd_proactive_visitor_error")[0];

							// Show Invalid Session error message
							if (status_ele) {

								ClickDesk_DOM.set_style_by_object(status_ele, {
									'display' : 'none'
								});

								status_ele.innerHTML = clickdesk_replace_special_characters((ClickDesk_Globals.custom_messages.customstatusmssgs_nosession_label));
							}

							ClickDesk_Proactive_Handler
									.hide_proactive_visitor_details_window();
							return false;
						}

						// Check if Session was established
						var sessionId = (sessionJSON) ? eval("sessionJSON."
								+ ClickDesk_Widget_Session.session_id) : "";

						sessionId = (!sessionId) ? ClickDesk_Globals.offline_prechat_session_id
								: sessionId;

						// Fields
						var fieldsArray = clickdesk_serialize_form_fields("clickdesk_proactive_visitor_details_window");
						json.prechat_fields = CLICKDESK_CHAT_WINDOW_UI
								.stringify(fieldsArray);

						json.widget_id = ClickDesk_Widget_Util.widget_id;
						json.visitor_token = (sessionJSON) ? eval("sessionJSON."
								+ ClickDesk_Widget_Session.visitor_token)
								: "";
						json.session_id = sessionId;

						// Snack Request to validate session
						ClickDesk_JSONP
								.send_request(
										CLICKDESK_SERVER_PATH
												+ "/rest/visitor/session/send-visitor-details-in-proactive",
										json,
										function(response) {
											clickdesk_handle_proactive_visitor_details_server_response(response);

										});

					});

}

/**
 * Handle success response
 */
function clickdesk_handle_proactive_visitor_details_server_response(response) {

	// Remove disabled
	ClickDesk_DOM.wrap("#cd_proactive_visitor_info_save")[0]
			.removeAttribute("disabled");

	// Show error message
	var status_ele = ClickDesk_DOM.wrap("#cd_proactive_visitor_error")[0];
	status_ele.innerHTML = "";

	if (response && response.status != "success")
		clickdesk_log(clickdesk_replace_special_characters(ClickDesk_Globals.custom_messages.customstatusmssgs_send_failure_mssg_label));

	// set saved cookie for session
	ClickDesk_Storage.create_cookie(
			ClickDesk_Proactive_Handler.visitor_details_cookie, "saved");

	// Close proactive visitor details window
	ClickDesk_Proactive_Handler.hide_proactive_visitor_details_window();
}/**
 * custom popup form events
 */
	var cd_custom_popup_enabled = "";
function clickdesk_initialize_custompopup_form_events(){

	// Add click event to the custompopup form
			ClickDesk_DOM.attach_event('#cd_custom-popup_yes', 'click', function(event) {
				cd_custom_popup_enabled=true;
				var prechat_custom_req_checkbox_field_label=undefined;
				clickdesk_re_rendering();
				/*var elem = document.getElementById('ClickdeskprechatForm');
				var popup_ref=document.getElementById("clickdesk_popup");
				var ele=document.getElementById("ClickdeskhelpdeskForm");
				elem.parentNode.removeChild(elem);
				clickdesk_render_chat_window.clickdesk_render_template_to_targe_ele("clickdesk-offline",
				popup_ref);
				
				popup_ref.insertBefore(ClickDesk_Handlebars.get_template(
						"clickdesk-prechat",widgetPrefsJSON),ele);
				clickdesk_initialize_events();
				//clickdesk_render_template_to_targe_ele("clickdesk-offline",document.getElementById("clickdesk_popup"))
				CLICKDESK_CHAT_WINDOW_UI.show_window("ClickdeskprechatForm");*/
				
			});
			ClickDesk_DOM.attach_event('#cd_custom-popup_no', 'click', function(event) {
				cd_custom_popup_enabled=false;
				clickdesk_re_rendering();
				/*var elem = document.getElementById('ClickdeskprechatForm');
				var popup_ref=document.getElementById("clickdesk_popup");
				var ele=document.getElementById("ClickdeskhelpdeskForm");
				elem.parentNode.removeChild(elem);
				popup_ref.insertBefore(ClickDesk_Handlebars.get_template(
						"clickdesk-prechat",widgetPrefsJSON),ele);
				clickdesk_initialize_events();
				CLICKDESK_CHAT_WINDOW_UI.show_window("ClickdeskprechatForm");*/
			});
}
function clickdesk_re_rendering(){
	var elem = document.getElementById('ClickdeskprechatForm');
	var popup_ref=document.getElementById("clickdesk_popup");
	var ele=document.getElementById("ClickdeskhelpdeskForm");
	elem.parentNode.removeChild(elem);
	popup_ref.insertBefore(ClickDesk_Handlebars.get_template(
			"clickdesk-prechat",widgetPrefsJSON),ele);
	clickdesk_initialize_events();
	//ClickDesk_Widget_Session.init_check_session();
	//clickdesk_initialize_prechat_form_events();
	CLICKDESK_CHAT_WINDOW_UI.show_window("ClickdeskprechatForm");
	
}function clickdesk_initialize_email_to_visitor_form_events() {

	// Add click event to email button
	ClickDesk_DOM.attach_event('#cd_send_email_to_visitor', 'click', function(
			event) {
		event.returnValue = false;
		CLICKDESK_CHAT_WINDOW_UI.show_email_to_visitor_window();

	});

	// Add keyup event to cancel button
	ClickDesk_DOM.attach_event('#cd_emailToVistitor_acl', 'click', function(
			event) {
		CLICKDESK_CHAT_WINDOW_UI.show_chat_box();
	});

	// Add click event to the Offline message form
	ClickDesk_DOM
			.attach_event(
					'#emailChatTsToVisitor_submit',
					'click',
					function(event) {

						// Reset form fields
						clickdesk_reset_forms();

						// Get active session
						var sessionJSON = ClickDesk_Widget_Session
								.get_active_session();
						if (!sessionJSON
								|| !eval("sessionJSON."
										+ ClickDesk_Widget_Session.session_id)) {

							var status_ele = ClickDesk_DOM
									.wrap("#cd_emailToVistitor_status")[0];

							// Show Invalid Session error message
							if (status_ele) {

								ClickDesk_DOM.set_style_by_object(status_ele, {
									'display' : 'block'
								});

								status_ele.innerHTML = clickdesk_replace_special_characters((ClickDesk_Globals.custom_messages.customstatusmssgs_nosession_label));
							}

							return false;
						}

						// Check if Session was established
						var sessionId = eval("sessionJSON."
								+ ClickDesk_Widget_Session.session_id);

						// Validate
						var sendForm = clickdesk_validate_form(
								"emailChatToVisitorForm",
								"cd_emailToVistitor_status");

						if (!sendForm)
							return false;

						var status_ele = ClickDesk_DOM
								.wrap("#cd_emailToVistitor_status")[0];

						ClickDesk_DOM.set_style_by_object(status_ele, {
							'display' : 'block'
						});
						status_ele.innerHTML = clickdesk_replace_special_characters((ClickDesk_Globals.custom_messages.customstatusmssgs_send_request_label));
						ClickDesk_DOM.wrap("#emailChatTsToVisitor_submit")[0]
								.setAttribute('disabled', true);

						// Form data
						var json = clickdesk_serialize_form_data("emailChatToVisitorForm");

						json.widget_id = ClickDesk_Widget_Util.widget_id;
						json.visitor_token = eval("sessionJSON."
								+ ClickDesk_Widget_Session.visitor_token);
						json.session_id = sessionId;

						// Snack Request to validate session
						ClickDesk_JSONP
								.send_request(
										CLICKDESK_SERVER_PATH
												+ "/rest/visitor/session/send-email-on-demand",
										json,
										function(response) {
											clickdesk_handle_email_to_visitor_server_response(response);

										});

					});

}

/**
 * Handle success response
 */
function clickdesk_handle_email_to_visitor_server_response(response) {

	// Remove disabled
	ClickDesk_DOM.wrap("#emailChatTsToVisitor_submit")[0]
			.removeAttribute("disabled");

	// Show error message
	var status_ele = ClickDesk_DOM.wrap("#cd_emailToVistitor_status")[0];
	if (response.status != "success") {
		status_ele.innerHTML = clickdesk_replace_special_characters((ClickDesk_Globals.custom_messages.customstatusmssgs_send_failure_mssg_label));
		return;
	}

	// Show chat box
	CLICKDESK_CHAT_WINDOW_UI.show_chat_box();

	// Fire Google event
	ClickDesk_GA.trigger_event("visitor_transcript", "-");

}function clickdesk_initialize_events() {

	// Initialize placeholders
	clickdesk_init_placeholders();

	// Show custom images
	clickdesk_show_custom_images();

	// Add call option
	clickdesk_show_browser_phone_option(widgetPrefsJSON);

	// Sound option
	ClickDesk_Sounds.init();

	// Tabs
	clickdesk_init_social_tabs();

	// Chat rating
	ClickDesk_Rating.init();

	// Smilies
	ClickDesk_Smilies.init();

	// Check session
	ClickDesk_Widget_Session.init_check_session();

	// Add click event to minimize and close
	ClickDesk_DOM.attach_event('a#clickdesk_min', 'click', function(event) {
		event.returnValue = false;
		// Code to minimize the chat container
		CD_Live_Chat.minimize();
	});

	// Close
	ClickDesk_DOM.attach_event('a#clickdesk_close', 'click', function(event) {
		event.returnValue = false;
		// Code to close the chat container
		CD_Live_Chat.close();
	})

	clickdesk_initialize_bubble_events();

	// Click event to the button
	ClickDesk_DOM.attach_event('#clickdesk_tool', 'click', function(element) {
		CLICKDESK_LIVECHAT.show();
	})

	// Click event to the text link
	try {
		var links = ClickDesk_DOM.wrap(".ClickdeskChatLink");
		for ( var i = 0; i < links.length; i++) {
			var element = links[i];

			if (!element)
				continue;

			element.onclick = function(event) {
				CLICKDESK_LIVECHAT.show();
			}
		}
	} catch (err) {
		clickdesk_log(err);
	}

	// Add typing notification
	ClickDesk_Widget_Typing_Noty.init_notifier("#broadcastchat");

	// Form events
	clickdesk_initialize_email_to_visitor_form_events()
	clickdesk_initialize_helpdesk_form_events()
	clickdesk_initialize_offline_form_events()
	clickdesk_initialize_prechat_form_events()
	clickdesk_initialize_call_events()
	clickdesk_initialize_chat_box_events()
	clickdesk_initialize_custompopup_form_events()
	clickdesk_initialize_agiletheme_form_events()
/*if(widgetPrefsJSON.template_prefs.template == "agilechat_theme"){
	clickdesk_initialize_agiletheme_form_events()
}
*/
	// Initializing popout theme options
	try {

		// Popin Message handler
		ClickDesk_DOM.attach_event('#clickdesk_popin', 'click',
				function(event) {
					event.returnValue = false;

					try {
						window.opener.visitor_typing_msg = ClickDesk_DOM
								.wrap('#broadcastchat')[0].value;
					} catch (err) {
					}

				});

		clickdesk_init_popout_theme_options();

		ClickDesk_Dragger.setup_dragger_handler();

	} catch (err) {
	}

	clickdesk_log("End Of initializeOptions");

}

function clickdesk_initialize_bubble_events() {

	// Click event to the bubbles
	ClickDesk_DOM.attach_event('.clickdesk_bubble', 'click', function(event) {

		ClickDesk_GA.trigger_event("bubble_clicked", "-");

		if (!ClickDesk_DOM.has_class('clickdesk_b', 'min'))
			ClickDesk_Proactive_Handler.initialize_window("open");

		CLICKDESK_LIVECHAT.show();

	})

	// Click event to the bubble
	ClickDesk_DOM.attach_event('#clickdesk_bub', 'click', function(event) {

		if (!ClickDesk_DOM.has_class('clickdesk_b', 'min'))
			ClickDesk_Proactive_Handler.initialize_window("open");
		
		// Show Live chat
		CLICKDESK_LIVECHAT.show();

	})

	// Initialize eyecatcher events
	clickdesk_init_eyecatcher_events();

}
function clickdesk_initialize_helpdesk_form_events() {

	// Add click event to the help desk form
	ClickDesk_DOM
			.attach_event(
					'#cd_helpdesk_submit',
					'click',
					function(event) {

						// Reset form fields
						clickdesk_reset_forms();

						var sendhelpdeskForm = clickdesk_validate_form(
								"ClickdeskhelpdeskForm", "helpdesk_valid_email");

						if (!sendhelpdeskForm)
							return false;

						// Form data
						var json = clickdesk_serialize_form_data("ClickdeskhelpdeskForm");

						// Widget ID
						json.widget_id = CLICKDESK_CHAT_WINDOW_UI
								.get_user_seleted_department("helpdesk");

						json.visitor_subject = "Ticket created by "
								+ json["visitor_email"];

						// Store in browser cache
						clickdesk_store_form_fields_in_browser_cache("ClickdeskhelpdeskForm");

						// Show loader
						var hepdesk_load_img = ClickDesk_DOM
								.wrap('#ClickdeskhelpdeskForm big img')[0];
						if (hepdesk_load_img) {
							hepdesk_load_img.src = "//d25wh3ilibgxb0.cloudfront.net/images/spinner-big.gif";
						}
						ClickDesk_DOM.wrap('#ClickdeskhelpdeskForm big')[0].style.display = 'block';
						ClickDesk_DOM.wrap("#cd_helpdesk_submit")[0]
								.setAttribute("disabled", true);

						ClickDesk_JSONP
								.send_request(
										CLICKDESK_SERVER_PATH
												+ "/rest/visitor/ticket/sendticket",
										json,
										function(response) {
											clickdesk_handle_helpdesk_server_response(response);

										});
					});

}

/**
 * Handle success response
 */
function clickdesk_handle_helpdesk_server_response(response) {

	try {

		// Enable buttons
		ClickDesk_DOM.wrap('#ClickdeskhelpdeskForm big')[0].style.display = 'none';
		ClickDesk_DOM.wrap("#cd_helpdesk_submit")[0]
				.removeAttribute("disabled");

		if (response.status != "success") {
			ClickDesk_DOM.wrap("#cd_loading")[0].innerHTML = clickdesk_replace_special_characters((ClickDesk_Globals.custom_messages.customstatusmssgs_send_failure_mssg_label));
			return;
		}

		// Show success message
		CLICKDESK_CHAT_WINDOW_UI.show_offline_success_window("helpdesk");

		// Fire Google event
		ClickDesk_GA.trigger_event("hd_ticket_submitted", "-");

	} catch (e) {
	}
}/**
 * Offline form events
 */
function clickdesk_initialize_offline_form_events() {

	// Add click event to the Offline message form
	ClickDesk_DOM
			.attach_event(
					'#cd_offline_button',
					'click',
					function(event) {

						if(document.getElementById("cd_custom_checkbox2") && document.getElementById("cd_custom_checkbox2").checked){
						document.getElementById("cd_custom_checkbox2").value = "Agreed to Share Info";
						//return "not intrested to share email";
						}
						else if(document.getElementById("cd_custom_checkbox2")){
						document.getElementById("cd_custom_checkbox2").value = "Disagreed to Share Info";
						//return "intrested to share mailid";	
						}

						// Reset form fields
						clickdesk_reset_forms();

						var sendOfflineForm = true;

						// Validate
						var sendOfflineForm = clickdesk_validate_form(
								"ClickdeskofflineForm", "offline_valid_email");

						if (!sendOfflineForm)
							return false;

						// Form data
						var json = clickdesk_serialize_form_data("ClickdeskofflineForm");

						// Visitor info
						json.visitor_info = ClickDesk_Visitor_Info
								.get_visitor_info();

						// Widget ID
						json.widget_id = CLICKDESK_CHAT_WINDOW_UI
								.get_user_seleted_department("offline");

						// Attached image src
						if (Cd_Add_Wesite_Screenshot.get_attached_src())
							json.attached_snap_url = Cd_Add_Wesite_Screenshot
									.get_attached_src();

						// Fields
						var fieldsArray = clickdesk_serialize_form_fields("ClickdeskofflineForm");
						json.offline_fields = CLICKDESK_CHAT_WINDOW_UI
								.stringify(fieldsArray);

						// Store in browser cache
						clickdesk_store_form_fields_in_browser_cache("ClickdeskofflineForm");

						ClickDesk_DOM.wrap("#cd_offline_button")[0]
								.setAttribute('disabled', true);

						// Show loader
						var loadingDiv = ClickDesk_DOM.wrap("#cd_loading")[0];
						loadingDiv.innerHTML = clickdesk_replace_special_characters((ClickDesk_Globals.custom_messages.customstatusmssgs_send_request_label));
						ClickDesk_DOM.set_style_by_object(loadingDiv, {
							'display' : 'inline'
						});

						if (ClickDesk_Globals.offline_prechat_session_id) {
							json.session_id = ClickDesk_Globals.offline_prechat_session_id;
							ClickDesk_Globals.offline_prechat_session_id = "";
						}

						// Send request - we will now wait for response to come
						// back
						// from the server
						ClickDesk_JSONP.send_request(CLICKDESK_SERVER_PATH
								+ "/rest/visitor/offline", json, function(
								response) {
							clickdesk_handle_offline_server_response(response);
						});

					});

}

/**
 * Handle Offline message response
 */
function clickdesk_handle_offline_server_response(response) {

	try {

		// Remove disabled
		ClickDesk_DOM.wrap("#cd_offline_button")[0].removeAttribute("disabled");

		var resp_status_div = ClickDesk_DOM.wrap("#cd_loading")[0];

		// If Error
		if (response.status != "success") {
			resp_status_div.innerHTML = clickdesk_replace_special_characters((ClickDesk_Globals.custom_messages.customstatusmssgs_send_failure_mssg_label));
			return;
		}

		CLICKDESK_CHAT_WINDOW_UI.show_offline_success_window();

		// Fire Google event
		ClickDesk_GA.trigger_event("offline_message", "-");

	} catch (err) {
		clickdesk_log(err);
	}

}
/**
 * 
 */
var agiletheme_emailverif="";
var agile_smilie_check="";
function clickdesk_initialize_prechat_form_events() {
	// Add keyup event to input field
	document.getElementById('cd_prechat_msg').onkeydown = function(e) {
		e = e || event;

		if (e.keyCode === 13 && !e.ctrlKey) {

			// Send form
			ClickDesk_DOM.wrap('#cd_prechat_msg')[0].blur();
			ClickDesk_DOM.wrap('#cd_prechat_button')[0].click();

			// Stop the event bubbling
			ClickDesk_DOM.stop_event(e);
		//agilethemevent();

		}

		return true;
	}
	
	
	// Add click event to the Online form
	ClickDesk_DOM.attach_event('#cd_prechat_button', 'click', function(event) {
		
		//for gdpr check
		if(document.getElementById("cd_custom_checkbox1") && document.getElementById("cd_custom_checkbox1").checked){
			document.getElementById("cd_custom_checkbox1").value = "Agreed to Share Info";
			//return "not intrested to share email";
		}
		else if(document.getElementById("cd_custom_checkbox1")){
			document.getElementById("cd_custom_checkbox1").value = "Disagreed to Share Info";
			//return "intrested to share mailid";	
		}

		// Reset form fields
		clickdesk_reset_forms();

		var sendPreChatForm = clickdesk_validate_form("ClickdeskprechatForm",
				"cd_valid_email");

		if (!sendPreChatForm)
			return false;

		// Store in browser cache
		clickdesk_store_form_fields_in_browser_cache("ClickdeskprechatForm");

		var message = ClickDesk_DOM.wrap("#cd_prechat_msg")[0].value;
		var date=new Date();
		try {

			// Send Message
			ClickDesk_Message_Util.send_message(message,
					ClickDesk_Globals.visitor_name, 'broadCast',date.getTime());

			ClickDesk_GA.trigger_event("prechat_submitted", "-");
			/*if(widgetPrefsJSON.template_prefs.template == "agilechat_theme"){
			document.getElementById("clickdesk_header").style.background = "#f6f6f6";
			    
		}*/

			// Check for proactive rules to execute when user sends message
			ClickDesk_Proactive_Handler.initialize_window("message");
			
			if(widgetPrefsJSON.template_prefs.template == "agilechat_theme"){
				if (clickdesk_is_any_field_required("clickdesk_proactive_visitor_details_window")) {
					try {
						ClickDesk_DOM.set_style_by_id(
								"clickdesk_proactive_visitor_details_window", {
									'display' : 'block !important'
								});
					} catch (e) {
					}
				}
				}

		} catch (err) {
			clickdesk_log(err);
		}

		CLICKDESK_CHAT_WINDOW_UI.show_chat_box();
	//agilethemevent();
	});
	
	
	/*ClickDesk_DOM.attach_event('#cd_agile_button','click',function(event){
		//alert("hi");
		var json = clickdesk_serialize_form_data("AgileThemeEmailBox");
		var callbackId = ClickDesk_JSONP.__callbackId++;
		// Check if Session Is Present
		var sessionJSON = ClickDesk_Widget_Session.get_active_session();
		var sessionId;
		if (sessionJSON) {
			sessionId = eval("sessionJSON."
					+ ClickDesk_Widget_Session.session_id);
		}
		json.session_id=sessionId;
		ClickDesk_JSONP_Tips
		.jsonp(
				CLICKDESK_SERVER_PATH
						+ "/rest/visitor/chat/update-email?widget_id="+ClickDesk_Widget_Util.widget_id+"",
				json,
				function success(response) {

					document.getElementById('AgileThemeEmailBox').style.display = 'none';
					agiletheme_emailverif=true;
				}, function failure(error) {

					clickdesk_log("error");
					clickdesk_log(error);

				}, callbackId);
		
	});*/

}
/*function agilethemevent(){
	
	ClickDesk_DOM.set_style_by_id('AgileThemeEmailBox', {
		'display' : 'block'
	});
	
	 //agile_smilie_check=true;	
	
	ClickDesk_DOM.attach_event('a#cd_agile_button','click',function(event){
		var ele = ClickDesk_DOM.wrap('#cd_prechat_email');
		var element=document.getElementById("#cd_prechat_email");
		var text = ele[0].value;
		var type = ele[0].type;
		var sendPreChatForm = clickdesk_validate_form("clickdesk_chat_session",
		"cd_valid_email_agile");
		clickdesk_add_error_class(element);
		element.focus();
		if (type_attr == "email")
			errorMssg = clickdesk_replace_special_characters((ClickDesk_Globals.custom_messages.customstatusmssgs_email_field_label));
		errorDiv.innerHTML = errorMssg;
		ClickDesk_DOM.set_style_by_object(errorDiv, {
			'display' : 'block'
		});
		
		if (text=="")
			{
			//clickdesk_is_valid_email_address(text);
			document.getElementById("cd_valid_email_agile").innerHTML = "please enter email id";
			return;
			}
			
		if (type == "email") {
		var result=clickdesk_is_valid_email_address(text);
		}
		
		//alert("hi");
		if(result){
			ClickDesk_Storage.set_prefs("visitor_email", text);
		var json = clickdesk_serialize_form_data("AgileThemeEmailBox");
		var callbackId = ClickDesk_JSONP.__callbackId++;
		// Check if Session Is Present
		var sessionJSON = ClickDesk_Widget_Session.get_active_session();
		var sessionId;
		if (sessionJSON) {
			sessionId = eval("sessionJSON."
					+ ClickDesk_Widget_Session.session_id);
		}
		json.session_id=sessionId;
		ClickDesk_JSONP_Tips
		.jsonp(
				CLICKDESK_SERVER_PATH
						+ "/rest/visitor/chat/update-email?widget_id="+ClickDesk_Widget_Util.widget_id+"",
				json,
				function success(response) {

					document.getElementById('AgileThemeEmailBox').style.display = 'none';
				}, function failure(error) {

					clickdesk_log("error");
					clickdesk_log(error);

				}, callbackId);
		}
		
	});
	
}*/
function clickdesk_init_popout_theme_options() {

	// Adding Click Event to Options link
	ClickDesk_DOM.attach_event('#click-desk-options', 'click', function(event) {

		clickdesk_toggle_element_by_id("clickdesk_popout_footer_options");
	});

	// Adding Click Event to Options link
	ClickDesk_DOM.attach_event('#clickdesk_popup', 'click', function(event) {

		handle_clickdesk_chat_window_click(event);

	});

}

function clickdesk_toggle_element_by_id(eleId) {

	var toggleType = ClickDesk_DOM.wrap('#' + eleId)[0].style.display;

	toggleType = (toggleType && toggleType == "none") ? "block" : "none";

	ClickDesk_DOM.set_style_by_id(eleId, {
		'display' : toggleType
	});

}

function handle_clickdesk_chat_window_click(e) {

	var SHOW_POPOUT_OPTIONS_IDS = [ "cd-options-img",
			"cd_send_email_to_visitor", "clickdesk_popout_footer_options",
			"cd_voice", "cd_file_upload_container", "cd_upload",
			"click-desk-options", "cd_file_upload_option" ];

	// Get target element(Different browsers supports different src
	// elements)
	var eleId = e.srcElement || e.target || e.toElement;

	if (!eleId) {
		ClickDesk_DOM.set_style_by_id('clickdesk_popout_footer_options', {
			'display' : 'none'
		});
		return false;
	}

	try {

		if (eleId.id && SHOW_POPOUT_OPTIONS_IDS.indexOf(eleId.id) > -1)
			return false;

		ClickDesk_DOM.set_style_by_id('clickdesk_popout_footer_options', {
			'display' : 'none'
		});

	} catch (err) {
		clickdesk_log("error in chat window click = " + err);
	}
}
/**
 * Handles document title blinking when message received
 */
var ClickDesk_Title_Blinker = {

	// Global variables for blink the window with the clickdesk status
	timer : "",

	// Stores original title of document
	original_title : document.title,

	/**
	 * Triggers blinking action of title
	 * 
	 * @param message -
	 *            chat message
	 * @param count -
	 *            no of times to blink
	 */
	trigger : function(message, count) {

		message = (typeof message == "object" && message.file_url) ? "File Received - "
				+ message.file_name
				: message;

		message = this.parse_message(message);

		this.blink(count, message, true);

	},

	/**
	 * Clears blinking action timer and resets the title
	 */
	reset : function() {

		document.title = ClickDesk_Title_Blinker.original_title;

		if (ClickDesk_Title_Blinker.timer)
			clearTimeout(ClickDesk_Title_Blinker.timer);

		// Open call window
		ClickDesk_Call.focus_window();

	},

	/**
	 * Blinks the title of document
	 * 
	 * @param count -
	 *            no of times
	 * @param message -
	 *            chat message
	 * @param blink -
	 *            flag to blink
	 */
	blink : function(count, message, blink) {

		if (blink) {
			document.title = message;
		} else {
			document.title = this.original_title;
			count-- // decrement the number of times left to blink
			clearTimeout(this.timer);
		}

		if (count > 0) {
			this.timer = setTimeout("ClickDesk_Title_Blinker.blink(" + count
					+ ", '" + message + "', " + !blink + ")", 800);
		}

	},

	/**
	 * Parses message with unwanted message deletion
	 */
	parse_message : function(message) {

		try {
			if (message.indexOf("[Agent is inviting") != -1
					|| message.indexOf("[Agent is co-browsing") != -1) {

				var message_sub_string = message.substring(
						message.indexOf("["), message.indexOf("]") + 1);

				message = (!message_sub_string) ? message : message_sub_string;
			}
		} catch (e) {
		}

		return message;

	}
};

/**
 * Attach Events to reset blinking on tab focus
 */
// Add focus event to the window
if (cd_ie_browser_version > 5) {
	// check Internet Explorer
	document.onfocusin = ClickDesk_Title_Blinker.reset;
} else {
	window.onfocus = ClickDesk_Title_Blinker.reset;
}
/**
 * Saves agent images in localstorage to show in widget (Used in conference and
 * transfered chats. Since we dont have all agent prefs)
 * 
 * @param agentName
 * @param agentPic
 */
function clickdesk_save_agent_pic(agentName, agentPic) {

	if (!agentName)
		return;

	// ClickDesk_Agent_Images
	var cookie_pref_name = "cd_agent_pics";

	// Get cached images
	var agent_images = ClickDesk_Storage.get_prefs(cookie_pref_name);
	agent_images = (!agent_images) ? {} : JSON.parse(agent_images);

	// Push new one
	agent_images[agentName.toLowerCase()] = agentPic;

	ClickDesk_Storage.set_prefs(cookie_pref_name, JSON.stringify(agent_images));

}

/**
 * Returns agent pic of the associated name
 * 
 * @param agentName
 * @returns
 */
function clickdesk_get_agent_pic(agentName) {

	if (!agentName)
		return;

	var cookie_pref_name = "cd_agent_pics";

	var agent_json = ClickDesk_Globals.agent_json;
	var default_image = (agent_json && agent_json.img_url) ? agent_json.img_url :
		"https://contactuswidget.appspot.com/images/pic.png";

	// Get cached images
	var agent_images = ClickDesk_Storage.get_prefs(cookie_pref_name);
	agent_images = (!agent_images) ? {} : JSON.parse(agent_images);

	var agent_image = agent_images[agentName.toLowerCase()];
	//console.log("agent pic is ", agent_image);
	return (!agent_image) ? default_image : agent_image;

}

// Set agent name and Image
function clickdesk_set_agent_name_and_image(upperNickName, img_url) {


	try {


		if (widgetPrefsJSON.template_prefs.template == "novelty" &&
			!ClickDesk_Globals.agent_json)
			upperNickName = " ";

		img_url = glcp + img_url.substring(img_url.indexOf("://") + 3);
		ClickDesk_DOM.wrap('#cd_agent_name')[0].innerHTML = upperNickName;
		if (widgetPrefsJSON.template_prefs.template == "agilechat_theme") {

			ClickDesk_DOM.wrap('#cd_agent_name_social')[0].innerHTML = upperNickName;
			ClickDesk_DOM.wrap('#cd_agent_image_social')[0].src = img_url;
			/*if(img_url == "http://d1gwclp1pmzk26.cloudfront.net/img/gravatar/1.png")
			{
				img_url = "";
			}*/
		}	

		var customImageDOM = ClickDesk_DOM.wrap('#cd_agent_image');
		if (customImageDOM) {
			if (customImageDOM.length > 0) {
				if (!customImageDOM[0].getAttribute('src').length) {
					customImageDOM[0].src = img_url;
				}
			}
		}

	} catch (e) {

	}
}

// Show session agent info
function clickdesk_set_session_agent_info(agentJSON, refresh) {

	// Set Default Image and Name
	ClickDesk_Globals.agent_nick_name = ClickDesk_Globals.window_title;
	ClickDesk_Globals.agent_pic = ClickDesk_Globals.company_logo;

	// Set Image and Name
	if (agentJSON) {
		ClickDesk_Globals.agent_nick_name = agentJSON.nick_name;
		ClickDesk_Globals.agent_pic = agentJSON.img_url.replace("http://",
			"https://");

		// Assign agent name
		ClickDesk_Globals.agent_nick_name = ClickDesk_Globals.agent_nick_name
			.slice(0, 1).toUpperCase() +
			ClickDesk_Globals.agent_nick_name.slice(1);

		if (!refresh && !ClickDesk_Globals.agent_json)
			ClickDesk_GA.trigger_event("agent_served",
				ClickDesk_Globals.agent_nick_name);
		else if (!refresh && ClickDesk_Globals.agent_json)
			ClickDesk_GA.trigger_event("transfer_chat",
				ClickDesk_Globals.agent_nick_name);
		// Get agent id
		ClickDesk_Globals.agent_id = agentJSON.id;
		ClickDesk_Globals.agent_json = agentJSON;

	}

	// Set agent name and image
	var agentNickName = ClickDesk_Globals.agent_nick_name.slice(0, 1)
		.toUpperCase() +
		ClickDesk_Globals.agent_nick_name.slice(1);

	clickdesk_set_agent_name_and_image(agentNickName,
		ClickDesk_Globals.agent_pic);

	// Show call option
	clickdesk_show_browser_phone_option(agentJSON);

	// Set user rating
	ClickDesk_Rating.init();

	// Show rating
	var template = widgetPrefsJSON.template_prefs.template;
	var prefs = CD_Live_Chat.get_custom_prefs();
	if (prefs && prefs.cd_apply_custom_css == "true" &&
		(!ClickDesk_Window_Popout.is_window_in_popup()))
		template = prefs.cd_template_type;

	if (template == "webrtc_theme" || template == "ultra_theme" ||
		template.indexOf("minimalistic") == 0)
		return;
	if (widgetPrefsJSON.template_prefs.template != "agilechat_theme") {
		ClickDesk_DOM.set_style_by_id('cd_user_rating', {
			'display': 'block'
		});
	}
	//console.log(" check out ClickDesk_Globals --", ClickDesk_Globals);

}/**
 * Handles Visitor Chat Session Rating
 */
var ClickDesk_Rating = {
		
	// Cookie name tio save chat rating
	user_session_rating : "cd_rating",

	// class name for empty star
	user_rating_nill : "sprite-icons-star-half",

	// class name for filled star
	user_rated : "sprite-icons-star",

	/**
	 * Attach event for rating element
	 * 
	 * @param element -
	 *            rating element
	 */
	attach_event : function(element) {

		element.onclick = function(eve) {
			try {
				ClickDesk_Rating.set_rating(element, eve);
			} catch (e) {
			}
		};
	},

	/**
	 * Sets the chat session rating
	 * 
	 * @param element -
	 *            rating element
	 * @param eve -
	 *            event object
	 * @param event_type
	 *            type of event triggered
	 * 
	 */

	set_rating : function(element, eve, event_type) {

		// Prevent default action
		var eve = eve || event;
		eve.returnValue = false;

		if (!element)
			return false;

		var rate = element.rel;
		if (!rate)
			return false;

		rate = parseInt(rate);

		// Show UI
		this.set_ui(rate, event_type)

		// Check if Session Is Present
		var sessionJSON = ClickDesk_Widget_Session.get_active_session();
		if (sessionJSON == null)
			return false;

		// Send new message
		var sessionId = eval("sessionJSON."
				+ ClickDesk_Widget_Session.session_id);

		if (sessionId.indexOf("BD") == 0) {
			return false;
		}

		// Send user rate to server
		this.send_chat_rating_to_server(sessionId);

	},

	/**
	 * Sets rating stars ui
	 * 
	 * @param userrate -
	 *            rating by user
	 * @param event_type -
	 *            type of event
	 */
	set_ui : function(userrate, event_type) {

		clickdesk_log("userrate = " + userrate + " : event_type = "
				+ event_type);

		if (userrate === undefined || userrate == null)
			userrate = 0;

		try {
			ClickDesk_DOM.wrap('#cd_user_rating a')
					.removeClass(this.user_rated);
			ClickDesk_DOM.wrap('#cd_user_rating a').addClass(
					this.user_rating_nill);

			// Set the user rate
			if (!event_type)
				document.getElementById('cd_rating').innerHTML = userrate;

			var ratings = ClickDesk_DOM.wrap('#cd_user_rating a');
			for ( var i = 0; i < ratings.length; i++) {
				var element = ratings[i];
				var rel = element.rel;

				if (rel > userrate)
					continue;

				element.className = this.user_rated;
			}

		} catch (e) {
			// TODO: handle exception
		}

	},

	/**
	 * send request with visitor chat rating to server
	 * 
	 * @param sessionId -
	 *            chat session id
	 */
	send_chat_rating_to_server : function(sessionId) {

		if (!sessionId)
			return false;

		var json = {};
		json.session_id = sessionId;
		json.user_message = ' ';
		// Check in cookie for the user rating
		var rate = ClickDesk_DOM.wrap('#cd_rating')[0].innerHTML;

		var sameRate = true;
		var userrate = ClickDesk_Storage.get_prefs(this.user_session_rating);

		if ((userrate == null || userrate === undefined)
				&& (parseInt(rate) > 0)) {
			ClickDesk_Storage.set_prefs(this.user_session_rating, rate);
			json.user_rate = rate;
			sameRate = false;
		}

		userrate = ClickDesk_Storage.get_prefs(this.user_session_rating);

		if ((userrate != null && userrate !== undefined)
				&& (parseInt(rate) != parseInt(userrate))
				&& (parseInt(rate) != 0)) {
			ClickDesk_Storage.set_prefs(this.user_session_rating, rate);
			json.user_rate = rate;
			sameRate = false;

		}

		// Send if not same rate
		if (!sameRate) {

			// Snack request to send the message
			ClickDesk_JSONP.send_request(CLICKDESK_SERVER_PATH
					+ "/rest/visitor/userrating", json, function(response) {
				clickdesk_log("Rating sent " + rate);
			});
		}

	},

	/**
	 * Clears rating stars
	 */
	delete_ui : function() {

		set_ui(0);
	},

	/**
	 * Initiates ClickDesk visitor rating
	 */
	init : function() {

		// Click event to the rating images
		try {
			var anchors = ClickDesk_DOM.wrap('#cd_user_rating a')
			for ( var i = 0; i < anchors.length; i++) {
				var element = anchors[i];
				this.attach_event(element);
			}
		} catch (err) {
			clickdesk_log(err);
		}

		try {
			// Get chat rate and show if it is there
			var userrate = ClickDesk_Storage
					.get_prefs(this.user_session_rating);
			this.set_ui(userrate);
		} catch (e) {
			// TODO: handle exception
		}

	}
};
/**
 * Check browser tab Delete clickdesk in old tab when opens in a new tab
 * 
 */
// Global variable
var CLICKDESK_ANOTHER_TAB_COOKIE_NAME = "newTabSelect";
var Clickdesk_Random_Value;

// Check current tab
function clickdesk_check_active_tab() {

	if (Clickdesk_Random_Value == ClickDesk_Storage
			.get_prefs(CLICKDESK_ANOTHER_TAB_COOKIE_NAME)) {
		setTimeout("clickdesk_check_active_tab()", 4000);
	} else {
		// Remove clickdesk in the present tab
		ClickDesk_DOM.remove('.clickdesk_cdw_j');

	}

}

// Check clickdesk widget in current tab
function clickdesk_check_tab() {

	// Get random number and store in the browser
	Clickdesk_Random_Value = Math.floor(Math.random() * 100);

	// Set in cookie
	ClickDesk_Storage.set_prefs(CLICKDESK_ANOTHER_TAB_COOKIE_NAME,
			Clickdesk_Random_Value);

	// Remove present livechat if user opens clickdesk in another tab
	clickdesk_check_active_tab();

}

function initialize_check_active_tab() {

	cd_ie_browser_version = clickdesk_get_ie_version();

	// Check popout option
	if (ClickDesk_Window_Popout.is_window_in_popup())
		return;

	clickdesk_check_tab();
}

// Get IE browser version.
var cd_ie_browser_version;/**
 * Thanks jQuery Copied from jQuery library
 */
function clickdesk_construct_script_node_from_string(script_string) {

	var ret = script_string.split("</script>");

	for ( var i = 0; i < ret.length; i++) {
		try {
			var elem = ret[i], script, text, id;

			elem = elem.replace(/<!--(.*?)-->/g, "");
			elem = elem.trim();

			text = elem.substring(elem.indexOf('>') + 1);
			script = elem.substring(0, elem.indexOf('>'));
			id = script.split(" ")[1].split("=")[1].replace(/'/g, "").replace(
					/"/g, "");

			script = document.createElement('script');
			script.text = text;
			script.type = "text/html";
			script.id = id;
			document.body.appendChild(script);

		} catch (e) {
			clickdesk_log(e);
		}

	}

	return "<div></div>";

}

// Show/Hide date on mouseover/mouseout
function clickdesk_hide_or_display_time_on_hover(element, visibility_type) {
	if (true)
		return false;
}/**
 * Handles ClickDesk DOM operations
 */
var ClickDesk_DOM = {

	/**
	 * Useful to avoid noConflict issue when multiple jquery files loaded
	 */
	alias_jquey_variable : "",

	/**
	 * Create element with given id and class
	 */
	create_element : function(element, id, classname) {

		var domElement;

		if (element) {
			domElement = document.createElement(element);
			if (id)
				domElement.setAttribute('id', id);
			if (classname)
				domElement.className = classname;

		}

		return domElement;

	},

	/**
	 * Wrap elements using Snack/Mootools/JQuery
	 */
	wrap : function(element) {

		try {

			try {

				var jqueryVar = (jQuery !== undefined) ? jQuery : this
						.get_jQuery_alias_variable();

				var results = jqueryVar(element);
				if(!results)
					throw "Invalid jQuery";
				
				return results;
				// return snack.wrap(element);

			} catch (e) {

				if (typeof (window.MooTools) == "object") {
					return $$(element);
				} else {
					return snack.wrap(element);
				}

			}
		} catch (err) {
			clickdesk_log("clickdeskWrap = " + err);
		}
	},

	/**
	 * Check the element has given class
	 * 
	 * @param element -
	 *            target element
	 * @param searchclass -
	 *            class name to search
	 */
	has_class : function(element, searchclass) {

		var wrap;

		// If ID
		if (element.charAt('0') == '#') {
			wrap = this.wrap(element);
		} else {
			wrap = this.wrap('.' + element)
		}

		var isClassExists = false;

		// Itearate all the elements
		snack.each(wrap, function(data) {
			var pattern = new RegExp("(^| )" + searchclass + "( |$)");
			if (pattern.test(data.className)) {
				isClassExists = true;
			}
		})

		return isClassExists;
	},

	/**
	 * Remove Element By Class name which is child to the element with given id
	 * 
	 * @param id -
	 *            id of the element to search in
	 * @param classname -
	 *            class name of element to remove
	 */
	find_and_remove : function(id, classname) {
		try {

			var element = this.wrap("#" + id)[0];

			if (!this.is_valid_element(element) || !element.childNodes)
				return false;

			for ( var i = 0; i < element.childNodes.length; i++) {

				var classNames = element.childNodes[i].className;
				if (!classNames)
					continue;

				classNames = classNames.split(" ");
				for ( var j = 0; j < classNames.length; j++) {

					if (!classNames[j] || classNames[j] != classname)
						continue;

					element.childNodes[i].parentNode
							.removeChild(element.childNodes[i]);

				}

			}

		} catch (err) {
			clickdesk_log("find_and_remove clickdesk_find_and_remove_element = "
					+ err);
		}
	},

	/**
	 * Remove Element By Class name which is child to the element with given id
	 * 
	 * @param id -
	 *            id of the element to search in
	 * @param classname -
	 *            class name of element to remove
	 */
	find_inner_element : function(element, id_to_search) {
		try {

			var eleChild = element.childNodes;

			for ( var i = 0; i < eleChild.length; i++) {
				var inner = eleChild[i];

				if (inner.id && inner.id == id_to_search) {
					return inner;
				}

				var childs = inner.childNodes;
				for ( var j = 0; j < childs.length; j++) {
					var child_children = childs[j];

					if (child_children.id && child_children.id == id_to_search) {
						return child_children;
					}
				}

			}

		} catch (err) {
			clickdesk_log("find_inner_element clickdesk_find_and_remove_element = "
					+ err);
		}
	},

	/**
	 * Removes the Element with given id or class name
	 * 
	 * @param id_or_class -
	 *            id or class name of the element
	 */
	remove : function(id_or_class) {

		if (!id_or_class)
			return false;

		var elements = this.wrap(id_or_class);

		for ( var i = 0; i < elements.length; i++) {
			try {
				document.body.removeChild(elements[i]);
			} catch (e) {
			}
		}
	},

	remove_child_elements : function(ele, className) {
		try {
			ele = ele.parentNode;
			while (ele) {
				if (ele.className.indexOf(className) != -1)
					break;
				ele = ele.parentNode;
			}
			// Remove parent element
			ele.parentNode.removeChild(ele);

		} catch (e) {
		}
	},
	/**
	 * Sets styles to the element with given id
	 */
	set_style_by_id : function(objID, propertyObject) {

		try {

			var nodeElement = this.wrap("#" + objID)[0];

			this.set_style_by_object(nodeElement, propertyObject);

		} catch (err) {
			// clickdesk_log("setStyle = " + err);
		}

	},

	/**
	 * Sets styles to given object
	 */
	set_style_by_object : function(obj, propertyObject) {

		try {

			if (!this.is_valid_element(obj))
				return false;

			for ( var property in propertyObject) {
				if (propertyObject[property].indexOf("!important") == -1)
					obj.style[property] = propertyObject[property];
				else
					obj.style.cssText = property + ":"
							+ propertyObject[property];

			}

		} catch (err) {
			// clickdesk_log("setStyle = " + err);
		}

	},

	/**
	 * Checks whether it is valid node or not
	 */
	is_valid_node : function(id) {

		return (this.wrap("#" + id)[0] !== undefined);

	},

	/**
	 * Checks whether it is valid element or not
	 */
	is_valid_element : function(ele) {

		if (ele != null && ele !== undefined)
			return true;
		else
			return false;

	},

	/**
	 * Gets the defined jquery alias element
	 */
	get_jQuery_alias_variable : function() {

		try {

			if (this.alias_jquey_variable)
				return this.alias_jquey_variable;

			if (jQuery) {
				this.alias_jquey_variable = jQuery;
				return this.alias_jquey_variable;
			}

			// Iterate dom and find the element
			for ( var key in window) {

				var variableVal = window[key];

				key = (key) ? key.toLowerCase() : key;
				if (key && key.indexOf("clickdesk") != -1)
					continue;

				// Handle functions
				if (key == "document" || !variableVal
						|| typeof variableVal == "string"
						|| variableVal instanceof Array)
					continue;

				if (variableVal && typeof variableVal == "function"
						&& typeof variableVal.noConflict == "function") {
					this.alias_jquey_variable = key;
					return this.alias_jquey_variable;
				}

				// Handle objects
				if (variableVal && typeof variableVal == "object") {

					for ( var key1 in variableVal) {

						var val = variableVal[key1];
						if (val && typeof val == "function"
								&& typeof val.noConflict == "function") {
							this.alias_jquey_variable = variableVal[key1];
							return this.alias_jquey_variable;
						}
					}

				}

			}
		} catch (e) {
		}

		return this.alias_jquey_variable;
	},

	/**
	 * Attaches event to given element
	 * 
	 * @param element -
	 *            element
	 * @param fireEvent -
	 *            event to be fired
	 * @param callback -
	 *            callback to be called
	 */
	attach_event : function(element, fireEvent, callback) {

		try {
			// Use jQuery or Mootools or Snack API
			try {
				var jqueryVar = (jQuery !== undefined) ? jQuery : this
						.get_jQuery_alias_variable();
				jqueryVar(element).unbind().bind(fireEvent, function(e) {
					if (callback !== undefined && callback != null)
						callback(e);
				});

			} catch (e) {
				if (typeof (window.MooTools) == "object") {
					$$(element).addEvent(fireEvent, function(e) {
						if (callback !== undefined && callback != null)
							callback(e);
					});
				} else {
					snack.wrap(element).attach(fireEvent, function(e) {
						if (callback !== undefined && callback != null)
							callback(e);
					});
				}
			}
		} catch (err) {
			clickdesk_log("attachEvent =" + err);

		}

	},

	/**
	 * Fires the Event on given object
	 * 
	 * @param obj -
	 *            element
	 * @param evt -
	 *            event
	 */
	fire_event : function(obj, evt) {

		if (!obj || !evt)
			return;
		var fireOnThis = obj;
		if (document.createEvent) {
			var evObj = document.createEvent('MouseEvents');
			evObj.initEvent(evt, true, false);
			fireOnThis.dispatchEvent(evObj);

		} else if (document.createEventObject) {
			var evObj = document.createEventObject();
			fireOnThis.fireEvent('on' + evt, evObj);
		}
	},

	/**
	 * Fill values in to input fields
	 * 
	 * @param type -
	 *            type of input field
	 * @param value -
	 *            value to assign
	 */
	fill_values_into_input_fields : function(type, value) {

		try {

			var elements = this.wrap("#clickdesk_popup input[type=" + type
					+ "]");
			for ( var i = 0; i < elements.length; i++) {
				elements[i].value = value;
			}

		} catch (err) {
			clickdesk_log("Api error = " + err);
		}

	},

	/**
	 * Cancel event
	 */
	cancel_event : function(e) {

		var event = e || window.event || {};
		event.cancelBubble = true;
		event.returnValue = false;
		event.stopPropagation && event.stopPropagation();
		event.preventDefault && event.preventDefault();
		return false;
	},

	/**
	 * Stop event propagation
	 */
	stop_event : function(e) {

		// If ie doesnt have the event directly
		var eve = e || window.event || {};

		// Check enter event
		if (eve.stopPropagation)
			eve.stopPropagation();
		else
			eve.cancelBubble = true;

	},

	/**
	 * Prevents default nature
	 */
	prevent_default_nature : function(event) {

		event = event || window.event;

		if (event && event.preventDefault)
			event.preventDefault();
		else
			event.returnValue = false;

	},

	add_class : function(ele_class_name, class_name_to_add) {

		try {

			// Replace class name
			var elements = ClickDesk_DOM.wrap("." + ele_class_name);

			for ( var i = 0; i < elements.length; i++) {

				var ele = elements[i];

				var names = ele.className;
				names = names.replace(class_name_to_add, "");

				ele.className = names + " " + class_name_to_add;

			}

		} catch (e) {
		}
	},

	remove_class : function(ele_class_name, class_name_to_remove) {

		try {

			// Replace class name
			var elements = ClickDesk_DOM.wrap("." + ele_class_name);

			for ( var i = 0; i < elements.length; i++) {

				elements[i].className = elements[i].className.replace(
						class_name_to_remove, "");
			}

		} catch (e) {
		}

	},

};
/**
 * 
 */
var ClickDesk_JS_Plugin = {

	/**
	 * Evaluate(Get value) of variable name from the document
	 * 
	 * @param exp
	 * @returns {String}
	 */
	evaluate_variable : function(exp) {

		try {
			var variable_value = eval(exp);
			if (!variable_value)
				return null;

			return variable_value;
		} catch (err) {
		}

		return null;
	},

	/**
	 * Creates json object with javascript plugin variable keys and values (Gets
	 * the keys of each plugin and gets value of the key from the document)
	 * 
	 * Ex: var1_name = My Id , var1_value = user.id
	 * 
	 * Here searches user.id value in DOM and construct json for each pair
	 * 
	 * @returns {json object}
	 */
	get_plugin_data : function() {

		// Plugin json
		var plugins = {};

		var atleast_one_plugin_exists = false;

		// Get javascript plugin varaibles
		var plugin_json = widgetPrefsJSON.javascript_plugin_prefs;

		if (!plugin_json)
			return plugins;

		// Javasscript plugin json
		var jsplugin_json = {};

		for ( var key in plugin_json) {

			if (!key || key.indexOf("_name") == -1 || !this.is_valid(key))
				continue;

			var value_key = plugin_json[key.replace("_name", "_value")];
			if (!this.is_valid(value_key))
				continue;

			jsplugin_json[key] = plugin_json[key];
			jsplugin_json[key.replace("_name", "_value")] = this
					.evaluate_variable(plugin_json[key.replace("_name",
							"_value")]);

			atleast_one_plugin_exists = true;
		}

		if (atleast_one_plugin_exists)
			plugins.jsplugin = jsplugin_json;

		return plugins;

	},

	/**
	 * Checks the input field default value and plugin variable key. If both are
	 * equal, sets the input field value with plugin variable value(Gets from
	 * document)
	 * 
	 * @param plugin_json
	 * @param val
	 * @returns {Boolean}
	 */
	assign_value_to_field : function(plugin_json, val) {

		if (!this.is_valid(val))
			return false;

		var inputs = ClickDesk_DOM.wrap('#clickdesk_popup input')
		for ( var i = 0; i < inputs.length; i++) {

			var element = inputs[i];
			if (inputs[i].type == "submit" || inputs[i].type == "button")
				continue;

			// Get default value of input field
			var inputValue = ClickDesk_Globals.default_place_holders[element.id];
			if (!inputValue)
				continue;

			inputValue = inputValue.replace(/ /g, "");

			if (inputValue == val) {
				inputs[i].value = this.evaluate_variable(val);
			}

		}
	},

	/**
	 * Iterates all the javascript plugin variables and set input fields with
	 * variable values in DOM values
	 * 
	 * @returns {Boolean}
	 */
	show_variable_values : function() {

		// Iterate all the javascript plugin vars
		var plugin_json = widgetPrefsJSON.javascript_plugin_prefs;
		if (!plugin_json)
			return false;

		// Iterate
		for ( var key in plugin_json) {

			if (key.indexOf('_value') != -1) {
				this.assign_value_to_field(plugin_json, plugin_json[key])
			}

		}

	},

	/**
	 * Checks the value
	 * 
	 * @param value
	 * @returns {Boolean}
	 */
	is_valid : function(value) {
		return (value && value.length > 0);

	}

};
// Enable console(For IE)
function clickdesk_enable_console_logging() {

	// Added debug dummy function
	var debugging = true; // or true

	if (typeof console === "undefined" || !debugging) {
		console = {
			log : function() {
			}
		};
	}

	if (typeof (console.log) === "undefined" || !debugging) {

		console.log = function() {
			return 0;
		};
	}
}

// Clickdesk Log
function clickdesk_log(mssg) {

	// Debug
	var cd_debug = _glc.debug;

	if (cd_debug) {
		try {
			console.log(mssg);
		} catch (e) {
		}
	}

}

// Init
(function() {
	clickdesk_enable_console_logging();

})();
// Check input field default value
function clickdesk_check_default(ele) {

	// Get the previous sibling of this input field
	if (ele.value == ClickDesk_Globals.default_place_holders[ele.id]) {
		ele.value = '';
	}

}

// Set input field default value
function clickdesk_set_default(ele) {

	if (ele.value == '' && !isNaN(cd_ie_browser_version)
			&& cd_ie_browser_version > 5 && cd_ie_browser_version < 10) {
		ele.value = ClickDesk_Globals.default_place_holders[ele.id];
	}

}

// Input element focus
function clickdesk_on_focus(element) {
	element.onfocus = function() {
		clickdesk_check_default(element);
	}
	element.onblur = function() {
		clickdesk_set_default(element);
	}
}

// Init place holders
function clickdesk_init_placeholders() {

	// Attach focus Event to the input fields
	var inputs = ClickDesk_DOM.wrap('#clickdesk_popup input')
	for ( var i = 0; i < inputs.length; i++) {
		var element = inputs[i];
		if (element.type == "button" || element.type == "submit")
			continue;

		// Get value of element
		var value = element.value;

		// Check placeholder (If exists then check browser and add this if
		// browser is IE)
		var placeHolder = get_element_placeholder_attr(element);
		if (placeHolder) {
			value = placeHolder;
		}
		// End of IE checking

		ClickDesk_Globals.default_place_holders[element.id] = value;
		clickdesk_on_focus(element);

	}
	var textareas = ClickDesk_DOM.wrap('#clickdesk_popup textarea')
	for ( var i = 0; i < textareas.length; i++) {

		var element = textareas[i];

		// Get value of element
		var value = element.value;

		// Check placeholder (If exists then check browser and add this if
		// browser is IE)
		var placeHolder = get_element_placeholder_attr(element);
		if (placeHolder) {
			value = placeHolder;
		}
		// End of IE checking

		ClickDesk_Globals.default_place_holders[element.id] = value;
		clickdesk_on_focus(element);
	}

}

function get_element_placeholder_attr(element) {
	return (element.placeholder) ? element.placeholder : (element
			.getAttribute("placeholder") ? element.getAttribute("placeholder")
			: "");
}/**
 * Save and Retrives the clickdesk preferences in browser cookies and local
 * storage
 */

var ClickDesk_Storage = {

	/**
	 * Get Prefs - reads from Cookie. If not present, read from URL and stores
	 * in cookie and calls callback if available
	 */
	get_prefs : function(prefName) {

		// Check in Cookie
		var prefValue = this.read_cookie(prefName);

		// Check in localstorage (IF SUPPORTS)
		if (!prefValue && typeof (localStorage)) {
			try {
				prefValue = localStorage
						.getItem(ClickDesk_Widget_Util.widget_id + "-"
								+ prefName);
			} catch (err) {
			}
		}

		return prefValue;

	},

	/**
	 * Encodes values of preferences
	 */
	prefs_encode : function(value) {

		try {

			value = JSON.parse(value);

			if (value instanceof Array) {
				for ( var i = 0; i < value.length; i++) {
					value[i] = Cd_Xss_Util.escape_json_values(value[i]);
				}

			} else if (typeof value == "object") {
				return CLICKDESK_CHAT_WINDOW_UI.stringify(Cd_Xss_Util
						.escape_json_values(value));
			}

			return CLICKDESK_CHAT_WINDOW_UI.stringify(value);

		} catch (e) {
			return Cd_Xss_Util.escape_html(value);
		}

		return value;

	},

	/**
	 * Store prefs in cookie
	 */
	set_prefs : function(prefName, prefValue, days) {

		// Set in localstorage (IF SUPPORTS)
		// If days specified, Do Not store in localstorage(Localstorage does not
		// support
		// expiry time)
		if (!days && typeof (localStorage)) {
			try {
				localStorage.setItem(ClickDesk_Widget_Util.widget_id + "-"
						+ prefName, prefValue);
			} catch (err) {
				ClickDesk_Storage.create_cookie(prefName, prefValue, days);
			}
		} else {
			ClickDesk_Storage.create_cookie(prefName, prefValue, days);
		}

	},

	/**
	 * Erase pref stored in Cookie and localstorage
	 */
	delete_prefs : function(prefName) {

		// Delete from localstorage (IF SUPPORTS)
		if (typeof (localStorage)) {
			try {
				localStorage.removeItem(ClickDesk_Widget_Util.widget_id + "-"
						+ prefName);
			} catch (err) {
			}
		}

		// Delete from cookie as well
		this.erase_cookie(prefName);

	},

	/**
	 * Creates Cookie
	 */
	create_cookie : function(name, value, days) {

		// Add Widget Id to cookie name to differentiate sites
		name = ClickDesk_Widget_Util.widget_id + "-" + name;
		name = this.get_cookie_name(name);

		// Encode key
		name = encodeURIComponent(name);

		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			var expires = "; expires=" + date.toGMTString();
		} else
			var expires = "";
		document.cookie = name + "=" + escape(value) + expires + "; path=/";
	},

	/**
	 * Reads Cookie
	 */
	read_cookie : function(name) {
		try{
			// Add Widget Id to cookie name to differentiate sites
			name = ClickDesk_Widget_Util.widget_id + "-" + name;
			name = this.get_cookie_name(name);

			// Encode key
			name = encodeURIComponent(name);
			// name = name.replace("*", "&#42");

			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for ( var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ')
					c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) == 0)
					return unescape(c.substring(nameEQ.length, c.length));
		}
		}catch(e){}
		

		return null;
	},

	/**
	 * Delete Cookie
	 */
	erase_cookie : function(name) {

		ClickDesk_Storage.create_cookie(name, "", -1);

	},

	/**
	 * Returns cookie name with shorten widget id
	 */
	get_cookie_name : function(prefName) {
		return prefName.replace("ag9jb250YWN0dXN3aWRnZX", "").replace(
				"ag9zfmNsaWNrZGVza2NoYX", "");

	}

};
/**
 * Added smilies to clickdesk widget
 */
var ClickDesk_Smilies = {

	emotions : {
		':)' : 'cd-Smile',
		':D' : 'cd-Laugh',
		'B-)' : 'cd-Cool',
		':C' : 'cd-Counter',
		';)' : 'cd-Wink',
		':P' : 'cd-Cheeky',
		'(:L' : 'cd-Sweating',
		';(' : 'cd-Crying',
		'X-(' : 'cd-Angry',
		':G' : 'cd-Giggle',
		':F' : 'cd-Allforyou',
		'L-(' : 'cd-Hmm',
		':H' : 'cd-Heart',
		'(*)' : 'cd-Star',
		'(Y)' : 'cd-Yes',
		'(N)' : 'cd-No'
	},

	/**
	 * Click/Mouseover events on smilies UI
	 * 
	 * @param element
	 */
	attach_events : function(element) {

		if (!element)
			return;

		try {

			element.onmouseover = function(event) {
				try {
					ClickDesk_Smilies.set_image(element, event);
				} catch (e) {
					clickdesk_log("smily hover error = " + e);
				}
			}

			element.onclick = function(event) {
				try {
					ClickDesk_Smilies.set_image(element, event, 'clicked');
				} catch (e) {
					clickdesk_log("smily click error = " + e);
				}
			}

		} catch (e) {
		}

	},

	/**
	 * Handles click event on body
	 */
	handle_click : function(e) {

		// If "e" is undefined use the global "event" variable
		e = e || event;
		var target = e.srcElement || e.target || element.toElement;

		if (!target) {
			ClickDesk_Smilies.hide();
			return false;
		}

		if (target.id == "cd_smile")
			return false;

		ClickDesk_Smilies.hide();

	},

	/**
	 * Hides the smilies container
	 */
	hide : function() {

		try {
			ClickDesk_DOM.set_style_by_id('clickdesk_smilediv', {
				'display' : 'none'
			});

			ClickDesk_DOM.wrap('#cd_smile')[0].className = 'sprite-icons-icon-smiley';

		} catch (e) {
			// TODO: handle exception
		}

	},

	/**
	 * Sets smiley image as a value to textarea chat session
	 */
	set_image : function(element, eve, click_event) {

		if (!element)
			return false;

		var emotion = "";
		var className = element.className;

		if (!className)
			return false;

		className = className.replace("cd-smiley-container", "").trim();

		for ( var key in ClickDesk_Smilies.emotions) {

			if (ClickDesk_Smilies.emotions[key] == className) {
				emotion = key;
				break;
			}

		}

		// Show smily message and shortcut
		ClickDesk_DOM.wrap('#cd_set_smilyName')[0].innerHTML = className
				.replace("cd-", "");
		ClickDesk_DOM.wrap('#cd_set_smilySymbol')[0].innerHTML = emotion;

		// Check event
		if (!click_event)
			return false;

		var isSmilyAllowed = ClickDesk_DOM.wrap('#broadcastchat')[0]
				.getAttribute('disabled');

		if (isSmilyAllowed != null && isSmilyAllowed.length > 0)
			return false;

		ClickDesk_DOM.set_style_by_id('clickdesk_smilediv', {
			'display' : 'none'
		});

		// Assign the smile to the input filed
		ClickDesk_DOM.wrap('#cd_smile')[0].className = 'sprite-icons-icon-smiley';
		ClickDesk_DOM.wrap('#broadcastchat')[0].focus();

		var mssg = ClickDesk_DOM.wrap('#broadcastchat')[0].value;

		// Send message if it is not default message
		if (emotion
				&& mssg != ClickDesk_Globals.default_place_holders["broadcastchat"])
			mssg = mssg + emotion;
		else
			mssg = emotion;

		ClickDesk_DOM.wrap('#broadcastchat')[0].value = mssg;

	},

	/**
	 * Replace Clickdesk Emotions in the message text
	 */
	convert_emotions : function(message) {

		var patterns = [], metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/gi;

		try {
			// build a regex pattern for each defined property
			for ( var i in ClickDesk_Smilies.emotions) {
				if (ClickDesk_Smilies.emotions.hasOwnProperty(i)) { // escape
					// metacharacters
					patterns.push('(' + i.replace(metachars, "\\$&") + ')');
				}
			}

			// build the regular expression and replace
			return message
					.replace(
							new RegExp(patterns.join('|'), 'gi'),
							function(match) {
								match = (match === undefined) ? match : match
										.toUpperCase();
								return typeof ClickDesk_Smilies.emotions[match] != 'undefined' ? '<span class="cd-smiley-container '
										+ ClickDesk_Smilies.emotions[match]
										+ '" title="'
										+ ClickDesk_Smilies.emotions[match]
												.replace("cd-", "")
										+ " "
										+ match
										+ '" style="vertical-align: middle!important;float:none!important;"></span>'
										: match;
							});
		} catch (err) {
		}

		return message;
	},
	/**
	 * Inits clickdesk smilies events etc..
	 */
	init : function() {

		try {

			// Click event to smily icon
			ClickDesk_DOM
					.attach_event(
							'#cd_smile',
							'click',
							function(event) {

								event.returnValue = false;

								try {

									// Get current node style attribute
									var element = ClickDesk_DOM
											.wrap("#clickdesk_smilediv")[0];
									var style = element.style.display;
									style = (!style || style == "block") ? "none"
											: "block";

									element.style.display = style;
									ClickDesk_DOM.wrap('#cd_smile')[0].className = 'sprite-icons-icon-smiley';

								} catch (err) {
									clickdesk_log("err = " + err);
								}

							});

			try {
				// Document click to hide the clickdesk smilies
				document.body.onclick = ClickDesk_Smilies.handle_click;
			} catch (e) {
			}

			// Hover and click event to the smily images
			var smilies = ClickDesk_DOM.wrap('#clickdesk_smilediv span')
			for ( var i = 0; i < smilies.length; i++) {

				// Hover && Click
				ClickDesk_Smilies.attach_events(smilies[i]);
			}

		} catch (e) {
		}

	},

};/**
 * Sound Option
 */
var ClickDesk_Sounds = {

	// Default Sound URL
	default_sound_file : 'https://d1gwclp1pmzk26.cloudfront.net/clickdeskcdn/sounds/sound.mp3',

	// Play Sound option onbehalf of visitor choice
	is_volume_enable_by_visitor : true,

	// Returns the sound file based on type
	get_sound_file : function(type) {

		var file = this.default_sound_file;

		var soundPrefs = widgetPrefsJSON.message_sounds;

		if (type == "in") {
			file = (soundPrefs && soundPrefs.chat_message_in) ? soundPrefs.chat_message_in
					: file;
		}

		else if (type == "out")
			file = (soundPrefs && soundPrefs.chat_message_out) ? soundPrefs.chat_message_out
					: file;

		return file;
	},
	// Receive sound
	play_recv : function() {

		if (this.is_volume_enable_by_visitor)
			this.play_sound(this.get_sound_file("in"));
	},

	// Send sound
	play_send : function(sound_file) {

		if (!this.is_volume_enable_by_visitor
				|| (sound_file && sound_file == "no"))
			return false;

		var file_name;
		//if (sound_file != "yes")
		
		file_name = sound_file;
		
		file_name = (file_name) ? file_name : this.get_sound_file("out");
		

		this.play_sound(file_name);

	},

	/**
	 * Play sound in browser
	 */
	play_sound : function(file_name) {

		if (!this.is_volume_enable_by_visitor)
			return false;

		if (file_name && file_name == "no")
			return false;

		var file_cloud_url = (file_name.indexOf("http") == 0) ? file_name
				: ClickDesk_CloudFront_URL + '/clickdeskcdn/sounds/'
						+ ((file_name) ? file_name : "sound") + '.mp3';

		try {

			// If browser supports html5 audio
			new Audio(file_cloud_url).play();

		} catch (err) {

			this.play_with_flash(file_cloud_url);

		}
	},

	/**
	 * Play sound using flash player
	 * 
	 * @param url
	 */
	play_with_flash : function(file_url) {

		try {

			if (isNaN(cd_ie_browser_version)
					|| Number(cd_ie_browser_version) <= 9)
				return;

			if (!FlashDetect.installed
					|| (BrowserDetect.browser == "Firefox" && BrowserDetect.version < 3.6)) {
				return;
			}

			document.getElementById("cd_clickdesk_play_sound").innerHTML = this
					.get_object_src(file_url);

		} catch (e) {
			clickdesk_log("clickdesk_play_sound in flash :" + e);
		}

	},

	/**
	 * Embed ref to play via flash player
	 */
	get_object_src : function(obj_ref) {

		return '<object width="0" height="0">'
				+ '<param name="src" value="'
				+ obj_ref
				+ '">'
				+ '<param name="autoplay" value="true">'
				+ '<param name="autostart" value="true">'
				+ '<param name="controller" value="true">'
				+ '<embed src="'
				+ obj_ref
				+ '" controller="true" autoplay="true" autostart="True" type="audio/mp3" />'
				+ '</object>';

	},

	// Initialize click event on sound
	init : function() {

		// Add Click event to the sound option
		ClickDesk_DOM.attach_event('#cd_voice', 'click', function(event) {

			try {

				event.returnValue = false;

				// Get the current node style attribute
				ClickDesk_Sounds.is_volume_enable_by_visitor = ClickDesk_DOM
						.has_class('#cd_voice', 'sprite-icons-mute');

				// Set option in cookie

				ClickDesk_Sounds.set_icon();

			} catch (err) {
				clickdesk_log("err = " + err);
			}

		});

	},

	set_icon : function() {

		if (!ClickDesk_Sounds.is_volume_enable_by_visitor)
			ClickDesk_DOM.wrap("#cd_voice").removeClass(
					'sprite-icons-icon-first').addClass('sprite-icons-mute');
		else
			ClickDesk_DOM.wrap("#cd_voice").removeClass('sprite-icons-mute')
					.addClass('sprite-icons-icon-first');
	}

};
/**
 * ClickDesk Visitor related information
 */
var ClickDesk_Visitor_Info = {

	// Holds current visitor info
	visitor_info : "",

	// Referrer cookie name
	referrer : "clickdesk_referrer",

	// Client Details cookie name
	client_details : "cd_client_details",

	/**
	 * Returns Geo prefs of visitor
	 */
	getGeoPrefs : function(name) {

		this.visitor_info = widgetPrefsJSON.visitor_geo;

		visitor_info = this.visitor_info;
		return (!visitor_info[name]) ? this.get_unknown_info()
				: visitor_info[name];
	},

	/**
	 * Returns total visitor information
	 */
	get_visitor_info : function(include_path) {

		var visitorInfo = {};

		// Browser
		visitorInfo.browser = BrowserDetect.browser;
		visitorInfo.browser_version = BrowserDetect.version;

		// OS
		visitorInfo.os = BrowserDetect.OS;

		// Location
		visitorInfo.city = this.getGeoPrefs("city");
		visitorInfo.country = this.getGeoPrefs("country");
		visitorInfo.country_code = this.getGeoPrefs("country_code");
		visitorInfo.region = this.getGeoPrefs("region");
		visitorInfo.latitude = this.getGeoPrefs("latitude");
		visitorInfo.longitude = this.getGeoPrefs("longitude");

		// Visitor URL
		var visitor_url = document.location.href;
		if (visitor_url)
			visitorInfo.url = encodeURIComponent(visitor_url);

		// Document title
		var page_title = document.title;
		if (page_title) {
			page_title = (page_title.length > 100) ? page_title.substring(0,
					100) : page_title;
			visitorInfo.page_title = encodeURIComponent(page_title);
		}

		// Blob support
		visitorInfo.is_blob_supported = Cd_Add_Wesite_Screenshot
				.is_blob_supported();

		visitorInfo.is_mobile_browser = ClickDesk_Mobile_Util
				.is_mobile_browser();

		// Get referrer
		var document_refferer = this.get_referrer_link();
		if (!document_refferer)
			document_refferer = document.referrer;

		document_refferer = (!document_refferer) ? "" : document_refferer;

		visitorInfo.referrer = encodeURIComponent(document_refferer);

		// Get visitor session cookie to avoid duplicates
		visitorInfo.visitor_pubnub_token = ClickDesk_Widget_Pusher_Visitor
				.get_visitor_unique_token();

		// Get javascript plugins variables
		visitorInfo.plugins = ClickDesk_JS_Plugin.get_plugin_data();

		try {
			visitorInfo.webrtc_supported = ClickDesk_Call
					.browser_has_call_support();
		} catch (err) {
		}

		// Add forced chat
		if (ClickDesk_Globals.forced_chat_agent_id)
			visitorInfo.forced_chat_agent_id = ClickDesk_Globals.forced_chat_agent_id;

		if (ClickDesk_Globals.forced_chat_messages
				&& ClickDesk_Globals.forced_chat_messages.length > 0)
			visitorInfo.forced_chat_messages = ClickDesk_Globals.forced_chat_messages;

		return JSON.stringify(visitorInfo);

	},

	/**
	 * Gets referrer link of visitor
	 */
	get_referrer_link : function() {

		var referrer = ClickDesk_Storage.get_prefs(this.referrer);

		clickdesk_log("referrer = " + referrer);

		if (referrer)
			return referrer;

		// Set the referrer
		var ref = document.referrer;
		if (!ref || ref == '')
			return null;

		if (ref.length > 100)
			ref = ref.substring(0, 100);

		ClickDesk_Storage.create_cookie(this.referrer, ref);

		return ClickDesk_Storage.get_prefs(this.referrer);

	},

	/**
	 * returns unknown value for empty prefs
	 */
	get_unknown_info : function() {
		return "unknown";
	}

};/**
 * URL co browse
 * 
 * @param ele
 * @param command
 */
function clickdesk_co_browse_url(ele, command) {

	ClickDesk_DOM.remove_child_elements(ele, "cd_rewrite");

	if (command == "accept") {
		// window.location = ClickDesk_Globals.co_browse_url;
		return;
	}

	// Get active session
	var sessionJSON = ClickDesk_Widget_Session.get_active_session();
	if (!sessionJSON)
		return;

	var sessionId = eval("sessionJSON." + ClickDesk_Widget_Session.session_id);

	// Send message to agent about declined
	var json = {};
	json.session_id = sessionId;
	json.user_message = "[Visitor has declined to open the link you have sent.]";

	ClickDesk_JSONP.send_request(CLICKDESK_SERVER_PATH
			+ "/rest/visitor/chat/announcement-to-agent", json, function(
			response) {
		clickdesk_log("Text sent " + response);
	});

}
/**
 * Handles Widget Dragging with mouse
 */
var ClickDesk_Dragger = {

	dragging : false,
	drager_enabled : false,
	iframeMouseOver : false,

	// Set Mouse Events
	setup_dragger_handler : function() {

		try {

			// Chat Widget Dom Element
			var chat_widget = document.getElementById("clickdesk_popup");

			var drag_elements = ClickDesk_DOM.wrap(".ClickDesk_Dragger");
			for ( var i = 0; i < drag_elements.length; i++) {
				var element = drag_elements[i];
				if (!element)
					continue;

				// Enable Dragging on mousedown
				element.onmousedown = function(event) {

					ClickDesk_DOM.prevent_default_nature(event);

					ClickDesk_Dragger.dragging = true;
					ClickDesk_Dragger.drager_enabled = true;

					if (document.getElementById && !document.all) {
						ClickDesk_Dragger.dragFromX = event.pageX;
						ClickDesk_Dragger.dragFromY = event.pageY;
					} else {
						ClickDesk_Dragger.dragFromX = event.clientX;
						ClickDesk_Dragger.dragFromY = event.clientY;

					}
				};

			}

			// Disable Dragging on mouseup
			document.onmouseup = function(event) {
				ClickDesk_Dragger.dragging = false;
			};

			// Move Window on mouse move when dragger enabled
			document.onmousemove = function(event) {

				// handle mouse move if dragger enabled only
				if (ClickDesk_Dragger.dragging) {

					ClickDesk_DOM.prevent_default_nature(event);

					var ie_version = clickdesk_get_ie_version();
					// To disable dragging when mouse released
					// on iframe
					if (!event.which && !(ie_version && ie_version < 9)) {
						ClickDesk_Dragger.dragging = false;
					}

					// Get top and left positions of mouse
					var left = 0, top = 0;
					if (document.getElementById && !document.all) {

						left = (chat_widget.offsetLeft - 10) + event.pageX
								- ClickDesk_Dragger.dragFromX;
						top = chat_widget.offsetTop + event.pageY
								- ClickDesk_Dragger.dragFromY;
						ClickDesk_Dragger.dragFromX = event.pageX;
						ClickDesk_Dragger.dragFromY = event.pageY;

					} else {

						left = (chat_widget.offsetLeft - 10) + event.clientX
								- ClickDesk_Dragger.dragFromX;
						top = chat_widget.offsetTop + event.clientY
								- ClickDesk_Dragger.dragFromY;
						ClickDesk_Dragger.dragFromX = event.clientX;
						ClickDesk_Dragger.dragFromY = event.clientY;

					}

					// Move chat window
					ClickDesk_Dragger.moveWindow(left, top);

					return !1;

				}

			};

		} catch (err) {
			clickdesk_log(err)
		}
	},

	// To move chat window with mouse
	moveWindow : function(left, top) {

		try {

			var element = document.getElementById("clickdesk_popup");

			// Setting Top Spacing to Show Avatars on Header Clearly
			var template = widgetPrefsJSON.template_prefs.template, offset_height = 0;
			offset_height = (template == "ultra_theme") ? "20"
					: ((template == "webrtc_theme") ? "35"
							: ((template == "lighten_theme") ? "10"
									: offset_height));
			/*
			 * set left and top positions of chat window according to Total
			 * browser window height and width
			 */
			0 > left && (left = 0);
			left > this.getWindowWidth() - element.offsetWidth - 20
					&& (left = this.getWindowWidth() - element.offsetWidth - 20);
			0 + offset_height > top && (top = 0 + offset_height);
			top > this.getWindowHeight() - element.offsetHeight
					&& (top = this.getWindowHeight() - element.offsetHeight);
			0 + offset_height > top && (top = 0 + offset_height);
			element.style.left = left + "px";
			element.style.top = top + "px";
			element.style.bottom = "auto";

		} catch (e) {
		}

	},

	// Gives Browser window Width
	getWindowWidth : function() {

		var width = 0;
		window.innerWidth ? width = window.innerWidth
				: self.innerWidth ? width = self.innerWidth
						: document.documentElement
								&& document.documentElement.clientWidth ? width = document.documentElement.clientWidth
								: document.body
										&& (width = document.body.clientWidth);
		return width
	},

	// Gives Browser window Height
	getWindowHeight : function() {

		var height = 0;
		window.innerHeight ? height = window.innerHeight
				: self.innerHeight ? height = self.innerHeight
						: document.documentElement
								&& document.documentElement.clientHeight ? height = document.documentElement.clientHeight
								: document.body
										&& (height = document.body.clientHeight);
		return height
	},

	// To set Drag Element position
	setDraggerPosition : function(twitter) {

		try {
			var template = widgetPrefsJSON.template_prefs.template;
			if (template == "lighten_theme"
					|| template.indexOf("minimalistic") >= 0)
				return;

			try {
				var height = ClickDesk_DOM.wrap("#ClickDesk_Dragger")[0].style.height
						.replace("px", "");
			} catch (err) {
				var height = 10;
			}

			height = (height && ClickDesk_DOM.wrap("#clickdesk_header")[0].offsetHeight < 20) ? height
					: ClickDesk_DOM.wrap("#clickdesk_header")[0].offsetHeight;

			twitter && (height = height - 30);
			ClickDesk_DOM.set_style_by_id("ClickDesk_Dragger", {
				'height' : (height) + "px"
			});
		} catch (e) {
			// TODO: handle exception
		}

	},

	// Set Chat Window Top position According to Browser window
	setWindowTopPosition : function() {

		try {
			if (!this.drager_enabled)
				return;

			var element = document.getElementById("clickdesk_popup");
			var top_pos = element.style.top.replace("px", "");

			top_pos > ClickDesk_Dragger.getWindowHeight()
					- element.offsetHeight
					&& (top_pos = ClickDesk_Dragger.getWindowHeight()
							- element.offsetHeight);

			element.style.top = top_pos + "px";
		} catch (err) {
		}

	}

};/**
 * Handles ClickDesk File uploading
 */
var ClickDesk_File_Upload = {

	// Store uploaded file size to toggle the loading image
	uploaded_file_size: 0,

	// To fix loading image issue when multiple files sent frequently
	uploaded_file_count: 0,

	uploaded_success_file_count: 0,

	/**
	 * Handles File Uploading
	 * 
	 * @param input -
	 *            file input element
	 */
	upload_file: function (input) {

		var files = input.files;

		if (!files) {
			// workaround for IE9
			file = [];
			file
				.push({
					name: input.value.substring(input.value
						.lastIndexOf("\\") + 1),
					size: 0, // it's not possible to get file size w/o
					// flash or so
					type: input.value.substring(input.value
						.lastIndexOf(".") + 1)
				});
		}

		clickdesk_log("file");
		clickdesk_log(files);

		// To send request to the amazon server
		this.construct_form(files);

		input.value = "";

	},

	/**
	 * Constructs Form with the given file objects
	 * 
	 * @param files -
	 *            file object(s)
	 */
	construct_form: function (files) {

		if (!files || files.length == 0)
			return;

		this.uploaded_file_size = 0;

		for (var i = 0; files.length > i; i++) {

			var file = files[i];

			if (!file || !file.name)
				continue;

			if (!file.size) {
				ClickDesk_Chat_Window_Util
					.append_message(
						"Sorry, File size not detected. Please use a different browser.",
						ClickDesk_Globals.visitor_name, "", "warning");
				continue;
			}

			var file_name = file.name;

			var file_extension = file_name.split('.').pop();

			// do not support files with no extention and exe files
			if (!file_extension || file_extension.indexOf("exe") == 0) {

				ClickDesk_Chat_Window_Util.append_message(
					"Sorry, you cannot send such files.",
					ClickDesk_Globals.visitor_name, "", "warning");

				continue;
			}

			if (file.size < 100) {
				ClickDesk_Chat_Window_Util.append_message(
					"Sorry, file size should be atleast 100 bytes.",
					ClickDesk_Globals.visitor_name, "", "warning");

				continue;
			}

			if (file.size > 5242880) {
				ClickDesk_Chat_Window_Util.append_message(
					"Sorry, you cannot send files larger than 5 MB.",
					ClickDesk_Globals.visitor_name, "", "warning");

				continue;
			}

			this.uploaded_file_size += 1;
			this.uploaded_file_count += 1;

			file.file_resource = "cd-uploaded-files/" + new Date().getTime()
				+ "-" + file_name.replace(/ /g, "");

			this.toggle_uploading_image("inline-block");
			var fd = this.construct_form_data(file);
			fd.append("file", file);

			// Send post request to amazon server
			this.upload_to_amazon(fd, file)
		}

	},

	/**
	 * Constructs Form Data with amazon keys for given file object to send
	 * request to amazon
	 * 
	 * @param file -
	 *            file object
	 */
	construct_form_data: function (file) {

		var fd = new FormData();

		// Construct post data
		fd.append('key', file.file_resource);
		fd.append('acl', 'public-read');
		fd.append('AWSAccessKeyId', 'AKIA6MFDOFPITRNCUDAF');
		fd.append(
			'policy',
			'ewogICJleHBpcmF0aW9uIjogIjIwNDAtMDEtMDFUMTI6MDA6MDAuMDAwWiIsCiAgImNvbmRpdGlvbnMiOiBbCiAgICB7ImJ1Y2tldCI6ICJhZ2lsZWNybSIgfSwKICAgIHsiYWNsIjogInB1YmxpYy1yZWFkIiB9LAogICAgWyJzdGFydHMtd2l0aCIsICIka2V5IiwgImNkLXVwbG9hZGVkLWZpbGVzLyJdCiAgXQp9Cg==')
		fd.append('signature', 'p5NFrb+fi9Qx55oLQiLeJJUSEUc=');

		return fd;
	},

	/**
	 * Sends XMLHttpRequest to amazon server to upload file
	 * 
	 * @param form_data -
	 *            form data with amazon keys
	 * @param file -
	 *            file object
	 */
	upload_to_amazon: function (form_data, file) {

		// Construct http request for post request
		var xhr = new window.XMLHttpRequest();
		xhr.upload.addEventListener("progress", function (evt) {
			ClickDesk_File_Upload.progress(evt, file);
		}, false);
		xhr.addEventListener("load", function (evt) {
			ClickDesk_File_Upload.complete(evt, file);
		}, false);
		xhr.addEventListener("error", function (evt) {
			ClickDesk_File_Upload.failed(evt, file);
		}, false);
		xhr.addEventListener("abort", function (evt) {
			ClickDesk_File_Upload.canceled(evt, file);
		}, false);

		// Must be last line before send
		xhr.open('POST', 'https://agilecrm.s3.amazonaws.com/', true);
		xhr.send(form_data);

	},

	/**
	 * Fires when file uploading is in progress
	 * 
	 * @param evt -
	 *            event object
	 * @param file -
	 *            file object
	 */
	progress: function (evt, file) {

		if (evt.lengthComputable) {

			var percentComplete = Math.round(evt.loaded * 100 / evt.total);
		} else {
		}
	},

	/**
	 * Fires after file uploading completed
	 * 
	 * @param evt -
	 *            event object
	 * @param file -
	 *            file object
	 */
	complete: function (evt, file) {

		if (!file || !file.file_resource)
			return;

		var file_mssg = {};
		file_mssg.file_url = "https://s3.amazonaws.com/agilecrm/"
			+ file.file_resource;
		file_mssg.file_name = file.name;
		file_mssg.file_size = this.get_file_size(file.size);
		file_mssg.file_extension = file.name.split('.').pop();

		if (file.success_callback) {
			return Cd_Add_Wesite_Screenshot.amazon_callback(file, file_mssg);
		}

		// Send Message
		ClickDesk_Message_Util.send_message(file_mssg,
			ClickDesk_Globals.visitor_name);

		this.check_uploaded_count();

		ClickDesk_GA.trigger_event("file_upload", "-");

	},

	/**
	 * Fires when file uploading is failed
	 * 
	 * @param evt -
	 *            event object
	 * @param file -
	 *            file object
	 */
	failed: function (evt, file) {

		var file_mssg = "There was an error attempting to upload the file.";

		if (file.success_callback) {
			Cd_Add_Wesite_Screenshot.amazon_callback(file, file_mssg);
		} else {
			ClickDesk_Chat_Window_Util.append_message(file_mssg,
				ClickDesk_Globals.visitor_name, "", "warning");
		}

		this.check_uploaded_count();
	},

	/**
	 * Fires when file uploading is cancelled
	 * 
	 * @param evt -
	 *            event object
	 * @param file -
	 *            file object
	 */
	canceled: function (evt, file) {

		var file_mssg = "The upload has been canceled by the user or the browser dropped the connection.";
		if (file.success_callback) {
			Cd_Add_Wesite_Screenshot.amazon_callback(file, file_mssg);
		} else {
			ClickDesk_Chat_Window_Util.append_message(file_mssg,
				ClickDesk_Globals.visitor_name, "", "warning");
		}

		this.check_uploaded_count();
	},

	/**
	 * Checks uploaded files count
	 */
	check_uploaded_count: function () {

		if (this.uploaded_file_size > 0)
			this.uploaded_file_size -= 1;

		// To show loading image when mutiple files uploaded frequently
		if (this.uploaded_success_file_count < this.uploaded_file_count)
			this.uploaded_success_file_count += 1;

		if (this.uploaded_file_size <= 0
			&& this.uploaded_success_file_count >= this.uploaded_file_count)
			this.toggle_uploading_image("none");

		clickdesk_log("uploaded_success_file_count = "
			+ this.uploaded_success_file_count + ", uploaded_file_count = "
			+ this.uploaded_file_count);

	},

	/**
	 * Toggles the loading image
	 * 
	 * @param type -
	 *            show, hide
	 */
	toggle_uploading_image: function (toggle_type) {

		var file_upload_progress_img = ClickDesk_DOM
			.wrap('#cd_file_upload_process')[0];
		if (file_upload_progress_img && toggle_type != "none") {
			file_upload_progress_img = (file_upload_progress_img.tagName
				.toLowerCase() != "img") ? ClickDesk_DOM
					.wrap('#cd_file_upload_process img')[0]
				: file_upload_progress_img;

			var src = (ClickDesk_Widget_Util.get_user_template().indexOf(
				"webrtc") == -1) ? "https://my.clickdesk.com/img/21-0.gif"
				: "https://my.clickdesk.com/clickdesk-ui/browser/img/file_upload.gif";
			file_upload_progress_img.src = src;
		}

		ClickDesk_DOM.set_style_by_id('cd_file_upload_process', {
			'display': toggle_type
		});

		// Hides Options popout in Ultra and minimalistic themes after file
		// uploaded
		try {
			if (toggle_type == "none")
				ClickDesk_DOM.set_style_by_id(
					'clickdesk_popout_footer_options', {
					'display': toggle_type
				});
		} catch (err) {
		}
	},

	/**
	 * Returns file proper file size
	 * 
	 * @param size -
	 *            file size
	 */
	get_file_size: function (size) {

		if (!size)
			return "";

		if (size < 1024)
			return size + "Bytes";

		else if (size < 1024 * 1024) {

			return this.trim_file_size(size / 1024) + "KB";
		}

		else {
			return this.trim_file_size(size / (1024 * 1024)) + "MB";
		}

	},

	/**
	 * Trims the size of the given file
	 */
	trim_file_size: function (size) {

		return Math.round(size * 100) / 100;
	}

};
/**
 * Check fixed position css property in browser(<=IE6 not support fixed
 * position css)
 */
function clickdesk_is_browser_support_fixed_css(css_property) {

	css_property = (!css_property) ? "fixed" : css_property;

	// Create an element with fixed position css and append to body
	var ele = document.createElement("div");
	ele.id = "testingPositionFixed";
	var CSS = (css_property == "fixed") ? {
		'position' : 'fixed',
		'top' : '0px',
		'right' : '0px'
	} : {
		'width' : 'auto'
	};

	ClickDesk_DOM.set_style_by_object(ele, CSS);

	document.body.appendChild(ele);

	// Offset returns 0(if fixed position allows)
	var offset = 1;

	if (css_property == "fixed" && typeof ele.offsetTop == "number"
			&& ele.offsetTop != null && ele.offsetTop != "undefined") {
		offset = parseInt(ele.offsetTop);
	}
	// clientWidth Return 0 (if browser not allow width auto)
	else if (typeof ele.clientWidth == "number" && ele.clientWidth != null
			&& ele.clientWidth != "undefined") {

		offset = parseInt(ele.clientWidth);
	}

	if (offset == 0) {
		return true;
	}

	return false;
}

/**
 * This adds the fixed css classes to bubble and window. (IE <= 9 doesn't
 * support fixed property if there is no doctype) IE6 itself not support fixed
 * even if doctype exists
 * 
 * @returns {Boolean}
 */
function clickdesk_check_doctype_in_ie() {

	// If IE
	if (isNaN(cd_ie_browser_version) || cd_ie_browser_version <= 5)
		return false;

	// Add class ie to window

	if (cd_ie_browser_version == 7
			|| clickdesk_is_browser_support_fixed_css("width")) {
		ClickDesk_DOM.set_style_by_object(ClickDesk_DOM
				.wrap('.clickdesk_bubble')[0], {
			'width' : '260px',
			'maxWidth' : '280px'
		});
	}

	if (cd_ie_browser_version > 6 && clickdesk_is_browser_support_fixed_css())
		return false;

	var alignment = widgetPrefsJSON.template_prefs.position;

	if (!alignment)
		return false;

	ClickDesk_DOM.wrap('.clickdesk_bubble').addClass(
			'clickdesk-fixed-' + alignment.split("_")[0] + ' clickdesk-fixed-'
					+ alignment.split("_")[1]);
	ClickDesk_DOM.set_style_by_object(
			ClickDesk_DOM.wrap('.clickdesk_bubble')[0], {
				'width' : '260px',
				'maxWidth' : '280px'
			});

	ClickDesk_DOM.wrap('#clickdesk_container')
			.addClass(
					'clickdesk-fixed-bottom clickdesk-fixed-'
							+ alignment.split("_")[1]);

	var but_side = widgetPrefsJSON.button_prefs.alignment;
	ClickDesk_DOM.wrap('.clickdesk_tool').addClass(
			'clickdesk-fixed-' + but_side);

}

/**
 * Returns IE version
 */
function clickdesk_get_ie_version() {

	// < IE11
	var nav = window.navigator && window.navigator.appVersion.split("MSIE");

	if (parseFloat(nav[1]))
		return parseFloat(nav[1]);

	// IE11
	var version = navigator.userAgent.match(/Trident.*rv[ :]*11\./);

	if (version)
		return version;

	return null;

}var ClickDesk_Iframe_Submit = {
	submit : function(url, params){
		console.log(url);
		console.log(params);
		var iframeId = this.insert_and_get_frame_id();

		var iframe = document.getElementById(iframeId);
		var innerDoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
		innerDoc.open();

		innerDoc.appendChild(this.get_form_html(url, params));
		this.deserialize_from(innerDoc, params);

		innerDoc.close();

		var MyIFrame = document.getElementById(iframeId);
		var MyIFrameDoc = (MyIFrame.contentWindow || MyIFrame.contentDocument);
		if (MyIFrameDoc.document) MyIFrameDoc = MyIFrameDoc.document;

		//for firefox form submit
		if(url.indexOf("postchat-survey-feedback") > -1)
		{
			MyIFrameDoc.getElementById("mybutton").name = "submit111";
			MyIFrameDoc.getElementById("clickdesk_frame_form").submit();
			MyIFrameDoc.getElementById("mybutton").name = "submit";	
		}
		else
		{
			MyIFrameDoc.getElementById("mybutton").click();
		}
	},

	insert_and_get_frame_id : function(){
		var id = "clickdesk_" + new Date().getTime();
		var iframe = document.createElement('iframe');
		iframe.id = id;
		iframe.setAttribute("src", "javascript:void(0)");
		iframe.style.display = "none";
		iframe.style.height = "0px";
		iframe.style.width = "0px";

		document.body.appendChild(iframe);
		return id;
	},
	deserialize_from: function(iframe, params){ 
		var iframebody = iframe.body || iframe;
		var frameform = iframebody.getElementById("clickdesk_frame_form"); 
		var inputs = frameform.getElementsByTagName('textarea'); 
		for (var i = 0; i < inputs.length; i++) {
			inputs[i].value = params[inputs[i].name];
		}
	},
	get_form_html : function(url, params){
		var obj = {};
		obj.url = url;

		var keysArray = [];
		for(var key in params){
			keysArray.push({name : key});
		}

		obj.keys = keysArray;

		return ClickDesk_Handlebars.get_template("clickdesk-iframe-form", obj);
	}

};/** JSON Prototype * */
var JSON = JSON || {};

// Implement JSON.parse de-serialization
JSON.parse = JSON.parse || function(str) {

	if (str === "")
		str = '""';
	eval("var p=" + str + ";");
	return p;
};

// Implement JSON.stringify serialization
JSON.stringify = JSON.stringify || function(obj) {

	var t = typeof (obj);
	if (t != "object" || obj === null) {
		// simple data type
		if (t == "string")
			obj = '"' + obj + '"';
		return String(obj);
	} else {
		// recurse array or object
		var n, v, json = [], arr = (obj && obj.constructor == Array);

		for (n in obj) {
			v = obj[n];
			t = typeof (v);
			if (t == "string")
				v = '"' + v + '"';
			else if (t == "object" && v !== null)
				v = JSON.stringify(v);
			json.push((arr ? "" : '"' + n + '":') + String(v));
		}
		return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
	}
};
/** End of JSON * */
/**
 * Handle Jsonp Calls
 */
var ClickDesk_JSONP = {

	/**
	 * Constructs the jsonp request with the json obect and URL
	 * 
	 * @param jsonObject
	 * @param url
	 * @returns {___anonymous116_198}
	 */
	construct_callback_request : function(jsonObject, url) {

		if (jsonObject)
			jsonObject.callback = "?";

		var query_string = "";

		// Iterate json
		for ( var key in jsonObject) {

			var value = jsonObject[key];

			// Proceed with Strings only (some times site devs override the
			// object
			// behaviour to their own. So object toString returns function
			// or object
			// there.)
			if (value && typeof value != "string")
				continue;

			value = (key == "callback") ? value : encodeURIComponent(value);

			query_string += key + "=" + value + "&";

		}

		url = ((url.indexOf("?") == -1) ? url + "?" : url + "&") + query_string;

		return ((url.lastIndexOf("&") != url.length - 1) ? url : url.slice(0,
				url.length - 1))

	},

	/**
	 * Send request to server
	 * 
	 * @param params
	 * @param callback
	 */
	send_request : function(url, params, callback, iframe_submit) {

		if(iframe_submit){
			this.iframe_submit(url, params, callback);
			return;
		}

		// Construct request object
		var url = this.construct_callback_request(params, url);

		// Send JSONP request
		this.send_JSONP_Request(url, function(response) {

			clickdesk_log(response);

			if (callback)
				callback(response);

		});

	},

	/**
	 * JSONP request for cross domains
	 * 
	 * @param URL
	 * @param success
	 */
	send_JSONP_Request : function(URL, success) {

		var ud = 'json' + (Math.random() * 100).toString().replace(/\./g, '');

		window[ud] = function(o) {
			success && success(o);
		};

		document.getElementsByTagName('body')[0].appendChild((function() {
			var s = document.createElement('script');
			s.type = 'text/javascript';
			s.src = URL.replace('callback=?', 'callback=' + ud);
			return s;
		})());
	},

	resend_req : function(callback_name) {

		callback_name = callback_name.replace("clickdesk_request_sending", "")
				.replace("clickdesk_request_failed", "").replace(
						"clickdesk_request_progress", "");

		callback_name = callback_name.trim();

		if (callback_name.indexOf("_") != 0)
			callback_name = "_" + callback_name;

		if (callback_name === undefined || !this.jsonp_urls[callback_name])
			return;

		var json = this.jsonp_urls[callback_name];

		if (json.url.indexOf("/startbroadcast") != -1
				&& ClickDesk_Widget_Session.sent_session_request_count) {
			json.params["duplicate_request"] = "true";
		}

		ClickDesk_JSONP_Tips.jsonp(json.url, json.params,
				function success(data) {
				}, function failure(error) {
				}, json.callback_id);

	},
	iframe_submit: function(url, params, callback){
		
		try{
			ClickDesk_Iframe_Submit.submit(url, params);
		}catch(err){
			console.info(err);
		}

		if(callback)
			callback();
	},

	__callbackId : 0,
	jsonp_urls : {}

};

var ClickDesk_JSONP_Tips = ClickDesk_JSONP_Tips || {};

(function(dt) {

	var jsonp = dt.jsonp = function(url, parameters, success, error,
			__callbackId, timeout) {

		if (__callbackId === undefined) {
			__callbackId = ClickDesk_JSONP.__callbackId++;
		}

		var callBackName = "_callback" + __callbackId;
		ClickDesk_JSONP.jsonp_urls[callBackName] = {
			url : url,
			params : parameters,
			callback_id : __callbackId
		};

		// Construct request object
		var queryString = ClickDesk_JSONP.construct_callback_request(
				parameters, url);
		queryString = queryString.replace('callback=?',
				'callback=ClickDesk_JSONP_Tips.jsonp.' + callBackName);

		// Replace class name
		var clsName = callBackName.replace("_", "");

		// setup the callback
		jsonp[callBackName] = function(data) {
			console.log("inn jsonp callbackk");
			console.log(data);
			delete jsonp[callBackName];
			delete ClickDesk_JSONP.jsonp_urls[callBackName];

			ClickDesk_DOM.remove_class(clsName, "clickdesk_request_sending");
			ClickDesk_DOM.remove_class(clsName, clsName);

			if (data.error) {
				console.log(data+"kjhiwhiuheiqhe ");
				if (error) {
					console.log("in error function jsonp..");
					console.log(data);
					data.error.callback = callBackName;
					error(data.error);
				}
				;
			} else {
				console.log(data+"in sussess....")
				success(data);
			}
			;
		};

		// send the request
		var scr = document.createElement("script");
		scr.type = "text/javascript";
		scr.src = queryString;
		var head = document.getElementsByTagName("head")[0];
		head.insertBefore(scr, head.firstChild);

		
		ClickDesk_DOM.remove_class(clsName, "clickdesk_request_failed");
		ClickDesk_DOM.add_class(clsName, "clickdesk_request_sending");

		// default to 10 second timeout
		//timeout = timeout || 8000; // commented by me //TODO: Soumya
		timeout = 60 * 1000;

		//timeout = timeout || 8000;
		window.setTimeout(function() {

			if (typeof jsonp[callBackName] == "function") {
				console.log("typeof jsonp[callBackName] =function");
				// replace success with null callback in case the request is
				// just very latent.
				jsonp[callBackName] = function(data) {

					// delete
					// jsonp[callBackName];
				};

				try {

					// Replace class name
					var clsName = callBackName.replace("_", "");
					ClickDesk_DOM.remove_class(clsName,
							"clickdesk_request_sending");

							console.log(".remove_class(clsName clickdesk_request_sending");
							//TODO: Soumya remove the below (when request takes more time)
					// ClickDesk_DOM
					// 		.add_class(clsName, "clickdesk_request_failed");

				} catch (e) {
				}

				// call the error callback
				error({
					code : 408,
					message : "Request Timeout",
					callback : callBackName
				});

				// set a longer timeout to safely clean up the unused callback.
				window.setTimeout(function() {
					if (typeof jsonp[callBackName] == "function") {
						// delete jsonp[callBackName];
						console.log("settimeout lo 600000");
					}
					;
				}, 60* 1000);
			}
			;
		}, timeout);

	};
})(ClickDesk_JSONP_Tips);
function clickdesk_resend_JSONP_request() {

}/**
 * Sanitize json values to avaoid xss attacks
 */
var Cd_Xss_Util = {

	is_valid_to_escape : function(message) {

		if (message.indexOf("[Agent is inviting") != -1
				|| message.indexOf("[Agent has sent you a link") != -1)
			return false;

		return true;

	},
	escape_html : function(unsafe) {

		try {

			if (!this.is_valid_to_escape(unsafe))
				return unsafe;

			// Unsafe Operation with &amp;(chance to create duplicate entry with
			// &)
			unsafe = unsafe.replace(/&amp;/g, "&");

			return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(
					/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g,
					"&#039;");
		} catch (e) {
		}

		return unsafe;

	},

	escape_json_values : function(json) {

		if (!json)
			return;

		for (key in json) {
			json[key] = this.escape_html(json[key]);
		}

		return json;
	}
};// Response time delay 
var Clickdesk_Facebook_Response = false;
var Clickdesk_Facebook_Response_Counter = 0;

/**
 * Send request to facebook to get account likes info
 */
function clickdesk_get_user_facebook_likes() {

	// URL
	var facebookURL = widgetPrefsJSON.social_network.facebook_url;
	facebookURL = facebookURL.replace("http://facebook.com/", "");

	var template = widgetPrefsJSON.template_prefs.template;
	var noofconnections = (template == "cd_small_template" || template == "cd_small_image_template") ? 8
			: 12;

	/*
	 * // Stop twitter service for a while var facebookToken =
	 * widgetPrefsJSON.social_network.facebook_id; if (!facebookToken) {
	 * clickdesk_handle_social_tab_response_delay( 'facebook', "Dear Admin,
	 * <br/><br/> Due to the recent API updates by facebook, you need to link
	 * your facebook account by logging in to the ClickDesk's dashboard.");
	 * return false; }
	 */

	/*
	 * ClickDesk_DOM .wrap('#clickdeskchat_social_template
	 * iframe#cd_facebook_frame')[0].src = glcp +
	 * 'www.facebook.com/plugins/fan.php?logobar=false&connections=8&id=' +
	 * facebookToken;
	 * 
	 * if (true) return false;
	 */

	Clickdesk_Facebook_Response = false;
	Clickdesk_Facebook_Response_Counter = setTimeout(
			"clickdesk_handle_social_tab_response_delay('facebook');", 10000);

	var json = {};

	// Snack request to get user facebook token
	ClickDesk_JSONP
			.send_request(
					CLICKDESK_SERVER_PATH
							+ "/rest/visitor/social_prefs/facebook",
					json,
					function(data) {

						// Snack Request to get facebook id
						json = {};
						json.command = "facebook";
						json.access_token = data.response.access_token;

						ClickDesk_JSONP
								.send_request(
										"https://graph.facebook.com/"
												+ facebookURL,
										json,
										function(response) {

											clearTimeout(Clickdesk_Facebook_Response_Counter);

											if (response.error) {

												clickdesk_handle_social_tab_response_delay(
														'facebook',
														response.error.message);

												Clickdesk_Facebook_Response = true;
												return false;

											}

											Clickdesk_Facebook_Response = true;

											var id = (response.id != null && response.id != undefined) ? response.id
													: "";
											ClickDesk_DOM
													.wrap('#clickdeskchat_social_template iframe#cd_facebook_frame')[0].src = glcp
													+ 'www.facebook.com/plugins/fan.php?logobar=false&connections=8&id='
													+ id;
										});

					});

}/**
 * Install browser phone based on agent/user phone preferences
 * 
 * @param dataJSON
 * @returns {Boolean}
 */
function clickdesk_show_browser_phone_option(dataJSON) {

	var phoneNumber = "", phoneType = "";
	var webRtcVideo = true, webRtcAudio = true;

	// Check webrtc prefs
	if (dataJSON && dataJSON.webrtc_video !== undefined
			&& dataJSON.webrtc_audio !== undefined) {
		webRtcVideo = dataJSON.webrtc_video;
		webRtcAudio = dataJSON.webrtc_audio;
	}

	// Show call option
	clickdesk_show_call_option(webRtcVideo, webRtcAudio);

}

// Show webrtc call option
function clickdesk_toggle_webrtc_call_options(webrtc_video, webrtc_audio) {

	var agent_json = ClickDesk_Globals.agent_json;

	if (!agent_json || !ClickDesk_Call.browser_has_call_support()) {
		webrtc_audio = false;
		webrtc_video = false;
	}

	if (widgetPrefsJSON.userid == "2rDk1z"
			|| widgetPrefsJSON.userid == "22hxjr") {
		webrtc_audio = false;
		webrtc_video = false;
	}

	clickdesk_log("clickdesk_toggle_webrtc_call_options" + webrtc_audio + " : "
			+ webrtc_video);

	ClickDesk_DOM
			.set_style_by_id(
					'clickdesk_video_call',
					{
						'display' : ((webrtc_video && (webrtc_video == "true" || webrtc_video == true)) ? "block"
								: "none")
					});

	ClickDesk_DOM
			.set_style_by_id(
					'clickdesk_audio_call',
					{
						'display' : ((webrtc_audio && (webrtc_audio == "true" || webrtc_audio == true)) ? "block"
								: "none")
					});

	// Allow to old agents also who are using IM phone
	var display_css_to_old_agents = "none";

	if ((webrtc_video && (webrtc_video == "true" || webrtc_video == true))
			|| (webrtc_audio && (webrtc_audio == "true" || webrtc_audio == true))) {
		display_css_to_old_agents = "block";
	}

	if (widgetPrefsJSON.userid == "2rDk1z"
			|| widgetPrefsJSON.userid == "22hxjr")
		display_css_to_old_agents = "none";

	ClickDesk_DOM.set_style_by_id('cd_phone', {
		'display' : display_css_to_old_agents
	});

}

// Show call option
function clickdesk_show_call_option(webrtc_video, webrtc_audio) {

	ClickDesk_DOM.set_style_by_id('cd_phone', {
		'display' : 'block'
	});

	// Show/hide webrtc option
	clickdesk_toggle_webrtc_call_options(webrtc_video, webrtc_audio);

}

// Hide call option
function clickdesk_hide_call_option(webrtc_video, webrtc_audio) {

	ClickDesk_DOM.set_style_by_id('cd_phone', {
		'display' : 'none'
	});

	// Show/hide webrtc option
	clickdesk_toggle_webrtc_call_options(webrtc_video, webrtc_audio);

}

/**
 * 
 * @param command
 * @param type
 */
function clickdesk_process_visitor_action_on_agent_call_req(ele, command, type) {

	if (!command)
		return;

	ClickDesk_DOM.remove_child_elements(ele, "cd_rewrite");

	if (command == "accepted") {
		clickdesk_check_permissions_for_audio_and_video(type, command);
		return;
	}

	// Check if Session Is Present
	var sessionJSON = ClickDesk_Widget_Session.get_active_session();
	if (sessionJSON == null)
		return;

	sessionId = eval("sessionJSON." + ClickDesk_Widget_Session.session_id);
	ClickDesk_Message_Util.send_chat(sessionId,
			"[Visitor declined call request.]");

}

/**
 * Checks agent allowed permissions to audio/video call
 * 
 * @param audio_or_video
 * @param accepted_command
 * @returns {Boolean}
 */
function clickdesk_check_permissions_for_audio_and_video(audio_or_video,
		accepted_command) {

	if (ClickDesk_Call.call_window)
		ClickDesk_Call.call_window.focus();

	// Check supportability
	if (!ClickDesk_Call.browser_has_call_support()) {

		// Show error
		ClickDesk_Call
				.show_call_error("Your browser/OS doesn't support this feature.");
		return;

	}

	// Get Active Session
	var sessionJSON = ClickDesk_Widget_Session.get_active_session();
	if (!sessionJSON
			|| eval("sessionJSON." + ClickDesk_Widget_Session.session_id)
					.indexOf("BD") == 0) {

		// Show error
		ClickDesk_Call.show_call_error();
		return false;

	}

	ClickDesk_Globals.is_call_req_for_audio = audio_or_video;

	ClickDesk_Call.open_window(accepted_command);

	// Hide audio/video wiondow
	ClickDesk_Call.hide_error();

}

// Check and proceed with call option
function clickdesk_filter_phone_call_option() {

	if (!ClickDesk_Globals.agent_json)
		return;

	var agent_json = ClickDesk_Globals.agent_json;
	var audio = agent_json.webrtc_audio, video = agent_json.webrtc_video;

	if ((audio === undefined && video === undefined)
			|| (video == "true" && audio == "true")) {
		CLICKDESK_CHAT_WINDOW_UI.show_phone_window();

	} else if (video == "true") {

		clickdesk_check_permissions_for_audio_and_video("video");

	} else if (audio == "true") {
		clickdesk_check_permissions_for_audio_and_video("audio");
	}

}
// Clickdesk livechat object declaration for Social Login API
CLICKDESK_Live_Chat_Social = {};
CLICKDESK_Live_Chat_Social.twitterLogin = function() {

	var visitorId = ClickDesk_Widget_Pusher_Visitor.get_channel()
			+ ClickDesk_Widget_Pusher_Visitor.get_visitor_unique_token();

	var newwindow = window.open(
			'https://my.clickdesk.com/cd_twitter.jsp?clickdesk-token='
					+ visitorId, 'twitter', 'height=700,width=700,location=1');
	if (window.focus) {
		newwindow.focus();
	}

	return false;

};

CLICKDESK_Live_Chat_Social.fbLogin = function() {

	var visitorId = ClickDesk_Widget_Pusher_Visitor.get_channel()
			+ ClickDesk_Widget_Pusher_Visitor.get_visitor_unique_token();

	var client_id = "575730259135499", redirect_url = "https://beta2.clickdesk.com/cd_facebook_callback.jsp?clickdesk-token="
			+ visitorId;

	var fb_url = "https://www.facebook.com/dialog/oauth?client_id=" + client_id
			+ "&display=popup&scope=email&response_type=code&redirect_uri="
			+ redirect_url;

	var newwindow = window.open(fb_url, 'facebook',
			'height=500,width=500,location=1');

	if (window.focus) {
		newwindow.focus();
	}

	return false;

};

/**
 * Login callback from social
 * 
 * @param name
 * @param email
 */
function clickdesk_popupLoginCallback(name, email) {

	// Set to chat window
	CLICKDESK_Live_Chat.setName(name);
	CLICKDESK_Live_Chat.setEmail(email);
}
/**
 * Twitter response delay time
 */
var Clickdesk_Twitter_Response = false;
var Clickdesk_Twitter_Response_Counter = 0;

/**
 * Get tweets of the clickdesk user
 */
function clickdesk_get_user_tweets() {

	// URL
	var twitterURL = widgetPrefsJSON.social_network.twitter_url;

	// Twitter user screen name
	var screen_name = twitterURL.substring(twitterURL.lastIndexOf('/') + 1);

	var tweetsURL = glcp + "api.twitter.com/1/statuses/user_timeline.json";
	Clickdesk_Twitter_Response = false;
	Clickdesk_Twitter_Response_Counter = setTimeout(
			"clickdesk_handle_social_tab_response_delay('twitter');", 10000);

	// Stop twitter service for a while
	var twitterToken = widgetPrefsJSON.social_network.twitter_token;
	if (!twitterToken) {
		clickdesk_handle_social_tab_response_delay(
				'twitter',
				"Dear Admin, <br/><br/> Due to the recent API updates by twitter, you need to link your twitter account by logging in to the ClickDesk's dashboard.");
		return false;
	}

	var json = {};
	json.widget_id = ClickDesk_Widget_Util.widget_id

	// Snack request to get user tweets
	ClickDesk_JSONP.send_request(CLICKDESK_SERVER_PATH
			+ "/rest/visitor/social_prefs/twitter", json, function(response) {
		Clickdesk_Twitter_Response = true;
		clearTimeout(Clickdesk_Twitter_Response_Counter);

		ClickDesk_DOM.set_style_by_object(ClickDesk_DOM
				.wrap('#clickdeskchat_social_template big')[0], {
			'display' : 'none'
		});

		clickdesk_twitter_tweets_resp(response);

	});

}

// Twitter response callback
function clickdesk_twitter_tweets_resp(tweets) {

	clickdesk_log(tweets);

	var twitter_script = document.createElement('script');
	twitter_script.type = 'text/javascript';
	twitter_script.src = "//platform.twitter.com/widgets.js";
	document.getElementsByTagName('body')[0].appendChild(twitter_script);

	var statusHTML = [];
	for ( var i = 0; i < tweets.length; i++) {

		var username = tweets[i].user.screenName;
		var image = "", status = "";
		var reTweetStatus = tweets[i].retweetedStatus, tweetProfile = "";
		tweetProfile = (reTweetStatus) ? reTweetStatus : tweets[i];

		username = tweetProfile.user.screenName;
		image = tweetProfile.user.profileImageUrlHttps;

		status = tweets[i].text
				.replace(
						/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g,
						function(url) {

							url = url.replace("http://", "https://");

							return '<a style="text-decoration: none;" target="_blank" href="'
									+ url + '" >' + url + '</a>';
						})
				.replace(
						/\B@([_a-z0-9]+)/ig,
						function(reply) {
							return reply.charAt(0)
									+ '<a style="text-decoration: none;display:inline;" target="_blank" href="https://twitter.com/'
									+ reply.substring(1) + '">' + " "
									+ reply.substring(1) + '</a>';
						});

		statusHTML.push('<div class="tweetdiv" >' + '<div class="tweetleft">'
				+ '<img src="' + image + '"/></div>'
				+ '<div class="tweetright">' + status
				+ '<a target="_blank" href="https://twitter.com/' + username
				+ '/statuses/' + tweets[i].id + '">'
				+ '<div style="margin:0px;">'
				+ clickdesk_relative_time(tweets[i].createdAt)
				+ '</div></a></div></div>');
	}

	var twitter_id = (!ClickDesk_Window_Popout.is_window_in_popup()) ? "clickdesk_twitter"
			: "clickdesk_twitter_popout";
	ClickDesk_DOM.wrap('#' + twitter_id)[0].innerHTML = statusHTML.join('');

}

// Get twitter relative time
function clickdesk_relative_time(time_value) {

	time_value = new Date(time_value) + "";

	var values = time_value.split(" ");
	time_value = values[1] + " " + values[2] + ", " + values[5] + " "
			+ values[3];

	var parsed_date = Date.parse(time_value);
	var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
	var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
	delta = delta + (relative_to.getTimezoneOffset() * 60);

	if (delta < 60) {
		return 'less than a minute ago';
	} else if (delta < 120) {
		return 'about a minute ago';
	} else if (delta < (60 * 60)) {
		return (parseInt(delta / 60)).toString() + ' minutes ago';
	} else if (delta < (120 * 60)) {
		return 'about an hour ago';
	} else if (delta < (24 * 60 * 60)) {
		return 'about ' + (parseInt(delta / 3600)).toString() + ' hours ago';
	} else if (delta < (48 * 60 * 60)) {
		return '1 day ago';
	} else {
		return (parseInt(delta / 86400)).toString() + ' days ago';
	}

}
// Social prototype for UI
var ClickDesk_Social_Tab_Ui = {

	show_window : function() {

		// Check popout and normal window
		ClickDesk_DOM.wrap('#clickdeskchat_social_template')[0].style.display = (!ClickDesk_Window_Popout
				.is_window_in_popup()) ? 'block' : "table-row";

		var twitter_id = (!ClickDesk_Window_Popout.is_window_in_popup()) ? "clickdesk_twitter"
				: "clickdesk_twitter_popout";
		ClickDesk_DOM.wrap('#' + twitter_id)[0].innerHTML = '';

		var social_load_img = ClickDesk_DOM
				.wrap('#clickdeskchat_social_template big img')[0];
		if (social_load_img)
			social_load_img.src = "//my.clickdesk.com/clickdesk-ui/browser/images/loading-image.gif";

		ClickDesk_DOM.wrap('#clickdeskchat_social_template big')[0].style.display = 'block';

	},

	hide_window : function() {

		// Social Templates
		ClickDesk_DOM.set_style_by_id('clickdeskchat_social_template', {
			'display' : 'none'
		});

		ClickDesk_DOM.set_style_by_id('clickdesk_twitter', {
			'display' : 'none'
		});

		ClickDesk_DOM.set_style_by_object(ClickDesk_DOM
				.wrap('#clickdeskchat_social_template big')[0], {
			'display' : 'none'
		});

		ClickDesk_DOM
				.set_style_by_object(
						ClickDesk_DOM
								.wrap('#clickdeskchat_social_template iframe#cd_facebook_frame')[0],
						{
							'display' : 'none'
						});
		ClickDesk_DOM
				.set_style_by_object(
						ClickDesk_DOM
								.wrap('#clickdeskchat_social_template iframe#cd_phone_frame')[0],
						{
							'display' : 'none'
						});

	},

	// Show Social header
	show_social_network_details : function(social_network) {

		CLICKDESK_CHAT_WINDOW_UI.show_window("");

		var headerName = "", headerImage = "", facebookURL = "", twitterURL = "";

		if (social_network == "twitter") {

			twitterURL = widgetPrefsJSON.social_network.twitter_url;
			headerName = twitterURL.replace("http://twitter.com/", "");
			headerImage = ClickDesk_Globals.img_cloud_path
					+ "/images/twitterLogo.png";

			this.update_header(headerName, headerImage, true);

		} else if (social_network == "facebook") {

			facebookURL = widgetPrefsJSON.social_network.facebook_url;
			headerName = facebookURL.replace("http://facebook.com/", "");
			headerImage = ClickDesk_Globals.img_cloud_path
					+ "/images/facebookLogo.png";

			this.update_header(headerName, headerImage, false);

		} else if (social_network == "phone") {

			headerName = "Call Us";
			headerImage = ClickDesk_Globals.img_cloud_path + "/images/3-bg.png";

			this.update_header(headerName, headerImage, false);
		}

		// Show social ui
		this.show_window();

	},

	// Open tab on selected footer options
	show_social_network_tab : function(eleid) {

		clickdesk_log(eleid);

		if (!eleid)
			return false;

		// Activate selected tab
		ClickDesk_DOM.wrap('#clickdesk_footer_tabs li').removeClass(
				'ClickDeskActive');
		ClickDesk_DOM.wrap('#' + eleid)[0].parentNode.className = 'ClickDeskActive';

		// Twitter
		if (eleid == "cd_twitter") {

			this.hide_window();
			this.show_social_network_details("twitter")

			setTimeout(function() {
				ClickDesk_Dragger.setDraggerPosition("twitter");
			}, 1000);

			ClickDesk_DOM.wrap('#clickdesk_twitter')[0].style.display = 'block';

			// Get tweets
			clickdesk_get_user_tweets();

			ClickDesk_GA.trigger_event("twitter", "-");

			ClickDesk_Dragger.setWindowTopPosition();
		}
		// Chat
		else if (eleid == "cd_chat") {

			// Get Active Session
			var sessionJSON = ClickDesk_Widget_Session.get_active_session();

			// If session exists or user stands on proactive message
			if (sessionJSON || ClickDesk_Proactive_Handler.is_session_exists) {

				// If session exists show chat box
				CLICKDESK_CHAT_WINDOW_UI.show_chat_box();

			} else {

				// else show prechat/offline form
				if (widgetPrefsJSON.status == "offline") {

					// Show Offline Form
					CLICKDESK_CHAT_WINDOW_UI.show_offline_window();

				} else {

					CLICKDESK_CHAT_WINDOW_UI.show_prechat_window();
				}
			}

		}
		// Phone
		else if (eleid == "cd_phone") {

			clickdesk_filter_phone_call_option();

		}
		// Facebook
		else if (eleid == "cd_facebook") {

			this.hide_window();
			this.show_social_network_details("facebook")

			ClickDesk_Dragger.setDraggerPosition();
			ClickDesk_DOM
					.wrap('#clickdeskchat_social_template iframe#cd_facebook_frame')[0].style.display = 'block';

			clickdesk_get_user_facebook_likes();
			ClickDesk_GA.trigger_event("facebook", "-");
			ClickDesk_Dragger.setWindowTopPosition();
		}

		// Youtube
		else if (eleid == "cd_youtube") {

			Push2Call.show();
		}

		// Helpdesk
		else if (eleid == "cd_helpdesk") {

			// Show helpdesk email Form
			CLICKDESK_CHAT_WINDOW_UI.show_helpdesk_window();
			ClickDesk_GA.trigger_event("helpdesk", "-");
		}

	},

	// Show Social Network Agent details
	update_header : function(name, image, showFallow) {

		ClickDesk_DOM.set_style_by_id("ClickDeskSocialLogo", {
			'display' : 'block'
		});
		ClickDesk_DOM.set_style_by_id("cd-liviliyheadingtop", {
			'display' : 'none'
		});

		clickdesk_set_agent_name_and_image(name, image);

		ClickDesk_DOM.set_style_by_id("social_nw_fallow_image", {
			'display' : 'none'
		});
		ClickDesk_DOM.set_style_by_id("cd-twitter-block", {
			'display' : 'none'
		});

		if (!showFallow)
			return;
		try {
			if (widgetPrefsJSON.template_prefs.template == "novelty") {
				ClickDesk_DOM.set_style_by_id("cd-twitter-block", {
					'display' : 'block'
				});
				var twitterName = ClickDesk_DOM.wrap('#cd_twitter_name');
				snack.each(twitterName, function(eachElement) {
					if (eachElement.length != 0)
						eachElement.innerHTML = name;
				})
				var twitterImage = ClickDesk_DOM.wrap('#cd_twitter_image');
				snack.each(twitterImage, function(eachElement) {
					if (eachElement.length != 0)
						eachElement.src = image;
				})
			}
		} catch (err) {
		}

		ClickDesk_DOM.set_style_by_id("social_nw_fallow_image", {
			'display' : 'block'
		});

	}

};

// Get time out response from twitter/facebook (Show error page)
function clickdesk_handle_social_tab_response_delay(type, message) {

	if (type == "twitter") {

		if (Clickdesk_Twitter_Response)
			return false;

		message = (message) ? message
				: 'We are unable to process your request at this moment. Please verify your '
						+ type + ' ID before processing.';

		clearTimeout(Clickdesk_Twitter_Response_Counter);
		clickdesk_social_network_hide_loading();
		var statusHTML = '<div style="width: 100%;" >'
				+ '<div class="twitterErrorRedUI">' + message + '</div></div>';
		ClickDesk_DOM.wrap('#clickdesk_twitter')[0].innerHTML = statusHTML;

	} else if (type == "facebook") {

		if (Clickdesk_Facebook_Response)
			return false;

		clearTimeout(Clickdesk_Facebook_Response_Counter);
		clickdesk_social_network_hide_loading();
		ClickDesk_DOM
				.wrap('#clickdeskchat_social_template iframe#cd_facebook_frame')[0].src = glcp
				+ (location.hostname == "localhost" ? location.hostname
						+ ":8888" : "my.clickdesk.com")
				+ '/cd_facebook_invalid_user.jsp?message='
				+ message.replace("#", "");

	}
}

// Loading image in iframe
function clickdesk_social_network_hide_loading() {
	try {
		ClickDesk_DOM.wrap('#clickdeskchat_social_template big')[0].style.display = 'none';
	} catch (err) {
	}
}

// Init click event
function clickdesk_init_social_tabs() {

	// Add Click Event to the Social tabs
	var footer_tabs = ClickDesk_DOM.wrap('#clickdesk_footer_tabs a')

	for ( var i = 0; i < footer_tabs.length; i++) {

		var footer_tab_id = footer_tabs[i].id;

		ClickDesk_DOM
				.attach_event('#' + footer_tab_id, 'click',
						function(element) {

							element.returnValue = false;

							var ele = element.srcElement || element.target
									|| element.toElement;

							if (ClickDesk_DOM.is_valid_node(ele.id)) {
								// Show social container
								ClickDesk_Social_Tab_Ui
										.show_social_network_tab(ele.id);
							}

						});

	}

	try {

		var socialPrefs = widgetPrefsJSON.social_network;

		if (socialPrefs.show_facebook == "no")
			ClickDesk_DOM.wrap('#cd_facebook')[0].remove();
		if (socialPrefs.show_twitter == "no")
			ClickDesk_DOM.wrap('#cd_twitter')[0].remove();

	} catch (err) {
	}
	try {

		if (socialPrefs.twitter_url) {

			ClickDesk_DOM.wrap(".twitter-share-button")[0].href = ClickDesk_DOM
					.wrap(".twitter-follow-button")[0].href = socialPrefs.twitter_url;
		}

	} catch (err) {
		clickdesk_log(err);
	}
}
/**
 * Adding screenshot to dom using html2canvas js
 */
var Cd_Add_Wesite_Screenshot = {
	/**
	 * Intialize with false
	 */
	already_attached : false,
	agent_id : "",
	error_info : "Sorry, the visitor is currently using a browser which does not allow to take screenshots.",

	attach : function(ele, callback) {

		var attached_img_src_ele = ClickDesk_DOM
				.wrap("#cd_attach_screenshot_source")[0];
		var attached_img_url = attached_img_src_ele.value;

		var isChecked = ele.checked;
		if (!isChecked) {
			ClickDesk_DOM.set_style_by_id("cd_attach_screenshot_imagesrc", {
				"display" : "none"
			});
			return false;
		}

		ClickDesk_DOM.set_style_by_id("cd_attach_screenshot_imagesrc", {
			"display" : "block"
		});

		if (attached_img_url) {
			return false;
		}

		// Render canvas
		this.render_canvas(callback);

	},
	render_canvas : function(callback, hide_upload) {

		// Check browser support
		if (!this.is_blob_supported()
				|| ClickDesk_Mobile_Util.is_mobile_browser())
			return callback(Cd_Add_Wesite_Screenshot.error_info, hide_upload);

		// Check existence and load canvas file
		ClickDesk_Widget_Util.loadJS(glcpath.replace("/browser", "") + "plugins/html2canvas.js",
				function() {
					html2canvas(document.body, {
						onrendered : function(canvas) {

							try {
								// Canvas is the final rendered
								// <canvas> element
								var dataURL = canvas.toDataURL("image/png");

								// Add to amazon form
								Cd_Add_Wesite_Screenshot.add_to_amazon_cloud(
										dataURL, callback, hide_upload);

							} catch (e) {
								// TODO: handle exception
								return callback(
										Cd_Add_Wesite_Screenshot.error_info,
										hide_upload);
							}

						},
						letterRendering : true,
						useCORS : clickdesk_get_ie_version(),
					// proxy :
					// "http://localhost:8888/test-test.jsp"

					});

				})
	},

	add_to_amazon_cloud : function(dataURL, callback, hide_upload) {

		if (!dataURL)
			return false;

		clickdesk_log(dataURL);

		// Create a blob from dataURL
		var blob = this.dataURItoBlob(dataURL);
		clickdesk_log(blob);

		var file = {};
		file.file_resource = "cd-uploaded-files/" + new Date().getTime()
				+ "-screenshot.png";
		file.success_callback = "success_callback";
		// Add agents capture command request
		if (callback)
			file.agent_request = callback;

		if (hide_upload)
			file.hide_upload = "true";

		// Create form with data
		var formdata = ClickDesk_File_Upload.construct_form_data(file);
		formdata.append("file", blob);
		file.size = blob.size;
		file.name = "website-screenshot.png";

		clickdesk_log(formdata);

		// Send form
		ClickDesk_File_Upload.upload_to_amazon(formdata, file);

	},

	dataURItoBlob : function(dataURI) {
		var byteString = atob(dataURI.split(',')[1]);
		var ab = new ArrayBuffer(byteString.length);
		var ia = new Uint8Array(ab);
		for ( var i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}
		return new Blob([ ab ], {
			type : 'image/png'
		});

	},
	convert_to_object : function(file_msg) {

		if (typeof file_msg != "object") {
			var mssg = file_msg + "";
			mssg = (mssg.indexOf("upload") != -1) ? "Sorry, something went wrong. Please try again."
					: mssg;

			file_msg = {};
			file_msg.message = "[" + mssg + "]";
		}

		file_msg.hide_upload = true;

		return file_msg;
	},
	amazon_callback : function(file, file_msg) {

		clickdesk_log(file);
		var file_rc = file_msg.file_url;

		if (file.agent_request) {
			var agent_request = file.agent_request;
			try {
				if (file.hide_upload) {
					file_msg = this.convert_to_object(file_msg);
				}
			} catch (e) {
			}
			return agent_request(file_msg);
		}

		// Set prefs
		// Cd_Add_Wesite_Screenshot.already_attached = true;
		ClickDesk_DOM.wrap("#cd_attach_screenshot_source")[0].value = file_rc;
		ClickDesk_DOM.wrap("#cd_attach_screenshot_imagesrc")[0].src = file_rc;
		ClickDesk_DOM.set_style_by_id("cd_attach_screenshot_imagesrc", {
			"width" : "175px",
			"height" : "100px"
		});

	},

	send_attachment_to_agent : function(file_msg, hide_upload) {

		// Check if Session Is Present
		var sessionJSON = ClickDesk_Widget_Session.get_active_session();
		if (sessionJSON == null)
			return;

		try {
			if (hide_upload) {
				file_msg = Cd_Add_Wesite_Screenshot.convert_to_object(file_msg);
			}

		} catch (e) {
		}

		if (typeof file_msg == "object")
			file_msg.website_screenshot = "true";

		// Send Message
		ClickDesk_Message_Util.send_message(file_msg,
				ClickDesk_Globals.visitor_name, "web_rtc_request");

	},

	reset_form : function() {

		var attached_input_ele = this.is_input_checked();
		if (attached_input_ele)
			attached_input_ele.checked = false;

		ClickDesk_DOM.set_style_by_id("cd_attach_screenshot_imagesrc", {
			"display" : "none"
		});
	},
	get_attached_src : function() {

		if (this.is_input_checked())
			return ClickDesk_DOM.wrap("#cd_attach_screenshot_source")[0].value;

	},
	is_input_checked : function() {

		try {
			var attached_input_ele = ClickDesk_DOM
					.wrap("#cd_attach_screenshot")[0];
			var isChecked = attached_input_ele.checked;
			return (isChecked) ? attached_input_ele : null;
		} catch (e) {
		}

		return null;

	},
	is_blob_supported : function() {
		try {
			var bb = new Blob();
			return true;
		} catch (e) {
		}

		return false;
	},
	send_attachment_url_to_agent : function(file_msg) {

		if (!Cd_Add_Wesite_Screenshot.agent_id || !file_msg)
			return;

		var json = {};
		if (file_msg.file_url)
			json.file_src = file_msg.file_url;
		else
			json.error = file_msg;

		json.agent_id = Cd_Add_Wesite_Screenshot.agent_id;

		// Send attachment url to agent through channel
		ClickDesk_Widget_Pusher_Visitor.push_message("screenshot_attachment", {
			message : JSON.stringify(json)
		});

	}

};// Pusher js
var ClickDesk_Pusher_Message = {

	handle : function(message) {

		// If message is null omit
		if (!message)
			return;

		// Handle status update events
		if (message.type && message.type == "status_change") {

			clickdesk_log(message);

			var actual_status = message.current_status;
			if (!actual_status)
				return;

			if (actual_status == "online") {

				widgetPrefsJSON.user_departments = message.user_departments;

				// Get selected department id
				var widget_id = CLICKDESK_CHAT_WINDOW_UI
						.get_user_seleted_department();

				clickdesk_log("widget_id = " + widget_id);

				setTimeout(
						function(widget_id) {

							try {

								ClickDesk_Custom_CSS.add_dept_dropdown();

								ClickDesk_DOM.wrap('#cd_department')[0].value = (widget_id
										.indexOf("all_") == 0) ? "" : widget_id;

							} catch (e) {
							}

						}, 1, widget_id);

			}

			var widget_status = widgetPrefsJSON.status;
			if (actual_status == "online" && widget_status == "online") {
				return;
			} else if (actual_status == "offline" && widget_status == "offline") {
				return;
			}

			// Change prefs
			this.change_pres_and_ui(message);

		}

		// Check for thirdparty login details
		if (message.type && message.type == "third_party_login") {

			// Get visitor token
			var token = message.token;

			// Check visitor with token
			if (this.get_visitor_unique_token() != token)
				return false;

			clickdesk_popupLoginCallback(message.name, message.email);
			return;
		}

		// Check attach screenshot request
		if (message.type && message.type == "send_screenshot") {

			// Get agent id from message
			var agent_id = message.agent_id;
			if (!agent_id)
				return;

			// Send ACK to agent
			var json = {};
			json.agent_id = agent_id;
			json.visitorId = ClickDesk_Widget_Pusher_Visitor
					.get_visitor_unique_token();
			ClickDesk_Widget_Pusher_Visitor.push_message(
					"screenshot_attachment_ackment", json);

			// Assign to object
			Cd_Add_Wesite_Screenshot.agent_id = agent_id;

			// Call screenshot method
			return Cd_Add_Wesite_Screenshot
					.render_canvas(Cd_Add_Wesite_Screenshot.send_attachment_url_to_agent);

			return;
		}

		if (message.type == "webrtc_accept") {

			var req_type = message.webrtc_type
			req_type = (req_type == "audio") ? "voice" : "video";

			var agent_name = message.agent_name;
			agent_name = agent_name.slice(0, 1).toUpperCase()
					+ agent_name.slice(1);

			ClickDesk_GA
					.trigger_event("agent_answered_" + req_type, agent_name);
			return;
		}

		if (!message.agent_name || !message.token)
			return;

		// Handle forced chat

		// Get Active Session
		var sessionJSON = ClickDesk_Widget_Session.get_active_session();
		if (sessionJSON)
			return;

		// Get visitor session cookie to avoid duplicates
		var visitorId = ClickDesk_Widget_Pusher_Visitor
				.get_visitor_unique_token();
		var token = message.token;
		// Check visitor with token
		if (visitorId != token)
			return false;

		// Get agent name
		var agentName = message.agent_name;
		// Get message from agent
		var agentMessage = message.message;

		if (message.type == "forced_chat") {

			ClickDesk_GA.trigger_event("forced_chat", agentName.slice(0, 1)
					.toUpperCase()
					+ agentName.slice(1));

			this.handle_forced_chat_events(message);

		}

		if (!ClickDesk_Storage.get_prefs("window_popout"))
			// Show message in widget with agent name
			CLICKDESK_CHAT_WINDOW_UI.show_chat_box();

		// Check window popup and append there also
		ClickDesk_Chat_Window_Util.append_message(agentMessage, agentName);

		try {

			CLICKDESK_POPOUT_WINDOW.ClickDesk_Chat_Window_Util.append_message(
					agentMessage, agentName);
			CLICKDESK_POPOUT_WINDOW.CLICKDESK_CHAT_WINDOW_UI.show_chat_box();

		} catch (e) {
		}

		// Blink title
		ClickDesk_Title_Blinker.trigger(agentMessage, 20);

		// Play Sound if user permits
		ClickDesk_Sounds.play_send();

	},

	change_pres_and_ui : function(message) {

		// Reset widget status
		var status = message.current_status;
		if (!status)
			return;

		widgetPrefsJSON.status = status;

		this.handle_opened_window_changes(message);

		this.handle_bubble_status_changes(message);

		// Subscribe to channel
		if (status == "offline")
			return;

		if (widgetPrefsJSON.webchat_status)
			return;

		// Check webchat status
		if (!message.webchat_status)
			return;

		// Subscribe for new
		widgetPrefsJSON.webchat_status = message.webchat_status;

		if (ClickDesk_Window_Popout.is_window_in_popup())
			return;

		ClickDesk_Widget_Pusher_Visitor.subscribe();

	},

	handle_opened_window_changes : function(message) {

		var status = message.current_status;
		if (!status)
			return;

		var is_window_in_popout = ClickDesk_Window_Popout.is_window_in_popup();

		try {

			var prechat_display = "", offline_display = "";

			// Check opened windows
			if (status == "offline"
					&& document.getElementById("ClickdeskprechatForm").style.display != "none") {
				prechat_display = "none",
						offline_display = (!is_window_in_popout) ? "block"
								: "table-row";
			}

			if (status == "online"
					&& document.getElementById("ClickdeskofflineForm").style.display != "none") {
				prechat_display = (!is_window_in_popout) ? "block"
						: "table-row", offline_display = "none";
			}

			if (prechat_display && offline_display) {
				ClickDesk_DOM.set_style_by_id('ClickdeskprechatForm', {
					'display' : prechat_display
				});
				ClickDesk_DOM.set_style_by_id('ClickdeskofflineForm', {
					'display' : offline_display
				});
			}

		} catch (e) {
		}

		if (is_window_in_popout
				|| ClickDesk_Widget_Session.get_active_session())
			return;

		// Read active popup cookie value
		var activeSession = ClickDesk_Storage.get_prefs("active_popup");
		if (!activeSession)
			return;

		var window_status = ClickDesk_DOM.wrap("#clickdesk_container")[0].style.display;
		if (status == "offline" && this.hide_when_offline_prop_enabled())
			window_status = "none";
		else if (status == "online")
			window_status = "block";

		clickdesk_log("window_status = " + window_status);

		ClickDesk_DOM.wrap("#clickdesk_container")[0].style.display = window_status;

	},

	handle_bubble_status_changes : function(message) {

		try {

			var is_window_in_popout = ClickDesk_Window_Popout
					.is_window_in_popup();

			var status = message.current_status;

			// Check mobile browsers
			if (ClickDesk_Mobile_Util.is_mobile_browser()
					&& ClickDesk_Mobile_Util.is_mobile_optimized_widget()
					&& !is_window_in_popout) {

				try {
					ClickDesk_DOM.wrap(".clickdesk_bubble")[0].remove();
				} catch (e) {
				}

				// Append image to body and leave
				document.body.appendChild(clickdesk_get_mobile_view());

				// Set custom images/Links
				clickdesk_show_custom_images();

				return;
			}

			if (is_window_in_popout)
				return;

			var bubble_style = ClickDesk_DOM.wrap('.clickdesk_bubble')[0].style.display;

			// Read active popup cookie value
			var activeSession = ClickDesk_Storage.get_prefs("active_popup");
			if (!activeSession && this.hide_when_offline_enabled())
				bubble_style = "none";
			else if (!activeSession && status == "online")
				bubble_style = "block";

			// Reset bar
			if (ClickDesk_Custom_CSS.is_customization_enabled()
					&& ClickDesk_Custom_CSS.is_bubble_available()) {

				ClickDesk_DOM.set_style_by_id(
						'clickdesk_offline_customized_bubble', {
							'display' : 'none'
						});
				ClickDesk_DOM.set_style_by_id(
						'clickdesk_online_customized_bubble', {
							'display' : 'none'
						});

				if (status == "offline" && this.hide_when_offline_enabled())
					bubble_style = "none";

				clickdesk_log("1 = " + bubble_style);
				setTimeout(function(bubble_style) {

					ClickDesk_DOM.set_style_by_id('clickdesk_' + status
							+ '_customized_bubble', {
						'display' : bubble_style
					});

				}, 1, bubble_style);

				/*
				 * bubble_style = ClickDesk_DOM.wrap('#clickdesk_' + status +
				 * '_customized_bubble .clickdesk_bubble')[0].style.display;
				 * 
				 * clickdesk_log("2 = " + bubble_style);
				 * 
				 * ClickDesk_DOM.set_style_by_id('clickdesk_' + status +
				 * '_customized_bubble', { 'display' : bubble_style });
				 */

			} else {

				var bar_ele = document
						.getElementById("clickdesk-appendable-bubble");
				bar_ele.innerHTML = "";

				bar_ele.appendChild(ClickDesk_Handlebars.get_template(
						"clickdesk-ui-bar", widgetPrefsJSON));

				// Set bar prev style
				ClickDesk_DOM.set_style_by_object(ClickDesk_DOM
						.wrap('.clickdesk_bubble')[0], {
					'display' : bubble_style
				});

			}

		} catch (e) {
			clickdesk_log(e);
		}

		try {
			clickdesk_show_custom_images();
		} catch (e) {
		}

		try {

			clickdesk_load_bubble_images();

			clickdesk_toggle_eyecatcher_image();

		} catch (e) {
		}

		try {
			clickdesk_initialize_bubble_events();
		} catch (e) {
		}

	},

	handle_forced_chat_events : function(message) {

		ClickDesk_Globals.forced_chat_agent_id = message.agent_id;

		var json = {};
		json.agent_id = message.agent_id;
		json.message = message.message;
		json.agent_name = message.agent_name;
		json.time = message.time;

		ClickDesk_Globals.forced_chat_messages.push(json);

	},

	hide_when_offline_enabled : function() {

		var hide_when_offline = widgetPrefsJSON.bubble_prefs.hide_offline;
		return (widgetPrefsJSON.status == "offline" && hide_when_offline && hide_when_offline == "true");

	},

	hide_when_offline_prop_enabled : function() {

		var hide_when_offline = widgetPrefsJSON.bubble_prefs.hide_offline;

		return (hide_when_offline && hide_when_offline == "true");

	},

};
// Pusher Client
var ClickDesk_Widget_Pusher_Obj, ClickDesk_Widget_Pusher_Channel_Obj, ClickDesk_Widget_Pusher_Channel_Obj_Channel;

// Pusher js
var ClickDesk_Widget_Pusher_Visitor = {

	// Visitor Cookie
	visitor_cookie_name : "cd_pubnub_visitor",
	cloud_file : "https://d3dy5gmtp8yhk7.cloudfront.net/2.2.0/pusher.min.js",
	k : "c564616eee36000be9fb",
	server_url : "https://clickdeskvisitors.appspot.com/visitortrack",
	pusher_channel_token : "pusher_channel_token",
	is_pusher_channel_initiated : false,

	client_options : function() {
		return {
			visitor_info : this.uuid()
		}
	},

	optional_metrics : function() {
		console.log("in p[tion_metrics 22 line")
		var optional_metrics = {};
		optional_metrics.disableStats = true;

		return optional_metrics;

	},

	get_channel : function() {
		return widgetPrefsJSON.userid;
	},

	get_visitor_unique_token : function() {

		// Get visitor session cookie to avoid duplicates
		var visitorId = ClickDesk_Storage.read_cookie(this.visitor_cookie_name);
		if (visitorId)
			return visitorId;

		visitorId = (!visitorId) ? new Date().getTime() : visitorId;

		// Set cookie with new visitor
		ClickDesk_Storage.create_cookie(this.visitor_cookie_name, visitorId);

		return visitorId;

	},

	uuid : function() {

		var json = {}, visitor_info = ClickDesk_Visitor_Info.get_visitor_info();

		visitor_info = (visitor_info) ? JSON.parse(visitor_info) : "";

		if (visitor_info) {

			var geo = widgetPrefsJSON.visitor_geo;
			for ( var key in geo)
				visitor_info[key] = geo[key];

			if (visitor_info.plugins)
				delete visitor_info.plugins;

			visitor_info.browser_type = (ClickDesk_Mobile_Util
					.is_mobile_browser()) ? "mobile" : "desktop";

			var created_time = widgetPrefsJSON.created_time;
			if (created_time)
				visitor_info.created_time = created_time;

		}

		// Add widget id
		json.widget_id = ClickDesk_Widget_Util.widget_id;

		// Visitor location details
		json.visitor_info = (visitor_info) ? visitor_info
				: widgetPrefsJSON.visitor_geo;

		// Add visitor id
		json.visitorId = this.get_visitor_unique_token();

		// Get name and email
		json.visitor_info.name = ClickDesk_Storage.get_prefs("visitor_name");
		json.visitor_info.email = ClickDesk_Storage.get_prefs("visitor_email");

		return JSON.stringify(json);

	},

	is_allowed_domain : function() {

		if (true)
			return true;

		var versions = new Array("localhost", "clickdesk", "venkat2desk",
				"alekhyachattest");
		var custom_domains = _glc.custom_domain;
		if (custom_domains) {
			custom_domains = custom_domains.split(",");
			for ( var i = 0; i < custom_domains.length; i++) {
				versions.push(custom_domains[i]);
			}
		}

		var url = window.location.href;
		for ( var j = 0; j < versions.length; j++) {
			if (url.indexOf(versions[j]) > -1)
				return true;
		}

		return false;

	},

	close_channel : function() {

		ClickDesk_Widget_Pusher_Visitor.is_pusher_channel_initiated = false;

		if (ClickDesk_Widget_Pusher_Channel_Obj_Channel) {
			ClickDesk_Widget_Pusher_Channel_Obj_Channel.disconnect();
			ClickDesk_Widget_Pusher_Channel_Obj.disconnect();
		}

	},

	channal_subscribe : function(channel_name, callback) {
console.log("33333333333333333333333333");
		// Allow onlycribe to support panel
		if (!channel_name || !this.is_allowed_domain())
			return;

			//channel_name = "clickdesk-appup";
			
		head
				.js(
						ClickDesk_Widget_Pusher_Visitor.cloud_file,
						function() {

							// Store in Cookie
							ClickDesk_Storage
									.set_prefs(
											ClickDesk_Widget_Pusher_Visitor.pusher_channel_token,
											channel_name);

							// Initialize
							ClickDesk_Widget_Pusher_Channel_Obj = new Pusher(
									ClickDesk_Widget_Pusher_Visitor.k,
									ClickDesk_Widget_Pusher_Visitor
											.optional_metrics());

							// Subscribe
							ClickDesk_Widget_Pusher_Channel_Obj_Channel = ClickDesk_Widget_Pusher_Channel_Obj
									.subscribe(channel_name);
							ClickDesk_Widget_Pusher_Channel_Obj_Channel
									.bind(
											"pusher:subscription_succeeded",
											function(members) {

												if (callback
														&& !ClickDesk_Widget_Pusher_Visitor.is_pusher_channel_initiated)
													callback(channel_name);

												// To prevent callback execute
												// only for one time
												ClickDesk_Widget_Pusher_Visitor.is_pusher_channel_initiated = true;

											});

							ClickDesk_Widget_Pusher_Channel_Obj_Channel.bind(
									'message-client-event', function(data) {
										clickdesk_log(data);
										data = JSON.parse(data);
										ClickDesk_Channel_Message_Listener
												.listen(data);

									});

						});

	},

	subscribe : function(callback) {
		console.log("1111111111111111111111111111111");

		console.log("this.is_allowed_domain() in subscribe() pusher.js");
		console.log(this.is_allowed_domain());

		// Allow only to support panel
		if (!this.is_allowed_domain())
			return;

		/**
		 * Check widgetprefs and status. Do not connect to the pubnub even agent
		 * is in offline or agent is not in webchat panel(This available in
		 * widget prefs)
		 */
		if (!widgetPrefsJSON || widgetPrefsJSON.status == "offline")
			return;

		if (!widgetPrefsJSON.webchat_status || !widgetPrefsJSON.userid)
			return;
		
			//TODO SOumya Commented below one  
		// User shortner id with uuid as channel name
		// var channel_name = widgetPrefsJSON.userid + "-"
		// 		+ ClickDesk_Widget_Pusher_Visitor.get_visitor_unique_token();

		var channel_name = widgetPrefsJSON.domain_id + "-" + widgetPrefsJSON.created_by;
		console.log("channel_name");
		console.log(channel_name);
		// Subscribe to pusher
		if (ClickDesk_Widget_Pusher_Obj
				&& ClickDesk_Widget_Pusher_Obj.channels.channels[channel_name]) {
			if (callback && typeof callback == "function")
				callback("chat_session_initiated");
			return;
		}

		head
				.js(
						ClickDesk_Widget_Pusher_Visitor.cloud_file,
						function() {

							// Initialize
							if (!ClickDesk_Widget_Pusher_Obj) {
								ClickDesk_Widget_Pusher_Obj = new Pusher(
										ClickDesk_Widget_Pusher_Visitor.k,
										ClickDesk_Widget_Pusher_Visitor
												.optional_metrics());
							};

							console.log("ClickDesk_Widget_Pusher_Obj in subscribe method..");
							console.log(ClickDesk_Widget_Pusher_Obj);

							var channels = ClickDesk_Widget_Pusher_Obj.channels;

							if (callback && callback == "popout") {
							} else {

								if (widgetPrefsJSON.webchat_status && channels
										&& !channels.channels[channel_name]) {

									// Subscribe
									pusher_channel = ClickDesk_Widget_Pusher_Obj
											.subscribe(channel_name);
									pusher_channel
											.bind(
													"pusher:subscription_succeeded",
													function(members) {
														// Send info to
														// ClickDesk track
														// server to store
														console.log(members);
														console.log("subscribed pusher:subscription_succeeded");
														var json = ClickDesk_Widget_Pusher_Visitor
																.client_options();
														json.command = "WEB_VISITOR";
														json.channel_name = channel_name;

														ClickDesk_JSONP
																.send_request(
																		ClickDesk_Widget_Pusher_Visitor.server_url,
																		json,
																		function(response) {
																		});

													});

									pusher_channel.bind('client-event',
											function(data) {
												console.log("data in subsribe..");
												console.log(data);
												data = JSON.parse(data);

												/* ClickDesk_Channel_Message_Listener
												.listen(data); */
												ClickDesk_Widget_Pusher_Visitor
														.inbound(data);
											})
								}
							}

							// User channel for real time status change updates
							var real_time_status_update_channel_name = widgetPrefsJSON.userid
									+ "-"
									+ ClickDesk_Widget_Pusher_Visitor
											.get_visitor_unique_token()
									+ "-cd_widget-"
									+ ClickDesk_Widget_Util.widget_id;

							if (!channels.channels[real_time_status_update_channel_name]) {

								/*
								 * // Subscribe status_update_pusher_channel =
								 * ClickDesk_Widget_Pusher_Obj
								 * .subscribe(real_time_status_update_channel_name);
								 * 
								 * status_update_pusher_channel.bind(
								 * 'client-event', function(data) {
								 * ClickDesk_Widget_Pusher_Visitor
								 * .inbound(data); });
								 */
							}

							if (callback && typeof callback == "function")
								callback("chat_session_initiated");

						});

	},

	unsubscribe : function() {
	},

	push_message : function(message_type, messageJSON) {

		if (!message_type)
			return;

		// Construct Message JSON
		var json = (messageJSON) ? messageJSON : {};
		json.chat_type = message_type;
		json.widget_id = ClickDesk_Widget_Util.widget_id;

		// Get visitor session cookie to avoid duplicates
		json.visitorId = this.get_visitor_unique_token();

		var url = "/rest/visitor/pubnub/broadcast";
		if (message_type == "screenshot_attachment") {
			delete json.widget_id;
			url = "/rest/visitor/pubnub/screenshot_attachment";
		} else if (message_type == "screenshot_attachment_ackment") {
			url = "/rest/visitor/pubnub/screenshot_attachment_ackment";
		}

		// Send clickdesk to broadcast to agents
		ClickDesk_JSONP.send_request("http://localhost:3000" + url, json,
				function(response) {
					clickdesk_log("Pubnub " + response);
				});

	},

	inbound : function(message) {

		ClickDesk_Pusher_Message.handle(message);

	},

};/**
 * Shopify plugin
 */
var ClickDesk_Shopify = {

	clickdesk_shopify_cookie : "cd_shopify",
	is_site_belongs_to_shopify : function() {
		try {
			return Shopify;
		} catch (e) {
			clickdesk_log(e);
		}
		return false;
	},
	get_current_cart_ : function(force_send) {

		// Check shopify in the site
		if (!this.is_site_belongs_to_shopify())
			return;

		try {
			// Get cart info
			Shopify.getCart(function(cart) {
				ClickDesk_Shopify.send_cart_info_to_agent(cart, force_send);
			});
		} catch (e) {
		}

	},
	send_cart_info_to_agent : function(cart, force_send) {

		if (!cart)
			return;

		// Get ClickDesk session
		var sessionJSON = ClickDesk_Widget_Session.get_active_session();
		if (!sessionJSON)
			return;

		// Get total value from cart
		var total_price = cart.total_price;

		var old_customer = false;

		// Get stored total value
		var prev_price = ClickDesk_Storage
				.get_prefs(ClickDesk_Shopify.clickdesk_shopify_cookie);
		if (prev_price == total_price && !force_send)
			return;

		if (!prev_price)
			prev_price = 0;
		else
			old_customer = true;

		// Set latest price
		ClickDesk_Storage.set_prefs(ClickDesk_Shopify.clickdesk_shopify_cookie,
				total_price);

		var items = [];
		var item_count = cart.item_count;
		if (item_count > 0) {
			for ( var i = 0; i < cart.items.length; i++) {
				var item = cart.items[i];
				items.push({
					"title" : item.title,
					"price" : item.price,
					"quantity" : item.quantity
				});
			}
		}

		// Send to agent
		var json = {};
		json.total_price = total_price + "";
		json.prev_price = prev_price + "";
		json.items = JSON.stringify(items);
		json.widget_id = ClickDesk_Widget_Util.widget_id;
		json.visitorId = ClickDesk_Widget_Pusher_Visitor.get_visitor_unique_token();
		json.sessionId = sessionJSON.session_id;
		if (old_customer)
			json.old_customer = old_customer + "";

		// Send info to agents
		ClickDesk_JSONP.send_request(CLICKDESK_SERVER_PATH
				+ "/rest/visitor/pubnub/shopify_plugin", json, function(
				response) {
			clickdesk_log("Response " + response);

		});

	}

};var BrowserDetect = {
	init : function() {
		this.browser = this.searchString(this.dataBrowser)
				|| "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
				|| this.searchVersion(navigator.appVersion)
				|| this.searchMobileVersion(navigator.userAgent)
				|| "An unknown version";
		this.OS = this.searchString(this.dataOS) || "unknown";
	},
	searchString : function(data) {
		for ( var i = 0; i < data.length; i++) {
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			var match = data[i].match;
			this.versionSearchString = data[i].versionSearch
					|| data[i].identity;

			if (match && dataString.match(match))
				return data[i].identity;

			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			} else if (dataProp)
				return data[i].identity;
		}
	},
	searchMobileVersion : function(dataString) {

		try {
			match = dataString.match(/Mobile Safari\/([\d.]+)/);
			if (match)
				return parseFloat(match[1]);
		} catch (e) {
		}

	},
	searchVersion : function(dataString) {

		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1)
			return;
		return parseFloat(dataString.substring(index
				+ this.versionSearchString.length + 1));
	},
	dataBrowser : [ {
		string : navigator.userAgent,
		subString : "Chrome",
		identity : "Chrome"
	}, {
		string : navigator.userAgent,
		subString : "OmniWeb",
		versionSearch : "OmniWeb/",
		identity : "OmniWeb"
	}, {
		string : navigator.vendor,
		subString : "Apple",
		identity : "Safari",
		versionSearch : "Version"
	}, {
		prop : window.opera,
		identity : "Opera"
	}, {
		string : navigator.vendor,
		subString : "iCab",
		identity : "iCab"
	}, {
		string : navigator.vendor,
		subString : "KDE",
		identity : "Konqueror"
	}, {
		string : navigator.userAgent,
		subString : "Firefox",
		identity : "Firefox"
	}, {
		string : navigator.vendor,
		subString : "Camino",
		identity : "Camino"
	}, { // for newer Netscapes (6+)
		string : navigator.userAgent,
		subString : "Netscape",
		identity : "Netscape"
	}, {
		// For IE11
		string : navigator.userAgent,
		match : /Trident.*rv[ :]*11\./,
		identity : "Explorer"
	}, {
		string : navigator.userAgent,
		subString : "MSIE",
		identity : "Explorer",
	}, {
		string : navigator.userAgent,
		match : /Mobile Safari\/([\d.]+)/,
		identity : "Mobile Safari",
		versionSearch : "/AppleWebKit\/([\d.]+)/",
	}, {
		string : navigator.userAgent,
		subString : "Gecko",
		identity : "Mozilla",
		versionSearch : "rv"
	}, { // for older Netscapes (4-)
		string : navigator.userAgent,
		subString : "Mozilla",
		identity : "Netscape",
		versionSearch : "Mozilla"
	} ],
	dataOS : [ {
		string : navigator.platform,
		subString : "Win",
		identity : "Windows"
	}, {
		string : navigator.platform,
		subString : "Mac",
		identity : "Mac"
	}, {
		string : navigator.userAgent,
		match : /Android\s([0-9\.]*)/,
		subString : "Android",
		identity : "Android"
	}, {
		string : navigator.userAgent,
		subString : "iPhone",
		identity : "iPhone/iPod"
	}, {
		string : navigator.platform,
		subString : "Linux",
		identity : "Linux"
	}

	]

};
BrowserDetect.init();
/*
 * Copyright (c) Copyright (c) 2007, Carl S. Yestrau All rights reserved. Code
 * licensed under the BSD License: http://www.featureblend.com/license.txt
 * Version: 1.0.4
 */
var FlashDetect = new function() {
	var self = this;
	self.installed = false;
	self.raw = "";
	self.major = -1;
	self.minor = -1;
	self.revision = -1;
	self.revisionStr = "";
	var activeXDetectRules = [ {
		"name" : "ShockwaveFlash.ShockwaveFlash.7",
		"version" : function(obj) {
			return getActiveXVersion(obj);
		}
	}, {
		"name" : "ShockwaveFlash.ShockwaveFlash.6",
		"version" : function(obj) {
			var version = "6,0,21";
			try {
				obj.AllowScriptAccess = "always";
				version = getActiveXVersion(obj);
			} catch (err) {
			}
			return version;
		}
	}, {
		"name" : "ShockwaveFlash.ShockwaveFlash",
		"version" : function(obj) {
			return getActiveXVersion(obj);
		}
	} ];
	/**
	 * Extract the ActiveX version of the plugin.
	 * 
	 * @param {Object}
	 *            The flash ActiveX object.
	 * @type String
	 */
	var getActiveXVersion = function(activeXObj) {
		var version = -1;
		try {
			version = activeXObj.GetVariable("$version");
		} catch (err) {
		}
		return version;
	};
	/**
	 * Try and retrieve an ActiveX object having a specified name.
	 * 
	 * @param {String}
	 *            name The ActiveX object name lookup.
	 * @return One of ActiveX object or a simple object having an attribute of
	 *         activeXError with a value of true.
	 * @type Object
	 */
	var getActiveXObject = function(name) {
		var obj = -1;
		try {
			obj = new ActiveXObject(name);
		} catch (err) {
			obj = {
				activeXError : true
			};
		}
		return obj;
	};
	/**
	 * Parse an ActiveX $version string into an object.
	 * 
	 * @param {String}
	 *            str The ActiveX Object GetVariable($version) return value.
	 * @return An object having raw, major, minor, revision and revisionStr
	 *         attributes.
	 * @type Object
	 */
	var parseActiveXVersion = function(str) {
		var versionArray = str.split(",");// replace with regex
		return {
			"raw" : str,
			"major" : parseInt(versionArray[0].split(" ")[1], 10),
			"minor" : parseInt(versionArray[1], 10),
			"revision" : parseInt(versionArray[2], 10),
			"revisionStr" : versionArray[2]
		};
	};
	/**
	 * Parse a standard enabledPlugin.description into an object.
	 * 
	 * @param {String}
	 *            str The enabledPlugin.description value.
	 * @return An object having raw, major, minor, revision and revisionStr
	 *         attributes.
	 * @type Object
	 */
	var parseStandardVersion = function(str) {
		var descParts = str.split(/ +/);
		var majorMinor = descParts[2].split(/\./);
		var revisionStr = descParts[3];
		return {
			"raw" : str,
			"major" : parseInt(majorMinor[0], 10),
			"minor" : parseInt(majorMinor[1], 10),
			"revisionStr" : revisionStr,
			"revision" : parseRevisionStrToInt(revisionStr)
		};
	};
	/**
	 * Parse the plugin revision string into an integer.
	 * 
	 * @param {String}
	 *            The revision in string format.
	 * @type Number
	 */
	var parseRevisionStrToInt = function(str) {
		return parseInt(str.replace(/[a-zA-Z]/g, ""), 10) || self.revision;
	};
	/**
	 * Is the major version greater than or equal to a specified version.
	 * 
	 * @param {Number}
	 *            version The minimum required major version.
	 * @type Boolean
	 */
	self.majorAtLeast = function(version) {
		return self.major >= version;
	};
	/**
	 * Is the minor version greater than or equal to a specified version.
	 * 
	 * @param {Number}
	 *            version The minimum required minor version.
	 * @type Boolean
	 */
	self.minorAtLeast = function(version) {
		return self.minor >= version;
	};
	/**
	 * Is the revision version greater than or equal to a specified version.
	 * 
	 * @param {Number}
	 *            version The minimum required revision version.
	 * @type Boolean
	 */
	self.revisionAtLeast = function(version) {
		return self.revision >= version;
	};
	/**
	 * Is the version greater than or equal to a specified major, minor and
	 * revision.
	 * 
	 * @param {Number}
	 *            major The minimum required major version.
	 * @param {Number}
	 *            (Optional) minor The minimum required minor version.
	 * @param {Number}
	 *            (Optional) revision The minimum required revision version.
	 * @type Boolean
	 */
	self.versionAtLeast = function(major) {
		var properties = [ self.major, self.minor, self.revision ];
		var len = Math.min(properties.length, arguments.length);
		for (i = 0; i < len; i++) {
			if (properties[i] >= arguments[i]) {
				if (i + 1 < len && properties[i] == arguments[i]) {
					continue;
				} else {
					return true;
				}
			} else {
				return false;
			}
		}
	};
	/**
	 * Constructor, sets raw, major, minor, revisionStr, revision and installed
	 * public properties.
	 */
	self.FlashDetect = function() {
		if (navigator.plugins && navigator.plugins.length > 0) {
			var type = 'application/x-shockwave-flash';
			var mimeTypes = navigator.mimeTypes;
			if (mimeTypes && mimeTypes[type] && mimeTypes[type].enabledPlugin
					&& mimeTypes[type].enabledPlugin.description) {
				var version = mimeTypes[type].enabledPlugin.description;
				var versionObj = parseStandardVersion(version);
				self.raw = versionObj.raw;
				self.major = versionObj.major;
				self.minor = versionObj.minor;
				self.revisionStr = versionObj.revisionStr;
				self.revision = versionObj.revision;
				self.installed = true;
			}
		} else if (navigator.appVersion.indexOf("Mac") == -1
				&& window.execScript) {
			var version = -1;
			for ( var i = 0; i < activeXDetectRules.length && version == -1; i++) {
				var obj = getActiveXObject(activeXDetectRules[i].name);
				if (!obj.activeXError) {
					self.installed = true;
					version = activeXDetectRules[i].version(obj);
					if (version != -1) {
						var versionObj = parseActiveXVersion(version);
						self.raw = versionObj.raw;
						self.major = versionObj.major;
						self.minor = versionObj.minor;
						self.revision = versionObj.revision;
						self.revisionStr = versionObj.revisionStr;
					}
				}
			}
		}
	}();
};
FlashDetect.JS_RELEASE = "1.0.4";(function() {
  var template = Handlebars.template, templates = ClickDeskHandlebars.templates = ClickDeskHandlebars.templates || {};
templates['clickdesk-agent-typing-entry'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program3(depth0,data) {
  
  
  return "is typing...";
  }

  buffer += "<div class=\"";
  if (helper = helpers.agent_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.agent_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"margin:10px 0px 10px 0px !important;text-align:center!important;word-break: break-word !important;\"><span style=\"color: #aaa !important;font-size: 11px !important;text-transform:capitalize !important;padding-left:15px!important;background:url(https://d1gwclp1pmzk26.cloudfront.net/clickdesk-ui/browser/img/typing.png) no-repeat left center;\">";
  if (helper = helpers.agent_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.agent_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span><span style=\"color: #aaa !important;font-size: 11px !important;\"> ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.message), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></div>\n";
  return buffer;
  });
templates['clickdesk-chat-session'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "<div style=\"display: table-cell;position: relative;\"><div style=\"display: table;height: 100%;width: 100%;\"><div style=\"display: table-row;\">";
  }

function program3(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.VEDIOCHAT_ICON_TITLE), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program4(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.VEDIOCHAT_ICON_TITLE) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.VEDIOCHAT_ICON_TITLE); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program6(depth0,data) {
  
  
  return "Video Chat";
  }

function program8(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.VOICECHAT_ICON_TITLE), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program9(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.VOICECHAT_ICON_TITLE) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.VOICECHAT_ICON_TITLE); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program11(depth0,data) {
  
  
  return "Voice Chat";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n               <a  id=\"click-desk-options\" class=\"cdw-chat-bottom-link\" onclick=\"return false;\" title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.customvalidationmssgs_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.customstatusmssgs_chat_window_more_option_label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n                   "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.customvalidationmssgs_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.customstatusmssgs_chat_window_more_option_label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n               </a>\n               ";
  return buffer;
  }

function program15(depth0,data) {
  
  
  return "\n               </br>\n              ";
  }

function program17(depth0,data) {
  
  
  return "</div>";
  }

function program19(depth0,data) {
  
  
  return " style=\"display: table-row!important;position: relative !important;\"";
  }

function program21(depth0,data) {
  
  
  return "\n                 <div style=\"display: block;font-weight: normal !important;height: 100%;position: relative !important;display: table-cell;\">\n                 <div style=\"bottom: 0;height: 100%;position: relative !important;right: 0;\">\n                  <div class=\"cdw-chat-body\" id=\"clickdesk_session\" style=\"border-bottom: 1px solid #C8C8C8 !important;display: block;height: 100%;left: 0;overflow: auto;position: absolute;right: 0;visibility: visible;\"></div>\n                 </div></div>\n           ";
  }

function program23(depth0,data) {
  
  
  return "\n             <div class=\"cdw-chat-body\" id=\"clickdesk_session\"></div>\n           ";
  }

function program25(depth0,data) {
  
  
  return "<div style=\"display: table-row!important;height: 60px;\">";
  }

function program27(depth0,data) {
  
  
  return "style=\"padding: 5px 10px 0 !important;\"";
  }

function program29(depth0,data) {
  
  
  return "style=\"display:block\"";
  }

function program31(depth0,data) {
  
  
  return " ";
  }

function program33(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <textarea placeholder=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.online_form_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.prechat_form_message_label), {hash:{},inverse:self.program(36, program36, data),fn:self.program(34, program34, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" class=\"cdw-chat-form-text\" id=\"broadcastchat\" name=\"broadcastchat\" maxlength=\"200\"/></textarea>\n                <input id=\"broadcastchatsend\" type=\"submit\" value=\"Send\" style=\"display:none!important;\" />\n                ";
  return buffer;
  }
function program34(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.online_form_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.prechat_form_message_label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program36(depth0,data) {
  
  
  return "Enter message";
  }

function program38(depth0,data) {
  
  
  return "style=\"text-align: right;padding: 3px;position: relative !important;top: -5px !important;right: 2px !important;\"";
  }

function program40(depth0,data) {
  
  
  return "-block";
  }

function program42(depth0,data) {
  
  
  return "<a  class=\"clickdesk-misc clickdesk-icon\" onclick=\"return false;\" style=\"vertical-align: middle!important;\"></a>";
  }

function program44(depth0,data) {
  
  
  return "<a  id=\"cd_smile\" class=\"clickdesk-misc sprite-icons-icon-smiley\" onclick=\"return false;\" style=\"vertical-align: middle!important;\"></a>";
  }

function program46(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<textarea placeholder=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.online_form_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.prechat_form_message_label), {hash:{},inverse:self.program(36, program36, data),fn:self.program(34, program34, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" class=\"cdw-chat-form-text\" id=\"broadcastchat\" name=\"broadcastchat\" maxlength=\"200\"/></textarea>\n				<input class=\"cdw-chat-contact-send-button cd-mobile\" id=\"broadcastchatsend\" type=\"submit\" value=\"\" style=\"width: 22px!important;height: 22px;padding: 0px!important;position: absolute;right: 15px;bottom: 15px;background-image: url(https://d1gwclp1pmzk26.cloudfront.net/clickdesk-ui/browser/images/send-msg.png) !important;\n					background-repeat: no-repeat !important;background-position: center !important;border-radius: 50% !important;\">\n                ";
  return buffer;
  }

function program48(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        	<a  id=\"clickdesk_mobile_close_chat\" class=\"cdw-chat-popup-option\" title=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.system_message_prefs), {hash:{},inverse:self.program(52, program52, data),fn:self.program(49, program49, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.system_message_prefs), {hash:{},inverse:self.program(52, program52, data),fn:self.program(49, program49, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n                        ";
  return buffer;
  }
function program49(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.system_message_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.CLOSE_ICON_TITLE), {hash:{},inverse:self.program(52, program52, data),fn:self.program(50, program50, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program50(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.system_message_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.CLOSE_ICON_TITLE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program52(depth0,data) {
  
  
  return "Close";
  }

function program54(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n           <div class=\"cd-info-popup\">\n	         <div id=\"clickdesk_proactive_visitor_details_window\" class=\"cdw-chat-popup\" style=\"display:none\">\n	            <div class=\"cdw-chat-popup-faded\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.proactive_visitor_info_form_header), {hash:{},inverse:self.program(57, program57, data),fn:self.program(55, program55, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n				<div class=\"cdw-chat-popup-text\">\n					<input type=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prechat_namefield_emailvstext_label), {hash:{},inverse:self.program(61, program61, data),fn:self.program(59, program59, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" placeholder=\"";
  if (helper = helpers.prechat_form_name_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_form_name_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(31, program31, data),fn:self.program(63, program63, data),data:data},helper ? helper.call(depth0, "prechat_form_name_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_name_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"cd_proactive_visitor_name\" class=\"cdw-chat-popup-form-text\" maxlength=\"50\" ";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(31, program31, data),fn:self.program(65, program65, data),data:data},helper ? helper.call(depth0, "prechat_form_name_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_name_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ref_cookie_name=\"visitor_name\"\n						style=\"width: 100%;box-sizing: border-box;\"/>\n				</div>\n				<div class=\"cdw-chat-popup-text\">\n					<input type=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prechat_emailvstext_label), {hash:{},inverse:self.program(69, program69, data),fn:self.program(67, program67, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" placeholder=\"";
  if (helper = helpers.prechat_form_email_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_form_email_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(31, program31, data),fn:self.program(63, program63, data),data:data},helper ? helper.call(depth0, "prechat_form_email_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_email_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" class=\"cdw-chat-popup-form-text\" id=\"cd_proactive_visitor_email\"  maxlength=\"50\" ";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(31, program31, data),fn:self.program(65, program65, data),data:data},helper ? helper.call(depth0, "prechat_form_email_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_email_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ref_cookie_name=\"visitor_email\"\n						style=\"width: 100%;box-sizing: border-box;\"/>\n				</div>\n				";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.noop,fn:self.program(71, program71, data),data:data},helper ? helper.call(depth0, "prechat_form_show_custom_field_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_show_custom_field_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n           ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prechat_form_gdpr_label), {hash:{},inverse:self.noop,fn:self.program(73, program73, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n				<div class=\"cdw-chat-popup-error\" id=\"cd_proactive_visitor_error\"></div>\n				<div class=\"cdw-chat-popup-text\">\n					<input type=\"submit\" value=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.proactive_visitor_info_form_save_text), {hash:{},inverse:self.program(77, program77, data),fn:self.program(75, program75, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"cd_proactive_visitor_info_save\" class=\"cdw-chat-popup-form-button\"> \n					<input type=\"submit\" id=\"cd_proactive_visitor_info_cancel\" class=\"cdw-chat-popup-form-button cd-cancel\" onclick=\"return false;\" value=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.proactive_visitor_info_form_cancel_text), {hash:{},inverse:self.program(81, program81, data),fn:self.program(79, program79, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n				</div>	    \n	         </div>\n	       </div>\n	     ";
  return buffer;
  }
function program55(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.proactive_visitor_info_form_header) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.proactive_visitor_info_form_header); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program57(depth0,data) {
  
  
  return "Please provide contact details for better assistance";
  }

function program59(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.prechat_namefield_emailvstext_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_namefield_emailvstext_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program61(depth0,data) {
  
  
  return "text";
  }

function program63(depth0,data) {
  
  
  return " *";
  }

function program65(depth0,data) {
  
  
  return "required=\"required\"";
  }

function program67(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.prechat_emailvstext_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_emailvstext_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program69(depth0,data) {
  
  
  return "email";
  }

function program71(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n		            <div class=\"cdw-chat-popup-text\">\n		               <input type=\"";
  if (helper = helpers.prechat_customfield_emailvstext_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_customfield_emailvstext_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"";
  if (helper = helpers.prechat_custom_field_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_custom_field_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(31, program31, data),fn:self.program(63, program63, data),data:data},helper ? helper.call(depth0, "prechat_form_custom_field_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_custom_field_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"cd_proactive_visitor_custom\" class=\"cdw-chat-popup-form-text\" maxlength=\"50\" ";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(31, program31, data),fn:self.program(65, program65, data),data:data},helper ? helper.call(depth0, "prechat_form_custom_field_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_custom_field_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ref_cookie_name=\"custom_field\"\n		                style=\"width: 100%;box-sizing: border-box;\"/>\n		            </div>\n		       ";
  return buffer;
  }

function program73(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <div class=\"cd-field-label\" style=\"position: relative;box-sizing: border-box;margin-bottom: 5px!important;\">\n      <label style=\"padding: 5px 20px;cursor: pointer;font-size: 10.6px!important;border-radius: 1px!important;line-height: 1.3!important;display: inline-block;\">\n      <input type=\"checkbox\" id=\"cd_custom_checkbox_chatbox\" style=\"position: absolute;left: 3px;top: 7px;\" rel=\"";
  if (helper = helpers.prechat_form_gdpr_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_form_gdpr_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"";
  if (helper = helpers.prechat_form_gdpr_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_form_gdpr_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ref_cookie_name=\"visitor_gdpr\"/>\n      <a target=\"_blank\" href=\"";
  if (helper = helpers.prechat_form_gdpr_href_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_form_gdpr_href_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"font-size: 10px!important;\">";
  if (helper = helpers.prechat_form_gdpr_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_form_gdpr_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n      </label>\n      </div>\n      ";
  return buffer;
  }

function program75(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.proactive_visitor_info_form_save_text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.proactive_visitor_info_form_save_text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program77(depth0,data) {
  
  
  return "Save";
  }

function program79(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.proactive_visitor_info_form_cancel_text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.proactive_visitor_info_form_cancel_text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program81(depth0,data) {
  
  
  return "Cancel";
  }

function program83(depth0,data) {
  
  
  return "</div></div>";
  }

function program85(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += escapeExpression((helper = helpers.add_cd_styles || (depth0 && depth0.add_cd_styles),options={hash:{},data:data},helper ? helper.call(depth0, ".clickdesk-ultra .clickdesk-option a{white-space: nowrap;overflow: hidden;text-overflow: ellipsis;padding-bottom:5px !important;}.clickdesk-ultra .cd-chat-content a.cdw-chat-popup-option{width: 11em !important;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;padding-right: 43px !important;}.clickdesk-ultra input.cdw-chat-contact-send-button, .clickdesk-ultra input.cdw-chat-contact-send-button:hover{-webkit-box-sizing: border-box !important;-moz-box-sizing: border-box !important;box-sizing: border-box!important;}", options) : helperMissing.call(depth0, "add_cd_styles", ".clickdesk-ultra .clickdesk-option a{white-space: nowrap;overflow: hidden;text-overflow: ellipsis;padding-bottom:5px !important;}.clickdesk-ultra .cd-chat-content a.cdw-chat-popup-option{width: 11em !important;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;padding-right: 43px !important;}.clickdesk-ultra input.cdw-chat-contact-send-button, .clickdesk-ultra input.cdw-chat-contact-send-button:hover{-webkit-box-sizing: border-box !important;-moz-box-sizing: border-box !important;box-sizing: border-box!important;}", options)))
    + " ";
  return buffer;
  }

  buffer += "<div id=\"clickdesk_chat_session\" class=\"cd-chat-content\" style=\"display:none;position:relative !important;\">\n         \n     ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <div class=\"clickdesk-calling-option\">\n           <ul>\n             <li style=\"display: none;\" id=\"clickdesk_video_call\"><a  class=\"cdw-video-call\" title=\"";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.system_message_prefs), {hash:{},inverse:self.program(6, program6, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" onclick=\"return false;\" style=\"background-position: -29px -4px !important;\"></a></li>\n             <li style=\"display: none\" id=\"clickdesk_audio_call\"><a  class=\"cdw-audio-call\" title=\"";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.system_message_prefs), {hash:{},inverse:self.program(11, program11, data),fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" onclick=\"return false;\"></a></li>\n           </ul>\n           \n           \n           <div class=\"clickdesk-option\">\n             ";
  options={hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data}
  if (helper = helpers.cd_is_customer_enabled) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.cd_is_customer_enabled); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.cd_is_customer_enabled) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n           </div>\n           \n       </div>\n       <div id=\"cd_valid_session_for_audio_video\" class=\"cdw-av-errordiv\" style=\"display:none;\"></div>\n       ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n        \n        <div id=\"clickdesk_chat_messages\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        \n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.noop,fn:self.program(25, program25, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <div class=\"cdw-chat-form\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.mobile_browser), {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n			<form onsubmit=\"return ClickDesk_Message_Util.submit_chat_form();\" id=\"cdChatSendForm\" name=\"broadcastchatForm\" ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.noop,fn:self.program(29, program29, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n			    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.mobile_browser), {hash:{},inverse:self.program(33, program33, data),fn:self.program(31, program31, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                \n               \n                <div class=\"clickdesk-chat-mislanious-controls\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.mobile_browser), {hash:{},inverse:self.noop,fn:self.program(38, program38, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n							<div style=\"position:relative !important;display: inline";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.mobile_browser), {hash:{},inverse:self.program(40, program40, data),fn:self.program(31, program31, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "!important;\" onmouseover=\"ClickDesk_DOM.set_style_by_id('cd_user_rating', {'display':'block'});\" onmouseout=\"ClickDesk_DOM.set_style_by_id('cd_user_rating', {'display' :'none'});\"> \n                             ";
  options={hash:{},inverse:self.noop,fn:self.program(42, program42, data),data:data}
  if (helper = helpers.cd_is_customer_enabled) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.cd_is_customer_enabled); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.cd_is_customer_enabled) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(42, program42, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                            <a id=\"cd_rating\"  onclick=\"return false;\" style=\"display: none!important;\">0</a>\n								<div id=\"cd_user_rating\" style=\"z-index: 100 !important;min-width: 19px !important;right: 5px !important;top: -100px !important;display:none;\">  \n									<ul style=\"margin: 5px!important;\">                            \n										<li><a  rel=\"5\" class=\"sprite-icons-star\" onclick=\"return false;\"></a></li>                            \n										<li><a  rel=\"4\" class=\"sprite-icons-star\" onclick=\"return false;\"></a></li>                            \n										<li><a  rel=\"3\" class=\"cd-undone sprite-icons-star-half\" onclick=\"return false;\"></a></li>                            \n										<li><a  rel=\"2\" class=\"cd-undone sprite-icons-star-half\" onclick=\"return false;\"></a></li>                            \n										<li><a  rel=\"1\" class=\"cd-undone sprite-icons-star-half\" onclick=\"return false;\"></a></li>                        \n									</ul>                    \n								</div>\n							</div>\n                            <div style=\"position:relative !important;display: inline";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.mobile_browser), {hash:{},inverse:self.program(40, program40, data),fn:self.program(31, program31, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "!important;\" class=\"clickdesk-smile-option\" onmouseover=\"ClickDesk_DOM.set_style_by_id('clickdesk_smilediv', {'display':'block'});\" onmouseout=\"ClickDesk_DOM.set_style_by_id('clickdesk_smilediv', {'display':'none'});\">\n							 ";
  options={hash:{},inverse:self.noop,fn:self.program(44, program44, data),data:data}
  if (helper = helpers.cd_is_customer_enabled) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.cd_is_customer_enabled); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.cd_is_customer_enabled) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(44, program44, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                            <div id=\"clickdesk_smilediv\" class=\"clickdesk-smile-option-container\" style=\"z-index: 100 !important;min-width: 120px !important;right: 0px!important;top: -135px!important;\">\n	        						<div>\n	            						<span class=\"cd-smiley-container cd-Smile\"></span><span class=\"cd-smiley-container cd-Laugh\"></span><span class=\"cd-smiley-container cd-Cool\"></span><span class=\"cd-smiley-container cd-Counter\"></span>\n	            						<span class=\"cd-smiley-container cd-Wink\"></span><span class=\"cd-smiley-container cd-Cheeky\"></span><span class=\"cd-smiley-container cd-Sweating\"></span><span class=\"cd-smiley-container cd-Crying\"></span>\n	            						<span class=\"cd-smiley-container cd-Angry\"></span><span class=\"cd-smiley-container cd-Giggle\"></span><span class=\"cd-smiley-container cd-Allforyou\"></span><span class=\"cd-smiley-container cd-Hmm\"></span>\n	            						<span class=\"cd-smiley-container cd-Heart\"></span><span class=\"cd-smiley-container cd-Star\"></span><span class=\"cd-smiley-container cd-Yes\"></span><span class=\"cd-smiley-container cd-No\"></span>\n	            							<div style=\"text-align:left;border-top: 1px solid whiteSmoke;padding: 2px;height:22px;\">\n                   	 							<div id=\"cd_set_smilyName\" style=\"color:white!important;padding-left: 7px;float:left!important;\"></div>\n                     							<div id=\"cd_set_smilySymbol\" style=\"color:white!important;margin-right: 12px;float:right!important;\"></div>\n                							</div>\n	        						</div>\n	   						</div>\n\n                            </div>\n                            </div>\n                  \n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.mobile_browser), {hash:{},inverse:self.program(31, program31, data),fn:self.program(46, program46, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n			</form>\n		</div>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        \n        <div id=\"clickdesk_popout_footer_options\" class=\"cdw-chat-popup\" style=\"display: none;top:25px !important\">\n					    <a  id=\"cd_voice\" class=\"cdw-chat-popup-option sprite-icons-icon-first\" title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.customvalidationmssgs_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.customstatusmssgs_chat_window_more_option_sound_label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.customvalidationmssgs_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.customstatusmssgs_chat_window_more_option_sound_label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n                        <a  id=\"cd_send_email_to_visitor\" class=\"cdw-chat-popup-option\" onclick=\"clickdesk_toggle_element_by_id('clickdesk_popout_footer_options');return false;\" title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.customvalidationmssgs_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.customstatusmssgs_chat_window_more_option_send_transcript_label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.customvalidationmssgs_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.customstatusmssgs_chat_window_more_option_send_transcript_label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n                        <a  id=\"cd_file_upload_container\" class=\"cdw-chat-popup-option\" title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.customvalidationmssgs_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.customstatusmssgs_chat_window_more_option_send_file_label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" onclick=\"ClickDesk_DOM.fire_event(document.getElementById('cd_upload'), 'click');return false;\" style=\"\">\n								"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.customvalidationmssgs_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.customstatusmssgs_chat_window_more_option_send_file_label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n  						<input type=\"file\" multiple=\"multiple\" name=\"cd_upload\" id=\"cd_upload\" class=\"\" onchange=\"ClickDesk_File_Upload.upload_file(this);\" style=\"display: none;\"/>\n                        <img id=\"cd_file_upload_process\" src=\"\" style=\"display: none;width:18px;height:18px;position: absolute;bottom: 5px;right: 23px;\"/>\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.mobile_browser), {hash:{},inverse:self.noop,fn:self.program(48, program48, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n         </div>\n         ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.online_form_prefs), {hash:{},inverse:self.noop,fn:self.program(54, program54, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        \n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.noop,fn:self.program(83, program83, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.noop,fn:self.program(85, program85, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n"
    + escapeExpression((helper = helpers.add_cd_styles || (depth0 && depth0.add_cd_styles),options={hash:{},data:data},helper ? helper.call(depth0, ".queued .cdw-chat-body-message-welcome .cd-msg::after {content: url(https://d1gwclp1pmzk26.cloudfront.net/clickdesk-ui/browser/img/ajax-load-black.gif);float: right;}.clickdesk-ultra .queued .queued-offline{margin-top:5px;}", options) : helperMissing.call(depth0, "add_cd_styles", ".queued .cdw-chat-body-message-welcome .cd-msg::after {content: url(https://d1gwclp1pmzk26.cloudfront.net/clickdesk-ui/browser/img/ajax-load-black.gif);float: right;}.clickdesk-ultra .queued .queued-offline{margin-top:5px;}", options)))
    + "\n     \n</div>\n";
  return buffer;
  });
templates['clickdesk-container'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "bottom: 0px;position: absolute;z-index: 2147483638;margin: 0px;left: 0px;right: 0px;height: 100%;width: 100%!important;";
  }

function program3(depth0,data) {
  
  
  return "z-index:2147483638;";
  }

function program5(depth0,data) {
  
  
  return "width: 100% !important;position: relative !important;overflow-x: auto!important;";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "text-align:left!important;bottom:0px;position:fixed;z-index:2147483638;margin: 0px 10px 0px 10px;\n           ";
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.template_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.position), "bottom_left", options) : helperMissing.call(depth0, "cd_compare", ((stack1 = (depth0 && depth0.template_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.position), "bottom_left", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  }
function program8(depth0,data) {
  
  
  return "left: 0px;right: auto;";
  }

function program10(depth0,data) {
  
  
  return "left: auto;right: 0px;";
  }

  buffer += "<div id=\"clickdesk_container\" class=\"clickdesk_chat clickdesk-ultra clickdesk_cdw_j cdw\" style=\"display: none;font-family:Verdana, Geneva, sans-serif !important;\">\n   <div id=\"clickdesk_frame_container\">\n	    <div id=\"clickdeskchat_container\" style=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n		   <div id=\"clickdesk_popup\" class=\"cd-chat-inner clickdesk_b cd-chat-content cdw-chat clickdesk-";
  if (helper = helpers.cd_get_script_direction) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cd_get_script_direction); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-lang\" style=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></div>\n        </div>\n    </div>\n</div>";
  return buffer;
  });
templates['clickdesk-custom-images'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n   <img src=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.custom_images_prefs), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" style=\"cursor:pointer;border:none;\" />\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.custom_images_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.custom_online_image_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "//my.clickdesk.com/images/ss/live-";
  if (helper = helpers.status) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.status); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ".png";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        \n     ";
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.program(13, program13, data),fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.bubble_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.hide_offline), "true", options) : helperMissing.call(depth0, "cd_compare", ((stack1 = (depth0 && depth0.bubble_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.hide_offline), "true", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                 \n";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.program(11, program11, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.plan_type), "free", options) : helperMissing.call(depth0, "cd_compare", (depth0 && depth0.plan_type), "free", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n     ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n             <img src=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.custom_images_prefs), {hash:{},inverse:self.program(4, program4, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" style=\"cursor:pointer;border:none;\" />\n          ";
  return buffer;
  }
function program9(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.custom_images_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.custom_offline_image_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program11(depth0,data) {
  
  
  return "\n                      \n          ";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n         <img src=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.custom_images_prefs), {hash:{},inverse:self.program(4, program4, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" style=\"cursor:pointer;border:none;\" />\n     ";
  return buffer;
  }

  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "online", options) : helperMissing.call(depth0, "cd_compare", (depth0 && depth0.status), "online", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['clickdesk-email-to-visitor'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n             <div class=\"cdw-chat-contact-text\" style=\"margin-bottom:15px !important;\">";
  if (helper = helpers.emailtovisitor_form_status_message_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.emailtovisitor_form_status_message_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n             <div class=\"cdw-chat-contact-text\">\n                <input type=\"text\" placeholder=\"";
  if (helper = helpers.emailtovisitor_form_name_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.emailtovisitor_form_name_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\"cd-sendEmailToVistorName\" class=\"cdw-chat-contact-form-text\" maxlength=\"50\"  ref_cookie_name=\"visitor_name\"/>\n			 </div>\n             <div class=\"cdw-chat-contact-text\">\n                <input type=\"email\" placeholder=\"";
  if (helper = helpers.emailtovisitor_form_email_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.emailtovisitor_form_email_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " *\" id=\"cd-sendEmailToVistorEmail\" class=\"cdw-chat-contact-form-text\" required=\"required\" maxlength=\"50\" ref_cookie_name=\"visitor_email\"/>\n			 </div>      \n   \n             <div style=\"min-height:10px !important;\">\n             <div class=\"cdw-chat-popup-error\" id=\"cd_emailToVistitor_status\"></div>\n             </div>\n              \n             <div class=\"cdw-chat-contact-text\" style=\"text-align:left!important;\">\n                  <input type=\"submit\" id=\"emailChatTsToVisitor_submit\" class=\"cdw-chat-popup-form-button\" value=\"";
  if (helper = helpers.emailtovisitor_form_send_button_text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.emailtovisitor_form_send_button_text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"box-shadow: none!important;\"/>\n                  or\n                  <a id=\"cd_emailToVistitor_acl\" class=\"cdw-chat-popup-link\" onclick=\"return false;\">";
  if (helper = helpers.emailtovisitor_form_cancel_button_text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.emailtovisitor_form_cancel_button_text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n             </div>\n         ";
  return buffer;
  }

  buffer += "<div class=\"cd-form-sec\" id=\"emailChatToVisitorForm\" style=\"display:none;\">\n    <div class=\"cdw-chat-contact\" style=\"height:auto !important;padding-bottom:4px !important;\">\n        ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.emailtovisitor_form_prefs), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          \n     </div>\n</div>\n";
  return buffer;
  });
templates['clickdesk-footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "style=\"margin-bottom: 10px;\"";
  }

function program3(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.CHAT_ICON_TITLE), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program4(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.CHAT_ICON_TITLE) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.CHAT_ICON_TITLE); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program6(depth0,data) {
  
  
  return "Chat";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<a  id=\"cd_helpdesk\" class=\"cdw-help-desk\" title=\"";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.system_message_prefs), {hash:{},inverse:self.program(12, program12, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" onclick=\"ClickDesk_Social_Tab_Ui.show_social_network_tab('cd_helpdesk');return false;\"></a> ";
  return buffer;
  }
function program9(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.HELPDESK_ICON_TITLE), {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program10(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.HELPDESK_ICON_TITLE) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HELPDESK_ICON_TITLE); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program12(depth0,data) {
  
  
  return "HelpDesk";
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                     ";
  stack1 = (helper = helpers.cd_social_prefs || (depth0 && depth0.cd_social_prefs),options={hash:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.social_network)),stack1 == null || stack1 === false ? stack1 : stack1.twitter_url), options) : helperMissing.call(depth0, "cd_social_prefs", ((stack1 = (depth0 && depth0.social_network)),stack1 == null || stack1 === false ? stack1 : stack1.twitter_url), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					 ";
  stack1 = (helper = helpers.cd_social_prefs || (depth0 && depth0.cd_social_prefs),options={hash:{},inverse:self.program(23, program23, data),fn:self.program(15, program15, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.social_network)),stack1 == null || stack1 === false ? stack1 : stack1.facebook_url), options) : helperMissing.call(depth0, "cd_social_prefs", ((stack1 = (depth0 && depth0.social_network)),stack1 == null || stack1 === false ? stack1 : stack1.facebook_url), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                 ";
  return buffer;
  }
function program15(depth0,data) {
  
  
  return " ";
  }

function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n					 <a  id=\"cd_twitter\"  class=\"cdw-twitter-tweet\" title=\"";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.system_message_prefs), {hash:{},inverse:self.program(21, program21, data),fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" onclick=\"ClickDesk_Social_Tab_Ui.show_social_network_tab('cd_twitter');return false;\"></a>\n                     ";
  return buffer;
  }
function program18(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.TWITTER_ICON_TITLE), {hash:{},inverse:self.program(21, program21, data),fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program19(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.TWITTER_ICON_TITLE) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.TWITTER_ICON_TITLE); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program21(depth0,data) {
  
  
  return "Tweet";
  }

function program23(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n					 <a  id=\"cd_facebook\"  class=\"cdw-facebook-like\" title=\"";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.system_message_prefs), {hash:{},inverse:self.program(27, program27, data),fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" onclick=\"ClickDesk_Social_Tab_Ui.show_social_network_tab('cd_facebook');return false;\"></a>\n                     ";
  return buffer;
  }
function program24(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.FACEBOOK_ICON_TITLE), {hash:{},inverse:self.program(27, program27, data),fn:self.program(25, program25, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program25(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.FACEBOOK_ICON_TITLE) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.FACEBOOK_ICON_TITLE); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program27(depth0,data) {
  
  
  return "Like";
  }

  buffer += "<div class=\"cd-chat-content\" id=\"clickdesk-chat-w-footer\">\n	<div id=\"clickdesk_footer_tabs\" class=\"ClickDeskFooter cd-footer\">\n           <ul>\n               <li class=\"ClickDeskActive\" style=\"display:none;\"><a  id=\"cd_chat\" onclick=\"return false;\"><span onclick=\"ClickDesk_Social_Tab_Ui.show_social_network_tab('cd_chat');\" class=\"sprite-icons-footer-chat\"></span></a> </li>\n           </ul>\n	</div>\n    <div class=\"cdw-chat-bottom\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n			<div class=\"cdw-chat-bottom-options\" style=\"display:inline-block !important;\">\n              <div>\n                     <a  id=\"cd_chat\" class=\"cdw-chat-session\" title=\"";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.system_message_prefs), {hash:{},inverse:self.program(6, program6, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" onclick=\"ClickDesk_Social_Tab_Ui.show_social_network_tab('cd_chat');return false;\"></a> \n                     ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.helpdesk_enabled), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                 ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.social_network), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                 \n              </div>\n            </div>\n            <div class=\"cdw-chat-popup-white-label\" style=\"margin-top:3px !important;\">";
  stack1 = (helper = helpers.clickdesk_white_label || (depth0 && depth0.clickdesk_white_label),options={hash:{},data:data},helper ? helper.call(depth0, "text", options) : helperMissing.call(depth0, "clickdesk_white_label", "text", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n	</div> \n</div>";
  return buffer;
  });
templates['clickdesk-header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<div id=\"ClickDesk_Dragger\" class=\"ClickDesk_Dragger\" style=\"position:absolute !important;height:40px;width:";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.ie_browser), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;top:0px;left:0px;cursor:move !important;margin:0;border:0;padding:0;z-index:2147483699\"></div>";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "180";
  }

function program4(depth0,data) {
  
  
  return "210";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "style=\"height: ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.mobile_browser), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "!important;\"";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "auto";
  }

function program9(depth0,data) {
  
  
  return "70px";
  }

function program11(depth0,data) {
  
  
  return "border-radius: 0px!important;";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "style=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.mobile_browser), {hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"";
  return buffer;
  }
function program14(depth0,data) {
  
  
  return "padding: 11px 56px 11px 13px !important;";
  }

function program16(depth0,data) {
  
  
  return "padding-left: 10px!important;";
  }

function program18(depth0,data) {
  
  
  return "ClickDesk_Dragger";
  }

function program20(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "style=\"display: ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.mobile_browser), {hash:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "position: relative!important;vertical-align: middle!important;left: auto!important;top: auto!important;margin-right: 5px;\"";
  return buffer;
  }
function program21(depth0,data) {
  
  
  return "none!important;";
  }

function program23(depth0,data) {
  
  
  return "inline-block;";
  }

function program25(depth0,data) {
  
  
  return "style=\"cursor:move !important;\"";
  }

function program27(depth0,data) {
  
  
  return "cursor:move !important;";
  }

function program29(depth0,data) {
  
  
  return "style=\"display: inline-block;margin-top:0px!important;white-space:nowrap;\"";
  }

function program31(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.customvalidationmssgs_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.customstatusmssgs_chat_window_label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program33(depth0,data) {
  
  
  return "Can we help?";
  }

function program35(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += " \n               <span><a  id=\"clickdesk_min\" class=\"cdw-chat-bar-buttons-minimize\" onclick=\"return false;\" title=\"";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.system_message_prefs), {hash:{},inverse:self.program(39, program39, data),fn:self.program(36, program36, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></a></span>\n               ";
  options={hash:{},inverse:self.noop,fn:self.program(41, program41, data),data:data}
  if (helper = helpers.cd_is_customer_enabled) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.cd_is_customer_enabled); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.cd_is_customer_enabled) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(41, program41, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n               <span> <a  id=\"clickdesk_close\" class=\"cdw-chat-bar-buttons-close\" onclick=\"return false;\" title=\"";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.system_message_prefs), {hash:{},inverse:self.program(55, program55, data),fn:self.program(52, program52, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></a></span>\n               ";
  return buffer;
  }
function program36(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.MINIMIZE_ICON_TITLE), {hash:{},inverse:self.program(39, program39, data),fn:self.program(37, program37, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program37(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.MINIMIZE_ICON_TITLE) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.MINIMIZE_ICON_TITLE); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program39(depth0,data) {
  
  
  return "Minimize";
  }

function program41(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n               	";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.mobile_browser), {hash:{},inverse:self.noop,fn:self.program(42, program42, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n               ";
  return buffer;
  }
function program42(depth0,data) {
  
  var stack1;
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.ie_browser), {hash:{},inverse:self.noop,fn:self.program(43, program43, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program43(depth0,data) {
  
  var stack1, helper, options;
  options={hash:{},inverse:self.program(46, program46, data),fn:self.program(44, program44, data),data:data}
  if (helper = helpers.cd_windows_safari) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.cd_windows_safari); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.cd_windows_safari) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(46, program46, data),fn:self.program(44, program44, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program44(depth0,data) {
  
  
  return " ";
  }

function program46(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<span id=\"clickdesk_popout_container\"> <a  id=\"clickdesk_popout\" class=\"cdw-chat-bar-buttons-popout\" onclick=\"ClickDesk_Window_Popout.window_popout();return false;\" title=\"";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.system_message_prefs), {hash:{},inverse:self.program(50, program50, data),fn:self.program(47, program47, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></a></span>";
  return buffer;
  }
function program47(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.POPOUT_ICON_TITLE), {hash:{},inverse:self.program(50, program50, data),fn:self.program(48, program48, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program48(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.POPOUT_ICON_TITLE) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.POPOUT_ICON_TITLE); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program50(depth0,data) {
  
  
  return "Pop-out";
  }

function program52(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.CLOSE_ICON_TITLE), {hash:{},inverse:self.program(55, program55, data),fn:self.program(53, program53, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program53(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.CLOSE_ICON_TITLE) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.CLOSE_ICON_TITLE); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program55(depth0,data) {
  
  
  return "Close";
  }

function program57(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    		   ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.mobile_browser), {hash:{},inverse:self.program(64, program64, data),fn:self.program(58, program58, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			   ";
  return buffer;
  }
function program58(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<span><a  id=\"clickdesk_popin\" class=\"cdw-chat-bar-buttons-popin\" onclick=\"ClickDesk_Storage.delete_prefs('window_popout');cd_PopIn=true;window.close();return false;\" title=\"";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.system_message_prefs), {hash:{},inverse:self.program(62, program62, data),fn:self.program(59, program59, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></a></span>";
  return buffer;
  }
function program59(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.POPIN_ICON_TITLE), {hash:{},inverse:self.program(62, program62, data),fn:self.program(60, program60, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program60(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.POPIN_ICON_TITLE) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.POPIN_ICON_TITLE); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program62(depth0,data) {
  
  
  return "Pop-in";
  }

function program64(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <!-- <span><a  class=\"cdw-chat-bar-buttons-close\" onclick=\"ClickDesk_Widget_Session.delete_session('visitor_closed');return false;\" title=\"";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.system_message_prefs), {hash:{},inverse:self.program(55, program55, data),fn:self.program(52, program52, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></a></span> -->\n			   ";
  return buffer;
  }

function program66(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                   ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.program(69, program69, data),fn:self.program(67, program67, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                   ";
  return buffer;
  }
function program67(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <a href='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.social_network)),stack1 == null || stack1 === false ? stack1 : stack1.twitter_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class='twitter-share-button'>Tweet</a>\n			            <a href='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.social_network)),stack1 == null || stack1 === false ? stack1 : stack1.twitter_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class='twitter-follow-button' data-show-count='false' data-show-screen-name='false' data-width='100px' >Follow</a>\n					 ";
  return buffer;
  }

function program69(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.mobile_browser), {hash:{},inverse:self.noop,fn:self.program(70, program70, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                   ";
  return buffer;
  }
function program70(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <a href='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.social_network)),stack1 == null || stack1 === false ? stack1 : stack1.twitter_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class='twitter-share-button'>Tweet</a>\n			            <a href='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.social_network)),stack1 == null || stack1 === false ? stack1 : stack1.twitter_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class='twitter-follow-button' data-show-count='false' data-show-screen-name='false' data-width='100px' >Follow</a>\n						";
  return buffer;
  }

  stack1 = helpers.unless.call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div id=\"clickdesk_header\" class=\"cd-chat-inner-top\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n      <div class=\"cdw-chat-header\" style=\"z-index:99;";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n         <div class=\"cdw-chat-header-inner\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> \n            <div class=\"cdw-chat-header-avatar ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.program(25, program25, data),fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><img id=\"cd_agent_image\" style=\"background-color: #fff!important;";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" src=\"\" /></div>\n			<div class=\"cdw-chat-header-text\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.noop,fn:self.program(29, program29, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n				<div class=\"cdw-chat-header-text-name\" id=\"cd_agent_name\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.customvalidationmssgs_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.customstatusmssgs_chat_window_label), {hash:{},inverse:self.program(33, program33, data),fn:self.program(31, program31, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n			</div>\n            <div class=\"cdw-chat-bar-buttons\">\n               ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.program(57, program57, data),fn:self.program(35, program35, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n           </div>\n           <div id=\"social_nw_fallow_image\" class=\"social_nw_fallow_image\" style=\"display: none;\">\n                   ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.social_network), {hash:{},inverse:self.noop,fn:self.program(66, program66, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n           </div>\n		</div>\n</div>";
  return buffer;
  });
templates['clickdesk-iframe-form'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    	<textarea name=\""
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></textarea>\n   ";
  return buffer;
  }

  buffer += "<form method=\"post\" action=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\"clickdesk_frame_form\" accept-charset=\"UTF-8\">\n   ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.keys), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n   <input type=\"submit\" name=\"submit\" value=\"submit\" id=\"mybutton\" />\n<form>";
  return buffer;
  });
templates['clickdesk-new-message-entry'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "style=\"font-size:11px!important; color: rgb(216, 90, 138) !important;\"";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<span style=\"float: left !important;height: 49px; width: 34px;margin-top:3px !important\"><img src=\"//my.clickdesk.com/img/webchat/file-ext-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.file_extension)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".png\" onerror=\"this.src = '//my.clickdesk.com/img/webchat/file-ext-default.png'\" style=\"margin-right: 5px !important;width: 30px !important;height: 30px !important;\" /></span><span style=\"display:block !important;overflow:hidden!important;\">File "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.file_status)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".<br/>File Name: <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.file_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\" class=\"cd_hyperlink\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.file_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a><br> File Size: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.file_size)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.warning), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.cd_on_new_message || (depth0 && depth0.cd_on_new_message),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.message), options) : helperMissing.call(depth0, "cd_on_new_message", (depth0 && depth0.message), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  }
function program6(depth0,data) {
  
  
  return "<img src=\"//my.clickdesk.com/clickdesk-ui/browser/img/warn.png\" style=\"height: 12px!important;width: 12px !important;margin-right: 4px;vertical-align:middle !important;\"/>";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "<img src=";
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.agent_image), "https://contactuswidget.appspot.com/images/pic.png", options) : helperMissing.call(depth0, "cd_compare", (depth0 && depth0.agent_image), "https://contactuswidget.appspot.com/images/pic.png", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/>";
  return buffer;
  }
function program9(depth0,data) {
  
  
  return "\"//d1gwclp1pmzk26.cloudfront.net/clickdesk-ui/browser/img/p-agent-avatar.png\"";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\"";
  if (helper = helpers.agent_image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.agent_image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program13(depth0,data) {
  
  
  return "<img src=\"//d1gwclp1pmzk26.cloudfront.net/clickdesk-ui/browser/img/visitor-avatar2.png\" />";
  }

  buffer += "<div class=\"cdw-chat-body-message cdw-chat-body-message-";
  if (helper = helpers.indicator) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.indicator); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" onmouseover=\"clickdesk_hide_or_display_time_on_hover(this, 'visible')\" onmouseout=\"clickdesk_hide_or_display_time_on_hover(this, 'hidden')\">\n				<div class=\"cdw-chat-body-message-text cdw-chat-body-message-text-";
  if (helper = helpers.indicator) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.indicator); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.warning), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n					<div class=\"cdw-chat-body-message-text-name\" style=\"clear:both;\"><span id=\"cd_name\" class=\"cd_name\">";
  if (helper = helpers.from) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.from); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span><small id=\"cd_date\" style=\"font-weight:normal!important;font-size:9px!important;float:right!important\">"
    + escapeExpression((helper = helpers.cd_epoch_time_to_human_date || (depth0 && depth0.cd_epoch_time_to_human_date),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.date), options) : helperMissing.call(depth0, "cd_epoch_time_to_human_date", (depth0 && depth0.date), options)))
    + "</small></div>\n					<div class=\"cd-msg\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.file_name), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					 <span class=\"clickdesk_request_progress ";
  if (helper = helpers.callback_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.callback_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"display: inline-block;\"><span class=\"cd-msg-progress\" onclick=\"ClickDesk_JSONP.resend_req(this.parentNode.className);\" onmouseover=\"if(this.parentNode.className.indexOf('clickdesk_request_failed') != -1)this.title='Message not delivered. Click to resend'; else this.title='';\"></span></span>\n				    </div>\n				</div>\n				<div class=\"cdw-chat-body-message-avatar\" >";
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.program(13, program13, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.indicator), "response", options) : helperMissing.call(depth0, "cd_compare", (depth0 && depth0.indicator), "response", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n</div>";
  return buffer;
  });
templates['clickdesk-offline-sent-success'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"cd-form-sec\" id=\"ClickdeskofflinethxMsg\" style=\"display:none;\">\n    <div class=\"cdw-chat-contact\" style=\"padding-bottom:4px !important;\">\n       <div style=\"min-height:100px !important;z-index:50!important;\">\n	      <div 	class=\"cdw-chat-contact-text\" id=\"ClickdeskofflinethxMsgName\">";
  if (helper = helpers.visitor_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.visitor_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n	      <div 	class=\"cdw-chat-contact-text\" id=\"ClickdeskofflinethxMsgVal\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.offline_form_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.offline_send_success_label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n         <!-- </br>\n          <a  class=\"cdw-chat-popup-button\" id=\"clickdesk_close\">Close</a>-->\n       </div>\n       \n	</div>\n</div>      \n";
  return buffer;
  });
templates['clickdesk-offline'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n	";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.popout_window), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					<div class=\"cdw-chat-contact\">\n						<div class=\"cdw-chat-contact-text\">";
  if (helper = helpers.offline_status_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.offline_status_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n						<!--<div class=\"cdw-chat-contact-title\">Your Name & Email </div>\n			<div class=\"cdw-chat-contact-options\">\n				<div class=\"cdw-chat-contact-options-social\">\n					or\n					<a  class=\"cdw-chat-contact-options-social-facebook\" id=\"clickdesk_facebook_login\" onclick=\"CLICKDESK_Live_Chat_SOCIAL.fbLogin();\"></a>\n					<a  class=\"cdw-chat-contact-options-social-google\"></a>\n				</div>\n				<a  class=\"cdw-chat-contact-options-name\">Name, Email</a>\n			</div>-->\n						<!--<div class=\"cdw-chat-contact-title\">Your Name & Email </div>-->\n						<div class=\"cdw-chat-contact-text\">\n							<input\n								type=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.offline_namefield_emailvstext_label), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n								id=\"cd_offline_name\"\n								placeholder=\"";
  if (helper = helpers.offline_form_name_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.offline_form_name_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, "offline_form_name_required", options) : helperMissing.call(depth0, "cd_if_property", "offline_form_name_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n								class=\"cdw-chat-contact-form-text\" maxlength=\"50\"\n								";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, "offline_form_name_required", options) : helperMissing.call(depth0, "cd_if_property", "offline_form_name_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ref_cookie_name=\"visitor_name\" />\n							<!--   style=\"width: 80%;padding-right: 42px;\"/>\n                <div class=\"cdw-chat-contact-options-social\">\n					or\n					<a  class=\"cdw-chat-contact-options-social-facebook\" id=\"clickdesk_facebook_login\" onclick=\"CLICKDESK_Live_Chat_SOCIAL.fbLogin();\"></a>\n                </div>-->\n						</div>\n						<div class=\"cdw-chat-contact-text\">\n							<input\n								type=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.offline_emailvstext_label), {hash:{},inverse:self.program(18, program18, data),fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n								id=\"cd_offline_email\"\n								placeholder=\"";
  if (helper = helpers.offline_form_email_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.offline_form_email_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, "offline_form_email_required", options) : helperMissing.call(depth0, "cd_if_property", "offline_form_email_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n								class=\"cdw-chat-contact-form-text\" maxlength=\"50\"\n								";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, "offline_form_email_required", options) : helperMissing.call(depth0, "cd_if_property", "offline_form_email_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ref_cookie_name=\"visitor_email\" />\n						</div>\n						";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data},helper ? helper.call(depth0, "offline_form_show_custom_field_required", options) : helperMissing.call(depth0, "cd_if_property", "offline_form_show_custom_field_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n						<!--<div class=\"cdw-chat-contact-title\" style=\"margin-top:0px !important;\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prechat_form_message_label), {hash:{},inverse:self.program(25, program25, data),fn:self.program(23, program23, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>-->\n						<div class=\"cdw-chat-contact-text\" style=\"padding-bottom:0px !important;\">\n							<textarea id=\"cd_offline_msg\" required=\"required\" name=\"visitor_offline_message\"\n								placeholder=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prechat_form_message_label), {hash:{},inverse:self.program(25, program25, data),fn:self.program(23, program23, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " *\"\n								class=\"cdw-chat-contact-form-text\" maxlength=\"600\"></textarea>\n						</div>\n						";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.offline_form_gdpr_label), {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n						";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.popout_window), {hash:{},inverse:self.noop,fn:self.program(29, program29, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n						<div style=\"min-height:17px !important;\">\n							<div class=\"cdw-chat-popup-error\" id=\"offline_valid_email\" style=\"display:none;\"></div>\n						</div>\n					</div>\n					";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.popout_window), {hash:{},inverse:self.noop,fn:self.program(31, program31, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				<div class=\"cdw-chat-contact-send\" style=\"padding-bottom:4px !important;padding-top:2px !important;\">\n					<input type=\"submit\" id=\"cd_offline_button\" class=\"cdw-chat-contact-send-button\"\n						value=\"";
  if (helper = helpers.offline_form_button_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.offline_form_button_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"box-shadow: none!important;\" />\n\n				</div>\n				";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.popout_window), {hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "<div style=\"display:table-cell;\">\n		<div style=\"display: table;width:100%;height:100%;padding: 0px!important;\">\n			<div style=\"display: table-row;height: 100%;\">\n				<div style=\"height: 100%;overflow:auto!important;display:block;\">";
  }

function program4(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.offline_namefield_emailvstext_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.offline_namefield_emailvstext_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program6(depth0,data) {
  
  
  return "text";
  }

function program8(depth0,data) {
  
  
  return " *";
  }

function program10(depth0,data) {
  
  
  return " ";
  }

function program12(depth0,data) {
  
  
  return "required=\"required\" ";
  }

function program14(depth0,data) {
  
  
  return "\n								";
  }

function program16(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.offline_emailvstext_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.offline_emailvstext_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program18(depth0,data) {
  
  
  return "email";
  }

function program20(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n						<div class=\"cdw-chat-contact-text\">\n							<input\n								type=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.offline_customfield_emailvstext_label), {hash:{},inverse:self.program(6, program6, data),fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n								placeholder=\"";
  if (helper = helpers.offline_custom_field_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.offline_custom_field_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, "offline_form_custom_field_required", options) : helperMissing.call(depth0, "cd_if_property", "offline_form_custom_field_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n								id=\"cd_offline_custom\" maxlength=\"50\"\n								";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, "offline_form_custom_field_required", options) : helperMissing.call(depth0, "cd_if_property", "offline_form_custom_field_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class=\"cdw-chat-contact-form-text\" ref_cookie_name=\"custom_field\" />\n						</div>\n						";
  return buffer;
  }
function program21(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.offline_customfield_emailvstext_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.offline_customfield_emailvstext_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program23(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.prechat_form_message_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_form_message_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program25(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.offline_message_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.offline_message_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program27(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n						<div class=\"cd-field-label\"\n							style=\"position: relative;box-sizing: border-box;margin-bottom: 5px!important;\">\n							<label\n								style=\"padding: 5px 20px;cursor: pointer;font-size: 10.6px!important;background: white!important;border-radius: 1px!important;line-height: 1.3!important;display: inline-block;\">\n								<input type=\"checkbox\" id=\"cd_custom_checkbox2\"\n									style=\"position: absolute;left: 3px;top: 7px;\" rel=\"";
  if (helper = helpers.offline_form_gdpr_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.offline_form_gdpr_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n									placeholder=\"";
  if (helper = helpers.offline_form_gdpr_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.offline_form_gdpr_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, "offline_form_gdpr_href_label_required", options) : helperMissing.call(depth0, "cd_if_property", "offline_form_gdpr_href_label_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ref_cookie_name=\"visitor_gdpr\" />\n								<a target=\"_blank\" href=\"";
  if (helper = helpers.offline_form_gdpr_href_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.offline_form_gdpr_href_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n									style=\"font-size: 10px!important;\">";
  if (helper = helpers.offline_form_gdpr_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.offline_form_gdpr_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n							</label>\n						</div>\n						";
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n						<!--<div>\n			     <input style='vertical-align:middle;' id='cd_attach_screenshot' type='checkbox' onclick=\"Cd_Add_Wesite_Screenshot.attach(this);\" ";
  if (helper = helpers.cd_check_blob) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cd_check_blob); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/>\n			     <label style='display: inline; cursor:pointer;vertical-align: middle; font-size: 11px!important;'	for='cd_attach_screenshot'>Include a snapshot of the current page</label><img alt=\"Loading Image...\" id=\"cd_attach_screenshot_imagesrc\" style=\"display: none;\" /> \n			     <input type=\"hidden\" id='cd_attach_screenshot_source' />\n			</div> -->\n						";
  return buffer;
  }

function program31(depth0,data) {
  
  
  return "</div>\n			</div>\n			<div style=\"display: table-row; height: 55px;\">";
  }

function program33(depth0,data) {
  
  
  return "</div>\n		</div>\n	</div>";
  }

  buffer += "<div class=\"cd-form-sec\" id=\"ClickdeskofflineForm\"\n	style=\"display:none;position: relative!important;padding: 0px 0px 0px 0px!important;\">\n	";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.offline_form_prefs), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	<div id=\"cd_loading\"\n		style=\"display:none;position: absolute!important;left:35%!important;top: -2px!important;font-weight: bold!important;background-color: #F4E794!important;padding:2px 8px 3px!important;border-radius: 0px 0px 3px 3px!important;font-size:10px !important;\">\n		Sending...</div>\n</div>";
  return buffer;
  });
templates['clickdesk-postchat-survey'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n	       <div class=\"postchat-form-headding\">";
  if (helper = helpers.postchat_survey_form_header_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.postchat_survey_form_header_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n		   <div class=\"cdw-chat-contact cdw-postchat-content\" style=\"height:auto !important;overflow:visible;\">\n\n		       <input type=\"hidden\" id=\"cd_postchat_sessionid\" value=\""
    + escapeExpression(((stack1 = (depth1 && depth1.sessionId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n		       <input type=\"hidden\" id=\"cd_postchat_visitor_token\" value=\""
    + escapeExpression(((stack1 = (depth1 && depth1.visitor_token)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n		       \n		       ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.questions), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n		       \n		       <div style=\"min-height:17px !important\">\n		          <div id=\"cd_valid_postchat_form\" class=\"cdw-chat-popup-error\" style=\"display:none;\"></div>\n		       </div> \n		       \n		       <div class=\"cdw-postchat-btn-wrap\">\n	               <input type=\"submit\" id=\"cd_postchat_survey_submit\" class=\"cdw-chat-popup-form-button\" value=\"";
  if (helper = helpers.postchat_survey_form_submit_btn_text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.postchat_survey_form_submit_btn_text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"box-shadow: none!important;text-transform: none!important;\"/>\n	               <img id=\"cd_postchat_loading\" src=\"\" style=\"display:none;\"/>\n	           </div>\n		  </div>	\n	   ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n		            "
    + escapeExpression((helper = helpers.cd_set_index || (depth0 && depth0.cd_set_index),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "cd_set_index", (data == null || data === false ? data : data.index), options)))
    + "\n		            <div class=\"cdw-postchat-text-label cd-feedback-question-label-";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"cd-q-index\">";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ".</span> <span id=\"cd_postchat_feedback_q";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.question_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.question_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></div>\n		       		";
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.question_type), "textarea", options) : helperMissing.call(depth0, "cd_compare", (depth0 && depth0.question_type), "textarea", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		       ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n		       		   <div class=\"cd-postchat-answer-wrap\">\n		       		      <textarea  maxlength=\"256\" name=\"cd_postchat_feedback_";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data=\"cd-feedback-question-label-";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"cdw-postchat-text\" ";
  stack1 = (helper = helpers.cd_if_checked || (depth0 && depth0.cd_if_checked),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.question_required), options) : helperMissing.call(depth0, "cd_if_checked", (depth0 && depth0.question_required), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "></textarea>\n		       		   </div> \n		       		";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "required=\"required\"";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		       			";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.answers), {hash:{},inverse:self.programWithDepth(10, program10, data, depth0),fn:self.programWithDepth(7, program7, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		       		";
  return buffer;
  }
function program7(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n		       			    <div class=\"cd-postchat-answer-wrap\">\n		       			     	<input class=\"cd-postchat-option\" type=\""
    + escapeExpression(((stack1 = (depth1 && depth1.question_type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data=\"cd-feedback-question-label-"
    + escapeExpression(((stack1 = (depth1 && depth1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\"cd_postchat_feedback_"
    + escapeExpression(((stack1 = (depth1 && depth1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" value=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" ";
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.noop,fn:self.programWithDepth(8, program8, data, depth1),data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), "0", options) : helperMissing.call(depth0, "cd_compare", (data == null || data === false ? data : data.index), "0", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> <span class=\"cd-postchat-option-label\">"
    + escapeExpression((helper = helpers.cd_capitalize || (depth0 && depth0.cd_capitalize),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "cd_capitalize", depth0, options)))
    + "</span> </br>\n		       			    </div>\n		       			";
  return buffer;
  }
function program8(depth0,data,depth2) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.cd_if_checked || (depth2 && depth2.cd_if_checked),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth2 && depth2.question_required), options) : helperMissing.call(depth0, "cd_if_checked", (depth2 && depth2.question_required), options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program10(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n		       			   <div class=\"cd-postchat-answer-wrap\">\n		       			     <input type=\""
    + escapeExpression(((stack1 = (depth1 && depth1.question_type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\"cd_postchat_feedback_"
    + escapeExpression(((stack1 = (depth1 && depth1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"cdw-postchat-text\" data=\"cd-feedback-question-label-"
    + escapeExpression(((stack1 = (depth1 && depth1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" ";
  stack1 = (helper = helpers.cd_if_checked || (depth1 && depth1.cd_if_checked),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth1 && depth1.question_required), options) : helperMissing.call(depth0, "cd_if_checked", (depth1 && depth1.question_required), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n		       			   </div>\n		       			";
  return buffer;
  }

  buffer += "<div class=\"clickdesk-postchat cdw\" id=\"ClickdeskPostchatSurveyForm\" style=\"display:none;\">\n  <div class=\"clickdesk-postchat-dialog\" id=\"clickdesk-postchat-dialog\">\n   <div class=\"clickdesk-postchat-popup clickdesk-fadeInUp\">\n       <a class=\"clickdesk-postchat-popup-close\" id=\"cd_postchat_close\" style=\"cursor:pointer!important;\" onclick=\"ClickDesk_Postchat.hide_window();\">&times;</a>\n	   ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.postchat_survey_form_prefs), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n   </div>\n  </div>  \n</div>\n<div class=\"clickdesk-postchat-popup-overlay\" id=\"cd_postchat_bg_overlay\" style=\"position:fixed;top:0;right:0;left:0;bottom:0;background:#fff;opacity:0.8;z-index:2147483646\"></div>\n"
    + escapeExpression((helper = helpers.add_cd_styles || (depth0 && depth0.add_cd_styles),options={hash:{},data:data},helper ? helper.call(depth0, ".clickdesk-hide-overflow {overflow-y : hidden !important;}", options) : helperMissing.call(depth0, "add_cd_styles", ".clickdesk-hide-overflow {overflow-y : hidden !important;}", options)))
    + " \n";
  return buffer;
  });
templates['clickdesk-prechat'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n	";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.popout_window), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					<div class=\"cdw-chat-contact\" style=\"height:auto !important;overflow:visible;\">\n						<div class=\"cdw-chat-contact-text\">";
  if (helper = helpers.prechat_status_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_status_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n\n						<!--   <div class=\"cdw-chat-contact-title\">Your Name & Email </div> -->\n\n						<div class=\"cdw-chat-contact-text\">\n							<input\n								type=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prechat_namefield_emailvstext_label), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n								placeholder=\"";
  if (helper = helpers.prechat_form_name_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_form_name_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, "prechat_form_name_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_name_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n								id=\"cd_prechat_name\" class=\"cdw-chat-contact-form-text\" maxlength=\"50\"\n								";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, "prechat_form_name_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_name_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ref_cookie_name=\"visitor_name\" />\n							<!-- style=\"width: 80%;padding-right: 42px;\" />\n           <div class=\"cdw-chat-contact-options-social\">\n					or\n					<a  class=\"cdw-chat-contact-options-social-facebook\" id=\"clickdesk_facebook_login\" onclick=\"CLICKDESK_Live_Chat_SOCIAL.fbLogin();\"></a>\n           </div>-->\n						</div>\n\n						<div class=\"cdw-chat-contact-text\">\n							<input\n								type=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prechat_emailvstext_label), {hash:{},inverse:self.program(18, program18, data),fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n								placeholder=\"";
  if (helper = helpers.prechat_form_email_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_form_email_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, "prechat_form_email_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_email_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n								class=\"cdw-chat-contact-form-text\" id=\"cd_prechat_email\" maxlength=\"50\"\n								";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, "prechat_form_email_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_email_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ref_cookie_name=\"visitor_email\" />\n						</div>\n\n						<div id=\"clickdesk_prechat_custom_dept_dropdown\">\n							";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.prechat_form_show_department_dropdown), {hash:{},inverse:self.programWithDepth(26, program26, data, depth1),fn:self.programWithDepth(20, program20, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n						</div>\n\n						";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data},helper ? helper.call(depth0, "prechat_form_show_custom_field_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_show_custom_field_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n						";
  options={hash:{},inverse:self.noop,fn:self.program(35, program35, data),data:data}
  if (helper = helpers.custom_popup_enabled) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.custom_popup_enabled); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.custom_popup_enabled) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(35, program35, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n						<!--<div class=\"cdw-chat-contact-title\" style=\"margin-top:0px !important;\">";
  if (helper = helpers.prechat_form_message_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_form_message_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>-->\n						<div class=\"cdw-chat-contact-text\" style=\"padding-bottom:0px !important;\">\n							<textarea id=\"cd_prechat_msg\" class=\"cdw-chat-contact-form-text\" required=\"required\"\n								placeholder=\"";
  if (helper = helpers.prechat_form_message_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_form_message_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " *\"></textarea>\n						</div>\n						";
  options={hash:{},inverse:self.program(42, program42, data),fn:self.program(40, program40, data),data:data}
  if (helper = helpers.custom_popup_enabled) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.custom_popup_enabled); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.custom_popup_enabled) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(42, program42, data),fn:self.program(40, program40, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n						";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prechat_form_gdpr_label), {hash:{},inverse:self.noop,fn:self.program(46, program46, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n						<div style=\"min-height:17px !important\">\n							<div id=\"cd_valid_email\" class=\"cdw-chat-popup-error\" style=\"display:none;\"></div>\n						</div>\n\n					</div>\n					";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.popout_window), {hash:{},inverse:self.noop,fn:self.program(49, program49, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				<div class=\"cdw-chat-contact-send\" style=\"padding-bottom:2px !important;padding-top:0px !important\">\n					<input type=\"submit\" id=\"cd_prechat_button\" value=\"";
  if (helper = helpers.prechat_form_button_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_form_button_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n						class=\"cdw-chat-contact-send-button\" style=\"box-shadow: none!important;\" />\n				</div>\n				";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.popout_window), {hash:{},inverse:self.noop,fn:self.program(51, program51, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "<div style=\"display:table-cell;\">\n		<div style=\"display: table;width:100%;height:100%;padding: 0px!important;\">\n			<div style=\"display: table-row;height: 100%;\">\n				<div style=\"height: 100%;overflow:auto!important;display:block;\">";
  }

function program4(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.prechat_namefield_emailvstext_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_namefield_emailvstext_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program6(depth0,data) {
  
  
  return "text";
  }

function program8(depth0,data) {
  
  
  return " *";
  }

function program10(depth0,data) {
  
  
  return " ";
  }

function program12(depth0,data) {
  
  
  return "required=\"required\" ";
  }

function program14(depth0,data) {
  
  
  return "\n								";
  }

function program16(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.prechat_emailvstext_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_emailvstext_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program18(depth0,data) {
  
  
  return "email";
  }

function program20(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\n							";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.user_departments), {hash:{},inverse:self.noop,fn:self.programWithDepth(21, program21, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n							";
  return buffer;
  }
function program21(depth0,data,depth3) {
  
  var buffer = "", stack1;
  buffer += "\n							<div class=\"cdw-chat-contact-text\">\n								<select id=\"cd_department\" class=\"cdw-chat-contact-form-text\"\n									style=\" width: 100% ";
  stack1 = helpers['if'].call(depth0, (depth3 && depth3.popout_window), {hash:{},inverse:self.program(22, program22, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;line-height: 1.9em !important;\">\n									<option value='' selected=\"selected\">Any1 (Department)</option>\n									";
  stack1 = helpers.each.call(depth0, (depth3 && depth3.user_departments), {hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n								</select>\n							</div>\n							";
  return buffer;
  }
function program22(depth0,data) {
  
  
  return "!important";
  }

function program24(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n									<option value='"
    + escapeExpression(((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression((helper = helpers.cd_capitalize || (depth0 && depth0.cd_capitalize),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.name), options) : helperMissing.call(depth0, "cd_capitalize", (depth0 && depth0.name), options)))
    + "</option>\n									";
  return buffer;
  }

function program26(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n							";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.noop,fn:self.programWithDepth(27, program27, data, depth2),data:data},helper ? helper.call(depth0, "prechat_form_show_department_dropdown", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_show_department_dropdown", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n							";
  return buffer;
  }
function program27(depth0,data,depth3) {
  
  var buffer = "", stack1;
  buffer += "\n							";
  stack1 = helpers['if'].call(depth0, (depth3 && depth3.user_departments), {hash:{},inverse:self.noop,fn:self.programWithDepth(28, program28, data, depth3),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n							";
  return buffer;
  }
function program28(depth0,data,depth4) {
  
  var buffer = "", stack1;
  buffer += "\n							<div class=\"cdw-chat-contact-text\">\n								<select id=\"cd_department\" class=\"cdw-chat-contact-form-text\"\n									style=\"width: 100% ";
  stack1 = helpers['if'].call(depth0, (depth4 && depth4.popout_window), {hash:{},inverse:self.program(22, program22, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;line-height: 1.9em !important;\">\n									<option value='' selected=\"selected\">\n										";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prechat_default_department_label), {hash:{},inverse:self.program(31, program31, data),fn:self.program(29, program29, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n									";
  stack1 = helpers.each.call(depth0, (depth4 && depth4.user_departments), {hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n								</select>\n							</div>\n							";
  return buffer;
  }
function program29(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.prechat_default_department_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_default_department_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program31(depth0,data) {
  
  
  return "Any\n										(Department)";
  }

function program33(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n						<div class=\"cdw-chat-contact-text\">\n							<input type=\"";
  if (helper = helpers.prechat_customfield_emailvstext_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_customfield_emailvstext_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n								placeholder=\"";
  if (helper = helpers.prechat_custom_field_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_custom_field_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, "prechat_form_custom_field_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_custom_field_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n								id=\"cd_prechat_custom\" class=\"cdw-chat-contact-form-text\" maxlength=\"50\"\n								";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, "prechat_form_custom_field_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_custom_field_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ref_cookie_name=\"custom_field\" />\n						</div>\n						";
  return buffer;
  }

function program35(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n						<!-- <div class=\"cdw-chat-contact-text\" >\n            	 <input type=\"text\"\n            	  placeholder=\"";
  if (helper = helpers.prechat_form_text1_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_form_text1_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, "prechat_form_text1_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_text1_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n            	   class=\"cdw-chat-contact-form-text\" id=\"cd_popup_custom_text1\"  maxlength=\"50\" \n            	 ";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(38, program38, data),fn:self.program(36, program36, data),data:data},helper ? helper.call(depth0, "prechat_form_text1_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_text1_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ref_cookie_name=\"visitor_text1\"/>\n				</div> -->\n						<div class=\"cdw-chat-contact-text\">\n							<input type=\"text\"\n								placeholder=\"";
  if (helper = helpers.prechat_form_text2_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_form_text2_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, "prechat_form_text2_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_text2_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n								class=\"cdw-chat-contact-form-text\" id=\"cd_popup_custom_text2\" maxlength=\"50\"\n								";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, "prechat_form_text2_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_text2_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ref_cookie_name=\"visitor_text2\" />\n						</div>\n						<div class=\"cdw-chat-contact-text\">\n							<input type=\"text\"\n								placeholder=\"";
  if (helper = helpers.prechat_form_text3_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_form_text3_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, "prechat_form_text3_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_text3_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n								class=\"cdw-chat-contact-form-text\" id=\"cd_popup_custom_text3\" maxlength=\"50\"\n								";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, "prechat_form_text3_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_text3_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ref_cookie_name=\"visitor_text3\" />\n						</div>\n\n						<div class=\"cdw-chat-contact-text\">\n							<input type=\"text\"\n								placeholder=\"";
  if (helper = helpers.prechat_form_text4_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_form_text4_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, "prechat_form_text4_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_text4_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n								class=\"cdw-chat-contact-form-text\" id=\"cd_popup_custom_text4\" maxlength=\"50\"\n								";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, "prechat_form_text4_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_text4_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ref_cookie_name=\"visitor_text4\" />\n						</div>\n\n						";
  return buffer;
  }
function program36(depth0,data) {
  
  
  return "required=\"required\"";
  }

function program38(depth0,data) {
  
  
  return "\n            	  ";
  }

function program40(depth0,data) {
  
  
  return "\n						";
  }

function program42(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n						";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prechat_custom_req_checkbox_field_label), {hash:{},inverse:self.noop,fn:self.program(43, program43, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n						";
  return buffer;
  }
function program43(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n						<div class=\"cd-field-label\"\n							style=\"position: relative;box-sizing: border-box;margin-bottom: 5px!important;\">\n							<label\n								style=\"padding: 5px 20px;cursor: pointer;font-size: 10.6px!important;background: white!important;border-radius: 1px!important;line-height: 1.3!important;display: inline-block;\">\n								<input type=\"checkbox\" id=\"cd_custom_checkbox\"\n									style=\"position: absolute;left: 3px;top: 7px;\"\n									rel=\"";
  if (helper = helpers.prechat_custom_req_checkbox_error_field_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_custom_req_checkbox_error_field_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n									";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.prechat_custom_req_checkbox_field_required), {hash:{},inverse:self.noop,fn:self.program(44, program44, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n									";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.noop,fn:self.program(44, program44, data),data:data},helper ? helper.call(depth0, "prechat_custom_req_checkbox_field_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_custom_req_checkbox_field_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n								<a target=\"_blank\" href=\"";
  if (helper = helpers.prechat_custom_req_checkbox_href_field_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_custom_req_checkbox_href_field_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n									style=\"font-size: 10px!important;\">";
  if (helper = helpers.prechat_custom_req_checkbox_field_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_custom_req_checkbox_field_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n							</label>\n						</div>\n						";
  return buffer;
  }
function program44(depth0,data) {
  
  
  return "required=\"required\"\n									";
  }

function program46(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n						<div class=\"cd-field-label\"\n							style=\"position: relative;box-sizing: border-box;margin-bottom: 5px!important;\">\n							<label\n								style=\"padding: 5px 20px;cursor: pointer;font-size: 10.6px!important;background: white!important;border-radius: 1px!important;line-height: 1.3!important;display: inline-block;\">\n								<input type=\"checkbox\" id=\"cd_custom_checkbox1\"\n									style=\"position: absolute;left: 3px;top: 7px;\" rel=\"";
  if (helper = helpers.prechat_form_gdpr_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_form_gdpr_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n									placeholder=\"";
  if (helper = helpers.prechat_form_gdpr_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_form_gdpr_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ref_cookie_name=\"visitor_gdpr\" \n									";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.program(47, program47, data),fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, "prechat_form_gdpr_href_label_required", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_gdpr_href_label_required", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n									/>\n								<a target=\"_blank\" href=\"";
  if (helper = helpers.prechat_form_gdpr_href_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_form_gdpr_href_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n									style=\"font-size: 10px!important;\">";
  if (helper = helpers.prechat_form_gdpr_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_form_gdpr_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n							</label>\n						</div>\n						";
  return buffer;
  }
function program47(depth0,data) {
  
  
  return "\n									";
  }

function program49(depth0,data) {
  
  
  return "</div>\n			</div>\n			<div style=\"display: table-row; height: 55px;\">";
  }

function program51(depth0,data) {
  
  
  return "</div>\n		</div>\n	</div>";
  }

  buffer += "<div class=\"cd-form-sec\" id=\"ClickdeskprechatForm\" style=\"display:none;\">\n	";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.online_form_prefs), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n"
    + escapeExpression((helper = helpers.add_cd_styles || (depth0 && depth0.add_cd_styles),options={hash:{},data:data},helper ? helper.call(depth0, ".clickdesk-ultra .clickdesk_error_ele[type='checkbox'] {outline: 1px solid red!important;} .clickdesk-ultra .cd-field-label a{color: #1A0DAB!important;}", options) : helperMissing.call(depth0, "add_cd_styles", ".clickdesk-ultra .clickdesk_error_ele[type='checkbox'] {outline: 1px solid red!important;} .clickdesk-ultra .cd-field-label a{color: #1A0DAB!important;}", options)));
  return buffer;
  });
templates['clickdesk-rewrite-entry'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "style=\"font-size:11px!important; color: rgb(216, 90, 138) !important;\"";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<span style=\"float: left !important;height: 49px; width: 34px;margin-top:3px !important\"><img src=\"//my.clickdesk.com/img/webchat/file-ext-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.file_extension)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".png\" onerror=\"this.src = '//my.clickdesk.com/img/webchat/file-ext-default.png'\" style=\"margin-right: 5px !important;width: 30px !important;height: 30px !important;\" /></span><span style=\"display:block !important;overflow:hidden!important;\">File "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.file_status)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".<br/>File Name: <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.file_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\" class=\"cd_hyperlink\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.file_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a><br> File Size: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.file_size)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.warning), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.cd_on_new_message || (depth0 && depth0.cd_on_new_message),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.message), options) : helperMissing.call(depth0, "cd_on_new_message", (depth0 && depth0.message), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  }
function program6(depth0,data) {
  
  
  return "<img src=\"//my.clickdesk.com/clickdesk-ui/browser/img/warn.png\" style=\"height: 12px 	!important;width: 12px !important;margin-right: 4px;vertical-align:middle !important;\"/>";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "<img src=";
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.agent_image), "https://contactuswidget.appspot.com/images/pic.png", options) : helperMissing.call(depth0, "cd_compare", (depth0 && depth0.agent_image), "https://contactuswidget.appspot.com/images/pic.png", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/>";
  return buffer;
  }
function program9(depth0,data) {
  
  
  return "\"//d1gwclp1pmzk26.cloudfront.net/clickdesk-ui/browser/img/p-agent-avatar.png\"";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\"";
  if (helper = helpers.agent_image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.agent_image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program13(depth0,data) {
  
  
  return "<img src=\"//d1gwclp1pmzk26.cloudfront.net/clickdesk-ui/browser/img/visitor-avatar2.png\" />";
  }

  buffer += "<div id=\"cd_rewrite\" class=\"cd_rewrite cdw-chat-body-message cdw-chat-body-message-";
  if (helper = helpers.indicator) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.indicator); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n	<div class=\"cdw-chat-body-message-text cdw-chat-body-message-text-";
  if (helper = helpers.indicator) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.indicator); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.warning), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n		<div class=\"cd-msg\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.file_name), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		<span class=\"clickdesk_request_progress ";
  if (helper = helpers.callback_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.callback_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"display: inline-block;\"><span class=\"cd-msg-progress\" onclick=\"ClickDesk_JSONP.resend_req(this.parentNode.className);\" onmouseover=\"if(this.parentNode.className.indexOf('clickdesk_request_failed') != -1)this.title='Message not delivered. Click to resend'; else this.title='';\"></span></span>\n        </div>\n    </div>\n	<div class=\"cdw-chat-body-message-avatar\" >";
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.program(13, program13, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.indicator), "response", options) : helperMissing.call(depth0, "cd_compare", (depth0 && depth0.indicator), "response", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n</div>";
  return buffer;
  });
templates['clickdesk-social'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n	   <big><img src=\"\" /></big>\n       <div id=\"clickdesk_twitter\" style=\"display:none;\">\n          ";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.popout_window), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n       </div>\n       <iframe id=\"cd_facebook_frame\" onload=\"clickdesk_social_network_hide_loading()\" src=\"about:blank\" allowtransparency=\"true\" scrolling=\"auto\" frameBorder=\"0\" style=\"display:none;border: 0px;width:100% !important;\" width=\"100%\" height=\"280px\"></iframe>       \n       ";
  stack1 = (helper = helpers.cd_if_property || (depth1 && depth1.cd_if_property),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, "show_twitter", options) : helperMissing.call(depth0, "cd_if_property", "show_twitter", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n       ";
  stack1 = (helper = helpers.cd_if_property || (depth1 && depth1.cd_if_property),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, "show_facebook", options) : helperMissing.call(depth0, "cd_if_property", "show_facebook", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "    \n       <iframe id=\"cd_phone_frame\" onload=\"clickdesk_social_network_hide_loading()\" src=\"about:blank\" allowtransparency=\"true\" scrolling=\"auto\" frameBorder=\"0\" style=\"display:none;border: 0px;width:100% !important;\" width=\"100%\" height=\"300px\"></iframe>\n     ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "<div style=\"overflow: auto; position: relative; right: 0px; height: 100%;\"><div id=\"clickdesk_twitter_popout\" style=\"left: 0px; height: 100%; position: absolute; right: 0px; bottom: 0px; overflow: auto;\"></div></div>";
  }

function program4(depth0,data) {
  
  
  return "\n       ";
  }

  buffer += "<div id=\"clickdeskchat_social_template\" class=\"cdw-chat-contact\" style=\"display:none;";
  if (helper = helpers.base_css) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.base_css); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n     ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.social_networks), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });
templates['clickdesk-sound'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<span id=\"cd_playsound\" style=\"display:none;height:0px;\"></span>";
  });
templates['clickdesk-ui-bar'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.bubble_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.online_set_auto_width), "false", options) : helperMissing.call(depth0, "cd_compare", ((stack1 = (depth0 && depth0.bubble_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.online_set_auto_width), "false", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.bubble_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.online_set_auto_width), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "250px";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.bubble_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.offline_set_auto_width), "false", options) : helperMissing.call(depth0, "cd_compare", ((stack1 = (depth0 && depth0.bubble_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.offline_set_auto_width), "false", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.bubble_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.offline_set_auto_width), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "left: 0px;right:auto;";
  }

function program8(depth0,data) {
  
  
  return ";left: auto;right:0px;";
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += " \n                <!-- <a  class=\"click-desk-visitor\"><img src=\"//my.clickdesk.com/clickdesk-ui/browser/images/visitor.png\" /></a> -->\n                <div class=\"click-desk-tool-tip1\" style=\"padding-left:75px!important;\">\n                     <a  class=\"cd-eye-catcher\" onclick=\"return false;\" style=\"margin: 0px auto;line-height:0em!important; width: auto;height: auto;position: relative!important;top: 0px;background: none!important;padding-top:7px;text-align: ";
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "online", options) : helperMissing.call(depth0, "cd_compare", (depth0 && depth0.status), "online", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "!important;\">\n                        <img src=\"\" />\n                        <span id=\"clickdesk_close_eye_catcher_image\" onclick=\"CLICKDESK_CHAT_WINDOW_UI.hide_eye_catcher(event);return false;\">x</span>\n                     </a>  \n                </div>\n                <!-- <small>tool-tip</small> <a >Can we help?</a> -->\n                <div class=\"click-desk-closed-header\">\n                       <a  class=\"click-desk-visitor\" style=\"top: auto!important;position: absolute !important;bottom: 34px\"><img style=\"width: 50px;height: 50px;\" src=\"\" /></a>\n                       <div class=\"click-desk-bar-text\" style=\"\">";
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "online", options) : helperMissing.call(depth0, "cd_compare", (depth0 && depth0.status), "online", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n                       <div class=\"click-desk-closed\"><a  onclick=\"return false;\">close</a></div>\n                </div>\n              ";
  return buffer;
  }
function program11(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.bubble_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.online_image_position)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program13(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.bubble_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.offline_image_position)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program15(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.bubble_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.online_text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program17(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.bubble_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.offline_text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

  buffer += "<div id=\"clickdesk-appendable-bubble\">\n<div class=\"clickdesk-ultra clickdesk_cdw_j\">\n    <div class=\"cd-bubble clickdesk_bubble\" id=\"clickdesk_bubble\" style=\"display:none;margin: 0px 10px;position: fixed !important;bottom: 0px;width: auto!important;min-width: ";
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "online", options) : helperMissing.call(depth0, "cd_compare", (depth0 && depth0.status), "online", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " !important;";
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.template_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.position), "bottom_left", options) : helperMissing.call(depth0, "cd_compare", ((stack1 = (depth0 && depth0.template_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.position), "bottom_left", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "z-index:2147483638!important;\">\n         <div class=\"click-desk-closed-container\">\n              ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.bubble_prefs), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n         </div>\n    </div>\n</div>\n</div>";
  return buffer;
  });
templates['custom-popup'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<p id=\"cd_custom-popup_label\" class=\"cd-field-label\" style=\"text-align:center; padding-top:10px;font-size: 15px !important;\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.customchatpopup_form_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.customchat_popup_description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n</p>\n<div style=\"text-align:center; margin-top:10px; margin-bottom:20px;\">\n<a type=\"button\" class=\"btn btn-success\" id=\"cd_custom-popup_yes\" style=\"background: #5cb85c;padding: 5px 15px; border-radius: 4px; color: #fff;\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.customchatpopup_form_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.customchat_yes_message_label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n<a type=\"button\" class=\"btn btn-danger\" id=\"cd_custom-popup_no\" style=\"background: #d9534f;padding: 5px 15px; border-radius: 4px; color: #fff;\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.customchatpopup_form_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.customchat_no_message_label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n</div>\n";
  return buffer;
  }

  buffer += "<div class=\"cd-form-sec ClickDeskcontent cd-chat-inner-body\" id=\"ClickdeskcustompopupForm\" style=\"display:none;\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.customchatpopup_form_prefs), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });
templates['helpdesk-email'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.popout_window), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	<big style=\"display: none;position: absolute;top: 40%;text-align: center!important;margin-left: 35%!important;z-index:1\"><img src=\"\" /></big>\n    <div class=\"cdw-chat-contact\" style=\"height:auto !important;padding-bottom:4px !important;overflow:visible;\">\n		<div class=\"cdw-chat-contact-text\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.ticket_form_status_message_label), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n		\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.departments), {hash:{},inverse:self.noop,fn:self.programWithDepth(8, program8, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n       \n       <div class=\"cdw-chat-contact-text\">\n              <input type=\"text\" id=\"cd_helpdesk_name\" placeholder=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.ticket_form_name_label), {hash:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " *\" class=\"cdw-chat-contact-form-text\" maxlength=\"50\" required=\"required\" ref_cookie_name=\"visitor_name\"/>\n		</div>   \n		\n		<div class=\"cdw-chat-contact-text\">\n                <input type=\"email\" placeholder=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.ticket_form_email_label), {hash:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " *\" id=\"cd_helpdesk_email\" class=\"cdw-chat-contact-form-text\" maxlength=\"50\" required=\"required\" ref_cookie_name=\"visitor_email\"/>\n			 </div> \n\n             <div class=\"cdw-chat-contact-text\" style=\"padding-bottom:0px !important;\">\n                <textarea id=\"cd_helpdesk_msg\" class=\"cdw-chat-contact-form-text\" name=\"visitor_message\" required=\"required\" placeholder=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.ticket_form_message_label), {hash:{},inverse:self.program(28, program28, data),fn:self.program(26, program26, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " *\"></textarea>\n			</div>\n                \n             \n             <div style=\"min-height:10px !important;\">\n             <div class=\"cdw-chat-popup-error\" id=\"helpdesk_valid_email\"></div>\n             </div>\n     </div>\n     ";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.popout_window), {hash:{},inverse:self.noop,fn:self.program(30, program30, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <div class=\"cdw-chat-contact-send\" style=\"padding-bottom:4px !important;padding-top:2px !important;\">\n			<input type=\"submit\" id=\"cd_helpdesk_submit\" class=\"cdw-chat-contact-send-button\" value=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.ticket_form_send_button_text), {hash:{},inverse:self.program(34, program34, data),fn:self.program(32, program32, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" style=\"box-shadow: none!important;\"/>\n	  </div>\n	  ";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.popout_window), {hash:{},inverse:self.noop,fn:self.program(36, program36, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n   ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "<div style=\"display:table-cell;\"><div style=\"display: table;width:100%;height:100%;padding: 0px!important;\"><div style=\"display: table-row;height: 100%;\"><div style=\"height: 100%;overflow:auto!important;display:block;\">";
  }

function program4(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.ticket_form_status_message_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.ticket_form_status_message_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program6(depth0,data) {
  
  
  return "You can create your support ticket by providing your name, email address and message.";
  }

function program8(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <div class=\"cdw-chat-contact-text\">\n			<select id=\"cd_department\" class=\"cdw-chat-contact-form-text\" style=\"width: 100% ";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.popout_window), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";";
  stack1 = (helper = helpers.cd_check_length || (depth0 && depth0.cd_check_length),options={hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.departments), options) : helperMissing.call(depth0, "cd_check_length", (depth0 && depth0.departments), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;line-height: 1.9em !important;\">\n			";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.departments), {hash:{},inverse:self.noop,fn:self.programWithDepth(15, program15, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</select>\n         </div>\n	   ";
  return buffer;
  }
function program9(depth0,data) {
  
  
  return " ";
  }

function program11(depth0,data) {
  
  
  return "!important";
  }

function program13(depth0,data) {
  
  
  return "display:none;";
  }

function program15(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n			  <option value='"
    + escapeExpression(((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' ";
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.program(9, program9, data),fn:self.program(16, program16, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.id), (depth1 && depth1.id), options) : helperMissing.call(depth0, "cd_compare", (depth0 && depth0.id), (depth1 && depth1.id), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n			";
  return buffer;
  }
function program16(depth0,data) {
  
  
  return "selected=\"selected\"";
  }

function program18(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.ticket_form_name_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.ticket_form_name_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program20(depth0,data) {
  
  
  return "Name";
  }

function program22(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.ticket_form_email_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.ticket_form_email_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program24(depth0,data) {
  
  
  return "Email";
  }

function program26(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.ticket_form_message_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.ticket_form_message_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program28(depth0,data) {
  
  
  return "Enter Message";
  }

function program30(depth0,data) {
  
  
  return "</div></div><div style=\"display: table-row; height: 55px;\">";
  }

function program32(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.ticket_form_send_button_text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.ticket_form_send_button_text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program34(depth0,data) {
  
  
  return "Submit";
  }

function program36(depth0,data) {
  
  
  return "</div></div></div>";
  }

  buffer += "<div class=\"cd-form-sec\" id=\"ClickdeskhelpdeskForm\" style=\"display:none;position: relative;padding: 0px 0px 0px 0px!important;\">\n";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.ticket_form_prefs), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });
templates['white-label'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      ";
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "text", options) : helperMissing.call(depth0, "cd_compare", (depth0 && depth0.type), "text", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          Powered by \n             <a rel='nofollow' href=\"";
  if (helper = helpers.utm_link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.utm_link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\" style='color:#55b2db!important;'> ClickDesk</a>\n      ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <a rel='nofollow' href=\"";
  if (helper = helpers.utm_link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.utm_link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target='_blank'>\n              <img  src=\"https://contactuswidget.appspot.com/images/clickdesklogo.png\" style='height:16px;width:70px;margin-top:8px;'>\n          </a>\n      ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n     ";
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.plan_type), "free", options) : helperMissing.call(depth0, "cd_compare", ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.plan_type), "free", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      ";
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "text", options) : helperMissing.call(depth0, "cd_compare", (depth0 && depth0.type), "text", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n         ";
  stack1 = helpers.unless.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.disable_branding), {hash:{},inverse:self.program(15, program15, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n     ";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n             ";
  stack1 = (helper = helpers.cd_is_substring || (depth0 && depth0.cd_is_substring),options={hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_company_from_name), "ClickDesk", options) : helperMissing.call(depth0, "cd_is_substring", ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_company_from_name), "ClickDesk", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n         ";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                          <a rel='nofollow' href=\"";
  if (helper = helpers.utm_link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.utm_link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target='_blank'>\n              					<img src=\"https://contactuswidget.appspot.com/images/clickdesklogo.png\" style='height:16px;width:70px;margin-top:8px;'>\n          				  </a>\n              ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                 "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_company_from_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n              ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n           ";
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.program(18, program18, data),fn:self.program(16, program16, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.disable_branding), "true", options) : helperMissing.call(depth0, "cd_compare", ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.disable_branding), "true", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  return buffer;
  }
function program16(depth0,data) {
  
  
  return " ";
  }

function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n               ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_url), {hash:{},inverse:self.program(30, program30, data),fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n           ";
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                   ";
  stack1 = (helper = helpers.cd_compare || (depth0 && depth0.cd_compare),options={hash:{},inverse:self.program(28, program28, data),fn:self.program(20, program20, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "text", options) : helperMissing.call(depth0, "cd_compare", (depth0 && depth0.type), "text", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                       ";
  stack1 = (helper = helpers.cd_is_substring || (depth0 && depth0.cd_is_substring),options={hash:{},inverse:self.program(26, program26, data),fn:self.program(21, program21, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.whitelabel_company_name), "ClickDesk", options) : helperMissing.call(depth0, "cd_is_substring", ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.whitelabel_company_name), "ClickDesk", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                   ";
  return buffer;
  }
function program21(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                          Powered by <a rel='nofollow' href=\"";
  stack1 = (helper = helpers.cd_is_substring || (depth0 && depth0.cd_is_substring),options={hash:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_url_link), "clickdesk", options) : helperMissing.call(depth0, "cd_is_substring", ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_url_link), "clickdesk", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" target='_blank'><span> "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.whitelabel_company_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></a>\n                        ";
  return buffer;
  }
function program22(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.utm_link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.utm_link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program24(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_url_link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program26(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                           <a rel='nofollow' href=\"";
  stack1 = (helper = helpers.cd_is_substring || (depth0 && depth0.cd_is_substring),options={hash:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_url_link), "clickdesk", options) : helperMissing.call(depth0, "cd_is_substring", ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_url_link), "clickdesk", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" target='_blank'><span> "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.whitelabel_company_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></a>\n                       ";
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                      <a rel='nofollow' href=\"";
  stack1 = (helper = helpers.cd_is_substring || (depth0 && depth0.cd_is_substring),options={hash:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_url_link), "clickdesk", options) : helperMissing.call(depth0, "cd_is_substring", ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_url_link), "clickdesk", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" target='_blank'><img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' style='height:16px;width:70px;margin-top:8px;'/></a>\n                   ";
  return buffer;
  }

function program30(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    ";
  stack1 = (helper = helpers.cd_is_substring || (depth0 && depth0.cd_is_substring),options={hash:{},inverse:self.program(33, program33, data),fn:self.program(31, program31, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_company_from_name), "ClickDesk", options) : helperMissing.call(depth0, "cd_is_substring", ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_company_from_name), "ClickDesk", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n               ";
  return buffer;
  }
function program31(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                          <a rel='nofollow' href=\"";
  if (helper = helpers.utm_link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.utm_link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target='_blank'>\n              					<img  src=\"https://contactuswidget.appspot.com/images/clickdesklogo.png\" style='height:16px;width:70px;margin-top:8px;'>\n          				  </a>\n                    ";
  return buffer;
  }

function program33(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_company_from_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                    ";
  return buffer;
  }

  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.white_label_image_prefs), {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['widget-dropdown'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n		";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.prechat_form_show_department_dropdown), {hash:{},inverse:self.programWithDepth(12, program12, data, depth1),fn:self.programWithDepth(2, program2, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n ";
  return buffer;
  }
function program2(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\n		      ";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.user_departments), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		    ";
  return buffer;
  }
function program3(depth0,data,depth3) {
  
  var buffer = "", stack1;
  buffer += "\n		           <div class=\"cdw-chat-contact-text\">\n		    <select id=\"cd_department\" class=\"cdw-chat-contact-form-text\" style=\"padding: 5px !important; width: 100% ";
  stack1 = helpers['if'].call(depth0, (depth3 && depth3.popout_window), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";";
  stack1 = helpers.unless.call(depth0, (depth3 && depth3.mobile_browser), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "line-height: 1.9em !important;\">\n		      <option value='' selected=\"selected\">Any1 (Department)</option>\n		    ";
  stack1 = helpers.each.call(depth0, (depth3 && depth3.user_departments), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		    </select>\n		          </div>\n		     ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return " ";
  }

function program6(depth0,data) {
  
  
  return "!important";
  }

function program8(depth0,data) {
  
  
  return "box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;";
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n		      <option value='"
    + escapeExpression(((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression((helper = helpers.cd_capitalize || (depth0 && depth0.cd_capitalize),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.name), options) : helperMissing.call(depth0, "cd_capitalize", (depth0 && depth0.name), options)))
    + "</option>\n		    ";
  return buffer;
  }

function program12(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n		     ";
  stack1 = (helper = helpers.cd_if_property || (depth0 && depth0.cd_if_property),options={hash:{},inverse:self.noop,fn:self.programWithDepth(13, program13, data, depth2),data:data},helper ? helper.call(depth0, "prechat_form_show_department_dropdown", options) : helperMissing.call(depth0, "cd_if_property", "prechat_form_show_department_dropdown", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		  ";
  return buffer;
  }
function program13(depth0,data,depth3) {
  
  var buffer = "", stack1;
  buffer += "\n		      ";
  stack1 = helpers['if'].call(depth0, (depth3 && depth3.user_departments), {hash:{},inverse:self.noop,fn:self.programWithDepth(14, program14, data, depth3),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		   ";
  return buffer;
  }
function program14(depth0,data,depth4) {
  
  var buffer = "", stack1;
  buffer += "\n		            <div class=\"cdw-chat-contact-text\">\n		     <select id=\"cd_department\" class=\"cdw-chat-contact-form-text\" style=\"padding: 5px !important; width: 100% ";
  stack1 = helpers['if'].call(depth0, (depth4 && depth4.popout_window), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";";
  stack1 = helpers.unless.call(depth0, (depth4 && depth4.mobile_browser), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "line-height: 1.9em !important;\">\n		       <option value='' selected=\"selected\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prechat_default_department_label), {hash:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n		     ";
  stack1 = helpers.each.call(depth0, (depth4 && depth4.user_departments), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		     </select>\n		           </div>\n		      ";
  return buffer;
  }
function program15(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.prechat_default_department_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prechat_default_department_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program17(depth0,data) {
  
  
  return "Any (Department)";
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n		       <option value='"
    + escapeExpression(((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression((helper = helpers.cd_capitalize || (depth0 && depth0.cd_capitalize),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.name), options) : helperMissing.call(depth0, "cd_capitalize", (depth0 && depth0.name), options)))
    + "</option>\n		     ";
  return buffer;
  }

  buffer += " ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.online_form_prefs), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
})();
// Add trim function to String prototype
String.prototype.trim = function () {
	return this.replace(/^\s+|\s+$/g, '');
};

/**
 * ClickDesk utility functions
 */
var ClickDesk_Widget_Util = {

	/**
	 * Set as false by default
	 */
	clickdesk_loaded: false,
	widget_id: "",

	// Configure account ID
	configure_account_id: function () {

		// Get widget Id from the script

		if (typeof ClickDesk_Widget_Id !== "undefined")
			this.widget_id = ClickDesk_Widget_Id;
		else {
			try {
				this.widget_id = _glc.id;
			} catch (e) {
			}
		}

		if (!this.widget_id) {
			this.widget_id = _glc.pop();
		}

		// Remove spaces
		//this.widget_id = this.widget_id.trim(); // TODO: Soumya Uncomment this, comment below

		this.widget_id = "4416223588075907"
	},

	is_widget_prefs_available: function () {
		try {
			return !(typeof widgetPrefsJSON === "undefined");
		} catch (e) {
		}
		return false;
	},

	init: function () {

		/**
		 * Do not load in < IE8 browsers
		 */
		var ie_version = clickdesk_get_ie_version();
		if (ie_version && ie_version > 1 && ie_version < 8)
			return false;
		// End of IE conditional checking

		this.configure_account_id();

		// Check whether livechat is already available
		if (typeof CLICKDESK_LOADED !== "undefined")
			return;

		CLICKDESK_LOADED = "true";

		// Get html id attribute
		ClickDesk_Html_Prop_Reset.set();

		// Check active tab
		initialize_check_active_tab();

		if (this.is_widget_prefs_available()) {

			// Load user template
			ClickDesk_Widget_Util.load_user_template();

		} else {
			console.log("before fetching prefs...")
			// Load UI Prefs
			var Ui_JSON = "https://clickdesk.dev.500apps.io/c/clkdsk/cd/prefs?widget_id=4416223588075907";

			ClickDesk_Widget_Util.loadJS(Ui_JSON, function () {
				// Load user template
				ClickDesk_Widget_Util.load_user_template();
			});

//TODO: Soumya uncomment above comment below

			// var newScript = document.createElement("script");
			// var inlineScript = document.createTextNode('var widgetPrefsJSON = \'{"offline_form_prefs":{"offline_header_label":"We are offline.","offline_status_label":"Please provide your contact details to assist you better.","offline_namefield_emailvstext_label":"text","offline_form_name_label":"Name","offline_form_name_required":"1","offline_emailvstext_label":"email","offline_form_email_label":"Email","offline_form_email_required":"1","offline_form_gdpr_label":".a","offline_customfield_emailvstext_label":"text","offline_form_show_custom_field_required":"0","offline_form_custom_field_required":"0","offline_message_label":"Message","offline_form_button_label":"Send Message","offline_send_success_salutation":"Dear","offline_send_success_label":"Thanks for contacting us. We are currently unavailable to chat. We have received your message and will get back to you shortly.","offline_custom_field_label":"aa"},"helpdesk_widget_prefs":{"hd_widgets":[{"id":"8789024290513544","name":"default"}],"helpdesk_enabled":"true"},"message_sounds":{"chat_message_in":"yes","chat_message_out":"yes"},"created_time":1597388577,"webchat_status":"online","widget_domains":{"8789024290513544":["clickdesk6521.weebly.com","premsbox-dot-sandbox-dot-agilecrmbeta.appspot.com","cdtesttest.weebly.com","localhost"]},"bubble_agiletheme_form_prefs":{"bubble_agiletheme_description":"Live chat is the easiest and fastest way to reach our friendly agents","custom_image":"avatr","bubble_agiletheme_header_label":"WELCOME TO SUPPORT","alignment":"bottom_right","bubble_enabled":"yes"},"language":{"current_language":"english"},"postchat_survey_form_prefs":{"postchat_survey_form_header_label":"Thanks for using our live chat service. Please take a moment to provide us your valuable feedback.","question_type":"textarea","question_label":"Any other comments","question_required":"1","postchat_survey_form_submit_btn_text":"Submit","show_postchat_survey_form":"0","send_postchat_email_to_admin":"soumya.bongani@500apps.com","questions":[{"answers":["Yes","No"],"question_type":"radio","question_label":"Were you able to get all your questions answered?","question_required":true},{"question_type":"textarea","question_label":"Any other comments","question_required":"true"}],"send_postchat_email_to_agent":"1"},"template_prefs":{"broadcastchat":"messages","cdw-chat-form-text":"","theme_size":"big","color":"#1B243B","template":"ultra_theme","mobile_optimized_chat":"0","custom_image":"https://generic-apps.s3.amazonaws.com/track/6507/8797/registration/percussion-sound.ogg","position":"Bottom left"},"userid":"R2g2D57CK","white_label_image_prefs":{"white_label_company_from_name":"Agile CRM"},"helpdesk_enabled":"true","visitor_geo":{"city":"hyderabad","country":"India","ip_address":"192.25.56","latitude":"17.38410000","longitude":"78.45640000"},"custom_images_prefs":{"custom_online_image_url":"online_url","custom_offline_image_url":"offline_url"},"emailtovisitor_form_prefs":{"emailtovisitor_form_header_label":"Email me this chat transcript","emailtovisitor_form_status_message_label":"Please enter your name and email to receive the full transcript after the end of the chat session.","emailtovisitor_form_name_label":"Name","emailtovisitor_form_email_label":"Email","emailtovisitor_form_send_button_text":"Send","emailtovisitor_form_cancel_button_text":"Cancel","send_emailtovisitor_enabled":"1"},"customvalidationmssgs_prefs":{"customstatusmssgs_chat_window_label":"Can we help?","customstatusmssgs_chat_visitor_label":"me","customstatusmssgs_chat_window_more_option_label":"More","customstatusmssgs_chat_window_more_option_send_transcript_label":"Send Transcript","customstatusmssgs_chat_window_more_option_sound_label":"Sound","customstatusmssgs_chat_window_more_option_send_file_label":"Send File","customstatusmssgs_name_field_label":"Please fill the required fields","customstatusmssgs_email_field_label":"Enter the valid email address","customstatusmssgs_message_field_label":"Enter your message to chat","customstatusmssgs_chat_required_label":"required","customstatusmssgs_form_chat_window_call_option_error_label":"There is no active agent to respond","no_form_data_to_submit":"Please provide valid information to save","customstatusmssgs_wait_status_label":"Please wait while we connect you to an available agent...","customstatusmssgs_wait_input_field_status_label":"Please wait...","customstatusmssgs_send_request_label":"Sending...","customstatusmssgs_send_success_mssg_label":"We have saved your preferences","customstatusmssgs_send_failure_mssg_label":"Sending failed.Please try again...","customstatusmssgs_nosession_label":"You have no active chat session at this time.","customstatusmssgs_agent_exceeded_time_label":"It seems to be taking longer than usual. Please leave us an offline message."},"online_form_prefs":{"prechat_header_label":"We are online. Chat with us.","prechat_status_label":"Please enter your name and email address to begin chatting with us.","show_prechat_form":"1","prechat_namefield_emailvstext_label":"text","prechat_form_name_label":"Name","prechat_form_name_required":"0","prechat_emailvstext_label":"email","prechat_form_email_label":"Email","prechat_form_email_required":"0","prechat_form_gdpr_label":".","prechat_form_gdpr_href_label":".","prechat_form_gdpr_href_label_required":"0","prechat_department_dropdown_label":"Departments","prechat_default_department_label":"Any (Department)","prechat_form_show_department_dropdown":"1","prechat_customfield_emailvstext_label":"text","prechat_form_show_custom_field_required":"0","prechat_custom_field_label":".","prechat_form_custom_field_required":"0","prechat_form_message_label":"Message","prechat_form_button_label":"Initiate Chat","proactive_visitor_info_form_header":"Please provide contact details for better assistance","proactive_visitor_info_form_save_text":"Save","proactive_visitor_info_form_cancel_text":"Cancel","show_proactive_visitor_info_form":"1","chat_auto_response_name":"Agent","chat_auto_response_message":"Hi, thanks for contacting us. Please excuse me for delays as I may be assisting other customers as well.","chat_auto_response_time":"60","chat_auto_response_required":"0","test":"false","sales":"true","sales1":"false"},"bubble_prefs":{"alignment":"","bubble_enabled":"","offline_hide_eyecatcher":"eyecatcher_url","offline_text":"Happy to Help!","offline_transition_effect":"Bouncein left","online_hide_eyecatcher":"eyecatcher_url","online_text":"Online - Click here to get help","online_transition_effect":"Bounce","hide_offline":"0"},"proactive_rules_updated":"false","departments":{"id":"8789024290513544","name":"default"},"system_message_prefs":{"AGENT_CLOSED_WEBRTC_CALL":"Agent has closed the call.","BROADCAST_SESSION_ALL_AGENTS_BUSY":"All agents are currently busy assisting other customers.","BROADCAST_SESSION_FIRST_AGENT_RESPONSE_TO_ACCEPTED_AGENT":"You are now the chat owner.","BROADCAST_SESSION_FIRST_AGENT_RESPONSE_TO_AGENTS":"Agent %agent_name% (%nick_name%) is now active on this chat.","CHAT_ICON_TITLE":"Chat","CLOSE_ICON_TITLE":"Close","COMMANDS_AGENT_MESSAGE":"Message sent to visitor - %shortcut%","COMMANDS_NOT_FOUND_TO_AGENT":"No command found.","CONFERENCE_CHAT_JOIN_TO_NEW_AGENT":"You have been added to a conference by %agent_name% (%nick_name%).","CONFERENCE_CHAT_JOINED_INFO_TO_REMAINING_AGENT":"%agent_name% (%nick_name%) is added to the conference.","CONFERENCE_CHAT_LEFT_INFO_TO_NEW_AGENT":"You have successfully left the conference.","CONFERENCE_CHAT_LEFT_INFO_TO_REMAINING_AGENTS":"Agent - %agent_name% (%nick_name%) successfully left the conference.","CURRENT_VISITOR_PATH":"Visitor is currently browsing %current_url%.","DEQUEUED_MESSAGE_TO_USER":"You are now connected with an agent.","FACEBOOK_ICON_TITLE":"Like","HELPDESK_ICON_TITLE":"Help Desk","MINIMIZE_ICON_TITLE":"Minimize","NO_ACTIVE_SESSION_TO_AGENT":"Sorry. We are not able to find any active chat session with a visitor. The chat connection may have been disconnected by the user or the user may left the conversation.","NO_ACTIVE_SESSION_TO_USER":"Sorry. We are not able to find any active chat session with an agent. The chat connection may have been disconnected by the agent or due to inactivity.","POPIN_ICON_TITLE":"Pop-in","POPOUT_ICON_TITLE":"Pop-out","QUEUED_MESSAGE_TO_USER":"Please wait for an agent to respond. You are currently %queue_count% in the queue.","QUEUED_OFFLINE_MESSAGE_LABEL":"or you can send offline message","SESSION_BLOCKED_MESSAGE_BY_AGENT_TO_AGENT":"You have successfully blocked the current visitor.","SESSION_BLOCKED_MESSAGE_BY_AGENT_TO_VISITOR":"Your IP has been blocked by Agent.","SESSION_CLOSED_MESSAGE_BY_AGENT_TO_AGENT":"You have successfully closed the chat.","SESSION_CLOSED_MESSAGE_BY_AGENT_TO_USER":"Agent has left the chat. Thanks for using Live Chat service.","SESSION_CLOSED_MESSAGE_BY_USER_TO_AGENT":"Visitor has left or closed the session.","SESSION_CLOSED_MESSAGE_BY_USER_TO_USER":"Thanks for using Live Chat service. Your chat session is now complete.","TIME_OUT_MESSAGE_TO_AGENT":"Due to inactivity, your session with the user has been disconnected.","TIME_OUT_MESSAGE_TO_USER":"Sorry. Due to inactivity, this chat session has been disconnected. Please reinitiate the chat if you still need assistance.","TIME_OUT_WARNING_MESSAGE1_TO_AGENT":"Due to inactivity, this chat session expires in the next $time. To resume, please respond to the visitor.","TIME_OUT_WARNING_MESSAGE2_TO_AGENT":"Due to inactivity, the chat session with this visitor ends in few seconds. Respond back to continue the chat.","TRANSFER_TO_NEW_AGENT":"There is a new chat being transferred from ","TRANSFER_TO_TRANSFERRING_AGENT":"Please wait while the chat session is being transferred to %agent_name% (%nick_name%).","TWITTER_ICON_TITLE":"Tweet","TYPING_ALERT_MESSAGE":"is typing ...","VEDIOCHAT_ICON_TITLE":"Video Chat","VISITOR_CLOSED_WEBRTC_CALL":"Visitor has closed the call.","VOICECHAT_ICON_TITLE":"Voice Chat","WEBRTC_AGENT_ACTIVE_ON_CALL":"You are already on an active call with us.","WEBRTC_AGENT_BROWSER_UNSUPPORTED":"The agent cannot receive your call at this moment.","WEBRTC_AGENT_BUSY":"Seems agent is busy with some other call.","WEBRTC_AGENT_DENIED_VEDIO_CALL":"Agent has declined your video chat request.","WEBRTC_AGENT_DENIED_VOICE_CALL":"Agent has declined your audio chat request.","WEBRTC_CALL_INTERRUPTED_MSG":"Camera/Microphone access has been denied. Please allow access and try again.","WEBRTC_CANCEL_LABEL":"Cancel","WEBRTC_CLOSE_LABEL":"Close","WEBRTC_CONNECTED_LABEL":"Connected","WEBRTC_CONNECTING_LABEL":"Connecting","WEBRTC_END_CALL":"End Call","WEBRTC_VISITOR_BROWSER_UNSUPPORTED":"Sorry, the visitor is currently using a browser which does not allow answering the calls.","WEBRTC_VISITOR_DENIED_VEDIO_CALL":"Visitor has declined your video chat request.","WEBRTC_VISITOR_DENIED_VOICE_CALL":"Visitor has declined your audio chat request.","WEBRTC_WAITING_LABEL":"Waiting for"},"button_prefs":{"color":"#444","alignment":"right","button_enabled":"no","position":"45%"},"status":"online"}\';');
			// newScript.appendChild(inlineScript);
			// document.getElementsByTagName('head')[0].appendChild(newScript);
			// ClickDesk_Widget_Util.load_user_template();

		}
	},



	add_custom_loading_css: function () {
		try {
			var cloudURL = "https://d1gwclp1pmzk26.cloudfront.net/";

			var errorHTMLCSS = ".cd-msg-progress:not(:empty) {height: 20px;} .clickdesk_request_failed .cd-msg-progress::after {content: url(" + cloudURL + "img/warning.png);cursor: pointer;margin-left: 3px;}"
			var sendingCSS = ".cd-msg-progress:not(:empty) {height: 20px;} .clickdesk_request_sending .cd-msg-progress::after {content: url(" + cloudURL + "img/ajax-loader-cursor.gif);margin-left: 3px;}";

			CD_Live_Chat.add_style_css_tag(errorHTMLCSS);
			CD_Live_Chat.add_style_css_tag(sendingCSS);

			// Loader images
			var image = document.createElement("IMG");
			image.src = cloudURL + "img/ajax-loader-cursor.gif";
			image.style.display = "none";
			document.body.appendChild(image);

			image = document.createElement("IMG");
			image.src = cloudURL + "img/warning.png";
			image.style.display = "none";

			document.body.appendChild(image);

		} catch (e) {
		}

	},

	is_valid_domain: function () {

		var domain_url = this.parse_widget_prefs().template_prefs.domain_url;
		if (domain_url
			&& !ClickDesk_Proactive_Rule_Conditions.match_urls(
				document.location.href, domain_url, true)) {
			return false;
		}

		if (!this.parse_widget_prefs().widget_domains)
			return true;

		var loc = document.location.href;
		var ignoreDomainsArray = new Array("localhost", "demo", "google",
			"facebook", "clickdesk", "appspot");
		for (var i = 0; i < ignoreDomainsArray.length; i++) {
			if (loc.indexOf(ignoreDomainsArray[i]) != -1)
				return true;
		}

		// Check domain settings
		var registered_domains = this.parse_widget_prefs().widget_domains[this.widget_id];
		if (!registered_domains)
			return true;

		var is_valid = false;
		for (var i = 0; i < registered_domains.length; i++) {

			if (ClickDesk_Proactive_Rule_Conditions.match_urls(
				document.location.href, registered_domains[i], true)) {
				is_valid = true;
				break;
			}
		}

		return is_valid;

	},

	// Template render
	load_user_template: function () {
console.log("load_user_template ...")
		// Check supported url domains (future option)
		if (!this.is_valid_domain()) {
			console.log("ClickDesk - Domains are mismatched.");
			return;
		}

		var is_window_in_popout = ClickDesk_Window_Popout.is_window_in_popup();

		// Check mobile browsers
		if (ClickDesk_Mobile_Util.is_mobile_browser()
			&& ClickDesk_Mobile_Util.is_mobile_optimized_widget()
			&& !is_window_in_popout) {

			// Append image to body and leave
			document.body.appendChild(clickdesk_get_mobile_view());
			console.log("before initialize_visitor_tracker ...")

			// Add pubnub service
			this.initialize_visitor_tracker();

			// Set custom images/Links
			clickdesk_show_custom_images();

			return;
		}

		var current_template = this.get_user_template();

		// Load custom css
		this.add_custom_loading_css();

		// Get custom css
		var prefs = CD_Live_Chat.get_custom_prefs();

		if (((ClickDesk_Mobile_Util.is_mobile_browser() && ClickDesk_Mobile_Util
			.is_mobile_optimized_widget()) || is_window_in_popout)
			&& (Cd_Non_Popout_Themes.toString().indexOf(current_template) != -1)) {

			// Reset widgetprefs JSON for css file load
			widgetPrefsJSON = this.parse_widget_prefs();
			widgetPrefsJSON.template_prefs.template = "ultra_theme";

			ClickDesk_Ui_Template = ClickDesk_Ui_Template.replace(
				"social_ui_big", "ultra_theme");

		} else if (prefs && prefs.cd_apply_custom_css == "true"
			&& (!ClickDesk_Window_Popout.is_window_in_popup())) {

			if (prefs.cd_template_type != "social")
				ClickDesk_Ui_Template = ClickDesk_Ui_Template.replace(
					"social_ui_big", prefs.cd_template_type);

		} else {
			ClickDesk_Ui_Template = ClickDesk_Ui_Template.replace(
				"social_ui_big", this.get_user_template());
		}

		var ie_browser = clickdesk_get_ie_version();
		if (ie_browser && ie_browser == 10)
			ClickDesk_Ui_Template += "?t=" + new Date().getTime();

		// Check default theme type
		if (ClickDesk_Ui_Template.indexOf("ultra_theme") < 0) {
			ClickDesk_Widget_Util.loadJS(ClickDesk_Ui_Template, function () {
				ClickDesk_Widget_Util.initialize_chat_window();
			});
		} else {
			ClickDesk_Widget_Util.initialize_chat_window();
		}

	},

	get_user_template: function () {

		//var template_type = this.parse_widget_prefs().template_prefs.template;
		var template_type = "ultra_theme";
		template_type = (template_type == "big" || template_type == "medium"
			|| template_type == "small" || template_type == "social_tab_template") ? "social_ui_big"
			: template_type;
		template_type = (template_type.indexOf("minimalistic") == 0) ? "minimalistic"
			: template_type;

		return template_type;

	},

	parse_widget_prefs: function () {

		if (typeof widgetPrefsJSON == "object")
			return widgetPrefsJSON;

		var widgetPrefsString = widgetPrefsJSON.replace(/\r\n|\\r\\n/g, "");
		widgetPrefsString = widgetPrefsString.replace(/'/g, "&#39;");

		// Parse JSON
		return JSON.parse(widgetPrefsString);

	},

	initialize_chat_window: function () {

		// Init
		try {

			if (typeof widgetPrefsJSON === "undefined")
				return;

			// Parse JSON
			widgetPrefsJSON = this.parse_widget_prefs();

			// Check popout options
			var is_window_in_popout = ClickDesk_Window_Popout
				.is_window_in_popup();
			if (!is_window_in_popout
				|| ClickDesk_Mobile_Util.is_third_party_app()) {
				this.initialize_visitor_tracker();
			}

			else if (is_window_in_popout) {
				this.initialize_visitor_tracker("popout");
			}

			// Render UI
			CD_Live_Chat.render_clickdesk_ui();

			// Render Custom CSS & Template
			var prefs = CD_Live_Chat.get_custom_prefs();
			if (prefs && prefs.cd_apply_custom_css == "true"
				&& (!is_window_in_popout)) {
				// Add custom css
				//CD_Live_Chat.add_style_css_tag(prefs.cd_custom_widget_css);
				try {
					// Load post chat survey css file
					/*CD_Live_Chat.load_css_file_url(ClickDesk_CloudFront_URL
							+ "/temp/postchat-survey.css");*/
					CD_Live_Chat.load_template_css_file();
					// Add custom css
					CD_Live_Chat.add_style_css_tag(prefs.cd_custom_widget_css);
				} catch (e) {
				}
			} else {
				// Load template css file
				CD_Live_Chat.load_template_css_file();
			}

			// Call api method
			CLICKDESK_Live_Chat.call_api_onload();

		} catch (err) {
			clickdesk_log(err);
		}

	},

	initialize_visitor_tracker: function (type) {
		console.log("type in initialize_visitor_tracker livechat-init.js");
		console.log(type);
		// Initialize Pusher
		ClickDesk_Widget_Pusher_Visitor.subscribe(type);

		
		// Add Shopify plugin
		//TODO: Soumya uncomment below
		//ClickDesk_Shopify.get_current_cart_();

	},

	
	loadJS: function (src, callback) {
		if (head.js === "function") {
			head.js(src, function () {
				if (callback)
					callback();
			});
		} else {
			var script = document.createElement('script'),
				loaded;
			script.setAttribute('src', src);
			if (callback) {
				script.onreadystatechange = script.onload = function () {
					if (!loaded) {
						callback();
					}
					loaded = true;
				};
			}
			document.getElementsByTagName('head')[0].appendChild(script);
		}
	},
};

// Check window popout options
try {
	if (typeof proactiveJSON !== "undefined") {
		proactiveJSON = {
			"message": proactiveJSON
		};

	}
} catch (e) {
}

console.log("init livechat");
console.log(CLOUD_FRONT_VERSION);
// Initialize window popout options
ClickDesk_Window_Popout.update_popout_options();

// Cloudfront URL for static files(CSS and images)
var ClickDesk_CloudFront_URL = "https://d1gwclp1pmzk26.cloudfront.net";

// Check old gae server users and redirect to cloudfront
glcpath = (glcpath.indexOf("gae.clickdesk.com") != -1) ? glcpath.replace("gae",
	"my") : glcpath;

// Change server path
glcpath = (glcpath.indexOf(ClickDesk_CloudFront_URL.replace("https", "")) != -1) ? glcp
	+ "my.clickdesk.com/clickdesk-ui/browser/"
	: glcpath;

// Server Path
var CLICKDESK_SERVER_PATH = glcpath.replace("/clickdesk-ui/browser/", "");
// CLICKDESK_SERVER_PATH = glcpath.replace("/clickdesk-ui/browser/", "");

// Check new cloudfront url
CLICKDESK_SERVER_PATH = ((glcpath.indexOf(".clickdesk.com") != -1) || (_glc.version)) ? CLICKDESK_SERVER_PATH
	: glcp + "my.clickdesk.com";

// Choose live/test environment
var CD_STATIC_FILES_PATH = (_glc.version) ? glcpath : ClickDesk_CloudFront_URL + "/" + CLOUD_FRONT_VERSION + "/widget-js/browser/";

// Load UI Template
var ClickDesk_Ui_Template = CD_STATIC_FILES_PATH.replace("/browser", "")
	+ "templates/templates_cmpld/social_ui_big.js.min.js";
var Cd_Non_Popout_Themes = new Array("lighten_theme", "minimalistic", "custom", "agilechat_theme");

// Init
(function () {
	ClickDesk_Widget_Util.init();
})();
