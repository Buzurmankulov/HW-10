(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={login:"Login_login__3mQl6",control:"Login_control__2O8vc",invalid:"Login_invalid__1vVG5",actions:"Login_actions__21QyZ"}},,,function(e,t,n){e.exports={card:"Card_card__3-IkM"}},function(e,t,n){e.exports={button:"Button_button__1yBiT"}},function(e,t,n){e.exports={home:"Home_home__O2vn5"}},function(e,t,n){e.exports={nav:"Navigation_nav__2Pd9h"}},function(e,t,n){e.exports={"main-header":"MainHeader_main-header__3TKs7"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(5),i=n.n(a),s=(n(15),n(2)),l=n(6),r=n.n(l),u=n(0),j=function(e){return Object(u.jsx)("div",{className:"".concat(r.a.card," ").concat(e.className),children:e.children})},d=n(3),b=n.n(d),h=n(7),O=n.n(h),g=function(e){return Object(u.jsx)("button",{type:e.type||"button",className:"".concat(O.a.button," ").concat(e.className),onClick:e.onClick,disabled:e.disabled,children:e.children})},m=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),o=n[0],a=n[1],i=Object(c.useState)(),l=Object(s.a)(i,2),r=l[0],d=l[1],h=Object(c.useState)(""),O=Object(s.a)(h,2),m=O[0],x=O[1],f=Object(c.useState)(),v=Object(s.a)(f,2),_=v[0],p=v[1],L=Object(c.useState)(!1),N=Object(s.a)(L,2),y=N[0],S=N[1];Object(c.useEffect)((function(){var e=setTimeout((function(){console.log("hello"),S(o.includes("@")&&m.trim().length>6)}),1500);return function(){console.log("CkeapUP"),clearTimeout(e)}}),[o,m]);return Object(u.jsx)(j,{className:b.a.login,children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onLogin(o,m)},children:[Object(u.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===r?b.a.invalid:""),children:[Object(u.jsx)("label",{htmlFor:"email",children:"E-Mail"}),Object(u.jsx)("input",{type:"email",id:"email",value:o,onChange:function(e){a(e.target.value)},onBlur:function(){d(o.includes("@"))}})]}),Object(u.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===_?b.a.invalid:""),children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{type:"password",id:"password",value:m,onChange:function(e){x(e.target.value),S(e.target.value.trim().length>6&&o.includes("@"))},onBlur:function(){p(m.trim().length>6)}})]}),Object(u.jsx)("div",{className:b.a.actions,children:Object(u.jsx)(g,{type:"submit",className:b.a.btn,disabled:!y,children:"Login"})})]})})},x=n(8),f=n.n(x),v=function(e){return Object(u.jsx)(j,{className:f.a.home,children:Object(u.jsx)("h1",{children:"Welcome back!"})})},_=n(9),p=n.n(_),L=function(e){return Object(u.jsx)("nav",{className:p.a.nav,children:Object(u.jsxs)("ul",{children:[e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Users"})}),e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Admin"})}),e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:e.onLogout,children:"Logout"})})]})})},N=n(10),y=n.n(N),S=function(e){return Object(u.jsxs)("header",{className:y.a["main-header"],children:[Object(u.jsx)("h1",{children:"A Typical Page"}),Object(u.jsx)(L,{isLoggedIn:e.isAuthenticated,onLogout:e.onLogout})]})};var k=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(0),l=Object(s.a)(i,2),r=l[0];l[1],Object(c.useEffect)((function(){console.log("hello adedd"),console.log(r)}),[r]);var j=function(){a(!1)};return Object(u.jsxs)(o.a.Fragment,{children:[Object(u.jsx)(S,{isAuthenticated:n,onLogout:j}),Object(u.jsxs)("main",{children:[!n&&Object(u.jsx)(m,{onLogin:function(e,t){localStorage.removeItem("isLogin"),a(!0)}}),n&&Object(u.jsx)(v,{onLogout:j})]})]})};i.a.render(Object(u.jsx)(k,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.4b33cb60.chunk.js.map