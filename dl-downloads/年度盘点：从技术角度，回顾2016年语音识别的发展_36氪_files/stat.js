!function(){var t={getCookie:function(t){return(t=RegExp("(^| )"+t+"=([^;]*)(;|$)").exec(document.cookie))?t[2]:null},setCookie:function(t,e){var r=new Date,n=location.host.indexOf("36kr.com")>-1?"36kr":"36tr";if(r.setYear(r.getFullYear()+20),"[object Object]"=={}.toString.call(arguments[0]))for(var o in arguments[0])document.cookie=o+"="+arguments[0][o]+";expires="+r.toGMTString()+";domain=."+n+".com;path=/";else document.cookie=t+"="+e+";expires="+r.toGMTString()+";domain=."+n+".com;path=/"},getRandomId:function(){for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",e="",r=parseInt((new Date).getTime()/6e4),n=0;5>n;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return e+r}};null==t.getCookie("kr_stat_uuid")&&t.setCookie("kr_stat_uuid",t.getRandomId())}(window,document),function(t,e){function r(t,e){for(var r=["data-stat-"+e,"data-stat-module"],n="",o=0,a=[];t&&t!=document.body;)r.forEach(function(i){var c=t.getAttribute(i);(i==r[0]||n)&&(i==r[0]&&n||c&&(n=n?[c,n].join("."):[c,e].join("."),a.push(o)))}),t=t.parentNode,o++;return n}function n(t){var e=t.target,n=r(e,"click");n&&krtracker("trackEvent","click",n)}function o(t){var e=t.target,n=t.relatedTarget,o=n;if(e.getAttribute("data-stat-hover")){for(;o&&o.getAttribute;){if(o==e)return;o=o.parentNode}var a=r(e,"hover");krtracker("trackEvent","hover",a)}}function a(){e.body.addEventListener("click",n),e.body.addEventListener("mouseout",o),e.removeEventListener("DOMContentLoaded",a),t.removeEventListener("load",a)}"complete"===document.readyState?setTimeout(function(){a()},0):(e.addEventListener("DOMContentLoaded",a),t.addEventListener("load",a))}(window,document),function(){function t(t){var e=new Image,r=new Image;e.src=c+"?"+t,r.src=1==s?d+"?"+t:u+"?"+t}function e(t){t=t||{},r(t);var e=[];for(k in t)e.push(k+"="+encodeURIComponent(t[k]));return e.push("_="+ +new Date),e.join("&")}function r(t){t[l.host]=location.host}function n(t){return t=t?String(t):"",/^https?:\/\//.test(t)?t:location.protocol+"//"+location.host+"/"+t.replace(/^\//,"")}function o(r){var o={};o[l.url]=r,o[l.ref]=f?f:document.referrer,f=n(r),t(e(o))}function a(){var r={};r[l.evType]=arguments[0][0],r[l.evValue]=arguments[0][1],t(e(r))}function i(t){var e="";"function"==typeof t&&(e=t()||""),a("render",e)}var c="//36kr.com/global/hm.gif",u="//36kr.com/global/p/sensors/track",d="//test12.36kr.com/global/p/sensors/track",s=/test(\d){0,2}\./gi.test(location.hostname),l={host:"h",url:"u",evType:"et",evValue:"ev",ref:"r"},f=null,m=(window.krtracker?window.krtracker.q:[],{trackPageView:o,trackEvent:a,trackRender:i}),v=function(){var t=Array.prototype.slice.call(arguments),e=t[0];m[e]&&m[e].call(this,t.slice(1))};if(window.krtracker.q&&window.krtracker.q.length)for(var g=0;g<window.krtracker.q.length;g++)v.apply(this,window.krtracker.q[g]);window.krtracker=v}();