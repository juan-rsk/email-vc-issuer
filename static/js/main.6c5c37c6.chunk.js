(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{237:function(e,t,n){},252:function(e,t){},292:function(e,t){},294:function(e,t){},303:function(e,t){},305:function(e,t){},331:function(e,t){},332:function(e,t){},337:function(e,t){},339:function(e,t){},346:function(e,t){},358:function(e,t){},551:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(12),c=n.n(r),i=n(228),s=n.n(i),o=(n(237),n(23)),l=n(229),d=n.n(l),b=n(230),j=n.n(b),u=n(231),h=n.n(u),f=function(){return Object(a.jsx)("nav",{className:"navbar navbar-expand-md navbar-light bg-light fixed-top",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("a",{className:"navbar-brand",href:"https://rifos.org",target:"_blank",rel:"noreferrer",children:Object(a.jsx)("img",{src:"https://rifos.org/assets/img/logo.svg",className:"logo",alt:"logo"})}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarsExampleDefault",children:Object(a.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link",href:"https://developers.rsk.co/rif/identity",target:"_blank",rel:"noreferrer",children:"RIF Identity docs"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link",href:"https://github.com/rsksmart/email-vc-issuer",target:"_blank",rel:"noreferrer",children:"Github"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link",href:"https://developers.rsk.co/rif/identity/about",target:"_blank",rel:"noreferrer",children:"Contact"})})]})})]})})},p="https://email-vc-issuer.staging.rifcomputing.net",m=new d.a({cachedProvider:!1,providerOptions:{walletconnect:{package:j.a,options:{rpc:{1:"https://mainnet.infura.io/v3/8043bb2cf99347b1bfadfb233c5325c0",30:"https://public-node.rsk.co",31:"https://public-node.testnet.rsk.co"}}}},supportedChains:[31]}),O=function(e){return function(t){return e(t.target.value)}},g=function(e){return"did:ethr:rsk:testnet:".concat(e)};var v=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(null),s=Object(o.a)(i,2),l=s[0],d=s[1],b=Object(r.useState)(null),j=Object(o.a)(b,2),u=j[0],v=j[1],x=Object(r.useState)(""),y=Object(o.a)(x,2),N=y[0],k=y[1],S=Object(r.useState)(""),C=Object(o.a)(S,2),w=C[0],E=C[1],F=Object(r.useState)(!1),I=Object(o.a)(F,2),P=I[0],V=I[1],_=Object(r.useState)(""),q=Object(o.a)(_,2),T=q[0],D=q[1],B=Object(r.useState)(""),J=Object(o.a)(B,2),R=J[0],A=J[1],M=Object(r.useState)(!1),G=Object(o.a)(M,2),L=G[0],U=G[1],W=N?g(N):"",z=function(e){return c(e?e.message:"Unhandled error")};return Object(a.jsxs)("div",{children:[Object(a.jsx)(f,{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("h1",{children:"Email VC Issuer"}),n&&Object(a.jsxs)("p",{children:["Error: ",n]}),Object(a.jsx)("h3",{children:"1. Enable wallet"}),Object(a.jsx)("button",{onClick:function(){return m.connect().then((function(e){d(e),e.request({method:"eth_accounts"}).then((function(t){k(t[0]);var n=g(t[0]);console.log(n);var a=new h.a({serviceUrl:"https://identity.staging.rifcomputing.net",serviceDid:"did:ethr:rsk:testnet:0x285B30492a3F444d78f75261A35cB292Fc8F41A6",did:n,rpcPersonalSign:function(n){return e.request({method:"personal_sign",params:[t[0],n]})}});v(a)}))})).catch(z)},className:"btn btn-primary",children:"enable"}),Object(a.jsx)("p",{children:N}),Object(a.jsx)("p",{children:W})," ",Object(a.jsx)("h3",{children:"2. Request email verification"}),Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("input",{type:"email",value:w,onChange:O(E),disabled:!N,placeholder:"Email address",className:"form-control"}),Object(a.jsx)("div",{className:"input-group-append",children:Object(a.jsx)("button",{id:"request",onClick:function(){return fetch("".concat(p,"/requestVerification/")+W,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({emailAddress:w})}).then((function(){V(!0)})).catch(z)},disabled:!N,className:"btn btn-primary",children:"request"})})]}),Object(a.jsx)("p",{children:P&&"Email sent"}),Object(a.jsx)("h3",{children:"3. Verify your email"}),Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("input",{type:"text",value:T,onChange:O(D),disabled:!P,placeholder:"Verification code",className:"form-control"}),Object(a.jsx)("div",{className:"input-group-append",children:Object(a.jsx)("button",{onClick:function(){return l.request({method:"personal_sign",params:[N,"Verification code: ".concat(T)]}).then((function(e){return fetch("".concat(p,"/verify/")+W,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({sig:e})})})).then((function(e){return e.json()})).then((function(e){var t=e.jwt;A(t)})).catch(z)},disabled:!P,className:"btn btn-primary",children:"verify"})})]}),Object(a.jsx)("p",{style:{wordWrap:"break-word"},children:R}),Object(a.jsx)("h3",{children:"4. Store it in your Data Vault"}),Object(a.jsx)("button",{onClick:function(){return u.create({key:"EmailVerifiableCredential",content:R}).then((function(){U(!0)})).catch(z)},disabled:!R,className:"btn btn-primary",children:"save"}),Object(a.jsx)("p",{style:{wordWrap:"break-word"},children:L&&"Saved!"}),Object(a.jsx)("h3",{children:"5. Validate in RIF Id Manager"}),Object(a.jsxs)("p",{children:["Go to the ",Object(a.jsx)("a",{href:"https://rsksmart.github.io/rif-identity-manager/",target:"_blank",rel:"noreferrer",children:"RIF Identity Manager"})]})]})})})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,553)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),x()}},[[551,1,2]]]);
//# sourceMappingURL=main.6c5c37c6.chunk.js.map