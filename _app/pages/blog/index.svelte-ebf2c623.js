import{S,i as q,s as x,e as b,t as y,k as w,c as g,a as E,h as P,d as f,m as k,b as B,g as v,F as m,j as L,n as j,L as A}from"../../chunks/index-df0c0336.js";function H(r,l,i){const o=r.slice();return o[1]=l[i],o}function M(r){let l,i,o,n=r[1].meta.title+"",_,p,c,h=r[1].meta.date+"",a,e;return{c(){l=b("li"),i=b("h2"),o=b("a"),_=y(n),c=y(`\r
        Published `),a=y(h),e=w(),this.h()},l(s){l=g(s,"LI",{});var t=E(l);i=g(t,"H2",{});var u=E(i);o=g(u,"A",{href:!0});var d=E(o);_=P(d,n),d.forEach(f),u.forEach(f),c=P(t,`\r
        Published `),a=P(t,h),e=k(t),t.forEach(f),this.h()},h(){B(o,"href",p=r[1].path)},m(s,t){v(s,l,t),m(l,i),m(i,o),m(o,_),m(l,c),m(l,a),m(l,e)},p(s,t){t&1&&n!==(n=s[1].meta.title+"")&&L(_,n),t&1&&p!==(p=s[1].path)&&B(o,"href",p),t&1&&h!==(h=s[1].meta.date+"")&&L(a,h)},d(s){s&&f(l)}}}function C(r){let l,i,o,n,_,p,c,h=r[0],a=[];for(let e=0;e<h.length;e+=1)a[e]=M(H(r,h,e));return{c(){l=b("h1"),i=y("Blog"),o=w(),n=b("p"),_=y("My dev blog posts will appear here eventually\u2026"),p=w(),c=b("ul");for(let e=0;e<a.length;e+=1)a[e].c()},l(e){l=g(e,"H1",{});var s=E(l);i=P(s,"Blog"),s.forEach(f),o=k(e),n=g(e,"P",{});var t=E(n);_=P(t,"My dev blog posts will appear here eventually\u2026"),t.forEach(f),p=k(e),c=g(e,"UL",{});var u=E(c);for(let d=0;d<a.length;d+=1)a[d].l(u);u.forEach(f)},m(e,s){v(e,l,s),m(l,i),v(e,o,s),v(e,n,s),m(n,_),v(e,p,s),v(e,c,s);for(let t=0;t<a.length;t+=1)a[t].m(c,null)},p(e,[s]){if(s&1){h=e[0];let t;for(t=0;t<h.length;t+=1){const u=H(e,h,t);a[t]?a[t].p(u,s):(a[t]=M(u),a[t].c(),a[t].m(c,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=h.length}},i:j,o:j,d(e){e&&f(l),e&&f(o),e&&f(n),e&&f(p),e&&f(c),A(a,e)}}}const U=async({fetch:r})=>({props:{posts:await(await r("/api/posts")).json()}});function F(r,l,i){let{posts:o}=l;return r.$$set=n=>{"posts"in n&&i(0,o=n.posts)},[o]}class z extends S{constructor(l){super(),q(this,l,F,C,x,{posts:0})}}export{z as default,U as load};
