import{S as t,i as s,s as a,a as e,e as n,t as o,q as i,d as c,c as l,b as r,f as h,g as u,h as f,k as m,l as d,m as p,n as v}from"./client.276fc236.js";function g(t){let s,a,g,j,E,H,$=t[0].title+"",b=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),j=o($),E=e(),H=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(c),a=l(t),g=r(t,"H1",{});var s=h(g);j=u(s,$),s.forEach(c),E=l(t),H=r(t,"DIV",{class:!0}),h(H).forEach(c),this.h()},h(){f(H,"class","content svelte-emm3f3")},m(t,s){m(t,a,s),m(t,g,s),d(g,j),m(t,E,s),m(t,H,s),H.innerHTML=b},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&$!==($=t[0].title+"")&&p(j,$),1&a&&b!==(b=t[0].html+"")&&(H.innerHTML=b)},i:v,o:v,d(t){t&&c(a),t&&c(g),t&&c(E),t&&c(H)}}}async function j({params:t}){const s=await this.fetch(`blog/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function E(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}class H extends t{constructor(t){super(),s(this,t,E,g,a,{post:0})}}export{H as default,j as preload};