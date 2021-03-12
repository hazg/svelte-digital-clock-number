!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self)["svelte-digital-alarm-number"]=e()}(this,(function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function r(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function u(){return t="",document.createTextNode(t);var t}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t){return Array.from(t.childNodes)}function v(t,e,n,s){for(let s=0;s<t.length;s+=1){const o=t[s];if(o.nodeName===e){let e=0;const l=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||l.push(t.name)}for(let t=0;t<l.length;t++)o.removeAttribute(l[t]);return t.splice(s,1)[0]}}return s?d(e):i(e)}function p(t,e,n){t.classList[n?"add":"remove"](e)}let g;function m(t){g=t}const $=[],y=[],b=[],x=[],E=Promise.resolve();let _=!1;function w(t){b.push(t)}let k=!1;const C=new Set;function N(){if(!k){k=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];m(e),A(e.$$)}for(m(null),$.length=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];C.has(e)||(C.add(e),e())}b.length=0}while($.length);for(;x.length;)x.pop()();_=!1,k=!1,C.clear()}}function A(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const B=new Set;let S;function z(){S={r:0,c:[],p:S}}function j(){S.r||s(S.c),S=S.p}function I(t,e){t&&t.i&&(B.delete(t),t.i(e))}function L(t,e,n,s){if(t&&t.o){if(B.has(t))return;B.add(t),S.c.push((()=>{B.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function O(t,n,l,c){const{fragment:a,on_mount:r,on_destroy:i,after_update:d}=t.$$;a&&a.m(n,l),c||w((()=>{const n=r.map(e).filter(o);i?i.push(...n):s(n),t.$$.on_mount=[]})),d.forEach(w)}function T(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&($.push(t),_||(_=!0,E.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(e,o,l,c,a,i,d=[-1]){const u=g;m(e);const f=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:d,skip_bound:!1};let v=!1;if(f.ctx=l?l(e,o.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),v&&H(e,t)),n})):[],f.update(),v=!0,s(f.before_update),f.fragment=!!c&&c(f.ctx),o.target){if(o.hydrate){const t=h(o.target);f.fragment&&f.fragment.l(t),t.forEach(r)}else f.fragment&&f.fragment.c();o.intro&&I(e.$$.fragment),O(e,o.target,o.anchor,o.customElement),N()}m(u)}class Z{$destroy(){T(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function q(e){let n,s,o,l,i,u,g,m,$;return{c(){n=d("svg"),s=d("g"),o=d("path"),l=d("path"),i=d("path"),u=d("path"),g=d("path"),m=d("path"),$=d("path"),this.h()},l(t){n=v(t,"svg",{class:!0,viewBox:!0,xmlns:!0},1);var e=h(n);s=v(e,"g",{transform:!0},1);var c=h(s);o=v(c,"path",{d:!0,class:!0},1),h(o).forEach(r),l=v(c,"path",{d:!0,class:!0},1),h(l).forEach(r),i=v(c,"path",{d:!0,class:!0},1),h(i).forEach(r),u=v(c,"path",{d:!0,class:!0},1),h(u).forEach(r),g=v(c,"path",{d:!0,class:!0},1),h(g).forEach(r),m=v(c,"path",{d:!0,class:!0},1),h(m).forEach(r),$=v(c,"path",{d:!0,class:!0},1),h($).forEach(r),c.forEach(r),e.forEach(r),this.h()},h(){f(o,"d","m 4,69 3,-3 h 6 l 3,3 c 0,0 -1,1 -3,1 H 7 C 5,70 4,69 4,69 Z"),f(o,"class","svelte-v4nd4s"),p(o,"active",e[0][6]),f(l,"d","m 17,55 -3,2 v 8 l 3,3 c 0,0 1,-1 1,-3 v -7 c 0,-2 -1,-3 -1,-3 z"),f(l,"class","svelte-v4nd4s"),p(l,"active",e[0][5]),f(i,"d","m 3,55 3,2 v 8 L 3,68 C 3,68 2,67 2,65 v -7 c 0,-2 1,-3 1,-3 z"),f(i,"class","svelte-v4nd4s"),p(i,"active",e[0][4]),f(u,"d","m 7,52 c 2,0 4,0 6,0 1,0.6 2,1.3 3,2 -1,0.6 -2,1.3 -3,2 -2,0 -4,0 -6,0 C 6,55.3 5,54.6 4,54 5,53.3 6,52.6 7,52 Z"),f(u,"class","svelte-v4nd4s"),p(u,"active",e[0][3]),f(g,"d","m 17,40 -3,3 v 8 l 3,2 c 0,0 1,-1 1,-3 v -7 c 0,-2 -1,-3 -1,-3 z"),f(g,"class","svelte-v4nd4s"),p(g,"active",e[0][2]),f(m,"d","m 3,40 3,3 v 8 L 3,53 C 3,53 2,52 2,50 v -7 c 0,-2 1,-3 1,-3 z"),f(m,"class","svelte-v4nd4s"),p(m,"active",e[0][1]),f($,"d","m 4,39 3,3 h 6 l 3,-3 c 0,0 -1,-1 -3,-1 H 7 c -2,0 -3,1 -3,1 z"),f($,"class","svelte-v4nd4s"),p($,"active",e[0][0]),f(s,"transform","translate(-2,-38)"),f(n,"class","digital-digit svelte-v4nd4s"),f(n,"viewBox","0 0 16 32"),f(n,"xmlns","http://www.w3.org/2000/svg")},m(t,e){a(t,n,e),c(n,s),c(s,o),c(s,l),c(s,i),c(s,u),c(s,g),c(s,m),c(s,$)},p(t,[e]){1&e&&p(o,"active",t[0][6]),1&e&&p(l,"active",t[0][5]),1&e&&p(i,"active",t[0][4]),1&e&&p(u,"active",t[0][3]),1&e&&p(g,"active",t[0][2]),1&e&&p(m,"active",t[0][1]),1&e&&p($,"active",t[0][0])},i:t,o:t,d(t){t&&r(n)}}}function D(t,e,n){let s,{digit:o}=e,l=[[1,1,1,0,1,1,1],[0,0,1,0,0,1,0],[1,0,1,1,1,0,1],[1,0,1,1,0,1,1],[0,1,1,1,0,1,0],[1,1,0,1,0,1,1],[1,1,0,1,1,1,1],[1,0,1,0,0,1,0],[1,1,1,1,1,1,1],[1,1,1,1,0,1,1],[0,0,0,0,0,0,0]];return t.$$set=t=>{"digit"in t&&n(1,o=t.digit)},t.$$.update=()=>{2&t.$$.dirty&&n(0,s="!"==o?l[10]:l[parseInt(o)])},[s,o]}class M extends Z{constructor(t){var e;super(),document.getElementById("svelte-v4nd4s-style")||((e=i("style")).id="svelte-v4nd4s-style",e.textContent="svg.svelte-v4nd4s{grid-row:1}path.svelte-v4nd4s{opacity:0.125;transition:all 0.3s ease-out}path.active.svelte-v4nd4s{opacity:1}.digital-digit.svelte-v4nd4s{width:100%}",c(document.head,e)),P(this,t,D,q,l,{digit:1})}}function V(t,e,n){const s=t.slice();return s[2]=e[n],s}function F(t){let e,n,s=[...t[0]],o=[];for(let e=0;e<s.length;e+=1)o[e]=G(V(t,s,e));const l=t=>L(o[t],1,1,(()=>{o[t]=null}));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=u()},l(t){for(let e=0;e<o.length;e+=1)o[e].l(t);e=u()},m(t,s){for(let e=0;e<o.length;e+=1)o[e].m(t,s);a(t,e,s),n=!0},p(t,n){if(1&n){let c;for(s=[...t[0]],c=0;c<s.length;c+=1){const l=V(t,s,c);o[c]?(o[c].p(l,n),I(o[c],1)):(o[c]=G(l),o[c].c(),I(o[c],1),o[c].m(e.parentNode,e))}for(z(),c=s.length;c<o.length;c+=1)l(c);j()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)I(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)L(o[t]);n=!1},d(t){!function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(o,t),t&&r(e)}}}function G(t){let e,n,s;return n=new M({props:{digit:t[2]}}),{c(){var t;e=i("span"),(t=n.$$.fragment)&&t.c(),this.h()},l(t){e=v(t,"SPAN",{class:!0});var s,o,l=h(e);s=n.$$.fragment,o=l,s&&s.l(o),l.forEach(r),this.h()},h(){f(e,"class","svelte-y95aey")},m(t,o){a(t,e,o),O(n,e,null),s=!0},p(t,e){const s={};1&e&&(s.digit=t[2]),n.$set(s)},i(t){s||(I(n.$$.fragment,t),s=!0)},o(t){L(n.$$.fragment,t),s=!1},d(t){t&&r(e),T(n)}}}function J(t){let e,n,s=void 0!==t[0]&&F(t);return{c(){e=i("div"),s&&s.c(),this.h()},l(t){e=v(t,"DIV",{class:!0});var n=h(e);s&&s.l(n),n.forEach(r),this.h()},h(){f(e,"class","digital-number svelte-y95aey")},m(t,o){a(t,e,o),s&&s.m(e,null),n=!0},p(t,[n]){void 0!==t[0]?s?(s.p(t,n),1&n&&I(s,1)):(s=F(t),s.c(),I(s,1),s.m(e,null)):s&&(z(),L(s,1,1,(()=>{s=null})),j())},i(t){n||(I(s),n=!0)},o(t){L(s),n=!1},d(t){t&&r(e),s&&s.d()}}}function K(t,e,n){let{value:s}=e,{min:o}=e;return t.$$set=t=>{"value"in t&&n(0,s=t.value),"min"in t&&n(1,o=t.min)},t.$$.update=()=>{3&t.$$.dirty&&void 0!==s&&(n(0,s=String(s)),o&&n(0,s=s.padStart(o,"!")))},[s,o]}return class extends Z{constructor(t){var e;super(),document.getElementById("svelte-y95aey-style")||((e=i("style")).id="svelte-y95aey-style",e.textContent=".digital-number.svelte-y95aey{display:flex}span.svelte-y95aey{padding-left:5%;padding-right:5%}",c(document.head,e)),P(this,t,K,J,l,{value:0,min:1})}}}));