(this.webpackJsonpttt=this.webpackJsonpttt||[]).push([[0],{65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},75:function(e,t,c){},79:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),r=c(48),a=c.n(r),s=(c(65),c(66),c(15)),j=c(107),o=(c(67),c(106)),h=c(1);var b=function(e){return Object(h.jsx)(o.a,{sx:{boxShadow:3,borderRadius:3,p:2,minWidth:10,height:100,margin:1},children:Object(h.jsx)(o.a,{sx:{color:"text.primary"},children:Object(h.jsx)(j.a,{style:{borderRadius:"16px",height:"70px",width:"30px"},children:Object(h.jsx)("h1",{className:"O"===e.character?"red":"blue",children:e.character})})})})},d=c(104),l=c(102),x=(c(75),function(){var e=[" "," "," "," "," "," "," "," "," "],t=Object(n.useState)(e),c=Object(s.a)(t,2),i=c[0],r=c[1],a=Object(n.useState)(!0),o=Object(s.a)(a,2),x=o[0],O=o[1],u=Object(n.useState)(!1),f=Object(s.a)(u,2),m=f[0],v=f[1],g=Object(n.useState)(""),p=Object(s.a)(g,2),y=p[0],S=p[1],w=function(e){if(!m){var t=i;if(x&&" "===i[e])t[e]="X";else{if(" "!==i[e])return;t[e]="O"}r(t),O(!x),i.includes(" ")||S("Match is Draw"),function(e){var t=x?"X":"O";if(i[e]===t&&i[(e+3)%9]===t&&i[(e+6)%9]===t)return!0;var c=e>2?3:0;return i[e%3+(c=e>5?6:c)]===t&&i[(e+1)%3+c]===t&&i[(e+2)%3+c]===t||i[0]===t&&i[4]===t&&i[8]===t||i[2]===t&&i[4]===t&&i[6]===t}(e)&&(v(!0),S("".concat(x?"X":"O"," Wins")))}},C=y;return Object(h.jsx)("div",{children:Object(h.jsx)(d.a,{spacing:2,justify:"center",children:Object(h.jsx)(d.a,{item:!0,xs:12,children:Object(h.jsxs)("div",{className:"Board",children:[i.map((function(e,t){return Object(h.jsx)("span",{onClick:function(){w(t)},children:Object(h.jsx)(b,{character:e})},t)})),Object(h.jsx)(d.a,{item:!0,xs:11,style:{margin:"10px"},children:y.length>0?"Match is Draw"===y?Object(h.jsx)(l.a,{icon:!1,severity:"error",justify:"center",children:C}):Object(h.jsx)(l.a,{icon:!1,severity:"info",children:C}):Object(h.jsx)("p",{})}),Object(h.jsx)(d.a,{item:!0,xs:4,style:{margin:"0 0 0 37%"},children:Object(h.jsx)(j.a,{variant:"outlined",onClick:function(){v(!1),r(e),S("")},children:"Reset"})})]})})})})}),O=c(105),u=c(109),f=c(110),m=c(111),v=c(112),g=c(53),p=c.n(g);var y=function(){return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)(u.a,{}),Object(h.jsx)(f.a,{position:"relative",children:Object(h.jsxs)(m.a,{children:[Object(h.jsx)(p.a,{}),Object(h.jsx)(v.a,{variant:"h6",children:"Tic Tac Toe"})]})}),Object(h.jsx)("main",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(O.a,{maxWidth:"md",justify:"center",children:Object(h.jsx)(v.a,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Welcome to tic tac toe"})}),Object(h.jsx)(O.a,{children:Object(h.jsx)(x,{})})]})})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,113)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),S()}},[[79,1,2]]]);
//# sourceMappingURL=main.ba5ce1f5.chunk.js.map