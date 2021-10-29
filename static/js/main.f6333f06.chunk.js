(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{183:function(e,n,t){},187:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),i=t(8),a=t.n(i),o=t(61),s=t(5),l=t(13),d=t(37);var u=function(e){var n={};return e.keys().forEach((function(t){n[t.replace("./","")]=e(t)})),n}(t(68));var f,b,p,m,j,h,g,x,O,v,y,w,S,C,k,z,L,R,E=t(56),B=t.n(E),F=t(38),N=t.n(F),G=t(57),I=t.n(G),M=t(2),U=t(3),D=Object(U.a)(f||(f=Object(M.a)(['\n  *,\n  *::before,\n  *:after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  :root {\n    --light-text-color: #fff;\n    --dark-text-color: #2c2c2c;\n  }\n\n  body {\n    font-family: \'Rock Salt\', cursive, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n']))),J=U.b.div(b||(b=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n"]))),W=U.b.header(p||(p=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  height: 100px;\n  background: #5b5c5a;\n"]))),P=U.b.h1(m||(m=Object(M.a)(["\n  margin: 0 auto 0 1ch;\n  color: var(--light-text-color);\n  font-size: 1rem;\n  letter-spacing: 0.5ch;\n\n  @media (min-width: 640px) {\n    font-size: 1.5rem;\n  }\n\n  @media (min-width: 1400px) {\n    font-size: 3rem;\n  }\n"]))),T=U.b.main(j||(j=Object(M.a)(["\n  flex: 1 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 2rem;\n  background: #f4f3cd;\n"]))),_=t(189),A=(t(183),t(1)),H=U.b.span(h||(h=Object(M.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2ch;\n"]))),K=function(e){var n=e.children,t=Object(r.useState)(!1),c=Object(l.a)(t,2),i=c[0],a=c[1],o=Object(r.useRef)(null),s=Object(r.useRef)();Object(r.useEffect)((function(){s.current=n}),[n]),function(e,n){var t=Object(r.useRef)(!1);Object(r.useEffect)((function(){if(t.current)return e();t.current=!0}),n)}((function(){a(!0)}),[n]);return Object(A.jsx)(_.a,{in:i,timeout:500,classNames:"number-update",nodeRef:o,onEntered:function(){a(!1)},children:Object(A.jsx)(H,{ref:o,style:{"--number-animation-duration":"".concat(500,"ms")},children:n})})},Y=U.b.div(g||(g=Object(M.a)(["\n  margin-right: auto;\n  font-size: 0.5rem;\n  color: var(--light-text-color);\n\n  @media (min-width: 1000px) {\n    font-size: 1rem;\n  }\n\n  @media (min-width: 1400px) {\n    font-size: 1.5rem;\n  }\n"]))),q=U.b.div(x||(x=Object(M.a)(["\n  display: inline-block;\n  & + & {\n    padding-left: 1rem;\n    margin-left: 1rem;\n    border-left: 3px solid var(--light-text-color);\n  }\n"]))),Q=function(e){var n=e.score,t=n.bestScore,r=n.currentScore;return Object(A.jsxs)(Y,{children:[Object(A.jsxs)(q,{children:["Current Score: ",Object(A.jsx)(K,{children:r})]}),Object(A.jsxs)(q,{children:["Best Score: ",Object(A.jsx)(K,{children:t})]})]})},V=t(62),X=U.b.ul(O||(O=Object(M.a)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 80%;\n"]))),Z=function(e){var n=e.children,t=Object(V.a)(e,["children"]);return Object(A.jsx)(X,Object(s.a)(Object(s.a)({},t),{},{children:n}))},$=U.b.article(v||(v=Object(M.a)(["\n  --base-size: 230px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: calc(2 / 3 * var(--base-size));\n  height: var(--base-size);\n  margin: 0 2rem 2rem 0;\n  background: linear-gradient(to top, #a1c4fd 0%, #c2e9fb 100%);\n  transition: transform 0.07s ease-in;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n    box-shadow: 2px 2px 10px 2px #fff;\n  }\n"]))),ee=U.b.h2(y||(y=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  order: 2;\n  font-size: 1rem;\n  text-align: center;\n  letter-spacing: 0.3ch;\n  color: var(--dark-text-color);\n  border-top: 2px solid rgba(0, 0, 0, 0.2);\n"]))),ne=U.b.img(w||(w=Object(M.a)(["\n  max-width: 100%;\n  padding: 1rem;\n  object-fit: cover;\n"]))),te=function(e){var n=e.card,t=n.id,c=n.name,i=n.url,a=e.selectCard,o=Object(r.useRef)(),s=function(){o.current.blur(),a(t)};return Object(A.jsxs)($,{tabIndex:0,ref:o,onClick:s,onKeyPress:function(e){"Space"===e.code&&s()},children:[Object(A.jsx)(ee,{children:c}),Object(A.jsx)(ne,{src:i})]})},re=U.b.p(S||(S=Object(M.a)(["\n  margin-right: auto;\n  font-size: 0.5rem;\n  color: var(--light-text-color);\n\n  @media (min-width: 700px) {\n    font-size: 1rem;\n  }\n\n  @media (min-width: 1400px) {\n    font-size: 1.5rem;\n  }\n"]))),ce=function(e){var n=e.currentLevel;return Object(A.jsxs)(re,{children:["Level ",Object(A.jsx)(K,{children:n})]})},ie=U.b.div(C||(C=Object(M.a)(["\n  color: green;\n  cursor: pointer;\n  animation: pulse 2s infinite;\n\n  @keyframes pulse {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.2);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n"]))),ae=U.b.p(k||(k=Object(M.a)(["\n  font-size: 6rem;\n  font-weight: bold;\n"]))),oe=U.b.p(z||(z=Object(M.a)(["\n  font-size: 1rem;\n  text-align: center;\n"]))),se=function(e){var n=e.onClick;return Object(A.jsxs)(ie,{onClick:n,children:[Object(A.jsx)(ae,{children:"You Got 'Em!"}),Object(A.jsx)(oe,{children:"Click To Restart"})]})},le=U.b.footer(L||(L=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  height: 5ch;\n  padding-left: 1rem;\n  color: var(--dark-text-color);\n  background: #aaa;\n"]))),de=function(){return Object(A.jsxs)(le,{children:["Icons made by\xa0",Object(A.jsx)("a",{href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons",children:"Smashicons"}),"\xa0from\xa0",Object(A.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})},ue=(R=d,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R.slice(),t=[4,6,8,10],r=function(e,n){for(var t=[],r=n.slice(),c=function(e){var n=I()(r);t.push(n),r=r.filter((function(e){return e.id!==n.id}))},i=0;i<e;i++)c();return t};return r(t[e-1],n)});var fe=function(){var e=function(){return{bestScore:0,currentScore:0,currentLevel:1,selectedCards:[],currentLevelCards:ue(1),isGameWon:!1}},n=Object(r.useState)(e),t=Object(l.a)(n,2),c=t[0],i=t[1],a=function(e){c.selectedCards.map((function(e){return e.id})).includes(e)?i((function(e){return Object(s.a)(Object(s.a)({},e),{},{currentScore:0,currentLevel:1,selectedCards:[],currentLevelCards:ue(1)})})):i((function(n){var t=n.bestScore,r=n.currentScore,c=n.currentLevel,i=n.selectedCards,a=n.currentLevelCards,u=r+1,f=t<u?u:t,b=d.find((function(n){return n.id===e})),p=[].concat(Object(o.a)(i),[b]),m=B()(N()(p,["id"]),N()(a,["id"])),j=m?[]:p,h=m?c<4?[c+1,ue(c+1),!1]:[c,[],!0]:[c,ue(c,a),!1],g=Object(l.a)(h,3),x=g[0],O=g[1],v=g[2];return Object(s.a)(Object(s.a)({},n),{},{currentScore:u,bestScore:f,currentLevel:x,selectedCards:j,currentLevelCards:O,isGameWon:v})}))},f={bestScore:c.bestScore,currentScore:c.currentScore};return Object(A.jsxs)(J,{children:[Object(A.jsx)(D,{}),Object(A.jsxs)(W,{children:[Object(A.jsx)(P,{children:"Food Memory"}),Object(A.jsx)(ce,{currentLevel:c.currentLevel}),Object(A.jsx)(Q,{score:f})]}),Object(A.jsx)(T,{children:c.isGameWon?Object(A.jsx)(se,{onClick:function(){i(e)}}):Object(A.jsx)(Z,{children:c.currentLevelCards.map((function(e){return Object(A.jsx)(te,{card:Object(s.a)(Object(s.a)({},e),{},{url:(n=e.url,u[n].default)}),selectCard:a},e.id);var n}))})}),Object(A.jsx)(de,{})]})};a.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(fe,{})}),document.getElementById("root"))},37:function(e){e.exports=JSON.parse('[{"id":1,"name":"Apple","url":"apple.png"},{"id":2,"name":"Baguette","url":"baguette.png"},{"id":3,"name":"Broccoli","url":"broccoli.png"},{"id":4,"name":"Carrot","url":"carrot.png"},{"id":5,"name":"Cheese","url":"cheese.png"},{"id":6,"name":"Coffee","url":"coffee.png"},{"id":7,"name":"Lemon","url":"lemon.png"},{"id":8,"name":"Pineapple","url":"pineapple.png"},{"id":9,"name":"Raspberry","url":"raspberry.png"},{"id":10,"name":"Sandwich","url":"sandwich.png"}]')},68:function(e,n,t){var r={"./apple.png":69,"./baguette.png":70,"./broccoli.png":71,"./carrot.png":72,"./cheese.png":73,"./coffee.png":74,"./lemon.png":75,"./pineapple.png":76,"./raspberry.png":77,"./sandwich.png":78};function c(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=i,e.exports=c,c.id=68},69:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/apple.d132a04d.png"},70:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/baguette.bd46ed62.png"},71:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/broccoli.1f0b9078.png"},72:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/carrot.39444b33.png"},73:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/cheese.d89c61d3.png"},74:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/coffee.a94bb8bf.png"},75:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/lemon.a253725d.png"},76:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/pineapple.1c3aad6e.png"},77:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/raspberry.f3072f5d.png"},78:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/sandwich.d99dc8db.png"}},[[187,1,2]]]);
//# sourceMappingURL=main.f6333f06.chunk.js.map