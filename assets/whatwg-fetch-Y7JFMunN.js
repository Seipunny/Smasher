import{g}from"./vite-plugin-node-polyfills-DZE12B0X.js";var f=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof g<"u"&&g||{},u={searchParams:"URLSearchParams"in f,iterable:"Symbol"in f&&"iterator"in Symbol,blob:"FileReader"in f&&"Blob"in f&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in f,arrayBuffer:"ArrayBuffer"in f};function x(e){return e&&DataView.prototype.isPrototypeOf(e)}if(u.arrayBuffer)var O=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],P=ArrayBuffer.isView||function(e){return e&&O.indexOf(Object.prototype.toString.call(e))>-1};function y(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||e==="")throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function w(e){return typeof e!="string"&&(e=String(e)),e}function v(e){var t={next:function(){var r=e.shift();return{done:r===void 0,value:r}}};return u.iterable&&(t[Symbol.iterator]=function(){return t}),t}function n(e){this.map={},e instanceof n?e.forEach(function(t,r){this.append(r,t)},this):Array.isArray(e)?e.forEach(function(t){if(t.length!=2)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+t.length);this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}n.prototype.append=function(e,t){e=y(e),t=w(t);var r=this.map[e];this.map[e]=r?r+", "+t:t};n.prototype.delete=function(e){delete this.map[y(e)]};n.prototype.get=function(e){return e=y(e),this.has(e)?this.map[e]:null};n.prototype.has=function(e){return this.map.hasOwnProperty(y(e))};n.prototype.set=function(e,t){this.map[y(e)]=w(t)};n.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)};n.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),v(e)};n.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),v(e)};n.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),v(e)};u.iterable&&(n.prototype[Symbol.iterator]=n.prototype.entries);function m(e){if(!e._noBody){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}}function B(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function R(e){var t=new FileReader,r=B(t);return t.readAsArrayBuffer(e),r}function U(e){var t=new FileReader,r=B(t),s=/charset=([A-Za-z0-9_-]+)/.exec(e.type),i=s?s[1]:"utf-8";return t.readAsText(e,i),r}function D(e){for(var t=new Uint8Array(e),r=new Array(t.length),s=0;s<t.length;s++)r[s]=String.fromCharCode(t[s]);return r.join("")}function T(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function _(){return this.bodyUsed=!1,this._initBody=function(e){this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:u.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:u.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:u.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():u.arrayBuffer&&u.blob&&x(e)?(this._bodyArrayBuffer=T(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||P(e))?this._bodyArrayBuffer=T(e):this._bodyText=e=Object.prototype.toString.call(e):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):u.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},u.blob&&(this.blob=function(){var e=m(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=m(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else{if(u.blob)return this.blob().then(R);throw new Error("could not read as ArrayBuffer")}},this.text=function(){var e=m(this);if(e)return e;if(this._bodyBlob)return U(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(D(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},u.formData&&(this.formData=function(){return this.text().then(F)}),this.json=function(){return this.text().then(JSON.parse)},this}var j=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function S(e){var t=e.toUpperCase();return j.indexOf(t)>-1?t:e}function d(e,t){if(!(this instanceof d))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t=t||{};var r=t.body;if(e instanceof d){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new n(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!r&&e._bodyInit!=null&&(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new n(t.headers)),this.method=S(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal||function(){if("AbortController"in f){var o=new AbortController;return o.signal}}(),this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&r)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(r),(this.method==="GET"||this.method==="HEAD")&&(t.cache==="no-store"||t.cache==="no-cache")){var s=/([?&])_=[^&]*/;if(s.test(this.url))this.url=this.url.replace(s,"$1_="+new Date().getTime());else{var i=/\?/;this.url+=(i.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}d.prototype.clone=function(){return new d(this,{body:this._bodyInit})};function F(e){var t=new FormData;return e.trim().split("&").forEach(function(r){if(r){var s=r.split("="),i=s.shift().replace(/\+/g," "),o=s.join("=").replace(/\+/g," ");t.append(decodeURIComponent(i),decodeURIComponent(o))}}),t}function H(e){var t=new n,r=e.replace(/\r?\n[\t ]+/g," ");return r.split("\r").map(function(s){return s.indexOf(`
`)===0?s.substr(1,s.length):s}).forEach(function(s){var i=s.split(":"),o=i.shift().trim();if(o){var p=i.join(":").trim();try{t.append(o,p)}catch(b){console.warn("Response "+b.message)}}}),t}_.call(d.prototype);function h(e,t){if(!(this instanceof h))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(t||(t={}),this.type="default",this.status=t.status===void 0?200:t.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=t.statusText===void 0?"":""+t.statusText,this.headers=new n(t.headers),this.url=t.url||"",this._initBody(e)}_.call(h.prototype);h.prototype.clone=function(){return new h(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new n(this.headers),url:this.url})};h.error=function(){var e=new h(null,{status:200,statusText:""});return e.ok=!1,e.status=0,e.type="error",e};var I=[301,302,303,307,308];h.redirect=function(e,t){if(I.indexOf(t)===-1)throw new RangeError("Invalid status code");return new h(null,{status:t,headers:{location:e}})};var c=f.DOMException;try{new c}catch{c=function(t,r){this.message=t,this.name=r;var s=Error(t);this.stack=s.stack},c.prototype=Object.create(Error.prototype),c.prototype.constructor=c}function E(e,t){return new Promise(function(r,s){var i=new d(e,t);if(i.signal&&i.signal.aborted)return s(new c("Aborted","AbortError"));var o=new XMLHttpRequest;function p(){o.abort()}o.onload=function(){var a={statusText:o.statusText,headers:H(o.getAllResponseHeaders()||"")};i.url.indexOf("file://")===0&&(o.status<200||o.status>599)?a.status=200:a.status=o.status,a.url="responseURL"in o?o.responseURL:a.headers.get("X-Request-URL");var l="response"in o?o.response:o.responseText;setTimeout(function(){r(new h(l,a))},0)},o.onerror=function(){setTimeout(function(){s(new TypeError("Network request failed"))},0)},o.ontimeout=function(){setTimeout(function(){s(new TypeError("Network request timed out"))},0)},o.onabort=function(){setTimeout(function(){s(new c("Aborted","AbortError"))},0)};function b(a){try{return a===""&&f.location.href?f.location.href:a}catch{return a}}if(o.open(i.method,b(i.url),!0),i.credentials==="include"?o.withCredentials=!0:i.credentials==="omit"&&(o.withCredentials=!1),"responseType"in o&&(u.blob?o.responseType="blob":u.arrayBuffer&&(o.responseType="arraybuffer")),t&&typeof t.headers=="object"&&!(t.headers instanceof n||f.Headers&&t.headers instanceof f.Headers)){var A=[];Object.getOwnPropertyNames(t.headers).forEach(function(a){A.push(y(a)),o.setRequestHeader(a,w(t.headers[a]))}),i.headers.forEach(function(a,l){A.indexOf(l)===-1&&o.setRequestHeader(l,a)})}else i.headers.forEach(function(a,l){o.setRequestHeader(l,a)});i.signal&&(i.signal.addEventListener("abort",p),o.onreadystatechange=function(){o.readyState===4&&i.signal.removeEventListener("abort",p)}),o.send(typeof i._bodyInit>"u"?null:i._bodyInit)})}E.polyfill=!0;f.fetch||(f.fetch=E,f.Headers=n,f.Request=d,f.Response=h);
